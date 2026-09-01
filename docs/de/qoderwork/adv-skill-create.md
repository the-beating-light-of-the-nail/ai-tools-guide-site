# Fortgeschritten: Skills im Gespräch erstellen (/create-skill)

Wenn Sie dieselbe Aufgabenbeschreibung zum dritten Mal schreiben, wird es Zeit für einen Skill. QoderWork senkt die Hürde dafür auf „einfach sagen" – der eingebaute Befehl `/create-skill` erzeugt die SKILL.md im Gespräch.

> Offizielle Dokumentation: [skills](https://docs.qoder.com/zh/qoderwork/skills) ｜ Praxismaterial aus der offiziellen Nutzerfall-Bibliothek.

## Ein echtes Beispiel: der Vertriebs-Wochenbericht-Skill

Der komplette Erstellungsablauf aus einem Community-Test (CSDN-Anleitung):

1. `/create-skill` in den Dialog eingeben;
2. Auslösewort und Ablauf beschreiben:

```text
Erstelle einen Skill „Vertriebs-Wochenbericht“:
Auslösewort: Erstelle den Vertriebs-Wochenbericht dieser Woche
Schritte: Lese vertrieb.xlsx im Verzeichnis sales/ → berechne das Wochenwachstum
((diese Woche - letzte Woche)/letzte Woche × 100 %) → erzeuge ein Balkendiagramm der Top-5-Produkte →
erzeuge nach fester Vorlage den Word-Wochenbericht und speichere ihn im Verzeichnis reports/.
Abhängigkeiten: Excel-Verarbeitung, Diagrammerstellung mit Python-Matplotlib.
```

3. QoderWork erzeugt die SKILL.md und legt sie unter `~/.qoderwork/skills/` ab;
4. künftig in jeder neuen Aufgabe `/` eingeben und „Vertriebs-Wochenbericht" wählen – oder direkt sagen „Erstelle den Vertriebs-Wochenbericht dieser Woche" als Auslöser.

Ein noch weiter gehendes Beispiel der Verwertung (offizieller Nutzerfall, Anwältin):

```text
Bitte packe den eben durchlaufenen Fallanalyse-Ablauf als Skill mit dem Namen „Fallanalyse Handelsstreitigkeiten“:
Eingabe: Ordner mit Fallakten (Klage, Verträge, Nachtragsvereinbarungen, WeChat-Screenshots, Überweisungsbelege, Anwaltsschreiben);
Ausgabe: Zeitachse des Falls + Streitpunkte + Beweiskettenanalyse (mit Einstufung stark/mittel/schwach) + Prozessstrategie-Bericht;
Analyserahmen fest, Inhalt dynamisch aus den Unterlagen jedes Falls.
```

So werden 20 Jahre Berufserfahrung zu einem standardisierten, teamweit nutzbaren Werkzeug: Nachwuchs erzeugt mit einem Klick, die Partnerin prüft.

## Qualitätsmerkmale der SKILL.md

Was `/create-skill` liefert, ist ein Entwurf – vor dem Speichern diese Liste durchgehen:

- [ ] **Auslösebedingungen konkret**: „Wenn der Nutzer einen Wochenbericht/eine Datenzusammenfassung anfordert", nicht „Daten verarbeiten";
- [ ] Auslösewort so wählen, dass es nicht mit anderen Skills kollidiert (Kollisionen verhindern die Auslösung);
- [ ] Schritte überprüfbar formulieren: „Schritt 1: prüfen, ob die Dateianzahl 7 beträgt; falls nicht, zuerst nachfragen";
- [ ] der Ausgabe ein Beispiel beilegen: einen Abschnitt zeigen, wie das Ergebnis aussehen soll;
- [ ] Grenzen deklarieren: klar sagen, was nicht getan wird („Original-CSV nicht ändern", „keine Rechtsauffassung geben");
- [ ] Abhängigkeiten aufführen (Excel/Python/Netz nennen, wenn benötigt).

## Bezugs- und Sharing-Ökosystem

| Kanal | Beschreibung |
| --- | --- |
| Suche im Gespräch | „Finde mir einen Skill für XX" → find-skills empfiehlt, Installation mit einem Klick |
| Skill-Plaza | Erweiterungen → Skills, den Markt durchstöbern |
| Open-Source-Community | GitHub-Repository-Link senden, automatisch geladen, z. B. [lexburner/skill-collection](https://github.com/lexburner/skill-collection) (qoder-ppt, Infografiken usw.) |
| Manuell hochladen | „Skill installieren" und SKILL.md hochladen (im Wurzelverzeichnis des zip muss SKILL.md liegen) |
| Teilen | Teilen-Symbol auf der Skill-Seite → Link (**24 Stunden gültig**) → Gegenseite installiert mit einem Klick |

## Vom Skill zum Team-Standard

Der offiziell empfohlene Weg: **Best Practice zuerst mit einem Skill zum Laufen bringen → zum [Experten-Kit](/de/qoderwork/05-skills) paketieren → teamweit einheitlich nutzen**. Ob sich eine Arbeit für einen Skill lohnt, entscheidet ein Satz: „Wählen Sie eine Arbeit, die Sie in der letzten Woche mehr als zweimal wiederholt haben."

> Werkzeugübergreifend betrachtet: Die SKILL.md-Spezifikation ist bei WorkBuddy / TraeWork / QoderWork weitgehend identisch – einmal gelernt, überall nutzbar. Die tiefere Methodik (Bücher und Videos zu Skill-Sets destillieren) im WorkBuddy-Kapitel [Skills bauen: Wissensdestillation](/de/workbuddy/adv-build-skill/).
