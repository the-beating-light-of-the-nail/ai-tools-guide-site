---
title: Checkliste der harten Go-live-Schranken
description: Organisatorische Go-live-Schranken mit Beweisen, Verantwortung und Genehmigungs-Aufzeichnungen ausführen
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/getting-started/privacy-security
---

# Checkliste der harten Go-live-Schranken

## Wann Sie diese Unterlage verwenden

Wer nur den eigenen Wochenbericht oder Protokoll-Entwurf aufbereitet, muss diese Liste nicht zuerst ausfüllen. Nutzen Sie sie als vertiefte Punkt-für-Punkt-Prüfung, wenn Team-Testbetrieb, systemübergreifendes Schreiben, externes Senden, Mehrpersonen-Wiederverwendung oder die Go-live-Entscheidung anstehen. Sie hilft nur beim Ausführen und Bewahren der Go-live-Beweise und definiert die Phasentore, Aktionsrechte, Workflow-Felder, Änderungstore und Fehler-Übernahmeregeln aus Kapitel 10–12 nicht neu; maßgeblich bleiben die jeweiligen Kapitel.

Diese Liste führt die Go-live-Beurteilung aus und baut keine eigenen Phasentore oder Governance-Normen auf. Stichprobenzahlen und die drei Phasentore folgen einheitlich der [Pilotroadmap in Kapitel 10](/de/qwenwork/ch10-pilot-roadmap); Aktionen, Datensensitivität, Fachfolgen und G0–G3-Kontrollstufen folgen einheitlich der [Sicherheitsgovernance in Kapitel 11](/de/qwenwork/ch11-security-governance); die Team-Workflow-Karte nutzt einheitlich die Definitionen des [Workflow-Betriebs in Kapitel 12](/de/qwenwork/ch12-workflow-operations), deren Felder hier nicht kopiert werden.

**Kritische Fehler, Recht, Sicherheit und unbefugte Aktionen sind nicht lockerbare harte Schranken; Effizienz, Adaption und Zufriedenheit sind justierbare Experimentschwellen.** Scheitert eine anwendbare harte Schranke, gleicht das keine Durchschnitts-Kennzahl aus, und es wird nicht weiter hochgestuft.

Jede Ankreuzoption ist mit öffnbarer Beweis- oder Genehmigungs-Aufzeichnung und Verantwortlichen zu verknüpfen. Ohne Beweis wird nicht angekreuzt.

## Szenario und Verantwortung

- [ ] Die nach Kapitel 7 vollendete Szenariokarte und die nach Kapitel 2 vollendete Aufgabenkarte sind verknüpft; Deliverable, Abnahme, Verbote und Baseline im selben Maßstab stimmen überein. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Fachliche Leitung, Prozess-Pflegende, Nutzende, Inhaltsprüfende, Daten-/Sicherheits-Verantwortliche und nötige Aktions-Genehmigende sind benannt und haben die finale Geschäftverantwortung bestätigt. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Aktuelle Workflow-Version, Geltungsbereich, Ein-/Ausgaben und Stopp-Bedingungen sind gesperrt und mit der Workflow-Karte aus Kapitel 12 verknüpft. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Aktuelle Phase, Stichprobenliste, Abnahmeergebnisse und Genehmigungs-Aufzeichnungen sind nach Kapitel 10 verknüpft; Kalenderzeit ersetzt kein Phasentor. Beweis/Aufzeichnung: \_\_\_\_\_\_; Genehmigende: \_\_\_\_\_\_.

## Daten und Rechte

- [ ] Für jede Eingabe sind Datenquelle, Freigabeumfang, genehmigter Zweck, zugreifende Mitglieder, Speicherort und Aufbewahrungsanforderungen nach Kapitel 11 geprüft. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Konnektoren, Konten und Dienstidentitäten haben nur die für die aktuelle Aufgabe nötigen Rechte; Vergabe, Änderung und Entzug der Rechte sind rückverfolgbar. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Datensensitivität und Fachfolgen sind getrennt von der Aktionsstufe beurteilt und nutzen die von Kapitel 11 geforderte Kontrollstärke. Beweis/Aufzeichnung: \_\_\_\_\_\_; Genehmigende: \_\_\_\_\_\_.
- [ ] Schlüssel, Passwörter, Zugriffstoken und unbefugte Daten gelangen nicht in Prompts, Ergebnisse, Screenshots oder Laufprotokolle. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.

## Qualität und Beweise

- [ ] Jede Abnahmeanforderung hat Prüfende, Prüfmethode, Rückgabebedingung und Beweisort; das Ergebnis ist öffnbar, editierbar, nachrechenbar oder rückverfolgbar. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Fakten, Schlüsselzahlen, Quellen, Daten und anwendbare Maßstäbe sind geprüft; wo Research-Thesen Karten brauchen, sind die Beweiskarten aus Kapitel 8 verknüpft. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Die kritischen Fehler laut Kapitel 10 und die szenario-ergänzten Fehler sind registriert; alle fehlgeschlagenen, abgebrochenen und ausgeschlossenen Aufgaben bewahren Ergebnis und Grund. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Recht, Sicherheit, Rechte und nötige Fach-Prüfungen haben klare Schlüsse; kein harter Schranken-Fehlschlag ist von Effizienz-, Qualitäts- oder Zufriedenheits-Durchschnitten zugedeckt. Beweis/Aufzeichnung: \_\_\_\_\_\_; Genehmigende: \_\_\_\_\_\_.

## Aktionskontrolle

- [ ] Jede Aktion ist einzeln nach Kapitel 11 auf G0–G3-Kontrollstufe, Datensensitivität und Fachfolgen geprüft; kein Durchschnittswert des ganzen Prozesses ersetzt die Einzel-Beurteilung. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Für Senden, Schreiben, Löschen, Veröffentlichen, Zahlung und Stammdaten-Änderung sind konkrete Objekte, Umfang, Auswirkungen, Bestätigungs- und Rollback-Anforderungen nach Kapitel 11 umgesetzt. Beweis/Aufzeichnung: \_\_\_\_\_\_; Genehmigende: \_\_\_\_\_\_.
- [ ] Vorab zu bestätigende Aktionen zeigen die tatsächlichen Objekte und Inhalte der aktuellen Charge oder dieses Laufs und binden die Genehmigungs-Aufzeichnung an die auszuführende Version. Beweis/Aufzeichnung: \_\_\_\_\_\_; Genehmigende: \_\_\_\_\_\_.
- [ ] Bei fortlaufender Autorisierung sind genehmigter Rahmen, Workflow-Version, Ausführungs-Identität, Umgebung, Gültigkeitsstatus und Stilllegbarkeit geprüft; Grenzänderungen führen nicht zu weitergeltenden alten Autorisierungen. Beweis/Aufzeichnung: \_\_\_\_\_\_; Genehmigende: \_\_\_\_\_\_.
- [ ] Für Aktionen mit Funktionstrennung sind Ausführende und Aktions-Genehmigende geprüft zugeordnet. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.

## Übernahme und Wiederherstellung

- [ ] Stilllegungsschalter, manueller Ersatzprozess, Originalschutz, Lokalisierung betroffener Objekte, Wiederherstellungsschritte und Prüfung danach sind tatsächlich ausführbar. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Stopp, manuelle Übernahme und Wiederherstellung sind mit der aktuellen Version und echten Ausführungs-Identitäten tatsächlich geübt; Ausführungs- und Prüfaufzeichnungen sind bewahrt. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Bei unbefugtem externem Senden, Löschen, Zahlung, Stammdaten-Änderung, erheblichen Datenschutzproblemen oder kritischen Geschäftsfehlern wird sofort gestoppt, manuell übernommen und das Ereignis nachbereitet; Durchschnittseffizienz gleicht harte Schranken-Fehlschläge nicht aus. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Nach einem Ereignis können Originale geschützt, weitere Auswirkungen blockiert, Objekte lokalisiert, Differenzen zwischen Genehmigung und tatsächlicher Ausführung aufgezeichnet und von benannten Verantwortlichen Rückschauen organisiert werden. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.

## Go-live-Übung

- [ ] Normale Eingaben erzeugen mit der genehmigten Version das Deliverable; Abnahme und nötige Bestätigungen sind abgeschlossen. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Bei leeren Daten oder fehlenden Pflicht-Eingaben stoppt die Ergebnis- oder Aktionsgenerierung, fehlende Posten werden klar aufgelistet und manuell bestätigt. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Bei Änderungen von Feldern, Maßstab oder Version werden alte Beweise nicht weitergenutzt; es folgt manuelle Übernahme sowie Änderung und Re-Verifizierung nach Kapitel 12. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Doppeldatensätze werden erkannt und isoliert und gelangen nicht still in Summen, Schreibungen oder Sendungen; das Behandlungsergebnis ist bestätigt. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Bei abgelaufenen Rechten werden Rechte nicht umgangen und keine unbefugte Identität genutzt; der Prozess stoppt und benachrichtigt Verantwortliche zur Übernahme. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Bei Konflikten bei Schlüsselzahlen werden keine bestätigten Ergebnisse gebildet und keine externen Aktionen ausgeführt; der Konflikt wird zur Quelle lokalisiert und Verantwortlichen zur Bestätigung übergeben. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Wiederholte Läufe erzeugen keine doppelten Schreibungen oder Sendungen; bei nötiger erneuter Bestätigung oder Wiederherstellung werden nach Kapitel 11 die tatsächlichen Objekte und Versionen dieses Laufs verwendet. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.

## Betriebs-Beobachtung

- [ ] Lauf-Aufzeichnungen decken fortlaufend Aufgaben-Ergebnisse, Abnahmen, Rückgaben, manuelle Änderungen, kritische Fehler, unbefugte Ereignisse, Rechte- oder Datenschutzprobleme sowie Übernahme- und Wiederherstellungsergebnisse ab. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Fachliche Leitung, Prozess-Pflegende, Daten-/Sicherheits-Verantwortliche und nötige Fach-Prüfende haben Rückschau-Auslöser, Eingabematerial und Ort der Entscheidungs-Aufzeichnungen vereinbart. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
- [ ] Die Rückschau entscheidet nach den in Kapitel 10 registrierten harten Schranken und Experimentschwellen sowie dem Wertmaßstab von Kapitel 13 über Ausweiten, Optimieren, Pilot bleiben oder Stoppen und notiert Genehmigende und Folgebereich. Beweis/Aufzeichnung: \_\_\_\_\_\_; Genehmigende: \_\_\_\_\_\_.
- [ ] Bei Änderungen von Version, Eingaben, Rechten, Modell, Konnektor, Empfängerobjekten oder Geschäftsbereich wird der Verifizierungsumfang neu beurteilt; keine automatische Höherstufung nach festen Tagen oder Laufzahlen. Beweis/Aufzeichnung: \_\_\_\_\_\_; Verantwortliche: \_\_\_\_\_\_.
