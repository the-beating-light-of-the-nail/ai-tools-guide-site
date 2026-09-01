# Fallbeispiel: Mit TraeWork eine präsentationsreife PPT erstellen

> Adaptiert aus dem ausführlichen Praxistest des TRAE-Kernnutzers Onkel K: [„Mit TRAE Work eine PPT erstellen – das Wichtigste ist nicht das ,Generieren'"](https://zhuanlan.zhihu.com/p/2056077700767428956) (2026-07). Seine Aufgabe: die Leseeindrücke zweier OpenAI-Engineering-Artikel zu einer 11-seitigen PPT für einen Community-Vortrag verarbeiten.

## Warum „mach mir mal eine PPT" immer schiefgeht

Mit einem Satz wie „Erstelle aus diesem Artikel eine Vortrags-PPT" kommt heraus, was **nach einem Web-Screenshot, nach einem Backend, nach einem Design-Demo aussieht – nur nicht nach einer PPT, mit der man auf die Bühne treten kann**. Der Grund ist nicht ein schwaches Modell, sondern dass Sie nicht gesagt haben, was „gut" bedeutet.

Die zwei häufigsten Fallen:

- **Visuelle Anweisungen führen in die Irre**: „Hochwertig / Tech-Feeling" zieht die KI zu Blau-Lila-Verläufen, Glas-Karten, isometrischen Komponenten und Dashboard-Layouts. Wirksam ist die **Umkehrdefinition** – „keine isometrischen Karten, keine Knopf-artigen Labels, keine Dashboard-Seiten"; als Zielstil „Papiernotizen, Anmerkungen, live erklärend".
- **Titel klingen nicht nach Mensch**: ❌ „Kognitive Progression / Musterwandel" → ✅ „Neue KI-Begriffe kommen nicht aus dem Nichts / der Schmerzpunkt verschiebt sich nach hinten". Prüfregel: Liest man einen Titel isoliert – was Sie auf der Bühne nicht sagen würden, gehört nicht an den Seitenanfang.

## Die Fünf-Schritt-Kette: erst „gut" definieren, dann die KI arbeiten lassen

Onkel Ks kompletter Ablauf umfasst fünf Schritte, jeder erzeugt ein „Ankerdokument", und **nach jedem Schritt kann man anhalten und nachbessern** – je früher Sie stoppen, desto günstiger die Änderung.

### Schritt 1: Material tief zerlegen, Memo erzeugen

```
Erstelle jetzt noch keine PPT.
Analysiere zuerst die beiden Artikel getrennt: extrahiere je Kernthema, Kernthese, Argumentationsgerüst,
Erkenntnisgewinn und Randbedingungen. Erstelle daraus ein Leseindruck-Memo.
Keine abschnittweisen Zusammenfassungen – hebt stattdessen das Fortschrittsverhältnis zwischen beiden Artikeln hervor.
Stoppe nach der Ausgabe und warte auf meine Bestätigung.
```

Entscheidend: **Auf der Memo-Ebene die Richtung korrigieren.** Nach der PPT-Erzeugung vermischen sich die Probleme (roter Faden/Titel/Visuelles/Textboxen) – dann ist Ändern am teuersten.

### Schritt 2: slide plan – eine These pro Seite

Auf Basis des bestätigten Memos ein slide plan mit rund 10 Seiten, im Format:

```text
Slide 03 / Claim: Der Schmerzpunkt von KI-Programmierung verschiebt sich nach hinten
Proof object: Harness → sessions → supervision overload → Symphony
Layout: process sequence
```

Die 11 Seiten folgen der „Reihenfolge des Verstehens", nicht der Gliederung der Artikel: Cover → Hook → Progression → Methode 1 → Live-Beispiel → neuer Engpass → Methode 2 → Musterwandel → Grenzen → für kleine Teams → Abschluss.

### Schritt 3: design brief – den Stil umgekehrt definieren

```
Schreibe auf Basis des bestätigten slide plan einen design brief. Klar benennen:
- Wofür diese PPT nicht aussehen darf
- Visuelle Richtung und Referenzen
- Sicherheitsbereich im Hintergrund (Normalinhalte mittig, unten nicht zu tief, Seitenzahl nicht auf strukturierten Rand)
- Welche Texte editierbar bleiben müssen
- Welche Elemente per image-gen erzeugt werden dürfen
- Welche Aussagen nur persönliches Leseverständnis sind und nicht als offizielle Definition formuliert werden dürfen
```

### Schritt 4: Editierbares PPTX erzeugen

```
Erzeuge auf Basis der bestätigten memo, slide plan und design brief ein editierbares PPTX.
Rate die Artikellogik nicht neu; schreibe persönliches Verständnis nicht als offizielle Definition.
Text bleibt in der Textebene der PPT. Bilder nur für Hintergrund, Textur und Dekoration.
Exportiere pro Seite eine PNG-Vorschau, erzeuge ein contact sheet (Übersichtsbild) und dokumentiere das Prüfergebnis.
```

**Arbeitsteilung mit image-gen: Bilder liefern die Anmutung, Text liefert die Fakten.** Titel, Seitenzahlen, Quellenangaben, Fachbegriffe und Beschriftungen gehören niemals ins Bild – bei chinesischem/deutschem Text drohen Fehlzeichen, Formulierungen ändern sich später, und andere müssen beim Öffnen Verschiebungen nachziehen.

### Schritt 5: Markierte Probleme einzeln beheben

```
Behebe die von mir markierten Probleme Punkt für Punkt. Exportiere nach jeder Änderung PPTX, Vorschau und contact sheet neu.
Prüfe auf Überreste alter Texte, Zeilenumbrüche, Sicherheitsbereiche und ob das PPTX sich öffnen lässt.
```

Änderungsanweisungen müssen konkret sein: Bei „verschönere das noch etwas" weiß die KI nicht, was Sie meinen – zerlegen Sie es in ausführbare Punkte wie „Textboxbreite / Maskengröße / Padding ausgewogen?".

## Vier Arten der Abnahmeprüfung

| Prüfung | Worauf achten |
| --- | --- |
| PNG-Vorschau Seite für Seite | Verdeckungen, Versätze, Überreste alter Texte |
| contact sheet Überblick | Überladene Seiten, Stilbruch, schwaches Cover/Schluss |
| PPTX-Paketprüfung | Datei beschädigt? Seitenzahl? Reimportierbar? Medien in Ordnung? |
| Textlayout | Vergessene Platzhalter, ungewollte Umbrüche, Sicherheitsbereich |

## Ethische rote Linien

- Kein offizielles Logo verwenden, um offizielle Inhalte vorzutäuschen;
- Keine erfundenen Produkt-Screenshots – **die visuelle Ebene darf hochwertig sein, die Faktenebene muss sauber sein**.

## Zusammenfassung

- Den vollen Ablauf nur für offizielle externe Vorträge; für interne Entwürfe genügen memo und slide plan;
- In schnellen Szenarien lohnt zuerst ein Blick in die [Vorlagenbibliothek](/de/traework/03-first-task) und in PPT-Plugins/Skills;
- Onkel Ks Originalsatz gehört in Ihr Notizbuch: **„Die Arbeit des Menschen verschwindet nicht, sie wechselt den Ort – von mitten in jedem Detail hinauf auf den Prozess."**
