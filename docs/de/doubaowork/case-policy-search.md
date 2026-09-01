# Unternehmensrichtlinien ohne Durchwühlen des Wissensspeichers: eine Frage, die Antwort samt Beleg

> Szenario: An Unternehmensrichtlinien mangelt es nicht – mühsam ist, im konkreten Fall schnell **die aktuell gültige Fassung** zu finden. Die Überstundenantragung ist ein typisches Beispiel: ob vorher zu beantragen ist, wer genehmigt, wo einzureichen, ob Ausgleich möglich ist – die Antworten können über mehrere Dokumente verstreut sein. Selbst suchen kostet Zeit, Kollegen fragen liefert vielleicht veraltete Antworten.

Testfrage: «Wie läuft heute der Antrag auf Überstunden ab?» Der Unternehmens-Wissensspeicher wurde in die Doubao-Unterhaltung eingebunden, mit der Anforderung, dass die Antwort **Richtlinienname, Kapitel, Wortlaut und Versionsinformationen** mitliefert. Geprüft wurden zwei Dinge: Findet es die wirklich einschlägige Richtlinie, und wie geht es mit Konflikten oder Lücken im Material um?

> Voraussetzung: Das Doubao-Login-Konto stimmt mit dem Konto überein, dem der Feishu-Wissensspeicher gehört, und der Zugriff auf den Ziel-Wissensspeicher ist eingeräumt – ohne Berechtigung kann Doubao den Inhalt nicht lesen.

## Beim Fragen die Bedingungen klar formulieren

Im Eingabefeld @ eingeben und den Unternehmens-Wissensspeicher auswählen, um den Materialumfang festzulegen. Fragt man nur «Wie ist der Überstundenprozess?», liefert Doubao vielleicht eine Zusammenfassung, aber nicht unbedingt Version, Wortlaut und Konflikthinweise. Deshalb Materialumfang, Antwortformat und Grenze der menschlichen Entscheidung ergänzen:

```text
Ich möchte heute Überstunden beantragen – wie genau läuft der Prozess ab?

Bitte antworte ausschließlich auf Grundlage der im Wissensspeicher aktuell
wirksamen und für mich sichtbaren Richtlinien.
Nenne zuerst das kurze Ergebnis, dann die konkreten Angaben: Richtlinienname,
Kapitel, Wortlautauszug, Version und Inkrafttretensdatum.

Widersprechen sich mehrere Richtlinien, zeige beide Fassungen und weise mich an,
die zuständige Person für die Richtlinie zu kontaktieren.
Fehlt eine Grundlage, sage ausdrücklich, dass das Material nicht ausreicht –
ergänze die Antwort nicht mit Alltagsvermutungen.

Wenn du erkennst, dass eine Datei abgelaufen, noch nicht in Kraft oder bereits
ersetzt ist, weise am Anfang der Antwort darauf hin.
Bei Einzelfallgenehmigungen, rechtlichen Bewertungen oder Ausnahmeanträgen nenne
nur Prozess und Ansprechpartner und triff keine Entscheidung anstelle der
zuständigen Person.
```

Dieser Prompt tut genau drei Dinge: **den Richtlinienumfang eingrenzen, Kernresultate mit Beleg versehen und Konflikte, Lücken und Einzelfallentscheidungen der zuständigen Person überlassen**.

## Praxistest: erst das Ergebnis, dann die Belege

Aus dem Suchprotokoll ergibt sich: Doubao liest zuerst die Verzeichnisstruktur des Wissensspeichers (7 Themenknoten), ordnet den Überstundenprozess den HR-Richtlinien zu und prüft schwerpunktmäßig «Anwesenheits- und Urlaubsverwaltung» sowie das «Mitarbeiterhandbuch»; nach dem Auffinden des Kapitels «Überstundenverwaltung» prüft es zusätzlich die «Gehalts- und Sozialleistungen» und durchsucht die Kategorien Unternehmensführung, Verwaltung, Entwicklung und Informationssicherheit nach weiteren Regelungen. **Genau dieser Schritt wird beim eigenen Suchen am ehesten ausgelassen: Man stoppt beim ersten passenden Dokument und prüft keine ergänzenden oder widersprüchlichen Bestimmungen.**

Die Antwort erklärt zuerst die aktuelle Antragung, dann die Belege: Richtlinie «Anwesenheits- und Urlaubsverwaltung» (Kategorie HR-Richtlinien), Kapitel «Arbeitszeit → Überstundenverwaltung», Wortlautauszug (vorab das Formular «Überstundenantrag» ausfüllen und von der Leitung genehmigen lassen; Werktage/Wochenenden/gesetzliche Feiertage werden mit 1,5/2/3-fach vergütet oder durch Freizeit ausgeglichen; ohne Genehmigung gelten Überstunden nicht als solche), Versionsinformation (Revision 3, gültig, federführend die Abteilung Allgemeines Management).

Ein Detail verdient manuelle Bestätigung: Die Antwort nennt den «Zeitpunkt der letzten Bearbeitung», aber kein separates «Inkrafttretensdatum» – beide Zeitpunkte bedeuten Verschiedenes; vor der offiziellen Antragung sollte der Wortlaut geöffnet und geprüft werden.

## Was tun, wenn die Richtlinie etwas nicht regelt?

Die Antwort enthält außerdem drei Grenzhinweise:

1. Die Richtlinien anderer Kategorien wurden mitgeprüft; keine dem Überstundenprozess widersprechenden Regelungen gefunden;
2. Der Einreichungsweg des Überstundenantrags (Formular im Zeiterfassungssystem oder Papierformular) ist **in der Richtlinie nicht angegeben** – bei der Abteilung Allgemeines Management nachzufragen;
3. Einzelfälle oder Ausnahmen jenseits der Genehmigungsbefugnis entscheidet am Ende die genehmigende Person; die Antwort nennt nur den Prozess und urteilt nicht an deren Stelle.

Der zweite Punkt ist der praktischste: Die Lücke in der Richtlinie bleibt sichtbar und wird an eine Abteilung verwiesen, bei der es weitergeht – die Sache bleibt mit dem Ergebnis in Bewegung.

## Wie dieser Test die Art, Richtlinien nachzuschlagen, verändert

1. Die KI zuerst **den Umfang eingrenzen** lassen, um die relevanteste Richtlinie zu finden, dann andere Dokumente auf Ergänzungen oder Konflikte prüfen – das reduziert «beim ersten Suchergebnis stehen bleiben»;
2. Beim Ergebnis auf **Richtlinienname, Version, Inkrafttretensdatum und Wortlautauszug** achten – gibt es nur eine Prozesszusammenfassung ohne Wortlaut und Version, zurück in den Wissensspeicher und bestätigen;
3. Bei Konflikten oder Lücken über die angegebene **federführende Abteilung** weiterverfolgen. Das setzt allerdings voraus, dass der Wissensspeicher selbst klare Versionen, Inkrafttretensdaten und verantwortliche Abteilungen pflegt – werden alte Richtlinien nicht rechtzeitig außer Kraft gesetzt, liefert auch das beste Recherche-Werkzeug keine belastbaren Ergebnisse.

Die KI spart die Zeit für Suchen und Vergleichen; der Richtlinien-Wortlaut und die zuständigen Personen bleiben die letzte Instanz. Um den eigenen Wissensspeicher zu testen, nimmt man eine häufige Frage (Urlaub, Spesen, Beschaffungsantrag) und prüft: Enthält die Antwort die aktuell gültige Version, eine genaue Quellenangabe und einen Weg, ungesicherte Informationen zu bestätigen?

---

Weiter: [541 GPT-Prompt-Beispiele neu kategorisiert →](/de/doubaowork/case-prompt-library)
