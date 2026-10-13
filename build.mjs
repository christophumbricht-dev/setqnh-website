// setqnh.ch – static site generator (no dependencies): node build.mjs
// Writes plain HTML next to this file, so GitHub Pages needs no build step. German at /, English at /en/.
// Edit the texts below, run the script again, commit the result.
import fs from "node:fs";
import path from "node:path";

const SITE = "https://setqnh.ch";
const MAIL = "hello@setqnh.ch";
const YEAR = 2026;
const UPDATED = { de: "10. Oktober 2026", en: "10 October 2026" };
const POLICY_VERSION = { de: "0.9 (Entwurf)", en: "0.9 (draft)" };

// Until the GmbH is in the commercial register (planned November 2026): "in Gründung".
// Afterwards: remove the suffix, add the UID (CHE-…) and the registered address in IMPRINT below.
const COMPANY = { de: "QNH GmbH (in Gründung)", en: "QNH GmbH (in formation)" };
const ADDRESS = { de: ["Huebacherstrasse 18", "5417 Untersiggenthal", "Schweiz"], en: ["Huebacherstrasse 18", "5417 Untersiggenthal", "Switzerland"] };

const PATHS = {
  home: { de: "/", en: "/en/" },
  imprint: { de: "/impressum/", en: "/en/imprint/" },
  privacy: { de: "/datenschutz/", en: "/en/privacy/" },
};

const T = {
  de: {
    nav: { apps: "Apps", about: "Über QNH", contact: "Kontakt" },
    other: "English",
    skip: "Zum Inhalt springen",
    home: {
      title: "QNH – Apps für Pilotinnen und Piloten",
      desc: "QNH entwickelt Apps für die allgemeine Luftfahrt: Downwind und SecondSeat. Gebaut in der Schweiz, von einem Piloten.",
      eyebrow: "Software für die allgemeine Luftfahrt",
      h1: "Apps für Pilotinnen und Piloten.",
      lead: "Werkzeuge für die Zeit vor, während und nach dem Flug. Entwickelt in der Schweiz, von einem Piloten, für den Alltag zwischen Briefing und Flugbuch.",
      cta: "Zu den Apps",
      scaleLabel: "Höhenmesser-Einstellung, Standarddruck 1013 hPa",
      scaleCaption: "Vor jedem Start: Höhenmesser auf QNH stellen.",
      appsTitle: "Apps",
      apps: [
        { name: "Downwind", status: "Beta auf TestFlight", text: "Fliegen, aufzeichnen, teilen. Das Flugbuch, in dem deine Flüge auf der Landeskarte erscheinen und deine Fliegergruppe mitfliegt.", link: { href: "https://flydownwind.ch/de/", label: "flydownwind.ch" } },
        { name: "SecondSeat", status: "In Entwicklung", text: "Die Checkliste mit Stimme. Sie liest jeden Punkt über das Headset vor, hört auf deine Antwort und hakt ab, ganz ohne Internet." },
      ],
      appsNote: "Unsere Apps ersetzen keine offiziellen Unterlagen und sind nicht für die Navigation bestimmt.",
      aboutTitle: "Warum QNH",
      about: [
        "QNH ist der Luftdruck, auf den man vor dem Start den Höhenmesser einstellt. Erst dann zeigt er die richtige Höhe an. Ein kleiner Handgriff, ohne den nichts stimmt.",
        "So verstehen wir unsere Apps: Sie sollen zuverlässig im Hintergrund arbeiten, den Piloten entlasten und nie im Weg stehen. Im Mittelpunkt steht das Fliegen, nicht der Bildschirm.",
        "Hinter QNH steht Christoph Umbricht, Pilot aus dem Aargau. Die Apps entstehen aus dem eigenen Flugalltag und werden mit anderen Pilotinnen und Piloten getestet.",
      ],
      contactTitle: "Kontakt",
      contactText: "Fragen, Feedback oder eine Zusammenarbeit mit deinem Flugplatz oder deiner Fliegergruppe:",
    },
    foot: { imprint: "Impressum", privacy: "Datenschutz" },
    imprint: {
      title: "Impressum",
      by: "vertreten durch Christoph Umbricht",
      mail: "E-Mail",
      register: "Die GmbH befindet sich in Gründung. Handelsregister-Eintrag und UID-Nummer werden nach der Eintragung ergänzt. Bis dahin ist Christoph Umbricht für den Inhalt verantwortlich.",
      liability: "Die Inhalte dieser Website wurden sorgfältig erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Für Inhalte verlinkter Websites sind deren Betreiber verantwortlich.",
      credits: "Schriften: Space Grotesk und IBM Plex (SIL Open Font License). Logo und Texte © QNH.",
    },
    privacy: {
      title: "Datenschutz",
      meta: (v, u) => `Version ${v} · Stand ${u}`,
      sections: [
        ["Wer verantwortlich ist", `${COMPANY.de}, Christoph Umbricht, ${ADDRESS.de.join(", ")}. E-Mail: <a href="mailto:${MAIL}">${MAIL}</a>.`],
        ["Diese Website", "Die Website setzt keine Cookies, verwendet kein Tracking und keine Analyse-Werkzeuge und lädt keine Schriften oder Skripte von Dritten. Es gibt keine Formulare."],
        ["Hosting", "Die Website liegt bei GitHub Pages (GitHub, Inc., USA). Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie IP-Adresse, Zeitpunkt und aufgerufene Seite, um die Website auszuliefern und vor Missbrauch zu schützen. Dabei können Daten in die USA übermittelt werden. Details: <a href=\"https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement\">Datenschutzerklärung von GitHub</a>."],
        ["E-Mail", "Wenn du uns schreibst, verwenden wir deine Angaben nur, um deine Anfrage zu beantworten, und löschen sie, wenn sie nicht mehr nötig sind. Das E-Mail-Postfach liegt bei Infomaniak Network SA in der Schweiz."],
        ["Apps", "Für unsere Apps gelten eigene Datenschutzerklärungen: <a href=\"https://flydownwind.ch/de/privacy/\">Downwind</a>. Die Erklärung für SecondSeat folgt mit der Veröffentlichung."],
        ["Deine Rechte", "Du kannst nach dem Schweizer Datenschutzgesetz Auskunft über deine Daten verlangen, sie berichtigen oder löschen lassen. Schreib uns dafür eine E-Mail."],
      ],
    },
  },
  en: {
    nav: { apps: "Apps", about: "About", contact: "Contact" },
    other: "Deutsch",
    skip: "Skip to content",
    home: {
      title: "QNH – Apps for pilots",
      desc: "QNH builds apps for general aviation: Downwind and SecondSeat. Made in Switzerland, by a pilot.",
      eyebrow: "Software for general aviation",
      h1: "Apps for pilots.",
      lead: "Tools for before, during and after the flight. Built in Switzerland by a pilot, for everyday flying between the briefing and the logbook.",
      cta: "See the apps",
      scaleLabel: "Altimeter setting, standard pressure 1013 hPa",
      scaleCaption: "Before every take-off: set the altimeter to QNH.",
      appsTitle: "Apps",
      apps: [
        { name: "Downwind", status: "Beta on TestFlight", text: "Fly, log, share. The logbook that puts your flights on the Swiss national map and lets your flying group come along.", link: { href: "https://flydownwind.ch/", label: "flydownwind.ch" } },
        { name: "SecondSeat", status: "In development", text: "The checklist with a voice. It reads every item through your headset, listens for your answer and ticks it off, without internet." },
      ],
      appsNote: "Our apps do not replace official publications and are not for navigation.",
      aboutTitle: "Why QNH",
      about: [
        "QNH is the air pressure you set on the altimeter before take-off. Only then does it show the right altitude. A small step without which nothing else is right.",
        "That is how we think about our apps: they should work reliably in the background, take load off the pilot and never get in the way. Flying comes first, not the screen.",
        "QNH is Christoph Umbricht, a pilot from the canton of Aargau. The apps grow out of his own flying and are tested together with other pilots.",
      ],
      contactTitle: "Contact",
      contactText: "Questions, feedback, or working together with your airfield or flying group:",
    },
    foot: { imprint: "Imprint", privacy: "Privacy" },
    imprint: {
      title: "Imprint",
      by: "represented by Christoph Umbricht",
      mail: "E-mail",
      register: "The company is in formation. The commercial register entry and UID number will be added once registered. Until then, Christoph Umbricht is responsible for the content.",
      liability: "The content of this website was prepared with care, but we cannot guarantee that it is correct, complete and up to date. The operators of linked websites are responsible for their content.",
      credits: "Fonts: Space Grotesk and IBM Plex (SIL Open Font License). Logo and texts © QNH.",
    },
    privacy: {
      title: "Privacy",
      meta: (v, u) => `Version ${v} · ${u}`,
      sections: [
        ["Who is responsible", `${COMPANY.en}, Christoph Umbricht, ${ADDRESS.en.join(", ")}. E-mail: <a href="mailto:${MAIL}">${MAIL}</a>.`],
        ["This website", "The website sets no cookies, uses no tracking or analytics and loads no fonts or scripts from third parties. There are no forms."],
        ["Hosting", "The website is hosted on GitHub Pages (GitHub, Inc., USA). When you visit it, GitHub processes technically necessary data such as IP address, time and page to deliver the website and protect it from abuse. Data may be transferred to the USA. Details: <a href=\"https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement\">GitHub privacy statement</a>."],
        ["E-mail", "If you write to us, we use your details only to answer and delete them when they are no longer needed. The mailbox is hosted by Infomaniak Network SA in Switzerland."],
        ["Apps", "Our apps have their own privacy policies: <a href=\"https://flydownwind.ch/privacy/\">Downwind</a>. The policy for SecondSeat will follow with its release."],
        ["Your rights", "Under the Swiss Data Protection Act you can ask what data we hold about you and have it corrected or deleted. Just send us an e-mail."],
      ],
    },
  },
};

// ---------------------------------------------------------------------------

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// The signature: an altimeter setting scale (hPa) with the index on 1013.
function pressureScale(label) {
  const ticks = [];
  for (let v = 1003; v <= 1023; v++) {
    const x = 180 + (v - 1013) * 30;
    const major = v % 2 === 1;
    ticks.push(`<line class="${major ? "major" : ""}" x1="${x}" y1="${major ? 40 : 50}" x2="${x}" y2="66"/>`);
    if (major && v !== 1013) ticks.push(`<text x="${x}" y="92">${v}</text>`);
  }
  return `<svg class="scale" viewBox="0 0 360 140" role="img" aria-label="${esc(label)}">
  <defs><linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".25" stop-color="#fff"/><stop offset=".75" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  <mask id="edges"><rect width="360" height="140" fill="url(#fade)"/></mask></defs>
  <text class="scale-label" x="180" y="16">SET QNH</text>
  <g mask="url(#edges)"><line class="base" x1="0" y1="66" x2="360" y2="66"/><g class="tape">${ticks.join("")}</g></g>
  <path class="index" d="M180 36 l-7 -11 h14 z"/>
  <rect class="window" x="139" y="73" width="82" height="30" rx="3"/>
  <text class="window-value" x="180" y="95">1013</text>
  <text class="scale-unit" x="180" y="128">hPa</text>
</svg>`;
}

function page(lang, key, { title, desc, body }) {
  const t = T[lang];
  const other = lang === "de" ? "en" : "de";
  const here = PATHS[key];
  const home = PATHS.home[lang];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${here[lang]}">
<link rel="alternate" hreflang="de" href="${SITE}${here.de}">
<link rel="alternate" hreflang="en" href="${SITE}${here.en}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/space-grotesk-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/style.css">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/og.png">
<meta property="og:url" content="${SITE}${here[lang]}">
<meta name="theme-color" content="#F6F4EF">
</head>
<body>
<a class="skip" href="#main">${t.skip}</a>
<header class="site-head">
  <a class="brand" href="${home}"><img src="/assets/qnh-logo.svg" alt="QNH GmbH" width="150" height="70"></a>
  <nav aria-label="${lang === "de" ? "Hauptnavigation" : "Main"}">
    <a href="${home}#apps">${t.nav.apps}</a>
    <a href="${home}#about">${t.nav.about}</a>
    <a href="${home}#contact">${t.nav.contact}</a>
    <a class="lang" href="${here[other]}" hreflang="${other}" lang="${other}">${t.other}</a>
  </nav>
</header>
<main id="main">
${body}
</main>
<footer class="site-foot">
  <img src="/assets/qnh-symbol.svg" alt="" width="28" height="40">
  <p>${esc(COMPANY[lang])} · © ${YEAR}</p>
  <p><a href="${PATHS.imprint[lang]}">${t.foot.imprint}</a> · <a href="${PATHS.privacy[lang]}">${t.foot.privacy}</a> · <a href="${here[other]}" hreflang="${other}" lang="${other}">${t.other}</a></p>
</footer>
</body>
</html>
`;
}

function homeBody(lang) {
  const h = T[lang].home;
  return `<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">${esc(h.eyebrow)}</p>
    <h1>${esc(h.h1)}</h1>
    <p class="lead">${esc(h.lead)}</p>
    <a class="arrow-link" href="#apps">${esc(h.cta)}</a>
  </div>
  <figure class="hero-scale">
    ${pressureScale(h.scaleLabel)}
    <figcaption>${esc(h.scaleCaption)}</figcaption>
  </figure>
</section>

<section class="apps" id="apps" aria-labelledby="apps-title">
  <h2 id="apps-title" class="section-label">${esc(h.appsTitle)}</h2>
  <ul class="app-list">
${h.apps.map((a) => `    <li class="app">
      <h3>${esc(a.name)}</h3>
      <p class="app-status">${esc(a.status)}</p>
      <p class="app-text">${esc(a.text)}</p>
      ${a.link ? `<a class="arrow-link" href="${a.link.href}">${esc(a.link.label)}</a>` : ""}
    </li>`).join("\n")}
  </ul>
  <p class="fine">${esc(h.appsNote)}</p>
</section>

<section class="about" id="about" aria-labelledby="about-title">
  <h2 id="about-title" class="section-label">${esc(h.aboutTitle)}</h2>
  <div class="about-text">
    <p class="about-first">${esc(h.about[0])}</p>
    ${h.about.slice(1).map((p) => `<p>${esc(p)}</p>`).join("\n    ")}
  </div>
</section>

<section class="contact" id="contact" aria-labelledby="contact-title">
  <h2 id="contact-title" class="section-label">${esc(h.contactTitle)}</h2>
  <div>
    <p>${esc(h.contactText)}</p>
    <a class="mail" href="mailto:${MAIL}">${MAIL}</a>
  </div>
</section>`;
}

function imprintBody(lang) {
  const t = T[lang].imprint;
  return `<article class="doc">
  <h1>${esc(t.title)}</h1>
  <p><strong>${esc(COMPANY[lang])}</strong><br>${esc(t.by)}<br>${ADDRESS[lang].map(esc).join("<br>")}</p>
  <p>${esc(t.mail)}: <a href="mailto:${MAIL}">${MAIL}</a></p>
  <p>${esc(t.register)}</p>
  <p>${esc(t.liability)}</p>
  <p class="fine">${esc(t.credits)}</p>
</article>`;
}

function privacyBody(lang) {
  const t = T[lang].privacy;
  return `<article class="doc">
  <h1>${esc(t.title)}</h1>
  <p class="fine">${esc(t.meta(POLICY_VERSION[lang], UPDATED[lang]))}</p>
  ${t.sections.map(([h, p]) => `<h2>${esc(h)}</h2>\n  <p>${p}</p>`).join("\n  ")}
</article>`;
}

const notFound = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Altimeter not set – QNH</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>
<main id="main" class="lost">
  <p class="eyebrow">404</p>
  <h1>Höhenmesser nicht eingestellt.</h1>
  <p class="lead">Diese Seite gibt es nicht. <a href="/">Zurück zur Startseite</a></p>
  <p class="lead" lang="en">Altimeter not set: this page does not exist. <a href="/en/">Back to the home page</a></p>
</main>
</body>
</html>
`;

// ---------------------------------------------------------------------------

const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const write = (p, html) => {
  const file = path.join(root, p, p.endsWith(".html") ? "" : "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log("wrote", path.relative(root, file));
};

for (const lang of ["de", "en"]) {
  const t = T[lang];
  write(PATHS.home[lang], page(lang, "home", { title: t.home.title, desc: t.home.desc, body: homeBody(lang) }));
  write(PATHS.imprint[lang], page(lang, "imprint", { title: `${t.imprint.title} – QNH`, desc: t.home.desc, body: imprintBody(lang) }));
  write(PATHS.privacy[lang], page(lang, "privacy", { title: `${t.privacy.title} – QNH`, desc: t.home.desc, body: privacyBody(lang) }));
}
write("/404.html", notFound);

const urls = Object.values(PATHS).flatMap((p) => [p.de, p.en]);
fs.writeFileSync(path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(path.join(root, "CNAME"), "setqnh.ch\n");
