# Chapitre 8 : Intégrer le Mini-programme et l'assistant IM dans WorkBuddy

Installer le client n'est que la première étape. Ce chapitre fait passer WorkBuddy de « réservé au bureau devant l'ordinateur » à « pilotable depuis le téléphone à tout moment » : le Mini-programme permet de suivre et de piloter à distance, l'assistant IM permet de lancer des tâches directement depuis WeChat, Feishu ou DingTalk.

## Les deux modes du Mini-programme

![Entrée du mini-programme : modes local et cloud](/workbuddy/08-im-assistant/assets/001_image_Vv5bbtLVBo.png)

| Mode | Où s'exécute la tâche | Ordinateur requis en ligne | Tâches adaptées |
| --- | --- | --- | --- |
| Mode local | L'ordinateur connecté | Oui | Fichiers locaux, Skills locaux, espaces de travail existants |
| Mode cloud | Environnement cloud isolé | Non | Études, rédaction, analyses ponctuelles, tâches en parallèle |

**Première utilisation** : ouvrez le Mini-programme WorkBuddy depuis l'entrée officielle et connectez-vous, puis vérifiez si vous êtes en mode local ou cloud ; en mode local, assurez-vous que l'ordinateur cible est en ligne et correctement connecté.

## La chaîne de travail de l'assistant IM

```mermaid
sequenceDiagram
    participant U as IM mobile
    participant B as Bot applicatif
    participant W as Assistant WorkBuddy
    participant P as Espace de travail local
    U->>B: Envoie la tâche
    B->>W: Transmet le message par callback ou connexion persistante
    W->>P: Exécute dans le répertoire autorisé
    P-->>W: Livrables et statut
    W-->>B: Renvoie le résultat
    B-->>U: Consultation et validation sur mobile
```

## Intégrer l'assistant WeChat : une simple association par QR code

1. Ouvrez WorkBuddy, cliquez sur l'engrenage de la rubrique « Assistant » à gauche, puis entrez dans « Paramètres de l'assistant » ;

![L'engrenage du panneau Assistant ouvre les réglages](/workbuddy/08-im-assistant/assets/002_微信助理-进入助理设置_NbI2b9v4fo.png)

2. Repérez « Intégration de l'assistant WeChat » et cliquez sur « Configurer » ;

![Cliquer sur Configurer dans l'intégration Assistant WeChat](/workbuddy/08-im-assistant/assets/003_微信助理-选择集成_S9HlbaEmdo.png)

3. Attendez la génération du QR code d'association, puis scannez-le avec WeChat sur votre téléphone ;

![Liaison en scannant le QR code dans WeChat](/workbuddy/08-im-assistant/assets/004_微信助理-扫码绑定_TElmbNPG5o.png)

4. Quand la carte affiche « Associé », envoyez d'abord une instruction de test en lecture seule ;

![Carte « Lié » ; envoi d'une commande de test en lecture seule](/workbuddy/08-im-assistant/assets/005_微信助理-已绑定_ZQtrb6jCmo.png)

5. Pour changer de compte WeChat, dissociez d'abord le compte actuel, puis scansez à nouveau.

> Le QR code a une durée de validité limitée. Si l'état reste bloqué sur « Association en cours », si le code expire ou si le scan échoue, fermez la fenêtre de configuration et rouvrez-la ; au besoin, redémarrez WorkBuddy et regénérez le QR code.

## Intégrer Feishu

1. WorkBuddy → Paramètres → Paramètres de l'assistant → choisissez Feishu ;

![Sélectionner Feishu dans les réglages de l'assistant](/workbuddy/08-im-assistant/assets/006_image_SbcEbSaoio.png)

2. Créez une application d'entreprise dédiée sur la plateforme ouverte Feishu ;

![Créer une application interne sur la plateforme ouverte Feishu](/workbuddy/08-im-assistant/assets/007_飞书-登录开放平台_EUPhblavHo.png)

3. Ajoutez la capacité bot à l'application ;

![Ajouter la capacité bot à l'app Feishu](/workbuddy/08-im-assistant/assets/008_飞书-添加机器人能力_XFmTb5HGQo.png)

4. Activez les permissions minimales exigées par la page WorkBuddy en cours ;

![Accorder uniquement les permissions minimales demandées](/workbuddy/08-im-assistant/assets/009_飞书-批量导入权限_MRdCbm3Dvo.png)

5. Dans « Identifiants et informations de base », récupérez l'App ID et l'App Secret ;

![Récupérer l'App ID et le Secret dans « Identifiants »](/workbuddy/08-im-assistant/assets/010_飞书-应用凭证_CnItbspOUo.png)

6. Saisissez ces identifiants dans WorkBuddy, puis générez ou copiez les informations de callback ;

![Renseigner les identifiants dans WorkBuddy pour générer le callback](/workbuddy/08-im-assistant/assets/011_飞书-加密与校验配置_WiAYbwBDKo.png)

7. Dans Feishu, configurez l'abonnement aux événements et le callback, en ajoutant les événements de réception de messages, d'interactions avec les cartes, etc. ;

![Abonnement d'événements Feishu : ajouter la réception de messages](/workbuddy/08-im-assistant/assets/012_飞书-添加接收消息事件_X4z6bNPsso.png)

![Configurer le callback d'interaction de carte dans Feishu](/workbuddy/08-im-assistant/assets/013_飞书-卡片回调_AvOxbO7M9o.png)

8. Créez une version, publiez l'application, puis envoyez au bot dans Feishu une tâche de test en lecture seule.

![Créer une version et publier l'app Feishu](/workbuddy/08-im-assistant/assets/014_飞书-发布应用_TafwbySxco.png)

## Intégrer DingTalk

![Configuration DingTalk : développement d'app et entrée bot](/workbuddy/08-im-assistant/assets/015_image_RRhMbPo5uo.png)

1. Connectez-vous au portail développeur DingTalk avec un compte d'administrateur d'entreprise, allez dans « Développement d'applications » et créez une application ;

![Créer une app dans la console développeur DingTalk](/workbuddy/08-im-assistant/assets/016_钉钉-创建应用_NuNTbdscZo.png)

2. Ajoutez la capacité bot à l'application, renseignez son nom, sa description et son avatar, puis confirmez la publication ;

![Ajouter la capacité bot dans DingTalk et publier](/workbuddy/08-im-assistant/assets/017_钉钉-添加机器人能力_ORRbbZrqgo.png)

3. Activez les permissions nécessaires ;

![Accorder les permissions requises de l'app DingTalk](/workbuddy/08-im-assistant/assets/018_钉钉-开通权限_QG1zbPhcxo.png)

4. Récupérez les identifiants de l'application et reportez-les dans WorkBuddy. Effectuez de préférence la validation dans une organisation ou un groupe de test.

![Récupérer les identifiants DingTalk et les reporter dans WorkBuddy](/workbuddy/08-im-assistant/assets/019_钉钉-获取应用凭证_OI8fbW0JNo.png)

---

> Une fois l'assistant IM associé, combiné aux [tâches automatisées](/fr/workbuddy/10-automation/), vous pouvez chaîner « exécution planifiée + notification IM » en une seule ligne.
