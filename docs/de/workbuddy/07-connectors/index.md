# Kapitel 7: Konnektoren in WorkBuddy verwenden



**MCP** steht für **Model Context Protocol**, einen offenen Standard, den Anthropic Ende 2024 vorgestellt und als Open Source veröffentlicht hat und der inzwischen zu der gefragtesten Grundlagen-Infrastruktur im KI-Bereich zählt.

Ein anschauliches Bild: **MCP ist der „USB-C-Anschluss" der KI-Welt.**



## Warum braucht man MCP?

Früher mussten Entwickler, damit ein KI-Assistent (Agent) externe Werkzeuge anbinden konnte (etwa GitHub, das lokale Dateisystem, eine PostgreSQL-Datenbank, Slack usw.), für **jede KI-Anwendung** und **jedes Werkzeug** eigenen Integrationscode schreiben. Bei 10 KI-Anwendungen und 10 Werkzeugen bedeutete das 100 Schnittstellen (der N-×-M-Integrationsalbtraum).



Mit MCP entwickelt der Werkzeughersteller nur noch einen „MCP Server" nach MCP-Standard (vergleichbar einem USB-C-Gerät), und jede MCP-fähige KI-Anwendung (wie Cursor oder gängige Agent-Frameworks) braucht lediglich einen eingebauten „MCP Client" (vergleichbar dem USB-C-Anschluss) – fertig ist das **Plug-and-Play**. Damit reduziert sich der N-×-M-Entwicklungsaufwand auf N + M.



## Die Kernmerkmale von MCP

- Ein einheitliches, standardisiertes Protokoll (Schluss mit ständiger Neuerfindung)

MCP liefert eine universelle Spezifikation (auf Basis von JSON-RPC). Ob lokale Dateien gelesen, Datenbanken abgefragt oder Drittanbieter-SaaS-APIs aufgerufen werden – die KI versteht und nutzt alles über dieselbe Protokolllogik. Das senkt die Hürde für Werkzeugintegration in der Agent-Entwicklung erheblich, sodass Entwickler sich auf die Kernlogik des Agenten konzentrieren können statt auf mühsamen API-Verbindungscode

- Drei Kernfähigkeiten

MCP lässt die KI nicht nur „handeln", sondern auch „Daten sehen" und „nach Schema vorgehen" – standardisiert wurden drei Kernprimitive:

- **Tools (Werkzeuge)**: Ermöglichen der KI das Ausführen von Aktionen. Zum Beispiel: Code ausführen, ein Ticket in Jira anlegen, Daten in eine Datenbank schreiben.
- **Resources (Ressourcen/Kontext)**: Ermöglichen der KI das Lesen externer Daten. Zum Beispiel: die Dateiliste eines Git-Repositorys abrufen oder bestimmte Ausschnitte aus einer Vektordatenbank abfragen – als Kontext zur Beantwortung von Fragen.
- **Prompts (Prompt-Vorlagen)**: Stellen vordefinierte Interaktionsvorlagen bereit, mit denen Nutzer oder die KI bestimmte komplexe Workflows standardisiert auslösen.

- Client-Server-Architektur mit hoher Entkopplung. MCP setzt auf eine Client-Server-Architektur:

  - **MCP Host**: Die KI-Host-Anwendung, die Sie verwenden (z. B. IDE, Agent-Plattform).
  - **MCP Client**: Die Komponente im Host, die die 1:1-Verbindung zum Server hält.
  - **MCP Server**: Ein schlankes, eigenständiges Programm, das ausschließlich bestimmte Werkzeuge oder Datenquellen bereitstellt.

Diese Entkopplung bedeutet: Sie können das zugrunde liegende große Modell jederzeit austauschen oder neue Datenquellen hinzufügen, ohne das gesamte Agent-System umbauen zu müssen.

- Lokal zuerst und Sicherheit (datenschutzfreundlich)

MCP kommuniziert über lokale Standard-Ein-/Ausgabe (stdio) oder lokales HTTP. Ihr MCP-Server kann also vollständig auf Ihrem eigenen Rechner laufen. Sensible Daten (lokaler Code, Inhalte privater Datenbanken, Shop-Backend-Daten) müssen nicht zu Servern Dritter in die Cloud hochgeladen werden; das KI-Modell erhält nur den für die Schlussfolgerungen nötigen Kontext – ein großer Gewinn für die Datensicherheit in Unternehmensanwendungen.



## Einen Konnektor laden

**Derzeit werden unter anderem Konnektoren für QQ-Mail, Tencent Docs, Tencent Lexiang, Tencent Meeting und TAPD unterstützt.**

![](/workbuddy/07-connectors/assets/001_image_IZzfbK38Ao.png)

Zum Beispiel das Laden des Tencent-Meeting-Konnektors,

![](/workbuddy/07-connectors/assets/002_image_WF3ab0WSbo.png)

![](/workbuddy/07-connectors/assets/003_image_ZssEbuMsdo.png)



## Eine Aufgabe erstellen

„Erstell mir bitte ein Meeting für morgen 15 Uhr",

![](/workbuddy/07-connectors/assets/004_image_KVIJbpUZdo.png)

Thema „Projektdiskussion", Dauer 1 h

![](/workbuddy/07-connectors/assets/005_image_FPy1bGJJZo.png)

Erfolgreich erstellt

![](/workbuddy/07-connectors/assets/006_image_WQ6Zb1Rero.png)



## Neuen Konnektor anlegen

Klicken Sie auf der Verwaltungsseite der Konnektoren oben rechts auf „Benutzerdefinierte Konnektoren" und konfigurieren Sie MCP nach Anleitung (einschließlich Serveradresse und Authentifizierungsmethode). Beachten Sie: Der Zugriffsumfang benutzerdefinierter Konnektoren wird vom Nutzer selbst festgelegt

![](/workbuddy/07-connectors/assets/007_image_M2itbQUceo.png)
