# Geplante Aufgaben richtig anlegen für stabile Ergebnisse

Geplante Aufgaben eignen sich am besten für Arbeit, die **sich wiederholt, stabilen Regeln folgt und deren Ergebnis gut abzunehmen ist**: Nachrichten-Briefings, Wochenberichtsentwürfe, Wettbewerber-Monitoring. Umgekehrt gehören Aktionen wie Zahlungen, Veröffentlichungen und Datenlöschungen nicht in einen unbeaufsichtigt laufenden Ablauf.

## Zwei Wege, eine Aufgabe anzulegen

**Manuell konfigurieren**: links „Geplante Aufgaben" öffnen → Neu, und Titel, Aufgabenbeschreibung, Zeitzyklus und Ausführungsumgebung eintragen.

**Per Dialog erstellen**: Doubao Work einfach im Chat bitten, die Aufgabe anzulegen, zum Beispiel:

```text
Recherchiere jeden Tag um 8:30 Uhr die wichtigsten Entwicklungen zu KI-Produkten und Agenten der letzten 24 Stunden.
Behalte höchstens 8 Einträge; fasse dasselbe Ereignis zusammen; jeder Eintrag enthält Zeitpunk, zwei Quellen, eine Einschätzung der Auswirkungen und einen Ansatz zum Weiter Schreiben.
Wenn die Quellen nicht ausreichen oder weniger als 5 gültige Einträge vorliegen, erzeuge kein förmliches Briefing, sondern melde die Fehlerursache und einen Wiederholungsvorschlag.
Fülle nicht mit alten Nachrichten auf; nichts automatisch senden oder veröffentlichen.
```

## Fünf Prüfungen vor dem Speichern

**Zeitraum, Zeitzone, Datenquellen, Fehlerbehandlung, Ausführungsumgebung.** Bei Ausführung auf dem „lokalen Computer" muss zusätzlich sichergestellt sein, dass der Rechner zur Laufzeit eingeschaltet und online ist.

## Drei Regeln für stabilen Betrieb

1. **Erst manuell durchlaufen, dann planen**: die erste Ausführung manuell in einer normalen Arbeitsaufgabe erledigen und erst nach gültigem Ergebnis als geplante Aufgabe speichern;
2. **Regelmäßig stichprobenartig prüfen**: nach Inbetriebnahme die Ergebnisse immer wieder ansehen; ändern sich die Regeln, den Prompt anpassen;
3. **Zeitig aufräumen**: eine schlechte alte Aufgabe nicht ein halbes Jahr still im Hintergrund laufen lassen – das verbrennt nur Token.

## Praxis: jeden Morgen ein brauchbares Nachrichten-Briefing

Bei der Nachrichtenbündelung gibt es zwei Gefahren: zu viele Informationen, sodass Wichtiges untergeht; und zu laute Benachrichtigungen, sodass irgendwann alle sie als Hintergrundrauschen ausblenden. Einmal erfolgreich durchlaufen und als geplante Aufgabe gespeichert, kommt das Briefing zur festen Zeit in konsistenter Struktur.

**Ablaufdesign** (funktioniert für Nachrichten, Open-Source-Projekte, Paper, Richtlinien, Wettbewerber):

1. **Sammeln**: Thema, Zeitraum, Quellenbereich und Sprache festlegen;
2. **Deduplizieren**: dasselbe Ereignis zusammenführen, Original- und Autoritätsquellen behalten;
3. **Filtern**: Relevanz-, Wichtigkeits- und Mengengrenzen setzen;
4. **Zusammenfassen**: was passiert ist, warum es wichtig ist, für wen es relevant ist;
5. **Prüfen**: zu Kernfakten Link, Erscheinungsdatum und offene Punkte aufbewahren;
6. **Ausgeben**: festes Format verwenden, um das tägliche Neu-Sortieren zu vermeiden.

**Erst einmal testen** (nicht gleich beim ersten Mal auf Automatik stellen):

```text
Bitte stelle die wichtigen Nachrichten der letzten 24 Stunden zum Thema 【Thema】 zusammen.
Verwende nur öffentlich zugängliche Quellen, deren Original-Link erhalten bleibt.

Höchstens 10 Einträge, jeder enthält:
- Titel
- Zusammenfassung mit höchstens 100 Wörtern
- Warum der Eintrag wichtig ist
- Quelle, Erscheinungsdatum und Link

Inhalte ohne bestätigte Quelle oder Datum kommen unter „zu prüfen" – nichts erfinden.
```

**Nach Bestehen als geplante Aufgabe speichern**: links „Geplante Aufgaben" → „Neu", Titel, vollständige Aufgabenbeschreibung, Wiederholungszyklus, konkrete Uhrzeit, Modell und Ausführungsumgebung eintragen. Bei „lokaler Computer" muss der Rechner zur Laufzeit eingeschaltet und online sein; zuerst einige Male mit niedriger Frequenz beobachten, dann nach Bedarf anpassen.

Soll das Ergebnis in eine Feishu-Gruppe, per E-Mail oder in ein anderes System gesendet werden, **muss zuerst bestätigt werden, dass der jeweilige Konnektor autorisiert ist**; in die Aufgabenbeschreibung gehören Sendeadresse, Wiederhol-Sendeprüfung und die Anforderung einer manuellen Bestätigung. Ohne Konnektor das Ergebnis zunächst in der Doubao-Work-Aufgabe belassen und keine automatische Zustellung zusagen.

## Zwei sofort übernehmbare Vorlagen

**GitHub-Projekt-Briefing**

```text
Stelle jeden Tag die Open-Source-KI-Projekte der letzten 24 Stunden zusammen, die Aufmerksamkeit verdienen.
Nutze in erster Linie Projekt-Repositorys, Release Notes und offizielle Dokumentation; behandle Zweitberichte nicht als einzige Quelle.
Gliedere nach „neue Projekte, wichtige Updates, Entwickler-Tools", höchstens 8 Einträge.
Jeder Eintrag enthält Repository-Link, Hauptzweck, letzte Aktualisierung, Lizenz und Zielgruppe.
Markiere „zu prüfen", wenn Aktivität oder Lizenz nicht bestätigt werden kann.
Empfiehl nichts allein nach Star-Zahl und installiere oder führe keinen Code automatisch aus.
```

**KI-Branchen-Briefing**

```text
Stelle jeden Tag die Entwicklungen der letzten 24 Stunden zu KI-Modellen, Produkten, Open Source, Paper und Branche zusammen.
Höchstens 8 Einträge, nach Wichtigkeit sortiert.
Jeder Eintrag enthält Ereignis-Zusammenfassung, betroffene Seiten, Originalquelle, Erscheinungsdatum und Link.
Bei großen Modell-Releases sowie Preis- oder Richtlinienänderungen zuerst offizielle Quellen zitieren und mit Zweitberichten abgleichen.
Dasselbe Ereignis nicht doppelt; bei widersprüchlichen Informationen beide Versionen nebeneinander nennen.
Schließe mit „die drei großen Dinge des Tages" und „weiter zu prüfen" ab.
```

---

Nächster Schritt: wann lohnt sich ein ganzes KI-Team – [Arbeitspartner oder Arbeits-Squad? →](/de/doubaowork/adv-buddy-or-squad)
