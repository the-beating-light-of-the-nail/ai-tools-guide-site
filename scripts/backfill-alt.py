# -*- coding: utf-8 -*-
# 图片 alt 回填：以中文版 workbuddy 的「图片路径 → alt」为源，回填到四个翻译版。
# 用法：py scripts/backfill-alt.py
# 机制：
#   1. 扫描中文版所有 markdown，建立 图片绝对路径 → 中文 alt 映射
#   2. 扫描 en/de/fr/zh-tw 版中的空 alt 图片 ![](path)，按 ALT_TABLE 翻译后回填
#   3. 映射表缺词条时打印清单（补全 ALT_TABLE 后重跑即可），已回填的跳过
import re
from pathlib import Path

DOCS = Path(__file__).parent.parent / "docs"
LANGS = ["en", "zh-tw", "de", "fr"]
IMG_RE = re.compile(r"!\[([^\]]*)\]\((/[^)\s]+)\)")

# 中文 alt → 各语言翻译（新增中文 alt 后在此补词条）
ALT_TABLE = {
    "官网下载入口": {
        "en": "Official site download page", "zh-tw": "官網下載入口",
        "de": "Download-Seite der offiziellen Website", "fr": "Page de téléchargement du site officiel",
    },
    "自动检测设备版本": {
        "en": "Auto-detected platform version", "zh-tw": "自動偵測裝置版本",
        "de": "Automatisch erkannte Geräteversion", "fr": "Version de l'appareil détectée automatiquement",
    },
    "双击安装文件": {
        "en": "Double-click the installer", "zh-tw": "雙擊安裝檔",
        "de": "Installationsdatei doppelklicken", "fr": "Double-cliquer sur le fichier d'installation",
    },
    "核对发布者后继续": {
        "en": "Verify the publisher and continue", "zh-tw": "核對發行者後繼續",
        "de": "Herausgeber prüfen und fortfahren", "fr": "Vérifier l'éditeur et continuer",
    },
    "安装向导": {
        "en": "Installation wizard", "zh-tw": "安裝精靈",
        "de": "Installationsassistent", "fr": "Assistant d'installation",
    },
    "从应用程序启动": {
        "en": "Launch from the Applications folder", "zh-tw": "從應用程式啟動",
        "de": "Aus dem Programme-Ordner starten", "fr": "Lancer depuis le dossier Applications",
    },
    "拖入应用程序": {
        "en": "Drag into Applications", "zh-tw": "拖入應用程式",
        "de": "In den Programme-Ordner ziehen", "fr": "Glisser dans Applications",
    },
    "准备运行环境": {
        "en": "Preparing the runtime", "zh-tw": "準備執行環境",
        "de": "Laufzeitumgebung wird vorbereitet", "fr": "Préparation de l'environnement d'exécution",
    },
    "安装完成": {
        "en": "Installation complete", "zh-tw": "安裝完成",
        "de": "Installation abgeschlossen", "fr": "Installation terminée",
    },
    "点击登录按钮": {
        "en": "Click the sign-in button", "zh-tw": "點擊登入按鈕",
        "de": "Auf die Anmelde-Schaltfläche klicken", "fr": "Cliquer sur le bouton de connexion",
    },
    "跳转到网页登录": {
        "en": "Redirect to web sign-in", "zh-tw": "跳轉到網頁登入",
        "de": "Zur Web-Anmeldung weiterleiten", "fr": "Redirection vers la connexion web",
    },
    "微信扫码或手机号登录": {
        "en": "Sign in with WeChat QR code or phone number", "zh-tw": "微信掃碼或手機號碼登入",
        "de": "Anmeldung per WeChat-QR-Code oder Telefonnummer", "fr": "Connexion par QR code WeChat ou numéro de téléphone",
    },
    "登录完成": {
        "en": "Signed in", "zh-tw": "登入完成",
        "de": "Anmeldung abgeschlossen", "fr": "Connexion réussie",
    },
    "检查更新": {
        "en": "Check for updates", "zh-tw": "檢查更新",
        "de": "Nach Updates suchen", "fr": "Rechercher les mises à jour",
    },
    # ---- 以下为 2026-09-18 中文 alt 补写批次 ----
    # 01-intro / 03-interface
    "WorkBuddy 主界面：输入一句话派活，它自己执行": {
        "en": "WorkBuddy main interface: type one instruction and it executes", "zh-tw": "WorkBuddy 主介面：輸入一句話派活，它自己執行",
        "de": "WorkBuddy-Hauptoberfläche: eine Anweisung eingeben, es führt aus", "fr": "Interface principale de WorkBuddy : une phrase, et il exécute",
    },
    "多个智能体并行处理任务": {
        "en": "Multiple agents working on tasks in parallel", "zh-tw": "多個智慧體並行處理任務",
        "de": "Mehrere Agenten bearbeiten Aufgaben parallel", "fr": "Plusieurs agents traitent des tâches en parallèle",
    },
    "高危指令拦截与文件夹授权设置": {
        "en": "High-risk command interception and folder-level permissions", "zh-tw": "高風險指令攔截與資料夾授權設定",
        "de": "Abfangen riskanter Befehle und Ordnerberechtigungen", "fr": "Interception des commandes à risque et autorisations de dossier",
    },
    "主界面三区布局：左侧任务栏、中间对话区、右侧结果区": {
        "en": "Three-zone layout: tasks left, chat center, results right", "zh-tw": "主介面三區佈局：左側任務欄、中間對話區、右側結果區",
        "de": "Drei-Zonen-Layout: Aufgaben links, Dialog Mitte, Ergebnisse rechts", "fr": "Interface en trois zones : tâches à gauche, dialogue au centre, résultats à droite",
    },
    "目录空间权限设置：「允许完全访问」开关": {
        "en": "Workspace permission settings: the full-access toggle", "zh-tw": "目錄空間權限設定：「允許完全存取」開關",
        "de": "Berechtigungen des Arbeitsbereichs: Schalter für Vollzugriff", "fr": "Autorisations de l'espace de travail : interrupteur d'accès total",
    },
    "三种工作模式选择：Ask、Craft、Plan": {
        "en": "Choosing among the three modes: Ask, Craft, Plan", "zh-tw": "三種工作模式選擇：Ask、Craft、Plan",
        "de": "Auswahl der drei Arbeitsmodi: Ask, Craft, Plan", "fr": "Choix parmi les trois modes : Ask, Craft, Plan",
    },
    "模型选择：自动模式或指定具体模型": {
        "en": "Model selection: auto mode or a specific model", "zh-tw": "模型選擇：自動模式或指定具體模型",
        "de": "Modellauswahl: Automatik oder bestimmtes Modell", "fr": "Choix du modèle : automatique ou modèle précis",
    },
    # 04-first-task
    "点击「新建任务」入口": {
        "en": "Clicking the New Task entry", "zh-tw": "點擊「新建任務」入口",
        "de": "Auf den Einstieg Neue Aufgabe klicken", "fr": "Cliquer sur l'entrée « Nouvelle tâche »",
    },
    "选择或创建独立工作目录": {
        "en": "Choosing or creating a dedicated work directory", "zh-tw": "選擇或建立獨立工作目錄",
        "de": "Eigenes Arbeitsverzeichnis wählen oder anlegen", "fr": "Choisir ou créer un répertoire de travail dédié",
    },
    "选择工作模式：Craft、Ask 或 Plan": {
        "en": "Choosing the work mode: Craft, Ask or Plan", "zh-tw": "選擇工作模式：Craft、Ask 或 Plan",
        "de": "Arbeitsmodus wählen: Craft, Ask oder Plan", "fr": "Choisir le mode de travail : Craft, Ask ou Plan",
    },
    "选择任务使用的模型": {
        "en": "Selecting the model for the task", "zh-tw": "選擇任務使用的模型",
        "de": "Modell für die Aufgabe auswählen", "fr": "Sélectionner le modèle pour la tâche",
    },
    "在输入框写下任务说明": {
        "en": "Writing the task brief in the input box", "zh-tw": "在輸入框寫下任務說明",
        "de": "Aufgabenbeschreibung ins Eingabefeld schreiben", "fr": "Rédiger le descriptif de la tâche dans le champ de saisie",
    },
    "可选：指定 Skill、专家、连接器": {
        "en": "Optional: specifying skills, experts, connectors", "zh-tw": "可選：指定 Skill、專家、連接器",
        "de": "Optional: Skills, Experten, Konnektoren angeben", "fr": "Optionnel : indiquer skills, experts, connecteurs",
    },
    "发送后观察执行计划与工具调用": {
        "en": "Watching the plan and tool calls after sending", "zh-tw": "傳送後觀察執行計畫與工具調用",
        "de": "Nach dem Senden Plan und Tool-Aufrufe beobachten", "fr": "Observer le plan et les appels d'outils après l'envoi",
    },
    "结果区预览生成的汇报 PPT 并验收": {
        "en": "Previewing and accepting the generated deck in the results pane", "zh-tw": "結果區預覽產生的匯報 PPT 並驗收",
        "de": "Erzeugte Präsentation im Ergebnisbereich prüfen und abnehmen", "fr": "Prévisualiser et valider le rapport PPT généré dans le panneau de résultats",
    },
    # 05-skills
    "左侧「专家·技能·连接器」入口与技能搜索": {
        "en": "The Experts·Skills·Connectors entry and skill search", "zh-tw": "左側「專家·技能·連接器」入口與技能搜尋",
        "de": "Einstieg Experten·Skills·Konnektoren und Skill-Suche", "fr": "Entrée « Experts·Skills·Connecteurs » et recherche de skills",
    },
    "SkillHub 技能市场": {
        "en": "The SkillHub marketplace", "zh-tw": "SkillHub 技能市場",
        "de": "Der SkillHub-Marktplatz", "fr": "La marketplace SkillHub",
    },
    "「上传技能」导入 zip 技能包": {
        "en": "Importing a skill package via Upload Skill", "zh-tw": "「上傳技能」匯入 zip 技能包",
        "de": "Skill-Paket per Skill hochladen importieren", "fr": "Importer un paquet de skills via « Téléverser un skill »",
    },
    "选择本地 zip 文件上传技能": {
        "en": "Selecting a local zip file to upload", "zh-tw": "選擇本地 zip 檔案上傳技能",
        "de": "Lokale ZIP-Datei für den Skill-Upload auswählen", "fr": "Sélectionner un fichier zip local à téléverser",
    },
    "输入 / 唤出已安装的技能": {
        "en": "Typing / to summon an installed skill", "zh-tw": "輸入 / 喚出已安裝的技能",
        "de": "Mit / einen installierten Skill aufrufen", "fr": "Taper / pour invoquer un skill installé",
    },
    "引用 Skill 并把文章给到": {
        "en": "Referencing the skill and passing in the article", "zh-tw": "引用 Skill 並把文章給到",
        "de": "Skill referenzieren und den Artikel übergeben", "fr": "Référencer le skill et fournir l'article",
    },
    "WorkBuddy 加载 Skill 内容": {
        "en": "WorkBuddy loading the skill contents", "zh-tw": "WorkBuddy 載入 Skill 內容",
        "de": "WorkBuddy lädt die Skill-Inhalte", "fr": "WorkBuddy charge le contenu du skill",
    },
    "按 Skill 规则执行去 AI 味处理": {
        "en": "Applying the de-AI-flavor rules from the skill", "zh-tw": "按 Skill 規則執行去 AI 味處理",
        "de": "Regeln des Skills zum Entfernen des AI-Stils anwenden", "fr": "Appliquer les règles du skill pour déflavoriser l'IA",
    },
    "去 AI 味后的成品效果": {
        "en": "The finished text after removing the AI flavor", "zh-tw": "去 AI 味後的成品效果",
        "de": "Ergebnis nach dem Entfernen des AI-Stils", "fr": "Résultat après suppression de la saveur IA",
    },
    "技能列表切到「我安装的」": {
        "en": "Switching the skill list to My Installed", "zh-tw": "技能列表切到「我安裝的」",
        "de": "Skill-Liste auf Von mir installiert umschalten", "fr": "Basculer la liste des skills sur « Mes installations »"
    },
    "点开关关闭对应 Skill": {
        "en": "Toggling a skill off with the switch", "zh-tw": "點開關關閉對應 Skill",
        "de": "Skill per Schalter deaktivieren", "fr": "Désactiver un skill via l'interrupteur",
    },
    "「···」菜单：删除或编辑 Skill": {
        "en": "The ··· menu: delete or edit a skill", "zh-tw": "「···」選單：刪除或編輯 Skill",
        "de": "Das-Menü ···: Skill löschen oder bearbeiten", "fr": "Le menu « ··· » : supprimer ou modifier un skill",
    },
    # 06-experts
    "「专家·技能·连接器」选择「专家」": {
        "en": "Selecting Experts in Experts·Skills·Connectors", "zh-tw": "「專家·技能·連接器」選擇「專家」",
        "de": "Experten unter Experten·Skills·Konnektoren wählen", "fr": "Choisir « Experts » dans Experts·Skills·Connecteurs"
    },
    "点「召唤专家」，以「高考我帮你」为例": {
        "en": "Clicking Summon Expert, shown with Gaokao Helper", "zh-tw": "點「召喚專家」，以「高考我幫你」為例",
        "de": "Auf Experten rufen klicken, Beispiel Gaokao-Hilfe", "fr": "Cliquer sur « Invoquer un expert », exemple « Aide Gaokao »"
    },
    "输入任务内容，如查高考数学真题": {
        "en": "Entering a task, e.g. finding past Gaokao math papers", "zh-tw": "輸入任務內容，如查高考數學真題",
        "de": "Aufgabe eingeben, z. B. Gaokao-Mathe-Aufgaben suchen", "fr": "Saisir une tâche, p. ex. trouver les annales de maths du Gaokao",
    },
    "「我的专家」里创建专家": {
        "en": "Creating an expert under My Experts", "zh-tw": "「我的專家」裡建立專家",
        "de": "Experten unter Meine Experten anlegen", "fr": "Créer un expert dans « Mes experts »"
    },
    "填写公众号创作专家的人设与方法论": {
        "en": "Filling in the persona and methodology of a WeChat writer expert", "zh-tw": "填寫公眾號創作專家的人設與方法論",
        "de": "Persona und Methodik eines WeChat-Autor-Experten ausfüllen", "fr": "Renseigner persona et méthodologie d'un expert rédacteur WeChat",
    },
    "生成专家后直接测试效果": {
        "en": "Testing the expert right after generation", "zh-tw": "產生專家後直接測試效果",
        "de": "Den generierten Experten direkt testen", "fr": "Tester l'expert dès sa génération",
    },
    "在「我的专家」中找到新建的专家": {
        "en": "Finding the new expert under My Experts", "zh-tw": "在「我的專家」中找到新建的專家",
        "de": "Den neuen Experten unter Meine Experten finden", "fr": "Retrouver le nouvel expert dans « Mes experts »"
    },
    "「专家团」入口：点「召唤」": {
        "en": "The Expert Team entry: clicking Summon", "zh-tw": "「專家團」入口：點「召喚」",
        "de": "Einstieg Expertenteam: auf Rufen klicken", "fr": "Entrée « Équipe d'experts » : cliquer sur « Invoquer »"
    },
    "专家团列表与召唤入口": {
        "en": "Expert team list and summon entry", "zh-tw": "專家團列表與召喚入口",
        "de": "Liste der Expertenteams und Aufruf-Einstieg", "fr": "Liste des équipes d'experts et point d'invocation",
    },
    # 07-connectors
    "连接器列表：QQ 邮箱、腾讯文档、腾讯会议等": {
        "en": "Connector list: QQ Mail, Tencent Docs, Tencent Meeting and more", "zh-tw": "連接器列表：QQ 郵箱、騰訊文件、騰訊會議等",
        "de": "Konnektorliste: QQ-Mail, Tencent Docs, Tencent Meeting u. a.", "fr": "Liste des connecteurs : QQ Mail, Tencent Docs, Tencent Meeting, etc.",
    },
    "按引导加载腾讯会议连接器": {
        "en": "Loading the Tencent Meeting connector step by step", "zh-tw": "按引導載入騰訊會議連接器",
        "de": "Den Tencent-Meeting-Konnektor geführt laden", "fr": "Charger le connecteur Tencent Meeting avec l'assistant",
    },
    "腾讯会议连接器授权确认": {
        "en": "Authorizing the Tencent Meeting connector", "zh-tw": "騰訊會議連接器授權確認",
        "de": "Autorisierung des Tencent-Meeting-Konnektors", "fr": "Autorisation du connecteur Tencent Meeting",
    },
    "下指令让它创建明天下午 3 点的会议": {
        "en": "Asking it to create a meeting for 3 pm tomorrow", "zh-tw": "下指令讓它建立明天下午 3 點的會議",
        "de": "Anweisung, ein Meeting für morgen 15 Uhr anzulegen", "fr": "Demander de créer une réunion demain à 15 h",
    },
    "连接器读取指令并执行建会议": {
        "en": "The connector reading the command and creating the meeting", "zh-tw": "連接器讀取指令並執行建會議",
        "de": "Der Konnektor liest die Anweisung und legt das Meeting an", "fr": "Le connecteur lit l'instruction et crée la réunion",
    },
    "会议创建成功的结果反馈": {
        "en": "Confirmation that the meeting was created", "zh-tw": "會議建立成功的結果回饋",
        "de": "Rückmeldung: Meeting erfolgreich erstellt", "fr": "Confirmation de la création de la réunion",
    },
    "「自定义连接器」：配置 MCP 服务地址与鉴权": {
        "en": "Custom connector: MCP endpoint and authentication", "zh-tw": "「自訂連接器」：設定 MCP 服務位址與鑑權",
        "de": "Eigener Konnektor: MCP-Adresse und Authentifizierung", "fr": "« Connecteur personnalisé » : adresse MCP et authentification",
    },
    # 08-im-assistant
    "小程序本机模式与云端模式入口": {
        "en": "Mini-program entry for local and cloud modes", "zh-tw": "小程式本機模式與雲端模式入口",
        "de": "Mini-Programm-Einstieg für Lokal- und Cloud-Modus", "fr": "Entrée du mini-programme : modes local et cloud",
    },
    "「助理」栏齿轮进入助理设置": {
        "en": "Gear icon in the Assistant panel opens settings", "zh-tw": "「助理」欄齒輪進入助理設定",
        "de": "Zahnrad in der Assistenten-Leiste öffnet die Einstellungen", "fr": "L'engrenage du panneau Assistant ouvre les réglages",
    },
    "「微信助理集成」点「配置」": {
        "en": "Clicking Configure on WeChat Assistant integration", "zh-tw": "「微信助理整合」點「設定」",
        "de": "Bei WeChat-Assistent-Integration auf Konfigurieren klicken", "fr": "Cliquer sur Configurer dans l'intégration Assistant WeChat"
    },
    "手机微信扫码绑定": {
        "en": "Binding by scanning the QR code in WeChat", "zh-tw": "手機微信掃碼綁定",
        "de": "Bindung durch Scannen des QR-Codes mit WeChat", "fr": "Liaison en scannant le QR code dans WeChat",
    },
    "卡片显示「已绑定」，发只读测试指令": {
        "en": "Card shows Bound; sending a read-only test command", "zh-tw": "卡片顯示「已綁定」，發只讀測試指令",
        "de": "Karte zeigt Gebunden; schreibgeschützten Testbefehl senden", "fr": "Carte « Lié » ; envoi d'une commande de test en lecture seule"
    },
    "助理设置里选择飞书": {
        "en": "Selecting Feishu in assistant settings", "zh-tw": "助理設定裡選擇飛書",
        "de": "Feishu in den Assistenten-Einstellungen wählen", "fr": "Sélectionner Feishu dans les réglages de l'assistant",
    },
    "登录飞书开放平台，创建企业自建应用": {
        "en": "Creating a self-built app on the Feishu open platform", "zh-tw": "登入飛書開放平台，建立企業自建應用",
        "de": "Eigenbau-App auf der Feishu-Open-Plattform anlegen", "fr": "Créer une application interne sur la plateforme ouverte Feishu",
    },
    "为飞书应用添加机器人能力": {
        "en": "Adding bot capability to the Feishu app", "zh-tw": "為飛書應用新增機器人能力",
        "de": "Dem Feishu-App Bot-Fähigkeit hinzufügen", "fr": "Ajouter la capacité bot à l'app Feishu",
    },
    "按页面要求开通最小权限": {
        "en": "Granting the minimal permissions requested", "zh-tw": "按頁面要求開通最小權限",
        "de": "Nur die geforderten Minimalrechte freigeben", "fr": "Accorder uniquement les permissions minimales demandées",
    },
    "「凭证与基础信息」里拿 App ID 和 Secret": {
        "en": "Getting the App ID and Secret from Credentials & Basics", "zh-tw": "「憑證與基礎資訊」裡拿 App ID 和 Secret",
        "de": "App-ID und Secret unter Anmeldedaten & Grunddaten holen", "fr": "Récupérer l'App ID et le Secret dans « Identifiants »"
    },
    "把凭证填回 WorkBuddy，生成回调信息": {
        "en": "Pasting credentials back into WorkBuddy to get callbacks", "zh-tw": "把憑證填回 WorkBuddy，產生回呼資訊",
        "de": "Anmeldedaten in WorkBuddy eintragen und Callback erzeugen", "fr": "Renseigner les identifiants dans WorkBuddy pour générer le callback",
    },
    "飞书配置事件订阅：添加接收消息事件": {
        "en": "Feishu event subscription: adding the message event", "zh-tw": "飛書設定事件訂閱：新增接收訊息事件",
        "de": "Feishu-Ereignisabonnement: Nachrichten-Ereignis hinzufügen", "fr": "Abonnement d'événements Feishu : ajouter la réception de messages",
    },
    "飞书配置卡片交互回调": {
        "en": "Configuring the card interaction callback in Feishu", "zh-tw": "飛書設定卡片互動回呼",
        "de": "Card-Interaktions-Callback in Feishu konfigurieren", "fr": "Configurer le callback d'interaction de carte dans Feishu",
    },
    "创建版本并发布飞书应用": {
        "en": "Creating a version and publishing the Feishu app", "zh-tw": "建立版本並發布飛書應用",
        "de": "Version erstellen und Feishu-App veröffentlichen", "fr": "Créer une version et publier l'app Feishu",
    },
    "钉钉接入配置：应用开发与机器人入口": {
        "en": "DingTalk setup: app development and bot entry", "zh-tw": "釘釘接入設定：應用開發與機器人入口",
        "de": "DingTalk-Einrichtung: App-Entwicklung und Bot-Einstieg", "fr": "Configuration DingTalk : développement d'app et entrée bot",
    },
    "钉钉开发者后台创建应用": {
        "en": "Creating an app in the DingTalk developer console", "zh-tw": "釘釘開發者後台建立應用",
        "de": "App in der DingTalk-Entwicklerkonsole anlegen", "fr": "Créer une app dans la console développeur DingTalk",
    },
    "钉钉添加机器人能力并发布": {
        "en": "Adding bot capability in DingTalk and publishing", "zh-tw": "釘釘新增機器人能力並發布",
        "de": "Bot-Fähigkeit in DingTalk hinzufügen und veröffentlichen", "fr": "Ajouter la capacité bot dans DingTalk et publier",
    },
    "开通钉钉应用所需权限": {
        "en": "Granting the required DingTalk app permissions", "zh-tw": "開通釘釘應用所需權限",
        "de": "Benötigte DingTalk-App-Rechte freigeben", "fr": "Accorder les permissions requises de l'app DingTalk",
    },
    "获取钉钉应用凭证，填回 WorkBuddy": {
        "en": "Getting the DingTalk credentials back into WorkBuddy", "zh-tw": "取得釘釘應用憑證，填回 WorkBuddy",
        "de": "DingTalk-Anmeldedaten holen und in WorkBuddy eintragen", "fr": "Récupérer les identifiants DingTalk et les reporter dans WorkBuddy",
    },
    # 09-external-api / 10-automation / adv-automation-reliability
    "从设置进入模型接入，无需插件": {
        "en": "Model access from settings, no plugin needed", "zh-tw": "從設定進入模型接入，無需外掛",
        "de": "Modell-Anbindung über die Einstellungen, ohne Plugin", "fr": "Accès aux modèles depuis les réglages, sans extension",
    },
    "设置里的模型选项": {
        "en": "The model options in settings", "zh-tw": "設定裡的模型選項",
        "de": "Die Modell-Optionen in den Einstellungen", "fr": "Les options de modèle dans les réglages",
    },
    "点「添加模型」": {
        "en": "Clicking Add Model", "zh-tw": "點「新增模型」",
        "de": "Auf Modell hinzufügen klicken", "fr": "Cliquer sur « Ajouter un modèle »"
    },
    "选择 Coding Plan 或填自定义 API": {
        "en": "Choosing a Coding Plan or a custom API", "zh-tw": "選擇 Coding Plan 或填自訂 API",
        "de": "Coding Plan wählen oder eigene API eintragen", "fr": "Choisir un Coding Plan ou saisir une API personnalisée",
    },
    "填入 DeepSeek API Key 完成接入": {
        "en": "Entering the DeepSeek API key to finish setup", "zh-tw": "填入 DeepSeek API Key 完成接入",
        "de": "DeepSeek-API-Key eintragen und Einrichtung abschließen", "fr": "Saisir la clé API DeepSeek pour finaliser",
    },
    "云端 API 与本地 Ollama 的选择": {
        "en": "Choosing between cloud APIs and local Ollama", "zh-tw": "雲端 API 與本地 Ollama 的選擇",
        "de": "Wahl zwischen Cloud-API und lokalem Ollama", "fr": "Choisir entre API cloud et Ollama local",
    },
    "左侧「自动化」入口": {
        "en": "The Automation entry on the left", "zh-tw": "左側「自動化」入口",
        "de": "Der Einstieg Automatisierung links", "fr": "L'entrée « Automatisation » à gauche"
    },
    "点「添加自动化」自定义任务": {
        "en": "Clicking Add Automation to define a task", "zh-tw": "點「新增自動化」自訂任務",
        "de": "Auf Automatisierung hinzufügen klicken, um eine Aufgabe zu definieren", "fr": "Cliquer sur « Ajouter une automatisation » pour définir une tâche"
    },
    "每日 AI 资讯推送：定时 8 点发送": {
        "en": "Daily AI news digest scheduled for 8 am", "zh-tw": "每日 AI 資訊推送：定時 8 點發送",
        "de": "Tägliche AI-News, geplant für 8 Uhr", "fr": "Résumé IA quotidien programmé à 8 h",
    },
    "官方任务模板：新闻推送、周报生成等": {
        "en": "Official task templates: news digest, weekly report and more", "zh-tw": "官方任務模板：新聞推送、週報產生等",
        "de": "Offizielle Aufgabenvorlagen: News-Digest, Wochenbericht u. a.", "fr": "Modèles officiels de tâches : veille, rapport hebdo, etc.",
    },
    "手动运行：聚合四个数据源的当日 AI 热点清单": {
        "en": "Manual run: daily AI hotlist from four sources", "zh-tw": "手動執行：聚合四個資料來源的當日 AI 熱點清單",
        "de": "Manueller Lauf: Tages-Hotlist aus vier Quellen", "fr": "Exécution manuelle : hotlist IA du jour depuis quatre sources",
    },
    "热点清单的输出结果示例": {
        "en": "Sample output of the hotlist", "zh-tw": "熱點清單的輸出結果範例",
        "de": "Beispielausgabe der Hotlist", "fr": "Exemple de sortie de la hotlist",
    },
    "把 Prompt 与数据源保存为定时任务": {
        "en": "Saving the prompt and sources as a scheduled task", "zh-tw": "把 Prompt 與資料來源儲存為定時任務",
        "de": "Prompt und Quellen als geplante Aufgabe speichern", "fr": "Enregistrer le prompt et les sources en tâche planifiée",
    },
    "定时任务设置：每天 9:00 自动执行并推送": {
        "en": "Scheduled task: runs and pushes daily at 9:00", "zh-tw": "定時任務設定：每天 9:00 自動執行並推送",
        "de": "Geplante Aufgabe: täglich 9:00 Uhr mit Push", "fr": "Tâche planifiée : exécution et envoi quotidiens à 9 h",
    },
    # adv-build-skill / adv-multi-agent
    "cangjie-skill：把书和视频蒸馏成 Skill 的工具": {
        "en": "cangjie-skill: distills books and videos into skills", "zh-tw": "cangjie-skill：把書和影片蒸餾成 Skill 的工具",
        "de": "cangjie-skill: destilliert Bücher und Videos zu Skills", "fr": "cangjie-skill : distille livres et vidéos en skills",
    },
    "蒸馏《文案创作完全手册》的实操示例": {
        "en": "Walkthrough: distilling The Copywriting Handbook", "zh-tw": "蒸餾《文案創作完全手冊》的實操範例",
        "de": "Praxisbeispiel: Destillation des Copywriting-Handbuchs", "fr": "Exemple : distillation du manuel de copywriting",
    },
    "五个维度并行提取：框架、原则、案例、反例、术语": {
        "en": "Parallel extraction on five dimensions: frameworks, principles, cases, counterexamples, terms", "zh-tw": "五個維度並行提取：框架、原則、案例、反例、術語",
        "de": "Parallele Extraktion in fünf Dimensionen: Rahmen, Prinzipien, Fälle, Gegenbeispiele, Begriffe", "fr": "Extraction parallèle en cinq dimensions : cadres, principes, cas, contre-exemples, termes",
    },
    "三重验证筛选：候选单元只保留 10–25 个": {
        "en": "Triple-validation filtering: only 10–25 units kept", "zh-tw": "三重驗證篩選：候選單元只保留 10–25 個",
        "de": "Dreifache Validierung: nur 10–25 Einträge bleiben", "fr": "Triple validation : seuls 10 à 25 éléments conservés",
    },
    "蒸馏产物目录结构：skills、index 与测试用例": {
        "en": "Distilled output structure: skills, index and tests", "zh-tw": "蒸餾產物目錄結構：skills、index 與測試案例",
        "de": "Struktur der Destillatausgabe: skills, index und Tests", "fr": "Structure produite : skills, index et tests",
    },
    "单个 Skill 文件：触发条件、步骤、边界与测试": {
        "en": "A single skill file: triggers, steps, boundaries, tests", "zh-tw": "單個 Skill 檔案：觸發條件、步驟、邊界與測試",
        "de": "Eine einzelne Skill-Datei: Auslöser, Schritte, Grenzen, Tests", "fr": "Un fichier skill : déclencheurs, étapes, limites, tests",
    },
    "视频蒸馏工作流：下载、转写、六阶段蒸馏": {
        "en": "Video distillation workflow: download, transcribe, six stages", "zh-tw": "影片蒸餾工作流：下載、轉寫、六階段蒸餾",
        "de": "Video-Destillationsworkflow: Download, Transkription, sechs Stufen", "fr": "Flux de distillation vidéo : téléchargement, transcription, six étapes",
    },
    "吴恩达 AI 入门课蒸馏结果：25 个 Skill": {
        "en": "Distilling Andrew Ng's AI course: 25 skills", "zh-tw": "吳恩達 AI 入門課蒸餾結果：25 個 Skill",
        "de": "Destillation von Andrew Ngs AI-Kurs: 25 Skills", "fr": "Distillation du cours d'IA d'Andrew Ng : 25 skills",
    },
    "产品宣传片专家团：文案、分镜、素材、剪辑、配乐分工": {
        "en": "Trailer expert team: copy, storyboard, assets, editing, music", "zh-tw": "產品宣傳片專家團：文案、分鏡、素材、剪輯、配樂分工",
        "de": "Trailer-Expertenteam: Text, Storyboard, Material, Schnitt, Musik", "fr": "Équipe trailer : texte, storyboard, assets, montage, musique",
    },
    "多 Agent 的价值：分工、并行、权限隔离、独立评审": {
        "en": "Why multi-agent: division of labor, parallelism, isolation, review", "zh-tw": "多 Agent 的價值：分工、並行、權限隔離、獨立評審",
        "de": "Der Wert von Multi-Agenten: Teilung, Parallelität, Rechte, Review", "fr": "L'intérêt multi-agents : division, parallélisme, isolation, revue",
    },
    "HyperFrames：对 Agent 友好的开源视频渲染框架": {
        "en": "HyperFrames: an open-source, agent-friendly video renderer", "zh-tw": "HyperFrames：對 Agent 友善的開源影片渲染框架",
        "de": "HyperFrames: ein agentenfreundliches Open-Source-Video-Framework", "fr": "HyperFrames : framework vidéo open source adapté aux agents",
    },
    "给专家团下产品宣传片任务": {
        "en": "Briefing the expert team on a product trailer", "zh-tw": "給專家團下產品宣傳片任務",
        "de": "Dem Expertenteam einen Trailer-Auftrag erteilen", "fr": "Confier une bande-annonce à l'équipe d'experts",
    },
    "专家团执行过程：拆解、分头产出、整合成片": {
        "en": "The team at work: decompose, produce in parallel, assemble", "zh-tw": "專家團執行過程：拆解、分頭產出、整合成片",
        "de": "Das Team bei der Arbeit: zerlegen, parallel produzieren, zusammenführen", "fr": "L'équipe au travail : décomposer, produire en parallèle, assembler",
    },
    "从「我的专家」创建专家团": {
        "en": "Creating an expert team from My Experts", "zh-tw": "從「我的專家」建立專家團",
        "de": "Expertenteam aus Meine Experten anlegen", "fr": "Créer une équipe d'experts depuis « Mes experts »"
    },
    "按给定格式快速创建专家团": {
        "en": "Quickly creating a team with the given template", "zh-tw": "按給定格式快速建立專家團",
        "de": "Team per Vorlage schnell anlegen", "fr": "Créer rapidement une équipe avec le modèle fourni",
    },
    "预置专家团场景：内容创作、软件研发、商业分析等": {
        "en": "Preset team scenarios: content, dev, analysis and more", "zh-tw": "預置專家團場景：內容創作、軟體研發、商業分析等",
        "de": "Vorkonfigurierte Szenarien: Content, Entwicklung, Analyse u. a.", "fr": "Scénarios d'équipes prédéfinis : contenu, dev, analyse, etc.",
    },
    # case-investment / case-knowledge
    "stock-advisor Skill：一键跑完股票研究流水线": {
        "en": "The stock-advisor skill: one-click research pipeline", "zh-tw": "stock-advisor Skill：一鍵跑完股票研究流水線",
        "de": "Das Skill stock-advisor: Research-Pipeline auf einen Klick", "fr": "Le skill stock-advisor : pipeline d'analyse en un clic",
    },
    "上传天孚通信 K 线图要技术面速读": {
        "en": "Uploading a candlestick chart for a technical read", "zh-tw": "上傳天孚通信 K 線圖要技術面速讀",
        "de": "Candlestick-Chart für eine technische Schnellanalyse hochladen", "fr": "Envoi d'un chandelier pour une lecture technique rapide",
    },
    "技术面速读结果：均线排列、支撑压力结构化": {
        "en": "Technical readout: moving averages, support and resistance", "zh-tw": "技術面速讀結果：均線排列、支撐壓力結構化",
        "de": "Technisches Ergebnis: MA-Anordnung, Unterstützung und Widerstand", "fr": "Lecture technique : moyennes mobiles, supports et résistances",
    },
    "补上传财报截图，做全面分析": {
        "en": "Adding earnings screenshots for a full analysis", "zh-tw": "補上傳財報截圖，做全面分析",
        "de": "Zusätzliche Quartalszahlen-Screenshots für die Vollanalyse", "fr": "Ajout de captures des résultats pour l'analyse complète",
    },
    "综合评级表：技术面、基本面、估值、资金面加权评分": {
        "en": "Composite rating: weighted technical, fundamental, valuation, flow", "zh-tw": "綜合評級表：技術面、基本面、估值、資金面加權評分",
        "de": "Gesamtbewertung: gewichtete technische, fundamentale, Bewertungs- und Fluss-Scores", "fr": "Notation composite : technique, fondamental, valorisation, flux pondérés",
    },
    "私董会：四位幕僚带着数据交叉辩论": {
        "en": "The advisory board: four advisors debating with data", "zh-tw": "私董會：四位幕僚帶著資料交叉辯論",
        "de": "Der Beirat: vier Berater debattieren mit Daten", "fr": "Le comité : quatre conseillers débattent avec les données",
    },
    "按投资者类型分档的执行方案": {
        "en": "Execution plan tiered by investor type", "zh-tw": "按投資者類型分檔的執行方案",
        "de": "Ausführungsplan nach Anlegertyp gestaffelt", "fr": "Plan d'exécution par profil d'investisseur",
    },
    "决策挂到未来验证节点：证伪即退出": {
        "en": "Decisions tied to future checkpoints: exit on falsification", "zh-tw": "決策掛到未來驗證節點：證偽即退出",
        "de": "Entscheidungen an künftige Prüfpunkte gebunden: Falsifizierung = Ausstieg", "fr": "Décisions indexées sur des jalons : sortie si invalidation",
    },
    "灵感收件箱：保留原话不扩写": {
        "en": "Idea inbox: keep the original words, no expansion", "zh-tw": "靈感收件匣：保留原話不擴寫",
        "de": "Ideen-Posteingang: Originalwortlaut, keine Ausschmückung", "fr": "Boîte à idées : garder les mots d'origine, sans amplification",
    },
    "处理微信收藏：只读导出并分类": {
        "en": "Processing WeChat favorites: read-only export and sorting", "zh-tw": "處理微信收藏：只讀匯出並分類",
        "de": "WeChat-Favoriten verarbeiten: nur-lesen Export und Sortierung", "fr": "Traiter les favoris WeChat : export en lecture seule et tri",
    },
    "把文件放入 ima 知识库收件箱": {
        "en": "Adding files to the ima knowledge-base inbox", "zh-tw": "把檔案放入 ima 知識庫收件匣",
        "de": "Dateien in den ima-Wissensspeicher-Eingang legen", "fr": "Ajouter des fichiers à la boîte ima",
    },
    "公众号文章解析为 Obsidian Markdown 条目": {
        "en": "A WeChat article parsed into an Obsidian Markdown note", "zh-tw": "公眾號文章解析為 Obsidian Markdown 條目",
        "de": "Ein WeChat-Artikel als Obsidian-Markdown-Eintrag", "fr": "Article WeChat converti en note Markdown Obsidian",
    },
    # case-office
    "团建活动策划 Word 文档生成": {
        "en": "Generating the team-building plan in Word", "zh-tw": "團建活動策劃 Word 文件產生",
        "de": "Teamevent-Planung als Word-Dokument erzeugen", "fr": "Génération du plan de séminaire en Word",
    },
    "策划文档的结构与内容预览": {
        "en": "Preview of the plan's structure and content", "zh-tw": "策劃文件的結構與內容預覽",
        "de": "Vorschau von Struktur und Inhalt des Plans", "fr": "Aperçu de la structure et du contenu du plan",
    },
    "按差异修改生成 v2 版文档": {
        "en": "Revising into a v2 document from the diff", "zh-tw": "按差異修改產生 v2 版文件",
        "de": "Anhand der Unterschiede eine v2-Fassung erzeugen", "fr": "Révision en v2 à partir des différences",
    },
    "修改后的流程表格与预算细化": {
        "en": "Revised schedule table and itemized budget", "zh-tw": "修改後的流程表格與預算細化",
        "de": "Überarbeiteter Ablaufplan und detailliertes Budget", "fr": "Tableau du déroulé révisé et budget détaillé",
    },
    "两版制度文档差异对比结果": {
        "en": "Diff results between two policy versions", "zh-tw": "兩版制度文件差異對比結果",
        "de": "Vergleichsergebnis zweier Richtlinienversionen", "fr": "Résultat du diff entre deux versions de politique",
    },
    "文档对比生成的影响清单与待确认问题": {
        "en": "Impact list and open questions from the document diff", "zh-tw": "文件對比產生的影響清單與待確認問題",
        "de": "Auswirkungsliste und offene Fragen aus dem Dokumentvergleich", "fr": "Liste d'impact et questions ouvertes issues du diff",
    },
    "销售数据分析：字段检查与清洗": {
        "en": "Sales analysis: field checks and cleaning", "zh-tw": "銷售資料分析：欄位檢查與清洗",
        "de": "Verkaufsanalyse: Feldprüfung und Bereinigung", "fr": "Analyse des ventes : contrôle des champs et nettoyage",
    },
    "按产品线统计的销售额与毛利排名": {
        "en": "Sales and gross margin ranked by product line", "zh-tw": "按產品線統計的銷售額與毛利排名",
        "de": "Umsatz und Rohertrag nach Produktlinie sortiert", "fr": "Ventes et marge brute classés par ligne de produit",
    },
    "销售分析图表：柱状图与日度折线图": {
        "en": "Sales charts: bars by product, daily line", "zh-tw": "銷售分析圖表：柱狀圖與日度折線圖",
        "de": "Verkaufscharts: Balken je Produkt, Tageslinie", "fr": "Graphiques de ventes : barres et courbe journalière",
    },
    "多表合并：列名与口径检查": {
        "en": "Multi-sheet merge: column and definition checks", "zh-tw": "多表合併：欄位名與口徑檢查",
        "de": "Tabellenzusammenführung: Spalten- und Definitionsprüfung", "fr": "Fusion multi-tables : contrôle des colonnes et définitions",
    },
    "合并产出：清洗表与异常清单": {
        "en": "Merge output: cleaned sheet and exception list", "zh-tw": "合併產出：清洗表與異常清單",
        "de": "Ausgabe der Zusammenführung: bereinigte Tabelle und Ausnahmeliste", "fr": "Sortie de fusion : table nettoyée et liste d'exceptions",
    },
    "从材料包生成的 8 页汇报 PPT": {
        "en": "The 8-page report deck generated from source materials", "zh-tw": "從材料包產生的 8 頁匯報 PPT",
        "de": "Die 8-seitige Berichts-Präsentation aus dem Materialpaket", "fr": "Le rapport de 8 pages généré à partir des sources",
    },
    # case-self-media / case-video-team
    "建立本周选题池的任务指令": {
        "en": "The brief for building this week's topic pool", "zh-tw": "建立本週選題池的任務指令",
        "de": "Die Anweisung zum Aufbau des Themenpools dieser Woche", "fr": "L'instruction pour constituer le vivier de sujets de la semaine",
    },
    "选题看板：热度、匹配度、成本多维度评分": {
        "en": "Topic board: multi-dimension scores for heat, fit, cost", "zh-tw": "選題看板：熱度、匹配度、成本多維度評分",
        "de": "Themen-Board: Mehrdimensionale Bewertung von Hit, Passung, Kosten", "fr": "Tableau de sujets : scores multi-critères",
    },
    "viral-topic：抓取各平台低粉爆款内容": {
        "en": "viral-topic: pulling low-follower hits across platforms", "zh-tw": "viral-topic：抓取各平台低粉爆款內容",
        "de": "viral-topic: virale Inhalte kleiner Konten plattformübergreifend abrufen", "fr": "viral-topic : récupère les contenus viraux de petits comptes",
    },
    "按正文事实生成多平台标题候选并评分": {
        "en": "Title candidates per platform, scored against the body facts", "zh-tw": "按正文事實產生多平台標題候選並評分",
        "de": "Titelkandidaten je Plattform, bewertet anhand der Fakten", "fr": "Titres candidats par plateforme, notés sur les faits du texte",
    },
    "公众号封面 brief：构图方向与裁切风险": {
        "en": "WeChat cover brief: layouts and crop risks", "zh-tw": "公眾號封面 brief：構圖方向與裁切風險",
        "de": "WeChat-Cover-Briefing: Bildrichtungen und Beschnittrisiken", "fr": "Brief de couverture WeChat : compositions et risques de recadrage",
    },
    "长文改造小红书 8 页图文的逐页结构": {
        "en": "Page-by-page structure of an 8-page Xiaohongshu adaptation", "zh-tw": "長文改造小紅書 8 頁圖文的逐頁結構",
        "de": "Seitenweise Struktur einer 8-seitigen Xiaohongshu-Adaption", "fr": "Structure page par page d'une adaptation Xiaohongshu en 8 pages",
    },
    "60 秒口播时间轴：景别、画面、口播、转场": {
        "en": "60-second timeline: shots, visuals, narration, transitions", "zh-tw": "60 秒口播時間軸：景別、畫面、口播、轉場",
        "de": "60-Sekunden-Timeline: Einstellungen, Bilder, Sprechtext, Übergänge", "fr": "Timeline 60 s : plans, images, voix, transitions",
    },
    "发布后复盘：数据事实与单变量实验": {
        "en": "Post-publish review: data facts and single-variable tests", "zh-tw": "發布後復盤：資料事實與單變數實驗",
        "de": "Review nach Veröffentlichung: Datenfakten und Ein-Variablen-Tests", "fr": "Retour post-publication : faits et tests à variable unique",
    },
    "两支 AI 视频团队：生成与拆解": {
        "en": "Two AI video teams: production and teardown", "zh-tw": "兩支 AI 影片團隊：生成與拆解",
        "de": "Zwei AI-Video-Teams: Produktion und Analyse", "fr": "Deux équipes vidéo IA : production et décorticage",
    },
    "视频生产线四角色：凌导、灵阅、灵枢、灵映": {
        "en": "Four roles on the pipeline: director, researcher, planner, producer", "zh-tw": "影片生產線四角色：凌導、靈閱、靈樞、靈映",
        "de": "Vier Rollen in der Pipeline: Regie, Recherche, Planung, Produktion", "fr": "Quatre rôles : réalisation, veille, planification, production",
    },
    "灵阅的热点采集报告：标题、来源、热度线索": {
        "en": "The researcher's digest: titles, sources, heat signals", "zh-tw": "靈閱的熱點採集報告：標題、來源、熱度線索",
        "de": "Der Recherche-Digest: Titel, Quellen, Signals", "fr": "Le digest de veille : titres, sources, signaux",
    },
    "灵枢：选题评估、脚本与分镜设计": {
        "en": "The planner: topic scoring, script and storyboard", "zh-tw": "靈樞：選題評估、腳本與分鏡設計",
        "de": "Die Planung: Themenbewertung, Skript und Storyboard", "fr": "Le planificateur : notation, script et storyboard",
    },
    "灵映：脚本转 HTML、渲染、配音与字幕": {
        "en": "The producer: script to HTML, render, voice, subtitles", "zh-tw": "靈映：腳本轉 HTML、渲染、配音與字幕",
        "de": "Die Produktion: Skript zu HTML, Rendering, Stimme, Untertitel", "fr": "La production : script en HTML, rendu, voix, sous-titres",
    },
    "发布 Agent：标题、标签、封面与多平台上传": {
        "en": "The publishing agent: titles, tags, covers, multi-platform upload", "zh-tw": "發布 Agent：標題、標籤、封面與多平台上傳",
        "de": "Der Publishing-Agent: Titel, Tags, Cover, Multi-Plattform-Upload", "fr": "L'agent de publication : titres, tags, couvertures, envoi multi-plateformes",
    },
    "拆解团队：下载、转录、分析镜头语言": {
        "en": "The teardown team: download, transcribe, analyze shots", "zh-tw": "拆解團隊：下載、轉錄、分析鏡頭語言",
        "de": "Das Analyse-Team: Download, Transkription, Bildsprache", "fr": "L'équipe d'analyse : téléchargement, transcription, langage caméra",
    },
    "视频获取三层降级：官方 API → Playwright → yt-dlp": {
        "en": "Three-tier video fetching: API → Playwright → yt-dlp", "zh-tw": "影片取得三層降級：官方 API → Playwright → yt-dlp",
        "de": "Dreistufiger Videoabruf: API → Playwright → yt-dlp", "fr": "Récupération vidéo à trois niveaux : API → Playwright → yt-dlp",
    },
    "小淼的镜头语言分析：景别、运镜、节奏、色调": {
        "en": "Shot-language analysis: framing, movement, rhythm, palette", "zh-tw": "小淼的鏡頭語言分析：景別、運鏡、節奏、色調",
        "de": "Analyse der Bildsprache: Kadrierung, Bewegung, Rhythmus, Farbgebung", "fr": "Analyse du langage visuel : cadrage, mouvement, rythme, tonalités",
    },
}


def collect_zh_alt():
    """中文版（根目录，不含语言目录）图片路径 → 中文 alt"""
    mapping = {}
    for md in DOCS.rglob("*.md"):
        rel = md.relative_to(DOCS).as_posix()
        if rel.startswith((".vitepress/", "en/", "de/", "fr/", "zh-tw/")):
            continue
        for alt, path in IMG_RE.findall(md.read_text(encoding="utf-8")):
            if alt.strip():
                mapping[path] = alt.strip()
    return mapping


def main():
    zh_alt = collect_zh_alt()
    print(f"中文源映射：{len(zh_alt)} 张有 alt 的图片")
    missing_terms, filled, skipped = set(), 0, 0
    for lang in LANGS:
        for md in (DOCS / lang).rglob("*.md"):
            text = md.read_text(encoding="utf-8")
            changed = False

            def repl(m):
                nonlocal filled, skipped, changed
                alt, path = m.group(1).strip(), m.group(2)
                if alt or path not in zh_alt:  # 已有 alt 或中文源也没有
                    return m.group(0)
                zh = zh_alt[path]
                if zh not in ALT_TABLE or lang not in ALT_TABLE[zh]:
                    missing_terms.add(zh)
                    skipped += 1
                    return m.group(0)
                changed = True
                filled += 1
                return f"![{ALT_TABLE[zh][lang]}]({path})"

            new = IMG_RE.sub(repl, text)
            if changed:
                md.write_text(new, encoding="utf-8")
                print(f"  回填 {lang}/{md.relative_to(DOCS / lang).as_posix()}")
    print(f"共回填 {filled} 处，跳过（缺词条）{skipped} 处")
    if missing_terms:
        print("ALT_TABLE 缺以下词条，请补全后重跑：")
        for t in sorted(missing_terms):
            print(f"  - {t}")


if __name__ == "__main__":
    main()
