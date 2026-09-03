---
title: "Arbeitsumgebungsarchitektur: drei Clients und sechsschichtige Diagnose"
description: Je nach Aufgabenkontext Browser-Webumgebung (Web), Desktop oder DingTalk wählen und Lieferfehler mit dem Sechs-Schichten-Modell eingrenzen
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/product-introduction
  - https://qwenwork.cn/docs/features/connectors
  - https://alidocs.dingtalk.com/i/nodes/mExel2BLV59rgdDPiPER1ZZDVgk9rpMq
---

# Arbeitsumgebungsarchitektur: drei Clients und sechsschichtige Diagnose

## Ergebnis in 30 Sekunden

<span id="claim-six-layer-diagnosis-01" data-claim-id="claim-six-layer-diagnosis-01"></span>Dieses Buch vertritt: Die stabile Lieferung von Unternehmens-KI wird gemeinsam von sechs Schichten bestimmt – Intelligenz-Basis, Kontext, Werkzeuge und Verbindungen, Ergebnis-Werkbank, Wiederverwendung und Automatisierung, Governance; das Modell ist nur eine davon.

- Wählen Sie den Arbeits-Einstieg zuerst danach, wo Unterlagen, Berechtigungen, Aktionen und Zusammenarbeit stattfinden.
- Lokalisieren Sie Fehler bei Ergebnissen Schicht für Schicht und schreiben Sie nicht alle Probleme dem Modell zu.
- Jede Schicht braucht Verantwortliche, Fehlersignale und prüfbare Beweise.

## Eine Szene, die Sie kennen könnten

Sie wollen eine Reihe lokaler Excel-Dateien aufbereiten, eine Webrecherche durchführen oder das Ergebnis zur Bestätigung in eine DingTalk-Gruppe zurückgeben und wissen noch nicht, wo Sie anfangen sollen. Eingabebeispiele: „Verkaufstabellen Juni im lokalen Verzeichnis, öffentliche Seiten im angemeldeten Browser, Wochenbericht der Vorwoche in der DingTalk-Gruppe"; zuerst Dateiversionen, Konten und Rechte klären, dann den Einstieg wählen.

## Was am Ende herauskommt

Das Endergebnis ist ein Arbeits-Einstieg mit Diagnoseaufzeichnung, strukturiert als:

1. Einstiegswahl: Browser-Webumgebung (Web), Desktop oder DingTalk samt Begründung;
2. Eingabeliste: Dateiversionen, Daten, Konten, Freigabeumfang und Speicherorte;
3. Sechs-Schichten-Checkliste: Intelligenz-Basis, Kontext, Werkzeuge und Verbindungen, Ergebnis-Werkbank, Wiederverwendung und Automatisierung, Governance;
4. Fehlerzuordnung, Verantwortliche, Prüfbeweise und Rückrollpfad.

## Gehen Sie so vor

1. Beurteilen Sie zuerst, wo Unterlagen, Zusammenarbeit und zu bestätigende Aktionen überwiegend liegen, und wählen Sie dann aus Web, Desktop und DingTalk den kleinsten Einstieg.
2. Eingabedateien zuerst nur lesend öffnen, Version, Konto und Rechte notieren; bei unklarer Freigabe den Zugriff nicht ausweiten.
3. **Zwischenprüfpunkt:** Die verantwortliche Person dieser Eingabe (Owner) bestätigt „diese Eingabe ist nutzbar und verarbeitbar", der Aktions-Verantwortliche bestätigt „der nächste Schritt ist nur Vorschau oder Entwurf".
4. Nach dem Lauf das erste Fehlersignal nach den sechs Schichten notieren und Ergebnis, Protokolle und die für die nächste Prüfung Verantwortlichen speichern.

## Fallbeispiel als Referenz

Sehen Sie sich zuerst die [Qwen-Work-Bibliothek öffentlicher Fälle: Atlas mit 32 Szenarien](/de/qwenwork/ch09-public-case-atlas) an und wählen Sie aus den Eingabe- und Ergebnisformen verschiedener Aufgaben einen ähnlichen Einstieg; diese Seite enthält öffentlich zu verifizierende Szenario-Hinweise und keine Fähigkeits- oder Wirkungszusagen.

## Prüfung nach Abschluss

Die Prüfaufzeichnung muss zugleich Eingabeversion, aktuelle Kontorechte, Speicherort und ein reproduzierbares Fehlersignal enthalten; lässt sich nicht erklären, aus welcher Materialversion oder Freigabe das Ergebnis stammt, darf die Aufgabe nicht in den nächsten Schritt gehen.

## Zu beachten

Reichen die Rechte nicht, sind Versionen unklar oder lassen umgebungsübergreifende Aktionen sich nicht bestätigen, bewahren Sie Originale und Protokolle auf, stoppen Sie Schreibzugriffe und Weitergabe und kehren Sie zum letzten stabilen Einstieg zurück; wechseln Sie auf Nur-Lese-Analyse oder manuelle Aufbereitung und lassen Sie System-Owner, Daten-Owner oder die fachliche Leitung bestätigen, bevor Sie es erneut versuchen.

## Weiter vertiefen

Lesen Sie weiter [Methode oder Modell](#methode-oder-modell), [Fälle und Beweise](#faelle-und-beweise) und [Grenzen und nächster Schritt](#grenzen-und-naechster-schritt) dieser Seite und beachten Sie anhand der [offiziellen Konnektor-Quellen](/de/qwenwork/appendix-sources#r4), dass die Sechs-Schichten-Diagnose keine offizielle Produktgliederung ist.

## Warum das wichtig ist

Dieselbe Aufgabe, die in der Demo gelingt, kann in der echten Organisation an Dateiversionen, Kontorechten, Verbindungsstatus, Ergebnisformat oder Genehmigungsregeln scheitern. Tauscht das Team nur das Modell, testet es wiederholt dieselbe Schicht – ohne die anderen fünf zu reparieren, die über die Lieferstabilität entscheiden.

Die Arbeitsumgebungsarchitektur hilft den KI-Verantwortlichen im Unternehmen, zwei Fragen zu beantworten: über welchen Einstieg eine Aufgabe starten soll und wer nach einem Fehler welche Schicht prüft. Sie zeigt der fachlichen Leitung auch, dass das Anbinden weiterer Systeme nicht mehr erledigte Arbeit bedeutet – Berechtigungen und Governance sind zugleich zu gestalten.

## Methode oder Modell

<span id="claim-three-surfaces-choice-01" data-claim-id="claim-three-surfaces-choice-01"></span>Dieses Buch empfiehlt: Web, Desktop und DingTalk sind nach Aufgabenkontext zu wählen; es gibt keinen Einstieg, der für alle Aufgaben per Voreinstellung optimal wäre.

| Einstieg | Aufgabenkontext, der zuerst an ihn denken lässt | Vor der Wahl prüfen | Fälle ohne Default-Wahl |
|---|---|---|---|
| Web | Cloud-Materialien, Online-Recherche, Web- oder Cloud-Ergebnisse | Upload-Umfang, Kontorechte, Speicherort der Ergebnisse | Schlüssel-Eingaben liegen nur lokal oder in Systemsystemen |
| Desktop | Lokale Dateien, Browser-Anmeldungen, Systemanwendungen und Computer-Bedienung | Originalschutz, Verzeichnisrechte, Sichtbarkeit der Ausführung | Unbeaufsichtigte hochriskante Schreiboperationen |
| DingTalk | Unternehmensnachrichten, Dokumente, Kalender, To-dos und Prozess-Zusammenarbeit | Organisationsfreigabe, Objektumfang, Sende- oder Schreibbestätigung | Aufgabe braucht keinen Organisationskontext, beantragt aber weitreichende Rechte |

Umgebungübergreifende Aufgaben können aufgeteilt werden: Materialien in der Umgebung verarbeiten, die den Eingaben am nächsten liegt; Bestätigung und Übernahme in der Umgebung der Verantwortlichen. Die Einstiegswahl ist mit Begründung zu notieren, damit persönliche Gewohnheiten nicht zum Teamstandard werden.

Die Sechs-Schichten-Diagnosetabelle ist die gemeinsame Sprache der Lauf-Reviews:

| Schicht | Diagnosefrage | Fehlersignal | Verantwortliche | Prüfbeweise |
|---|---|---|---|---|
| Intelligenz-Basis | Passt das aktuelle Modell zu Aufgabentyp, Sprache, Kontext und Latenzanforderungen | Verständnisfehler, Inkonsistenz bei Langtexten, multimodale Erkennungsfehler | KI-Plattform-Verantwortliche | Feste Stichprobenvergleiche, Fehlerklassifikation, Versionsaufzeichnung |
| Kontext | Sind Eingaben vollständig, korrekt, aktuell und freigegeben | Fehlende Dateien, Versionskonflikte, unklare Daten oder Schlüssel | Daten-Owner (Fachseite) | Eingabeliste, Versionsnummern, Feldwörterbuch, Freigabeaufzeichnung |
| Werkzeuge und Verbindungen | Kann das Werkzeug mit minimalen Rechten lesen oder ausführen | Abgelaufene Anmeldung, Feld-Mapping-Fehler, Aktionen außerhalb der Freigabe | System-Owner | Rechte-Liste, Verbindungstest, Aufruf- oder Operationsprotokolle |
| Ergebnis-Werkbank | Entspricht der Output dem Format, ist er editierbar und mit Quellen versehen | Beschädigte Dateien, eingeebnete Struktur, Charts ohne Datenbezug | Deliverable-Owner | Quelldatei, Format-Stichprobe, Abgleichstabelle, Versionsort |
| Wiederverwendung und Automatisierung | Lassen sich erfolgreiche Schritte stabil wiederholen und Anomalien behandeln | Wirkt nur im EinzelDialog, driften Ergebnisse bei Wiederholung | Workflow-Owner | Teststichproben, Versionen, Laufaufzeichnungen, Fehlerbeispiele |
| Governance | Haben hochriskante Aktionen Bestätigung, Audit, Übernahme und Wiederherstellung | Unbefugte externe Sendungen, niemand übernimmt, kein Rollback | Fachliche Leitung und Risiko-Owner | Genehmigungsaufzeichnungen, Bestätigungsprotokolle, Ereignisaufzeichnungen, Wiederherstellungsfreigabe |

Beim Vergleich von Modellen oder Fähigkeitskombinationen werden Aufgabenpassung, Ergebnisstabilität, Prüfbarkeit, Dauer, Ressourcenkosten und Risikokosten Posten für Posten notiert. Diese Kennzahlen unterschiedlicher Einheiten sind nicht zwangsweise zu multiplizieren oder zu dividieren; zuerst die unantastbaren Schwellen festlegen, dann die Gesamtkosten der schwellenbestehenden Varianten vergleichen.

## Fälle und Beweise

Die offizielle Produktvorstellung und die öffentliche Wissensbasis beschreiben die Nutzungseinstiege und Büroskontexte rund um Web, Desktop und DingTalk. [R3](/de/qwenwork/appendix-sources#r3) [R10](/de/qwenwork/appendix-sources#r10) Diese dynamischen Produktinformationen bestätigen das Vorhandensein und die öffentliche Positionierung der Einstiege; konkrete Fähigkeiten, Rechte und Organisationsfreigaben sind zum Nutzungszeitpunkt anhand der Seiten und Konten zu messen.

Die Sechs-Schichten-Struktur, die Diagnosefelder und die Einstiegswahl-Prinzipien sind Methoden dieses Buches. Unternehmen sollten die Gliederung an echten Fehlerprotokollen validieren; derselbe Fehler kann mehrere Schichten übergreifen – so kann eine „falsche Berichtszahl" ebenso aus der Kontextversion wie aus dem Feld-Mapping des Werkzeugs oder aus der Modellschlussfolgerung stammen.

## Unternehmensaktion

Wählen Sie eine Aufgabe aus dem Pilotbetrieb und führen Sie einen Sechs-Schichten-Durchgang durch:

1. Markieren Sie, in welchem Einstieg Eingabe, Lauf, Ergebnis und Bestätigung jeweils stattfinden.
2. Benennen Sie pro Schicht eine verantwortliche Person – „das KI-Team" ersetzt keine konkrete Rolle.
3. Wählen Sie pro Schicht ein wahrscheinlichstes Fehlersignal und einen Prüfbeweis.
4. Wiederholen Sie den Lauf mit demselben festen Stichprobensatz und notieren Sie, in welcher Schicht das Problem zuerst auftritt.
5. Reparieren Sie nur die lokalisierte Schicht und vergleichen Sie dann Ergebnis und Gesamtbearbeitungskosten.

Stopp-Signale sind: Rechte sollen ausgeweitet werden, ohne dass die Notwendigkeit begründet wird; die Eingabeversion ist unbestimmbar; der Fehler hat keinen Verantwortlichen; das Ergebnis bewahrt die Quellen nicht; umgebungsübergreifenden Aktionen fehlen Bestätigungs- oder Übernahmepfade.

## Grenzen und nächster Schritt

Das Sechs-Schichten-Modell ist ein Diagnoserahmen, keine offizielle Produktarchitektur-Gliederung, und bedeutet nicht, dass jede Aufgabe alle sechs Schichten nutzen muss. Risikoarme, einmalige Fragen können auf den Schichten Intelligenz-Basis und Kontext bleiben; erst bei Schreibzugriffen, Veröffentlichung oder Dauerbetrieb werden Werkzeuge, Automatisierung und Governance harte Bedingungen.

Dieses Kapitel definiert Arbeitsumgebung und Diagnosekoordinaten, nicht die Freigabestandards wiederverwendbarer Assets. Nach der Lokalisierung stabiler Prozesse trennt das Team weiterhin Methoden-Assets, Systemverbindungen und Rollen-Suites.

[Nächstes Kapitel: Skills, Konnektoren und Experten-Suites](/de/qwenwork/ch04-skills-connectors)
