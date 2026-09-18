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
