# Erste Aufgabe in fünf Minuten

Nach der Installation üben Sie den Ablauf an einer kleinen Aufgabe: Aufgabe anlegen → Material hinzufügen → Rechte steuern → Abnahme.

## Aufgabe erstellen

1. Klicken Sie links auf „Neue Arbeitsaufgabe";
2. Klicken Sie links im Eingabefeld auf „+" oder nutzen Sie „@ Material hinzufügen", um die für diese Aufgabe nötigen Dateien, Ordner oder anderen Materialien einzubinden – Doubao Work unterstützt besonders **Feishu-Cloud-Speicherdaten**, und Sie können auch Feishu-Kontakte @-en;
3. Bestätigen Sie, dass unten „Arbeitsaufgabe" gewählt ist; Sie können ein Projekt zuordnen und den Berechtigungsmodus festlegen: **Immer nachfragen / Nach Bedarf bestätigen / Alles erlauben** (für die erste Aufgabe empfiehlt sich „Nach Bedarf bestätigen");
4. Das Modell kann auf Auto bleiben; wahlweise nach Aufgabenkomplexität Turbo / Pro und die Reasoning-Stärke wählen.

## Ein sofort einsatzbereiter Prompt

```text
Bitte lies die drei von mir hinzugefügten Arbeitsaufzeichnungen und fasse sie zu einem einseitigen Wochenbericht zusammen.
Struktur: diese Woche erledigt, Kennzahlen, Probleme und Risiken, Plan für nächste Woche.
Verwende nur Informationen, die im Material ausdrücklich vorkommen; nicht überprüfbare Inhalte kommen unter „Offen", ergänze nichts.
Gib Markdown aus und nenne zu jeder Kernaussage den Namen des zugehörigen Materials.
```

Beobachten Sie nach dem Senden, **ob es zuerst das Material liest und dann das Ergebnis erzeugt**. Beginnt es sofort mit dem Wochenbericht, fügen Sie dem Prompt noch den Satz hinzu: „Liste zuerst die Materialliste und den Zeitraum auf".

## Die Abnahme prüft nur vier Dinge

1. Wurden Fakten falsch wiedergegeben;
2. Stimmen die Zahlen überein;
3. Sind die „Offen"-Punkte stehen geblieben;
4. Lässt sich das Format weiterbearbeiten.

Nach der ersten geglückten Aufgabe kommen Skills und Konnektoren dazu. Ergebnisse lassen sich weiterbearbeiten, herunterladen oder bei Bedarf teilen; prüfen Sie vor dem Teilen, dass keine sensiblen oder vertraulichen Inhalte enthalten sind, und wählen Sie den Freigabekreis nach den Richtlinien Ihres Unternehmens.

## Drei Einsteigeraufgaben

**A · Dateien sortieren**

```text
Ziel: die Übungsdateien im Verzeichnis input sortieren, damit sie nach Typ auffindbar sind.
```

**B · Meeting-Protokoll**

```text
Bitte bringe input/meeting.txt in ein strukturiertes Meeting-Protokoll.
```

**C · Word zu PPT**

```text
Konvertiere input/Projektbericht.docx in eine interne Berichts-PPT mit höchstens 10 Seiten.
```

---

Nächster Schritt: externe Tools anbinden – [Konnektoren: zuerst eine kleine, abnehmbare Aufgabe →](/de/doubaowork/05-connectors)
