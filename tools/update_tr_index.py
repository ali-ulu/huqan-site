from pathlib import Path

source = Path('/home/ubuntu/huqan-site/index.html')
target = Path('/home/ubuntu/huqan-site/tr/index.html')
html = source.read_text()
replacements = {
    '<html lang="en">': '<html lang="tr">',
    '<meta name="description" content="Huqan is a local-first AI governance and verification layer for claims, memory writes, and selected agent actions.">': '<meta name="description" content="Huqan, yapay zekâ iddiaları, hafıza yazımları ve seçili ajan eylemleri için yerel öncelikli yönetişim ve doğrulama katmanıdır.">',
    '<title>Huqan | Local-First AI Governance &amp; Verification</title>': '<title>Huqan | Yerel Öncelikli Yapay Zekâ Yönetişimi ve Doğrulama</title>',
    '<link rel="canonical" href="https://huqan.com/">': '<link rel="canonical" href="https://huqan.com/tr/">',
    '<link rel="alternate" hreflang="en" href="https://huqan.com/">': '<link rel="alternate" hreflang="en" href="https://huqan.com/">',
    '<link rel="alternate" hreflang="tr" href="https://huqan.com/tr/">': '<link rel="alternate" hreflang="tr" href="https://huqan.com/tr/">',
    '<meta property="og:title" content="Huqan | Local-First AI Governance &amp; Verification">': '<meta property="og:title" content="Huqan | Yerel Öncelikli Yapay Zekâ Yönetişimi ve Doğrulama">',
    '<meta property="og:description" content="Verify AI claims, protect memory writes, and govern selected agent actions with evidence, policy, approval, and Trust Receipts.">': '<meta property="og:description" content="Yapay zekâ iddialarını doğrulayın, hafıza yazımlarını koruyun ve seçili ajan eylemlerini kanıt, politika, onay ve Trust Receipt ile yönetin.">',
    '<meta property="og:url" content="https://huqan.com/">': '<meta property="og:url" content="https://huqan.com/tr/">',
    '<meta name="twitter:title" content="Huqan | Local-First AI Governance &amp; Verification">': '<meta name="twitter:title" content="Huqan | Yerel Öncelikli Yapay Zekâ Yönetişimi ve Doğrulama">',
    '<meta name="twitter:description" content="A local-first trust, evidence, and verification layer for AI claims, memory, and selected agent actions.">': '<meta name="twitter:description" content="Yapay zekâ iddiaları, hafıza ve seçili ajan eylemleri için yerel öncelikli güven, kanıt ve doğrulama katmanı.">',
    '<meta property="og:url" content="https://huqan.com/tr/">': '<meta property="og:url" content="https://huqan.com/tr/">',
    "let initial='en';": "let initial='tr';",
    'href="/blog/" data-i18n="navBlog"': 'href="/tr/blog/" data-i18n="navBlog"',
    'href="/blog/" data-i18n="readBlog"': 'href="/tr/blog/" data-i18n="readBlog"',
    'href="/blog/what-is-ai-agent-governance/"': 'href="/tr/blog/what-is-ai-agent-governance/"',
    'href="/blog/huqan-vs-nemo-guardrails/"': 'href="/tr/blog/huqan-vs-nemo-guardrails/"',
    'href="/blog/best-ai-governance-tools/"': 'href="/tr/blog/best-ai-governance-tools/"',
}
for old, new in replacements.items():
    if old not in html:
        raise SystemExit(f'Missing expected source fragment: {old[:100]}')
    html = html.replace(old, new, 1)
# Keep the JSON-LD and social image URLs on the public origin, but make website language explicit.
html = html.replace('"inLanguage": ["en", "tr"]', '"inLanguage": ["tr", "en"]', 1)
target.write_text(html)
print('Updated', target)
