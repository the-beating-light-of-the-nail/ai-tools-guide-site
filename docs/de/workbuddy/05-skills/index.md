# Kapitel 5: Einen wirklich nützlichen Skill in WorkBuddy laden

## Was ist ein Skill?

WorkBuddy selbst versteht Aufgaben und organisiert die Ausführung; ein Skill ist dagegen eine wiederverwendbare Sammlung von Anweisungen, Skripten, Referenzmaterial und Ressourcen, die dem Agenten sagt, wie eine bestimmte Art von Aufgabe auszuführen ist, welche Werkzeuge er aufruft und in welchem Format geliefert wird.

Ein ganz standardmäßiger Skill sieht ungefähr so aus:

```text
my-skill/
├── SKILL.md
├── scripts/
│   └── check.py
├── references/
│   └── guide.md
└── assets/
    └── template.pptx
```

Erforderlich ist nur die `SKILL.md`, deren erste beide Zeilen Name und Zweck klar benennen:

```markdown
---
name: tech-article-writing
description: Dient zum Schreiben von Artikeln über KI-Produkte, Modell-Benchmarks und die Tech-Branche
---

Nach Erhalt einer Schreibaufgabe:

1. Zuerst den Kernwinkel des Artikels festlegen
2. Primärquellen recherchieren
3. Kernfakten kreuzweise verifizieren
4. Den Entwurf im Schreibstil des Nutzers fertigstellen
5. Verbotene Formulierungen und KI-typische Ausdrücke prüfen
```

## Wie ein Skill funktioniert

Das entscheidende Design eines Skills ist nicht die SKILL.md, sondern die **Progressive Disclosure** (schrittweise Enthüllung). Angenommen, Ihr Agent hat 100 Skills installiert – er stopft nicht sofort alles in den Kontext, sondern lädt bedarfsgesteuert in drei Stufen:

1. **Beim Start**: Es werden nur Name und description aller Skills gelesen (einige Dutzend bis Hundert Tokens);
2. **Bei passender Aufgabe**: Sie sagen „Schreib mir einen Artikel über WorkBuddy für die WeChat Official Account" – der Agent erkennt anhand der description, dass `tech-article-writing` relevant ist, und erst jetzt lädt er die vollständige SKILL.md;
3. **Während der Ausführung**: Erst wenn der Schreibstil imitiert werden soll, wird `references/style.md` gelesen; erst wenn der KI-Flavour geprüft werden soll, wird `scripts/check-ai-phrases.py` ausgeführt.

Ein Skill löst damit ein Problem, das Agenten lange geplagt hat: **Wie gibt man einem Agenten viel Wissen und Arbeitsmethoden, ohne alles dauerhaft im Prompt unterzubringen.**

## Worin sich Skill und Prompt unterscheiden

| Dimension | Prompt | Skill |
| --- | --- | --- |
| Kernfunktion | Beschreibt die aktuelle Aufgabe | Definiert, wie eine ganze Aufgabenklasse zu erledigen ist |
| Lebenszyklus | Meist für eine einzelne Anfrage | Langfristige Wiederverwendung |
| Auslösung | Nutzer gibt aktiv ein | Agent wählt automatisch oder Nutzer ruft explizit auf |
| Form | Primär Text | Ein Ordner |
| Inhalt | Anweisungen, Kontext, Beispiele | Anweisungen, Skripte, Materialien, Vorlagen, Ressourcen |
| Kontextverbrauch | Landet meist direkt im Kontext | Wird bei Bedarf geladen |
| Wiederverwendung | Oft per Copy & Paste | Von Haus aus wiederverwendbar und teilbar |

Am einfachsten lässt es sich so fassen: **Prompt = Aufgabe, Skill = Vorgehen.** Was Sie im Dialog ständig wiederholen – „nicht so KI-typisch schreiben, Satzlängen mischen, keine Beispiele erfinden" – eignet sich naturgemäß für einen `writing-style`-Skill. Danach genügt im Prompt der eine Satz „Schreib einen Artikel über WorkBuddy", und die Schreibgewohnheiten liefert der Skill.

Ein Skill bietet zwei weitere Werte, die ein Prompt nicht liefern kann: Erstens **fixiert er komplexe Workflows** (der siebenschrittige Prozess einer Branchenrecherche wird fest verankert, statt dass das Modell ihn jedes Mal neu erdenkt). Zweitens **macht er persönliche Erfahrung zu einem Vermögenswert** – ein Skill ist eine Datei, per Git verwaltbar, mit Versionshistorie und im Team teilbar.

## In WorkBuddy einen passenden Skill finden

Öffnen Sie links „Experten · Skills · Konnektoren". Sie können im Skill-Markt suchen oder Ihren Bedarf über „Skill suchen" beschreiben.

![](/workbuddy/05-skills/assets/001_image_TdcLblfvIo.png)

Alternativ finden Sie passende Skills im SkillHub-Markt:

![](/workbuddy/05-skills/assets/002_image_V3E5bsVZGo.png)

Neben der direkten Installation aus den Empfehlungen können Sie auch **selbst heruntergeladene Skills importieren**: Wenn Sie im Netz ein nützliches Skill-Paket finden, erhalten Sie eine ZIP-Datei – klicken Sie auf „Skill hochladen" und laden Sie die ZIP-Datei.

![](/workbuddy/05-skills/assets/003_image_Oag3bNQHOo.png)

![](/workbuddy/05-skills/assets/004_image_GgOebNBh3o.png)

## Eine Aufgabe mit einem Skill lösen

Angenommen, die KI hat für Sie einen Artikel geschrieben, der noch etwas „KI-Flavour" hat. Suchen Sie den Skill „Artikel-EntKI-er" – nach der Installation rufen Sie ihn per `/` direkt auf.

![](/workbuddy/05-skills/assets/005_20260708200848_NN3hbPsKAo.gif)

Sie müssen nur den Skill-Inhalt referenzieren und den Artikel übergeben:

![](/workbuddy/05-skills/assets/006_image_Xom2btXVZo.png)

WorkBuddy lädt zuerst den Inhalt des Skills:

![](/workbuddy/05-skills/assets/007_image_AmOVb1oGEo.png)

Anschließend arbeitet es nach den Regeln des Skills – etwa um Konstruktionen wie „nicht …, sondern …" oder doppelte Anführungszeichen zu entfernen:

![](/workbuddy/05-skills/assets/008_image_FbpQbmSswo.png)

Nach den Änderungen erhalten Sie das Ergebnis – der KI-Flavour ist tatsächlich verschwunden.

![](/workbuddy/05-skills/assets/009_image_RhBKbRhgIo.png)

## Skill deaktivieren und entfernen

Klicken Sie in allen Skills auf „Von mir installiert":

![](/workbuddy/05-skills/assets/010_image_NGsdbBcjso.png)

Mit der Schaltfläche deaktivieren (der Skill wird dann abgeschaltet):

![](/workbuddy/05-skills/assets/011_image_DABBb41fGo.png)

Klicken Sie auf „···", um den Skill zu löschen oder zu bearbeiten:

![](/workbuddy/05-skills/assets/012_image_Uya3bNC9io.png)

---

> Möchten Sie ein Buch oder einen Kurs in einen eigenen Skill destillieren? Siehe im Fortgeschrittenen-Teil [Skills bauen: Wissen in ausführbare Fähigkeiten destillieren](/de/workbuddy/adv-build-skill/).
