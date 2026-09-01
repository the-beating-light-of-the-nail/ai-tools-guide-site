# GEO-Check-up für die persönliche Marke

> Szenario: Ob eine Marke gesehen wird, maß man früher über Namenssuche und Followerzahl; heute kommt ein neuer Zugang hinzu — **immer mehr Menschen fragen einfach die AI**. Kann die AI Ihren chinesischen Namen dem englischen Account zuordnen? Schreibt sie jemandes gleichnamiges Projekt Ihnen zu? Zitiert sie Ihre eigene Seite oder einen mehrfach weitergerechten Aggregationsartikel?

Mit einer beiläufigen Frage «Kennst du XY?» sind diese Fragen nicht zu messen — Frage, Zeitpunkt und Beurteilungsmaßstab sind alles andere als fix. Mit einem festen Ablauf wurde ein vollständiger Check durchgeführt: **zuerst eine Faktentlandkarte öffentlicher Fakten und 5 feste Fragen vorbereiten → je Frage öffentlich suchen, Quellen prüfen, bewerten → Monitoring-Tabelle und Korrekturvorschläge erzeugen**. Ergebnis dieses Durchlaufs: 29/30 — keine Frage blieb völlig unerkannt oder klar falsch, aber es zeigten sich 1 Identitätsverwechslungs-Risiko und 1 Quellenqualitätsproblem.

## Zuerst die Grenzen klären: das hier ist Suchinformation

Der Ablauf macht nur drei Dinge: von der Person bestätigte öffentliche Fakten lesen, öffentliche Webseiten prüfen, einen lokalen Bericht erzeugen. Er ändert nicht automatisch Ihre Profile, veröffentlicht keine Erklärungen für Sie und garantiert nicht, dass nach einer geänderten Bio jede AI sofort umschwenkt — Suchergebnisse ändern sich, Modellversionen auch. Das Ergebnis steht also nur für «eine Messung an einem Tag, mit einem Assistenten, auf Simplified-Chinesisch-Bezug». Außerdem: **Followerzahlen, Star-Zahlen, Rankingplätze und andere veränderliche Zahlen taugen als Tagesmomentaufnahme, nicht als unveränderliche Identitätsfakten**.

Werkzeug ist die kleinste Kombination: der Skill «VOC- und Reputationsrecherche» (öffentliche Mehrfachsuche, Informationsgliederung, Quellenrückverfolgung) + eingebaute öffentliche Suche. Kein zusätzlicher Such-Connector nötig, und ein Vergleich mehrerer AI-Assistenten erübrigt sich (zu viele Variablen).

## Zwei Eingabematerialien vorbereiten

**Faktentlandkarte öffentlicher Fakten** — nur stabile Fakten, die Sie bestätigen können und öffentlich geben wollen: öffentlicher Name und gebräuchlicher englischer Account; nach außen getragene Identität und Langzeit-Themen; öffentliche eigene Seiten; überprüfbare Leitprojekte; und **ausdrücklich nicht in die Basis aufgenommen**: echter Name, Kontaktdaten, laufende Followerzahlen, unbestätigte Titel.

**Feste Monitoring-Fragen** (hier 5, die prüfen: Wird die Entität erkannt, die Account-Zugehörigkeit richtig erfasst, repräsentativer Inhalt gefunden, chinesischer und englischer Name verbunden, und ob ein gleichnamiges Projekt verführt):

1. Wer ist XY? Welche Inhalte teilt die Person öffentlich hauptsächlich?
2. Welche öffentlich XY zurechenbaren Accounts und Leitprojekte gibt es?
3. Wenn ich [Ihr Thema] lernen will — welche öffentlichen Materialien von XY sind nutzbar?
4. Sind «chinesischer Name» und «englischer Account» dieselbe Person? Bitte überprüfbare öffentliche Quellen angeben.
5. Hat XY öffentlich zu [Teilthema] etwas geteilt? Falls ja, welches Projekt?

## Der Prompt aus der Praxis

Bezug, Bewertung, Quellenpriorität und Sicherheitsgrenzen in einem Zug festlegen:

```text
Ich pflege die öffentlichen Informationen der persönlichen Marke "[Ihr öffentlicher Name /
englischer Account]". Bitte nutze die Funktion "VOC- und Reputationsrecherche" und führe
einen reproduzierbaren Check der AI-Antwort-Sichtbarkeit durch.

Eingabematerialien:
1. Faktentlandkarte: [Pfad zu ip-baseline.md]
2. Feste Monitoring-Fragen: [Pfad zu audit-questions.md]

Prüfbezug:
- Assistent: Doubao Work, aktueller Chat
- Datum: [Messdatum eintragen]
- Sprache: Chinesisch (vereinfacht)
- Nur öffentliche Webseiten prüfen; keine privaten Account-Daten lesen; keine Kontaktdaten,
  Adresse, Einkommen oder andere private Informationen suchen oder erschließen.

Bitte nach folgenden Schritten:
1. Zuerst beide Eingabedateien lesen und Vollständigkeit von Basisfakten und Fragen
   bestätigen.
2. Zu jeder Frage unabhängig öffentlich suchen und so antworten, als begegnetest du dem
   Namen zum ersten Mal — nicht bloß die Basiskarte abschreiben.
3. Pro Frage festhalten: Originalfrage, Antwortzusammenfassung, ob der öffentliche Name
   korrekt erkannt wurde, ob der englische Account zugeordnet wurde, Sachfehler oder
   Fehlendes, zitierte URLs, Quellentyp, Zugriff und Suchzeitpunkt.
4. Ergebnisse je Frage in vier Klassen teilen: nicht erschienen, falsch beschrieben,
   Identität verwechselt, Quellenqualität schlecht; auch "nicht gefunden" ausdrücklich
   festhalten.
5. Quellenpriorität: "eigene öffentliche Seite oder eigenes Projekt > ausdrücklich
   gezeichnete öffentliche Berichte > Aggregations- oder Kopierseiten". Drittpartieseiten
   können die Account-Zugehörigkeit nicht allein belegen.
6. Jede Frage nach drei Kriterien je 0—2 Punkte bewerten: Entität erschienen? Identität
   korrekt? Quelle verlässlich? Zusätzlich die Begründung in Text behalten, nicht nur die
   Punktzahl.
7. Zusammenfassen, welche öffentlichen Informationen stabil gesehen werden und welche
   eine konsistente, zitierfähige öffentliche Seite vermissen lassen. Korrekturvorschläge
   müssen auf konkrete Seiten und Felder zielen — etwa wie Profil-Bio, Projekt-README und
   Autorenseite vereinheitlicht werden; nicht versprechen, dass Änderungen die
   Modellantwort oder das Ranking sicher beeinflussen.
8. Eine Selbstprüfung: Lässt sich jede Schlussfolgerung auf eine URL zurückführen? Wurde
   eine einzelne Messung auf alle AI-Assistenten verallgemeinert? Wurde Drittpartei-
   Information als von der Person bestätigtes Faktum ausgegeben?

Bitte liefere zum Schluss zwei Dateien:
- persoenliche-marke-ai-sichtbarkeit.md: Bezug, Ergebnisse je Frage, Bewertung, Quellen,
  Grenzen.
- korrekturvorschlaege-oeffentliche-materialien.md: nach P0 / P1 / P2 sortiert, mit
  vorzuschlagender öffentlicher Seite, aktuellem Problem, vorgeschlagener Aktion und
  Methode der Nachmessung.

Im Chat nur zusammenfassen: Gesamtpunktzahl, Häufigkeit der vier Problemklassen und die
3 zuerst zu korrigierenden öffentlichen Informationen.

Sicherheitsgrenzen: Nur-Lese-Prüfung und lokale Dateierzeugung; keine öffentlichen Seiten
oder Projekte ändern, nichts veröffentlichen, keine Nachrichten senden, und nicht
versprechen, Modellantworten steuern zu können.
```

Bei der Ausführung auf drei Dinge achten: Ob es **öffentliche Seiten tatsächlich geöffnet** hat statt nur aus dem Modellgedächtnis zu antworten; ob die Account-Zugehörigkeit durch **eine eigene Seite oder ein eigenes Projekt** belegt ist; ob Drittpartie-Kopien nicht versehentlich als «von der Person bestätigt» ausgegeben wurden. «Eine Drittpartieseite sagt, dieser Account gehört XY» reicht nicht als Beleg — die stabilere Kette ist: das eigene GitHub-Projekt verlinkt auf X, das X-Profil verlinkt zurück auf GitHub; zwei öffentliche Seiten bestätigen einander.

## Messergebnis: 29/30 — keine Höchstpunktzahl ist nützlicher

| Frage | Entität erschienen | Identität korrekt | Quelle verlässlich | Summe |
| --- | --- | --- | --- | --- |
| Q1 Wer und was geteilt | 2 | 2 | 2 | 6/6 |
| Q2 Öffentliche Accounts und Leitprojekte | 2 | 2 | 1 | 5/6 |
| Q3 Lernmaterialien | 2 | 2 | 2 | 6/6 |
| Q4 Chinesisch/Englisch dieselbe Person | 2 | 2 | 2 | 6/6 |
| Q5 Projekt zum Teilthema | 2 | 2 | 2 | 6/6 |
| **Gesamt** | **10/10** | **10/10** | **9/10** | **29/30** |

Verteilung der vier Klassen: nicht erschienen 0, falsch beschrieben 0, Identität verwechselt 1, Quellenqualität schlecht 1. Wirklich bearbeitenswert sind 3 P0-Korrekturpunkte:

1. **GitHub-Profil-Bio leer** — der Account wird gefunden, aber ohne chinesischen Namen und Identität auf der Profilseite; die AI muss über das Repository-README den Zusammenhang bauen;
2. **X-Account ohne unabhängig prüfbaren GitHub-Rücklink** — nur die einseitige Erklärung GitHub→X, kein Rückverweis verifiziert;
3. **Fast gleichnamiges Projekt vorhanden** — der Repository-Name eines anderen Autors unterscheidet sich um einen Buchstaben; die AI könnte das falsche Repository zitieren.

Die Monitoring-Tabelle erkannte den X-Account, den GitHub-Account und die Leit-Open-Source-Projekte; die persönliche Positionierung war fast ohne Abweichung; und die Korrekturvorschläge benannten genau die offenen Stellen — nach dem Lesen wurden sie sofort nachgezogen.

> Die Punktzahl ist nicht der Punkt. Wirklich wertvoll ist: **jeder Punktabzug führt auf eine öffentliche Seite zurück, jeder Vorschlag landet auf einem konkreten Feld, und in ein, zwei Wochen lässt sich mit denselben Fragen nachmessen.**

## Wenn Sie Ihre eigene Marke durchmessen, gehen Sie diese Liste durch

1. zuerst die Faktentlandkarte schreiben — Privates und veränderliche Zahlen draußenlassen;
2. Assistent, Datum, Sprache und 5—10 Fragen fixieren;
3. jede Frage unabhängig suchen lassen, nicht die Basis abschreiben lassen;
4. Entität erschienen, Identität korrekt, Quelle verlässlich getrennt bewerten;
5. eigene Seite oder Projekt zuerst; Drittpartie-Kopien nur als Hilfsbeleg;
6. «nicht erschienen, falsch gesagt, verwechselt, Quelle zu schwach» trennen;
7. Vorschläge auf Seite, Feld und Nachmessmethode festlegen;
8. Profile nicht automatisch ändern, nicht automatisch veröffentlichen, Modellantworten nicht verschieben wollen;
9. Ergebnisse aufheben — nur eine Nachmessung mit demselben Bezug zeigt Veränderung.

Früher schaute man bei persönlicher Marke nur auf Bekanntheit; heute kommt eine Frage dazu: **Wenn andere die AI bitten, mich vorzustellen — ist das, was dann kommt, korrekt genug?** Wer die Fragen fixiert, die Belegketten ergänzt und die instabilen Zahlen herauslöst, macht aus einem vagen «schauen wir mal» einen wiederholbaren Check-up der öffentlichen Materialien.

---

Weiter: [Viralen WeChat-Artikel in ein Kurzvideo verwandeln →](/de/doubaowork/case-viral-to-video)
