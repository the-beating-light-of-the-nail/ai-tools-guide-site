# Connectors und MCP

Connectors sind die Brücken zwischen QoderWork und externen Systemen – nach dem Aktivieren kann die KI wie Sie den Browser bedienen, Systemkalender und E-Mail lesen und schreiben sowie Microsoft 365 und DingTalk anbinden. MCP ist das offene Protokoll, um weitere externe Werkzeuge anzubinden.

> Offizielle Dokumentation: [connectors](https://docs.qoder.com/zh/qoderwork/connectors) ｜ [DingTalk-MCP-Praxis](https://docs.qoder.com/zh/qoderwork/mcp-walkthrough)

## Connector-Überblick

Einheitlicher Zugang: linke Navigation → Erweiterungen → Connectors (Reiter „Markt" / „Installiert"). **Standardmäßig ist alles aus**; erst nach Ihrer ausdrücklichen Autorisierung und Konfiguration erhält QoderWork die entsprechenden Zugriffsrechte.

| Kategorie | Connectors |
| --- | --- |
| Eingebaut | **Browser** (Seiten bedienen, Daten extrahieren, Formulare ausfüllen), **macOS-Apps** (Erinnerungen, Kalender, Notizen, Mail, Kontakte), **Microsoft 365** (Outlook/Kalender/Kontakte/To Do/OneNote/OneDrive) |
| Integrationsmarkt | DingTalk, Feishu, Notion, Linear, Todoist, Canva, Supabase, Vercel, Neon, Slack, Figma, Google Kalender, Google Maps, LINE, Qichacha usw. |

## Anbindung (an drei häufigen Beispielen)

**Browser-Connector** (QoderWorks Aushängeschild): auf der Connector-Seite „Browser" finden, + klicken → „Im Chrome Web Store installieren" → Status zeigt „Erweiterung verbunden". Er nutzt Ihren echten Browser-Login – weder Datenexport aus dem Backend noch Formularausfüllung erfordern eine erneute Anmeldung.

**Microsoft 365**: „Microsoft-Konto verbinden" → im Browser-Popup anmelden → Freigabe bestätigen.

**DingTalk**: Reiter „Markt" → Karte DingTalk → „DingTalk-Konto anmelden" und autorisieren.

⚠️ Zentrale Einschränkung: **Nach dem Umschalten eines Connectors wirkt er erst in einem neu angelegten Gespräch** – fragen Sie nicht im alten Dialog nach, warum nichts passiert.

## MCP: der USB-Anschluss der KI-Welt

MCP (Model Context Protocol) ist ein offenes Protokoll, das die Verbindung zwischen KI-Anwendung und externen Werkzeugen standardisiert. Zugang: auf der Connector-Seite oben rechts „+ Hinzufügen", zwei Wege:

1. **JSON-Konfiguration einfügen** und importieren (empfohlen);
2. manuell eintragen.

Zwei Servertypen: **Streamable HTTP / SSE** (remote gehostet, Zugriff per URL, ersteres empfohlen); **STDIO** (lokaler Start per Kommandozeile, erfordert Node.js/Python). Beispiel einer JSON-Struktur:

```json
{
  "mcpServers": {
    "DingTalk-Dokumente": {
      "type": "streamable-http",
      "url": "https://mcp-gw.dingtalk.com/mserver/...key=..."
    }
  }
}
```

## Praxis: DingTalk-MCP anbinden (vier Schritte)

DingTalk hat einen eigenen MCP-Markt – ideal für Teams, die ohnehin mit DingTalk arbeiten:

1. [mcp.dingtalk.com](https://mcp.dingtalk.com) öffnen und anmelden, per Schlagwort suchen (mit der Plakette „Plattform-Auswahl" sind offiziell empfohlen);
2. auf der MCP-Detailseite rechts im Bereich „MCP verwenden" die JSON-Konfiguration kopieren;
3. in QoderWork auf der Connector-Seite „+ Hinzufügen" → JSON einfügen → „Per JSON importieren" (DingTalk-MCP braucht in der Regel keine zusätzlichen Headers – leer lassen);
4. Prüfung: **ein grüner Punkt links vom Servernamen bedeutet erfolgreiche Verbindung**; dann direkt im Dialog testen:

```text
Finde für mich das Dokument mit dem Titel „Marketingplan Q3 2026“
Wie ist das Wetter in Peking (Amap-MCP)
Lege für mich einen Termin morgen um 10 Uhr an (DingTalk-Kalender-MCP)
```

Häufig genutzte DingTalk-MCPs: DingTalk-Dokumente, DingTalk-Kalender, DingTalk-Kontakte, DingTalk-Aufgaben, DingTalk-Gruppen, Amap-Karten, DingTalk-KI-Tabellen.

## Hinweise und Fehlersuche

- Der Browser-Connector unterstützt nur **Chromium-Kernel** (Safari / Firefox derzeit nicht); während einer Aufgabe die übergebenen Tabs nicht selbst bedienen;
- beim ersten Aktivieren der macOS-Apps erscheint eine Systemabfrage; bei versehentlichem Ablehnen unter Systemeinstellungen → Datenschutz & Sicherheit manuell freigeben;
- CAPTCHAs, SMS-Codes und QR-Logins brauchen menschliches Eingreifen;
- wenn MCP sich nicht verbindet, der Reihe nach prüfen: JSON/URL vollständig? → Netzwerk? → zusätzliche Autorisierung gefordert? → entfernen und neu hinzufügen.

**Best Practices**: die URL direkt in den Prompt schreiben; Connectors mit lokalem Dateizugriff kombinieren; komplexe Abläufe erst manuell durchspielen, dann als Skill oder zeitgesteuerte Aufgabe fixieren.

> Die allgemeinen Grundlagen und Sicherheitsgrenzen von MCP (Verhältnis zu APIs, „wie verbinden" vs. „ist die Verbindung sicher") finden Sie im WorkBuddy-Kapitel [KI-Arbeitssysteme verstehen](/de/workbuddy/11-ai-work-system/).

---

Weiter: [IM-Kanäle: Fernsteuerung aus dem Chatfenster →](/de/qoderwork/07-im-channels)
