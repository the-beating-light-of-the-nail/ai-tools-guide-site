# Skills: welchen wählen, wie einsetzen

Doubao Work selbst versteht Aufgaben und organisiert die Ausführung; ein **Skill ist ein wiederverwendbares Bündel aus Anweisungen, Skripten, Referenzmaterial und Ressourcen**, das dem Agenten sagt, wie eine bestimmte Aufgabenklasse abzulaufen hat, welche Tools er aufruft und in welchem Format er liefert. (Anthropic stellte Agent Skills im Oktober 2025 vor und veröffentlichte sie im Dezember als offenen Standard.)

## Wie ein Standard-Skill aussieht

```text
my-skill/
├── SKILL.md          # die einzige Pflichtdatei
├── scripts/
│   └── check.py
├── references/
│   └── guide.md
└── assets/
    └── template.pptx
```

Nur `SKILL.md` ist erforderlich – im Kern eine Anleitung „wie diese Art Aufgabe abläuft":

```markdown
---
name: tech-article-writing
description: für Artikel über KI-Produkte, Modell-Benchmarks und die Tech-Branche
---

Bei einer Schreibaufgabe:

1. Zuerst den Kernwinkel des Artikels festlegen
2. Primärquellen recherchieren
3. Kernfakten kreuzweise verifizieren
4. Den Entwurf im Schreibstil des Nutzers fertigstellen
5. Verbotene Formulierungen und KI-typische Ausdrücke prüfen
```

## Wie ein Skill funktioniert: Progressive Disclosure

Das entscheidende Design ist nicht SKILL.md selbst, sondern die **Progressive Disclosure (progressive Offenlegung)**. Angenommen, ein Agent hat 100 Skills installiert – er stopft nicht alle 100 vollständigen Inhalte in den Kontext; das verschwendete Token und würde das Modell mit irrelevanten Anweisungen stören. Der Standardablauf hat drei Stufen:

1. **Beim Start** werden nur Name und description aller Skills geladen (nur wenige Dutzend bis wenige hundert Token je Skill);
2. **Bei Aufgaben-Treffer** wird erst das vollständige `SKILL.md` geladen – sagen Sie z. B. „Schreib mir einen Artikel über Doubao Work für das WeChat Official Account", erkennt der Agent an der description, dass `tech-article-writing` passt, und erst dann liest er den vollständigen Text;
3. **Während der Ausführung** werden feinere Materialien erst bei Bedarf gelesen: `references/style.md`, `scripts/check-ai-phrases.py`.

OpenAI Codex verwendet einen ähnlichen Mechanismus. So löst das Skill-Problem ein Dilemma, das Agenten lange plagte: **wie man dem Agenten viel Wissen und Arbeitsmethoden gibt, ohne alles dauerhaft in den Prompt zu stopfen.**

## Vier Zwecke von Skills

**1 · Prozedurales Wissen ergänzen.** Große Modelle wissen viel Allgemeines, aber nicht unbedingt etwas über Ihr Unternehmen: In welcher Tabelle `canonical user_id` liegt, dass `subscriptions` append-only ist, dass bei Rückerstattungen ein bestimmter Status ausgeschlossen werden muss, welche dashboard-ID zu Grafana gehört. Anthropic nutzt intern mehrere hundert Skills vor allem in neun Klassen: API- und interne Bibliotheksnutzung, Produktverifikation, Datenanalyse, Automatisierung von Geschäftsprozessen, Code-Gerüste, Code-Review, CI/CD, Störungs-Runbooks und Betrieb.

**2 · Komplexe Workflows festzurren.** Ein normaler Prompt wie „Recherchiere Doubao Work gründlich" zwingt das Modell jedes Mal zum Neu-Denken: Wo suchen, was zuerst, wie verifizieren, mit wem vergleichen, welche Struktur liefern. Ein Skill zurren den Ablauf fest: offizielle Website → offizielles WeChat Official Account und Events → Produktdokumentation → eigener Produkttest → Vergleich mit Wettbewerbern → Kernaussagen destillieren → Faktenprüfung. Solche Skills heißen **Encoded Preference Skills** (vorhandene Fähigkeiten nach Ihrer Arbeitsweise organisieren); die andere Klasse, **Capability Uplift Skills**, ergänzt Fähigkeiten, die das Modell von sich aus nicht sicher beherrscht, etwa komplexe Dokument-, PDF- und PPT-Verarbeitung.

**3 · Wiederholte Prompt-Teile einsparen.** Was Sie immer wieder ermahnst – „nicht so KI-lastig schreiben, lange und kurze Sätze mischen, nicht übertreiben mit Aufzählungen, bei Technik Inhalten zurückhaltend sein, keine Beispiele erfinden" – gehört in einen `writing-style`-Skill. Danach genügt im Prompt der Satz „Schreib einen Artikel über Doubao Work"; Schreibgewohnheiten, Quellenstandards und verbotene Ausdrücke liefert der Skill.

**4 · Erfahrung vermögenswirksam machen.** Klassische Prompts verstreuen in Chatverläufen, Dokumenten und Köpfen; ein Skill ist eine Datei – versionierbar mit Git, rückrollbar, im Team teilbar, A/B-testbar, automatisch evaluierbar, laufend aktualisierbar.

## Skills in Doubao Work finden

Öffnen Sie links „Skills · Konnektoren · Partner": Sie können nach Kategorien wie **Finanzen, Recht,New-Media-Erstellung, Büro-Zusammenarbeit, Programmierung, Wissenschaft** stöbern oder oben im Suchfeld nach Name oder Bedarf suchen. Gefunden? Rechts auf „+" klicken; manche Skills unterstützen „im Chat ausprobieren". Hinzugefügte Skills werden zentral unter „Meine Skills" verwaltet.

Sie können auch **eigene Skills erstellen oder hochladen**: oben rechts auf „Neu" klicken und „Skill per Doubao-Dialog erstellen" oder „Skill hochladen" wählen. Prüfen Sie vor dem Hochladen Herkunft, Skripte und Berechtigungsumfang des Skill-Pakets.

## Eine Aufgabe mit einem Skill lösen

Beispiel: Ein Artikel soll weniger KI-Spuren tragen – im Skill-Markt nach einem Skill „KI-Anteil reduzieren" suchen, hinzufügen, zur Arbeitsaufgabe zurückkehren, im Eingabefeld `/` eingeben oder auf „Weitere Skills" klicken und ihn auswählen; Artikel und konkrete Anforderungen beilegen. Doubao Work entscheidet anhand der Skill-Anweisung über die Schritte und zeigt Prozess und Ergebnis.

Prüfen Sie danach vor allem, ob die Skill-Anforderungen wirklich umgesetzt sind: Wurden die genannten Formulierungen entfernt, sind Fakten und Ton bewahrt, wurden Eigennamen nicht versehentlich verändert?

---

Nächster Schritt: auch unterwegs erreichbar – [PC per Handy fernsteuern →](/de/doubaowork/07-mobile-remote)
