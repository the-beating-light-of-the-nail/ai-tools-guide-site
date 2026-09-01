# Fortgeschritten: Die drei Workflows Plan, Spec und Goal sowie eigene Befehle

TraeWork bringt drei Aufgaben-Workflows (Plan / Spec / Goal) und einen Mechanismus für eigene Befehle mit. Wer den passenden Workflow nutzt, erhöht die Zuverlässigkeit langer Aufgaben deutlich.

> Offizielle Dokumentation: [work_spec-and-plan](https://docs.trae.cn/work_spec-and-plan) ｜ [work_commands](https://docs.trae.cn/work_commands)

## Welcher Workflow für welchen Fall?

| Workflow | Geeignet für | Ergebnis | Verfügbare Modi |
| --- | --- | --- | --- |
| **Plan** | Aufgaben mit klaren Grenzen, deren Schritte vor der Ausführung bestätigt werden sollen (kleinere Funktionen, Refactoring auf Modulebene, Fehlerbehebung) | plan.md unter `.trae/documents/` | Work / Code / Design |
| **Spec** | Umfangreiche, komplexe Aufgaben, bei denen vorab Lösung und Abnahmekriterien abgestimmt werden müssen (Aufgaben auf Systemebene, großflächiges Refactoring, Zusammenarbeit mehrerer Personen) | Gliederung + tasks.md + Abnahmeliste unter `.trae/specs/` | Nur Code |
| **Goal** | Langzeitaufgaben mit klarem Ziel, die der Agent kontinuierlich vorantreibt (fortlaufende Testkorrekturen, Batch-Migration, durchgehende Fehlersuche) | Zielorientiertes Weiterlaufen über mehrere Runden | Work / Code |

Der Zugang ist einheitlich: im Dialogfeld `/` eingeben und aus der Liste wählen, oder direkt `/Plan`, `/Spec`, `/goal` eingeben und Enter drücken.

## Plan: erst der Plan, dann die Tat

Die KI analysiert die Anforderungen und plant → erzeugt ein Plandokument unter `.trae/documents/` → erst **nach Ihrer Bestätigung** wird Schritt für Schritt ausgeführt. Passt der Plan nicht, können Sie das Dokument manuell bearbeiten oder die KI in natürlicher Sprache anpassen lassen.

Beispiel aus dem Büroalltag: eine Reihe von Berichten strukturieren, eine Dokumentstruktur migrieren – erst ansehen, in wie vielen Schritten die KI vorgehen will und welche Dateien betroffen sind, dann freigeben.

## Spec: Abnahmekriterien ins Dokument schreiben

Die KI erzeugt ein dreiteiliges Dokumentset (Gliederung, Aufgabenliste, Abnahmeliste), gruppiert nach Aufgabe unter `.trae/specs/`. **Bei der ersten Erstellung pausiert die KI und wartet auf Ihre Bestätigung**; danach aktualisieren sich die Status von Aufgabenliste und Abnahmeliste mit dem Fortschritt automatisch. Während der Wartephase können Sie die Dokumente direkt bearbeiten oder von der KI ändern lassen; die Dokumente lassen sich in die Versionsverwaltung aufnehmen und werden zum Wissensbestand des Projekts.

Dieser Ansatz – erst die Abnahmekriterien abstimmen, dann ausführen – entspricht der Idee der [Spec-getriebenen Entwicklung](/de/qoderwork/03-first-task) im QoderWork-Kapitel: andere Werkzeuge, dieselbe Methodik.

## Goal: zielorientiertes Weiterlaufen über mehrere Runden

Sie definieren die **Erfüllungsbedingung** in natürlicher Sprache; der Agent prüft nach jeder Runde automatisch, ob das Ziel erreicht ist: nicht erreicht → weitermachen, erreicht → automatisch anhalten. Mit der zugehörigen „Ziel-Insel" können Sie Ziele jederzeit einsehen, bearbeiten, pausieren oder löschen.

Geeignet für Batch-Aufgaben mit klarem Endpunkt wie „diese 50 Dateien alle in ein einheitliches Format überführen und stichprobenartig prüfen".

## Eigene Befehle: häufige Anweisungen als `/xxx` verpacken

Befehle verpacken oft genutzte Prompts als Kurzbefehle. Geeignet für: Wiederverwendung häufiger Anweisungen (Änderungen zusammenfassen, Besprechungsnotizen strukturieren), einheitliche Ausgabeformate (Commit-Message, PR-Beschreibungsvorlagen) und das Festlegen von Standardabläufen (Code-Review, Sicherheitsprüfung).

**Schritte zum Erstellen** (Desktop-Version):

1. Avatar unten links > Einstellungen > links „Befehle" (oder Befehlssymbol unten links im Dialogfeld → unten im Menü „Skills und Befehle verwalten");
2. Im Bereich „Befehle" auf „Erstellen" klicken;
3. Felder konfigurieren:
   - **Befehlsname**: eindeutige Kennung wie `summarize-pr-info`; nur Kleinbuchstaben, Ziffern und Bindestriche;
   - **Beschreibung**: wofür der Befehl gedacht ist;
   - **Anleitung / Instructions**: was die KI nach dem Auslösen tut – Ausführungsschritte, Kontextquellen und Ausgabe klar benennen;
4. Auf „Bestätigen" klicken. Optional wählbar: Ausführungsumgebung lokal (nur Desktop-Version) oder Cloud.

**Eingebaute Befehle**: `/plan`, `/spec`, `/browser_use` (steuert den integrierten Browser, um Kontext zu holen, und unterstützt bei der Funktionsprüfung).

Anwendung: im Dialogfeld `/` eingeben oder das Befehlssymbol anklicken, auswählen und dann die konkreten Anforderungen ergänzen.

## Aufgabenteilung von Befehlen, Skills und Regeln

| | Was wird verpackt? | Auslösung | Geeignet für |
| --- | --- | --- | --- |
| Befehl | Eine feste Anweisungsvorlage | Manuell per `/` | Häufige Kurzanweisungen |
| [Skill](/de/traework/04-skills) | Eine komplette Methode (mit Skripten/Ressourcen) | Manuell oder automatisch durch die KI | Ausgearbeitete Arbeitsmethoden |
| Regel | Verbindliche Vorgaben | Dauerhaft für alles | Code-Stil, Sprachkonventionen |
