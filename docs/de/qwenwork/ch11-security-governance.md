---
title: "Sicherheitsgovernance: Aktionen, Daten, Folgen und Mensch-Maschine-Verantwortung"
description: Unternehmens-KI-Workflows mit G0–G3, Datensensitivität, Fachfolgen und fortlaufender Autorisierung begrenzen
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/getting-started/privacy-security
---

# Sicherheitsgovernance: Aktionen, Daten, Folgen und Mensch-Maschine-Verantwortung

## Wann Sie dieses Kapitel brauchen

Wer nur Unterlagen liest, die er ohnehin sehen darf, und einen Entwurf aufbereitet, der niemanden berührt, kann dieses Kapitel zunächst überspringen. Sobald eine Aufgabe Teamnutzung, Personal- oder Kundenmaterial, automatisches Schreiben in Listen oder To-dos, systemübergreifende Anbindung, externes Senden, Zahlung, Löschung, Genehmigung betrifft oder das Ergebnis Rechts-, Finanz- oder Personalentscheidungen beeinflussen kann, kehren Sie hierher zurück und klären, wer handeln darf, wer bestätigen muss und wie bei Fehlern gestoppt wird. Sie müssen G0–G3 nicht auswendig kennen: zuerst tatsächliche Aktion, Datensensitivität und mögliche Folgen ansehen, dann nach diesem Kapitel registrieren.

## Ergebnis in 30 Sekunden

<span id="claim-g0-g3-controls-01" data-claim-id="claim-g0-g3-controls-01"></span>G0–G3 bezeichnen nur die Risikostufe der Aktion; Datensensitivität und Fachfolgen sind selbstständig zu beurteilen; anzuwenden ist die strengste der drei Kontrollen.

<span id="claim-g2-continuous-authorization-01" data-claim-id="claim-g2-continuous-authorization-01"></span>G2 darf erst von der chargenweisen Vorab-Bestätigung zu Betrieb und Stichproben im genehmigten Rahmen übergehen, wenn der Workflow offiziell freigegeben, die Grenzen klar sind und eine gemeinsam genehmigte fortlaufende Autorisierung vorliegt; G3 bleibt vor jedem Lauf zu bestätigen.

<span id="claim-human-responsibility-01" data-claim-id="claim-human-responsibility-01"></span>Die fachliche Leitung trägt stets die Verantwortung für das finale Geschäftsergebnis und kann sie weder an die KI noch an Prozess-Pflegende abtreten; Ausführende und Genehmigende einer G3-Aktion dürfen nicht dieselbe Person sein.

## Warum das wichtig ist

Risiken nur nach „Lesen" oder „Schreiben" zu beurteilen übersieht zwei Problemklassen: Das Lesen von Bewerberdaten ändert zwar keinen Systemzustand, berührt aber personenbezogene Daten; generierte Rechts-, Finanz- oder Personalurteile können selbst als gespeicherter Entwurf folgenreiche Entscheidungen beeinflussen. Umgekehrt dürfen reversible neue Dateien auf gewöhnlichen internen Daten und das Überschreiben von Originalen, externe Sendungen oder Löschungen nicht dieselben Bestätigungsregeln nutzen.

Sind Aktionen, Daten und Fachfolgen getrennt, sieht die fachliche Leitung, wer die Folgen trägt; die Prozess-Pflegenden setzen korrekte Bestätigung und Rollback um; die Daten-/Sicherheits-Verantwortlichen legen Kontroll-Untergrenzen nach Freigabeumfang. Die Stufe ist kein Automatisierungs-Grad und kein Etikett „Ausführung erlaubt"; sie ist nur eine Dimension, die die minimale Kontrollstärke bestimmt.

## Methode oder Modell

### Zuerst die Aktionsstufen G0–G3 selbstständig beurteilen

| Stufe | Feste Definition | Standard-Kontrolle |
|---|---|---|
| G0 Nur Lesen | Verändert weder Geschäftsobjekte, Rechte noch externe Zustände | Innerhalb der freigegebenen Daten automatisch ausführbar; Quellen- und Zugriffs-Aufzeichnungen bewahren |
| G1 Reversibler Entwurfs-Schreibzugriff | Erzeugt nur isolierte Entwürfe oder neue Dateien; Objekte identifizierbar, lösch- oder wiederherstellbar; keine externen Empfänger, keine Überschreibung von Originalen | Ausführung mit nachfolgender Benachrichtigung; Originale und Wiederherstellungspfad zwingend bewahren |
| G2 Geschäftszustands-Schreibzugriff | Erzeugt oder aktualisiert interne To-dos, Listen, Protokolle, CRM und andere Geschäftsobjekte | Standardmäßig vor jeder Charge Objekte, Felder und Auswirkungen zeigen und ausdrücklich bestätigen lassen; nur formal freigegebene, begrenzte Workflows mit fortlaufender Autorisierung dürfen im genehmigten Rahmen laufen und stichprobenartig geprüft werden |
| G3 Folgenreiche Aktion | Externes Senden, öffentliche Veröffentlichung, Zahlung, Genehmigung, Löschung, Stammdaten-Änderung oder andere schwer widerrufbare Aktionen | Vor jedem Lauf zwingende Bestätigung mit Audit-Aufzeichnung; Stichproben ersetzen keine Vorab-Genehmigung |

„Reversibel" ist durch den tatsächlichen Wiederherstellungspfad zu beweisen. Ein bloßes „kann gelöscht werden" ohne identifizierbare Objekte, wieder auffindbare Originale oder prüfbare Wiederherstellung erfüllt G1 nicht; das Überschreiben von Originalen gehört ebenfalls nicht zu G1. Die „ausdrückliche Bestätigung" bei G2 muss den Genehmigenden die Objekte, Felder und Auswirkungen dieser Charge zeigen; generische Pop-ups oder frühere Zustimmung genügen nicht.

### Dann die Datensensitivität beurteilen

| Datenklasse | Typischer Bereich | Minimale Behandlungsanforderung |
|---|---|---|
| Öffentlich | Rechtmäßig veröffentlichte und für den aktuellen Zweck zugelassene Informationen | Quelle, Datum und Nutzungsgrenzen bewahren |
| Intern | Allgemeine Geschäfts- und Zusammenarbeitsinformationen nur für die Organisation | Mitglieder, Systeme und Zwecke begrenzen; Zugriffs-Aufzeichnungen bewahren |
| Vertraulich / Personal- oder Kundendaten | Geschäftsgeheimnisse, personenbezogene Daten, Kundenmaterial und rückidentifizierbare Daten | Minimale Freigabe, begrenzte Nutzung und Aufbewahrung; Kontrolle nicht unter G2 |
| Reguliert oder Organisationsgeheimnis | Daten unter speziellen Gesetzen, Verträgen oder den höchsten Sensitivitätsregeln der Organisation | Nach G3 kontrollieren und den anwendbaren Regeln und Fachanforderungen unterstellen |

### Fachfolgen selbstständig beurteilen

| Fachfolge | Beurteilungsfrage | Typischer Kontrollfokus |
|---|---|---|
| Informationsunterstützung | Hilft der Output nur beim Finden, Ordnen oder Verstehen, ohne Geschäftsentscheidungen direkt zu ändern? | Quelle, Genauigkeit und Geltungsbereich |
| Täglicher Betrieb | Beeinflusst der Output Routine-Aufgabenverteilung, Listenstatus, Kunden-Nachverfolgung oder interne Abläufe? | Objekte, Felder, Rechte, Durchsicht und Rollback |
| Folgenreiche Urteile in Recht, Finanzen, Personal usw. | Kann der Output Rechte und Pflichten, Geld, Einstellung oder Ablehnung, Vergütung oder andere gewichtige Entscheidungen beeinflussen? | Unabhängige Fach-Prüfung mit Zuständigkeit oder Qualifikation und ausdrückliche Genehmigung |

Die Aktionsstufe bleibt selbstständig beurteilt; bei vertraulichen Daten oder folgenreichen Urteilen ist die Kontrolle nicht schwächer als G2; regulierte Daten, Organisationsgeheimnisse oder G3-Aktionen werden nach G3 kontrolliert; bei strengeren Organisationsregeln gelten diese. Eine Kontrolle höher ändert nicht das Etikett der Aktion selbst: Das Lesen personenbezogener Daten bleibt eine G0-Aktion, ist aber mit mindestens G2-Stärke bei Freigabe, Zugriffs-Aufzeichnung und Durchsicht zu begrenzen.

### Sechs feste Verantwortungsrollen

| Rolle | Feste Verantwortung |
|---|---|
| Fachliche Leitung | Ziel, Umfang, Abnahme und Stopp-Bedingungen definieren; die fachliche Freigabe genehmigen und für das Endergebnis verantwortlich sein |
| Prozess-Pflegende | Workflow-Versionen, Grenzen, Tests, Überwachung, Stilllegung und Wiederherstellungspfade pflegen |
| Daten-/Sicherheits-Verantwortliche | Datenklassifikation, minimale Freigaben, Protokolle, Aufbewahrung, Ereignisbehandlung und Grenzen fortlaufender Autorisierung bestätigen |
| Nutzende | Im Freigaberahmen Eingaben bereitstellen, Aufgaben ausführen, sichtbare Anomalien prüfen und Abnahme-Aufzeichnungen einreichen |
| Inhaltsprüfende | Fakten, Zahlen, Quellen, Ausdruck und nötige Fachergebnisse kontrollieren; Bestehen oder Rückgabe vermerken |
| Aktions-Genehmigende | Vor der Aktion Objekte, Umfang und Auswirkungen prüfen und G2/G3-Aktionen genehmigen oder ablehnen |

Kleine Teams können Rollen zusammenlegen – aber Ausführende und Genehmigende einer G3-Aktion bleiben getrennt. Die Prozess-Pflegenden verantworten die Laufqualität, die Inhaltsprüfenden ihre unterzeichneten Prüfungen, die Aktions-Genehmigenden die Autorisierung konkreter Aktionen; keine dieser Teilungen nimmt der fachlichen Leitung die Verantwortung für das finale Geschäftsergebnis.

### Begrenzte Registrierung für die fortlaufende G2-Autorisierung

G2 wird standardmäßig chargenweise vorab bestätigt. Nur Workflows, die das [Freigabe-Phasentor für Team-Workflows in Kapitel 10](/de/qwenwork/ch10-pilot-roadmap) bestanden haben, deren Umfang aufzählbar und die sofort stilllegbar sind, dürfen fortlaufende Autorisierung beantragen. Fachliche Leitung und Daten-/Sicherheits-Verantwortliche genehmigen gemeinsam und registrieren alle folgenden Felder:

| Registrierungsfeld | Pflichtinhalt |
|---|---|
| Erlaubte Geschäftsobjekte | Erzeug- oder aktualisierbare Objekttypen, Systeme und identifizierbarer Bereich |
| Felder | Whitelist der Lese- und Schreibfelder; verbotene Felder ausdrücklich |
| Obergrenze pro Charge | Maximale Objektzahl, Beträge oder andere Geschäftsgrenzen je Lauf |
| Lauf-Frequenz | Planungs- oder manuelle Auslösefrequenz und Sperrzeiten |
| Gültigkeit | Anfangs- und Enddatum; standardmäßig höchstens 90 Tage |
| Protokollort | Audit-Speicherort, der von Verantwortlichen erreicht, durchsucht und exportiert werden kann |
| Stichprobenfrequenz | Standardmäßig mindestens wöchentlich, mit Stichprobenregel |
| Widerrufende | Konkrete Rollen oder Personen mit Recht auf sofortige Stilllegung |
| Widerrufsbedingungen | Auslösende Regeln bei Änderungen von Rechten, Feldern, Empfängern, Fehlerquoten oder anderen Grenzen |
| Gebundene Workflow-Version | Eindeutige Versionsnummer oder unveränderliche Versionskennung samt Test- und Freigabe-Aufzeichnung |
| Ausführungskonto / Dienstidentität | Tatsächlich laufendes Konto, Dienstidentität und dessen Minimalrechte |
| Laufumgebung | Genehmigte Systeme, Mandanten, Räume und Produktions- oder Testumgebungen |
| Genehmigter Zweck | Erlaubte Geschäftszwecke; ausdrücklich verbotene Zweitnutzung |

Alte Autorisierungen gelten nur für die registrierte Workflow-Version, das Ausführungskonto bzw. die Dienstidentität, die Laufumgebung und den genehmigten Zweck – nicht für andere Versionen, Ausführende, Umgebungen oder Zwecke. Ändert sich eines von Rechten, Feldern, Empfängern oder Fehlerquote, verfällt die fortlaufende Autorisierung sofort und bedingungslos. Ändert sich Workflow-Logik oder -Regeln, Version, Modell, Konnektor, Ausführender oder Laufumgebung, verfällt sie ebenfalls sofort. Der Workflow wird zuerst stillgelegt und auf chargenweise Bestätigung zurückgeführt; erst nach Revision, Re-Verifizierung und gemeinsamer Genehmigung wird er wieder aktiviert. Auch das Ablaufen der Standard-Gültigkeit lässt sie verfallen – keine stille Verlängerung.

Während der fortlaufenden Autorisierung müssen Laufprotokolle 100 % der Läufe decken und mindestens wöchentlich stichprobenartig geprüft werden. Die Protokolle erfassen mindestens Lauf-ID, Workflow-Version, Ausführenden, Objekte, Vorher-Nachher-Werte der Schlüsselfelder, Ergebnis und Anomalien; bei personenbezogenen, Kunden- oder anderen sensiblen Inhalten werden nur die nötigen Werte, geschützte Verweise oder Inhalts-Hashes nach genehmigter Protokoll-Richtlinie erfasst, mit entsprechenden Zugriffs- und Aufbewahrungsfristen. „100 % Erfassung" heißt: Jeder Lauf hat eine auditierbare Aufzeichnung – nicht unbegrenzte Kopie oder dauerhafte Speicherung sensibler Originalwerte.

Für G3 gibt es keine Befreiung von der Einzelbestätigung durch fortlaufende Autorisierung. Vor jedem Lauf sind den Genehmigenden Empfänger oder Objekt, konkrete Aktion, Schlüsselinhalt oder -felder, Wirkungsbereich und unwiderrufliche Folgen zu zeigen; jede Genehmigung bindet eine unveränderliche Aktionsversion bzw. einen Inhalts-Hash, eine einmalige Ausführungs-ID und die registrierte Gültigkeit. Ändern sich Empfänger oder Objekt, Aktion, Schlüsselinhalt, Felder oder Auswirkungen, läuft die Gültigkeit ab, wiederholt sich die Ausführung oder soll nach einem Fehlschlag wiederholt werden, ist erneut zu zeigen und zu genehmigen; Stichproben ersetzen keine Vorab-Genehmigung.

G3-Audit-Aufzeichnungen bewahren zugleich die Kennung der Genehmigungs-Momentaufnahme und die tatsächlich ausgeführten Empfänger oder Objekte, Aktionen, Schlüsselinhalte oder Feldwerte, Ergebnisse und Anomalien, damit Genehmigtes und Tatsächliches vergleichbar bleiben. Sensible Inhalte werden nur im freigegebenen Rahmen dokumentiert – über geschützte Verweise oder Inhalts-Hashes; der Audit duldet keine ausgeweitete Kopie, keinen zusätzlichen Zugriff und keine längere Aufbewahrung.

### Büro-Beispiel: vier Aktionen mit demselben Meeting-Protokoll

Zuerst die Stufen mit gewöhnlichen Aktionen verstehen, dann die Tabellenregeln. Die „Bestätigung" hier meint die Bestätigung konkreter Objekte, Inhalte und Auswirkungen – kein einmaliger Klick als Dauererlaubnis; ein bestandenes Phasentor verleiht keine Rechte.

| Aktion | Konkretes Beispiel | Wer bestätigt was | Wie bei Fehlern gestoppt wird |
|---|---|---|---|
| G0 Nur Lesen | Freigegebene Meeting-Aufzeichnungen lesen und Ergebnisse, To-dos und Quellen extrahieren, ohne Geschäftsobjekte oder externe Zustände zu ändern. | Nutzende bestätigen den Aufgabenbereich; Daten-/Sicherheits-Verantwortliche bestätigen Quelle und Zugriffsbereich; Inhaltsprüfende bestätigen, dass Fakten zur Original-Aufzeichnung zurückführen. | Bei abgelaufenen Rechten, unklaren Quellversionen oder personenbezogenen Daten außerhalb des Zwecks: Lesen und Generieren sofort stoppen, freigegebene Originale bewahren, manuell prüfen, kein Wechsel auf unbefugte Konten. |
| G1 Isolierter Entwurf | Aus Wochenbericht-Eingaben einen isolierten Protokollentwurf oder eine neue Datei erzeugen; Originale nicht überschreiben, keine Empfänger berühren. | Nutzende bestätigen Entwurfsort und Eingabeversion; Inhaltsprüfende bestätigen Editier- und Prüfbarkeit; Prozess-Pflegende bestätigen Objektkennung, Originalschutz und Wiederherstellungspfad. | Landet der Entwurf falsch, sind Objekte nicht identifizierbar, Originale überschrieben oder Wiederherstellungsübungen gescheitert: sofort stilllegen, Originale schützen, manuell übernehmen; nach Korrektur die Wiederherstellung verifizieren – ein bloßes „kann gelöscht werden" genügt nicht. |
| G2 Internes Schreiben in Liste/To-do | Bestätigte Meeting-Aktionspunkte in interne Liste oder To-dos schreiben; Objekte, Felder und Auswirkungen zeigen, nichts extern senden. | Aktions-Genehmigende bestätigen Felder, Menge, Auswirkung und Rollback für die tatsächlichen Objekte dieser Charge; fachliche Leitung bestätigt den Geschäftsbereich; Daten-/Sicherheits-Verantwortliche bestätigen die Freigabe. Nur formal freigegebene Workflows mit aufzählbaren Grenzen und gemeinsamer Genehmigung können fortlaufende G2-Autorisierung beantragen. | Bei abweichenden Objekten oder Feldern, Doppelschreibungen, Rechteanomalien oder nicht prüfbaren Schreibergebnissen: diese und folgende Chargen stoppen, fortlaufende Autorisierung zuerst entwerten, Originalliste schützen, manuell prüfen und wiederherstellen; nach Revision neu verifizieren – alte Genehmigung gilt nicht weiter. |
| G3 Externes Senden, Zahlung oder Löschen | Protokoll an Kunden senden, Zahlung ausführen, Aufzeichnungen löschen oder andere schwer widerrufbare externe Aktionen. | Aktions-Genehmigende bestätigen je Lauf Empfänger oder Objekt, konkrete Aktion, Schlüsselinhalt oder -felder, Auswirkungen und unwiderrufliche Folgen; Ausführende und Genehmigende sind getrennt. Die fachliche Leitung trägt die finale Geschäftverantwortung. | Ändert sich Inhalt, Objekt, Version oder Auswirkung, scheitert die Ausführung oder soll wiederholt werden: sofort stoppen und Wiederholung blockieren, Originale schützen, manuell übernehmen, tatsächliche Auswirkungen mit der Genehmigungs-Momentaufnahme abgleichen; nach Wiederherstellung verifizieren – danach gilt weiter die Einzelbestätigung. |

Die minimale Aufzeichnung für gewöhnliche Lesende: Eingabeversion, was manuell geändert wurde, welche Anomalien auftraten, wer was abnahm und welches Ergebnis schließlich entstand. Der [Atlas öffentlicher Fälle in Kapitel 9 (mit 32 zu verifizierenden Szenario-Hinweisen)](/de/qwenwork/ch09-public-case-atlas) eignet sich, Protokoll- oder Nachverfolgungs-Szenarien zu üben; der Atlas hilft nur beim Verständnis von Aktionen und Ergebnisformen und ersetzt weder Freigaben noch Fach-Prüfungen oder Genehmigungs-Aufzeichnungen der eigenen Organisation.

## Fälle und Beweise

Derselbe Workflow „Kundenbesuch-Nachverfolgung" kann mehrere Stufen zugleich enthalten: Lesen freigegebener CRM-Einträge ist G0; ein gespeicherter E-Mail-Entwurf ohne Kundenberührung unter Wahrung des Originals ist G1; das Aktualisieren des internen CRM-Status ist G2; das Senden der E-Mail an den Kunden ist G3. Selbst wenn die G2-Aktualisierung fortlaufend autorisiert ist, bleibt das externe Senden je Lauf zu bestätigen. Nur mit Aufzeichnungen zu Eingabeversion, manuellen Änderungen, Anomalien, Abnahme und Ergebnis lässt sich nach einem Fehlschlag klären, ob Rechte, Inhalt oder Aktionsbestätigung versagt haben.

Noch das Beispiel Bewerberstatus-Aufbereitung: Die Aktion mag nur G0-Lesen und -Verdichten sein, aber die Eingaben enthalten personenbezogene Daten, daher ist die Kontrolle nicht schwächer als G2; fließt der Output in folgenreiche Urteile zu Einstellung, Ablehnung oder Vergütung ein, prüfen zusätzlich die entsprechenden Fach-Verantwortlichen. Erhöhte Kontrolle erlaubt keine automatischen Personalentscheidungen.

Das offizielle Hilfe-Center von Qwen Work bietet Erklärungen zu Datenschutz und Sicherheit. [R9](/de/qwenwork/appendix-sources#r9) Tatsächliche Produktfähigkeiten, Datenverarbeitung und Organisations-Konfiguration richten sich nach Seiten und Verträgen zum Nutzungszeitpunkt; G0–G3, Rollenteilung und Fristen fortlaufender Autorisierung dieses Kapitels sind Community-Governance-Empfehlungen, keine offizielle Produktrisiko-Einstufung oder Rechtsberatung.

## Unternehmensaktion

Ergänzen Sie für jeden Workflow in Vorbereitung oder Betrieb eine Governance-Karte:

1. Aktion für Aktion mit G0–G3 markieren; kein vager Durchschnittswert für den ganzen Prozess.
2. Datensensitivität und Fachfolgen getrennt markieren und die strengste der drei Kontrollen anwenden.
3. Sechs Rollen benennen; prüfen, ob G3-Ausführende und -Genehmigende getrennt sind.
4. Für G1 Originale, Objektkennung und Wiederherstellungspfad prüfen und eine Wiederherstellung tatsächlich üben.
5. Für G2 chargenweise Vorschau und ausdrückliche Bestätigung einrichten; bei nötiger fortlaufender Autorisierung alle Registrierungsfelder ausfüllen und gemeinsam genehmigen.
6. Für G3 Einzelbestätigung, Audit-Aufzeichnung und manuelle Übernahme nach Fehlern einrichten; keine Stichproben-Befreiung.
7. Unbefugte Aktionen, erhebliche Datenschutzprobleme und kritische Geschäftsfehler an die Stopp-Regeln von Kapitel 10 anbinden.
8. Mindestens wöchentlich G2-Protokolle und Anomalien prüfen; bei Grenzänderungen zuerst die Autorisierung entwerten, dann Ursachen untersuchen.

Minimale Go-live-Beweise: aktuelle Workflow-Version, Freigabe-Aufzeichnungen, Rollenliste, Bestätigungsoberfläche oder -aufzeichnungen, Protokollort, Stichprobenergebnisse, Stilllegungsschalter und Wiederherstellungsübung. Fehlt eine nötige Kontrolle, wird der Umfang verkleinert oder manuell ausgeführt.

## Grenzen und nächster Schritt

Dieses Kapitel liefert ein allgemeines Governancemodell und ersetzt weder Organisationsregeln, vertragliche Pflichten, aufsichtsrechtliche Anforderungen noch Rechts-, Finanz- oder Personalurteile. Datenklassen sind von Personen zu bestätigen, die Organisationsdaten und anwendbare Regeln kennen; bei unklaren Fachfolgen gilt die höhere Stufe mit Bitte um Fach-Prüfung.

Eine Governance-Stufe beweist nicht die Wirksamkeit eines Workflows, und ein Phasentor verleiht keine Rechte automatisch. Organisationen nutzen zugleich die Pilot-Phasentore von Kapitel 10 und die Automatisierungs-Übernahmekette, damit Workflows die Qualitäts- und Wert-Verifizierung bestehen und bei Änderungen von Rechten, Eingaben oder Fehlerquoten stoppen, übernommen und wiederhergestellt werden können.

[Nächstes Kapitel: Team-Workflow-Betrieb](/de/qwenwork/ch12-workflow-operations)
