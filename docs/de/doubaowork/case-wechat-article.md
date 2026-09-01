# Vom Trend zum fertigen Official-Account-Artikel

> Szenario: Bei Trendartikeln kostet nicht das Schreiben die meiste Zeit, sondern das Vorgehen – erst die Zahlen verifizieren, dann entscheiden, was geschrieben werden darf; und nach dem Text kommen Titel und Titelbild. Getrennt erledigt geraten die Teile leicht in Widerstreit: Im Text steht «offiziell als vergleichbar», im Titel wird es im Überschwang zu «vernichtend geschlagen».

Dieses Kapitel hat mit GLM-5.3-Flash einen vollständigen Praxistest durchgeführt: nicht die Ein-Satz-Generierung, sondern die Zerlegung des Arbeitsablaufs in **vier Workflows** – Faktenblock → Langartikel → Titelkandidaten mit Risikoprüfung → Titelbild. Die Schritte wirken zahlreicher, sparen aber tatsächlich Arbeit: Jeder Schritt baut auf einem prüfbaren Zwischenergebnis auf, das Ganze wird zu einem logisch geschlossenen Kreislauf.

## Skill-Kombination

| Aufgabe | Kombination | Warum diese Wahl |
| --- | --- | --- |
| Fakten prüfen vor dem Schreiben | VOC- und Stimmungsanalyse + öffentliche Websuche | liest mehrere Quellen, findet Konflikte und lässt Original-Links und Beleglücken zurück |
| Material zum Langartikel ausarbeiten | Official-Account-Grafik und Betriebsstrategie + lokaler Faktenblock + Lark Doc | klare Faktengrenzen beim Schreiben, fertiger Text geht zur redaktionellen Prüfung |
| Titelgenerieren ohne Clickbait | Virale Titel und Themenkalender + fertiger Artikel | liefert nicht nur Titel, sondern markiert Täuschungsrisiko und Einsatzszenario |
| Official-Account-Titelbild | Kreativ-Design + Bildgenerierung und -prüfung | zuerst Konzept und Komposition, dann Generieren mit Prüfung von Format, Zuschnitt und Textrisiko |

## Aufgabe 1: Vor dem Schreiben Fakten, Zahlen und Quellen zusammenbringen

Viele schreiben Tech-Trends in dieser Reihenfolge: schockierender Titel gesehen → sofort losschreiben → auf halbem Weg Löcher stopfen. Hier umgekehrt: **zuerst keinen Text schreiben**, sondern von Doubao Work einen Faktenblock liefern lassen, der sagt, «was geschrieben werden darf und was nicht ungeprüft». Der Prompt nennt vier öffentliche Quellen (offizieller Blog, Hugging-Face-Modellkarte, offizielle Preisseite, 36-Kr-Artikel) und schreibt vier Stufen vor:

```text
Ich bin Redakteur eines Tech-/KI-Kontos im WeChat Official Account und schreibe
einen GLM-5.3-Flash-Artikel für Office-Beschäftigte und Entwickler.
Erstelle bitte zuerst den «Faktenblock zum Schreiben»; schreibe noch keinen Text.

Lies und prüfe bitte vollständig und vorrangig diese öffentlichen Quellen:
1. offizieller Z.ai-Blog: https://z.ai/blog/glm-5.3-flash
2. offizielle Hugging-Face-Modellkarte: https://huggingface.co/zai-org/GLM-5.3-Flash
3. offizielle Z.ai-Preisseite: https://docs.z.ai/guides/overview/pricing
4. öffentlicher 36-Kr-Artikel: https://36kr.com/p/xxxxx

Arbeitsanforderungen:
- Liste zuerst die 6–8 Schlüsselfragen, die der Artikel beantworten muss.
- Prüfe Punkt für Punkt: Veröffentlichungszeit, Parametergröße, aktivierte Parameter,
  Kontext, native Multimodalität, Open-Source-Lizenz, unterstützte Frameworks,
  Preis, Benchmarks, Deployment auf inländischen Chips.
- Ordne den Inhalt in vier Stufen: «offiziell bestätigte Fakten»,
  «vom Hersteller selbst berichtete Bewertungen oder Urteile»,
  «Medienwiedergabe», «noch ohne unabhängige Belege».
- Ersetze Originaltexte nicht durch Such-Summaries; nicht Öffnbares oder im
  Original fehlende Angaben als «zu bestätigen» markieren.
- Bei Quellenkonflikten beide Seiten darstellen, ohne für eine Partei zu
  entscheiden.
- Zu jedem Fakt: Original-Link, Seitendatum oder Zugriffsdatum, Belegstärke und
  eine Formulierung, die sicher im Artikel stehen kann.
- Prüfe besonders Tragfähiges wie «Preis nur 1/40», «57 Punkte gleichauf»,
  «100.000 inländische Chips»: Kann man das direkt verwenden?

Endlieferung: Schlüsselfragen, Faktentabelle, nutzbare Beispiele, nicht direkt
verwendbare Aussagen, noch unbelegte Fragen und Quellenliste.
Als Markdown-Ergebnisdatei speichern. Ohne Bestätigung: keinen Artikel schreiben,
nichts veröffentlichen, keine Nachrichten senden, keine Online-Dokumente ändern.
```

Eine nützliche Prompt-Gewohnheit: **nicht nur sagen, was die KI prüfen soll, sondern auch, wie sie Unsicherheit ausdrücken darf** – sonst hält sie «etwas gefunden» schnell für «belegt». Im Test traten zwei typische Fälle auf (Hugging Face wegen Sicherheitsrichtlinie nicht abrufbar, Preisseite zeigte beim ersten Zugriff Flash nicht); es übersprang sie nicht still, sondern protokollierte die Lage und bestätigte weiter über Cache und Kreuzprüfung mehrerer Quellen.

Der finale Faktenblock benennt die drei anfälligsten Aussagen: «Preis nur 1/40» ist eine grobe Medienzusammenfassung der Nutzerpreise und darf nicht als Hardwarekosten erscheinen; «57 Punkte gleichauf» gilt nur für einen bestimmten Gesamtindex einer bestimmten Version und lässt sich nicht auf alle Fähigkeiten ausweiten; bei der Zahl inländischer Chips widersprechen sich offizieller englischer Blog und chinesische Medien in der Zählweise – ohne Quelle darf das nicht entschieden werden. **Grün darf geschrieben werden, Gelb nur mit Quelle und Einschränkung, Rot besser gar nicht anfassen.**

## Aufgabe 2: Aus dem Faktenblock einen lesbaren Langartikel machen

Der Faktenblock sichert Echtheit und Richtigkeit – aber noch keinen Artikel, den man gern zu Ende liest. Der zweite Schritt verwandelt die Informationsquellen – ohne die **Faktengrenze zu durchbrechen** – in eine natürliche Erzähllinie. Mit dem Skill «Official-Account-Grafik und Betriebsstrategie», dem Faktenblock übergeben und die Regel «nur Material aus dem Faktenblock verwenden»:

```text
Bitte nutze den Skill «Official-Account-Grafik und Betriebsstrategie» und lies
diesen Faktenblock:
【Material】Lade deinen Faktenblock direkt hoch oder ersetze den Pfad durch deine
tatsächliche Datei.

Schreibe darauf basierend einen Langartikel für das WeChat Official Account,
gerichtet an Office-Beschäftigte und Entwickler.

Schreibziel: erklären, warum GLM-5.3-Flash Aufmerksamkeit verdient und wie
Normalsterbliche es einordnen sollen – keine Nacherzählung von Keynote oder
Medienartikel.

Anforderungen:
- Bestimme zuerst die Fragen, die die Leser am meisten interessieren, und entwirf
  dann eine natürlich fortschreitende Struktur.
- Nutze ausschließlich das im Faktenblock dokumentierte Material; vom Hersteller
  selbst berichtete Benchmarks müssen klar als solche gekennzeichnet sein;
  «zu bestätigen»-Inhalte dürfen nicht als gesichert geschrieben werden.
- Erfinde keine persönlichen Erfahrungen wie «ich habe es getestet» oder
  «ich habe interviewt»; imitiere auch keine Satzstrukturen des Originals.
- Behalte notwendige Gegenpositionen und Einschränkungen: Die tatsächliche
  Modellleistung hängt von Inferenz-Framework, Werkzeugen, Parametern und
  Aufgabe ab.
- Umgangssprachlicher Stil, hohe Informationsdichte, wie ein Freund, der sich
  gründlich informiert hat, den Sachverhalt erklärt; keine leeren Parolen und
  keine Floskel-Zitate.
- Textkörper rund 1800–2500 chinesische Zeichen, mit Titelplatzhalter,
  Zusammenfassung, Zwischenüberschriften, abschließender Einordnung und
  Quellenliste.

Speichere das Ergebnis als Markdown-Datei und lege ein neues Feishu-Dokument an;
gib den Link zurück. Zuerst zur menschlichen Redaktion – nicht automatisch
veröffentlichen, keine Nachrichten senden, keine anderen Online-Dokumente ändern.
```

Es liest zuerst den Faktenblock, bestimmt die Leserfragen und positioniert den Artikel als «fachliche Einordnung + Beurteilungsmethode», statt ab dem ersten Satz in den Text zu stürzen. Im fertigen Artikel bleiben die Grenzen gewahrt: nicht «gleich gut wie Opus», sondern nur auf einen bestimmten Gesamtindex bezogen; «1/40» nicht als exaktes Ergebnis; der Zählunterschied bei den inländischen Chips bleibt ausdrücklich im Text.

## Aufgabe 3: Viralen Titel wollen – aber ohne pure Clickbait

So sorgfältig der Text auch ist, ein Titel kann im letzten Moment alles zunichtemachen. Mit dem Skill «Virale Titel und Themenkalender»: erst den fertigen Artikel lesen, die neuen Informationen und den Kernkonflikt destillieren, dann Titel generieren – mit drei harten Grenzen:

```text
Bitte nutze den Skill «Virale Titel und Themenkalender» und lies diesen Artikel:
【Material】Lade deinen fertigen Official-Account-Text direkt hoch oder ersetze
den Pfad durch deine tatsächliche Datei.

Fasse zuerst zusammen: die wirklich neue Information, das stärkste Belegstück,
der Kernkonflikt und die Zielgruppe des Artikels. Generiere danach 20 Titel:
je 5 sachlich, als Frage, als Kontrast und als Ergebnis.

Harte Grenzen:
- Keine Zahlen, Schlussfolgerungen, Personenzitate oder eigenen Praxistests in
  den Titeln, die der Text nicht enthält.
- Keine halben Sätze, die absichtlich Missverständnisse erzeugen; keine als
  unabhängige Messung getarnten Hersteller-Benchmarks.
- Sage zu jedem Titel, was er greift, und markiere Täuschungsrisiko,
  Marketingintensität und passendes Szenario.

Empfiehl zum Schluss 3 Titel mit Angabe, ob sie besser für die Official-Account-
Startseite, für Weiterleitung in Gruppen oder für Suchtraffic passen; wähle
einen für das Titelbild aus. Speichere das Ergebnis als
«Titelkandidaten_und_Risikotabelle.md». Ohne Bestätigung: nicht veröffentlichen,
keine Nachrichten senden, keine Online-Dokumente ändern.
```

Es annotiert für jeden Titel «was er greift, Täuschungsrisiko, Marketingintensität, Einsatzszenario» – Risiko und Titel in derselben Tabelle sind verlässlicher als das spätere Bauchgefühl-Löschen. Testempfehlung: Für die Startseite «Andere verbreiten den 1/40-Preis, im Text steht 1/30 bis 1/100» (Kontrasttyp); für Gruppen «Offiziell heißt es vergleichbar mit Opus, verbreitet wurde gleichauf mit Opus»; für Suchtraffic die Variante mit vollständigen Parametern.

> Ehrlich gesagt: Alle von der KI erzeugten Titel sind mittelprächtig. Besser ist es, laufend **virale Titel zu sammeln und eine Titel-Datenbank aufzubauen**, damit die KI weiß, welche Titel virale sind, bevor dieser Workflow läuft; ist die Datenbank groß genug, lässt sich mit dem Cangjie-Skill sogar ein eigener Titel-Skill destillieren.

## Aufgabe 4: Das Titelbild für das WeChat Official Account erstellen

Beim Titelbild drohen zwei Fehler: nur auf «Tech-Feeling» zu achten und alles mit Robotern und Leiterplatten zu füllen; oder das Bild zu zeichnen, bevor der Titel feststeht – dann sagen Bild und Text völlig Verschiedenes. Mit der Fähigkeit «Kreativ-Design» **Text und Titel-Risikotabelle zusammen übergeben**:

```text
Bitte nutze die Fähigkeit «Kreativ-Design» sowie Bildgenerierung und -prüfung und
lies:
【Material】Lade den fertigen Text und die Titel-Risikotabelle direkt hoch oder
ersetze die Pfade durch die tatsächlichen Dateien.
- «Fertiger_Official-Account-Text.md»
- «Titelkandidaten_und_Risikotabelle.md»

Erstelle für den endgültig empfohlenen Titel das Kopfbild für das WeChat
Official Account.

Gib zuerst 3 deutlich verschiedene Cover-Konzepte an; zu jedem: Motiv, Komposition,
Farben, Stimmung, Textstrategie und warum es zum Artikel passt. Wähle dann die
informativste und im Handy-Thumbnail am leichtesten erkennbare Variante und
generiere das fertige Bild.
```

Die visuelle Themenbegrenzung lautet «die rational abgewogene Balance zwischen hoher Fähigkeit und niedrigen Kosten»; die Palette nur tiefes Blau, kaltweiß und ein wenig leuchtendes Grün; keine echten Personen, Markenlogos, Roboter, dichte Leiterplatten – und in den generierten Bildern kein chinesischer Text, der leicht zu Zeichensalat wird. Im Test wirkte schwarzgrauer Grund mit weißem Titel am markantesten; werden Markenelemente gebraucht (etwa das Zhipu-Logo), genügt eine Logo-Vorlage, die integriert wird. Doubao Work hat intern das seedream-Bildmodell von ByteDance integriert – für Titelbilder völlig ausreichend.

## Merken Sie sich diese Inhalt-Produktionslinie

In einem Satz: **erst die Fakten festziehen, dann den Ausdruck freigeben; erst den Titel prüfen, dann die Verbreitung vergrößern.**

```text
Öffentliche Quellen → Faktenblock → Artikeltext → Titel-Risikotabelle → Titelbild → menschliche Prüfung
```

Die KI sollte nicht für Sie jede Zahl lauter machen. Was wirklich Zeit spart: Sie verbindet Quellen, Grenzen und Zwischenergebnisse, sodass der nächste Schritt immer weiß, was der vorige bereits bestätigt hat – und was nicht. So entstehende Artikel klingen vielleicht weniger spektakulär als «der Ein-Satz-Viralhit», aber sie sind eher das, was man Redaktion, Kollegen und Leitung wirklich vorlegen kann.

---

Weiter: [Ein Inhalt, viele Plattformen: die jeweils eigene Version erstellen →](/de/doubaowork/case-multi-platform)
