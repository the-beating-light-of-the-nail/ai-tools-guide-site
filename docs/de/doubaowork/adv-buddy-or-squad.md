# Arbeitspartner oder Arbeits-Squad?

Wer „Arbeitspartner" und „Arbeits-Squad" zum ersten Mal sieht, fragt sich: Beide können Aufgaben annehmen – warum zwei Varianten? Die Funktionsbeschreibungen allein klären das nicht. Deshalb hier der direkte Test mit **zwei im Arbeitsalltag häufigen Dingen**:

- Erstens: aus einer Verkaufsdetailliste ein August-Retrospektive erstellen;
- Zweitens: aus einem Produkt-Brief das komplette Paket für WeChat Official Account, Xiaohongshu und WeCom-Gruppe erstellen.

Das Fazit vorweg: **Hat eine Aufgabe eine klare fachliche Rolle – etwa Datenanalyse, PPT-Erstellung, Recruiting – dann der „Arbeitspartner". Muss eine Aufgabe mehrere Stationen durchlaufen – Planung, Text, Design, Prüfung – dann der „Squad".**

## In 30 Sekunden zwischen vier Optionen entscheiden

| Was Sie vor sich haben | Was besser passt | Beispiel |
| --- | --- | --- |
| Kurz nachfragen, einen Absatz umformulieren | Einfach neue Aufgabe starten | E-Mail überarbeiten, Gliederung erstellen |
| Ein festes Verfahren, das immer wieder gebraucht wird | Skill | Wochenbericht mit festem Format, einheitlicher Markenstimme |
| Eine fachliche Rolle, die die Sache zu Ende verantwortet | Arbeitspartner | Datenanalyst, PPT-Experte |
| Mehrere Rollen mit Arbeitsteilung und Abhängigkeiten | Arbeits-Squad | Produktlaunch, Marketingkampagne, Content-Matrix |

Der Zugang liegt links unter „Skills · Konnektoren · Partner", dort zu „Arbeitspartner · Squad" wechseln. Ein praktischer Hinweis: Nur Karten mit der Aufschrift „Arbeits-Squad" sind echte Mehrpersonen-Kooperation; die meisten anderen Karten sind einzelne Arbeitspartner.

## Variante eins: einen fachlichen Partner suchen, der die Aufgabe zu Ende verantwortet

Der häufigste Fall, die Verkaufs-Retrospektive: Das Material ist eine CSV mit 8 Zeilen (Datum, Stadt, Kanal, Produkt, Umsatz, Rückerstattungen, Bestellungen). Wählen Sie den „Datenanalysten" – weil alle Kernhandlungen dieser Aufgabe in ein und demselben Fachgebiet liegen: Daten prüfen, Kennzahlen berechnen, Ausreißer finden, Empfehlungen geben.

Der Prompt sollte nicht nur „Analysiere das mal" lauten – zu vage, das Ergebnis ist dann mit hoher Wahrscheinlichkeit unbrauchbar. Kopieren Sie direkt die folgende Fassung und tauschen Sie Dateinamen und Monat aus:

```text
【Materialhinweis】 Laden Sie Ihre eigene Verkaufsdetailliste hoch oder ersetzen Sie den folgenden Dateinamen durch die tatsächliche Datei.

Ich bin der Geschäftverantwortliche und benötige eine Retrospektive der Verkaufszahlen für August 2026. Bitte lies die von mir hochgeladene Datei 《销售明细.csv》.

Bearbeite die Aufgabe nach der fachlichen Methode des Datenanalysten:
1. Prüfe zuerst Felder, Nullwerte, Duplikate und offenkundige Ausreißer; verändere die Originaldatei nicht.
2. Berechne Umsatz, Rückerstattungen, Netto-Umsatz, Rückerstattungsquote und Bestellungen, gegliedert nach Stadt, Kanal und Produkt.
3. Finde die 3 wichtigsten Fragen; jede mit klarer Zahlenbeweis und Berechnungsgrundlage.
4. Gib Handlungsempfehlungen für September; jede Empfehlung muss sich auf die obigen Daten stützen.
5. Mache zum Schluss einen Zahlenabgleich; nicht klärbare Punkte markiere als „offen".

Endlieferung: ein herunterladbarer Markdown-Bericht mit Datenqualitätsprüfung, Kernkennzahlen, Ausreißer-Diagnose, Handlungsempfehlungen und Abnahmetabelle.

Erzeuge nur neue Dateien; verändere die Eingabedaten nicht; lade nichts hoch und veröffentliche nichts.
```

Drei Punkte in diesem Prompt sind besonders wichtig:

1. **„Wie gerechnet wird und worauf geschaut wird" klar schreiben**, damit das Modell nicht selbst die Messgröße wechselt;
2. **Zu jedem Urteil Zahlenbeweis verlangen**, damit wenige leere Behauptungen bleiben;
3. **„Originaldatei nicht ändern, nicht hochladen, nicht veröffentlichen" festschreiben**, damit es nicht einen Schritt mehr tut als gewünscht.

### Was tun, wenn lokale Dateien nicht gelesen werden

Eine sehr reale Falle: Anfangs wurde ein lokaler Mac-Pfad angegeben; der Partner läuft in seiner eigenen Aufgabenumgebung und kann ihn nicht lesen – er hält an und bittet um die Datei. **Am sichersten ist es, die CSV direkt hochzuladen**; bei sehr kleinen Dateien können Sie den CSV-Inhalt auch in „Zusatzinformationen" einfügen und weiterlaufen lassen.

### Was er geliefert hat

Aus diesen 8 Datenzeilen errechnete der Datenanalyst: Gesamtumsatz 775.000 Yuan, Rückerstattungen 36.000 Yuan, Netto-Umsatz 739.000 Yuan, 266 Bestellungen, Rückerstattungsquote gesamt 4,65 %; er wies darauf hin, dass die Rückerstattungsquote in Peking 13,64 % erreichte und die Quartalskarte höher lag als die Jahreskarte, und nahm „Datenmenge sehr klein, 30.–31. August fehlen" in die Einschränkungen auf. Die Eingabedatei wurde nicht verändert.

Genau da liegt der Wert des Arbeitspartners: Sie übergeben die Aufgabe einer Rolle mit Fachverstand; sie arbeitet nach in der Branche bewährten Verfahren und meldet sich, wenn Material fehlt.

## Variante zwei: die Aufgabe überspannt mehrere Gewerke – der Arbeits-Squad

Schwieriger: Ein KI-Meeting-Assistent namens „QingHuiJi" soll veröffentlicht werden; verfügbar ist nur ein Produkt-Brief, am Ende brauchen Sie drei Texte – WeChat Official Account, Xiaohongshu und WeCom-Gruppe – dazu visuelles Material, ein 3-Tage-Schedule und eine Risikoliste.

Stopft man eine solche Aufgabe in eine einzige Rolle, entstehen die Texte zwar, aber Faktenlage, Plattformunterschiede und visuelle Passung geraten leicht durcheinander. Also im Markt nach dem „Squad für virale Content-Erstellung" suchen. Nach dem Aufruf des Squads sollte der Prompt eines klar sagen: **erst die Rollenverteilung, dann der Start**:

```text
【Materialhinweis】 Laden Sie Ihren eigenen Produkt-Brief hoch oder ersetzen Sie den folgenden Dateinamen durch die tatsächliche Datei.

Wir wollen einen KI-Meeting-Assistenten veröffentlichen; bitte lies den von mir hochgeladenen 《AI会议助手发布Brief.md》.

Bitte erarbeitet das Veröffentlichungspaket als Squad-Kooperation. Vor dem eigentlichen Start teile mir mit:
1. Welche Rollen sind beteiligt;
2. Wofür jede Rolle zuständig ist, welche Eingabe sie nutzt und was sie liefert;
3. Wer die einheitliche Faktenlage verantwortet und wer die Endprüfung übernimmt;
4. Welche Informationen ich bestätigen muss.

Nach Bestätigung der Rollenverteilung erstellt:
- eine einheitliche Kernbotschaft;
- je einen bearbeitbaren Text für WeChat Official Account, Xiaohongshu und WeCom-Gruppe;
- eine Liste der visuellen Materialien;
- einen 3-Tage-Veröffentlichungsplan;
- eine Faktenprüfung und Risikoliste.

Alle Fakten stammen ausschließlich aus dem Brief. „14 Tage Testphase", „erste 50 Teams" und die aktuellen Funktionseinschränkungen müssen erhalten bleiben;
Erfinde keine Kundenbeispiele, Zahlen oder Nutzerstimmen.
Erzeuge nur lokale Entwürfe; nichts automatisch veröffentlichen, keine Nachrichten senden.
```

Der Squad schlug zuerst vier Rollen vor:

| Rolle | Zuständig |
| --- | --- |
| Kreativdirektor (Kapitän) | Einheitliche Faktenlage, abschließende Konsistenzprüfung und Review |
| Viraler Marketing-Planer | 3-Tage-Schedule und Risikoliste |
| Viraler Content-Erstellungs-Experte | Kernbotschaft und bearbeitbare Texte für die drei Plattformen |
| KI-Illustrator | Nach Festlegung der Kernbotschaft Key-Visual und Liste der visuellen Materialien |

Planer und Content-Experte können parallel starten; der KI-Illustrator wartet auf die Kernbotschaft; am Ende prüft der Kreativdirektor alle Ergebnisse zusammen. In der Aufgabenliste sieht man den Status jeder Teilaufgabe: wer gerade arbeitet, wer auf Vorgänger wartet – das ist der Kernunterschied zwischen „Squad" und „ein Partner".

### Was Sie dem Squad vor dem Start noch mitgeben sollten

Der Squad fragte auf Basis des Briefs nach sechs Punkten: Startdatum, Bildstil, Kontonamen, Marken-Slogan, Bezugsweg für die ersten Teams. Bei der ergänzenden Bestätigung schreiben Sie so:

```text
Rollenaufteilung bestätigt, bitte weiter ausführen.

Der Zeitplan beginnt am 1. September; für die Optik ein puristischer Blau-Grau-Tech-Look; ein Slogan liegt nicht vor;
Kontonamen nicht in die Texte schreiben; wie die „ersten 50 Teams" gewonnen werden, markiere als „offen" – nichts selbst erfinden.

„14 Tage Testphase", „erste 50 Teams" und die Funktionseinschränkungen weiterhin erhalten.
Keine erfundenen Kundenbeispiele, Zeitersparnis-Zahlen oder 100-%-Genauigkeitsversprechen. Nur lokale Entwürfe; nichts veröffentlichen, keine Nachrichten senden.
```

Was vorläufig keine Antwort hat, bleibt direkt auf „offen". Wer für volleren Text einen QR-Code, eine URL oder einen Anmeldeweg errät, erzeugt später mehr Nacharbeit.

### Erste Version mangelhaft? Sofort nachbessern lassen

Ein typisches Problem trat auf: In der ersten Version des Content-Experten stand am Schluss „alle Fakten stammen aus dem Brief" – doch weiter oben hatte er „1 Stunde Aufbereitung für ein 30-Minuten-Meeting", „4–5 Meetings pro Woche", „14 Tage kostenlos testen" ergänzt und mit „Schwestern" eine erlebte Erzählstimme vorgetäuscht – nichts davon stand im Brief. **Verlassen Sie sich bei der Abnahme nie auf die Selbstauskunft, prüfen Sie selbst nach.** Listet die Probleme einzeln auf und lasst neu generieren:

```text
Bitte entferne alle im Brief nicht enthaltenen persönlichen Erfahrungen und Zahlen, z. B. „1 Stunde Aufbereitung für ein 30-Minuten-Meeting", „4–5 Meetings pro Woche", „nach dem Ausprobieren habe ich viel Zeit gespart", und ändere „14 Tage kostenlos testen" einheitlich in „14 Tage Testphase".

Keine scheinbar erlebten Formulierungen wie „Schwestern"; interaktionen, die der Brief nicht bestätigt, nicht als gesichert darstellen.
Gib die drei Plattformtexte neu aus und mache eine Fakten-Selbstprüfung Satz für Satz gegen den Brief.
```

Nach der Nachbesserung ließ der Kreativdirektor eine Gesamt-Abnahme laufen; am Ende standen die überarbeiteten Texte für drei Plattformen, drei Key-Visuals mit Materialliste, der 3-Tage-Plan und die Risikoliste.

Eine Grenze muss ehrlich benannt werden: Der Squad hat weder das WeChat Official Account noch Xiaohongshu noch Gruppennachrichten veröffentlicht – aber **die Ergebnisübersicht wurde in ein Feishu-Cloud-Dokument aufgenommen**. Wenn Materialien Privates oder Geschäftsgeheimnisse betreffen, klären Sie vor dem Start Speicherort und Berechtigungen und prüfen Sie danach, was eigentlich erzeugt wurde.

## Nach zwei Durchläufen: vier Erkenntnisse

1. Liegt die Aufgabe in einem Fachgebiet, zuerst einen **Partner** suchen;
2. Überspannt die Aufgabe mehrere Gewerke mit Abhängigkeiten, den **Squad** nehmen;
3. Ein Dateipfad ist nur die Adresse auf Ihrem Rechner – kann der Partner ihn nicht lesen, **Datei hochladen** oder den Inhalt beilegen;
4. In den Prompt **Faktenquellen, Deliverables und Handlungsgrenzen** schreiben und am Ende die verantwortliche Rolle prüfen lassen.

Ist das Werkzeug richtig gewählt, muss der Prompt gar nicht geheimnisvoll klingen. Wer was verantwortet, mit welchem Material gearbeitet wird, was geliefert wird und was verboten ist – ist das klar gesagt, wird die Aufgabe viel stabiler.

Früher saß man bei einem Produktlaunch mit einem Dutzend offener Punkte im Kopf: Wer schreibt den Artikel, wer macht die Bilder, was muss die Plattform angepasst werden, stimmen die Zahlen, wer macht den Abschluss – in kleinen Teams fällt all das auf dieselbe Person, und das Erschöpfendste ist das ständige Rollenwechseln. Der echte Nutzen von Arbeitspartnern und Squads ist, **die Verantwortung wieder auf den Tisch zu legen**: Wer übernimmt diesen Schritt, worauf wartet der nächste, wer prüft am Ende. Beginnen Sie mit einer echten, klar begrenzten Aufgabe, laufen Sie sie einmal durch – und Sie wissen beim nächsten Mal von selbst, ob ein Partner genügt oder ein Squad her muss.

---

Wie man einen Squad von Null aufruft: [Multi-Agent (Arbeits-Squad) in der Praxis →](/de/doubaowork/adv-multi-agent)
