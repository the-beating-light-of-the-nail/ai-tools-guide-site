# Fallbeispiel: Browser-Automatisierung – 230 WeChat-Artikel in 20 Minuten strukturiert

Die Browser-Automatisierung gilt als anerkannte Stärke von QoderWork. Das Hauptfallbeispiel dieses Kapitels stammt aus einem vollständigen Praxistest eines Netzwerkingenieurs – ohne eine Zeile Code erledigt, was früher ein Python-Crawler gewesen wäre.

> Adaptiert aus dem Test von Zhu Jiasheng (WeChat-Official-Account „Netzwerker-Handwerk"): [„Erste Erfahrung mit der Browser-Automatisierung von Alibabas QoderWork: 230+ Official-Account-Artikel-Links in 20 Minuten"](https://zhuanlan.zhihu.com/p/2057217208250528785) (2026-07).

## Aufgabenhintergrund

Der Blogger wollte über 200 historische Artikel seines Official Accounts in eine Tabelle mit den drei Spalten 【Veröffentlichungsdatum】【Titel】【Link】 bringen und danach in die Tencent-ima-Wissensdatenbank importieren – als befragbarer „persönlicher Wissensassistent".

- Manueller Weg: 800+ Mal kopieren und einfügen;
- Crawler-Weg: am Login-Zustand des Official-Account-Backends + verschlüsselte Schnittstellen gescheitert;
- QoderWork-Weg: die bereits angemeldete Browserseite übernehmen, null Code.

## Der komplette Ablauf (11 Schritte)

1. herunterladen und installieren (unter Windows die X64-User-Version), mit dem Alibaba-Cloud-Konto anmelden;
2. einen eigenen Arbeitsordner anlegen: `D:\QoderWork\OfficialAccount-Artikel`;
3. Fußleiste „Connectors verwalten" → „Browser" finden → aktivieren;
4. Browser-Erweiterung installieren (Chrome über den Web Store; Edge manuell: `edge://extensions` Entwicklermodus → den Ordner chrome-extension aus dem Installationsverzeichnis hineinziehen);
5. **der entscheidende Schritt**: mit dem Browser manuell mp.weixin.qq.com öffnen und unter „Inhaltsverwaltung → Veröffentlichungsverlauf" gehen – das Official-Account-Backend verlangt einen persönlichen QR-Code-Scan, die KI kann die Identitätsprüfung nicht allein bestehen; deshalb die **bereits angemeldete Seite übernehmen** lassen;
6. das QoderWork-Erweiterungssymbol in der Browser-Symbolleiste anklicken; zeigt das Panel „aktueller Tab verbunden", war die Übernahme erfolgreich;
7. eine Excel-Vorlage vorbereiten (vier Spalten: Nr., Veröffentlichungsdatum, Titel, Link) und in den Arbeitsordner legen;
8. die Aufgabe stellen (Prompt im Volltext):

```text
Wirf einen Blick in die Vorlage netzwerker-handwerk-WeChat-Veröffentlichungsverlauf.xlsx.
Diese Daten stammen aus der im EDGE-Browser verbundenen Seite unter „Inhaltsverwaltung“ → „Veröffentlichungsverlauf“, mit Seitenumbruch.
Ordne nach der Vorlage die Veröffentlichungseinträge aus den 24 Seiten
nach 【Veröffentlichungsdatum】【Titel】【Link】 in einer Excel-Datei.
```

9. das Aufgaben-Monitor-Panel zerlegt automatisch in vier Schritte: 24 Seiten Veröffentlichungseinträge extrahieren → Vorlagenstruktur lesen → Excel nach Vorlage erzeugen → Datei prüfen;
10. zwei, drei Iterationsrunden: die erste Runde verpasste einige Artikel, die zweite ergänzte, die dritte justierte das Format – „Eiliges gelassen angehen: die KI arbeitet, der Mensch kalibriert";
11. Import in die ima-Wissensdatenbank (jeweils 10 Links, über 200 Artikel also rund 20 Runden) – der persönliche Artikelbestand wird zu einer per KI befragbaren Wissensdatenbank.

**Ergebnis**: 238 Einträge (sämtliche Artikel von 2021-11 bis 2026-06), Titel/Datum/Link vollständig, Links automatisch als klickbare Hyperlinks, absteigend nach Zeit sortiert. Insgesamt **unter 20 Minuten** (manuell: ein halber Tag).

## Technisches Highlight: die KI fand die API selbst

QoderWork hat nicht mühsam Seite für Seite auf „Weiter" geklickt, sondern **entdeckt, dass die Veröffentlichungsverlaufs-Seite die strukturierte Datenvariable `publish_page` einbettet, und alle Einträge auf einmal über die Seiten-Schnittstelle gezogen** – der Autor vergleicht es mit dem „erfahrenen Skript-Kid, das erst per inspect-Element die API sucht und dann massenhaft Daten zieht". Das ist der wesentliche Unterschied zwischen einem Agenten und einem „Aufzeichnungs-Wiedergabe-RPA": Er sieht die Seitenstruktur und wählt den effizientesten Weg.

## Gleiches Muster: der Tagesbericht für fünf E-Commerce-Shops (offizieller Nutzerfall)

Ein Cross-Border-Operationsmitarbeiter loggte sich täglich in fünf Backends ein, um Daten zu exportieren – die „Morgenroutine" dauerte eine Stunde, und es fehlten immer wieder Shops:

```text
Melde dich nacheinander in den Backends der drei Standorte US/EU/JP an, öffne die Geschäftsberichte und exportiere die Daten von gestern.
Fasse sie in einer Excel zusammen: Umsatz/Bestellungen/Rücklaufquote je Standort, Top 10 der meistverkauften SKUs,
Rückgänge im Vorperiodenvergleich rot markiert, zum Schluss eine Operations-Zusammenfassung unter 200 Wörtern.
```

Nach dem Durchlaufen **als Skill paketieren** – künftig genügt täglich ein Satz: „Heutigen Shop-Tagesbericht ausführen". Ergebnis: **1 Stunde → 10 Minuten**; nach Datenansammlung zusätzlich eine 30-Tage-Trendanalyse.

## Übertragbare Szenarien

Webunterlagen gesammelt herunterladen, Formulare automatisch ausfüllen und einreichen, Kurse zeitgesteuert abgreifen, Screenshots als Archiv erzeugen, preisübergreifend vergleichen – alles, was Sie im Browser wiederkehrend tun, können Sie ihm übertragen. Komplett ohne Code.

## Drei Sicherheitshinweise

1. Der Sammelprozess liest die Login-Daten des Browsers – **nicht an öffentlichen Geräten arbeiten**;
2. exportierte Daten um Account-Informationen anonymisieren;
3. von der KI gesammelte Daten **unbedingt manuell stichprobenartig prüfen** (je einige Titel, Daten und Links).
