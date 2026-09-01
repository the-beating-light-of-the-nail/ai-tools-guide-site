# Viraler Official-Account-Artikel wird zum Kurzvideo

> Szenario: Wer einen WeChat-Official-Account-Artikel in ein Kurzvideo verwandeln will, wirft vielen die KI den kompletten Text hin mit einem „mach mir daraus 60 Sekunden Sprechtext". Die KI kooperiert, streicht die Hälfte, fügt ein «Können Sie das glauben?» hinzu und ein «gleich liken und speichern» – weniger Wörter, aber das Video taugt noch lange nicht, und Bedingungen, Zeitangaben und das persönliche Praxistesten des Originals geraten leicht aus dem Lot.

Im Praxistest wurde mit dem Official-Account-Artikel «Nachdem ich meinen Computer an Doubao ausgelagert habe, stieg meine Produktivität enorm! [Mit Anleitung]» die komplette Kette durchlaufen (nur bis zum lokalen fertigen Film, ohne Upload):

```text
Original-Artikel
→ Kurzvideo-Skript und sekundengenaues Storyboard
→ echter Sprechtext vor der Kamera + Produkt-Bildschirmaufnahme + Materialpaket
→ Remotion-Skill
→ Codeprüfung, Rendering, ffprobe und Stichproben-Abnahme der Frames
→ lokaler MP4-Film
```

Aufgabenteilung: **Drehbuch und Schnitt sind zwei Dinge.** Ein schlechtes Skript verlangt eine andere Gewichtung der Informationen, fehlendes Material muss nachgedreht werden, ein schwarzes Bild oder eine falsche Tonspur ist ein Schnitt-Problem – beide Abläufe getrennt, und man sieht auf einen Blick, wo es hakt.

| Phase | Werkzeug | Zuständigkeit |
| --- | --- | --- |
| Text aufbereiten | Web-Extraktion des Artikeltexts | Fakten, Bedingungen und Reihenfolge der Beispiele erhalten |
| Skript und Storyboard | Kurzvideo-Drehbuch (Arbeitspartner) | Winkel wählen, Sprechtext schreiben, sekundengenaue Bilder aufteilen, Fakten-Selbstprüfung |
| Materialverwaltung | lokale Computer-Fähigkeiten + Materialliste | prüfen, ob Videos, Aufnahmen, Bilder und Pfade existieren |
| eigentlicher Schnitt | Remotion-Skill | Projekt wiederverwenden, Zeitleiste organisieren, H.264-MP4 rendern |
| Abnahme | ffprobe + gleichmäßige Frame-Stichproben | Dauer, Auflösung, Framerate, Tonspur, Schwarzbilder und Abbrüche prüfen |

## Schritt 1: Originaltext holen, den Drehbuch-Partner finden

Den Link des Originalartikels direkt an Doubao Work übergeben und den Inhalt extrahieren lassen. Dann unter «Skills · Konnektoren · Partner» zu «Arbeitspartner · Team» wechseln und über die Suche „Video" den **Kurzvideo-Drehbuch-Autor** finden – der Unterschied zu gewöhnlichen Schreib-Skills: Er liefert nicht nur einen Sprechtext, sondern ordnet Aktionen, Bilder und Untertitel den Zeitfenstern zu. Das Fakten-Stammdokument hochladen und Zieldauer, Publikum, Materialbedingungen und Sicherheitsgrenzen in einem Prompt festlegen:

```text
Ich bin Autor eines WeChat Official Account und möchte meinen Langartikel
«Artikeltitel» in ein Kurzvideo von höchstens 3 Minuten verwandeln, das direkt
gedreht und geschnitten werden kann.

Eingaben:
- Link des Originals: 【Link】
- bereits bereinigtes und geprüftes Fakten-Stammdokument: die hochgeladene Datei
  «Fakten-Stammdokument_zum_Originalartikel.md»

Bitte arbeite in der Arbeitsweise eines «Kurzvideo-Drehbuch-Autors»:
1. Lies zuerst das Stammdokument und liste die Fakten, die nicht verschlimmbessert
   werden dürfen, sowie die Zahlen, deren Einschränkungen erhalten bleiben müssen.
2. Wähle aus den echten Aufgaben des Originals die 3 für ein Kurzvideo am besten
   geeigneten – nicht alles vorlesen, nur um zu füllen.
3. Schreibe eine Ich-Form-Sprechtextfassung von 150–180 Sekunden. In den ersten
   5 Sekunden direkt einen Kontrast aufbauen.
4. Umgangssprachlich, kurze Sätze, mit Pausen; den Ton des eigenen Praxistests
   erhalten. Keine Produkt-Keynote, keine Funktionen, die es nie gab.
5. Zerlege den Sprechtext in eine Shot-Tabelle mit: Zeitfenster, Sprechtext,
   Bild, Materialtyp, Großtext auf dem Schirm, Übergang, Risikohinweis.
6. Bevorzugt bestehende Sprechtext-Videos, Produkt-Bildschirmaufnahmen und
   Artikelbilder wiederverwenden; Shots mit fehlendem Material ausdrücklich als
   «nachzudrehen» markieren, nicht so tun, als existiere das Material.
7. Mache zum Schluss eine Fakten-Selbstprüfung: ob Plattformunterschiede,
   Framerate, Dauer, Zahlen, Veröffentlichungsdatum und «Produktivitätssteigerung»
   noch die Bedingungen des Originals tragen.

Endlieferung: Sprechtext + Shot-für-Shot-Schnitttabelle.
Im Chat nur die Summe: empfohlene Filmdauer, Zahl der Shots, wiederverwendetes
Material, Zahl der Nachdrehs.

Sicherheitsgrenzen: nur lokale Skripte und Storyboards erzeugen, nichts hochladen,
nichts veröffentlichen, das Originalmaterial nicht verändern und das persönliche
Praxistesten nicht zur allgemeinen Zusage verallgemeinern.
```

Geliefert wurden 3 Skriptfassungen (Überblickswinkel / Handy steuert, Computer führt / KI arbeitet, aber das Erfolgserlebnis bleibt beim Menschen), jede nach Timecode zerlegt, mit Plattform, Zielgruppe, Verbreitungsziel und Drehbedingungen; die Vor-Veröffentlichungsprüfung wurde in «bestanden» und «weiter manuell» geteilt.

## Schritt 2: Das Materialpaket ordnen

Das Skript entscheidet, was gedreht wird; das Materialpaket entscheidet, was zu sehen ist: Anfang echter Sprechtext vor der Kamera (Einstieg, Problem und Erklärung der Fähigkeiten), Mitte Bildschirmaufnahmen der Bedienung mit Sprechtext (echte Aufgaben am Computer), Schluss echter Sprechtext (Fazit und Handlungshinweis), dazu das Video-Cover, Screenshots des Arbeitsaufgaben-Modus (erklärt «nicht nur Chat») und Screenshots der Skill-Konnektoren (erklärt, warum vorhandene Werkzeuge vorrangig zu nutzen sind). **Geben Sie jedem Material einen Namen, der den Zweck verrät** – dann weiß Doubao Work beim Schneiden, welches Material in welche Situation gehört.

## Schritt 3: Remotion-Skill hochladen und schneiden

Ergibt die Suche auf der Skill-Seite „Videoschnitt" nichts, geht der Weg über «Neu → Skill hochladen» ([Remotion bietet offiziell einen AI-Skill](https://www.remotion.dev/docs/ai/skills)). Das Upload-Paket muss `SKILL.md` enthalten – den lokal geprüften Remotion-Best-Practices-Skill als ZIP packen, hochladen und nach der Installation in «Meine Skills» einschalten.

> Ein Skill ist keine Video-Vorlage, sondern eher ein **professioneller Arbeitsauftrag an den Agenten**: welche Regeln beim Anlegen von Compositions, dem Umgang mit Material, der Zeitleiste, dem Rendering und der Abnahme gelten. Das eigentliche Material und das Projekt liefert weiterhin Sie.

Beim Aufruf vier Dinge klar sagen – welcher Skill, welche Materialien und Projekte gelesen werden, wie abgenommen wird, welche Aktionen verboten sind:

```text
Bitte nutze den aktuell installierten Remotion-Skill und schneide aus dem
Materialpaket ein abspielbares Video.

Eingaben:
- Sprechtext-Videos, Bedienaufnahmen und Bilder: gemäß den lokalen Pfaden in
  «Materialliste.md»
- Sprechtext und Shot-Schnitttabelle: die in der Vorphase abgenommene Datei
- bestehendes Remotion-Projekt: 【absoluten Pfad des eigenen lokalen Projekts einsetzen】

Ausführungsregeln:
1. Prüfe zuerst Materialliste und Dateien auf Existenz; fehlende Posten auflisten,
   nichts erfinden.
2. Bestehe Compositions wieder, baue das Projekt nicht neu, überschreibe keine
   Originalvideos.
3. Behalte den roten Faden des echten Sprechtexts; füge in den jeweiligen
   Abschnitten Produkt-Bedienaufnahmen, UI-Bilder und Kapitelhinweise ein;
   keine dekorativen Animationen über die echte Oberfläche legen.
4. Seitenverhältnis, Auflösung und Dauer richten sich nach der bestehenden
   Composition; alle Zahlen und Funktionsbeschreibungen müssen dem
   Fakten-Stammdokument entsprechen.
5. Führe Codeprüfung und Typprüfung aus und rendere danach H.264-MP4.
6. Prüfe nach dem Rendering mit ffprobe Dauer, Auflösung, Framerate,
   Videocodec und Tonspur; ziehe danach gleichmäßig Frames und kontrolliere
   Anfang, die drei Beispielsegmente und das Ende auf Schwarzbilder,
   Tippfehler, Abbrüche und personenbezogene Daten.

Endlieferung: lokaler MP4-Film + ein Kontaktabzug oder mehrere Abnahme-Frames
+ ein kurzes Abnahmeprotokoll (Dateipfad, Medienparameter, bekannte Grenzen).

Sicherheitsgrenzen: nur im lokalen Projekt neue Dateien erzeugen, Originalmaterial
nicht löschen oder überschreiben, nichts hochladen, nichts veröffentlichen.
```

Nach dem Absenden liest es zuerst den Remotion-Skill und untersucht dann bestehendes Projekt und Materialliste – erst das ist die echte Nutzung des Skills. Der Endlieferung lagen außer dem Film auch Compositions, Bild- und Audioparameter sowie die Struktur der Zeitleiste bei.

## Der menschliche Anteil bleibt am wertvollsten

Früher schien «aus einem Artikel ein Video machen» nicht schwer; ein echter Durchlauf zeigt: Am wertvollsten im Artikel sind **Fakten und Urteile**, am aufwendigsten im Video sind **Sprechtext, Material und Schnitt** – erst eine komplette Produktionslinie hebt die Kapazität. Die KI kann diese Linie integrieren, aber der wertvollste Teil bleibt beim Menschen: die wiederkehrende Arbeit an den Agenten abgeben und die gewonnene Zeit für jene Entscheidungen aufwenden, die nur Sie treffen können.

---

Die Selbstmedien-Szenarien enden hier. Weiter: [Wissensmanagement: vom schnellen Speichern zum späteren wirklichen Wiederfinden →](/de/doubaowork/case-bookmarks)
