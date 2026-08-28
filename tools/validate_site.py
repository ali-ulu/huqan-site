from pathlib import Path
from bs4 import BeautifulSoup
import json
import xml.etree.ElementTree as ET

ROOT = Path('/home/ubuntu/huqan-site')
errors = []
notes = []
html_files = sorted(p for p in ROOT.rglob('*.html') if '.git' not in p.parts)
for path in html_files:
    soup = BeautifulSoup(path.read_text(errors='replace'), 'html.parser')
    rel = path.relative_to(ROOT).as_posix()
    title = soup.find('title')
    desc = soup.find('meta', attrs={'name':'description'})
    canon = soup.find('link', rel=lambda value: value and 'canonical' in value)
    h1 = soup.find_all('h1')
    if not title or not title.get_text(strip=True): errors.append(f'{rel}: missing title')
    if not desc or not desc.get('content'): errors.append(f'{rel}: missing description')
    if not canon or not canon.get('href', '').startswith('https://huqan.com/'): errors.append(f'{rel}: missing canonical')
    if len(h1) != 1: errors.append(f'{rel}: expected 1 h1, found {len(h1)}')
    for script in soup.find_all('script', attrs={'type':'application/ld+json'}):
        try: json.loads(script.string or script.get_text())
        except Exception as exc: errors.append(f'{rel}: invalid JSON-LD: {exc}')
    if ('/blog/' in rel or rel.startswith('tr/blog/')) and rel.endswith('/index.html') and rel not in ('blog/index.html', 'tr/blog/index.html'):
        if len(soup.select('.faq details')) == 0: errors.append(f'{rel}: missing visible FAQ')
    for img in soup.find_all('img'):
        if not img.get('alt'): errors.append(f'{rel}: image missing alt: {img.get("src")}')
        src = img.get('src', '')
        if src.startswith('/'):
            target = ROOT / src.lstrip('/')
            if not target.exists(): errors.append(f'{rel}: missing image {src}')
        elif src and not src.startswith(('http://','https://','data:')):
            target = path.parent / src
            if not target.exists(): errors.append(f'{rel}: missing image {src}')
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.startswith('/') and not href.startswith('//'):
            target_url = href.split('#',1)[0].split('?',1)[0]
            if target_url in ('', '/'):
                target = ROOT / 'index.html'
            else:
                target = ROOT / target_url.lstrip('/')
                if target.is_dir(): target = target / 'index.html'
                elif not target.suffix: target = target / 'index.html'
            if not target.exists(): notes.append(f'{rel}: unresolved local link {href}')

for xml_name in ('sitemap.xml', 'feed.xml'):
    try: ET.parse(ROOT / xml_name)
    except Exception as exc: errors.append(f'{xml_name}: invalid XML: {exc}')
robots = (ROOT / 'robots.txt').read_text()
if 'Sitemap: https://huqan.com/sitemap.xml' not in robots: errors.append('robots.txt: missing sitemap directive')
sitemap_text = (ROOT / 'sitemap.xml').read_text()
for url in ('https://huqan.com/blog/', 'https://huqan.com/tr/blog/', 'https://huqan.com/blog/nemo-guardrails-alternatives/', 'https://huqan.com/tr/blog/nemo-guardrails-alternatives/'):
    if url not in sitemap_text: errors.append(f'sitemap.xml: missing {url}')
print(f'HTML files checked: {len(html_files)}')
print(f'Errors: {len(errors)}')
for item in errors: print('ERROR', item)
print(f'Notes: {len(notes)}')
for item in notes: print('NOTE', item)
raise SystemExit(1 if errors else 0)
