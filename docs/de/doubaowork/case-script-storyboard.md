# Vom langen Text zum drehfertigen Sprechtext und Storyboard

> Szenario: Der Artikel für das WeChat Official Account ist fertig, und die Leitung wirft beiläufig ein: «Mach daraus ein einminütiges Video, heute noch drehen.» Den Artikel ablesen ist die schlechteste Lösung – der Artikel will gründlich erklären, das Kurzvideo will zu Ende geschaut werden. Und selbst wenn der Sprechtext sitzt: Steht im Kameraplan überall «passendes Bildmaterial» und «hier B-Roll», weiß weder Kamera noch Schnitt, was zu drehen ist.

Mit einem bereits geprüften Langtext in Doubao Work zwei Aufgaben hintereinander laufen lassen:

```text
Geprüfter Langtext
→ umwandeln in 60–75 Sekunden natürlichen Sprechtext
→ Fakten und Rhythmus des Sprechtexts manuell bestätigen
→ in 9 zusammenhängende Shots zerlegen
→ Aktionen, Einstellungsgrößen, Bildschirmtext, Materialstatus ergänzen
→ zum Schluss Rechte, Datenschutz und Faktengrenzen prüfen
```

Am Ende stehen ein rund 290 Zeichen langer Sprechtext (bei normalem Sprechtempo 65–70 Sekunden) und eine Storyboard-Arbeitstabelle mit 68 Sekunden und 9 Shots.

Werkzeugwahl: der **Skill «Neue-Medien-Schreiben»** (deckt Kurzvideo-Skripte ab, stark bei Sprechrhythmus, Einstieg und Hörverständnis) für den Sprechtext; der **Skill «Kreativ-Video»** (näher an der realen Produktion, zerlegt Kameraposition, Aktionen, B-Roll, Ton und Schnittanforderungen) fürs Storyboard. Die beiden Aufgaben **nicht in einen Prompt mischen** – erst den Sprechtext manuell bestätigen, dann in neuer Aufgabe das Storyboard erstellen; die Bilder richten sich dann nur nach dem festgelegten Text, und die Fakten ändern sich nicht nebenbei beim Shot-Aufteilen. (Wer KI-Material ergänzen will, kann optional Seedance 2.5 zur Videogenerierung hinzu nehmen.)

## Aufgabe 1: Zuerst den Langtext in «aussprechbaren» Sprechtext wandeln

Lautet der Prompt nur «mach aus diesem Artikel einen einminütigen Sprechtext», kürzt die KI am liebsten Wörter. Fünf Dinge sind festzulegen: **Wer hört zu, wie lange gesprochen wird, was übrig bleibt, was sich keinesfalls ändern darf, in welchem Format geliefert wird**:

```text
Bitte nutze die Fähigkeit «Neue-Medien-Schreiben» und wandle den folgenden bereits
geprüften Langtext in ein Kurzvideo-Sprechtext um, das direkt vor die Kamera gesprochen
werden kann.

Ziele:
- Plattform: Videokanal / Douyin beides verwendbar
- Dauer: 60–75 Sekunden
- Publikum: Office-Beschäftigte und Content-Einsteiger
- Nur eine Kernfrage behandeln: 【Kernfrage hier eintragen】
- Nur eine klare Schlussfolgerung und ein leicht verständliches Beispiel behalten
- In den ersten 5 Sekunden bei der Frage sein; keine reißerischen Haken wie
  «Schockierend» oder «unbedingt»
- Kurze Sätze, wie ein echter Mensch spricht; keinissenschaftlicher Duktus
- Die zentralen Einschränkungen des Originals müssen bleiben; bedingte Aussagen
  dürfen nicht zu absoluten Zusagen werden
- Empfohlene Pausen 【Pause】 und zu betonende Wörter 【Betonung】 markieren
- Keine Storyboards, Shots oder Untertiteldateien generieren
- Keine Zahlen, Beispiele oder Schlussfolgerungen nachtragen, die im Original
  nicht stehen

Gib bitte in folgender Struktur aus:
1. Kernauswahl: in 3 Zeilen, was bleibt, was gestrichen wird und warum
2. Finaler Sprechtext: direkt ablesbar, ca. 260–320 Zeichen
3. Ergänzung für die Beschreibung: 2–3 Grenzinformationen, die nicht in den
   Sprechtext gehören, aber in die Videobeschreibung passen

Originaler Langtext:
【Fügen Sie hier Ihren geprüften Langtext vollständig ein; oder nach dem Hochladen
schreiben: nur die Datei 《Dateiname》 lesen】
```

Testergebnis: Der erste Satz wirft die Frage, die alle interessiert («Viele machen Ein-Inhalt-viel-Plattformen, indem sie den WeChat-Artikel nach Xiaohongshu kopieren …»), in der Mitte bleibt genau ein Gegenbeispiel, und der gefährlichste Satz bleibt bewahrt – das Original sagt «wenn die Informationen vollständig und die Fakten geprüft sind, kann Zeit gespart werden», was nicht zu «mit KI spart man garantiert Zeit» werden darf. Insgesamt rund 290 Zeichen, geschätzt 65–70 Sekunden, Pausen und Betonungen markiert.

> Ob ein Sprechtext taugt, prüft man am einfachsten und wirksamsten so: **Selbst einmal komplett laut vorlesen.** Jede Stelle, bei der man den vorherigen Satz noch einmal lesen muss, gehört umgeschrieben.

## Aufgabe 2: Nach Bestätigung des Sprechtexts in ein wirklich drehfertiges Storyboard zerlegen

Storyboards scheitern am häufigsten an der Realität: **Mit nur einem Handy sollten Sie keine Drei-Kamera-Schienenshots planen lassen; mit nur selbst gedrehtem Material sollten Sie keine Filmausschnitte und Stock-Footage voraussetzen lassen.** Wer zum ersten Mal einen Sprechtext dreht, kommt mit Handy + Stativ + ruhigem Raum zum Aufnehmen.

> Eine überall geltende Erfahrung: Wer Selbstmedien betreibt – in jeder Form –, sollte anfangs extrem leichtgewichtig arbeiten und die meiste Energie auf Thema und Titel (beim Kurzvideo: den Einstieg) legen. Nur wer je Einsatz klein hält und trotzdem das Richtige tut, hält durch und gerät leichter in eine positive Rückkopplung.

Im Test wurden die Bedingungen festgenagelt: 9:16 Hochformat, eine Person am Schreibtisch, Handy auf Stativ; nutzbares Material nur frontal gesprochener Text, Handoperationen, Bildschirmaufnahme des Artikels und selbst gebastelte Stichwortkarten:

```text
Bitte nutze die Fähigkeit 【Kreativ-Video】 und zerlege den folgenden bestätigten
Sprechtext in eine Storyboard-Arbeitstabelle, nach der direkt gedreht werden kann.
Erstelle nur Dreh- und Schnittplanung; erzeuge kein echtes Video und keine
Untertiteldatei.

Bedingungen des Endprodukts:
- Format: 9:16 Hochformat; Gesamtdauer: 65–70 Sekunden
- Szene: eine Person spricht am Schreibtisch in die Kamera
- Verfügbare Ausrüstung: Handy, Stativ, Laptop
- Vorhandenes Material: frontal sprechende Person, Hände am Computer,
  Bildschirmaufnahme der Artikelseite, selbst gebastelte Stichwortkarten
- Kein unberechtigtes Stock-Material, keine Filmausschnitte, keine Screenshots
  fremder Konten
- Rhythmus: klar, zurückhaltend, wie ein nützliches Tutorial; keine schnellen
  Schnitte ohne Not

Ausführungsregeln:
1. Zerlege in 8–10 Shots nach fortlaufenden Zeitfenstern (0–5 Sek., 5–12 Sek. usw.);
   die Zeitsumme muss 65–70 Sekunden vollständig abdecken, ohne Überlappung und Lücke.
2. Gib zu jedem Shot an: zugehörige Originalzeile des Sprechtexts, Aktion der Person,
   Einstellungsgröße, Kameraposition / Komposition, Bildschirmtext,
   B-Roll oder Screenshot, Übergang, Tonanforderung.
3. Bildschirmtext nur Stichworte, höchstens 12 Schriftzeichen pro Einblendung;
   nicht den ganzen Sprechtext noch einmal einblenden.
4. Keine Floskeln wie «passendes Bildmaterial dazu»; klar sagen, was gedreht wird,
   was aufgenommen wird und wo der Text steht.
5. Markiere den Materialstatus jedes Postens: 【vorhanden】【nachzudrehen】
   【zu erstellen】【Rechte zu klären】.
6. Fakten und Grenzen im Sprechtext nicht umschreiben; insbesondere die
   Einschränkungen des Originaltexts erhalten.
7. Hänge zum Schluss eine Drehliste in Drehreihenfolge und eine Schnitt-Checkliste
   in Zeitreihenfolge an.

Gib bitte in folgender Struktur aus:
A. Dreh-Einstellungen (Kameraposition, Licht, Ton, Hintergrund)
B. Sekundengenaue Storyboard-Tabelle
C. Drehliste
D. Schnitt-Checkliste
E. Rechte- und Datenschutzprüfung

Bestätigter Sprechtext:
【Fügen Sie hier den nach manueller Bestätigung vollständigen Sprechtext ein】
```

Es schätzt zuerst aus Zeichenzahl und Pausen die Dauer jedes Abschnitts und zerlegt erst dann in Shots – **erst die Dauer rechnen, dann zerlegen** ist wichtig: Wer zuerst 9 Shots schreibt und die Zeit hinten zusammenzwingt, bekommt am ehesten einen Sprechtext, der nicht passt oder fünf Sekunden Leere in der Mitte. Die getestete Zeitleiste (9 Segmente, Summe exakt 68 Sekunden, ohne Lücke und Überlappung):

| Zeit | Bildaufgabe |
| --- | --- |
| 0–7 Sek. | Halbnah, «Copy-Paste-Mehrfachverwertung» aussprechen, dreimal mit der rechten Hand auf den Tisch klopfen |
| 7–13 Sek. | Nah, «Zeit sparen heißt nicht wirken» betonen |
| 13–21 Sek. | Einblendung: Hand scrollt durch den Artikel, andere Leseweisen je Plattform erklären |
| 21–30 Sek. | Bildschirmaufnahme im Vergleich «Official Account liest man, Videokanal hört man sich an» |
| 30–37 Sek. | Karte «Struktur» hochnehmen, betonen, dass die Ausdrucksstruktur geändert wird |
| 37–49 Sek. | Aufnahme zeigt «Hintergrund/Test/Schluss» vs. «Frage/Schluss/Beispiel» |
| 49–58 Sek. | Karte «bedingt/absolut» nutzten, um die Faktengrenze zu sichern |
| 58–63 Sek. | Nah, «bedingte Aussagen dürfen keine absoluten Zusagen werden» betonen |
| 63–68 Sek. | Aufweiten zum Abschluss, Totale auf dem Schreibtisch einfrieren |

Am Ende stehen drei Auffang-Listen: was in Drehreihenfolge zuerst gedreht wird, wie in Zeitreihenfolge geschnitten wird, und wie Rechte und Datenschutz geprüft werden.

> Je detaillierter ein Storyboard ist, desto professioneller ist es noch lange nicht. **Ein wirklich brauchbares Storyboard erkennt man daran: Wer heute dreht, kann sofort die Liste «vorhanden, nachzudrehen, zu erstellen, Rechte zu klären» aufstellen.**

## Merken Sie sich diese zweiteilige Formel

**Langtext → Sprechtext** klar festlegen: wer zuhört, auf welcher Plattform, wie lange; nur welche Frage, nur welche Schlussfolgerung; welche Einschränkungen nicht gestrichen werden dürfen; was in die Beschreibung wandert; die Ausgabe Pausen, Betonungen und Zeichenzahlprüfung enthält.

**Sprechtext → Storyboard** klar festlegen: Ausrüstung, Szene, Format und vorhandenes Material; Zeitfenster fortlaufend und in der Summe gleich der Gesamtdauer; jeder Shot mit Aktion, Einstellungsgröße, Kameraposition, Text, Material und Ton; jeder Materialposten mit Status; zum Schluss Rechte, Datenschutz und Faktengrenzen prüfen.

Langtext, Sprechtext und Storyboard sind drei verschiedene Dinge: Der Langtext erzählt vollständig, der Sprechtext ist beim ersten Zuhören verständlich, das Storyboard macht die Produktion vor Ort wirklich machbar. In zwei Aufgaben zerlegt bekommt man nicht nur leichter gute Ergebnisse – man erkennt auch leichter, ob das Problem beim Inhalt liegt, beim Ausdruck oder bei der Dreh-Umsetzung.

---

Weiter: [Lange Audio- und Videodateien: Transkription, Untertitel und Highlight-Schnitte →](/de/doubaowork/case-av-transcription)
