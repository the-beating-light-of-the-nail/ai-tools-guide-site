# Fallbeispiel: Dynamisches Berichten – Daten-Dashboards, Wochenbericht und Tätigkeitsbericht

Die Zeit der statischen Screenshot-Wochenberichte kann vorbei sein. Dieses Kapitel zeigt an drei echten Szenarien TraeWorks Arbeitsweise mit „dynamischen Erzeugnissen": Daten-Dashboard, Wochenbericht, Tätigkeitsbericht.

> Die Szenarien sind adaptiert aus dem Bericht der Operations Research Society [„Mit diesem TRAE-Work-Update wird Ihr Bericht direkt ,bewegt'"](https://zhuanlan.zhihu.com/p/2064037124559606413) (2026-07) und dem Office-Assistenten-Praxistest von K Jie Research Society ([2026-08](https://zhuanlan.zhihu.com/p/2071317142574724109)).

## Szenario 1: Daten-Dashboard

**Schmerzpunkt**: Die Zeit für das Quartalsbericht geht für die „Darstellung" statt für den „Inhalt" drauf – PDF exportieren, Screenshots zusammendrücken, Dateien hin- und herschicken; nach jeder Datenaktualisierung alles von vorn.

**Vorgehen**:

1. CSV-Datendateien als Paket hochladen;
2. die Struktur in ganz gewöhnlichen Worten beschreiben:

```text
Erstelle ein Quartals-Daten-Dashboard: ganz oben die Gesamtplatzierung der Marke,
darunter Trend-, Trichter- und Vergleichsdiagramme verschiedener Kennzahlen.
```

Das Ergebnis ist eine **interaktive, dynamische Webseite**: Ein Klick auf ein Diagramm zeigt konkrete Werte; nach Datenaktualisierung wird sie neu erzeugt – der geteilte Link bleibt gleich, der Inhalt aktualisiert sich automatisch. TraeWork destilliert zudem automatisch Schlussfolgerungen, zum Beispiel:

> Marke X belegt bei Suchvolumen Platz 5, bei Käuferzahl aber Platz 4 – die Konversion von Suche zu Kauf ist überdurchschnittlich effizient, und die IP-Fanbindung zeigt einen klaren Vorteil.

Feinkorrekturen auf drei Wegen: einen Seitenbereich aufziehen und per Kommentarfeld Anmerkungen geben (z. B. „aufs Cover ein paar verspielte Elemente"), Layout und Text von Hand ziehen, oder direkt in der Vorschau Elemente anklicken und Eigenschaften ändern – siehe [Die erste Aufgabe](/de/traework/03-first-task).

**Gleiches Prinzip, andere Anwendungen**: das „Programmheft" der Jahresabschlussfeier (Dateien zu Aufgabenverteilung/Ablauf/Organisation hochladen → mit einem Satz eine illustrierte Webseite erzeugen); ein Interaktionsspiel für die Community:

```text
Erstelle ein „Nischenwissen-Quizspiel": insgesamt 20 Fragen, pro Level wird zufällig eine Multiple-Choice-Frage gezogen.
Richtige Antwort → nächstes Level; falsche Antwort → erst die richtige Lösung zeigen, dann nächstes Level.
Am Ende erscheinen Punktestand, Rang und wie viele Personen man überholt hat.
```

Heraus kommt eine HTML-Datei mit vollständiger Interaktionslogik – per Klick in die Gruppen teilen und sofort spielen.

## Szenario 2: Wochenbericht in einer Minute (mit dem Office-Assistenten)

Nach dem Verbinden des [Office-Assistenten](/de/traework/05-bot-assistant) senden Sie in Feishu einfach:

```text
Optimiere meine Arbeitszusammenfassung und schreibe daraus einen Wochenbericht mit den Abschnitten Fazit dieser Woche, wichtige Fortschritte, Planung nächste Woche:
- Fazit: in einem Satz das berichtenswerteste Ergebnis der Woche
- Fortschritte: 3-5 Punkte, mit jeweils was getan wurde und welches Ergebnis daraus entstand
- Planung: 2-3 Punkte, mit den voranzutreibenden Themen und der benötigten Unterstützung
```

Nach der Erzeugung direkt hintendran:

```text
Trage den Wochenbericht dieser Woche in ein Feishu-Dokument ein und sende ihn in die Berichtsgruppe.
```

Im Test in unter einer Minute erledigt. Der Trick: **die KI zuerst Ihre Rohnotizen zusammenfassen lassen** („Schau nach, was in diesem Dokument im Wesentlichen steht"), die Gruppierung bestätigen und erst dann die Wochenbericht-Struktur überstülpen.

## Szenario 3: Tätigkeitsbericht (strukturierte Volltext-Vorlage)

```text
Erstelle aus meinen Arbeitsaufzeichnungen einen logisch klaren, auf das Wesentliche fokussierten Tätigkeitsbericht. Anforderungen:
1. Tätigkeiten kategorisieren, zusammenführen, deduplizieren – kein Tagebuch-Stil
2. 3-5 Kernleistungen destillieren, je entfaltet nach „Ausgangslage – zentrale Aktionen – tatsächliches Ergebnis – Geschäftswert – persönlicher Anteil"
3. Vorrangig mit Zahlen und Vorher-nachher-Vergleichen arbeiten; Teamerfolge vom persönlichen Anteil trennen
4. Keine Informationen erfinden
5. Ausgabe umfasst: Gesamtzusammenfassung, Kernleistungen, Kompetenzaufbau, Problem-Rückblick, Planung der nächsten Phase
6. Sprache professionell, knapp, selbstbewusst; erst das Ergebnis, dann der Prozess; wenig Floskeln

Position: [Content-Operations-Praktikant (Social Media)]
Berichtszeitraum: [Q2 2026]
Dokument mit Arbeitsaufzeichnungen: @„Wochenarbeitszusammenfassung Praktikum"
```

„Keine Informationen erfinden" ist die zentrale Auflage für solche sensiblen Dokumente. Zusätzlich können Sie Zugriff auf Kalender, Besprechungsprotokolle und Chatverläufe freigeben, damit die Berichtsgrundlage vollständiger wird.

## Methodische Zusammenfassung

Allen drei Szenarien gemeinsam ist eine Kette: **Rohnotizen → KI-Zusammenfassung → strukturierte Vorlage → zurück ins Kollaborationswerkzeug**.

| Szenario | Eingabe | Kern der Vorlage | Ausgabe |
| --- | --- | --- | ---|
| Daten-Dashboard | CSV-Daten | Strukturbeschreibung + Diagrammtypen | Interaktive Webseite (dauerhaft gültiger Link) |
| Wochenbericht | Dokument mit Arbeitszusammenfassung | Dreiteilung Fazit/Fortschritt/Planung | Feishu-Dokument + Gruppennachricht |
| Tätigkeitsbericht | Arbeitsaufzeichnungen + freigegebene Daten | Strukturierte Vorlage mit sechs Anforderungen | Fünfteiliger Tätigkeitsbericht |

Und wenn aus dem „wöchentlichen manuellen Zusammentragen" eine automatisch zeitgesteuerte Aufgabe werden soll? Dann geht es weiter mit [Automatisierte zeitgesteuerte Aufgaben](/de/traework/07-automated-tasks).
