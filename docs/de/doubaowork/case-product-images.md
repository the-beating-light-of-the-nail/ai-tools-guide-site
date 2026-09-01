# Vom einzelnen Produktfoto zum kompletten Galeriebild-Set

> Szenario: Galeriebild-Gestaltung im E-Commerce. Vorliegen nur ein spontan aufgenommenes Produktfoto, gewünscht ein komplettes setzfertiges Galeriebild-Set – das ist kein einfacher Bildprompt, sondern ein «E-Commerce-Visuell-Produktionsworkflow».

## Was dieser Skill für Sie tut

Der Skill [moyuxl-ecom-image-prompt](https://github.com/AlephAITech/moyuxl-ecom-image-prompt) übernimmt: **Referenzen zerlegen, Fakten sperren, Bildsprache festlegen, produktionsreife Prompts schreiben, Ergebnisse gegenprüfen**. Zwei Arbeitsmodi:

| Modus | Geeignet für | Was er tut |
| --- | --- | --- |
| Referenzbild-Rückführung (Schwerpunkt) | Produktbild + einige beliebte Referenzbilder | Komposition/Informationsstruktur/Stil der Referenzbilder zerlegen und auf das eigene Produkt übertragen |
| Planung von null | kein Referenzbild, nur das Produkt | Bildrichtung aus Produktidentität und Kaufentscheidungspfad ableiten, 2–4 wählbare Richtungen |

Je nach vorliegendem Material unterscheidet sich das Ergebnis: nur Produktbild ohne Richtung → Verkaufsargumente recherchieren, Galerie- oder Detailseiten von null planen; Produktbild + Referenzbild → Referenzen zerlegen, Ansätze übertragen, komplette neue Bildserien erzeugen; fertige Textargumente vorhanden → direkt in kopierfertige produktionsreife Bildprompts übersetzen.

In Umgebungen mit Agent-Skills genügt ein Befehl zur Installation (alternativ den Skill-Ordner herunterladen und direkt in Doubao Work importieren):

```text
npx skills add https://github.com/AlephAITech/moyuxl-ecom-image-prompt --skill moyuxl-ecom-image-prompt
```

## Praxis: 1 handgehaltenes Produktfoto → 7 Galeriebilder

Ausgangspunkt ist ein **völlig ungestaltetes** Spontanfoto: Produkt in der Hand, Hintergrund Grünzeug.

### Was von jedem Referenzbild «geliehen» wird

Es geht nicht um das Kopieren eines einzelnen Bildes, sondern darum, **je einen Wirkmechanismus zu entnehmen** und mit dem eigenen Produkt und dem eigenen Bildsystem neu zusammenzusetzen:

| Referenzbild | Geliehener Mechanismus | Bewusst nicht übernommen |
| --- | --- | --- |
| Studio-Symmetrie | zentriertes Produkt, seitlich symmetrische, stabile Cover-Komposition | dessen Produkt, Farbpalette und Texte |
| Rohstoff-Immersionsstil | Verfahren, das Produkt «einzutauchen» | dessen Flaschenform und exklusive Motive |
| Infografik-Stil | Informationsgerüst aus Spalten, Karten und Prozesslinien | dessen Rohdaten und Formulierungen |
| Luftaufnahme-Anbaugebiet | Atmosphäre des Anbaugebiets und räumliche Erzählung | dessen konkrete Flächen-/Ertragszahlen |

## Erst auffächern, dann verdichten

Nicht vorschnell finalisieren – rund um dasselbe Produkt je **Komposition/Szene/Information/Farbwelt** eine Richtungsgruppe testen und dann auswählen:

- **Charge 1 · Studio-Ansatz, 4 Richtungen**: getreue Übertragung, Kompositions-Upgrade, Szenenerzählung, Informationsdesign (die getreue Übertragung erreicht die höchste Produkttreue und Kompositionsstabilität);
- **Charge 2 · Rohstoff-Immersion, 3 Varianten**: das Produkt von Red-Fuji-Äpfeln umgeben – die schräg gesteckte Variante liegt dem Referenzmuster am nächsten, die Nahaufnahme im Stand gibt dem Produkt den größten Anteil, die liegende Variante wirkt am dynamischsten;
- **Charge 3 · Infografik-Stil, 3 Varianten**: echter Obstgarten-Hintergrund mit Vier-Quadranten-Information und handgezeichneten Pfeilen – die Vier-Quadranten-Version ordnet die Informationen am klarsten, die Rahmen-Version hebt das Produkt am stärksten hervor, die Version mit Fluchtperspektive erzielt die größte Tiefe;
- **Charge 4 · Luftaufnahme-Anbaugebiet, 3 Varianten**: Daten wie Anbaufläche und Kühlhaus-Kapazität des Wettbewerbers sind nicht übertragbar; einheitlich ersetzt durch bestätigte echte Angaben des eigenen Produkts («aus Yantai, Red Fuji der Saison, 100 % frisch gepresster Apfelsaft») – **keine erfundenen Größenordnungen**;
- **Charge 5 · eigener Stil, 5 Richtungen**: Exploration ohne Referenzbilder, deckt das komplette Stilspektrum von minimalistisch bis dynamisch, kühl bis warm, alltäglich bis hochwertig – Grundlage, um den Ton des finalen Sets rückwärts festzulegen.

## Methodische Kernpunkte

1. **Referenzbilder sind ein Mechanismus-Fundus, kein Kopierobjekt** – jedem Bild wird nur je ein Kompositions-/Informations-/Stimmungsmechanismus entnommen; Produkt und Daten bleiben immer Ihre eigenen;
2. **Fakten zuerst sperren** – Herkunft, Inhaltsstoffe, Verkaufsargumente, alles, was aufs Bild darf, vorher als echt bestätigen; Wettbewerberzahlen sind nicht übertragbar;
3. **Varianten in Serie als A/B-Test** – je Mechanismus 3–4 Varianten vergleichen (Produktanteil, Dynamik, Informationsdichte), dann für das finale Set auswählen;
4. **Stilspektrum rückwärts nutzen** – mit dem Stilspektrum der eigenen Richtungen den einheitlichen Bild-Ton des ganzen Sets festlegen.

---

Weiter geht es mit den Finanzszenarien: [Nach Börsenschluss: Marktveränderungen in die Research-Liste überführen →](/de/doubaowork/case-market-review)
