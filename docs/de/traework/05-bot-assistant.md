# Office-Assistent: Aufgaben direkt in Feishu und WeChat stellen

Der Office-Assistent (Bot Assistant) lässt Sie **Arbeiten direkt in Ihren gewohnten Chat-Tools erledigen**: Aufgaben stellen, Fortschritt prüfen, Ergebnisse empfangen – im Einzel- oder Gruppenchat. Früher haben Sie Arbeitsmaterial in die KI getragen, jetzt kommt die KI direkt in Ihren Arbeitsbereich.

> Offizielle Dokumentation: [docs.trae.cn/work_bot-assistant](https://docs.trae.cn/work_bot-assistant)

## Mit Feishu verbinden

1. In der linken Navigationsleiste auf „Office-Assistent“ klicken;
2. Im Verwaltungspanel rechts neben Feishu auf „Verbinden“ klicken – ein QR-Code erscheint;
3. Mit der Feishu-App auf dem Handy den Code scannen; es öffnet sich „Feishu-Agenten-App erstellen“ – auf „Jetzt erstellen“ tippen;
4. Der Anleitung folgen und die App erstellen (Avatar und Name sind anpassbar, Standardname TraeWork); nach dem Erstellen wird sie automatisch genehmigt und veröffentlicht;
5. Auf „App öffnen“ klicken – sie erscheint in der Feishu-Nachrichtenliste und ist auch im Feishu-App-Center zu finden.

## Mit WeChat verbinden

1. Ebenfalls im Verwaltungspanel des „Office-Assistenten“ den QR-Code anzeigen;
2. Mit WeChat auf dem Handy den Code scannen; es öffnet sich „OpenClaw mit WeChat verbinden“;
3. Auf „Verbinden“ tippen – das Plugin „WeChat ClawBot“ wird automatisch aktiviert und in die Chatliste aufgenommen (auch im WeChat-Center „Funktionen“ zu finden).

Für WeCom und DingTalk gilt offiziell „bald verfügbar“.

## So wird er genutzt

- **Einzelchat**: Der App direkt eine Nachricht senden, z. B. „Was steht in diesem Dokument im Wesentlichen drin?“;
- **Gruppenchat**: `@TraeWork` + Nachricht, dann arbeitet sie in der Gruppe;
- Nach Erhalt des Ergebnisses können Sie nachhaken, bis Sie zufrieden sind.

Vier häufige Szenarien (Prompts zum direkten Übernehmen):

```text
[Dokument zusammenfassen] Schau dir dieses Dokument an und sag mir, worum es im Kern geht.

[Wochenbericht erstellen] Optimiere meine Arbeitszusammenfassung zu einem Wochenbericht mit den Abschnitten
Fazit dieser Woche, wichtige Fortschritte, Planung nächste Woche;
das Fazit in einem Satz mit dem meldebaren Ergebnis der Woche; 3-5 wichtige Fortschritte mit klarer Angabe,
was getan wurde und welche Ergebnisse es brachte; 2-3 Punkte zur Planung mit den nächsten Schritten
und dem benötigten Support.

[E-Mail schreiben] Schreibe eine E-Mail an Herrn Zhao vom Lieferanten: Frage nach dem Lieferstatus
der letzten Bürosystem-Lieferung. Geplant war der 10. August, aber es gibt bisher keine Sendungsverfolgung.
Bitte um Rückmeldung mit voraussichtlichem Termin bis heute Feierabend.
Ton höflich und klar, nicht fordernd.

[In Feishu schreiben] Schreibe den soeben erstellten Wochenbericht in ein Feishu-Dokument
und sende ihn in die Berichtsgruppe.
```

> Die Szenarien sind adaptiert aus einem Praxistest des TraeWork-Office-Assistenten ([K-Sister Research Society](https://zhuanlan.zhihu.com/p/2071317142574724109)); der Wochenbericht war dort in rund einer Minute fertig.

## Einschränkungen, die man kennen muss

1. **Nur in der Desktop-Version verfügbar**; die erstmalige Verbindung muss dort gestartet werden (danach klappt es auch mobil);
2. **Im Gruppenchat kann nur der Ersteller den Office-Assistenten nutzen**; andere Mitglieder sehen nur den Verlauf;
3. Nachrichten im Chat-Panel der Desktop-Version werden **nicht** in die Messenger synchronisiert;
4. Sitzungen aus mehreren Messengern werden **nicht automatisch zusammengeführt** – für dieselbe Aufgabe am besten in der ursprünglichen Sitzung bleiben (das Symbol rechts neben dem Benutzernamen zeigt die Nachrichtenquelle);
5. Standardmäßig kann Feishu Cloud-Dokumente/Kalender/Base-Tabellen nicht direkt bedient werden – dafür ist zuerst die [Berechtigung für externe Apps](/de/traework/06-plugins-integrations) nötig;
6. Der Ruhezustand des Computers kann Nachrichtenempfang und -versand unterbrechen.

## Zwei Sicherheits-Schalter

Im Panel „Verbindungen verwalten > Kanalverbindungen“ gibt es zwei Schalter, die Aufmerksamkeit verdienen:

- **Computer wach halten**: Ist dies aktiviert, bleibt der Rechner vom Empfang einer Nachricht bis zur fertigen Antwort wach – empfohlen;
- **Voller Zugriff**: ⚠️ Dieser Modus **schaltet Sandbox-Schutz und sämtliche Freigabeprüfungen aus**; TraeWork kann dann beliebige Aktionen direkt auf dem Host-System ausführen. Nur aktivieren, wenn die Folgen völlig klar sind.

---

Weiter: [Plugins und Berechtigungen für externe Apps →](/de/traework/06-plugins-integrations)
