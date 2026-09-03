---
title: "Automatisierungsgrenzen: das System anhaltbar, übernehmbar und wiederherstellbar machen"
description: Maschinenprüfung, menschliche Durchsicht, Abnahme und Aktionsbestätigung trennen und eine Übernahmekette für Automatisierungsfehler aufbauen
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/desktop/scheduled-tasks
  - https://qwenwork.cn/docs/desktop/computer-use
  - https://qwenwork.cn/docs/desktop/im-channels
---

# Automatisierungsgrenzen: das System anhaltbar, übernehmbar und wiederherstellbar machen

## Ergebnis in 30 Sekunden

<span id="claim-automation-human-handoff-01" data-claim-id="claim-automation-human-handoff-01"></span>Dieses Buch vertritt: Automatisierung erfüllt die Grundbedingung für den Unternehmensbetrieb erst, wenn sie im Anomaliefall die Ausführung stoppen, Originale schützen, Verantwortliche benachrichtigen, auf manuelle Fertigstellung umschalten und nach erneuter Verifizierung wiederherstellen kann.

- Automatische Prüfung, menschliche Durchsicht, Lieferabnahme und Aktionsbestätigung sind vier verschiedene Kontrollpunkte.
- Stilllegen, manuelle Übernahme, Rollback, Widerruf und Wiederherstellung behandeln unterschiedliche Zustände und sind nicht vermischbar.
- Hochriskante Aktionen wie Schreiben, Senden und Veröffentlichen unterliegen Governance-Stufen und ausdrücklicher Autorisierung.

## Eine Szene, die Sie kennen könnten

Sie möchten, dass das System wöchentlich automatisch Wochenbericht oder Protokoll aufbereitet: Dateien der Woche lesen, Zusammenfassung erzeugen, Aktionspunkte auflisten und in die Gruppe senden. Eingabebeispiel: „Protokolle bis Freitag 17:00 Uhr, Wochenbericht der Vorwoche und bestätigter Gruppenchat-Empfänger". Schreiben Sie zuerst Stilllegung, manuelle Übernahme, Rollback und Wiederherstellung in die Aufgabe – statt nur einen Timer einzurichten.

## Was am Ende herauskommt

Das Endergebnis ist eine Automatik-Laufkarte, strukturiert als:

1. Auslösebedingungen, Eingabeversionen und Behandlung leerer Daten;
2. vier Kontrollpunkte: automatische Prüfung, menschliche Durchsicht, Lieferabnahme, Aktionsbestätigung;
3. Stilllegungsschalter, Übernehmende, Ersatzprozess, Benachrichtigungsinhalt und Wirkungsumfang;
4. letzte stabile Version, Re-Verifizierungsstichproben, Widerrufsweg und Wiederherstellungsfreigabe.

## Gehen Sie so vor

1. Lassen Sie zuerst einen Entwurfsdurchlauf für Wochenbericht oder Protokoll laufen und klären Sie, welche Schritte nur lesen und welche schreiben, senden oder veröffentlichen.
2. Richten Sie Maschinenprüfungen für Daten, Zeilenzahlen, Summen, wiederholte Läufe und Rechteänderungen ein und benennen Sie Inhaltsprüfende und Aktions-Verantwortliche.
3. **Zwischenprüfpunkt:** Üben Sie das Stilllegen absichtlich mit fehlenden Dateien, geänderten Feldern oder unklaren Objekten; bestätigen Sie, dass das System Originale bewahrt, Entwürfe isoliert und Übernehmende benachrichtigt.
4. Re-Verifizieren Sie mit normalen, Grenz- und Fehlerstichproben; erst nach Genehmigung der Folgenbehandlung durch die fachliche Leitung wird die automatische Planung wieder geöffnet.

## Fallbeispiel als Referenz

Sehen Sie sich zuerst [Youkela: Produktentwicklung sowie Anwesenheits- und Lohnabrechnung](/de/qwenwork/case-youkela) an und behandeln Sie die dortige Materialprüfung und die folgenreichen manuellen Bestätigungen als Übung für Laufgrenzen; die Fallaussagen sind weder Ihre Automatisierungswirkung noch eine Zusage unbeaufsichtigten Betriebs.

## Prüfung nach Abschluss

Führen Sie eine Störübung durch: Verändern Sie die Eingabeversion, und bestätigen Sie, dass die neue Aufgabe stoppt, Originale unverändert bleiben, Verantwortliche benachrichtigt werden, das aktuelle Ergebnis als Entwurf markiert ist und die Lieferung über den Ersatzprozess abgeschlossen werden kann; andernfalls kein Go-live.

## Zu beachten

Scheitert eine Prüfung, wiederholen sich Läufe, ändern sich Rechte oder bleiben Objekte unklar: sofort stilllegen und Weitergabe stoppen, Originale, Zustand und Protokolle bewahren und die aktuelle Aufgabe manuell übernehmen; scheitert die neue Version, gilt die letzte stabile Version, und erst nach Reparatur und erneuter Bestätigung durch die fachliche Leitung wird wiederhergestellt.

## Weiter vertiefen

Lesen Sie weiter [Methode oder Modell](#methode-oder-modell), [Fälle und Beweise](#faelle-und-beweise) und [Grenzen und nächster Schritt](#grenzen-und-naechster-schritt) dieser Seite und sehen Sie die [Quellen zu geplanten Aufgaben](/de/qwenwork/appendix-sources#r5), die [Quellen zur Computer-Bedienung](/de/qwenwork/appendix-sources#r6) und die [IM-Kanal-Quellen](/de/qwenwork/appendix-sources#r7) ein.

## Warum das wichtig ist

Automatisierung vergrößert den Wirkungsbereich eines einzelnen Fehlers. Eine Feldänderung kann Tageberichte tagelang fehlerhaft machen, eine abgelaufene Anmeldung kann still Zahlen fehlen lassen, eine doppelte Planung kann mehrfach senden, eine geänderte Oberfläche kann die Computer-Bedienung falsche Objekte treffen lassen. Ein einzelner Aus-Schalter löst bereits ausgeführte Aktionen nicht und sagt nicht, wer die Restaufgabe erledigt.

Die KI-Verantwortlichen im Unternehmen müssen die Störungsbewältigung als Teil des Normalbetriebs entwerfen. Die fachliche Leitung muss wissen, ob nach einer Anomalie die Originale sicher sind, ob sich Lieferungen verschieben, wer gerade übernimmt und wann ein Wiederanlauf erlaubt ist.

## Methode oder Modell

Vier Kontrollpunkte beantworten unterschiedliche Fragen:

| Kontrollpunkt | Feste Definition | Typische Beweise | Verantwortungsrolle |
|---|---|---|
| Automatische Prüfung | Prüft maschinell entscheidbare Bedingungen von Format, Bereich, Vollständigkeit und Konsistenz | Schema-Ergebnisse, Zeilenzahlen, Hashes, Abgleiche und Duplikatprüfungen | Workflow-Owner |
| Menschliche Durchsicht | Beurteilt, ob Fakten, Semantik, Fachqualität und Risiko korrekt sind | Stichprobenaufzeichnungen, Änderungslisten, Fachmeinung | Inhaltsprüfende oder Fach-Owner |
| Lieferabnahme | Entscheidet, ob das Ergebnis die Aufgabenkarte erfüllt und weitergehen darf | Aufzeichnung Bestehen, Rückgabe oder bedingtes Bestehen | Fachliche Leitung |
| Aktionsbestätigung | Autorisiert tatsächliches Senden, Schreiben, Veröffentlichen, Löschen oder andere externe Aktionen | Bestätigende, Objekte, Umfang, Zeit und Änderungsliste | Aktions-Verantwortliche |

Auch fünf Betriebsbegriffe sind nicht gegeneinander austauschbar:

| Begriff | Bedeutung | Zeitpunkt der Anwendung |
|---|---|---|
| Stilllegen | Verhindert den Start neuer automatischer Läufe | Bei systemischem Risiko oder Wartungsbedarf |
| Manuelle Übernahme | Verantwortliche übernehmen die aktuelle unerledigte Aufgabe | Wenn die Lieferung weiter fristgerecht erfolgen muss |
| Rollback | Wechselt zur letzten stabilen Version, Regel oder manuellen Prozess | Wenn die neue Version scheitert und der bisherige Weg noch nutzbar ist |
| Widerruf | Macht bereits ausgeführte Aktionen rückwärts, wenn das System es erlaubt und das Risiko beherrschbar ist | Nach fehlerhaftem Schreiben, Senden oder Veröffentlichen |
| Wiederherstellung | Öffnet die automatische Ausführung nach Reparatur, Re-Verifizierung und Freigabe erneut | Wenn die Ursache behoben und die Bedingungen erfüllt sind |

Die minimale Übernahme- und Wiederherstellungskette ist fix:

1. **Auslösebedingung:** automatische Prüfung fehlgeschlagen, Eingabeanomalie, Rechteänderung, Doppellauf oder gemeldetes Ereignis.
2. **Ausführung stoppen:** neue Aufgaben und verbleibende hochriskante Aktionen blockieren; unbekannte Schritte nicht weiter versuchen.
3. **Originale schützen:** Eingaben, Zustand, Protokolle und unveränderte Originaldateien bewahren, Fehlerergebnisse isolieren.
4. **Verantwortliche benachrichtigen:** Wirkungsumfang, aktueller Status, Frist und nötige Entscheidung mitteilen.
5. **Manuell fertigstellen:** Die benannte Übernahmeperson vollendet die nötige Lieferung nach Ersatzprozess und dokumentiert manuelle Änderungen.
6. **Fehler lokalisieren:** Ursachen in Eingabe, Rechten, Werkzeug, Regeln, Modell und Umgebung unterscheiden.
7. **Version korrigieren:** neue Version erstellen; Fehlerversion und Beweise nicht überschreiben.
8. **Neu verifizieren:** automatische Prüfung und menschliche Durchsicht mit normalen, Grenz- und Fehlerstichproben wiederholen.
9. **Wiederherstellung freigeben:** die fachliche Leitung bestätigt die Folgenbehandlung, der Workflow-Owner öffnet die Planung erneut.

Die konkreten Bestätigungsregeln für G2/G3-Aktionen stammen allein aus Kapitel 11; dieses Kapitel verlangt nur, dass die Automatisierung die entsprechenden Bestätigungs- und Übernahmemechanismen aufrufen kann.

## Fälle und Beweise

Das offizielle Hilfe-Center beschreibt getrennt die Desktop-Fähigkeiten für geplante Aufgaben, Computer-Bedienung und IM-Kanäle. [R5](/de/qwenwork/appendix-sources#r5) [R6](/de/qwenwork/appendix-sources#r6) [R7](/de/qwenwork/appendix-sources#r7) Fähigkeits-Einstiege und Verfügbarkeit können sich ändern und sind unter dem aktuellen Konto, der Systemversion und der Organisationsfreigabe zu messen.

Am Beispiel des montäglichen Geschäftstageberichts: Vor Planungsbeginn werden Eingabeverzeichnis und Datum geprüft; nach dem Erzeugen wird die Summe automatisch abgeglichen; die Inhaltsprüfenden kontrollieren die Anomalie-Erklärungen; die fachliche Leitung nimmt ab; vor dem Senden der Gruppennachricht bestätigt der Aktions-Verantwortliche. Führt eine Feldänderung zum Abgleichfehler, bleibt das System im Entwurfszustand, bewahrt die Originaltabelle und benachrichtigt die Übernehmenden – veraltete Schlüsse werden nicht weitergesendet.

## Unternehmensaktion

Ergänzen Sie für eine bestehende Automatisierung die Laufkarte:

| Pflichtfeld | Minimaler Inhalt |
|---|---|
| Auslösung und Eingaben | Planungsregel, Eingabeort, Datumsbereich, Behandlung leerer Daten |
| Vier Kontrollpunkte | je Bedingungen, Verantwortliche, Beweise und Timeout-Behandlung |
| Störungsbewältigung | Stilllegungsschalter, Übernehmende, Ersatzprozess, Folgen-Benachrichtigung |
| Versionswiederherstellung | letzte stabile Version, Re-Verifizierungsstichproben, Freigebende der Wiederherstellung |
| Ausgeführte Aktionen | Widerrufbarkeit, Widerrufs-Verantwortliche, Abhilfe bei nicht widerrufbaren Aktionen |

Bei diesen Signalen sofort stilllegen und übernehmen: Die Maschinenprüfung ist fehlgeschlagen, und es soll trotzdem weitergegeben werden; Eingabebereich oder Kontorechte ändern sich plötzlich; dieselbe Aufgabe läuft mehrfach; Originale könnten überschrieben werden; die aktuelle Aktion hat unbestätigte Objekte und Folgen; es gibt keine erreichbaren Verantwortlichen oder keinen Ersatzprozess.

## Grenzen und nächster Schritt

Nicht jede Aufgabe eignet sich für Zeitplanung oder unbeaufsichtigten Betrieb. Aufgaben mit instabilen Quellen, Abnahmen durch Fachurteil, irreversiblen Folgen oder externen Objekten behalten den Menschen in der Schleife; auch risikoarme Lese- und Entwurfsschritte brauchen Fehlermeldungen und Laufaufzeichnungen.

Dieses Kapitel definiert die Betriebskontrolle, nicht die organisationalen Governance-Stufen. Das Governance-Kapitel regelt einheitlich Datensensitivität, Mensch-Maschine-Verantwortung und Schwellen hochriskanter Aktionen.

[Nächstes Kapitel: Szenarioauswahl und Pilotbetrieb](/de/qwenwork/ch10-pilot-roadmap)
