# Aus einem Candlestick-Chart eine belegte Investment-Review-Runde machen

> Szenario: Ein Candlestick-Chart verleitet schnell zu Urteilen — «Aufwärtstrend, Ausbruch mit Volumen, Rücksetzer stabilisiert sich» sind schnell geschrieben, übersteigen aber womöglich schon das, was das Bild selbst belegen kann. Einen Screenshot in eine Investment-Review-Runde zu verwandeln, **in der jeder Satz Datenbelege hat**, ist die eigentliche Agent-Arbeit.

> ⚠️ Alle Inhalte dieses Kapitels dienen nur dem Lernen und Austausch und stellen keine Anlageempfehlung dar.

Der Fall zeigt einen vollständigen Agenten-Workflow: **VLM-Bilderkennung → automatischer Aufruf von Fach-Tools → mehrrollige tiefe Diskussion → strukturierter Bericht** — vier Etappen ohne einen manuellen Toolwechsel.

## Schritt eins: das Bild lesen · VLM liest den Chart

Ein A-Aktien-Tageschart mit deutlicher technischer Formation plus MACD-Indikator hochladen:

```text
Ich habe ein Tages-Candlestick-Chart und ein Technisches-Indikatoren-Bild (MACD) einer
A-Aktie hochgeladen.
Bitte agiere als professioneller Technischer Analyst und erledige Folgendes:
1. Aktieninformationen erkennen: Welche Aktie ist das? Wie hoch ist der aktuelle Kurs etwa?
2. Candlestick-Formation: Welche Formation zeigt sich zuletzt? Konkrete Entwicklung der
   letzten 5 Handelstage?
3. Gleitende Durchschnitte: Anordnung von MA5/MA10/MA20, zuletzt Golden Cross oder
   Death Cross?
4. MACD-Analyse: Lagebeziehung von DIF und DEA, Balkenentwicklung, Divergenz vorhanden?
Bitte gib einen Technik-Schnellbericht als Kombination aus Tabelle und Text aus.
```

Die Erkennung war im Test bemerkenswert präzise: bullische MA-Anordnung korrekt, MACD-Signale richtig, selbst der lange oberer Dochtschatten wurde beschrieben — aus einem Handy-Screenshot wurde ein vollständiger Technik-Überblick.

## Schritt zwei: die Truppen rufen · Zahlen heranholen

Danach einen Screenshot der Finanzdaten derselben Aktie hochladen:

```text
Ich habe zusätzlich einen Screenshot der aktuellen Finanzdaten dieser Aktie hochgeladen.
Bitte jetzt:
1. Zuerst alle Finanzkennzahlen im Screenshot erkennen
2. Dann zusammen mit der Technik-Analyse aus Runde eins eine vollständige A-Aktien-Analyse
   erstellen:
   - Technik-Gesamturteil (Richtung aus Candlestick, MA, MACD, KDJ)
   - Fundament-Gesamturteil (Umsatzwachstum, Ertragskraft, Bewertungsniveau)
   - Beobachtung Geldfluss (Volumenentwicklung)
   - Gesamtrating: starke Empfehlung / Empfehlung / neutral / zurückhaltend / meiden
3. Handlungsempfehlungen kurzfristig (1–2 Wochen) und mittelfristig (1–3 Monate)
4. Wichtige Unterstützungen und Widerstände klar auszeichnen
Bitte im Format eines professionellen Research-Reports ausgeben.
```

Es ruft automatisch einen A-Aktien-Analyse-Skill auf: Gesamtrating, Unterstützung und Widerstand, kurz- und mittelfristige Empfehlungen komplett — Tabellen, Punkte und Schlussfolgerungen klar geschichtet.

## Schritt drei: die Runde der Vier · das Investment-Privatboard

Der entscheidende Schritt des Ablaufs braucht nur eine Nachfrage:

```text
Sehr professionelle Analyse! Aber ich bin bei dieser Aktie noch unentschlossen.
Bitte starte jetzt ein Privatboard: Ich möchte vier Berater diskutieren lassen, ob sich
diese Aktie als Anlage eignet:
- Buffett: aus Sicht des Value-Investments (innerer Wert, Burggraben, Sicherheitsmarge)
- Musk: aus Sicht technologischer Trends und disruptiver Innovation
- Bill Gates: aus Sicht von Geschäftsmodell und Branchenstruktur
- Jobs: aus Sicht von Produktstärke und Nutzererlebnis
Diskussionsregeln:
1. Jeder Berater äußert zuerst seine unabhängige Sicht
2. Danach Kreuzverhör: die Berater fordern gegenseitig die Argumente heraus
3. Zum Schluss gibt jeder mit einem Satz seine Endempfehlung "Kaufen/Halten/Verkaufen"
4. Du als Moderator des Privatboards fasst die vier Meinungen zu einem finalen
   Umsetzungsplan zusammen
Bitte diskutiere auf Basis der Analysedaten der ersten beiden Runden — die Berater sollen
mit Zahlen argumentieren.
```

Beachten: **Niemand hat manuell «Privatboard-Skill aufrufen» angeordnet** — das Modell entscheidet selbst, welches Werkzeug und welche Daten der nächste Schritt braucht, und orchestriert sie. Das ist der Kernwert von Agent-Fähigkeit: mehr als nur passives Antworten.

Die vier virtuellen Berater treten nacheinander auf — entscheidend ist, dass sie **nicht ins Blaue reden**: Jeder zitiert reale Daten der vorherigen Runden. Buffett findet «ein gutes Unternehmen, aber kein guter Preis», Musk hält dagegen: «Man kann nicht mit dem Rückspiegel fahren»; Gates ergänzt Branchendaten, Jobs kommt über die Produktkraft zu einem anderen Urteil — vier streiten heftig, aber jeder Satz trägt Daten. Diese «mit Daten diskutieren»-Choreografie verlangt vom Modell **verkettete Multi-Skill-Aufrufe, kontextübergreifende Weitergabe und Rollenkonsistenz** gleichzeitig — ein Glied reißt, und alles kippt.

Zum Schluss integriert das Modell die vier Positionen von selbst zum Bericht; es kann sogar einen Magazin-Layout-Skill aufrufen für «eine Seite Zusammenfassung (zum schnellen Überfliegen) + ausführliche Analyse (zum Archivieren)», mit Risikohinweisen, Aktionsplan und PositionsEmpfehlung.

> Die in diesem Fall genutzten Skills (A-Aktien-Analyse, Privatboard u. a.) sind auf GitHub Open Source: [isjiamu/jiamu-skills](https://github.com/isjiamu/jiamu-skills). Derselbe Ansatz lässt sich auf jede Aktienanalyse-Plattform übertragen; Doubao Work unterstützt ihn ebenso.

---

Damit enden die Finanzszenarien. Zurück zum Nachschlageteil: [Häufige Prompt-Vorlagen für Doubao Work →](/de/doubaowork/ref-templates)
