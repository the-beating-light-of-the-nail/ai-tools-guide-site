import re, pathlib, difflib

root = pathlib.Path('docs')
public = root / 'public'
pat = re.compile(r'\]\((/(?:workbuddy|traework|qoderwork|doubaowork)/[^)]+?/assets/[^)/\s]+)\)')
fixed = []
missing = []

def norm(name: str) -> str:
    return name.replace('_image', '').lower()

for f in sorted(root.rglob('*.md')):
    if 'public' in f.parts or '.vitepress' in f.parts:
        continue
    t = f.read_text(encoding='utf-8')
    changed = False

    def rep(m):
        global changed
        url = m.group(1)
        p = public / url.lstrip('/')
        if p.exists():
            return m.group(0)
        # try normalized match among siblings
        sibs = list(p.parent.glob('*')) if p.parent.exists() else []
        cands = [s for s in sibs if norm(s.name) == norm(p.name)]
        if not cands:
            names = [s.name for s in sibs]
            cands2 = difflib.get_close_matches(p.name, names, n=1, cutoff=0.75)
            cands = [p.parent / cands2[0]] if cands2 else []
        if cands:
            fixed.append((str(f), url, cands[0].name))
            changed = True
            return m.group(0).replace(url, f'/{cands[0].relative_to(public).as_posix()}')
        missing.append((str(f), url))
        return m.group(0)

    nt = pat.sub(rep, t)
    if changed:
        f.write_text(nt, encoding='utf-8')

print('fixed:', len(fixed))
for a, b, c in fixed:
    print(f'  {a}: {b} -> {c}')
print('missing:', len(missing))
for a, b in missing:
    print(f'  {a}: {b}')
