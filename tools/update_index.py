from pathlib import Path

path = Path('/home/ubuntu/huqan-site/index.html')
html = path.read_text()

replacements = {
    '<html lang="tr">': '<html lang="en">',
    '<meta name="description" content="Huqan, yapay zekâ iddiaları, hafızası ve eylemleri için yerel ve deterministik bir güven sınırıdır.">': '<meta name="description" content="Huqan is a local-first AI governance and verification layer for claims, memory writes, and selected agent actions.">',
    '<title>Huqan — Yapay Zekâ için Deterministik Güven Sınırı</title>': '<title>Huqan | Local-First AI Governance &amp; Verification</title>',
    '<link rel="icon" href="data:,">': '''<link rel="icon" href="/assets/og-huqan.svg" type="image/svg+xml">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="googlebot" content="index,follow">
<meta name="author" content="Huqan Contributors">
<meta name="theme-color" content="#060907">
<link rel="canonical" href="https://huqan.com/">
<link rel="alternate" hreflang="en" href="https://huqan.com/">
<link rel="alternate" hreflang="tr" href="https://huqan.com/tr/">
<link rel="alternate" hreflang="x-default" href="https://huqan.com/">
<link rel="alternate" type="application/rss+xml" title="Huqan Journal RSS" href="https://huqan.com/feed.xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Huqan">
<meta property="og:title" content="Huqan | Local-First AI Governance &amp; Verification">
<meta property="og:description" content="Verify AI claims, protect memory writes, and govern selected agent actions with evidence, policy, approval, and Trust Receipts.">
<meta property="og:url" content="https://huqan.com/">
<meta property="og:image" content="https://huqan.com/assets/og-huqan.svg">
<meta property="og:image:alt" content="Huqan local-first AI governance and verification">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Huqan | Local-First AI Governance &amp; Verification">
<meta name="twitter:description" content="A local-first trust, evidence, and verification layer for AI claims, memory, and selected agent actions.">
<meta name="twitter:image" content="https://huqan.com/assets/og-huqan.svg">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://huqan.com/#organization",
      "name": "Huqan",
      "url": "https://huqan.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://huqan.com/assets/og-huqan.svg"
      },
      "sameAs": [
        "https://github.com/ali-ulu/huqan",
        "https://ai-ulu.com/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://huqan.com/#website",
      "url": "https://huqan.com/",
      "name": "Huqan",
      "publisher": {"@id": "https://huqan.com/#organization"},
      "inLanguage": ["en", "tr"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://huqan.com/#software",
      "name": "Huqan",
      "url": "https://huqan.com/",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Linux, macOS, Windows",
      "description": "Local-first, partial-trust AI governance and verification layer for claims, memory writes, and selected agent actions.",
      "softwareVersion": "0.10.0",
      "isAccessibleForFree": true,
      "codeRepository": "https://github.com/ali-ulu/huqan",
      "license": "https://www.gnu.org/licenses/agpl-3.0.html",
      "publisher": {"@id": "https://huqan.com/#organization"}
    }
  ]
}
</script>''',
    '<nav class="nav" aria-label="Ana menü"><a href="#architecture" data-i18n="navHow">Nasıl çalışır?</a><a href="#demo" data-i18n="navDemo">Demo</a><a href="#capabilities" data-i18n="navCapabilities">Yetenekler</a><a href="https://ai-ulu.com">AI-ULU</a>': '<nav class="nav" aria-label="Ana menü"><a href="#architecture" data-i18n="navHow">How it works</a><a href="#demo" data-i18n="navDemo">Demo</a><a href="#capabilities" data-i18n="navCapabilities">Capabilities</a><a href="/blog/" data-i18n="navBlog">Blog</a><a href="https://ai-ulu.com">AI-ULU</a>',
    '<div class="mobile-panel" aria-hidden="true"><a href="#architecture" data-i18n="navHow">Nasıl çalışır?</a><a href="#demo" data-i18n="navDemo">Demo</a><a href="#capabilities" data-i18n="navCapabilities">Yetenekler</a><a href="https://ai-ulu.com">AI-ULU</a>': '<div class="mobile-panel" aria-hidden="true"><a href="#architecture" data-i18n="navHow">How it works</a><a href="#demo" data-i18n="navDemo">Demo</a><a href="#capabilities" data-i18n="navCapabilities">Capabilities</a><a href="/blog/" data-i18n="navBlog">Blog</a><a href="https://ai-ulu.com">AI-ULU</a>',
    '<a class="btn" href="https://github.com/ali-ulu/huqan" target="_blank" rel="noreferrer" data-i18n="inspectCode">Kodu incele</a>': '<a class="btn" href="https://github.com/ali-ulu/huqan" target="_blank" rel="noreferrer" data-i18n="inspectCode">Inspect the code</a><a class="btn" href="/blog/" data-i18n="readBlog">Read the journal</a>',
    '<h1 data-i18n-html="heroTitle">Harekete geçmeden önce<br><span class="accent">neyin kanıtlandığını bilin.</span></h1>': '<h1 data-i18n-html="heroTitle">Verify AI claims<br><span class="accent">before agents act.</span></h1>',
    "let initial='tr';": "let initial='en';",
    "heroTitle:'Harekete geçmeden önce<br><span class=\"accent\">neyin kanıtlandığını bilin.</span>'": "heroTitle:'Ajanlar harekete geçmeden önce<br><span class=\"accent\">iddiaları doğrulayın.</span>'",
    "heroTitle:'Know what is proven<br><span class=\"accent\">before you act.</span>'": "heroTitle:'Verify AI claims<br><span class=\"accent\">before agents act.</span>'",
    "navHow:'Nasıl çalışır?'": "navHow:'Nasıl çalışır?',navBlog:'Blog'",
    "navHow:'How it works'": "navHow:'How it works',navBlog:'Blog',readBlog:'Read the journal'",
    "navHow:'Nasıl çalışır?',navBlog:'Blog'": "navHow:'Nasıl çalışır?',navBlog:'Blog',readBlog:'Günlük yazılarını oku'",
}

for old, new in replacements.items():
    if old not in html:
        raise SystemExit(f'Missing expected source fragment: {old[:100]}')
    html = html.replace(old, new, 1)

# Add the missing English readBlog key if the compact dictionary replacement did not catch it.
if "readBlog:'Read the journal'" not in html:
    marker = "openRepo:'Open repository'"
    html = html.replace(marker, "readBlog:'Read the journal'," + marker, 1)

journal_css = '.journal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.journal-card{display:flex;flex-direction:column;min-height:240px;padding:24px;border:1px solid var(--line);border-radius:18px;background:#0a0f0c;transition:.3s}.journal-card:hover{transform:translateY(-5px);border-color:rgba(200,255,103,.42);background:rgba(200,255,103,.035)}.journal-card .eyebrow{font-size:10px}.journal-card h3{font-family:"Bodoni Moda",serif;font-size:28px;line-height:1.02;font-weight:500;margin:20px 0 10px}.journal-card p{margin:0;color:var(--muted);font-size:13px;line-height:1.55}.journal-card a{margin-top:auto;padding-top:20px;color:var(--lime);font:500 11px "IBM Plex Mono",monospace;letter-spacing:.08em;text-transform:uppercase}.journal-card a:after{content:"  ↗"}@media(max-width:980px){.journal-grid{grid-template-columns:1fr}}'
if journal_css not in html:
    html = html.replace('@media(max-width:980px){.demo-body', journal_css + '@media(max-width:980px){.demo-body', 1)

journal_section = '''<section class="section wrap" id="journal"><span class="eyebrow" data-i18n="journalEyebrow">From the journal</span><div class="split" style="align-items:end"><div class="reveal"><h2 data-i18n="journalTitle">Clear answers for high-stakes AI.</h2><p class="copy" data-i18n="journalDesc">Practical notes on agent governance, evidence, verification, memory admission and bounded action.</p></div><div class="journal-grid reveal"><article class="journal-card"><span class="eyebrow" data-i18n="journalCard1Tag">Understand</span><h3 data-i18n="journalCard1Title">What is AI agent governance?</h3><p data-i18n="journalCard1Desc">The control points that keep agent work reviewable before it changes trusted state.</p><a href="/blog/what-is-ai-agent-governance/" data-i18n="readArticle">Read article</a></article><article class="journal-card"><span class="eyebrow" data-i18n="journalCard2Tag">Compare</span><h3 data-i18n="journalCard2Title">Huqan vs. NeMo Guardrails</h3><p data-i18n="journalCard2Desc">A boundary-by-boundary comparison for teams deciding what needs governance.</p><a href="/blog/huqan-vs-nemo-guardrails/" data-i18n="readArticle">Read article</a></article><article class="journal-card"><span class="eyebrow" data-i18n="journalCard3Tag">Explore</span><h3 data-i18n="journalCard3Title">Best AI governance tools</h3><p data-i18n="journalCard3Desc">A practical shortlist for evidence, policy, action review and evaluation.</p><a href="/blog/best-ai-governance-tools/" data-i18n="readArticle">Read article</a></article></div></div></section>'''
if 'id="journal"' not in html:
    html = html.replace('<section class="market wrap reveal">', journal_section + '<section class="market wrap reveal">', 1)

# Add journal translations to the dictionaries without touching the rest of the compact source.
tr_anchor = "contact:'İletişim'"
en_anchor = "contact:'Contact'"
tr_values = ",journalEyebrow:'Günlük',journalTitle:'Yüksek riskli yapay zekâ için açık cevaplar.',journalDesc:'Ajan yönetişimi, kanıt, doğrulama, hafıza kabulü ve sınırlı eylem üzerine pratik notlar.',journalCard1Tag:'Anla',journalCard1Title:'Yapay zekâ ajan yönetişimi nedir?',journalCard1Desc:'Ajan işi güvenilir durumu değiştirmeden önce incelemeye açık tutan kontrol noktaları.',journalCard2Tag:'Karşılaştır',journalCard2Title:'Huqan ve NeMo Guardrails',journalCard2Desc:'Yönetişim ihtiyacını doğru sınıra yerleştirmek isteyen ekipler için karşılaştırma.',journalCard3Tag:'Keşfet',journalCard3Title:'En iyi yapay zekâ yönetişimi araçları',journalCard3Desc:'Kanıt, politika, eylem incelemesi ve değerlendirme için pratik kısa liste.',readArticle:'Yazıyı oku'"
en_values = ",journalEyebrow:'From the journal',journalTitle:'Clear answers for high-stakes AI.',journalDesc:'Practical notes on agent governance, evidence, verification, memory admission and bounded action.',journalCard1Tag:'Understand',journalCard1Title:'What is AI agent governance?',journalCard1Desc:'The control points that keep agent work reviewable before it changes trusted state.',journalCard2Tag:'Compare',journalCard2Title:'Huqan vs. NeMo Guardrails',journalCard2Desc:'A boundary-by-boundary comparison for teams deciding what needs governance.',journalCard3Tag:'Explore',journalCard3Title:'Best AI governance tools',journalCard3Desc:'A practical shortlist for evidence, policy, action review and evaluation.',readArticle:'Read article'"
if 'journalEyebrow:' not in html:
    if tr_anchor not in html or en_anchor not in html:
        raise SystemExit('Could not find language dictionary anchors')
    html = html.replace(tr_anchor, tr_anchor + tr_values, 1)
    html = html.replace(en_anchor, en_anchor + en_values, 1)

path.write_text(html)
print('Updated', path)
