from pathlib import Path

root = Path('/home/ubuntu/huqan-site')
for path in root.rglob('*.html'):
    if '.git' in path.parts:
        continue
    text = path.read_text(errors='replace')
    if '\ufffd' in text:
        raise SystemExit(f'encoding replacement character in {path}')
print('html-encoding: OK')
