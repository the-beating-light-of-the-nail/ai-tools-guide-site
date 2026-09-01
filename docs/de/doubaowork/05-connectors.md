# Konnektoren: zuerst eine kleine, abnehmbare Aufgabe

Der Zweck von Konnektoren ist einfach: **Doubao Work damit Daten und externe Tools lesen bzw. aufrufen lassen**. Sie müssen sich nicht zuerst MCP, JSON-RPC und ein Bündel Fachbegriffe einprägen – schauen Sie zuerst, ob es echte Daten zurückbringt.

## Zuerst MCP verstehen: das USB-C der KI-Welt

**MCP** (Model Context Protocol) ist ein offener Standard, den Anthropic Ende 2024 vorstellte und als Open Source veröffentlichte – inzwischen eine der gefragtesten Grundlagen der KI-Welt. Anschaulich gesagt: **MCP ist der „USB-C-Anschluss" der KI-Welt**.

Warum braucht man das? Früher mussten Entwickler, damit ein KI-Assistent externe Tools anbindet (GitHub, lokale Dateien, Datenbanken, Slack …), für „jede KI-Anwendung × jedes Tool" eigenen Integrationscode schreiben – 10 Anwendungen mit 10 Tools ergeben 100 Schnittstellen. Mit MCP entwickelt der Tool-Anbieter nur einen MCP-Server nach Standard (USB-C-Gerät), und die KI-Anwendung bringt den MCP-Client mit (USB-C-Anschluss) – Plug-and-play, die Komplexität sinkt von N × M auf N + M.

## Sicherheitsgrenzen

Datenpfad und Sicherheitsgrenzen eines Konnektors hängen von der konkreten Implementierung, der Authentifizierung und dem Dienstanbieter ab:

- Prüfen Sie vor der Nutzung **Herkunft des Konnektors, autorisiertes Konto, zugänglichen Bereich und Schreibrechte**;
- Folgen Sie bei sensiblen Daten den Datenschutzvorgaben Ihrer Organisation und **unterstellen Sie nicht, dass jeder Konnektor nur lokal arbeitet**.

## Konnektoren laden und neu erstellen

Doubao Work bietet aktuell Konnektoren für **WeCom, DingTalk, Tencent Meeting, Tencent Docs, Notion, Baidu-Cloud-Speicher, Karten, Finanzdaten** und weitere Kategorien.

**Fertigen laden**: Suchen Sie auf der Seite „Skills · Konnektoren · Partner" (z. B. nach „Tencent Meeting"), klicken Sie rechts auf „+" und schließen Sie die Autorisierung gemäß den Hinweisen ab.

**Eigenen erstellen**: Klicken Sie auf derselben Seite oben rechts auf „Neu" → „Neuen benutzerdefinierten Konnektor" und konfigurieren Sie Dienstadresse und Authentifizierung nach Anleitung. Bestätigen Sie vor der Autorisierung die Herkunft des Dienstes, den Zugriffsbereich, die Schreibfähigkeit und wie Zugangsdaten verwahrt werden.

## Suchen, autorisieren, testen

Wenn Sie einen Konnektor gefunden haben, prüfen Sie zuerst Herkunft, Berechtigungsumfang und unterstützte Aktionen. Drei Regeln: **Wo Lesen genügt, nicht zuerst Schreiben aktivieren; wo Testdaten genügen, nicht zuerst echte Daten anfassen; Zugangsdaten nie in den Prompt einfügen.**

Eine minimale Abnahmeaufgabe – mit einem verbundenen QR-Code-Tool einen „Generieren + Selbstprüfen"-Durchlauf:

```text
Bitte erzeuge mit dem verbundenen QR-Code-Tool einen QR-Code für die von mir angegebene öffentliche URL.
Dekodiere ihn danach selbst zur Kontrolle und bestätige, dass das Ergebnis exakt der Original-URL entspricht; liefere dann Bild und Prüfergebnis zusammen ab.
Die URL nicht kürzen, umschreiben oder umleiten.
```

Für die Anbindung interner Systeme Ihres Unternehmens gilt: zuerst eine **Testumgebungs-Version** des benutzerdefinierten Konnektors bauen, mit minimalen Rechten; Schreib- und Löschaktionen behalten eine manuelle Bestätigung.

---

Nächster Schritt: „Standardvorgehen" installieren – [Skills: welchen wählen, wie einsetzen →](/de/doubaowork/06-skills)
