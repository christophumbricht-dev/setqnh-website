# setqnh.ch – website of QNH GmbH

Company website (owner: Christoph Umbricht). Talk to Christoph in **German** (Swiss usage, "ss" instead of "ß"); he is a pilot, not a programmer.

- Static site, same approach as `C:\Projects\flydownwind-website`: `build.mjs` (no dependencies) holds all texts and writes plain HTML. German at `/`, English at `/en/`. After editing: `node build.mjs`, then commit the generated files. GitHub Pages, custom domain `setqnh.ch` (`CNAME`).
- Preview: `node tools/serve.mjs` → http://localhost:5186/
- No tracking, no cookies, no forms, no third-party fonts or scripts. Fonts in `assets/fonts/` (Space Grotesk display, IBM Plex Sans body, IBM Plex Mono labels; SIL OFL).
- Logo files come from `C:\Users\cu89\Desktop\Christoph\Fliegen\Website Flying\QNH Logo` (variant A "Steigflug"). `assets/og.png` is rendered from `qnh-logo-web.svg`.
- Design rules: `C:\Users\cu89\Desktop\Christoph\Fliegen\Website Flying\V2\CLAUDE.md` (no AI look, no stat rows, no gradients as decoration). Palette: paper `#F6F4EF`, ink `#102A43`, accent `#0B7285`. Signature element: the altimeter setting scale in the hero (`pressureScale()`), set to 1013 hPa with a one-time slide; respects `prefers-reduced-motion`.
- Never invent facts (numbers, testimonials, partners). Christoph's photos only with his OK.

## Currently: placeholder only (since 14.10.2026)

Christoph asked to hide the site until the GmbH is founded. `main` serves a placeholder (index.html = 404.html, noindex, robots Disallow, no company name/address). The full site lives in branch `volle-website` (do NOT run `node build.mjs` on main – it would regenerate the full site). To go live after the commercial register entry: `git checkout volle-website`, update COMPANY/UID/seat in build.mjs, `node build.mjs`, merge into main, push.

## Open (update when it happens)

- Company is "in Gründung": after the commercial register entry, update `COMPANY`, the UID and the registered seat in `build.mjs` (imprint + privacy).
- Address in the imprint is Christoph's private address (same as flydownwind.ch) until the GmbH has its seat.
- Privacy text is a draft (version 0.9) and assumes the mailbox `hello@setqnh.ch` at Infomaniak.
- Briefing login: the placeholder (index.html / 404.html on main) has a small "Briefing · Anmelden" box linking to
  https://setqnh-briefing.pages.dev/ (Cloudflare Access, e-mail code). The full site in `volle-website` does not have it
  yet — add it to `build.mjs` before going live. Tool source: `C:\Projects\setqnh-briefing`.
- SecondSeat: link and privacy policy once it is released. Downwind: App Store link from January 2027.
