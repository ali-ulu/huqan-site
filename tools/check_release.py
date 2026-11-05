from pathlib import Path

root = Path(__file__).resolve().parents[1]
for path in root.rglob('*.html'):
    if '.git' in path.parts:
        continue
    text = path.read_text(errors='replace', encoding='utf-8')
    if '\ufffd' in text:
        raise SystemExit(f'encoding replacement character in {path}')
print('html-encoding: OK')
