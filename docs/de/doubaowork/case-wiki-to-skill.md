# Erfahrung alter Kollegen darf nicht brachliegen: aus dem Feishu-Wissensspeicher einen wiederverwendbaren Skill machen

> Szenario: Im Wissensspeicher liegt die gesammelte Betriebserfahrung ehemaliger Kollegen – niemand blättert darin, niemand nutzt sie. Wer die Erfahrungsdokumente zu wiederverwendbaren Skills macht, reduziert doppelte Arbeit und lässt den Agenten direkt in echten Aufgaben darauf zugreifen.

> Voraussetzung: Das Doubao-Login-Konto stimmt mit dem Konto überein, zu dem der zu nutzende Feishu-Wissensspeicher gehört.

## Der reibungslose Weg, den Wissensspeicher einzubinden

In Doubao Work lassen sich Feishu-Dokumente per **@ referenzieren**; auch Kontakte, Cloud-Dateien und Unterhaltungen sind per @ ladbar und werden zum Kontext. Ein Bonus aus der Praxis: Nach dem Referenzieren eines Kontakts und eines Vorbereitungsdokuments genügt ein Satz, um ein Meeting anzusetzen:

```text
Vereinbare für mich in Feishu ein Meeting, füge ihn @Kontakt hinzu
und schicke ihm das Vorbereitungsdokument @Intern: Xiaohongshu-Betriebswissen.
```

Wirklich nur eine Frage des Diktierens.

## Erfahrung-Skills in der Praxis

**Schritt 1: blind nachfragen** und bestätigen, dass Doubao Work den Ziel-Wissensspeicher lesen kann:

> Schau mal nach – kannst du den Wissensspeicher zum Xiaohongshu-Betrieb sehen?

Nach der Bestätigung – da es noch keinen strukturierten Plan gab – zuerst Vorschläge auf Basis des Wissensspeicher-Inhalts einholen:

```text
Ordnung diesen Xiaohongshu-Betriebs-Wissensspeicher zu einem «Xiaohongshu-Betriebs-
Skill»; baue das Wissen daraus in den Skill ein. Wie würdest du diesen Skill schreiben?
```

Sein Vorschlag zur Positionierung ist entscheidend: Unter den bestehenden Skills gibt es bereits `doubao-newmedia-writing` (zuständig für die **Inhalt-Erstellung** von Xiaohongshu-Grafiken und Kurzvideos). Der neue Skill soll Duplikate vermeiden und sich als **Methodik und SOP des kompletten Betriebszyklus** positionieren – ausgelöst bei «Wie betreibe ich»-Fragen wie Kontoaufbau, Positionierung, Themenfindung, Titel und Cover, Abonnentenwachstum, Monetarisierung, Zulauf, Shoperöffnung, Werbeschaltung oder Reklamationen; die Ausgabe ist eine strukturierte, aus dem Wissensspeicher gespeiste Methode.

## Verzeichnisstruktur des Skills

Nach der Klarheit über die Zuständigkeitsgrenzen zerlegt Doubao Work den Skill in eine Hauptdatei `SKILL.md` (Auslöse-Beurteilung + Routing + Arbeitsablauf) und ein `references`-Verzeichnis mit sechs Themenordnern:

```text
xiaohongshu-operation/
├── SKILL.md                        # Auslöse-Beurteilung + Routing + Arbeitsablauf
└── references/
    ├── 01-Kontoaufbau-Positionierung/   # Spartenwahl, Kontoprofil, Benchmarks und IP, Profilseite
    ├── 02-Plattformmechanik/            # Algorithmus und Reichweite, Indexierung und Suche, Drosselung und Regeln
    ├── 03-Inhalt-Erstellung/            # Themenmethodik, Titelformeln, Texte, Cover-Design, Drehen und Retuschieren, Videoschnitt
    ├── 04-Wachstum-Betrieb/             # Konto-Aufwärmprozess, Veröffentlichen und Pflege, Daten und Rückblick, Wachstumstechniken
    ├── 05-Monetarisierung-Kommerz/      # Monetarisierungsformen, Shop und Produktauswahl, Aufträge und Kooperationen, bezahlte Schaltung
    └── 06-Zulauf-Compliance/            # Zulauf-SOP, Private-Domain-Betrieb, Compliance und Qualifikationen
```

Jede Referenzdatei trägt eine Quellenangabe (aus welchem Kurs oder Dokument des Wissensspeichers), damit das Wissen zurückverfolgbar bleibt. Ist der Skill fertig, genügt eine reale Betriebsfrage zum Testen – er antwortet dann nach der im Skill abgelegten Methodik. Die Erfahrung alter Kollegen liegt fortan nicht mehr brach, sondern wird zur «Standardpraxis», die bei jeder Aufgabe aufgerufen werden kann.

---

Weiter: [Unternehmensrichtlinien ohne Durchwühlen des Wissensspeichers: eine Frage, die Antwort samt Beleg →](/de/doubaowork/case-policy-search)
