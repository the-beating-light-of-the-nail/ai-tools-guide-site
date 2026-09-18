# -*- coding: utf-8 -*-
# 生成 SEO 资产：favicon.ico / apple-touch-icon.png / og-image.png（一次生成，改动品牌时重跑）
# 运行：py scripts/generate-icons.py
from PIL import Image, ImageDraw, ImageFont

BRAND = (58, 166, 117)      # #3aa675 主题绿
BRAND_DARK = (31, 100, 68)  # 深绿，用于渐变
FONT = "C:/Windows/Fonts/msyh.ttc"  # 微软雅黑
OUT = "docs/public"


def font(size, bold=False):
    # msyh.ttc 索引 0=常规 1=粗体（Microsoft YaHei UI 在部分系统为 2）
    return ImageFont.truetype(FONT, size, index=1 if bold else 0)


def rounded_tile(size, radius, top, bottom):
    img = Image.new("RGB", (size, size), top)
    mask = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    if bottom != top:  # 垂直渐变
        grad = Image.new("RGB", (1, size))
        for y in range(size):
            t = y / max(size - 1, 1)
            grad.putpixel((0, y), tuple(int(top[i] + (bottom[i] - top[i]) * t) for i in range(3)))
        img = grad.resize((size, size))
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def draw_center_text(img, text, f, fill, y):
    d = ImageDraw.Draw(img)
    box = d.textbbox((0, 0), text, font=f)
    x = (img.width - (box[2] - box[0])) / 2 - box[0]
    d.text((x, y), text, font=f, fill=fill)
    return box[3] - box[1]


def make_icons():
    # favicon：512 画布画好后缩，保证各尺寸清晰
    size = 512
    tile = rounded_tile(size, 96, BRAND, BRAND_DARK).convert("RGB")
    f = font(300, bold=True)
    d = ImageDraw.Draw(tile)
    box = d.textbbox((0, 0), "W", font=f)
    x = (size - (box[2] - box[0])) / 2 - box[0]
    y = (size - (box[3] - box[1])) / 2 - box[1] - 12
    d.text((x, y), "W", font=f, fill=(255, 255, 255))
    tile.resize((48, 48), Image.LANCZOS).save(f"{OUT}/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    tile.resize((180, 180), Image.LANCZOS).save(f"{OUT}/apple-touch-icon.png")


def make_og():
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), BRAND_DARK)
    pix = img.load()
    for y in range(h):  # 深绿→主题绿斜向渐变
        t = y / h
        for x in range(0, w, 4):
            tt = min(1.0, t + x / w * 0.25)
            color = tuple(int(BRAND_DARK[i] + (BRAND[i] - BRAND_DARK[i]) * tt) for i in range(3))
            for dx in range(4):
                if x + dx < w:
                    pix[x + dx, y] = color
    y = 150
    y += draw_center_text(img, "AI Work 教程网", font(88, bold=True), (255, 255, 255), y) + 28
    y += draw_center_text(img, "五大办公 AI 工作台 · 从安装到自动化的中文实战教程", font(34), (235, 248, 240), y) + 60
    draw_center_text(img, "WorkBuddy · 豆包工作 · 千问办公 · TraeWork · QoderWork", font(30, bold=True), (255, 255, 255), y)
    draw_center_text(img, "aiworkagent.org", font(26), (210, 240, 225), 540)
    img.save(f"{OUT}/og-image.png", optimize=True)


if __name__ == "__main__":
    make_icons()
    make_og()
    print("generated: favicon.ico / apple-touch-icon.png / og-image.png")
