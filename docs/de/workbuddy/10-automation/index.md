# Kapitel 10: Automatisierte Aufgaben in WorkBuddy

Was Menschen wirklich Kraft kostet, sind selten die großen kreativen Aufgaben – sondern jeden Tag dieselben Seiten öffnen, ähnliche Informationen sammeln, in dasselbe Format bringen und das Ergebnis an dieselbe Gruppe schicken. Der Wert der WorkBuddy-Automatisierung liegt darin, diese Arbeiten mit „festen Zeitpunkten, ähnlichen Schritten und prüfbaren Ergebnissen" in wiederholt ausführbare Agent-Aufgaben zu verwandeln.

## Warum WorkBuddy automatisieren kann

Klassische Automatisierung verlangt meist, dass ein Mensch jeden Schritt in Code fasst: welches System geöffnet, welcher Button geklickt, welche Spalte gelesen wird und wie bei Ausnahmen verzweigt wird.

WorkBuddy ist anders: Es kombiniert „zeitgesteuerte Ausführung" mit dem Verständnis, den Werkzeugaufrufen und der Dateiverarbeitung des Agenten. Sie müssen nicht jedes Detail in ein Programm gießen – aber Ziel, Eingabe, Grenzen und Ergebnis klar benennen.

Die Automatisierungskonfiguration wird im lokalen Client gespeichert, einschließlich Aufgabenname, Prompt, Zeitplan, Arbeitsverzeichnis und Ausführungsstatus. Zum festgelegten Zeitpunkt startet WorkBuddy mit der aktuell angemeldeten Identität eine Agent-Aufgabe und ruft gemäß dem Prompt Modelle, Skills, MCP oder Konnektoren auf, um im angegebenen Arbeitsverzeichnis Abfragen, Zusammenfassungen und Dateiverarbeitung zu erledigen.

Für stabilen Betrieb sorgen fünf Elemente: ein eindeutiger Auslösezeitpunkt, eine wiederholbare Eingabequelle, ein ausreichend konkreter Prompt, ein festes und kontrolliertes Arbeitsverzeichnis sowie Abnahmekriterien, an denen Erfolg oder Misserfolg erkennbar sind.

## Wofür sich Automatisierung eignet

Der anschaulichste Nutzen: täglich, wöchentlich und monatlich wiederkehrende Arbeiten an WorkBuddy übergeben. Der Wert liegt nicht nur in gesparten Klicks – Aufgaben geraten nicht im Trubel in Vergessenheit, und die Ausführungsmethode ändert sich nicht je nachdem, wer gerade dran ist.

| Szenario | Was automatisiert werden kann | Typische Ergebnisse |
|-|-|-|
| News & Intelligence | Zeitgesteuert Branchennachrichten, Politik und Wettbewerber-Updates suchen, dedupliziert zusammenfassen | Tagesbriefing, Risiko-Hinweise, Quellenliste |
| Tages- und Wochenberichte | Aufgaben, Kalender, Dokumente und Datenänderungen zusammenfassen, Bericht in fester Struktur erzeugen | Tagesbericht, Wochenbericht, Projekt-Fortschrittstabelle |
| Daten & Tabellen | Dateien sammeln, Tabellen zusammenführen, Felder bereinigen, fehlende Werte und Ausreißer prüfen | Abgleichstabelle, Anomalienliste, Trenddiagramm |
| Dateiverwaltung | Nach Datum und Projekt archivieren, stapelweise umbenennen, Text aus PDFs oder Bildern extrahieren | Archivverzeichnis, Index, Verarbeitungslog |
| Content-Betrieb | Themen sammeln, Titel-Kandidaten erzeugen, Material ordnen, Veröffentlichungsentwürfe erstellen | Themenpool, Content-Entwürfe, Cover-Bedarfsliste |
| Wissensmanagement | Sammlungen, Protokolle und Ideen regelmäßig ordnen, Tags und Quellen ergänzen | Wissenskarten, Wochenrückblick, Abarbeitungsliste |
| Produkt & Entwicklung | Logs inspizieren, Issues zusammenfassen, Abhängigkeiten und Builds prüfen | Inspektionsbericht, Defekt-Zusammenfassung, Upgrade-Vorschläge |
| Persönliches | Lernpläne erstellen, Phasen-Rückblicke, Termin- oder Erinnerungsaufgaben | Lernliste, Erinnerungen, Ausführungsprotokoll |



## Welche Aufgaben sich zuerst automatisieren lassen

Beurteilen Sie das mit sechs Fragen. Je mehr Antworten „Ja" lauten, desto besser eignet sich die Aufgabe für die erste Automatisierungsrunde:

1. **Wiederholt sie sich?** Mindestens wöchentlich, kein einmaliges Bedürfnis;
2. **Ist die Eingabe stabil?** Ordner, Webseiten, Tabellen oder Konnektor-Quellen sind relativ fest;
3. **Sind die Schritte ähnlich?** Der Inhalt ändert sich, die Verarbeitung bleibt im Wesentlichen gleich;
4. **Ist das Ergebnis abnehmbar?** Anzahl, Felder, Zeitraum, Quellen oder Dateientstehung lassen sich prüfen;
5. **Ist ein Fehlschlag reparierbar?** Nach einem Fehlschlag kann neu gestartet werden, ohne sofort irreversiblen Schaden;
6. **Sind die Rechte kontrollierbar?** Arbeitsverzeichnis, Konto und erlaubte Werkzeuge lassen einschränken.

Der beste Einstieg ist meist nicht „führe mein ganzes Unternehmen", sondern „jeden Tag um 8 Uhr zehn KI-Branchennachrichten sammeln, deduplizieren, Links behalten und ein Markdown-Briefing im Zielverzeichnis erzeugen". Je klarer der Rahmen, desto leichter lassen sich Probleme finden und schrittweise beheben.



## Vom einen Satz zur lauffähigen Aufgabe

Bevor Sie eine Automatisierung anlegen, formen Sie die mündliche Anforderung in eine kleine Aufgabenbeschreibung um. Ein verlässlicher Prompt beantwortet mindestens: wann ausgeführt wird, was gelesen, wie verarbeitet wird, wohin die Ausgabe geht, wann die Aufgabe als erledigt gilt, was bei Fehlschlag passiert und welche Aktionen verboten sind.

```text
Aufgabenname: Tägliches KI-Branchenbriefing
Auslösezeit: täglich 08:00, Zeitzone Europe/Berlin
Arbeitsverzeichnis: automation/ai-daily

Eingabe:
- Suche nach KI-Produkt-, Modell- und Branchennachrichten der letzten 24 Stunden
- Nur öffentlich zugängliche Quellen mit erhaltenem Link verwenden

Verarbeitungsregeln:
1. Doppelte Ereignisse zusammenführen, nach Produkt, Technologie und Business ordnen
2. Jeder Eintrag mit Titel, 100-Zeichen-Kurzfassung, Quelle, Veröffentlichungszeit und Link
3. Inhalte ohne bestätigbare Zeit oder Quelle unter „zu prüfen" ablegen, nichts erfinden

Ausgabe:
- Speichern als YYYY-MM-DD-ai-daily.md
- Maximal 10 Einträge im Haupttext, am Ende die Quellenliste
```

## Eine Automatisierungsaufgabe anlegen

Öffnen Sie in WorkBuddy die Seite „Automatisierung"; dort sehen Sie geplante Aufgaben und den Ausführungsverlauf. Nach dem Klick auf „Hinzufügen" konfigurieren Sie Aufgabenname, Arbeitsbereich, Prompt, Modell und Skills, Zeitplan sowie ob das Ergebnis an das WorkBuddy-Mini-Programm gepusht wird.

| Konfiguration | Zweck | Eingabeempfehlung |
|-|-|-|
| Name | Unterscheidung der Automatisierungsaufgaben | Objekt und Frequenz klar benennen, z. B. „Tägliches KI-Briefing" |
| Arbeitsbereich | Begrenzt Ausführungsverzeichnis und Ablageort der Dateien | Pro Automatisierung ein eigenes Verzeichnis, um Überschreiben zu vermeiden |
| Prompt | Beschreibt Ziel, Schritte, Ausgabe und Grenzen | Die Vorlage oben verwenden, nicht nur einen Schlachtruf |
| Modell und Skills | Bestimmen verfügbares Verständnis und Ausführung | Nur die Skills und Konnektoren wählen, die die Aufgabe wirklich braucht |
| Zeitplan | Frequenz und Gültigkeitszeitraum festlegen | Zuerst im niedrigen Takt testen, dann steigern |
| Push ans Mini-Programm | Ergebnis nach Abschluss am Smartphone sehen | Vor dem Aktivieren klären, welche Ergebnisse über eine sichere Verbindung in die Cloud gelangen |

Klicken Sie auf „Automatisierung",

![](/workbuddy/10-automation/assets/001_image_RklAba93No.png)

„Automatisierung hinzufügen" – schon können Sie Ihre Aufgabe frei definieren

![](/workbuddy/10-automation/assets/002_image_MhojbPRsOo.png)

Zum Beispiel ein täglicher KI-News-Push, zeitgesteuert um 8 Uhr

![](/workbuddy/10-automation/assets/003_image_Ff6fbYuGoo.png)



## Wer den Prompt nicht von Null schreiben will: Vorlagen nutzen

Die offiziellen Aufgabenvorlagen decken gängige Szenarien ab wie News-Push, Wochembericht, Terminbuchung für Check-ups oder Lernplan. Ihr Wert: grundlegende Felder und Aufgabenstruktur. Sie sind aber keine Endantwort – nach der Auswahl sollten Sie Datenquellen, Zeitraum, Ausgabeort, Abnahmekriterien und verbotene Aktionen anpassen.

![](/workbuddy/10-automation/assets/004_%E8%87%AA%E5%8A%A8%E5%8C%96-%E4%BB%BB%E5%8A%A1%E6%A8%A1%E6%9D%BF_FYNwbDWqbo.png)



## Weitere lohnende Automatisierungsszenarien

| Aufgabe | Auslösung | Empfohlene manuelle Prüfung |
|-|-|-|
| Wochenbericht | Jeden Freitag aktuelle Aufgaben, Kalender und Ergebnisse lesen | Fortschritt und Risikoaussagen erst nach Prüfung versenden |
| Vertriebs-Tagesbericht | Täglich Neukunden und Follow-ups aus CRM oder Tabellen zusammenfassen | Beträge, Kundenstatus und Verantwortliche abgleichen |
| Kosten- und Rechnungsordnung | Monatlich Belege und Spesenabrechnungen im Zielverzeichnis lesen | Vor der Finanzbuchung Steuerbeträge, Doppelbelege und Zuordnung prüfen |
| Self-Media-Themenradar | Täglich Trends, Branchenthemen und Kommentarfragen sammeln | Marktpositionierung und Trend-Jagd menschlich bewerten |
| Wissensdatenbank-Wochenrückblick | Wöchentlich neue Notizen, Sammlungen und Protokolle ordnen | Kategorisierung, Quellen und Langzeitwert bestätigen |
| Projekt-Risikoinspektion | Täglich verzögerte Aufgaben, Buildergebnisse und Fehlerlogs prüfen | Schwerwiegende Alarme vom Verantwortlichen klären lassen |
| Wettbewerber-Preismonitoring | Zeitgesteuert öffentliche Seiten oder autorisierte APIs lesen | Bei Änderungen des Seitenaufbaus pausieren und Parsing anpassen |
| Lernplan-Rückblick | Tägliche Erinnerung, am Wochenende Zusammenfassung | Nächste Wochenplanung an die tatsächliche Energie anpassen |
