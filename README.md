# ScholarBridge Research Consultancy

A static, responsive consultancy website based on the supplied ScholarBridge archive. It includes four research projects, individual printable research posters, methodology and software services, educational resources, and a consultation enquiry form.

## Technology and local use

The site uses plain HTML, CSS and browser JavaScript with no package installation or build step. Netlify publishes `public/`, as configured in `netlify.toml`.

For local browsing, run `python3 -m http.server 8080 --directory public` and open `http://localhost:8080`. Direct form processing requires a deployed Netlify site; a basic local server does not emulate it.

## Enquiries and consultation requests

Netlify Forms handles the `research-enquiry` form. Its static registration lives in `public/__forms.html`; the visible form is rendered by `public/assets/app.js`. Submissions include optional preferred date, time and time zone. A requested date is not a confirmed appointment.

Form detection was enabled through the platform feature marker. Automatic email notification configuration for the supplied business address was attempted but rejected as unauthorized. Inbox delivery is not configured; a project administrator with sufficient access must add an email notification for form submissions. No end-to-end form or email delivery test was performed before deployment.

The existing Netlify domain is retained. No testimonials have been added because no genuine, permissioned client feedback was supplied.

## Content and integrity

The four research stage labels follow the uploaded source: editorial review, advanced draft, data/model verification, and research design. These do not claim publication or verified empirical results. Poster designs are original HTML/CSS summaries of the supplied material; unpublished manuscripts and private datasets are not included. Open a poster and choose **Print / Save as PDF** for a print layout.

## Version 3

The upgraded site remains static and publishes `public/` without a build. Full static page content supports search engines and visitors without JavaScript. Shared content and enhanced interactions live in `public/assets/app.js`; after editing shared content, run `node scripts/render-static.cjs` to refresh the committed HTML and synchronized form definition. Maintain individual SEO descriptions in that script. See [deployment and QA notes](DEPLOYMENT-QA.md) for delivered features, archive instructions and outstanding live verification.
