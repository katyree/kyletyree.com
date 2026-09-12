# Kyle Tyree website

This is a static website for Kyle's local-business web development service. It includes a landing page and two fictional, five-page business examples.

## Preview locally

From this directory, run:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ in Chrome. Root-relative links require an HTTP server; opening the HTML file directly will not load the entire site correctly.

## Files

- `index.html`: landing-page copy and layout.
- `assets/site.css` and `assets/site.js`: landing-page styles and mobile navigation.
- `assets/kyle-tyree.png`: owner-supplied profile photo, displayed with CSS cropping.
- `demos/home-services/`: home, services, about, service area, and estimate form.
- `demos/cafe/`: home, menu, about, visit, and contact form.
- `demos/demo.css` and `demos/demo.js`: shared example styles and demonstration form behavior.

Edit the HTML files directly. No build step, package installation, or generator is required. Demo pages include `noindex,nofollow` metadata. Their forms only show a local confirmation, never deliver a message, and remain disabled if JavaScript does not load.

## Deployment

Cloudflare Pages project `kyletyree-com` is connected to `katyree/kyletyree.com`. At inspection on September 12, 2026, production automatically deployed from `main`; build command, output directory, and root directory were blank. No Pages bindings or environment variables were configured.

A push to `main` can publish the site. The prepared changes are uncommitted and have not been pushed or deployed. Git operations and publishing require the owner's explicit instruction.

## Decisions before outreach

The owner retained the $500 build and $50 monthly care figures for this draft but left detailed terms undecided. Confirm hosting, domain costs, revision limits, included editing time, ownership, cancellation, and support availability before making a final offer. The current copy puts those details in the written quote rather than inventing commitments.

The landing page currently uses the existing Gmail address and phone number, with separate email, text, and call links. A delivered web form and a domain email address have not been configured. Do not replace the contact address with an unverified mailbox.

## Verification

- All 11 HTML pages returned HTTP 200 from the local server.
- All 151 local links and asset references resolved, including fragment targets.
- Each page has one H1 and unique element IDs.
- Both JavaScript files passed `node --check`.
- The landing page was visually checked on desktop and at a 390-pixel mobile viewport. Mobile navigation opened and closed after choosing a link.
- Both demo homepages and the café menu were visually checked on mobile.
- The service-business form rejected an empty submission and displayed its local confirmation after valid sample input, without navigating away.
- The café form rejected an empty submission and displayed its local confirmation after valid sample input, without navigating away. The earlier browser-tool connection error did not recur on retry. Chrome’s viewport override was reset successfully.
- Email, SMS, and phone destinations were inspected; no real message or call was sent.

No production deployment, deliverability test, performance benchmark, or comprehensive accessibility audit has been performed.
