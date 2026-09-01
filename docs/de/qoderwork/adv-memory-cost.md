# Fortgeschritten: Bewusstsein, Kosten und die sichere Arbeitsumgebung

Drei Mechanismen, die alles „mit der Zeit geschmeidiger" machen: die KI sich Sie merken lassen (Bewusstsein), die Credits sinnvoll einsetzen (Kosten) und Aufgaben im isolierten Bereich laufen lassen (sichere Arbeitsumgebung).

> Offizielle Dokumentation: [memory](https://docs.qoder.com/zh/qoderwork/memory) ｜ [settings](https://docs.qoder.com/zh/qoderwork/settings)

## Bewusstsein: sitzungsübergreifendes Gedächtnis und Personalisierung

Das Bewusstsein (Awareness, seit v0.6.0) ist QoderWorks Gedächtnis- und Personalisierungssystem: Es zeichnet fortlaufend Ihre Vorlieben und Arbeitsgewohnheiten auf, sodass neue Gespräche von vornherein mit vollem Kontext starten. Drei Ebenen: Gedächtnis, Reflexion, Selbst-Weiterentwicklung von Skills.

Zugang: das „Bewusstsein"-Symbol in der linken Navigation. zwei Hauptschalter:

- **Bewusstseinsmodus**: der Hauptschalter;
- **Automatisches Gedächtnis**: hält Nutzerprofil und Kurz-/Langzeitgedächtnis automatisch auf dem Laufenden und stößt regelmäßig Gedächtnis-Reflexionen an.

Dynamik-Panel: Gedächtnis-Trend (nach Tag/Woche/Monat), Tagesstatistik (Anzahl der Prüfungen, neue Erinnerungen, Skill-Updates, Reflexionen), letzte Aktivitäten.

**Übersicht der Bewusstseins-Dateien** (für alle, die tief anpassen wollen):

| Eintrag | Datei/Ort |
| --- | --- |
| Speicherort | `~/qoderwork/awareness/main` |
| Zusammenführungsstil | SOUL.md (voreingestellt oder frei wählbar) |
| Arbeitsbuch | AGENTS.md (direkt editierbar) |
| Nutzerprofil | USER.md (automatisch gepflegt, manuelle Änderung nicht empfohlen) |
| Langzeitgedächtnis | MEMORY.md (automatisch gepflegt) |
| Kurzzeitgedächtnis | Verzeichnis memory/ (tägliche Gesprächszusammenfassungen) |
| Backup und Wiederherstellung | Bewusstseinsverzeichnis exportier-/importierbar (Gerätesync von Hand) |

Drei **unwiederbringliche** Gefahrenoperationen: Zusammenführungsstil zurücksetzen, Arbeitsbuch zurücksetzen, Gedächtnis leeren – erst nachdenken, dann handeln.

Praktische Empfehlung: Macht die KI denselben Fehler wieder → sofort als Regel/ins Arbeitsbuch schreiben, statt sie jedes Mal mündlich zu korrigieren; mehr Gedächtnis ist nicht besser – Veraltetes regelmäßig ausdünnen. Autorität entsteht dadurch, dass „jeder Eintrag zählt".

## Credits im Griff behalten

QoderWork rechnet in Credits ab, geteilt mit der Qoder-Familie (international: Pro $20/Monat = 2000 Credits, Pro+ $60, Ultra $200; Ressourcenpaket $20/1500; die CN-Version hat Zugaben wie Check-in oder Schüler-/Studenten-/Lehrkräfte-Verifizierung). Die Verbrauchsunterschiede zwischen den Modellstufen sind groß (Standard/Premium/Flaggschiff steigend). Sparstrategien:

1. **Modell stufenweise einsetzen**: mit Standard durchlaufen → Kernschlussfolgerungen mit dem Flaggschiff → Formatierung mit Standard (Wechsel wirkt sofort, ohne Kontextverlust);
2. **erst durchlaufen, dann fixieren**: einen Workflow einmal komplett ausführen, um die Kosten zu kennen, erst danach die zeitgesteuerte Aufgabe einrichten;
3. **eine Aufgabe, ein Thema**: Unzusammenhängendes in neue Aufgaben – kein Wiederholen alter Kontexte;
4. **Umfang/Format in der Ausgabe vorgeben**: weniger Nachbesserungsrunden (Community-Test: die klare Vorgabe „300 Wörter" halbiert den Verbrauch gegenüber offenen Formulierungen);
5. **Skills wiederverwenden**: ein ausgereifter Skill, einmal eingerichtet, spart gegenüber jedem erneuten Beschreiben Tokens.

## Sichere Arbeitsumgebung (lokale VM-Sandbox)

Einstellungen → Erweitert → Sichere Arbeitsumgebung: ein **abgetrennter Bereich** auf Ihrem Rechner, in dem Aufgaben laufen, ohne dass Dateidaten das Gerät verlassen. Das Bereinigen der Umgebungsdateien gibt nur Festplatte frei – Gespräche und Ergebnisse bleiben. Geeignet für: sensibles Material, Skills unklarer Herkunft testen, große Dateioperationen.

Kombiniert mit drei Grundregeln:

1. nur die nötigsten [Arbeitsordner](/de/qoderwork/04-files) freigeben;
2. Drittanbieter-Skills zuerst in einem isolierten Verzeichnis testen (welche Rechte will der Skill? Genau hinsehen);
3. den Datenfreigabe-Schalter standardmäßig aus lassen (in den Einstellungen gibt es einen Privatsphäremodus „Daten nicht für Produktverbesserung verwenden"; bei Geschäftskonten kann nur die Verwaltung diese Einstellung ändern).

## Systemeinstellungen im Schnellüberblick

- **Allgemein**: Sprache, Design, Interface-Stil, Schrift und Größe, Autostart, **System wachhalten** (verhindert Aufgabenabbrüche, am besten dauerhaft an), Desktop-/Ton-Benachrichtigungen, Netzwerk-Proxy;
- **Sieben Systemrechte**: Voller Festplattenzugriff, Bildschirm- und Tonaufnahme, Bedienungshilfen, Mikrofon, Automatisierung, Benachrichtigungen, Ortung – je nach Bedarf einschalten;
- **Kurzbefehle und QuickPick**: siehe [Computersteuerung und Spracheingabe](/de/qoderwork/adv-computer-use);
- **Experimentelle Funktionen**: Generative UI, separate Fenster, Filter in der Gesprächsliste – zum Ausprobieren aktivierbar.

---

Ende des Fortgeschrittenen-Teils. Zurück zur [Szenario-Schnellreferenz](/de/qoderwork/ref-scenarios) und dort über den Szenarioindex weiter.
