# Projektabschluss: Dateien, Entscheidungen und Deliverables gemeinsam ablegen

> Szenario: die PI-Engine in WeSight (Desktop-Anwendung) integrieren. Früher erschien das Schreiben von Code durch KI nicht schwer – schwer war, die KI das Projekt wirklich «verstehen» zu lassen. Diesmal hat Doubao Work Projekt-Wissensspeicher und Code gemeinsam betrachtet und die Eingriffspunkte sauber geplant.

Das Anliegen lässt sich in einem Satz formulieren:

```text
Im Projekt wesight soll eine Engine hinzugefügt werden. Ich möchte die PI-Agent-Engine
verwenden. Bitte erstelle mir auf Grundlage des Wissensspeichers und des aktuellen
Codezustands einen Umsetzungsplan für die Integration der PI-Engine.
```

## Wissensspeicher und Code gemeinsam betrachten

Doubao Work sah sich zuerst zwei Dinge an: den **Projekt-Wissensspeicher in Feishu** und im **Code-Repository die Integrationspunkte** – Engine-Routing, Konstanten, Adapter, Provider-Registrierung. Es brachte den abgelegten Projektkontext und die tatsächlich laufende Architektur in Einklang und entschied erst dann, wie der Plan aussehen soll.

Eine überraschende Feststellung: Der erste Hinweis galt der Tatsache, dass **der Wissensspeicher leer ist** – nur Titel und ein Verweis auf eine bereits gelöschte Unterseite. Wer den Speicher referenziert, glaubt, dort stünden Antworten – dabei ist da nichts. Noch beruhigender: Statt wegen des leeren Speichers zu erfinden, stellte es klar, «alle PI-Informationen im Plan stammen aus eigener Recherche in der offiziellen pi.dev-Dokumentation und im Quellcode badlogic/pi-mono» – die Herkunft der Informationen wurde offen gelegt.

> **Wissen veraltet; ohne Quelle, Verantwortlichen und Aktualisierungsdatum führt eine alte Antwort Nutzer lange in die Irre.** Ein Hohlraus-Wissensspeicher ist gefährlicher als keiner – er lässt jeden, der ihn referenziert, glauben, «hier ist etwas abgelegt».

Aus dem Codezustand leitete es rückwärts die 5 Ebenen ab, die eine neue Engine durchdringen muss: Konstanten/Typen-Registrierung → Provider/Umgebung/Installer → Laufzeit-Adapter → Router- und Main-Verdrahtung → Renderer-UI, ergänzt um Konfigurationssynchronisation und einen End-to-End-Test. Zu den Schlüsselentscheidungen gab es klare Empfehlungen: Integrationskanal über RPC-Modus (`pi --mode rpc`, stdin/stdout-JSONL-Protokoll); ein eigener Adapter `PiRuntimeAdapter` (keine Wiederverwendung des 131 KB-Adapters, der auf das Parsen von CLI-Textausgaben zugeschnitten ist – PI liefert einen sauberen JSONL-Strom); Berechtigungen in der ersten Version durchreichen, Bestätigungsdialoge in Phase zwei.

## Deliverable: ein umsetzbarer Plan

Der Plan wurde in `docs/pi-engine-integration-plan.md` gespeichert, mit Umsetzungsreihenfolge und Aufwandsschätzung in 4 Meilensteinen:

1. **M1 Gerüst**: Konstanten/Typen/Provider/Installer – kompiliert, die Umgebungsseite zeigt Pi mit Erkennung/Installation;
2. **M2 Kern läuft**: PiRuntimeAdapter + Router- und Main-Verdrahtung – ein kompletter Dialogdurchlauf;
3. **M3 vollständige Funktion**: UI + Konfigurationssynchronisation + Bilder/Gesprächsfortsetzung/Abbruch;
4. **M4 Berechtigungen glätten**: Berechtigungsdialog + Tests und Regression.

Zudem wurden vorab 6 Risikopunkte benannt (Schema von models.json, Streaming-Semantik, Strategie zur Gesprächsfortsetzung, Windows-Kompatibilität usw.). Die Entscheidungen werden nicht aus dem Bauch gefällt: Die drei Kernentscheidungen sind klar dargestellt, mit geprüften Standardlösungen als Referenz – **die endgültige Entscheidung bleibt vollständig beim Entwickler**. Erst die vollständige Durchspielung des Lösungswegs, dann der bewusste Freiraum bei den Kernentscheidungen: Das reduziert Abstimmungsaufwand erheblich.

## Recherche und Deliverables zurück in den Wissensspeicher legen

Als es die Recherche-Dokumente in den Projekt-Wissensspeicher schreiben sollte, erkannte es, dass das aktuelle Konto nur Leserechte hat, wechselte automatisch auf den persönlichen Wissensspeicher und schloss eine vollständige Inhaltsprüfung ab. Dabei zeigt sich eine leicht übersehene Erkenntnis: **Wo ein Dokument liegt und wer es pflegen darf, ist selbst Teil der Projektassets** – trägt kein Dokument Verantwortlichen und Datum der letzten Änderung, wird der Wissensspeicher schnell zu einer verlassenen Insel, die niemand beansprucht und niemand zu ändern wagt.

Auch die Anweisung «zuerst nur das oberflächliche Gerüst anlegen, keine echte Entwicklung, danach mit Feishu synchronisieren» setzte es präzise um: Konstanten, Typen, leere Adapter und UI-Optionen waren vorhanden, alles kompilierte, die Oberfläche zeigte die Option PI – aber ohne echte RPC-Kommunikation.

## Wie ein gesunder Projekt-Wissensspeicher aussieht

```text
Projekt-Wissensspeicher
├── Startseite
├── Produkt & Architektur
├── Entwicklungsrichtlinien
├── Meetings & Entscheidungen
│   ├── Besprechungsprotokolle
│   └── Entscheidungsprotokolle (ADR)
├── Release & Versionen
│   ├── Release-Notizen
│   └── Release-Checkliste
└── Team & Zuständigkeiten
```

**Nach Projektabschluss Dateien, Entscheidungen und Deliverables gemeinsam ablegen – und beim Ablagen Quelle, Verantwortlichen und Aktualisierungsdatum notieren.** So nehmen weder die KI noch spätere Kollegen einen langen Umweg über veraltete Antworten. Je stärker die KI wird, desto wichtiger wird der Kontext (Context).

---

Weiter: [Aus dem Feishu-Wissensspeicher einen wiederverwendbaren Skill machen →](/de/doubaowork/case-wiki-to-skill)
