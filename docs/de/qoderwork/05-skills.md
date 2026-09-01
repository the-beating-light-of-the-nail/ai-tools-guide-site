# Skills und Experten-Kits

Ein Skill ist „ein vorab geschriebener Arbeitsleitfaden"; ein Experten-Kit (Expert Kit) paketiert das Fachwissen, die Workflows und die Beurteilungsmaßstäbe eines Berufsbildes als Ganzes. Im QoderWork-Ökosystem sind die beiden die zwei Stufen von „kann es bedienen" zu „kann es professionell".

> Offizielle Dokumentation: [skills](https://docs.qoder.com/zh/qoderwork/skills) ｜ [expert-kits](https://docs.qoder.com/zh/qoderwork/expert-kits)

## Skills: die „Fähigkeitsbeschreibung" der KI

Jeder Skill ist im Kern ein Ordner mit einer SKILL.md-Datei unter `~/.qoderwork/skills/`. Die SKILL.md ist in natürlicher Sprache geschrieben, ganz ohne Code, und legt fest: „Welche Schritte, welches Ausgabeformat und welche Details sind bei dieser Art von Aufgabe zu beachten."

Vier Werte: Schluss mit wiederholten Erklärungen, konsistente Ergebnisse, persönliche Erfahrung wird zum wiederverwendbaren Vermögenswert, und die KI wandelt sich vom „Generalisten" zum „Spezialisten".

**Vier Bezugswege**:

1. **Im Gespräch suchen und installieren**: einfach sagen „Finde mir einen Skill für XX" – das eingebaute find-skills sucht, empfiehlt und installiert mit einem Klick;
2. **Skill-Plaza durchstöbern**: Erweiterungen → Skills, im Markt stöbern;
3. **Aus der Open-Source-Community**: einen GitHub-Repository-Link senden – klonen, ablegen und laden geschieht automatisch;
4. **Manuell hochladen**: auf der Skill-Seite „Skill installieren" klicken und die SKILL.md hochladen.

**Vier Arten der Nutzung**: automatische Auslösung (Beschreibung der Aufgabe löst passende Skills aus), Schnellaufruf per `/`, Kontext per `@` hinzufügen (Achtung: @ ergänzt Kontext, es ruft nicht auf), und im Gespräch namentlich ansprechen („Erzeuge die Bildserie mit dem Skill xxx").

**Neun eingebaute Skills**: docx / pdf / pptx / xlsx (lösen automatisch aus, wenn der Dateityp erwähnt wird), find-skills, create-skill, plugin-creator, install-skill-dependency, vm-error-recovery.

**Teilen**: auf der Skill-Seite das Teilen-Symbol neben dem eigenen Skill anklicken → Link kopieren → die Gegenseite installiert mit einem Klick. Beachten: **Der Link gilt rund 24 Stunden** und teilen lässt sich nur, was man selbst erstellt hat.

## Experten-Kits: „Fachverständnis" fürs Team paketieren

Offizielle Positionierung: „Die KI zu einem echten Fachmann machen." Ein Kit = Skill + Datenanbindung + Workflow + Ausgabestandards als integriertes Paket – gelöst wird nicht „wie die KI etwas Bestimmtes tut", sondern „**wie ein Team einheitlich mit derselben KI-Arbeitslösung arbeitet**": einmal konfigurieren, von allen nutzen.

**Zwölf eingebaute Kits**: Produktmanagement, Produktdesign, Unternehmensrecht, Unternehmensfinanzen und -steuern, Vertragsmanagement, Beratungsdelivery, Marketing, Investment-Research, Investmentbanking, Beteiligungskapital, Vermögensverwaltung, Technologie-Services-Assistent.

**Anwendung**:

1. Erweiterungen → Experten-Kits, auf der Karte rechts auf + klicken zum Installieren (Skills laden automatisch);
2. neue Aufgabe anlegen, `/` eingeben, Kit-Namen wählen (z. B. `/Vertrag_pruefen`) und das Anliegen beschreiben.

**Drittanbieter-Kits installieren**: oben rechts „+ Hinzufügen" → „Kit hochladen", .zip-Paket wählen (muss `.qoder-plugin/plugin.json` enthalten; plugin.json braucht ein name-Feld).

## Ein echter Fall: 20 Jahre Anwaltserfahrung als Vermögenswert

Die offizielle Praxisseite dokumentiert die Nutzung einer Kanzlei-Partnerin (Verteidigung in einem Urheberrechtsprozess):

- Skills wurden während der Bearbeitung erstellt: Beweisaufbereitung (Sortierregeln + Nummerierungssystem), Präzedenzfallsuche (nach unbefriedigender erster Runde **den Klagegrund-Bereich eingrenzen**), Aufbau der Verteidigungslinie (Argumentationsebenen erst in der dritten Fassung umstrukturiert), Entwurf der Antwortchrift;
- Ergebnis: **in vier Tagen das komplette Schriftsatzpaket selbst erstellt** – Antwortschrift, Beweiswürdigung, Beweisliste, Plädoyer, 356-seitiger Beweisband;
- nach Abschluss die zehn Skills zu einem Legal-Experten-Kit zusammengefasst und im Team verteilt: Nachwuchs erzeugt mit einem Klick, Partnerin prüft.

Vier Schritte zum eigenen Kit: ① mit einem Skill einen Workflow zum Laufen bringen (Einstieg: eine Arbeit wählen, die Sie in der letzten Woche mehr als zweimal wiederholt haben) → ② Skills ergänzen, bis der ganze Ablauf abgedeckt ist → ③ zum Experten-Kit integrieren → ④ mit dem Team teilen.

Drei verbreitete Irrtümer: Die Kit-Ausgabe ist ein hochwertiger **Entwurf**, kein Endprodukt; einmal paketiert heißt nicht für immer nutzbar (nachpflegen!); größer ist nicht besser (fokussieren auf „Vertragsprüfung" statt „alle Rechtsangelegenheiten").

## Eigene Skills bauen: /create-skill

Im Gespräch `/create-skill` eingeben und „Auslösewort + Schritte + Ausgabeformat" beschreiben – QoderWork erzeugt die SKILL.md. Das ausführliche Vorgehen im Fortgeschrittenen-Kapitel [Skills im Gespräch erstellen](/de/qoderwork/adv-skill-create).

> Sie wollen ein ganzes Buch zu einem Skill-Set destillieren? Die Idee dazu im WorkBuddy-Kapitel [Skills bauen: Wissensdestillation](/de/workbuddy/adv-build-skill/) – die SKILL.md-Spezifikation ist auf beiden Seiten dieselbe.

---

Weiter: [Connectors und MCP →](/de/qoderwork/06-connectors)
