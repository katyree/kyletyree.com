# Kyle Tyree website

This is a static website for Kyle's local-business web development service. The landing page features Ridgeline Roofing, Main Street Café, and Main Street Table through their HTTPS subdomains. All three are fictional business demos.

## Preview locally

From this directory, run:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ in Chrome. Root-relative links require an HTTP server; opening the HTML file directly will not load the entire site correctly.

The Python server does not process `_redirects`. To verify Pages routing, run `npx wrangler pages dev . --ip 127.0.0.1 --port 8788` and open http://127.0.0.1:8788/. This runs locally and does not publish the site.

## Files

- `index.html`: landing-page copy and layout.
- `assets/site.css` and `assets/site.js`: landing-page styles and mobile navigation.
- `assets/kyle-tyree.png`: owner-supplied profile photo, displayed with CSS cropping.
- `assets/cover-*-v1.webp`: matching painted portfolio covers for roofing, café, and restaurant. Generated PNG originals are kept in the task outputs; WebP assets retain their 1536 × 1024 dimensions.
- `assets/demo-roofing.svg` and `assets/demo-restaurant.jpg`: retained artwork from the earlier covers.
- `_redirects`: 34 permanent, exact page mappings from the two legacy demo routes to their matching extracted subdomains.
- `demos/home-services/`: home, services, about, service area, and estimate form.
- `demos/cafe/`: home, menu, about, visit, and contact form.
- `demos/demo.css` and `demos/demo.js`: shared example styles and demonstration form behavior.

Edit the HTML files directly. No build step, package installation, or generator is required. Demo pages include `noindex,nofollow` metadata. Their forms only show a local confirmation, never deliver a message, and remain disabled if JavaScript does not load.

Keep the legacy demo files until production redirects are verified. Home-services URLs always redirect to `home-services.kyletyree.com`, regardless of which trade demo the landing page features. Each home URL and child page has explicit `.html`, clean, and slash mappings. Redirect destinations use clean URLs and do not replace queries or fragments.

## Deployment

Cloudflare Pages project `kyletyree-com` is connected to `katyree/kyletyree.com`. Verified October 1, 2026: production automatically deploys from `main`; build command, output directory, and root directory are blank.

A push to `main` publishes the site through the existing Git integration. Git operations and publishing require the owner's explicit instruction. Check the Pages deployment status and repeat the relevant checks on the live domain after publishing.

When changing `assets/site.css`, update its `?v=` value in both `index.html` and `service-details.html`. A returning browser retained the previous stylesheet after the October 1 deployment; a new versioned URL made it load the updated CSS. Verify computed styles on the custom domain as well as the deployment URL.

## Service terms and contact

Published scope, pricing, payments, ongoing care, and handoff terms are in `service-details.html`. Keep the landing-page summaries consistent with that page.

The landing page currently uses the existing Gmail address and phone number, with separate email, text, and call links. A delivered web form and a domain email address have not been configured. Do not replace the contact address with an unverified mailbox.

## Initial verification

- All 11 HTML pages returned HTTP 200 from the local server.
- All 151 local links and asset references resolved, including fragment targets.
- Each page has one H1 and unique element IDs.
- Both JavaScript files passed `node --check`.
- The landing page was visually checked on desktop and at a 390-pixel mobile viewport. Mobile navigation opened and closed after choosing a link.
- Both demo homepages and the café menu were visually checked on mobile.
- The service-business form rejected an empty submission and displayed its local confirmation after valid sample input, without navigating away.
- The café form rejected an empty submission and displayed its local confirmation after valid sample input, without navigating away. The earlier browser-tool connection error did not recur on retry. Chrome’s viewport override was reset successfully.
- Email, SMS, and phone destinations were inspected; no real message or call was sent.

## Portfolio update verification

On October 1, 2026, the Pages local runtime parsed all 34 redirect rules. Each route returned 301 with its matching HTTPS destination, both without a query and with `?demo=synthetic&check=1`. All 34 local references across the landing and service pages resolved. The 12 legacy demo files remained byte-for-byte unchanged; the service page changed only its stylesheet URL version.

The landing page was inspected at desktop and 390-pixel mobile widths, including card alignment, mobile navigation, FAQs, and the existing theme toggle. The three existing JavaScript files passed `node --check`. No real form, email, text, or phone submission was made. These focused checks are not a performance benchmark or comprehensive accessibility audit.
