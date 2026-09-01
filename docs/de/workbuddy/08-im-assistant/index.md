# Kapitel 8: WorkBuddy mit Mini-Programm und IM-Assistenten verbinden

Den Client zu installieren ist nur der erste Schritt. Dieses Kapitel verwandelt WorkBuddy von „nur am Schreibtisch nutzbar" zu „jederzeit vom Smartphone aus Aufgaben vergeben": Das Mini-Programm erlaubt entferntes Ansehen und Steuern, der IM-Assistent lässt Sie Aufgaben direkt in WeChat, Feishu und DingTalk stellen.

## Die zwei Modi des Mini-Programms

![](/workbuddy/08-im-assistant/assets/001_image_Vv5bbtLVBo.png)

| Modus | Wo die Aufgabe läuft | Abhängig vom Online-PC | Geeignete Aufgaben |
| --- | --- | --- | --- |
| Lokaler Modus | Verbundener Rechner | Ja | Lokale Dateien, lokale Skills, bestehende Arbeitsbereiche |
| Cloud-Modus | Isolierte Cloud-Umgebung | Nein | Recherche, Schreiben, spontane Analysen, parallele Aufgaben |

**Erste Verwendung**: Öffnen Sie das WorkBuddy-Mini-Programm über den offiziellen Zugang und melden Sie sich an. Prüfen Sie, ob Sie sich im lokalen oder Cloud-Modus befinden; stellen Sie im lokalen Modus sicher, dass der Zielrechner online und korrekt verbunden ist.

## Der Arbeitsablauf des IM-Assistenten

```mermaid
sequenceDiagram
    participant U as Smartphone-IM
    participant B as App-Bot
    participant W as WorkBuddy-Assistent
    participant P as Lokaler Arbeitsbereich
    U->>B: Aufgabe senden
    B->>W: Nachricht per Callback oder Dauerverbindung
    W->>P: Ausführung im autorisierten Verzeichnis
    P-->>W: Ergebnisse und Status
    W-->>B: Ergebnis zurückgeben
    B-->>U: Am Smartphone ansehen und bestätigen
```

## WeChat-Assistenten anbinden: einfach per QR-Code koppeln

1. Öffnen Sie WorkBuddy, klicken Sie in der linken Spalte „Assistent" auf das Zahnrad, um die „Assistenteneinstellungen" zu öffnen;

![](/workbuddy/08-im-assistant/assets/002_微信助理-进入助理设置_NbI2b9v4fo.png)

2. Suchen Sie „WeChat-Assistent-Integration" und klicken Sie auf „Konfigurieren";

![](/workbuddy/08-im-assistant/assets/003_微信助理-选择集成_S9HlbaEmdo.png)

3. Warten Sie, bis der Bindungs-QR-Code erzeugt wird, und scannen Sie ihn mit WeChat am Smartphone;

![](/workbuddy/08-im-assistant/assets/004_微信助理-扫码绑定_TElmbNPG5o.png)

4. Sobald die Karte „Gebunden" anzeigt, senden Sie zuerst einen schreibgeschützten Testbefehl;

![](/workbuddy/08-im-assistant/assets/005_微信助理-已绑定_ZQtrb6jCmo.png)

5. Zum Wechseln des WeChat-Kontos zuerst das aktuelle Konto entbinden und dann erneut den QR-Code scannen.

> Der QR-Code ist zeitlich begrenzt. Wenn es bei „Bindung läuft" bleibt, der Code abläuft oder das Scannen fehlschlägt, schließen Sie das Konfigurationsfenster und öffnen es erneut; starten Sie bei Bedarf WorkBuddy neu und lassen Sie einen neuen QR-Code erzeugen.

## Feishu anbinden

1. WorkBuddy → Einstellungen → Assistenteneinstellungen → Feishu auswählen;

![](/workbuddy/08-im-assistant/assets/006_image_SbcEbSaoio.png)

2. Auf der Feishu Open Platform eine unternehmensinterne Eigenbau-App anlegen;

![](/workbuddy/08-im-assistant/assets/007_飞书-登录开放平台_EUPhblavHo.png)

3. Der App Bot-Fähigkeiten hinzufügen;

![](/workbuddy/08-im-assistant/assets/008_飞书-添加机器人能力_XFmTb5HGQo.png)

4. Gemäß den Angaben der aktuellen WorkBuddy-Seite minimal benötigte Berechtigungen freischalten;

![](/workbuddy/08-im-assistant/assets/009_飞书-批量导入权限_MRdCbm3Dvo.png)

5. Unter „Zugangsdaten und Grundinformationen" App ID und App Secret abrufen;

![](/workbuddy/08-im-assistant/assets/010_飞书-应用凭证_CnItbspOUo.png)

6. Die Zugangsdaten in WorkBuddy eintragen und Callback-Informationen erzeugen bzw. kopieren;

![](/workbuddy/08-im-assistant/assets/011_飞书-加密与校验配置_WiAYbwBDKo.png)

7. In Feishu Event-Abos und Callbacks konfigurieren und Ereignisse wie Nachrichtenempfang oder Karteninteraktion hinzufügen;

![](/workbuddy/08-im-assistant/assets/012_飞书-添加接收消息事件_X4z6bNPsso.png)

![](/workbuddy/08-im-assistant/assets/013_飞书-卡片回调_AvOxbO7M9o.png)

8. Eine Version erstellen und die App veröffentlichen; danach dem Bot in Feishu eine schreibgeschützte Testaufgabe senden.

![](/workbuddy/08-im-assistant/assets/014_飞书-发布应用_TafwbySxco.png)

## DingTalk anbinden

![](/workbuddy/08-im-assistant/assets/015_image_RRhMbPo5uo.png)

1. Melden Sie sich mit dem Admin-Konto des Unternehmens am DingTalk-Entwicklerbackend an, gehen Sie zu „App-Entwicklung" und legen Sie eine App an;

![](/workbuddy/08-im-assistant/assets/016_钉钉-创建应用_NuNTbdscZo.png)

2. Fügen Sie der App Bot-Fähigkeiten hinzu, tragen Sie Bot-Name, Beschreibung und Avatar ein und bestätigen Sie die Veröffentlichung;

![](/workbuddy/08-im-assistant/assets/017_钉钉-添加机器人能力_ORRbbZrqgo.png)

3. Schalten Sie die benötigten Berechtigungen frei;

![](/workbuddy/08-im-assistant/assets/018_钉钉-开通权限_QG1zbPhcxo.png)

4. Rufen Sie die App-Zugangsdaten ab und tragen Sie sie in WorkBuddy ein. Verifizieren Sie vorzugsweise zuerst in einer Testorganisation oder Testgruppe.

![](/workbuddy/08-im-assistant/assets/019_钉钉-获取应用凭证_OI8fbW0JNo.png)

---

> Nach dem Binden des IM-Assistenten lässt sich in Kombination mit [automatisierten Aufgaben](/de/workbuddy/10-automation/) eine Kette aus „zeitgesteuert ausführen + per IM pushen" aufbauen.
