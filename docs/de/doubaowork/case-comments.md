# Aus dem Kommentarbereich das nächste Thema finden — und die Auswertung ehrlich machen

> Szenario: Viele werten ihre Inhalte aus und hinterlassen am Ende drei Sätze — Aufrufe mittel, Speicherungen gut, beim nächsten Mal optimieren. Das ist keine Auswertung, höchstens ein Blick ins Backend.

Eine Auswertung, die dem nächsten Beitrag wirklich hilft, muss konkreter antworten: Was fragen die Leute eigentlich? Welche Fragen kehren wieder? Welche Kommentare sind zwar selten, betreffen aber Vertrauen und Sicherheit? Ist die Speicherquote im Ziel — warum bricht die Abspielrate trotzdem stark ein? Was wird beim nächsten Mal behalten, was optimiert, welche einzige Variable nur getestet? In der Praxis wurden beide Auswertungsabläufe je einmal durchlaufen:

```text
Aufgabe 1: 32 Kommentare → Vollständigkeitsprüfung → Hauptkategorie-Kennzeichnung → Themen-Clustering
        → Trennung von Fakt und Schlussfolgerung → 8 Kandidaten mit Bewertung → Top 3 → nur ein empfohlenes Thema

Aufgabe 2: 72-Stunden-Kennzahlen + Vorab-Ziele und Produktionsnotizen → statistische Bezugsbasis einfrieren
        → Aggregation und stichprobenweise Nachrechnung von Hand → Vergleich nach Quelle und Datum
        → Abgleich mit Zielen und Produktionskosten → Behalten / Stoppen / Testen → Brief für den nächsten Beitrag
```

Tool-Kombination: Für Kommentar-Einblicke der Skill «Nutzerforschung und Bedarfsanalyse» + lokale CSV (Rohton-Kennzeichnung, quantitative Analyse, Bedarfsbündelung); für die Auswertung nach Veröffentlichung der Skill «Datenanalyse» + Kennzahlen-CSV + Ziele und Produktionsnotizen (erst Bezugsbasis einfrieren, dann Abgleich und Betriebsauswertung). Beide Aufgaben sind strukturierte Analysen einzelner lokaler Materialien — **kein** Experten-Team, kein MCP, kein Plattform-Connector nötig. Die kleinste Kombination, die die Aufgabe löst, ist meist auch die beste.

> Beim Umgang mit echten Kommentaren: Daten zuerst aus dem Plattform-Backend exportieren oder über einen autorisierten Nur-Lese-Connector holen; Benutzernamen, Telefonnummern, Firmen, Gruppen-IDs, Direktnachrichten und andere persönliche Daten nicht direkt an die AI übergeben.

## Aufgabe eins: Was fragt der Kommentarbereich — Nutzererkenntnisse separat auswerten

Ausführbar, sobald eine rechtmäßig nutzbare Menge Kommentaren vorliegt; Backend-Kennzahlen werden nicht vorausgesetzt. Die vier entscheidenden Punkte des Prompts: **jeder Kommentar zählt nur in eine Hauptkategorie** (verhindert Doppelzählung); **jedes Thema nennt Kommentaranzahl, Interaktionsmenge, repräsentative IDs, Originalzitate und Quelle**; **was die Originalzitate belegen, wird getrennt von den Schlussfolgerungen des Analysten**; **es werden nur Analysedateien erzeugt — nicht auf Kommentare geantwortet, nicht geschrieben, nichts veröffentlicht**.

```text
Ich betreue einen Account mit AI-Tools für normale Bürobeschäftigte. Bitte nutze die
Funktion "Nutzerforschung und Bedarfsanalyse" und analysiere ausschließlich die soeben
gefundene und eingelesene Datei mit 32 Kommentaren:
[Pfad zu comments.csv, oder ändern in "analysiere nur die [Datei] im aktuellen Chat"]

Datenhinweis: Es handelt sich um anonymisierte Beispieldaten für interne Übung, die zu
keinem realen Account oder Kommentator gehören.
Ergänze keine Kommentare aus dem Internet und leite aus dem Account-Profil keine
sensiblen persönlichen Merkmale wie Alter, Geschlecht, Beruf, Region oder Einkommen ab.

Bitte nach folgenden Schritten vorgehen:
1. Zuerst Daten-Vollständigkeitsprüfung: Zeilenzahl, Felder, fehlende Werte, doppelte
   Kommentare und mutmaßliche Spam-Meldungen bestätigen.
2. Jedem Kommentar genau eine "Hauptkategorie" zuweisen: Frage, Zustimmung, Widerspruch,
   Missverständnis, Ergänzung eines Falls, Produktbedarf, Gefühlsäußerung, Spam.
   Bei Bedarf Zusatz-Labels, gezählt wird aber nur die Hauptkategorie.
3. Kommentare zu Nutzerfragethemen clustern. Jedes Thema muss liefern: Kommentaranzahl,
   Interaktionsmenge (Likes + Antworten), repräsentative comment_id, 1—2 Originalzitate
   und die zugehörige source_url.
4. Deutlich trennen zwischen "Fakten, die die Originalzitate direkt belegen" und "deinen
   Schlussfolgerungen". Schlussfolgerungen werden eigens gekennzeichnet und dürfen nicht
   als Nutzerkonsens ausgegeben werden.
5. Separat auflisten: Fragen, die sich für öffentliche Antworten eignen; Risiken, die
   privat oder zurückhaltend zu behandeln sind; ignorierbarer Spam.
6. 8 Kandidaten für den nächsten Inhalt erzeugen. Jeden nach Bedarfshäufigkeit,
   Interaktionsstärke, Umsetzbarkeit und Vertrauens-/Sicherheitswert je 1—5 Punkte
   bewerten, mit Gesamtpunktzahl und Beleg-comment_id.
7. Top 3 auswählen; danach ausdrücklich nur ein einziges Thema für den nächsten Beitrag
   empfehlen mit: Thema-Titel, Leserfrage, Versprechen des Artikels, 5 Fragen, die er
   beantworten muss, nötige Belege und Grenzen, die nicht überzogen werden dürfen.
8. Eine Selbstprüfung: Ergibt die Summe der Kategorien die Zahl gültiger Kommentare?
   Lassen sich Zitate auf comment_id/source_url zurückführen? Wurden Schlussfolgerungen
   als Fakten ausgegeben?

Bitte speichern als kommentar-nutzerfragen-karte.md. Im Chat nur zusammenfassen:
Zahl gültiger Kommentare, Zahl Spam-Kommentare, Top-3-Themen und das empfohlene
Thema des nächsten Beitrags.

Sicherheitsgrenzen: Nur Analysedateien erzeugen; nicht öffentlich antworten, keine
Direktnachrichten, nichts veröffentlichen, nichts in eine Plattform zurückschreiben.
```

Testergebnis: Die Vollständigkeitsprüfung fand unter 32 Datensätzen 1 Spam-Eintrag, 31 gültige Kommentare; Top 3 waren «Transkription langer Audios und manuelles Korrekturlesen in der Praxis» (16/20, C026 mit 108 Interaktionen — Höchstwert), «Checkliste der AI-Ausführungsberechtigungen» (15/20, mehrere Kommentare zum selben Berechtigungs-Unbehagen), «Echte Misserfolgsfälle und ihr Korrekturverlauf» (15/20, zwei hochinteraktive Kommentare mit zusammen 149). Am Ende wurde nur ein Thema empfohlen: **Transkription langer Audios und manuelles Korrekturlesen in der Praxis** — C026 schreibt ausdrücklich «ich muss täglich Interviews ordnen», und das Thema deckt zugleich benachbarte Fragen wie Konferenzaufnahmen oder Einstiegsschwierigkeiten ab.

Menschlich bleibt dreierlei zu prüfen: Ob Zitate aus dem Kontext gerissen sind; ob wenige, aber Vertrauen, Sicherheit und Privatsphäre betreffende Fragen von Durchschnittswerten überdeckt wurden; ob das empfohlene Thema sich mit echten Screenshots, Daten oder Misserfolgsverläufen beantworten lässt.

## Aufgabe zwei: Auswertung nach Veröffentlichung — der nächste Beitrag startet nicht wieder bei null

Diese Aufgabe ist von Aufgabe eins unabhängig: Eine Kennzahlentabelle + Vorab-Ziele und Produktionsnotizen genügen. **Die häufigste Falle der Auswertung ist ein wirrer Nenner** — ist die Abspielrate vollständige Wiedergaben geteilt durch Aufrufe oder durch 3-Sekunden-Aufrufe? Ohne vorherige Klärung liefert dasselbe Datenmaterial völlig verschiedene Ergebnisse:

```text
Dies ist eine neue, eigenständige Auswertungsaufgabe nach Veröffentlichung. Bitte nutze
die Funktion "Datenanalyse" und lies ausschließlich die beiden lokalen Materialien:
1. [Pfad zu metrics.csv]
2. [Pfad zu goals-and-log.md]

Die Daten sind anonymisierte Beispieldaten und stellen die Leistung eines echten Accounts
nicht dar. Hole keine Daten aus dem Internet, verbinde keine Content-Plattform und
verallgemeinere eine einzelne Veröffentlichung nicht zur Langfristregel.

Bitte nach folgenden Schritten:
1. Statistische Bezugsbasis einfrieren: 72 Stunden; Zeilenzahl, Felder, fehlende Werte,
   Duplikate, Einheiten je Kennzahl bestätigen. Für jede Quote den Nenner festlegen.
2. Aggregieren: Impressions, Aufrufe, 3-Sekunden-Aufrufe, vollständige Wiedergaben, Likes,
   Speicherungen, Shares, Kommentare, Profil-Klicks, Folgen.
3. Berechnen und nachrechnen: Impressions→Aufruf-Quote, 3-Sekunden-Haltesatz,
   Abspielrate, Like-Quote, Speicherquote, Share-Quote, Kommentarquote, Profil-Klickquote,
   Folge-Conversions. Mindestens 3 Kennzahlen per Hand nachrechnen.
4. Nach Datum und Quelle getrennt vergleichen und die stärksten Veränderungen benennen;
   Fakten von Erklärungsannahmen trennen.
5. Gegen Vorab-Ziele, Inhaltsstruktur und den Produktionsaufwand von 490 Minuten halten
   und antworten: Ziele erreicht? Was lohnt sich zu behalten, was zu stoppen, was beim
   nächsten Mal zu testen?
6. Korrelation darf nicht als Kausalität ausgegeben werden. Die Stichprobe ist eine
   einzelne Veröffentlichung; alle Ursachenaussagen als "Annahme" kennzeichnen und
   zugleich einen Weg angeben, sie zu prüfen.
7. Eine Auswertungskarte ausgeben: Faktenzusammenfassung, Trichter, Quellenvergleich,
   Zielabgleich, Behalten/Stoppen/Testen, Datenlimitierungen.
8. Danach den Brief für den nächsten Inhalt: ein Thema, Zielgruppe, Kernfrage,
   Inhaltsversprechen, Struktur, nötige Belege, Erfolgskennzahlen und Prüfpunkte vor
   Veröffentlichung. Das Thema darf nur aus Kommentaren oder Einschränkungen stammen, die
   in diesem Material ausdrücklich vorkommen — nichts frei erweitern.
9. Selbstprüfung: Lassen sich Summen zu Quellen/Daten addieren? Sind die Formel-Bezüge
   einheitlich? Sind Schlussfolgerungen belegt? Keine externen Aktionen ausgeführt?

Bitte speichern als nach-veroeffentlichung-karte.md und naechster-beitrag-brief.md.
Im Chat nur zusammenfassen: Speicherquote im Ziel?, Abspielrate, stärkste Quelle,
je eine Zeile zu Behalten/Stoppen/Testen und das Thema des nächsten Beitrags.

Sicherheitsgrenzen: Nur Analysedateien erzeugen, nichts in die Themen-Datenbank
zurückschreiben, nicht veröffentlichen, nicht auf Kommentare antworten, keine externen
Plattformen aufrufen.
```

Testergebnis 72-Stunden-Gesamtmenge: 51.400 Impressions, 22.890 Aufrufe, 7.537 vollständige Wiedergaben, 1.190 Speicherungen. Drei Schlüsselquoten: Impressions→Aufruf 44,53 %; Abspielrate 32,93 %; **Speicherquote 5,20 % — über dem Vorab-Ziel von 3 %**. Nach Quellen lag die Followers-Seite bei 9 Quoten in 8 vorn, die Suche führte bei Speicher- und Share-Quote, der Empfehlungs-Feed trug rund 70 % der Impressions bei, konvertierte aber schwach. Wichtiger: Es benannte vier eindeutige Aktionen:

| Entscheidung | Ausgabe dieser Runde |
| --- | --- |
| Behalten | Praxisfall + Struktur mit Speicher-Anleitung |
| Stoppen | Das Hochverdichtungs-Vorgehen, 4 zusammenhanglose Fälle in ein Video zu pressen |
| Testen | Den Misserfolg-Wiederholungsablauf separat zeigen und Abspielrate sowie konkrete Fragenzahl beobachten |
| Nächster Beitrag | «Was tun, wenn die Doubao-Desktop-Version fehlschlägt: 3 echte Fehlermeldungen und der komplette Wiederholungsablauf» |

Beachten: «Die Informationsdichte verursacht den Abbruch in der Mitte» bleibt eine Annahme und muss per A/B oder Vergleich ähnlicher Inhalte geprüft werden — eine einzelne Veröffentlichung ist n=1, keine Langfristregel.

> Auswertung heißt nicht, für die Vergangenheit eine plausibel klingende Geschichte zu finden, sondern **für das nächste Mal eine überprüfbare Aktion vorzubereiten**.

## Auf eine Checkliste verdichtet

**Kommentar-Einsicht**: erst anonymisieren, dann der AI übergeben; zuerst Gesamtzahl, fehlende Werte, Duplikate und Spam prüfen; jeder Kommentar nur eine Hauptkategorie; Themen mit comment_id, Originalzitat und Quelle; Originalzitat und Schlussfolgerung trennen; erst 8 Kandidaten → Top 3 → nur ein nächstes Thema; nicht automatisch antworten, nicht schreiben, nicht veröffentlichen.

**Auswertung nach Veröffentlichung**: Statistikfenster und Nenner festlegen; Gesamtmenge, Quellen- und Tagesaufteilung müssen aufgehen; mindestens 3 Schlüsselquoten per Hand nachrechnen; gemeinsam mit Vorab-Zielen, Inhaltsstruktur und Produktionskosten lesen; Schlussfolgerungen münden in Behalten, Stoppen, Testen; aus einer einzelnen Veröffentlichung nur Annahmen ableiten; erst Karte und Brief erzeugen, nicht direkt in die Themen-Datenbank schreiben.

Der Kommentarbereich ist ein kostenloses, laufend aktualisiertes Nutzerinterview; die Backend-Kennzahlen sagen Ihnen, was beim nächsten Mal zu ändern ist. Wer beide Materialien getrennt auswertet und die Ergebnisse in den nächsten Inhalt zurückfließen lässt, muss das Thema nie wieder vor einem leeren Dokument beginnen.

---

Weiter: [GEO-Check-up für die persönliche Marke →](/de/doubaowork/case-geo-checkup)
