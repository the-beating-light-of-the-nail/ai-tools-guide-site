import re, os
simp = set('们个为于优会传体伪备够头实宝审对层带库应开异张归当录彻径态总户执扩摆断旧时显普术检欢气没沟灵点烦然爱独环现电盖离种笔筹简洁类纯级纹线织经结绑维缩罗翻职联胜脑脸节范营虑行为补见视览觉触议训设访证识询说读调谨负赔赞跃车软载辑辞迁达违适遗释鉴钥钱铁银错锁锋闭问闲间队际险随隐难集需面音页顶项顺须顾顿预颜额风飞驱验骨东两严丧举义乐习乡书买乱亏亿从仪价华协历压厌坏块坚妆妇妈孙宁币岁摄明焰肃骑骗')
files = ['case-market-review.md','case-meeting.md','case-multi-platform.md','case-office.md','case-personal-site.md','case-policy-search.md','case-product-images.md','case-project-archive.md','case-prompt-library.md','case-reading.md','case-research.md','case-screening-valuation.md','case-script-storyboard.md','case-topic-selection.md','case-viral-to-video.md','case-wechat-article.md','case-wiki-to-skill.md','case-word.md']
os.chdir(os.path.join('docs','zh-tw','doubaowork'))
for f in files:
    t = open(f, encoding='utf-8').read()
    bad = sorted(set(t) & simp)
    if bad: print(f, ''.join(bad))
    for m in re.findall(r'\]\((/[^)]*)\)', t):
        if not m.startswith('/zh-tw'): print('BADLINK', f, m)
print('checked', len(files), 'missing:', [f for f in files if not os.path.exists(f)])
