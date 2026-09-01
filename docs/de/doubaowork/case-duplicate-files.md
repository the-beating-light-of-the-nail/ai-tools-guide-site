# Dateiduplikate und Konfliktversionen: erst die Unterschiede ansehen, dann entscheiden

> Szenario: Eine Freundin schickt einen ganzen Ordner zum Aufräumen — 5 Unterordner, 9 Word-Dokumente, davon 3 Gruppen mit fast identischen Namen. Nach Dateinamen deduplizieren? Gleich oder ähnlich benannte Dateien haben längst nicht immer denselben Inhalt — manche sind Versionen aus verschiedenen Phasen.

Vorab vereinbart: **In dieser Runde wird nur analysiert und vorgeschlagen, nichts gelöscht.** Erst wenn die Beziehungen der Dateien geklärt sind, entscheidet die Eigentümerin, was archiviert, umbenannt oder behalten wird.

## Schritt eins: erst die Liste, dann mit dem Datei-Fingerprint echte Duplikate ermitteln

Zuerst den Ordner scannen und Name, Größe und Pfad der 9 Dokumente auflisten. In der Liste heißen 3 Dateien «Handbuch zur Compliance-Panorama 2026 für Social-Commerce», 2 heißen «Bibliothek viraler Texte und goldener Einstiegssätze» — eine Bearbeitung nur nach Dateinamen hätte beide Gruppen als Duplikate eingestuft:

```text
Prüfe für mich, welche Dateien in diesem Ordner echte Duplikate sind und welche nur
ähnlich heißen.
Schaue zuerst, ob die Inhalte identisch sind; zeige danach, worin sich Dateien mit
ähnlichem Namen, aber anderem Inhalt unterscheiden.
```

Der "Datei-Fingerprint" ist ein aus den Dateidaten berechneter **Hashwert**: Gleicher Hash bedeutet byte-identisch; verschiedener Hash sagt nur, dass die Datei verändert wurde — der Inhalt ist weiter zu vergleichen. Testergebnis:

- 3 × «Compliance-Handbuch» mit gleichem Hash — 3 Kopien derselben Datei;
- 2 × «Texte-Bibliothek» mit verschiedenem Hash — Inhalt ansehen;
- 2 × «Serum-Testskript» mit verschiedenem Hash — Versionsunterschied klären.

An diesem Punkt ist nur die erste Gruppe als exakte Duplikate bestätigt. **Ein Glück, dass nicht gleich nach Dateinamen aufgeräumt wurde.**

## Schritt zwei: bei verschiedenem Hash ansehen, wo der Inhalt abweicht

Doubao Work liest beide Dokumentgruppen mit verschiedenem Hash und vergleicht Thema, Struktur und Schlüsselabsätze — sind es zwei verschiedene Materialien oder Versionen desselben Inhalts?

- **Die beiden «Texte-Bibliotheken» richten sich an verschiedene Plattformen**: eine behandelt Douyin-Sprechtexte (Einstieg, Rhythmus, Ausdruck der Hosts), die andere Xiaohongshu-Bildtexte (Titel, Cover, Layout, Bildauswahl) — Inhalt und Zweck sind verschieden; beide behalten und nur per Umbenennung das Szenario kenntlich machen;
- **Die beiden «Testskripte» sind Versionen verschiedener Phasen**: die Creator-Sprechversion ist für die Kamera geeignet, trägt aber am Ende den Vermerk "ohne Prüfbericht und Reinheitsangabe, mit der Markenversion zusammenzuführen"; die Compliance-kommentierte Markenversion enthält Rechtsanforderungen, Prüfzertifikate, Preisregelung und Launchtermin, ist aber formeller formuliert — die Sprechversion behält den Ausdruck, die Kommentversion ergänzt die Compliance-Informationen; **keine von beiden ist die fertige Lieferung, beide zu behalten ist am sichersten**.

Nebenbei die Freigabe- und Referenzsituation prüfen: Hier sind es lokale Dateien ohne externe Links. Das gilt aber nur für den geprüften Bereich — stammen Dateien aus einer gemeinsamen Festplatte, einem Projektsystem oder einem Kollaborationsraum, ist vor dem Verschieben die tatsächliche Nutzerin zu fragen.

## Schritt drei: nach Unterschied in vier Klassen verfahren

| Klasse | Feststellung | Vorgehen |
| --- | --- | --- |
| Inhalt exakt identisch | gleicher Hash | Eine offizielle Version behalten (von der Eigentümerin bestätigt), die übrigen in ein wiederherstellbares Archiv verschieben |
| Phasenversionen desselben Projekts | Inhalte ergänzen sich, Vermerk "zusammenzuführen" | Beide behalten, mit "zusammenzuführen" markieren; nach Fertigstellung der Endversion neu bewerten |
| Gleichnamig, aber verschieden | verschiedene Plattform/Verwendung | Beide behalten, per Umbenennung unterscheiden (z. B. "Douyin-Sprechfassung" / "Xiaohongshu-Bildtextfassung") |
| Kein Duplikat | nur einmal vorhanden | unverändert lassen |

## Schritt vier: Probeliste, erst nach Bestätigung handeln

Doubao Work erzeugt zuerst eine **Probeliste**, ohne irgendetwas zu verschieben oder umzubenennen — je Datei die vorgeschlagene Aktion und die Begründung; Einwände direkt einarbeiten, erst nach vollständiger Bestätigung ausführen:

```text
Bringe die obige Analyse in eine Liste und schreibe je Datei klar auf, was damit geschehen
soll und warum.
Nach Bestätigung nur verschieben und archivieren, nichts direkt löschen.
Notiere für jede verschobene Datei den Originalpfad, damit sie sich später wiederherstellen lässt.
```

Verwendet wird ein **wiederherstellbares Archiv**: Der Ordner "00_Duplikat-Archiv_wiederherstellbar" nimmt die bestätigten Duplikate auf, endgültig gelöscht wird nichts; für jede verschobene Datei werden Originalpfad, Archivpfad, Größe und Änderungszeitpunkt protokolliert — bei der Wiederherstellung muss niemand aus dem Gedächtnis raten, wo die Datei war.

## Ergebnis

Von den 9 Dokumenten wanderten am Ende 2 exakte Duplikate ins wiederherstellbare Archiv, 7 blieben erhalten, ohne eine einzige endgültige Löschung: 3 Compliance-Handbücher → 1 behalten; 2 Testskripte → beide behalten und als zusammenzuführen markiert; 2 Texte-Bibliotheken → beide behalten, Umbenennungsvorschlag offen; Q2-Review-Bericht und Q3-Partner-Dashboard blieben unangetastet.

Wenn Sie künftig einen Ordner aufräumen: Trennen Sie zuerst **exakte Duplikate, Phasenversionen, gleichnamig-verschiedenen Inhalt** — nur byte-identische Kopien kommen auf die Archivliste. Ein Vergleich mehr erspart viel Ärger nach falschen Löschungen.

---

Weiter: [Projekt abgeschlossen: Dateien, Entscheidungen und Ergebnisse gemeinsam dokumentieren →](/de/doubaowork/case-project-archive)
