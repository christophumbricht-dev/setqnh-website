# setqnh.ch online stellen – Schritt für Schritt

Gleicher Aufbau wie flydownwind.ch: Die Website liegt gratis bei **GitHub Pages**, die Domain und das E-Mail-Postfach bei **Infomaniak**.

---

## Schritt 1 – Domain kaufen (Infomaniak, ca. 10 Min.)
1. [manager.infomaniak.com](https://manager.infomaniak.com) öffnen und anmelden.
2. Oben im Suchfeld **«Domain»** eingeben → **Domain registrieren**.
3. `setqnh.ch` eingeben → **Suchen**. Optional `setqnh.com` dazu nehmen.
4. In den Warenkorb → bezahlen. Inhaber: vorerst **du persönlich** (nach der Gründung auf die GmbH übertragen).
5. **Beleg aufbewahren** (Vorgründungskosten, siehe GmbH-Notizen).

## Schritt 2 – E-Mail-Postfach hello@setqnh.ch (Infomaniak, ca. 5 Min.)
1. Im Manager → **Mail** (bzw. «Mail Service») → für `setqnh.ch` aktivieren. Infomaniak setzt die Mail-Einträge (MX) automatisch.
2. Adresse **hello** anlegen.
   - Wenn du kein zweites Postfach willst: als **Weiterleitung** auf deine bestehende Adresse einrichten.
3. Testmail an hello@setqnh.ch schicken.

## Schritt 3 – Repository auf GitHub anlegen (ca. 3 Min.)
1. [github.com/new](https://github.com/new) öffnen (angemeldet als **christophumbricht-dev**).
2. **Repository name:** `setqnh-website`
3. **Public** wählen (GitHub Pages ist im Gratis-Plan nur für öffentliche Repositories).
4. **Nichts** ankreuzen (kein README, kein .gitignore, keine Lizenz).
5. **Create repository** → Claude Bescheid geben. Claude lädt dann die Website hoch.

## Schritt 4 – GitHub Pages einschalten (nach dem Hochladen, ca. 3 Min.)
1. Im Repository → **Settings** → links **Pages**.
2. **Source:** «Deploy from a branch» · **Branch:** `main` · Ordner `/ (root)` → **Save**.
3. **Custom domain:** steht schon `setqnh.ch` drin (aus der Datei `CNAME`). Sonst eintragen → **Save**.

## Schritt 5 – Domain mit GitHub verbinden (Infomaniak, ca. 10 Min.)
1. Im Manager → **Domains** → `setqnh.ch` → **DNS-Zone** (bzw. «DNS verwalten»).
2. Diese Einträge hinzufügen (**+ Eintrag hinzufügen**). Bestehende A/AAAA-Einträge für `setqnh.ch` und `www` vorher löschen, MX-Einträge (E-Mail) **nicht** anfassen.

| Typ | Name / Quelle | Ziel / Wert |
|---|---|---|
| A | *(leer bzw. `@`)* | `185.199.108.153` |
| A | *(leer bzw. `@`)* | `185.199.109.153` |
| A | *(leer bzw. `@`)* | `185.199.110.153` |
| A | *(leer bzw. `@`)* | `185.199.111.153` |
| AAAA | *(leer bzw. `@`)* | `2606:50c0:8000::153` |
| AAAA | *(leer bzw. `@`)* | `2606:50c0:8001::153` |
| AAAA | *(leer bzw. `@`)* | `2606:50c0:8002::153` |
| AAAA | *(leer bzw. `@`)* | `2606:50c0:8003::153` |
| CNAME | `www` | `christophumbricht-dev.github.io.` |

3. Speichern. Es kann **bis zu ein paar Stunden** dauern, bis die Einträge überall gelten.
4. Zurück bei GitHub → Settings → Pages: Sobald dort «DNS check successful» steht, **Enforce HTTPS** ankreuzen.

## Schritt 6 – Domain bei GitHub bestätigen (Schutz, ca. 5 Min.)
Damit niemand anderes setqnh.ch auf GitHub verwenden kann:
1. GitHub → oben rechts dein Bild → **Settings** → links **Pages** → **Add a domain** → `setqnh.ch`.
2. GitHub zeigt einen **TXT-Eintrag** (Name beginnt mit `_github-pages-challenge-…`). Diesen bei Infomaniak in der DNS-Zone als **TXT** eintragen.
3. Bei GitHub **Verify** klicken (evtl. nach einigen Minuten nochmals).

## Fertig
- https://setqnh.ch und https://www.setqnh.ch zeigen die Website.
- Texte ändern: Claude sagen, was anders sein soll. Claude ändert `build.mjs`, baut neu und lädt hoch.
