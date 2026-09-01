# Fortgeschritten: Computersteuerung, Spracheingabe und App-Snapshots

Über die Browser-Automatisierung hinaus kann QoderWork Ihre Benutzeroberfläche direkt bedienen, Ihnen zuhören und die aktive App ablichten – die vollständige Gestalt seiner Rolle als „KI-Sachbearbeiter".

> Offizielle Dokumentation: [computer-use](https://docs.qoder.com/zh/qoderwork/computer-use) ｜ [voice-input](https://docs.qoder.com/zh/qoderwork/voice-input)

## Computersteuerung (Computer Use)

QoderWork Aufgaben erledigen lassen, die zwingend in der grafischen Oberfläche bedient werden müssen. Vier Kernfähigkeiten:

- **Wahrnehmung des Bildschirms**: fortlaufende Screenshots während der Ausführung; erst wenn der vorige Schritt bestätigt ist, wird der nächste entschieden;
- **Maus- und Tastatursteuerung**: Klicken, Doppelklicken, Ziehen, Eingeben, Kurzbefehle – mit pixelgenauer Präzision;
- **Autonome Ausführung im Hintergrund**: kein Rauben des Fokus – Sie können ungestört weiterarbeiten;
- **App-übergreifende Abläufe**: dynamische Anpassung an Echtzeit-Feedback statt stures Abarbeiten eines Skripts.

**Aktivieren**: Erweiterungen → Connectors → Karte „Computersteuerung" aktivieren → Bestätigungsdialog → bei der ersten Freigabe zwei Systemrechte erteilen: **Bedienungshilfen** (Auslesen des UI-Elementbaums) und **Bildschirmaufnahme**. Ab macOS 14+, Windows ab v0.5.7.

**Transparente Ausführung**: Jede Aktion läuft in vier Phasen „Screenshot → Beschreibung der Aktion → tatsächliche Ausführung → Ergebnisbestätigung (erneut per Screenshot abgeglichen)" – alles im Aufgaben-Monitor sichtbar.

**Drei Ausführungsstrategien** (wichtig):

| Strategie | Verhalten | Geeignet für |
| --- | --- | --- |
| Jedes Mal nachfragen (Standard) | Jede Bedienung erst bestätigen | Unumkehrbare Vorgänge (E-Mail senden, Bestellung abschicken) |
| Automatisch ausführen | Fortlaufend ohne Rückfrage | Vertraute, wiederholte Abläufe |
| Deaktiviert | Bedienung abschalten | Wenn nur andere Fähigkeiten gebraucht werden |

Beispiel aus der Praxis (Alibaba-Ingenieur Xu Jingfeng):

```text
Ich fahre von Hangzhou nach Sanya in Urlaub: Vergleiche für mich Flugpreise auf Fliggy und Ctrip,
stelle mir dann einen Reiseführer zusammen, erzeuge daraus ein PDF
und trage die Termine in den Kalender meines Mac ein.
```

Ergebnis: Sanya-Reiseführer als PDF + Kalendereinträge mit detailliertem Zeitplan.

**Grenzen und Hinweise**:

- CAPTCHAs, SMS-Codes und Gesichtserkennung sind nicht machbar – hier müssen Sie manuell eingreifen;
- langsamer als ein reiner Dialog (jeder Schritt braucht Screenshot-Analyse); bei komplexen Oberflächen sinkt die Präzision;
- Zugriffsrechte gleichziehen mit Steuerungsrechten – die KI kann andere Apps „in Ihrem Namen" antreiben;
- vor dem Start Fenster mit Passwörtern schließen; während der Bedienung die gesteuerte App nicht selbst anfassen;
- offizielle Empfehlung: **bei Webaufgaben vorrangig die Browser-Automatisierung – schneller und präziser als die Computersteuerung**.

## Spracheingabe: Fn gedrückt halten und sprechen

Standardmäßig startet die Aufnahme, **solange Fn gehalten wird** – kein Icon nötig (Zugang unterwegs: Mikrofon-Symbol rechts am Eingabefeld). Fünf Schritte: halten → Anliegen sagen (keine strenge Zeitbegrenzung) → automatische Transkription erscheint im Eingabefeld → bei Bedarf bearbeiten → senden.

- nutzt die eingebaute Spracherkennung des Betriebssystems; die Sprache hängt von den installierten Sprachpaketen ab; Mikrofonrechte nötig;
- Nutzungsstrategie: „**per Stimme entwerfen, per Tastatur korrigieren**";
- ab v0.6.2 Live-Transkription; ab v0.6.6 automatisches Senden per Sprach-Kurzbefehl; ab v0.7.1 Stimmisolierung (in lauter Umgebung bleibt nur Ihre Stimme);
- Kombinationen: Sprache + Anhang (PDF anhängen und sagen „Kernpunkte zusammenfassen und To-dos auflisten"); nach der Auslieferung mündlich nachbessern („Titel noch etwas größer").

## App-Snapshot (Beta)

Vom „Problem sehen" zum „Fragen stellen" in einem Schritt: die beiden Optionstasten links und rechts gleichzeitig drücken (globaler Kurzbefehl frei konfigurierbar) und **Screenshot plus auslesbaren Text der vordersten App** als Gesprächskontext einfangen – ein Fehler auf dem Bildschirm und Sie wollen die KI fragen? Ein Kurzbefehl genügt. Benötigt unter macOS die Rechte für Bedienungshilfe + Bildschirmaufnahme (einmalig erteilen).

## Kurzbefehle im Schnellüberblick (macOS / Windows)

| Funktion | macOS | Windows |
| --- | --- | --- |
| Einstellungen öffnen | ⌘, | Ctrl+, |
| Neue Aufgabe | ⌘N | Ctrl+N |
| Alle Aufgaben durchsuchen | ⌘G | Ctrl+G |
| In aktueller Aufgabe suchen | ⌘F | Ctrl+F |
| Nachricht senden | ↵ oder ⌘↵ | Enter |
| Zeilenumbruch einfügen | ⇧↵ | Shift+Enter |
| Aufgabe schnell wechseln | ⌃Tab | Ctrl+Tab |

Dazu **QuickPick**: das globale Schnellaufgaben-Fenster (z. B. ausgelöst durch ⌥Leertaste oder Doppeltipp auf eine Modifier-Taste) – Aufgaben einsenden, ohne das Hauptfenster zu wechseln.
