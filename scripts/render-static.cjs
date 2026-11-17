const fs=require('fs'), vm=require('vm');
const dir=require('path').resolve(__dirname,'../public');
const source=fs.readFileSync(dir+'/assets/app.js','utf8');
const originals=fs.readdirSync(dir).filter(x=>x.endsWith('.html')&&x!=='__forms.html');
const extra=['book-consultation','posters','confidentiality','research-methodology','statistical-analysis','questionnaire-development','systematic-literature-review','manuscript-editing','doctoral-mentoring'].map(x=>x+'.html');
const pages=[...new Set([...originals,...extra])];
const descriptions={
'index.html':'Ethical research consultancy in the UAE for international researchers. Explore methodology, statistical analysis, systematic reviews and consultation requests.',
'about.html':'Discover ScholarBridge’s mission, approach, expertise profile and commitments to independent scholarship, confidentiality and international support.',
'services.html':'Explore six research consultancy services: methodology, statistical analysis, questionnaires, systematic reviews, manuscript editing and doctoral mentoring.',
'book-consultation.html':'Request a research, statistics, literature review, manuscript or doctoral mentoring consultation. Suggest a date, time and time zone for personal confirmation.',
'contact.html':'Send ScholarBridge a research enquiry directly through the website. Share your project, service needs and deadline, or contact us on WhatsApp.',
'portfolio.html':'Explore four illustrative research projects in AI, sustainable logistics, supply chains, digital connectivity and food loss, with research stages disclosed.',
'posters.html':'View ScholarBridge’s illustrative research poster gallery. Each summary explains the research focus, methods and stage without unpublished numerical findings.',
'confidentiality.html':'Read ScholarBridge’s draft research confidentiality policy covering document sharing, agreed access, retention, disclosure permissions and research material.',
'privacy.html':'Read the draft privacy notice for ScholarBridge research enquiries: collected fields, Netlify Forms processing, retention, providers and privacy requests.',
'integrity.html':'Explore ScholarBridge’s academic integrity standards: independent research, transparent stages, ethical consulting and no ghostwriting or fabricated findings.',
 'terms.html':'Review draft terms for ScholarBridge consultancy enquiries, scope approval, fees, responsibilities and publication outcome limitations.',
'faq.html':'Answers about ScholarBridge services, international consultations, quotations, academic integrity, publication limitations and provisional booking requests.',
'insights.html':'Practical research guides on methodology selection, responsible PLS-SEM interpretation and transparent systematic literature review workflows.',
};
for(const filename of pages){
 let markup='',title='';
 const el={addEventListener(){},classList:{remove(){},toggle(){return false}},setAttribute(){}};
 const document={getElementById(id){if(id==='app')return {set innerHTML(s){markup=s}};if(id==='contact-form')return null;return el},querySelectorAll(){return []},querySelector(){return null},set title(s){title=s}};
 vm.runInNewContext(source,{document,location:{pathname:'/'+filename,search:''},URLSearchParams,Date,encodeURIComponent,console});
 const h1=markup.match(/<h1>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g,' ').trim();
 const desc=descriptions[filename]||`${h1}. ${filename.startsWith('poster-')?'Illustrative research overview with methods and stage disclosures; no publication or authorship claim.':filename.startsWith('article-')?'An educational guide from ScholarBridge with practical considerations for responsible independent research.':'Explore scoped consultancy support from ScholarBridge, with ethical methods guidance and personal consultation confirmation.'}`;
 const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
 const canonical='https://scholarbridge-website.netlify.app'+(filename==='index.html'?'/':'/'+filename.replace('.html',''));
 const schema={'@context':'https://schema.org','@type':'ProfessionalService',name:'ScholarBridge Research Consultancy',url:'https://scholarbridge-website.netlify.app/',email:'scholarbridgeresearch1@gmail.com',telephone:'+971527177257',areaServed:['United Arab Emirates','Worldwide'],description:'Ethical research methodology, statistical analysis and scholarly communication consulting.'};
 const html=`<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#142e46"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${canonical}"><meta property="og:site_name" content="ScholarBridge Research Consultancy"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="website"><meta property="og:url" content="${canonical}">${filename==='thank-you.html'?'<meta name="robots" content="noindex">':''}<link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/style.css"><script type="application/ld+json">${JSON.stringify(schema)}</script></head><body><a href="#main" class="skip-link">Skip to content</a><div id="app">${markup}</div><script src="assets/app.js" defer></script></body></html>`;
 fs.writeFileSync(dir+'/'+filename,html);
}
const form=fs.readFileSync(dir+'/contact.html','utf8').match(/<form[\s\S]*?<\/form>/)[0];
fs.writeFileSync(dir+'/__forms.html','<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Enquiry form registration</title></head><body>'+form.replace('class="form-box"','hidden')+'</body></html>');
fs.writeFileSync(dir+'/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.filter(p=>p!=='thank-you.html').map(p=>'<url><loc>https://scholarbridge-website.netlify.app'+(p==='index.html'?'/':'/'+p.replace('.html',''))+'</loc></url>').join('')+'</urlset>\n');
fs.writeFileSync(dir+'/robots.txt','User-agent: *\nAllow: /\nDisallow: /__forms.html\nDisallow: /thank-you\nSitemap: https://scholarbridge-website.netlify.app/sitemap.xml\n');
console.log('Rendered '+pages.length+' static pages and synchronized form registration.');
