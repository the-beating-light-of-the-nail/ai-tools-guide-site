# Fortgeschritten: Modellverwaltung und Stolperfallen bei Credits

TraeWork rechnet in „Credits" ab, und die Modellwahl bestimmt direkt, wie schnell Ihr Guthaben schmilzt. Dieses Kapitel bündelt die häufigsten Stolperfallen aus der offiziellen Abrechnungsdokumentation zu einer Übersichtskarte.

> Offizielle Dokumentation: [work_models](https://docs.trae.cn/work_models) ｜ [ide_plans-and-billing](https://docs.trae.cn/ide_plans-and-billing). **Preise und Pakete Stand 2026-08-31 – maßgeblich sind die aktuellen Angaben auf [trae.cn/pricing](https://www.trae.cn/pricing).**

## Zwei Credit-Typen, erst mal auseinanderhalten

| | Allgemeine Credits | Work-exklusive Credits |
| --- | --- | --- |
| Geltungsbereich | Für TraeCode + TraeWork | **Nur TraeWork** |
| Quelle | Pro / Pro+ / Ultra-Mitgliedschaft, Zukauf, Registrierungsgeschenke, Check-in-Aktionen | Lite-Mitgliedschaft, Registrierungsgeschenke, tägliches Check-in, Einladungen |

Die wichtigsten Verbrauchsregeln:

- Credits fallen nur bei **integrierten TRAE-Modellen** an; eigene Modelle verbrauchen keine;
- Verbrauchsreihenfolge in TraeWork: **zuerst die mit der kürzesten Gültigkeit → bei gleicher Frist Work-exklusiv vor allgemein → Bonus-Credits vor Mitgliedschafts-Credits**;
- Seed-2.1-Turbo und Seed-Code werden mit 75 % Rabatt abgerechnet (in allen Mitgliedsstufen enthalten).

## Pakete im Schnellüberblick (chinesische Version)

| | Lite | Pro | Pro+ | Ultra |
| --- | --- | --- | --- | --- |
| Einzeln monatlich | ¥49 | ¥99 | ¥239 | ¥699 |
| Monatl. Abo | ¥45 (1. Monat ¥9,9) | ¥89 (1. Monat ¥59) | ¥219 | ¥629 |
| Credits/Monat | 2000 Work-exklusiv | 4000 allgemein | 12000 allgemein | 40000 allgemein |
| Parallele Cloud-Tasks | 2 | 10 | 10 | 20 |

Kostenlose Nutzer: 500 allgemeine Credits pro Monat fürs Anmelden + 200 Work-exklusive Credits täglich fürs Check-in + 2000+2000 als Geschenkpaket für Neuregistrierungen.

**Stolperfallen**:

1. **Lite enthält nur Work-exklusive Credits** – wer parallel mit TraeCode programmiert, stellt fest, dass dort nichts davon nutzbar ist; dann direkt zu Pro greifen;
2. Zukauf-Pakete (¥50/1000) bestehen ausschließlich aus allgemeinen Credits und sind **nur für zahlende Mitglieder kaufbar**; gekaufte Credits bleiben nach Ablauf der Mitgliedschaft innerhalb ihrer Gültigkeit nutzbar;
3. **Ein Downgrade ist nicht möglich**; ein günstigeres Paket kann erst nach Ende des Abrechnungszeitraums gebucht werden. Aufpreise beim Upgrade werden anteilig nach ungenutztem Zeitraum verrechnet;
4. Fehlgeschlagene Läufe wegen Sperrwortfilter, Fehlern des zugrunde liegenden Modells oder Endlosschleifen werden gutgeschrieben; lokale Fehler (z. B. volle Festplatte) nicht.

## Welches Modell wählen?

Integrierte Modelle im Work-Modus (Auswahl): Seed-2.1-Pro / Seed-2.1-Turbo, GLM-5.3 / GLM-5.2, DeepSeek-V4-Pro / V4-Flash, Kimi-K3 / K2.7-Code, MiniMax-M3, Qwen3.8-Max usw. Mit `*` markierte Flaggschiff-Modelle sind nur für Pro+ / Ultra / Express-Mitglieder verfügbar.

Praktische Strategien:

- **Alltägliche Aufgaben**: standardmäßig Auto Mode (wählt automatisch nach Geschwindigkeit, Leistung und Ressourcenbedarf) oder ein Modell der Standardklasse;
- **Sparmodus für Masse**: Seed-2.1-Turbo (75 % Rabatt) + klare, knappe Aufgabenbeschreibung (weniger Tokens, weniger Verbrauch);
- **Wichtige Ergebnisse**: Bei Schlüsselberichten und komplexen Analysen zum Flaggschiff wechseln – ein Durchgang ist billiger als wiederholte Nachbesserungen.

## Eigene Modelle anbinden (ohne Credit-Verbrauch)

Einstellungen > Modelle > „Modell hinzufügen" (**nur Desktop-Version**, eigene Modelle sind nur in der lokalen Umgebung verfügbar):

1. Voreingestellten Anbieter wählen (nutzungsbasiert / Coding Plan / Agent Plan) oder „Benutzerdefiniertes Modell";
2. API-Format, eins von beiden: **OpenAI Chat Completions** (kompatibel mit OpenAI, DeepSeek, Kimi, GLM, OpenRouter usw.) oder **Anthropic Messages** (Claude-Familie);
3. API-Adresse, Modell-ID und Schlüssel eintragen; das System prüft sie;
4. Optional erweiterte Konfiguration: Kontextfenster, Runden für Tool-Aufrufe, Bildunterstützung, Denkmodus, Temperature usw.

Schnellreferenz gängiger Kombinationen: Claude-4 = Anthropic-Format + Claude-4-Serie; GPT-5 = OpenAI-Format + GPT-5-Serie; GLM/DeepSeek/Kimi = OpenAI-Format + jeweilige Serie.

> Tragen Sie Schlüssel ausschließlich in die Client-Einstellungen ein – niemals in Aufgabenbeschreibungen oder geteilte Dateien.

## Checkliste für Credits sparende Gewohnheiten

- [ ] Eine Aufgabe, ein Thema; Nebensächliches in neuen Aufgaben (verhindert das Wiederholen alter Kontexte)
- [ ] Den Ablauf erst mit einem günstigen Modell durchspielen, erst beim letzten Schritt zum Flaggschiff für die Feinschliff wechseln
- [ ] Das Ausgabeformat in der Aufgabenbeschreibung klar festlegen – weniger Nachbesserungsrunden
- [ ] Bei langen Dokumenten zuerst die Gliederung von der KI erstellen lassen, dann nach Bestätigung vollständig ausarbeiten
- [ ] Zeitgesteuerte Aufgaben vorher einmal manuell durchlaufen lassen, damit sie unbeaufsichtigt nicht in Endlosschleifen Credits verbrennen
