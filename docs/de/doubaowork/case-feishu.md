# Am besten passt Doubao Work zu Feishu

> Szenario: Dokumente, Tabellen, Protokolle und Projektmaterialien des Unternehmens liegen komplett in Feishu. Seit Doubao Work tief in Feishu integriert ist, kann es direkt lesen — und zurückschreiben. Überall genügt der Link, keine Datei muss angefasst werden.

## Ein typisches Szenario: die eine Seite für das Management

Sie haben zwei Feishu-Dokumente — einen Projekt-Wochenbericht und einen Datendiagnosebericht — und möchten eine «Management-Seite»: jene Zusammenfassung für Führungskräfte, die nicht im Projektmeeting waren, eine Seite, die sagt, wie das Projekt steht, welche Risiken es gibt und was nächste Woche ansteht.

Werfen Sie Doubao Work einfach die Links der beiden Dokumente hin und lassen Sie es selbst lesen, selbst abgleichen und das Ergebnis am Ende in ein **neues Feishu-Dokument** schreiben. Feishu wurde dabei kein einziges Mal selbst berührt (Doubao Work unterstützt die Feishu-Anmeldung per QR-Code).

> Im Praxistest war in den beiden Materialien absichtlich eine Prüffrage versteckt: dieselbe Anomalie, einmal als «25. August», einmal als «Mittwoch» notiert — um zu sehen, wie es mit dem Konflikt umgeht.

## Warum das zwingend Feishu braucht

Beliebig große Sprachmodelle schreiben heute mühelos Wochenberichte und Stichpunktlisten. Was wirklich fehlt, ist der **Kontext**:

- Wo die Materialien liegen und welche Version die neueste ist, weiß es nicht;
- welche Zahlen gesichert und welche nur geraten sind, kann es nicht unterscheiden;
- wohin das Geschriebene ans Team übergeben wird, kann es erst recht nicht steuern.

All diese Informationen liegen in Feishu: Dokumente, Tabellen, Protokolle, Projektmaterialien, wer worauf Zugriff hat — das Betriebsvermögen eines Unternehmens stapelt sich hier. Doubao Work kann diese Materialien direkt verarbeiten und den ganzen Handarbeitsteil aus Download, Upload, Bearbeiten und Hintergrund-Erklären streichen.

> Achtung Berechtigungsgrenze: **Dokumente, die Sie selbst nicht sehen dürfen, kann auch Doubao Work nicht sehen** — es umgeht keine Berechtigungen. Im Unternehmen ist das ein Vorzug, und diese Grenze muss bleiben.

## Schritt eins: Links und Anforderungen in einem Zug klarmachen

Der Prompt hat drei Teile: **Eingabematerialien** (zwei Feishu-Dokument-Links), **Lieferung** (eine einseitige Zusammenfassung), **Sicherheitsgrenzen** (Quelldokumente nicht ändern, keine Nachrichten senden, keine Aufgaben anlegen).

```text
Bitte lies die beiden folgenden Feishu-Clouddokumente direkt ein, ohne dass ich sie neu
herunterladen oder den Text kopieren muss:

1. "Diagnosebericht der Wissensdatenbank-Betriebsdaten" [Link zum Online-Dokument]
2. "Wochenbericht des Projekts Intelligenter Kunden Service Wissensbasis" [Link zum Online-Dokument]

Bitte gleiche die beiden Materialien kreuzweise ab und erzeuge ein Feishu-Clouddokument
"Projekt Wissensbasis Intelligenter Kundenservice | Management-Seite".

Das Dokument muss beantworten:
1. In welchem Zustand sich das Projekt gerade befindet;
2. welches die drei wichtigsten Fakten dieser Woche sind;
3. was bei der Anomalie vom 25. August tatsächlich passiert ist — was Fakt ist und was nur
   Schlussfolgerung;
4. welches aktuell die drei größten Risiken sind;
5. welche drei Dinge nächste Woche vorrangig voranzutreiben sind;
6. welche Informationen in beiden Materialien fehlen und manuell zu bestätigen sind.

Schreibanforderungen:
- Adressiert an Führungskräfte, die nicht im Projektmeeting waren; etwa eine Seite umfassen;
- jede Zahl muss sich auf die beiden Quelldokumente zurückführen lassen;
- bei Widersprüchen zwischen den Materialien diese separat ausweisen, nicht eigenmächtig
  eine Version wählen;
- keine Verantwortlichen, Daten, Budgets oder Fertigstellungsstatus erfinden;
- am Ende eine "Quellen-Prüftabelle" ergänzen, aus der hervorgeht, aus welchem Dokument jede
  Kernschlusfolgerung stammt;
- ein Feishu-Clouddokument erstellen und einen öffnenden Link zurückgeben.

Sicherheitsgrenzen: die beiden Quelldokumente nicht verändern, keine Gruppennachricht senden,
niemanden @-erwähnen, keine Aufgaben oder Erinnerungen anlegen.
```

Kleine Erfahrung: **Nicht nur «fasse bitte zusammen» schreiben** — "zusammenfassen" ist für Menschen schon vage, für die AI erst recht. Leser, Fragen, Ausgabeformat, Faktengrenzen und verbotene Aktionen in einem Zug klar definieren. Der Prompt darf ruhig länger sein; weniger Nacharbeit ist die echte Zeitersparnis.

## Schritt zwei: es liest selbst und schreibt selbst zurück

Nach dem Absenden erkennt Doubao Work die Online-Dokument-Aufgabe und liest die Quelldokumente eines nach dem anderen. Dieser Schritt wirkt unspektakulär, ist aber der wichtigste des ganzen Ablaufs: Früher hieß es «Datei herunterladen → Datei suchen → der AI hochladen → auf das Parsen warten → Hintergrund erklären», jetzt heißt es «Link geben → sie liest selbst → Arbeit beginnt». Die Materialien bleiben durchgehend in Feishu — wenn das Quelldokument aktualisiert wird, Berechtigungen wechseln oder Kolleginnen weiterbearbeiten wollen, sind Sie raus.

Nach dem Abgleich legt es das neue Feishu-Clouddokument direkt an — **die Eingabe kommt aus Feishu, die Ausgabe geht zurück nach Feishu**. Die Antwort im Chatfeld sieht nur, wer die Aufgabe gestellt hat; als Feishu-Dokument lässt sie sich in den Projektraum legen, Kolleginnen zum Kommentieren schicken, weiter ergänzen oder direkt ins Meeting mitnehmen.

Für diese eine Seite hat es Folgendes getan: erkannt, dass das Projekt noch im Betatest-Stadium ist; Kernzahlen wie Traffic, Lösungsquote, Eskalationsquote und Fortschritt der FAQ-Bereinigung extrahiert; die Anomalie vom 25. August in zwei Spalten «bestätigte Fakten» und «unverifizierte Vermutungen» zerlegt; **den Widerspruch zwischen «Mittwoch» und «25. August» entdeckt, separat aufgelistet und dem Menschen zur Entscheidung überlassen, ohne selbst zu wählen**; die drei vorrangigen Dinge der nächsten Woche plus manuell zu bestätigende Punkte aufgeführt; zu jeder Kernschlussfolgerung die Quelle notiert und obendrein einen Wochenverlaufs-Chart gezeichnet.

## Schritt drei: gute Ergebnisse müssen der Prüfung standhalten

Wo die AI am ehesten Arglosigkeit erzeugt, ist ihre glatte Ausdrucksweise. Genau davor hat man im Unternehmen Angst: Ein Datum, ein Verantwortlicher, ein Budget — einmal daneben erfunden, und alle Nachfolgenden irren mit. Deshalb stehen im Prompt zwei Punkte extra: **Fehlende Informationen ausdrücklich zur Bestätigung ausweisen; zu jeder Kernschlussfolgerung das Herkunftsmaterial nennen.** Im Test hat es tatsächlich den neuen Funktionsterminplan, die Ursache der Anomalie und den Wirksamkeitszeitpunkt des Betatests zur manuellen Bestätigung vorgemerkt — es hat Ihnen «die Eingangstür zur Kontrolle» offengehalten.

## Eine Vorlage zum direkten Abschreiben

Kundenkonzepte, Projekt-Reviews, Wochenberichts-Zusammenführung, Meeting-Unterlagen, Wettbewerbsmaterial — das Gerüst passt überall:

```text
Bitte lies die folgenden Feishu-Materialien direkt ein, ohne dass ich sie neu herunterladen
oder den Text kopieren muss:

[Material 1] Name + Feishu-Link
[Material 2] Name + Feishu-Link

Bitte erstelle auf Basis dieser Materialien ein Feishu-Clouddokument "[Name der Lieferung]".

Dieses Dokument richtet sich an [Zielgruppe] und muss beantworten:
1. [Kernfrage 1]
2. [Kernfrage 2]
3. [Kernfrage 3]

Schreibanforderungen:
- Erst das Ergebnis, dann die Begründung;
- jede Zahl und jeder Fakt muss sich auf die Quellmaterialien zurückführen lassen;
- Fakten, Schlussfolgerungen und fehlende Informationen getrennt schreiben;
- Konflikte zwischen Materialien separat ausweisen, nicht eigenmächtig eine Version wählen;
- keine Verantwortlichen, Daten, Budgets oder Fertigstellungsstatus erfinden;
- am Ende eine Quellen-Prüftabelle ergänzen;
- ein Feishu-Clouddokument erstellen und den Link zurückgeben.

Sicherheitsgrenzen: Quellmaterialien nicht verändern, keine Nachrichten senden, niemanden
@-erwähnen, keine Aufgaben oder Erinnerungen anlegen.
```

Bei vielen Materialien ein Satz mehr: **«Liste zuerst, welche Materialien du tatsächlich erfolgreich gelesen hast; nicht zugängliche Materialien separat benennen und nicht so tun, als hättest du sie gelesen.»** — so sehen Sie auf einen Blick, wie viel wirklich angekommen ist.

## Weitere Feishu-Szenarien in der Praxis

Innerhalb der erteilten Berechtigungen kann Doubao Work Feishu-Gruppenchats, Dokumente, Cloud-Festplatte, Wissensbasen, Protokolle und Bitabellen lesen und Ergebnisse in Dokumente, Aufgaben, Kalender und Gruppenchats zurückschreiben.

**Gruppenchats zusammenfassen**: Nachrichten der letzten Woche → ein Feishu-Dokument mit vier Klassen: Entscheidungen, zugewiesene Aufgaben, Kerninformationen, Risiken; erwähnte Schlüsseldokumente und Links landen wieder unter der jeweiligen Diskussion. Auch Dutzende Gruppen auf einmal gehen; Aufgaben wandern in die Feishu-Aufgaben, Terminiertes in den Kalender (Erinnerung 15 Minuten vorher) — die Aufgaben **behalten Quelle und Kontext**: ein Klick zeigt, aus welcher Gruppe der Punkt stammt und warum er zu erledigen ist.

> Ordne die Nachrichten meiner Feishu-Gruppe XY der letzten Woche und gliedere sie in einem Feishu-Dokument nach Entscheidungen, zugewiesenen Aufgaben, Kerninformationen und Risiken.
>
> Gehe alle meine Feishu-Gruppenchats der letzten Woche durch, füge das von mir zu Erledigende den Feishu-Aufgaben hinzu, hebe Termingeundes in den Feishu-Kalender ab und erinnere mich 15 Minuten vorher.

**Update-Karte per einem Satz**: Einfach am Handy sagen «ordne, was es Neues bei WeSight gibt, mache eine Update-Karte und schick sie in die Austauschgruppe» — es findet selbst die zugehörigen Dateien in Feishu, ordnet und verschickt; kein Material hochgeladen, kein Pfad genannt: **der in Feishu ohnehin abgelagerte Inhalt ist der Kontext, mit dem es die Aufgabe erledigt.**

**Karte der Inhaltsassets**: Lassen Sie es die über lange Zeit angesammelten Themen, Entwürfe, Fälle und Reviews für das WeChat Official Account in Feishu ordnen und Inhaltsrichtungen, häufige Leitmotive, wiederverwendbare Fälle, Inhaltslücken und Themen-Vorschläge ausgeben; die umsetzbaren Themen kann es gleich in eine Tabelle bringen (Felder: Themename, Zielgruppe, Kernschmerzpunkt, Erzähllinie, nutzbare Fälle, Belegquellen, Priorität, empfohlener Publikationszeitpunkt) und sogar eine interaktive Wissensbasis-Webseite erzeugen. Alte Materialien werden neu verbunden, **aus ihnen wachsen neue Themen** — das abgelagerte Wissen ist selbst eine Mine.

**PC-Materialien nach Feishu überführen**: Die im WeChat-Download-Ordner gestapelten Berichte und PDFs nach Inhalt klassifizieren und ein Index erzeugen lassen — alle Originaldateien bleiben erhalten:

```text
Bediene meinen Computer und öffne D:\Documents\xwechat_files. Ordne die darin liegenden
KI-bezogenen PDF-, PPT- und Word-Dateien, lies Dateinamen und Inhaltszusammenfassungen,
sortiere nach Kategorien, lege unter D:\Documents einen Ordner "KI-Materialbibliothek" an
und erstelle für jede Kategorie einen Unterordner. Kopiere die passenden Materialien in die
entsprechenden Verzeichnisse, behalte alle Originaldateien im Ursprungsverzeichnis — Löschen
und Verschieben sind verboten. Erzeuge zum Schluss einen Excel-Index mit Dateiname, Dateityp,
Kategorie und Inhaltszusammenfassung.
Unentscheidbare Dateien separat in "zu bestätigen" legen und die Kategorie nicht raten.
```

Die herausgefilterten Branchenreports lassen sich mit einem Satz in die Feishu-Branchen-Wissensbasis legen — als neuer Kontext für künftige Aufgaben. Feste Wiederholabläufe können auf dem **Cloud-PC** laufen (mit Office-Suite und über 200 Skill-Erweiterungen und App-Connectors) — etwa täglich die zehn meistgelikten Videos zu den Douyin-Schlagwörtern «AI-Büro, AI-Agent, AI-Technik» abrufen und in eine Feishu-Bitabelle schreiben; einmal als geplante Aufgabe eingerichtet, läuft es weiter, auch wenn der lokale Rechner aus ist.

## Warum hier der Unterschied entsteht

Die Funktionen von Agenten werden sich immer ähnlicher — der angesammelte **Arbeitskontext** jedes Einzelnen und jedes Teams nicht. Den besten Kontext zu haben, heißt den produktivsten Agenten zu haben — und Feishu lagert just den vollständigsten Teil unseres Arbeitskontexts ab. Doubao Work arbeitet in dieser Umgebung wie ein Kollege, der zwar gerade erst angefangen hat, dessen Arbeitsplatz und Berechtigungen aber längst eingerichtet sind: Es startet mit vollem Kontext.

---

Ähnliches Szenario: [Desktop aufräumen: erst den Plan ansehen, dann Dateien anfassen →](/de/doubaowork/case-desktop)
