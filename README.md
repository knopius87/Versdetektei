# Die Versdetektei – Rhetorische Figuren in Gedichten

Lern- und Übungs-App für die Jahrgangsstufen 10 und EF (Gymnasium NRW).
Kater Jambus, Detektiv für Verse, spürt mit den Schülerinnen und Schülern rhetorische Figuren in Gedichten der Romantik und in Liebesgedichten bis ins 20. Jahrhundert auf.

**Ziel:** Die Schülerinnen und Schüler lernen Namen und Definitionen von 22 rhetorischen Figuren und erkennen und benennen sie in echten Gedichtausschnitten.

## Was die App enthält

| Bereich | Inhalt |
|---|---|
| **Handbuch** | 22 Figuren in vier Gruppen (Klang & Wiederholung, Satzbau, sprachliche Bilder, Gegensatz & Übertreibung). Zu jeder Figur gibt es Definition, Alltagsbeispiel, einen Tipp gegen Verwechslungen und Belege aus Gedichten. |
| **Training** | Lernen wie Vokabeln, in drei Richtungen: Name → Definition, Definition → Name, Alltagsbeispiel → Name. Figuren, die noch nicht sitzen, kommen häufiger dran. Eine Figur gilt als gesichert, wenn sie in allen drei Richtungen dreimal hintereinander richtig war. |
| **Ermittlung** | 67 Ausschnitte aus Gedichten. Stufe 1: Die entscheidende Stelle ist markiert. Stufe 2: Die Stelle muss selbst gefunden werden (Lupe als Hilfe). Nach jeder Antwort folgen eine Begründung und Hinweise auf weitere Figuren im Ausschnitt. 3 Streitfälle werden zur Diskussion angeboten und zählen nicht in die Wertung. |

## Nutzung

- **Im Browser:** Link öffnen – fertig. Keine Anmeldung.
- **Offline per Doppelklick:** `index.html` herunterladen und öffnen. Die App braucht keine Internetverbindung und keine externen Schriften.
- **Als App auf dem Startbildschirm:**
  - *iPhone/iPad (Safari):* Link öffnen → Teilen-Symbol → **Zum Home-Bildschirm**.
  - *Android (Chrome):* Link öffnen → Menü ⋮ → **App installieren** bzw. **Zum Startbildschirm hinzufügen**.
  - Nach dem ersten Öffnen funktioniert die installierte App auch ohne Internet.

## Datenschutz

Der Lernfortschritt wird nur im Browser des jeweiligen Geräts gespeichert (`localStorage`).
Es gibt keine Anmeldung, keinen Server, keine Tracker und keine Cookies.
Wer das Gerät oder den Browser wechselt oder die Browserdaten löscht, beginnt von vorn.

## Veröffentlichen mit GitHub Pages

1. Auf GitHub ein neues **öffentliches** Repository anlegen, z. B. `versdetektei`.
2. **Add file → Upload files**: alle Dateien aus diesem Ordner hochladen (nicht den Ordner selbst) und mit **Commit changes** bestätigen.
3. **Settings → Pages**: unter *Branch* `main` und `/ (root)` wählen → **Save**.
4. Nach ein bis zwei Minuten ist die App erreichbar unter
   `https://<dein-github-name>.github.io/versdetektei/`

### Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die komplette App (Inhalte, Gestaltung, Programm) in einer Datei |
| `manifest.webmanifest` | Name, Farben und Icons für „Zum Startbildschirm hinzufügen“ |
| `sw.js` | Offline-Cache für die installierte App |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | App-Icons (Android, Chrome) |
| `apple-touch-icon.png` | App-Icon für iPhone/iPad |
| `favicon-32.png` | Symbol im Browser-Tab |

### Aktualisieren

Geänderte `index.html` einfach erneut hochladen.
Bei bestehender Internetverbindung laden Browser und installierte App automatisch die neue Version.
Nach größeren Änderungen in `sw.js` die Zeile `const VERSION = "versdetektei-v1";` hochzählen (`v2`, `v3` …), damit alte Zwischenspeicher sicher gelöscht werden.

## Quellen und Urheberrecht

Die 148 Gedichtausschnitte stammen aus gemeinfreien Texten, die Schreibweise ist vorsichtig modernisiert. Wortlaut geprüft überwiegend über Wikisource. Alle Verfasserinnen und Verfasser sind vor 1956 gestorben, ihre Werke sind also in Deutschland urheberrechtsfrei (70 Jahre nach dem Tod):

Achim von Arnim · Otto Julius Bierbaum · Clemens Brentano · Adelbert von Chamisso · Matthias Claudius · Joseph von Eichendorff · Theodor Fontane · Johann Wolfgang Goethe · Andreas Gryphius · Karoline von Günderode · Heinrich Heine · Friedrich Hölderlin · Hugo von Hofmannsthal · Ricarda Huch · Else Lasker-Schüler · Conrad Ferdinand Meyer · Eduard Mörike · Christian Morgenstern · Wilhelm Müller · Rainer Maria Rilke · Friedrich Schiller · Theodor Storm · Ludwig Tieck · Georg Trakl · Kurt Tucholsky · Ludwig Uhland

- Die Definitionen sind eigene Formulierungen in Anlehnung an die im Unterricht verwendeten Begriffe.
- Alltagsbeispiele, Begründungen und Tipps sind eigene Texte. Alle Zuordnungen wurden von der Lehrkraft fachlich geprüft.
- Kater Jambus ist eine eigene Gestaltung.

**Lizenz:** noch festzulegen (Vorschlag: CC BY 4.0 für Texte und Gestaltung, MIT für den Code).

## Bekannte Grenzen

- Alle Übungen sind Multiple Choice. Freies Benennen und Antippen der Stelle im Gedicht fehlen noch.
- Für Tautologie und Euphemismus gibt es nur je 4 Belege, für die übrigen Figuren 5 bis 14.
