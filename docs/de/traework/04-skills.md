# Skills: der KI eine „Fähigkeitsbeschreibung“ mitgeben

Skills sind eines der wichtigsten Konzepte im TraeWork-Ökosystem: Jeder Skill bündelt Anweisungen, Skripte und zugehörige Ressourcen und verleiht dem Agenten **wiederverwendbare, szenario-spezifische Fachfähigkeiten**. Dieselbe Aufgabenanweisung kann je nachdem, ob der passende Skill installiert ist, völlig unterschiedliche Qualität liefern.

> Offizielle Dokumentation: [docs.trae.cn/work_skills](https://docs.trae.cn/work_skills)

## Was ist ein Skill?

Jeder Skill ist einfach ein Ordner mit einer `SKILL.md`-Datei:

```text
skill-name/
├── SKILL.md        # erforderlich: YAML-Kopf (name, description) + Beschreibung/Einsatzszenarien/Anweisungen/Beispiele
├── examples/       # optional: Beispiele
├── templates/      # optional: Vorlagen
└── resources/      # optional: Ressourcen
```

Das zentrale Designmerkmal ist das **bedarfsgesteuerte Laden**: Beim Start scannt der Agent nur die Kurzbeschreibung jedes Skills; die vollständige Anleitung wird erst geladen, wenn sie zur Aufgabe passt – das spart effektiv Tokens im Kontext.

Drei benachbarte Konzepte, die nicht verwechselt werden sollten:

| | Funktion | Laden |
| --- | --- | --- |
| Skill | beschreibt „wie die Aufgabe erledigt wird“ | bedarfsgesteuert |
| Rule | Vorgaben wie Code-Stil, Sprachen, Frameworks | vollständig geladen, belegt dauerhaft Kontext |
| MCP Server | stellt „aufrufbare Werkzeuge“ bereit | je Verbindung |

## Skills installieren: zwei Quellen

**Aus dem Markt installieren** (üblichster Weg):

1. Oben in der linken Navigationsleiste auf „Plugin-Markt“ klicken;
2. Zur Registerkarte „Skills“ wechseln und den gewünschten Skill suchen;
3. Rechts auf der Karte **+** klicken zum Installieren; ein Klick auf die Karte zeigt Details.

**Lokales Skill-Paket hochladen**: Ein gutes Skill-Paket im Internet gefunden (zip- oder .skill-Datei)? Über „Skill hochladen“ oben rechts auf der Registerkarte „Skills“ laden. Voraussetzung: Im Archiv **muss sich SKILL.md auf der obersten Ebene befinden**, mit Name und Beschreibung im YAML-Format.

## Skills verwenden: drei Wege

1. **`/`-Schnellaufruf**: Im Eingabefeld `/` eingeben und aus der Liste wählen;
2. **Im Befehl namentlich erwähnen**: z. B. „Fasse mit dem Skill codemap die Änderungen in diesem Branch zusammen“;
3. **Automatischer Aufruf durch die KI**: Wird die Aufgabenbeschreibung im „Einsatzszenario“ eines Skills getroffen, wird er automatisch geladen – je präziser die Beschreibung in der SKILL.md, desto zuverlässiger der automatische Aufruf.

Verwaltung: Umschalter auf der Skill-Karte zum Aktivieren/Deaktivieren; „Deinstallieren“ unten links im Detail-Dialog.

## Gültigkeitsbereich und Ausführungsumgebung von Skills

| Dimension | Erläuterung |
| --- | --- |
| Projekt-Skill | Im Projekt erstellt, nur dort verfügbar, gespeichert in `.trae/skills/` des Projekts |
| Globaler Skill | Im Einstellungszentrum erstellt, in allen Projekten verfügbar (macOS/Linux `~/.trae-cn/skills`, Windows `%userprofile%\.trae-cn\skills`) |
| Lokale Ausführung | nur lokale Aufgaben (nur Desktop-Version) |
| Cloud-Ausführung | Cloud-Aufgaben und von GitHub geladene Projekte (Web- + Desktop-Version) |

## Wann lohnt sich ein eigener Skill?

Nach der offiziellen Definition lösen Skills drei Arten von Problemen:

- **Konsistente Ergebnisse**: Design-Vorgaben, Markenkonsistenz, Formatkonventionen – zehn Aufgaben folgen demselben erprobten Weg;
- **Feste, wiederkehrende Workflows**: Wochenberichtsprozess, Datenbereinigungs-SOP, Content-Checklisten;
- **Wissen sichern und teilen**: Persönliche Erfahrung als Datei paketieren und projekt- und teamübergreifend wiederverwenden.

Die Faustregel ist einfach: **Wenn Sie dieselbe Aufgabenbeschreibung zum dritten Mal schreiben, sollte sie ein Skill werden.** Wer ein Buch oder eine Methodik in einen Skill destillieren möchte, findet Anregungen im WorkBuddy-Bereich unter [Skills erstellen: Wissensdestillation](/de/workbuddy/adv-build-skill/) – die SKILL.md-Spezifikation ist auf beiden Seiten dieselbe.

## Wo findet man Skills?

- Der TraeWork-Plugin-Markt (offiziell, mit „Must-have“-Empfehlungsliste)
- Community-Skill-Sammlungen: [awesome-agent-skills](https://github.com/libukai/awesome-agent-skills), [awesome-skills-cn](https://github.com/lingxuling/awesome-skills-cn) (7000+ Skills, chinesische Version)
- Nutzer-Beiträge im offiziellen TraeWork-Forum [forum.trae.cn](https://forum.trae.cn)

---

Weiter: Die KI ins Chatfenster holen – [Office-Assistent: Feishu und WeChat →](/de/traework/05-bot-assistant)
