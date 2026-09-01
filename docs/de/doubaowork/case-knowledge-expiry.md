# Welches Wissen abgelaufen ist — und den Owner automatisch zur Bestätigung finden

> Szenario: Eine Wissensbasis löst das Aufbewahren von Informationen, garantiert aber nicht, dass das Material noch gilt. Ein Reiseführer von vor Jahren — Eintrittspreise, Öffnungszeiten, Verkehrsverbindungen und Buchungsregeln können sich alle geändert haben. **Wer die Prüfung überspringt und es einfach nutzt: Je detaillierter das Material, desto glaubwürdiger wirken veraltete Schlüsse.**

Beispiel Reiseplanung: In der Wissensbasis liegt ein «Shanghai-Reiseführer PDF» von 2013–2014 mit «Oriental Pearl Tower Eintritt 100 CNY, Metro nur 11 Linien» — 2026 kostet das Kombi-Ticket für zwei Kugeln 199 CNY, die Metro zählt über 20 Linien; der Kontakt Xiang Ming teilt einen «Shanghai-Fallen-Guide (Ausgabe 2026)», dem zufolge der im alten Führer empfohlene Snack-Platz am Chenghuang-Tempel «teuer und schlecht» ist. Alles von Hand zu prüfen kostet mindestens zwei, drei Stunden.

## Der Prompt: die Prüfungsanforderungen hineinschreiben

Kurzversion (Reisezeit, Ziel und Ausgabeformat nennen):

```text
Ich fahre nächsten Freitag nach Shanghai. Bitte plane mir eine 3-Tage-2-Nacht-Reise.
Nutze die einschlägigen Informationen aus meinem Feishu (Wissensbasis, Chats) und stelle
die Reise auf mich zu; gib das Ergebnis als HTML aus. Bitte Quellen kennzeichnen und
sorgfältig prüfen, ob Informationen abgelaufen sind.
```

Die Vollversion ergänzt Materialrahmen, Prüfungsanforderungen, Konfliktbehandlung und Lieferkriterien:

```text
Ich fahre nächsten Freitag nach Shanghai. Bitte plane mir eine 3-Tage-2-Nacht-Reise.
Beziehe die Reiseführer meiner Feishu-Wissensbasis ein (Wiki-Link: [Link]) sowie die vom
Kontakt Xiang Ming geteilte Datei "Shanghai-Fallen-Guide (2026).xlsx".

Anforderungen:
1. Lies zuerst Wissensbasis und Kontaktdatei und erkenne, welche Informationen abgelaufen
   sind (Eintrittspreise, Öffnungszeiten, Metrolinien) und welche weiterhin gelten.
2. Abgelaufene oder widersprüchliche Informationen separat kennzeichnen und beim
   Materialgeber bzw. Verantwortlichen (Owner) nachfragen — nicht still ersetzen.
3. Gegen Echtzeitinformationen 2026 (Wetter, Hochgeschwindigkeitszüge,
   Buchungsauflagen der Sehenswürdigkeiten, laufende Ausstellungen) prüfen und
   aktualisieren.
4. Einen HTML-Reiseplan ausgeben mit Tagesabläufen, Verkehr, Unterkunft, Essen, Budget
   und Schlechtwetter-Alternativen.
5. Jede Schlüsselinformation mit Quelle (Wissensbasis / Xiang Ming / Live-Netz) und
   Prüfzeitpunkt versehen.
6. 48 Stunden vor Abflug mich erinnern, Wetter und aktuelle Ankündigungen erneut zu prüfen.
```

## Wie es vorgeht

1. **Zuerst die Quellen sichern**: den historischen Reiseführer der Feishu-Wissensbasis, den geteilten Fallen-Guide und einschlägige Chats lesen — zuerst klären, welche Materialien überhaupt vorliegen, damit die Planung nicht an einem einzigen Führer hängt;
2. **Veränderliche Informationen gezielt prüfen**: Eintrittspreise, Öffnungszeiten, Metrolinien, Zugverbindungen, Buchungsregeln, laufende Ausstellungen; bei Widersprüchen zwischen altem Führer und neuem Guide **beide Lesarten samt Quellen behalten**, nicht still ersetzen; Wetter, Verbindungen und Ankündigungen online verifizieren;
3. **Erst nach der Zusammenführung den Plan bauen**: die weiterhin wertvollen Routenerfahrungen des alten Führers + die konkreten Empfehlungen des Guides 2026 + die bei der Abfrage ermittelten Wetter- und Verkehrsinformationen in ein und demselben Plan.

## Wie das Ergebnis aussieht

Der **Kerninformations-Blick** prüft zuerst das Gerüst: 4.–6. September, 3 Tage 2 Nächte; Hinflug G256 (431 CNY), Rückflug G3092 (390 CNY); Unterkunft am People's Square oder Nanjing East (Linien 1/2/8, Bund zu Fuß); pro Person rund 2.500–3.200 CNY. **Dreitägige Hauptlinie**: Tag 1 Ankunft → Nanjing-Straße → Bund bei Nacht; Tag 2 Shanghai-Museum → Yu-Garten → 2-CNY-Fähre über den Fluss → Lujiazui; Tag 3 Wukang-Straße → Anfu-Straße → Shanghai-Küche → Xintiandi → Rückreise.

Das Ergebnis erläutert auch die Nutzung der Materialarten, damit sich jede Empfehlung zurückverfolgen lässt: Die **Preise und Eintrittsgelder des PDFs von 2013 sind abgelaufen**, doch **Routenlogik und Esskultur bleiben wertvoll**; von Xiang Mings 48 Empfehlungen wurden die passenden in den Tagesplan eingearbeitet (2-CNY-Fähre, Aussicht am Nord-Bund, Meidung der überlaufenen Influencer-Restaurants). Die Live-Abfrage ergab an allen drei Tagen leichten Regen; der Plan enthält mit dem Pudong Art Museum und dem Ost-Standort des Shanghai-Museums Schlechtwetter-Alternativen und erinnert daran, 48 Stunden vor Abflug Wetter und Ankündigungen erneut zu prüfen.

Der vollständige **HTML-Reiseplan** bringt Zeitblöcke, Wege, Buchungen, Restaurantempfehlungen, Budget und Regen-Alternativen auf eine Seite — die Fallen-Hinweise hängen an den jeweiligen Sehenswürdigkeiten, Wegen und Restaurants samt Quellenangabe: Wer liest, weiß, worauf eine Empfehlung beruht, und kann bei Änderungen zum Ausgangsmaterial zurück.

## Erkenntnis

Das Beispiel zeigt eine **Methode zur Behandlung abgelaufenen Wissens**: das weiterhin Wertvolle alter Materialien behalten, veränderliche Informationen neu prüfen, bei Quellenkonflikten Beleg und Bestätigungseingang offenhalten (den Materialgeber/Owner fragen statt still zu ersetzen). Nur so aufbereitet, liefert die Wissensbasis laufend brauchbare Informationen für aktuelle Aufgaben. Für die echte Reise lassen sich HoteltBudget, Ernährungstabus, Gehbelastung und Pflicht-Sehenswürdigkeiten ergänzen, um die Auswahl weiter einzuengen.

---

Damit enden die Wissensmanagement-Szenarien. Weiter: [E-Commerce: Vom Produkt-Freisteller zur kompletten Bildserie →](/de/doubaowork/case-product-images)
