# Computersteuerung, Browsersteuerung und Sicherheitsgrenzen

Die KI direkt Ihre Oberfläche bedienen zu lassen – Formulare ausfüllen, Buttons klicken, Seiten durchblättern – ist die mächtigste, aber auch die schutzbedürftigste Fähigkeit einer aufgabenorientierten KI. In diesem Kapitel geht es um das Aktivieren, das Anwenden und das Einhalten der Sicherheitsgrenzen.

## Computersteuerung (Computer Use)

Die KI bedient Ihre Benutzeroberfläche mit Ihrer Zustimmung. Geeignet für: Recherche und Zusammenfassung, Formulare ausfüllen, Dateneingabe, schrittweise Abarbeitung nach Vorlage sowie automatisierte Abnahmetests nach der Entwicklung.

**Schritte zum Aktivieren**:

1. Einstellungen > Computersteuerung → im Bereich „Computersteuerung aktivieren" auf „Installieren" klicken (das Plugin wird automatisch installiert und aktiviert);
2. **Nur macOS**: Bei „Bedienungshilfen" und „Bildschirmaufnahme" auf „Berechtigung erteilen" klicken und die Berechtigung in den Systemeinstellungen erteilen (Bedienungshilfen = simulierte Maus- und Tastatureingaben + Auslesen von Oberflächenelementen; Bildschirmaufnahme = Screenshots zum Verstehen der Oberfläche);
3. TraeWork neu starten. Unter Windows ist keine separate Berechtigung nötig.

**Einstellungen**: Liste „Immer erlaubte Apps"; Option „App-Operationen immer erlauben" (wenn aktiviert, muss die KI bei neuen Apps nicht mehr einzeln bestätigt werden).

**Vier offizielle Anweisungsvorlagen** (direkt übernehmbar):

```text
① Formular ausfüllen: Fülle das Formular XX für mich aus und bleib nach dem Ausfüllen auf der Absendeseite warten auf meine Bestätigung. Klicke nicht auf Absenden.

② Nach Vorlage ausfüllen: Kopiere die Vorlage template.docx, ersetze die [Feldliste] durch die Daten dieses Monats
und speichere das Ergebnis als output/Monatsbericht.docx. Nicht senden oder veröffentlichen.

③ Ablauf verifizieren: Prüfe, ob der Ablauf „Benutzer kann ein Konto registrieren und einen Artikel veröffentlichen" funktioniert.
Brich bei einem Fehler ab und nenne den fehlgeschlagenen Schritt, die Fehlermeldung und die Schritte zur Reproduktion. Lösche keine Daten.

④ Entwickeln und abnehmen: Entwickle die Funktion XX und verifiziere sie danach einmal per Computersteuerung.
Bei einem Fehlschlag darfst du einmal versuchen, das Problem zu beheben, und erneut verifizieren. Bleibt der Test erfolglos, brich ab und erkläre den Grund.
```

Hinweis: Unter macOS erscheint während der KI-Bedienung ein Overlay „TraeWork bedient gerade den Computer"; versuchen Sie währenddessen nicht, die Maus selbst zu übernehmen.

## Browsersteuerung

Die KI erledigt Webaufgaben automatisch über den Browser. Zwei Modi:

| | Integrierter Browser | Externer Browser |
| --- | --- | --- |
| Aktivierung | Einstellungen > Browser > „KI-Steuerung des integrierten Browsers erlauben" aktivieren | Chrome-Erweiterung Trae Work Browser Extension installieren |
| Merkmale | Sofort einsatzbereit, direkt in TraeWork | Nutzt Ihr bereits angemeldetes Chrome (Login bleibt erhalten) |
| Geeignet für | Recherche und Prüfung in einer sauberen Umgebung | Vorgänge mit Login (z. B. Daten aus einem Backend exportieren) |

- Standard-Browser umschalten: Einstellungen > Allgemein > Standard-Browser für KI-Aufgaben;
- **Cloud-Aufgaben nutzen immer den integrierten Browser**; die Browsersteuerung-Einstellungen gelten nur für lokale Aufgaben;
- Schalter für automatische Screenshots (Einstellungen > Allgemein): Screenshots werden nur im Chat angezeigt und verbrauchen keine Tokens.

## Sicherheitsbasis: Sandbox und Berechtigungsmodi

Bevor Sie der KI Bedienrechte einräumen, sollten Sie TraeWorks dreistufigen Schutz kennen. Unter Einstellungen > Berechtigungsfreigabe (auch unten links im Eingabefeld umschaltbar) gibt es drei voreingestellte Modi:

| Modus | Sandbox | Sicherheitsprüfung | Freigabe |
| --- | --- | --- | --- |
| **Manuelle Freigabe** (Standard) | Aktiv | Aktiv | Jede Aktion wird von Ihnen einzeln bestätigt |
| **Automatische Freigabe** | Aktiv | Aktiv | Der integrierte LLM Guardian entscheidet automatisch |
| **Voller Zugriff** | **Inaktiv** | **Alles deaktiviert** | Befehle laufen direkt auf dem Host ⚠️ |

Die **Sandbox** bietet den Befehlen des Agenten eine eingeschränkte Ausführungsumgebung und verhindert unautorisierte Dateizugriffe: macOS basiert auf sandbox-exec, Windows auf einem eigenen Sandbox-SDK; Aufgaben der Web-Version laufen vollständig in isolierten Sandbox-Containern. Lokale Aufgaben dürfen Systemverzeichnisse (`.git`, `.vscode` usw.) standardmäßig nur lesen; schreibbar sind Projekt-, temporäre und Cache-Verzeichnisse. Hochriskante Befehle (wie `rm -rf`) werden abgefangen und gemeldet – Sie können sie überspringen, auf eine Whitelist setzen oder einmalig in der Sandbox ausführen.

**Empfehlungen für Büroanwender**:

1. Im Alltag „manuelle Freigabe" beibehalten; über automatische Freigabe erst bei gut erprobten, risikoarmen Aufgaben nachdenken;
2. „Voller Zugriff" nur in isolierten Umgebungen (virtuelle Maschine/Testgerät) verwenden – dasselbe gilt für den „Voller Zugriff"-Schalter des Office-Assistenten;
3. Unumkehrbare Vorgänge (E-Mails senden, Dateien löschen, Bestellungen abschicken) immer manuell bestätigen lassen;
4. CAPTCHAs, SMS-Codes und Gesichtserkennung kann die KI nicht lösen – übernehmen Sie an solchen Stellen selbst.

## Privatsphäremodus

Standardmäßig können Ihre Gesprächsinhalte für Datenanalyse, Produktverbesserung und Modelltraining verwendet werden. Nach dem Aktivieren des Privatsphäremodus (Einstellungen > Konto > Privatsphäremodus) werden Gesprächsinhalte (einschließlich Codeausschnitten und KI-Ausgaben) nicht mehr für diese Zwecke verwendet.

Zwei offizielle Zusagen sind es wert, gemerkt zu werden:

- **Unabhängig davon, ob der Privatsphäremodus aktiv ist, werden Dateien aus dem Code-Repository niemals für Datenanalyse, Produktverbesserung oder Modelltraining verwendet**;
- Bei lokaler Ausführung der Desktop-Version werden die für die Code-Indizierung berechneten Embedding-Vektoren vorübergehend hochgeladen; der Klartext wird danach dauerhaft gelöscht.

---

Weiter geht es mit den Fallbeispielen: [Mit TraeWork eine präsentationsreife PPT erstellen →](/de/traework/case-ppt)
