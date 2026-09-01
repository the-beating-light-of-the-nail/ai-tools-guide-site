# Fortgeschritten: MCP und die Cloud-Ausführungsumgebung

Externe Systeme, die Plugins nicht abdecken, binden Sie über MCP ein; Aufgaben, die lokal nicht laufen, verlagern Sie in die Cloud-Ausführungsumgebung.

> Offizielle Dokumentation: [work_mcp-overview](https://docs.trae.cn/work_mcp-overview) ｜ [work_set-up-the-remote-environment](https://docs.trae.cn/work_set-up-the-remote-environment)

## MCP: der USB-Anschluss der KI-Welt

MCP (Model Context Protocol) ist ein Protokoll, das großen Modellen den Zugriff auf eigene Tools und Dienste erlaubt. In TraeWork tritt der Agent als **MCP-Client** auf und fordert beim MCP-Server die Nutzung dessen Tools an.

Ablauf: ① MCP-Server selbst hinzufügen → ② den MCP-Server zu einem benutzerdefinierten Agenten hinzufügen → ③ der Agent ruft dessen Tools auf.

**Drei Übertragungstypen**:

| Typ | Ort | Beschreibung |
| --- | --- | --- |
| stdio | Lokal | Start über lokale Kommandozeile |
| HTTP (SSE) | Lokal / Remote | Klassische Remote-Variante |
| Streamable HTTP | Lokal / Remote | Weiterentwicklung von SSE, empfohlen |

Als Ausführungsumgebung gibt es zwei Möglichkeiten: lokal (nur lokale Aufgaben, nur Desktop-Version) oder Cloud (Cloud-Aufgaben sowie von GitHub geladene Projekte).

**Verantwortungsgrenze, die man kennen muss**: MCP-Server werden von Dritten gebaut und gepflegt. TraeWork prüft sie nicht und empfiehlt sie nicht; für deren Verhalten, fehlgeschlagene Aufrufe und zurückgelieferte Daten übernimmt TraeWork keine Haftung. Prüfen Sie vor dem Anbinden genau, welche Berechtigungen verlangt werden – im Einklang mit den [MCP-Grundlagen im WorkBuddy-Kapitel](/de/workbuddy/11-ai-work-system/): **MCP löst das „Wie verbinde ich" – ob die Verbindung danach sicher ist, liegt in Ihrer Verantwortung.**

> Empfehlung für Büroanwender: Nutzen Sie vorrangig die fertig paketierten Anbindungen aus dem offiziellen Plugin-Markt (Feishu, Tencent Docs usw.); eigene MCP-Server nur dann, wenn Sie wirklich private Systeme anbinden müssen.

## Cloud-Ausführungsumgebung

Sie stellt Cloud-Agenten eine cloudbasierte Umgebung für Codeanalyse, Ausführung und Debugging bereit, mit einheitlicher Runtime- und Abhängigkeitsverwaltung – so entfällt das Problem „auf meinem Rechner lief es doch". Geeignet für Aufgaben, die in einer isolierten Umgebung laufen, Projekt-Abhängigkeiten verwalten oder mit der KI gemeinsam komplexes Debugging erfordern.

**Schritte zum Erstellen**:

1. Avatar unten links > Einstellungen → links „Cloud-Ausführungsumgebung";
2. Oben rechts „Erstellen", Parameter konfigurieren und bestätigen.

**Zentrale Konfiguration**:

| Konfiguration | Beschreibung |
| --- | --- |
| Vorgefertigte Abhängigkeiten | Basis-Image + Sprachversion (Python 3.10–3.14, Node.js 18–24, Go, Rust, Java 11–25, Ruby, PHP, Swift) |
| Umgebungsvariablen | Normale (Klartext, max. 100) / sensible Variablen (KMS-verschlüsselt gespeichert, max. 50) |
| Ausführungsskripte | install (≤10 KB, blockierend), start (≤10 KB, nicht blockierend), terminals (max. 10) |
| Netzwerk-Whitelist | Gängige Quellen wie npm, pypi, maven, github, docker |

Zugangswege: Aufgaben der Web-Version laufen vollständig in der Cloud; in der Desktop-Version unten links im Eingabefeld erst auf „Cloud" umschalten und dann die Umgebung wählen.

**Einschränkungen**: Eigene Cloud-Ausführungsumgebungen lassen sich **nur im Code-Modus** verwenden; eigene Container-Images und Netzwerkrichtlinien werden derzeit nicht unterstützt. Für die meisten Szenarien von Büroanwender reicht die Standard-Cloud-Umgebung – ein eigener Aufbau ist unnötig.

## Lokale Aufgabe vs. Cloud-Aufgabe: eine Entscheidungstabelle

| Situation | Wahl | Grund |
| --- | --- | --- |
| Lokale Dateien sollen bearbeitet werden | Lokal | Die Cloud kommt nicht an Ihre Festplatte |
| Sensible Daten im Spiel | Lokal (+ Privatsphäremodus) | Daten verlassen das Gerät nicht |
| Läuft lange, Rechner soll frei bleiben | Cloud | Isolierte Ausführung in der Cloud-Sandbox |
| Bestimmte Abhängigkeitsumgebung nötig | Cloud (eigene Umgebung) | Einheitliche Runtime |
| Über die Web-Version gestartet | Nur Cloud | Die Web-Version hat keine lokale Umgebung |
| Zeitgesteuerte Aufgaben | Cloud ist stabiler | Hängt nicht davon ab, ob Ihr Rechner läuft |
