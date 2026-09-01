# Die erste Aufgabe: von einem Satz zum Ergebnis

Nach der Installation durchlaufen wir einen kompletten Aufgabenfluss: Starten → beobachten → abnehmen → teilen. Im Fokus steht der Work-Modus.

## Aufgabe starten

1. **Wählen Sie im Eingabefeld der Hauptoberfläche ein Projekt** (in der Web-Version können Sie auch ohne Auswahl direkt loslegen – das System erstellt dann automatisch ein Projekt und benennt es nach den Schlüsselwörtern Ihrer Anweisung);
2. Geben Sie die Aufgabenanweisung ein – als Text oder Sprache;
3. Senden.

Im Eingabefeld lässt sich zusätzlich Kontext beifügen: Anhänge (.pptx, .xlsx usw.), Bilder, Slash-Befehle (`/`) und Skills.

Ein Beispiel für eine erste Aufgabe:

```text
Lies die von mir hochgeladene Datei Verkaufsdaten.xlsx, berechne für diesen Monat Umsatz und Bruttomarge pro Produktlinie und erstelle ein Ranking.
Liefere eine Excel-Übersichtstabelle und eine 200-Wörter-Zusammenfassung der Ergebnisse.
Anforderung: Alle Zahlen müssen mit der Quelldatei übereinstimmen; keine Vermutungen über Ursachen; unbestätigte Punkte als „zu prüfen“ markieren.
```

## Ausführung beobachten: das Tool-Panel

Oben rechts lässt sich über „Tool-Panel einblenden“ beobachten, wie die KI arbeitet. Je nach Modus gibt es verschiedene Registerkarten:

| Registerkarte | Verfügbare Modi | Zweck |
| --- | --- | --- |
| Aufgabenzusammenfassung | Work / Design: To-dos, Ergebnisse, Referenzinfos; Code: To-dos, Kontext | Zerlegte Schritte und Ergebnisse verfolgen |
| Browser | alle Modi | KI-Ergebnisse in der Vorschau ansehen, Optik und Interaktion prüfen |
| Terminal | Code | Terminal-Befehle ausführen |
| Canvas | Design | Ergebnisse ansehen/ordnen, Design-Dateien exportieren |

## Ergebnisse abnehmen und ändern

Web-App-Ergebnisse öffnen nach Fertigstellung automatisch eine Vorschau-Registerkarte. Für Änderungen gibt es drei Wege:

1. **Direkt ändern**: Oben rechts auf „Element auswählen“ klicken → Element markieren → Eigenschaften im Panel „Design“ oder „CSS“ ändern (manuelle Bearbeitung nur für Textelemente, z. B. Schriftgröße, Fettdruck, Ausrichtung);
2. **Als Kommentar in den Chat**: Änderungswunsch eingeben und zusammen mit dem gewählten Element an die KI senden;
3. **Per Screenshot ändern**: Element oder Bereich auswählen → mit Rechteck/Pfeil markieren → Änderungswunsch eintragen → an die KI senden (oder zur Kommentarliste hinzufügen und gebündelt senden).

HTML-Ergebnisse (Anforderungsdokumente, Produktprototypen, Analyseberichte) unterstützen die **Verknüpfung von Prototyp und Dokument**: Nach dem Ändern eines Prototypteils wird der entsprechende Inhalt im PRD-Dokument automatisch aktualisiert.

## Aufgaben und Ergebnisse verwalten

- **Aufgabenverwaltung**: Über „Weitere Aktionen“ in der Taskleiste links (oder neben dem Aufgabennamen oben im Chat-Panel) → anheften, Aufgaben-Dateien anzeigen (Liste/Baum), neu erstellen/umbenennen/löschen;
- **Globale Suche**: Suchsymbol oben links, findet Aufgaben oder Queries über alle Modi hinweg;
- **Ergebnisbereich**: Über „Meine Dateien“ in der linken Navigation werden lokale Ergebnisse, Cloud-Ergebnisse und Feishu-Cloud-Dokumente zentral verwaltet. Im „···“-Menü der Karte: anheften, „in Aufgabe öffnen“ (weiterbearbeiten mit dem ursprünglichen Dialogkontext), teilen (öffentlicher Link, der auch nach Updates immer die neueste Version zeigt), herunterladen (nur Cloud-Ergebnisse), löschen (**löscht auch die zugehörige ursprüngliche Aufgabe unwiderruflich**).

## Dialog teilen

Ein gutes Ergebnis Kollegen zeigen: Im Dialogverlauf auf das „Teilen“-Symbol beim Query/der Antwort zeigen (oder in der Aufgabenliste rechtsklicken und „Teilen“ wählen) → gewünschte Inhalte auswählen → zwei Formate:

- **Als Bild**: kopieren oder herunterladen, ideal für Gruppenchats oder Dokumente;
- **Als Link**: generiert Link und QR-Code.

## Wie schreibt man eine gute Aufgabenbeschreibung?

Wie bei jeder aufgabenorientierten KI hängt die Qualität des Ergebnisses bei TraeWork von der Aufgabenbeschreibung ab. Sechs Elemente:

| Element | Zu beantwortende Frage |
| --- | --- |
| Ziel | Welches Problem soll am Ende gelöst werden |
| Eingabe | Welche Dateien, Verzeichnisse oder Links werden genutzt |
| Aktion | Analysieren, ordnen, umwandeln oder erzeugen |
| Einschränkungen | Was darf nicht geändert werden, welche Standards gelten |
| Ausgabe | Welche Datei wird geliefert und wohin gelegt |
| Abnahme | Woran wird ein gutes Ergebnis erkannt |

Beim ersten Mal unsicher? Oben in der linken Navigation gibt es die **Vorlagenbibliothek** mit vorkonfigurierten Aufgabenbeschreibungen, Ausführungsschritten und Anforderungen je Szenario – auf „Gleiches erstellen“ klicken, Hintergrundmaterial ergänzen und direkt starten.

---

Weiter: Der KI die „Standardvorgehensweise“ mitgeben – [Skills →](/de/traework/04-skills)
