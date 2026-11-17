# Project guidance

## Architecture

This is a static, no-build website. `netlify.toml` publishes only `public/`. Root documentation and uploaded source archives are outside the publish directory.

- `public/*.html`: page shells with static titles, descriptions and Open Graph metadata.
- `public/assets/app.js`: shared layout, route mapping, research project data, page content, form submission handling.
- `public/assets/style.css`: responsive layouts, editorial green/ivory identity, poster design and A4 print styles.
- `public/__forms.html`: static Netlify Forms registration; keep its field names synchronized with the visible form.
- `.netlify/features/netlify-forms`: activation marker managed by the platform.

## Conventions and decisions

Use plain JavaScript and CSS without adding a framework or build pipeline. Keep all published assets in `public/`. Both `.html` and extensionless URLs must map to the correct page in the client route lookup. Use accessible labels, keyboard focus and reduced-motion styles.

Research statuses come from the supplied portfolio and must never imply publication, acceptance, verified results or authorship beyond that source. Do not invent findings, testimonials, journal names, credentials or metrics. Keep stage disclosures visible on printed posters.

Consultation submissions are requests requiring personal confirmation. No calendar service is connected. Netlify Forms processes the enquiries; email notification creation was rejected as unauthorized during setup and remains incomplete. Do not claim automatic email delivery is working until it is configured and verified. Keep form error states and WhatsApp fallback available.

The custom domain was deferred at the user's request. Do not add `og:image`; the platform supplies the share image.
