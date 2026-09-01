# Fallbeispiel: Vollautomatische Pipeline von WeChat-Official-Account-Artikeln in die Feishu-Wissensdatenbank

> Adaptiert aus dem Praxisbericht von HancksLiu (Produktmanager) im offiziellen TRAE-Forum: [„Mit TraeWork eine vollautomatische Pipeline ,WeChat-Artikel → Feishu-Wissensdatenbank' gebaut"](https://forum.trae.cn/t/topic/172002) (2026-07). Die begleitenden Skills sind Open Source: [yucai0302/wechat-to-feishu-kb](https://github.com/yucai0302/wechat-to-feishu-kb).

## Drei Schmerzpunkte

1. **Geschlossenes WeChat-Ökosystem**: Generische Crawler bekommen von Official-Account-Artikeln nur Leerseiten oder den Hinweis „im WeChat-Client öffnen"; KI-Suchmaschinen kommen am CDN-Schutz von WeChat nicht vorbei; „Mit einem Klick speichern"-Tools versagen bei Official Accounts praktisch vollständig;
2. **Lesen und Ablegen klaffen auseinander**: Gespeicherte Artikel werden nie wieder geöffnet und lassen sich nicht in die persönliche oder Team-Wissensdatenbank für Recherche und Weiterverwendung aufnehmen;
3. **Manuelles Ablegen ist zu teuer**: Ein Artikel mit 5000 Zeichen kostet manuell 15–20 Minuten Archivierung, bei 10–15 Artikeln pro Woche sind das allein 3–4 Stunden.

## Lösungsarchitektur: zwei Skills + zwei Modi

```text
Skill 1  wechat-article-saver     Artikel abrufen → lokal als Markdown speichern
Skill 2  wechat-to-feishu-kb      lokales Markdown → Feishu-Wissensdatenbank
─────────────────────────────────────────────
Sofortmodus: Artikel-Link direkt im Chat senden → Skill ruft automatisch ab und schreibt hinein
Batch-Modus: Links zeilenweise in pending.txt eintragen → zeitgesteuerte Aufgabe verarbeitet jede Nacht um 22:00 Uhr
```

### Abruf: vierstufige Rückfallstrategie

Der Anti-Crawler-Schutz von WeChat Official Accounts ist die Kernherausforderung; der Skill enthält vier Stufen – sobald eine erfolgreich ist, geht es weiter:

1. Playwright + Chromium Headless-Browser-Rendering;
2. HTTP fetch mit Anti-Crawler-Headern (User-Agent, Accept-Language usw.);
3. das in TraeWork eingebaute WebFetch-Tool;
4. als Rückfallebene manuell den Originaltext einfügen.

Der Haupttext wird mit Mozilla Readability extrahiert und mit Turndown nach Markdown konvertiert – rund 30 Sekunden pro Artikel.

### Ablage: Anbindung an Feishu

Auf der Feishu-Seite kommen nur zwei Fähigkeiten von lark-cli zum Einsatz: `wiki + node-create` (Knoten in der Wissensdatenbank anlegen) und `docs + update` (Dokumentinhalt schreiben). Lokal bleibt parallel ein Markdown-Doppelbackup, das Obsidian / Notion / Logseq direkt indizieren können.

## Ergebnisse

| Kennzahl | Vorher | Nachher |
| --- | --- | --- |
| Ablage eines Artikels | 15–20 Minuten | 5 Sekunden (sofort) / 0 Sekunden (zeitgesteuert) |
| Ersparnis pro Woche | — | 3–4 Stunden |
| Ersparnis pro Monat | — | ca. 15 Stunden |
| Wissen auffindbar | Vergammelt in den Favoriten | 100 % (Feishu-KI-Fragen + lokale Volltextsuche) |
| Teamweite Nutzung | Keine | Wissensdatenbank für alle zugänglich |

## Die wichtigste Lektion: der Prompt der zeitgesteuerten Aufgabe

Beim ersten Einrichten der zeitgesteuerten Aufgabe schrieb der Autor nur einen Satz – „Artikel abrufen und in die Wissensdatenbank speichern" –, **Fehlschlag**: Es fehlten Parameter wie space_id, Authentifizierung und Dateipfade. Die korrigierte Erkenntnis:

> **Eine zeitgesteuerte Aufgabe ist im Kern ein „Gespräch ohne Aufsicht" – je detaillierter der Prompt, desto stabiler der Lauf.**

Als sämtliche Ausführungsschritte, Parameter und die Fehlerbehandlung in der Aufgabenbeschreibung standen, lief alles beim ersten Versuch durch. Details in der Schreib-Checkliste unter [Automatisierte zeitgesteuerte Aufgaben](/de/traework/07-automated-tasks).

## Auf Ihr Szenario übertragen

Das Grundgerüst dieser Pipeline ist universell:

```text
Quelle (Links/E-Mails/Berichte) → Abruf-Skill (mehrstufiger Rückfall) → standardisiertes Zwischenformat
→ Ablage-Skill (Feishu/Notion/lokale Wissensdatenbank) → zeitgesteuerte Planung + Sofort-Dialog im Doppelmodus
```

Austauschbare Quellen: Branchennews-Seiten, Changelogs von Wettbewerbern, App-Store-Rezensionen, Wochenbericht-E-Mails des Teams. Der Autor nennt offen auch die Grenzen des aktuellen Standes – das Einsammeln über die lokale pending.txt sei „noch nicht intelligent genug"; eine ideale automatische Empfehlung scheitere an der Geschlossenheit des WeChat-Ökosystems.

## Sicherheitshinweise

- Wenn im Abrufprozess Login-Daten ins Spiel kommen, nicht an öffentlichen Geräten arbeiten;
- Urheberrechte respektieren: zum eigenen Gebrauch archivieren und weiterverbreiten sind zwei verschiedene Dinge – bei Team-Wissensdatenbanken die Lizenzgrenzen beachten.
