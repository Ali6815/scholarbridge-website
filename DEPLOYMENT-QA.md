# ScholarBridge Version 3 — delivery and verification

The existing static website was upgraded in place. All 18 existing public page routes were retained; nine pages were added for consultation requests, six service details, the poster gallery and research confidentiality. `public/` remains the complete publish folder, with no framework, package installation or build step required. The enquiry system uses Netlify Forms, not a custom database.

## Delivery

- Publish `public/` with the existing Netlify configuration. `ScholarBridge-V3.zip` contains the contents of this folder at the archive root, ready to extract and upload to Netlify. It does not contain repository configuration or private source archives.
- Business brochure: `public/assets/scholarbridge-brochure.pdf`, linked from Home, Services and the footer. It includes a WhatsApp QR code and no unapproved research-project excerpts.
- Existing illustrative HTML research posters remain available with stage disclosures. Distribution-ready poster PDFs were deliberately withheld because no rights-holder approval is documented. The print control prints an illustrative summary, not an approved publication.
- Static HTML contains the full page content, navigation and forms. JavaScript adds navigation and AJAX form behavior. `node scripts/render-static.cjs` is an optional maintenance utility to refresh static pages after changes to shared JavaScript content; it is not a deployment build requirement. Update descriptions in that utility when adding pages.

## Implemented and checked locally

All 27 public pages were checked at widths of 390, 768 and 1440 pixels: 81 page/viewport checks. No horizontal page overflow, missing visible input labels, multiple/missing H1 headings or browser JavaScript errors were found. A local scan resolved 904 internal links and asset references, including fragment anchors and the brochure. These checks included every retained page and every service page.

The form fields match the static registration definition: form-name, bot-field, name, email, phone, service, country, organization, level, deadline, consultation, subject (research field), date, time, timezone, message and consent. The original form name and field names were retained. Native required-field and email validation, consent, future consultation dates, deadline constraints, spam honeypot, disabled sending state and inline status messages are present. Browser checks verified invalid empty forms, correctly encoded payloads, retained input after a simulated server failure, and a receipt message after a simulated successful HTTP response. These were intercepted local tests and did not submit real data to production.

The mobile menu, WhatsApp number, business email and no-JavaScript content were checked. All 27 `.html`/extensionless route pairs produced matching titles. Additional browser checks rejected missing consent, invalid email, past consultation dates and past deadlines. Axe WCAG A/AA checks found no violations on Home, Book Consultation, Statistical Analysis, Posters and Privacy after contrast adjustments; automated checks do not replace a complete accessibility audit. The brochure was verified as a two-page PDF. All page shells have unique titles/descriptions, canonical URLs, Open Graph metadata, structured data, a skip link and one H1. The sitemap excludes form registration and receipt pages. Reduced-motion handling and keyboard focus states are present. No analytics or advertising scripts were added. The platform-provided social image remains in use.

## Required checks after deployment

1. Open the deployed site and check Contact and Book Consultation on mobile and desktop. Confirm both extensionless URLs and `.html` routes render the appropriate page.
2. In the site's Netlify Forms area, confirm `research-enquiry` is detected with the expanded field set. The form activation marker has been generated for deployment. A production form-registration API read was unavailable during this run, so live detection has not been verified.
3. Submit one clearly labeled, realistic QA enquiry using an email inbox you control and a full-sentence project description. Do not submit confidential documents or participant information. Confirm the receipt message appears only after sending succeeds.
4. Confirm that enquiry and all expected fields appear in Netlify Forms. If absent, inspect Spam before diagnosing a processing problem. A browser success response alone is not proof of dashboard storage.
5. Test missing consent, invalid email, past dates and a failed/offline request. Confirm entered details remain after a failed request, and the WhatsApp fallback opens a draft which still requires Send.
6. Configure an email submission notification addressed to scholarbridgeresearch1@gmail.com in Netlify's Forms notification settings. An earlier notification attempt was rejected as unauthorized; this upgrade did not retry it. Netlify may require the recipient to be an active team member. An authorized team administrator must resolve membership or notification permission issues before saving. Do not claim email notifications are active until a fresh submission arrives in that inbox; check spam/junk too. No external email delivery service is configured.
7. Download and open the brochure from Home and Services and scan its WhatsApp QR code. Poster PDFs require documented public-distribution approval before creating or adding download links.
8. Approve founder information and any genuine testimonials before replacing their honest empty states. Review the research stage labels against current records; the reported editorial-review stage requires confirmation. Obtain author permission before adding manuscript material or identifying project contributions.
9. Have the business owner and legal adviser review the privacy, terms, confidentiality and integrity drafts. Agree a specific enquiry-retention period and a suitable document-sharing method before accepting sensitive research material. No particular legal compliance is asserted.
10. For Google Search Console, verify ownership with its supplied DNS record or HTML verification file/meta tag, then submit `https://scholarbridge-website.netlify.app/sitemap.xml`. No verification token was supplied; indexing and rankings remain unverified.

## Optional future integration

No calendar service is connected. The consultation page collects preferred date, time, time zone and consultation type, and explicitly requires personal confirmation. A future scheduling provider can be added to that page without replacing the enquiry form; confirmed wording must depend on the provider's real booking confirmation. Public file uploads remain disabled until document security, access controls and retention are agreed. No custom domain change was made.
