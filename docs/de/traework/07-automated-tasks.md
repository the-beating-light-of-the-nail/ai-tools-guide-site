# Automatisierte Zeitplanaufgaben

Vordefinierte Aufgaben laufen zur festgelegten Zeit automatisch ab und liefern Ergebnisse – ganz ohne manuelles Zutun. Das ist die Funktion, mit der TraeWork vom „Reagieren auf Nachfrage“ zum „Selbstständig-Arbeiten zum festen Zeitpunkt“ wird.

> Offizielle Dokumentation: [docs.trae.cn/work_automated-tasks](https://docs.trae.cn/work_automated-tasks)

## Einstieg und Erstellung

Einstieg: Schaltfläche „Automatisierung“ oben in der linken Leiste → Verwaltungspanel für Zeitplanaufgaben (drei Registerkarten: Aufgabenvorlagen, Konfiguriert, Ausführungsverlauf; Erstellen-Schaltfläche oben rechts).

Drei Erstellungswege – nehmen Sie den, der am besten passt:

**Weg 1: Im Dialog erstellen** (empfohlen, Auslösezeit in natürlicher Sprache)

1. Oben rechts auf „Im Dialog erstellen“ klicken;
2. Aufgabeninhalt und Ausführungszeit eingeben (z. B. „werktags um 9 Uhr morgens“);
3. Unten links im Eingabefeld Ausführungsumgebung und Speicherort für die Ausgabe wählen;
4. Senden → die KI interpretiert und bestätigt bei Bedarf Details;
5. Die von der KI erzeugten Aufgabeninformationen prüfen und anpassen.

**Weg 2: Manuell neu erstellen** – oben rechts „Manuell neu“ → im Dialog alles eintragen → „Erstellen“.

**Weg 3: Aus Vorlage erstellen** – in der Registerkarte „Aufgabenvorlagen“ eine Vorlage wählen (Konfiguration voreingestellt) → bei Bedarf anpassen → „Erstellen“.

## Zentrale Einstellungen

| Einstellung | Mögliche Werte |
| --- | --- |
| Ausführungsmodus | Work / Code (Achtung: nach dem Erstellen nicht änderbar) |
| Ausführungsumgebung | Cloud / lokal (nach dem Erstellen nicht änderbar) |
| Auslöser | Feste Zeit (täglich/wöchentlich/monatlich), Intervall (Minuten/Stunden/Tage), benutzerdefiniert (natürliche Sprache, nur im Dialog) |
| Aufgabeninhalt | vollständige Aufgabenanweisung |
| Ausgabespeicherort | Verzeichnis für Ergebnisse (nach dem Erstellen nicht änderbar) |

## Vier offiziell empfohlene Szenarien

| Szenario | Aufgabenbeispiel |
| --- | --- |
| Regelmäßige Repository-Pflege | Sicherheits-Scans, Bug-Suche, Testfälle ergänzen, Änderungstagebuch (Code-Modus) |
| Informationssuche und -aggregation | Branchennachrichten, Wettbewerber-Beobachtung, App-Store-Rezensionen, Policy-Updates |
| Markenbeobachtung | Wöchentliches Monitoring, Community-Diskussionen verfolgen, Nutzerfeedback sammeln |
| Periodisches Berichtswesen | Branchen-Kurzinfos, Operations-Tagesbericht, Monitoring wichtiger Kennzahlen |

Eine sofort übernehmbare Monitoring-Aufgabe:

```text
Jeden Morgen um 9:00 Uhr: Erfasse alle öffentlichen Berichte und Social-Media-Diskussionen der letzten 24 Stunden
zu [meinem Firmen-/Produktnamen], kategorisiert nach „Medienberichte / Nutzerfeedback / Wettbewerber“,
mit Quelle und Link.
Bei weniger als 3 relevanten Einträgen eine Erläuterung ausgeben statt Inhalte aufzublähen;
den Ergebnisentwurf als Markdown-Wochenbericht ins Verzeichnis output/ speichern.
```

## Einschränkungen, die man sich merken sollte

1. Beim Erstellen im Dialog gilt der aktuelle Modus als Ausführungsmodus und ist **nachträglich nicht änderbar**;
2. **Einmal erstellte Aufgaben lassen sich in Ausführungsmodus, Umgebung und Ausgabespeicherort nicht ändern** – Änderungen erfordern Löschen und Neuanlegen;
3. Zum Ansehen des Ausführungsverlaufs muss der aktuelle TraeWork-Modus dem Modus der Aufgabe entsprechen;
4. Cloud-Aufgaben verbrauchen Account-Credits; bei langen Aufgaben den [Credit-Verbrauch](/de/traework/adv-models-credits) im Blick behalten.

## Prompts für Zeitplanaufgaben müssen präziser sein

Eine Zeitplanaufgabe ist im Kern ein **Dialog ohne Aufsicht**: Bei der Ausführung sind Sie nicht da, um nachzuschärfen. Ein typischer Fehler aus der Community: Die erste Version enthielt nur „Artikel abrufen und in der Wissensdatenbank speichern“ und scheiterte an fehlenden Parametern (wohin speichern, wie authentifizieren, was bei Fehlern). Erst als vollständige Schritte, Parameter und Fehlerbehandlung in der Aufgabenbeschreibung standen, lief sie beim ersten Versuch.

Schreib-Checkliste:

- [ ] Datenquelle konkret benennen (welche Website/welches Dokument/welche Tabelle)
- [ ] Ausgabeformat und Speicherpfad konkret benennen
- [ ] Fehlerbehandlung konkret benennen (was bei leeren Daten, was bei Quellenausfall)
- [ ] Einmal manuell im Dialog durchlaufen lassen, erst dann als Zeitplanaufgabe festigen

Eine vollständige Kombination aus Zeitplan und Push: Eine Zeitplanaufgabe erzeugt den Tagesbericht, der [Office-Assistent](/de/traework/05-bot-assistant) ist mit einer Feishu-Gruppe verbunden – fertig ist die Pipeline „jeden Morgen um 9 Uhr automatisch Tagesbericht in die Gruppe“. Ein Praxisbeispiel: [Pipeline vom WeChat Official Account zur Feishu-Wissensdatenbank](/de/traework/case-feishu-pipeline).

---

Weiter: [Computersteuerung und Browsersteuerung →](/de/traework/08-computer-browser)
