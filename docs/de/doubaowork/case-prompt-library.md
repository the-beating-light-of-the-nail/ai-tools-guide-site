# Zu feine Kategorien machen das Finden schwer: 541 GPT-Prompt-Beispiele neu geordnet

> Szenario: Beim Sammeln von GPT-Image2-Prompt-Beispielen galt: je mehr, desto besser – bis 541 zusammengekommen waren und die Probleme kamen. Die Beispiele verteilen sich auf GitHub-Repositories, READMEs und lokale Ordner; die Kategorien wurden immer feiner, und um ein «Tuschmalerei-Poster im chinesischen Stil» zu finden, blätterte man zwischen mehreren Kategorien hin und her.

> Voraussetzung: Doubao- und Feishu-Konto stimmen überein; die Projektmaterialien liegen in Feishu Cloud oder im Wissensspeicher (Dokumente, Cloud-Dateien, Kontakte und frühere Unterhaltungen lassen sich per @ referenzieren).

Die bisherige Verwaltung: alle Beispiele in README und Gallery-Dokumenten, manuell in 13 Kategorien sortiert; 19 Stil-Tags, 10 Szenario-Tags, drei Dimensionen kreuzen sich; lokale Dateien und GitHub-Versionen stimmten oft nicht überein. **Dieses Klassifikationssystem entstand chronologisch und war nie aus der Sicht Suchender entworfen – je mehr Dimensionen sich auftürmten, desto mehr wurde die Ordnung selbst zum größten Hindernis beim Finden.**

## Schritt 1: Ein Satz, und Doubao legt los

Sind die Materialien in Feishu gebündelt, braucht es durchgehend keine komplexen Prompts:

```text
Analysiere das Kategoriensystem der Beispiele in diesem Projekt
@awesome-gpt-image-2 Projektmaterial
Sieh dir zuerst die Probleme der bestehenden Kategorien an und entwirf sie
auf Basis echter Suchbegriffe neu
```

Es liest automatisch die Beispieldaten, zählt die Kategorienverteilung aus und findet Synonyme und Überschneidungen.

## Schritt 2: Die fünf hartnäckigen Mängel der bestehenden Kategorien quantifiziert

1. **Synonyme Tags überall**: Von 19 Stil-Tags wurde `Character` 113-mal, `Characters` nur 2-mal verwendet – exakt dasselbe; `Product`/`Products`, `Infographic`/`Charts`, `Realistic`/`Photography` sind Duplikate; 19 Tags reichen eigentlich als 12;
2. **Dieselbe Konzept in drei Dimensionen**: «Poster» taucht in category und styles auf, «Historie» gleich in drei Ebenen – niemand weiß, über welchen Eingang man sucht;
3. **Mülleimer-Kategorie**: `Other Use Cases` enthält 28 Beispiele von allem – das ist keine Klassifikation;
4. **Dünne Kategorien tragen kein Hauptmenü**: 4 Hauptkategorien decken zusammen nur 11 % der Beispiele ab;
5. **Interne Begriffe versteht niemand**: Wörter wie `R&D` oder `Prompt as Code` gibt niemand bei der Suche ein.

Der entscheidende Schritt: Aus den echten Titeln der 541 Beispiele extrahierte es häufige Suchbegriffe und **leitete rückwärts die tatsächlichen Suchgewohnheiten ab** – «Poster/Cover/Werbung» 82-mal, «Infografik/technische Diagramme» 48-mal, «UI/Screenshot/App» 38-mal, «Porträt/Avatar» 28-mal, «Illustration/chinesischer Stil/Tuschmalerei» 25-mal. Wer die Prompt-Bibliothek öffnet, hat ein klares Ziel vor Augen: «Ich möchte ein XX-Bild erstellen.» **Das Kategoriensystem wird um das Ergebnis herum gebaut, die Kategorienamen entsprechen direkt dem Ziel, das der Nutzer erreichen will** – das ist der Dreh- und Angelpunkt der ganzen Neugestaltung.

## Schritt 3: Von den echten Suchbegriffen her neu entwerfen

Die neuen Kategorien: **13 → 8, alle nach Erzeugnis benannt**, zusammen exakt 541 Beispiele, ohne Mülleimer. Die Logik:

- **UI & Infografik**: UI, Dashboard, Infografik und technische Diagramme sind in den Köpfen der Nutzer alle «strukturierte Information»; zusammen 140 Beispiele, die größte Kategorie;
- **Illustration & Kunst**: chinesischer Stil/altchinesisch/Tuschmalerei/Historie sind im Kernillustrations-Stile; nach der Zusammenführung trifft «chinesischer Stil» direkt über den Alias zu;
- **Szene · Raum · Erzählung**: Architektur, Stadt, Storyboard, Welt-Szenen sind alles «großer Raum / Weltentwurf»-Erzeugnisse;
- **Charaktere & Figuren**: nur virtuelle Charaktere/Karten/3D-Figuren; echte Porträts gehören zu «Fotografie & Realismus»;
- **Other Use Cases aufgelöst**: die 28 Beispiele wurden einzeln einsortiert.

Weniger Kategorien heißt nicht Verlust der Suche: Jede Kategorie erhält eine **Alias-Tabelle** – Suche «chinesischer Stil/altchinesisch/Tuschmalerei» → Illustration & Kunst; «Porträt/Avatar» → Fotografie & Realismus; «Logo/VI/Markenzeichen» → Marke & Zeichen; «Detailseite/Verpackung/Galeriebild» → Produkt- & E-Commerce-Visuals.

## Schritt 4: Massenmigration in den Feishu-Wissensspeicher

Im Wissensspeicher die 8 neuen Kategorien als Hauptverzeichnisse anlegen, dann:

```text
Ordne den 541 Beispielen in cases.json nach der neuen Zuordnungstabelle erneut
das category-Tag zu. Erstelle dann nach den 8 Kategorien stapelweise Feishu-Dokumente
und lege sie in die entsprechenden Verzeichnisse des Wissensspeichers.
Die alten Kategorie-Anker als Weiterleitung behalten, nicht löschen.
```

Es schreibt das category-Feld um, ruft die Feishu-Schnittstellen für die Massenanlage der Dokumente, behält die alten URL-Anker als Weiterleitung (gespeicherte alte Links bleiben gültig); Beispiel-IDs und Bildpfade bleiben unverändert (GitHub-Links brechen nicht). **Nicht alles in einem Rutsch umstellen**: etappenweise vorgehen – zuerst die Tags (geringes Risiko) → dann die Kategorien (mittleres) → zum Schluss Frontend-Anzeige und Dokumente; jeder Schritt ist rückrollierbar.

## Schritt 5: Mit echten Suchanfragen testen

| Echte Anfrage | Alte Struktur | Neue Struktur |
| --- | --- | --- |
| Tuschmalerei-Poster im chinesischen Stil | Schwanken zwischen History und Illustration | direkt Illustration & Kunst, Treffer im ersten Schritt |
| Realistisches Porträt | Schwanken zwischen Photography und Characters | Fotografie & Realismus, Alias «Porträt» führt direkt hin |
| App-UI-Screenshot | Störung durch Poster-Inhalte in der UI-Kategorie | direkt zu UI & Infografik |
| Charakterkarte | 3D-Karten verstreut in Illustration | Charaktere & Figuren, gebündelter Treffer |
| Stadt-Architektur-Karte | Pendeln zwischen Architecture und Scenes | Szene · Raum · Erzählung |

Von 10 Testanfragen verloren 5 das Schwanken zwischen mehreren Kategorien vollständig, 4 hatten einen kürzeren Trefferpfad, 1 zeigte deutlich präziseres Semantik-Matching. In der späteren Iteration wurden echte GA4-Suchprotokolle angeschlossen und die Alias-Zuordnung erneut auf Basis realen Nutzerverhaltens kalibriert – nur die Alias-Regeln wurden feinjustiert, die geprüfte Struktur nicht umgeworfen.

## Etappenplan der Migration

| Etappe | Was getan wird | Risiko |
| --- | --- | --- |
| 0 | Echte Suchbegriffe exportieren, Alias-Tabelle kalibrieren | nur lesend |
| 1 | Synonyme Tags zusammenführen (Characters → Character usw.) | gering |
| 2 | category-Feld nach Zuordnungstabelle massenhaft umschreiben | mittel |
| 3 | Frontend-Anzeige, Such-Aliase, alte URL-Weiterleitungen aktualisieren | mittel |
| 4 | Kategorien-Überschriften und Anker in den Dokumenten aktualisieren | gering |
| 5 | Regression mit echten Anfragen, vergleichen ob Null-Ergebnis-Anfragen sinken | Prüfung |

Der größte Eindruck: **Wissensspeicher-Verwaltung war früher Handarbeit, jetzt ist sie eine Frage des kurzen Diktierens** – Doubao liest die Daten, rechnet die Statistik, findet die Probleme, entwirft die Lösung und migriert in Masse; der Mensch urteilt und bestätigt nur an den Knotenpunkten. Die in alten Projekten gesammelte Erfahrung muss nicht brachliegen: Mit KI und Feishu-Wissensspeicher lässt sie sich aktivieren – und der Prozess läuft glatter als gedacht.

---

Weiter: [Welches Wissen veraltet ist – und den Owner automatisch finden und bestätigen →](/de/doubaowork/case-knowledge-expiry)
