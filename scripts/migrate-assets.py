import re, shutil, pathlib

root = pathlib.Path('docs')

count_moved = 0
for d in sorted(root.rglob('assets')):
    if d.is_dir() and '.vitepress' not in str(d) and 'public' not in str(d):
        rel = d.relative_to(root)
        dst = root / 'public' / rel
        dst.parent.mkdir(parents=True, exist_ok=True)
        if dst.exists():
            shutil.rmtree(d)
        else:
            shutil.move(str(d), str(dst))
        count_moved += 1
print('moved dirs:', count_moved)

pat = re.compile(r'(!\[[^\]]*\]\()(assets/[^)]+)\)')
count_ref = 0
for f in sorted(root.rglob('*.md')):
    if '.vitepress' in str(f) or 'public' in str(f):
        continue
    t = f.read_text(encoding='utf-8')

    def rep(m):
        base = str(f.parent.relative_to(root)).replace(chr(92), '/')
        return m.group(1) + '/' + base + '/' + m.group(2) + ')'

    nt, n = pat.subn(rep, t)
    if n:
        f.write_text(nt, encoding='utf-8')
        count_ref += n
print('rewritten refs:', count_ref)
