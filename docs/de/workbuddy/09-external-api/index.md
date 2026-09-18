# Kapitel 9: Externe APIs anbinden

Vielleicht haben Sie keine Credits, aber eine eigene LLM-API – WorkBuddy unterstützt das Anbinden anderer LLM-APIs sowie Pakete wie Coding Plan und Token Plan.

Gehen Sie direkt über die Einstellungen hinein:

![Modell-Anbindung über die Einstellungen, ohne Plugin](/workbuddy/09-external-api/assets/001_image_CaRmbk2N1o.png)

Wählen Sie die Modell-Option:

![Die Modell-Optionen in den Einstellungen](/workbuddy/09-external-api/assets/002_image_PQxNb3id8o.png)

Klicken Sie auf „Modell hinzufügen":

![Auf Modell hinzufügen klicken, fr: Cliquer sur « Ajouter un modèle »](/workbuddy/09-external-api/assets/003_image_De1fbH0Gho.png)

Zur Auswahl stehen verschiedene Coding Plans oder eine eigene API:

![Coding Plan wählen oder eigene API eintragen](/workbuddy/09-external-api/assets/004_image_Fa7pb60ARo.png)

Bei DeepSeek zum Beispiel müssen Sie nur den API-Key eingeben:

![DeepSeek-API-Key eintragen und Einrichtung abschließen](/workbuddy/09-external-api/assets/005_image_W9u5bNsaMo.png)

Sie können auch lokale Ollama-Modelle anbinden (Ollama muss dazu lokal gestartet sein; Standardport 11434, OpenAI-kompatible Schnittstelle). Die Vorteile lokaler Modelle: **Daten verlassen den eigenen Rechner nicht, offline nutzbar, null Token-Kosten.**

![Wahl zwischen Cloud-API und lokalem Ollama](/workbuddy/09-external-api/assets/006_image_BSnBbYupuo.png)

> Ein API-Key ist eine sensible Zugangsberechtigung. Tragen Sie ihn ausschließlich in den Client-Einstellungen ein – niemals in Aufgabenbeschreibungen oder geteilten Dateien.
