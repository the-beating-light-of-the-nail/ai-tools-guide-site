# Fortgeschritten: die drei Workbenches – Design, Folien, Schreiben

Neben der Allround-Workbench bietet QoderWork für drei häufige Erzeugnistypen eigene Vertical-Workbenches an: Design-Canvas, 16:9-Folien und Langtext-Schreiben. Der Umschalter sitzt unten links am Eingabefeld.

> Offizielle Dokumentation: die drei Seiten design / slides / writing unter docs.qoder.com/zh/qoderwork.

## Design-Workbench: ein KI-nativer „Design ist Code"-Canvas

In natürlicher Sprache beschreiben und auf unbegrenztem Canvas **lauffähige, editierbare, lieferbare** Designergebnisse erhalten; die Ergebnisse gelten als Code-Assets und lassen sich per Klick „an Qoder (IDE) übergeben" und dort weiterentwickeln.

**Acht-Schritt-Ablauf**: Workbench wechseln → Anliegen beschreiben (Screenshots und Links lassen sich direkt einfügen) → optional Einstellungen (Stilreferenz / Arbeitsordner / Detailtreue / Komponentenbibliothek) → Ausführungsmodus wählen (bei „Direkt ausführen" entfällt die Klärung; mit „Design-Plan-Modus" erst abstimmen) → Klärungsfragen beantworten (jede Frage hat Antwortoptionen, auch „KI entscheidet selbst") → Design-Plan bestätigen („Vertrag"-Panel prüfen: Ergebnis/Plattform/Ausgabe/Komponenten/Detailtreue/Stil) → Erzeugung beobachten (links läuft das „tiefe Nachdenken" in Echtzeit mit) → Vorschau (CTAs anklickbar, Hover prüfbar, Navigationsfluss durchgehen).

**Zentrale Einstellungen**:

| Einstellung | Werte |
| --- | --- |
| Stilreferenz | Automatisch (aus 161 Referenzen) oder konkret Airbnb / Apple / Carbon / Ant Design usw. |
| Detailtreue | Wireframe / High-Fidelity (Standard) |
| Komponentenbibliothek | Keine (HTML-first) / shadcn/ui / Spark Design / Ant Design |

**Die drei Iterationshebel**: Anweisungen nachreichen; **Nudge-Feinjustierung** (Farben, Abstände, Ecken-Parameter, ohne Neubeschreibung); die hinter dem Canvas liegende Designdatei direkt im Quellcode bearbeiten. Die drei Mechanismen (Rückfragen, Design-Plan, Nudge) lösen das alte Problem der „falsch geratenen Richtung" – bei fehlenden Informationen wird erst nachgefragt, nicht geraten.

## Folien-Workbench: erst die Gliederung, dann die Folien

Der Canvas rechts ist ein 16:9-, 1280×720-HTML-Arbeitsbereich für Folien. **Harte Vorgabe: die Gliederung muss zuerst bestätigt werden** – im Reiter „Gliederung" trägt jeder Abschnitt eine Kurzbeschreibung und ein Layout-Label (Titelfolie/Textgliederung/Bild links, Text rechts/zweispaltig/Zitat usw.); erst mit „Gliederung annehmen" beginnt die Erzeugung; passt sie nicht, mit Feedback zurückweisen.

Ablauf: Workbench wechseln → Anliegen beschreiben → Vorlage wählen (auch „ohne Vorlage"; 35 eingebaute) → Klärung beantworten (Zielgruppe, Seitenzahl, Sprache) → **Gliederung bestätigen** → Erzeugung verfolgen (Miniaturen werden eine nach der anderen fertig) → Nachbearbeitungsoptionen (alles überspringbar) → Ergebnis ansehen.

Export der Ergebnisse: **PPTX, PDF, HTML**; häufig genutzte Vorlagen lassen sich als „Vorlage speichern" und wiederverwenden.

Offizielle Empfehlung: „Gute Anforderungen nennen neben dem Thema zugleich die **Zielgruppe** und **was im Gedächtnis bleiben soll**."

## Schreib-Workbench: Versionsverwaltung für lange Texte

Für Artikel, Berichte, Posts, technische Leitfäden, interne Dokumente. Der Dokument-Arbeitsbereich = Markdown-Dateibaum + Editor; die Ergebnisse landen lokal im Verzeichnis `outputs/`; **jede Iterationsrunde bleibt als rückverfolgbare Version erhalten** (oben rechts im Editor zwischen „neueste/ältere Version" umschalten, PDF-Export möglich).

Tonfall, fünf Optionen: keine Vorgabe (KI entscheidet) / formell / locker / technisch / kreativ.

Fünf offizielle Musterfälle:

| Szenario | Eingabe → Ausgabe |
| --- | --- |
| Lose Notizen → technischer Leitfaden | Notizordner → strukturierter Leitfaden |
| Schuldfreies internes Fehler-Review | Gespräch/Logs → Review-Dokument |
| PR-Liste → Release Notes | Git-Verlauf → gruppiert nach Features/Improvements/Fixes |
| Technikblog | Thema + Umfang/Gliederung → fertiger Text |
| API-Spezifikation → Integrationsleitfaden | Schnittstellendoku → Auth, cURL-Beispiele, Fehlertabelle, FAQ |

Achtung: Nach manuellen Bearbeitungen arbeitet die KI in den folgenden Runden **auf Basis Ihrer Änderungen** weiter – menschliche Überarbeitungen werden von der KI nicht überschrieben.

## Welche Workbench wählen?

| Bedarf | Workbench |
| --- | --- |
| Dateien, Daten, Recherche, Automatisierung | Allgemein |
| Poster, Landingpages, UI-Prototypen | Design |
| Berichte, Schulungsunterlagen, Pitch | Folien |
| Artikel, Berichte, Leitfäden | Schreiben |

> Zum Vergleich: TraeWork deckt Design-Szenarien über den Design-Modus + HTML-Ergebnisse ab (siehe [Eine präsentationsreife PPT erstellen](/de/traework/case-ppt)), während QoderWorks Vertical-Workbenches stärker „aus dem Kasten fertig" sind – die Route nach persönlichem Gusto wählen.
