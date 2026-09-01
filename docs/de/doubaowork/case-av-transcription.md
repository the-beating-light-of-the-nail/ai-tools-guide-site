# Lange Audio- und Videodateien transkribieren, Untertitel erstellen und Highlights ausschneiden

> Szenario: Eine Kollegin schickt Ihnen eine Konferenzaufnahme, einen Livestream-Mitschnitt oder ein Interviewvideo und bittet Sie, es zu ordnen und nebenbei ein paar postingsfähige Clips herauszuschneiden. Am quälendsten ist das ständige Hin- und Herschieben der Fortschrittsleiste: Der Name ist unklar, also zurückspulen; das Zitat muss erneut lokalisiert werden; und bei den Untertiteln drohen überlappende Zeitachsen und aus dem Kontext gerissene Sätze.

Der gesamte Ablauf wurde mit einem echten chinesischen Sprachclip von 4 Minuten 47 Sekunden durchlaufen:

```text
Original-Audio
→ Wortgetreues Transkript mit Zeitcodes
→ Bereinigtes Transkript
→ 111 SRT-Untertitel
→ 10 Stellen für manuelles Nachhören
→ 5 Highlight-Kandidaten
→ Top 3 mit Rangfolge
→ Erst nach manueller Bestätigung entscheiden, ob geschnitten wird
```

Für längeres Material gilt derselbe Ablauf, aber: **stichprobenartig abschnittsweise prüfen, Original-Zeitcodes beibehalten und vor dem Batch-Export noch einmal anhören**. Tool-Auswahl: Für die Transkription Doubao Work mit lokalem Dateiverständnis + `asr-subtitles`-Skill + Selbstprüfung der generierten Dateien (keine zusätzlichen externen Kontoberechtigungen nötig); für die Highlight-Auswahl ein neuer Arbeits-Task + integrierte Textanalyse (nur bereinigtes Transkript und Nachhör-Liste, kein erneutes Raten im Audio während der Auswahl); der eigentliche Schnitt und Export erfolgt erst nach manueller Bestätigung mit einem Videotool.

## Aufgabe eins: Zuerst prüfbaren Text bekommen, nicht eine hübsche Zusammenfassung

Nach dem Hochladen der Audiodatei werden Transkript, Bereinigung, SRT, Nachhör-Liste und Selbstprüfung in einem Zug klar definiert:

```text
Ich bin Content-Manager und habe eine chinesische Audioaufnahme einer Sprechstimme,
die ich zu Textmaterial verarbeiten möchte, das sich direkt korrekturlesen und schneiden lässt.

Eingabematerial: die im aktuellen Chat hochgeladene [Audiodatei]. Nur eine Hauptstimme;
falls Sie mehrere Sprecher erkennen, bitte als "Sprecher A / B" unterscheiden.
Fachbegriffe bevorzugt in folgenden Schreibweisen erkennen: [Produktnamen, Personennamen,
englische Abkürzungen eintragen].

Bitte lesen Sie die Audiodatei direkt ein und verarbeiten Sie sie in dieser Reihenfolge:
1. Zuerst prüfen, ob die Datei korrekt gelesen werden kann, und die Gesamtdauer notieren.
2. Ein wortgetreues Transkript erstellen, mit mm:ss-Zeitcodes; mündliche Wiederholungen
   und Pausenfüller bleiben erhalten.
3. Zusätzlich eine bereinigte Fassung erstellen, in der nur offensichtliche mündliche
   Wiederholungen und sinnlose Pausen entfernt werden — Aussagen, Zahlen, Produktnamen
   und Tonfall bleiben unverändert.
4. Standard-SRT-Untertitel erstellen: fortlaufende Nummern, keine überlappenden Zeitachsen;
   pro Eintrag möglichst 1—2 Zeilen, jede Zeile höchstens 18 chinesische Schriftzeichen;
   ein Satz darf nicht so zerschnitten werden, dass er unverständlich wird.
5. Nicht bestätigbare Wörter als [unverständlich mm:ss] oder [Begriff zu bestätigen mm:ss]
   markieren, nichts raten.
6. Eine Selbstprüfung durchführen: Anfang, Mitte und Ende stichprobenartig kontrollieren —
   Zeitcode-Kontinuität, SRT-Überlappungen, Begriffsschreibweisen und ob Transkript und
   bereinigte Fassung verwechselt wurden.

Bitte abschließend liefern:
A. Transkript mit Zeitcodes  B. Bereinigte Fassung  C. Vollständige SRT-Untertitel
D. Nachhör-Liste für manuelle Prüfung  E. Ergebnis der Selbstprüfung

Bitte als 4 Dateien speichern: transkript.md, bereinigt.md, untertitel.srt, nachhoerliste.md,
und im Chat Gesamtdauer, Anzahl der Untertitel, Anzahl der Nachhörstellen und Dateipfade nennen.

Sicherheitsgrenzen: Nichts veröffentlichen, nicht auf andere Plattformen hochladen und keine
Online-Inhalte ändern; nicht bestätigbare Informationen bleiben markiert.
```

Nach dem Start bestätigt es zuerst, dass die Datei lesbar ist (286,96 Sekunden), stellt fest, dass die normale Audio-Funktion keine Transkription übernimmt, und ruft stattdessen `asr-subtitles` auf — **wenn im Verlauf nur "Inhalte verstehen, Standpunkte zusammenfassen" erscheint, bekommen Sie am Ende meist nur eine Zusammenfassung ohne Zeitcodes, die sich dem Originalaudio zuordnen lässt**.

Testergebnis: 111 SRT-Einträge, 0 überlappende Zeitachsen, keine Zeile über 18 Schriftzeichen. Unverständliche Stellen wurden nicht zu glatten Sätzen geraten, sondern als 10 manuell zu bestätigende Punkte belassen (Gästename, Toolname, Grafikkartenmodell, Dateiname und Zahlen); zusätzlich wurden 11 durch Kontext bestätigte Fehlrecognitions homophoner Wörter separat als "korrigiert" vermerkt.

> Das Transkript sorgt für **Worttreue**, die bereinigte Fassung für **Lesbarkeit*. Der gefährlichste Fehler ist, beides in einem "gut fließenden" Text zu vermischen — angenehm zu lesen, aber niemand sieht mehr, welche Wörter die AI geraten hat.

## Aufgabe zwei: Neuer Task, nur den geprüften Text lesen

Bereinigte Fassung mit Zeitcodes und Nachhör-Liste in einen **neuen Task** legen — er kann nur auf vorhandenen Zeitcodes aufbauen und erfindet während der Auswahl keine Namen und Zahlen neu (in der Praxis lassen sich `.md`/`.txt` im Dateiauswahldialog eventuell nicht "öffnen"; am zuverlässigsten ist es, beide Texte direkt in den Prompt einzufügen):

```text
Dies ist eine neue, eigenständige Aufgabe. Bitte verarbeiten Sie nur die beiden Materialien,
die ich unten liefere:
- Material 1: bereits korrekturlesene, bereinigte Fassung mit Zeitcodes
- Material 2: Abschnitte, die manuell nachgehört bzw. deren Begriffe bestätigt werden müssen

Bitte nicht neu ins Internet gehen und nichts ergänzen, was im Audio nicht vorkommt.

Zielgruppe: [Ihre Zielgruppe eintragen]
Zielplattform: Video-Konto / Douyin, Hochformat, 20—45 Sekunden pro Clip.

Auswahlkriterien:
1. Kandidaten-Abschnitte müssen eine vollständige Frage, eine Kernaussage oder eine konkrete
   Geschichte enthalten und auch ohne Kontext korrekt sein.
2. Bevorzugt Abschnitte mit hoher Informationsdichte, konkreten Zahlen, klarem Kontrast oder
   echten Operationsergebnissen.
3. Keine Zitate aus dem Kontext reißen, um Konflikt zu erzeugen; notwendige Bedingungen und
   Faktengrenzen müssen erhalten bleiben.
4. Abschnitte, die mit der Nachhör-Liste überlappen, mit "zuerst nachhören" markieren —
   nicht als direkt schneidbar behandeln.
5. Start- und Endzeit müssen aus den vorhandenen Zeitcodes der bereinigten Fassung stammen;
   Kandidaten dürfen sich nicht stark überlappen.
6. Zuerst 5 Kandidaten liefern, jeder mit: Nummer, Start-/Endzeit, geschätzte Dauer,
   Kernwert, warum er eigenständig trägt, vorgeschlagener Titel, zu ergänzender Kontext,
   Risiken / offene Punkte, vorgeschlagene Priorität.
7. Danach die Top 3 auswählen und die Rangfolge begründen.
8. Zuletzt eine Checkliste "erst nach manueller Bestätigung exportierbar".
9. Nur die Clip-Liste ausgeben — keine echten Videos generieren, schneiden oder veröffentlichen.

Bitte speichern als highlight-kandidaten.md und im Chat Gesamtzahl der Kandidaten,
Top-3-Zeitfenster und die Anzahl der zuerst nachzuhörenden Kandidaten nennen.

Sicherheitsgrenzen: Ohne meine Bestätigung keine Schnitttools aufrufen, kein Video exportieren,
nichts veröffentlichen und die Originaldateien nicht verändern.

--- Material 1: bereinigte Fassung mit Zeitcodes ---
[bereinigte Fassung einfügen oder hochgeladenen Dateinamen angeben]
--- Material 2: manuell nachzuhören / Begriffe zu bestätigen ---
[Nachhör-Liste einfügen oder hochgeladenen Dateinamen angeben]
```

Es strukturiert zuerst die Zeitcode-Punkte, filtert nach "vollständige Frage oder Geschichte, Informationsdichte, 20—45 Sekunden, Faktengrenzen" 5 Kandidaten und gleicht sie einzeln mit der Nachhör-Liste ab — sobald in einem Zeitfenster ein zu bestätigender Name, Produktname oder eine Zahl auftaucht, wird er mit "zuerst nachhören" markiert. Testergebnis Top 3:

| Rang | Zeitfenster | Inhalt | Warum vorne |
| --- | --- | --- | --- |
| 1 | 00:48—01:48 | AI übernimmt den PC und optimiert die Spielgrafik | Starker Kontrast, quantifiziertes Ergebnis von 3.405 MB → 2.704 MB, aber Feinschnitt und Zahlenprüfung nötig |
| 2 | 01:48—02:37 | 5-Stunden-Gespräch destilliert zu 8 Skills | Hohe Informationsdichte, 46.000 Wörter → 8 Skills, aber Gastname und Struktur-Name zu bestätigen |
| 3 | 02:37—03:20 | Film-Recherche über 5 Plattformen | Am nächsten an Content-Creators, 43 Sekunden tragen eigenständig, aber die Namen der Recherche-Objekte müssen zuerst nachgehört werden |

Alle 5 Kandidaten berühren diesmal mindestens einen offenen Punkt — die Kandidatenliste wurde zwar erstellt, aber Doubao Work hat **kein** Schnitttool aufgerufen, kein Video exportiert und das Originalaudio nicht verändert. Ein Detail noch: Beim ersten Schreiben wurde das Erstellungsdatum der Ausgabedatei falsch angegeben; bei der Korrektur musste erneut bestätigt werden "nur das Datum ändern, nicht schneiden, nicht exportieren, nicht veröffentlichen" — das Endergebnis muss man selbst durchlesen, ein Datei-Kartenchip allein ist keine Fertigmeldung.

> **"Die AI hat diesen Abschnitt gewählt" heißt nicht "dieser Abschnitt darf veröffentlicht werden".** Solange in den Kandidaten noch [unverständlich], [Begriff zu bestätigen] oder ungeprüfte Zahlen stecken, ist der nächste Schritt Nachhören, nicht Export.

> Merken Sie sich diesen zweistufigen Ablauf

**Stufe eins** (Klang → rückverfolgbaren Text): Datei, Sprecher und Begriffsliste klar definert; Transkript und bereinigte Fassung getrennt anfordern; bei SRT Nummern, Überlappungen und Zeilenlängen prüfen; Unverständliches mit Zeitcode markieren, niemals raten; Anfang, Mitte und Ende stichprobenartig prüfen.

**Stufe zwei** (Text → Kandidaten, die sich nachzuhören lohnen): Nur bereinigte Fassung und Nachhör-Liste lesen; Start- und Endzeit nur aus vorhandenen Zeitcodes; bei jedem Kandidaten begründen, warum er eigenständig trägt; bei offenen Punkten das Risiko markieren; vor manueller Bestätigung nicht schneiden, nicht exportieren, nicht veröffentlichen.

Was wirklich Zeit spart, ist nicht, die AI das Video in einem Rutsch veröffentlichen zu lassen, sondern die mechanische Quälerei zuerst von ihr erledigen zu lassen — Zeitcodes geordnet, Untertitel geschnitten, Risikopunkte markiert, Kandidatenabschnitte gefunden. Ihre Aufmerksamkeit gehört dann nur noch dem Wertvollsten: die 10 unsicheren Stellen anhören und entscheiden, ob die 5 Kandidaten wirklich veröffentlicht werden können.

---

Weiter: [Aus dem Kommentarbereich das nächste Thema finden und auswerten →](/de/doubaowork/case-comments)
