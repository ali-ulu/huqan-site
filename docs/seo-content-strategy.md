# Huqan.com SEO, GEO, AEO ve AIO Stratejisi

**Tarih:** 28 Ağustos 2026  
**Kapsam:** huqan.com statik site ve GitHub Pages yayın modeli  
**Dil stratejisi:** İngilizce birincil keşif dili; Türkçe ayrı URL'lerle desteklenir.

## Stratejik çerçeve

Huqan için hedef, herhangi bir arama motorunda sıralama garantisi vermek değil; arama motorlarının ve yanıt motorlarının siteyi kolayca keşfedebildiği, ürünü doğru entity olarak anlayabildiği ve sayfalardaki kısa, kanıtlanabilir cevapları güvenle kaynak gösterebildiği bir yayın yüzeyi kurmaktır. Google'ın resmi rehberine göre AI Overviews ve AI Mode temel Search kalite ve sıralama sistemleriyle çalışır; özel bir “AI schema” yoktur. Bu yüzden AIO/GEO çalışması, teknik SEO'nun yerine geçmez; iyi indekslenebilirlik, özgün faydalı içerik, açık yapı, kanıt ve güncellik üzerine kurulur.

Huqan'ın kamusal dili ürün deposundaki sınırlarla uyumlu tutulacaktır: **local-first, partial-trust AI governance and verification layer**. “Hallucinations are eliminated”, “universal truth engine”, “enterprise-grade governance” veya “every connector is enforced” gibi iddialar kullanılmayacaktır. Her karşılaştırma, Huqan'ın güçlü olduğu evidence, provenance, scope, policy, approval, verification, audit ve Trust Receipt sınırını; tamamlayıcı araçların ise kendi odaklarını açıklayacaktır.

## Yönsel SERP brief'i

Public SERP araştırması, “AI governance tools”, “AI agent governance” ve “AI hallucination prevention” aramalarında liste yazıları, ürün/çözüm sayfaları ve teknik rehberlerin birlikte yarıştığını gösteriyor. Kazanan biçim genellikle ilk 100–150 kelimede kısa cevap, taranabilir bir karşılaştırma tablosu, use-case bazlı seçim kriterleri, kaynak bağlantıları ve FAQ bölümü kullanıyor. Exact search volume ve keyword difficulty için Ahrefs/Semrush/GSC bağlantısı bulunmadığından aşağıdaki öncelikler yönseldir; yayından sonra Search Console ve Bing AI Performance verisiyle güncellenmelidir.

| Sorgu kümesi | Arama amacı | Hedef URL | İçerik açısı |
|---|---|---|---|
| `AI governance tools`, `best AI governance tools` | Ticari araştırma | `/blog/best-ai-governance-tools/` | Huqan, guardrails, MCP gateway ve eval araçlarının sınırlarını karşılaştıran listicle |
| `AI agent governance`, `agent governance platform` | Bilgilendirici + ticari | `/blog/what-is-ai-agent-governance/` | Tanım, kontrol noktaları, approval, audit ve Trust Receipt akışı |
| `AI hallucination prevention`, `LLM verification` | Problem farkındalığı | `/blog/ai-hallucination-prevention-verification/` | RAG, kaynak, contradiction check, verification ve governance ayrımı |
| `Huqan vs NeMo Guardrails` | Doğrudan karşılaştırma | `/blog/huqan-vs-nemo-guardrails/` | Aynı problem olmadıklarını, hangi durumda hangisinin seçileceğini gösteren head-to-head |
| `Trust Receipt AI`, `AI audit trail`, `AI provenance` | Marka ve kategori keşfi | `/blog/what-is-a-trust-receipt/` | Kavramı kısa tanım + veri alanları + örnek karar akışıyla açıklama |
| `MCP security`, `MCP action approval`, `AI agent action firewall` | Teknik satın alma/uygulama | `/blog/mcp-action-governance/` | MCP sunucu yaşam döngüsü ile eylem karar/audit sınırını ayırma |

## Sayfa ve içerik mimarisi

Ana sayfa, ürünün tek cümlelik tanımını ve dört çekirdek değeri verir. Blog index'i konuları üç niyet grubuna ayırır: **Understand** (kavram ve eğitim), **Compare** (alternatif ve karar), **Build** (uygulama ve geliştirici rehberleri). Her yazı; kısa answer block, tek bir ana konu, tablo veya adım akışı, kaynaklar, güncelleme tarihi, yazar/provenance ve FAQ ile yayınlanır.

İlk yayın paketinde üç içerik formatı kullanılır. Listicle yazısı `best-ai-governance-tools` ile kategori keşfi kazanır. Comparison yazısı `huqan-vs-nemo-guardrails` ile farklı ürün sınırlarını karar odaklı açıklar. Educational/AEO yazısı `what-is-ai-agent-governance` ile tanım, “how it works” ve “why it matters” sorularını doğrudan yanıtlar. Her yazı diğer ikisine ve ana sayfaya iç link verir; blog index'i de kategori ve ürün sayfalarına bağlanır.

## GEO/AEO/AIO uygulama ilkeleri

Her yazı, ilk ekranda bir cümlelik tanım ve üç ila dört cümlelik kısa cevap verir. Tanım cümleleri özne + fiil + sınır yapısında yazılır; örneğin “Huqan, iddiaları ve seçili ajan eylemlerini kanıt, politika ve onay bağlamında inceleyen local-first bir doğrulama katmanıdır.” Hemen ardından karşılaştırma tablosu, numaralı adımlar veya soru-cevap başlıkları gelir. Bu düzen hem klasik snippet taramasına hem de RAG tabanlı yanıt sistemlerinin bağımsız paragraf alıntılamasına uygundur.

Her iddia mümkün olduğunda birincil kaynakla bağlanır: Huqan için canonical GitHub README ve ilgili docs; dış ürünler için üreticinin resmi dokümanı. Kaynak verilmeyen istatistik, pazar payı, kullanıcı sayısı, performans veya “best” iddiası eklenmez. Sayfa metni, JSON-LD, Open Graph ve sitemap aynı başlık, URL, tarih ve açıklama bilgisini kullanır; böylece entity ve içerik sinyalleri birbirine ters düşmez.

`robots.txt` içinde Googlebot, Bingbot, OAI-SearchBot ve PerplexityBot'a herkese açık içerik için erişim verilir. OpenAI'ın resmi dokümanı OAI-SearchBot'u ChatGPT arama görünürlüğü için ayrı olarak tanımlar; GPTBot kararı eğitim kullanımına ilişkindir. Bu nedenle uygulamada arama botları açık, GPTBot tercihi ise ürün sahibinin içerik eğitimi politikasına bırakılabilir. Bu repoda görünürlük hedefi için GPTBot da açık bırakılmıştır; istenirse tek kural değişikliğiyle kapatılabilir.

## Teknik SEO kontrol listesi

| Alan | Uygulama | Kabul ölçütü |
|---|---|---|
| Crawl | `robots.txt`, `sitemap.xml`, canonical URL'ler | Her public URL keşfedilebilir ve tek canonical'a sahiptir |
| Index | `meta robots=index,follow`, temiz URL'ler, fiziksel HTML | Blog sayfaları JavaScript'e bağlı olmadan okunur |
| Snippet | Benzersiz title, description, H1 ve kısa cevap | Her sayfa kendi niyetini ilk bölümde anlatır |
| Entity | Organization, WebSite, SoftwareApplication/Product JSON-LD | Huqan, GitHub ve site URL'leri tutarlı graph ile bağlanır |
| Article | BlogPosting, BreadcrumbList, author, datePublished/dateModified | Her yazının schema içeriği sayfada görünen metinle uyumludur |
| FAQ | FAQPage yalnızca sayfada görünen 5 soru-cevap için | Soru ve cevaplar doğrudan, kısa ve kendine yeterlidir |
| Social | Open Graph, Twitter/X card, paylaşım görseli | Link paylaşımı başlık, açıklama ve görsel üretir |
| Dil | `hreflang`, ayrı TR/EN URL'leri, x-default | Dil sürümleri birbirini karşılıklı gösterir |
| Freshness | RSS/feed, `lastmod`, güncel tarih, değişiklik notu | Yeni ve güncellenen içerik kolay keşfedilir |
| AI discovery | `llms.txt`, kaynaklı markdown özetleri, temiz HTML | AI ajanları konu, kaynak ve ürün sınırlarını hızlı anlayabilir |

## İzleme ve yayın ölçümü

Yayından sonra Google Search Console'a domain property eklenerek sitemap gönderilmelidir. Bing Webmaster Tools'ta sitemap ve IndexNow kurulumu yapılmalıdır; Bing'in 2026 AI Performance özelliği, cited pages ve grounding queries gibi sinyalleri izlemeyi mümkün kılar. ChatGPT ve Perplexity crawler erişimi robots.txt değişikliklerinden sonra yaklaşık 24 saate kadar gecikebilir. Bu araçlara erişim ve doğrulama kullanıcı hesabı gerektirdiği için kod değişikliğiyle otomatik yapılmaz.

İlk 30 günde index coverage, impressions, CTR, query clusters, average position, referring pages, Bing AI citations ve blog başına organik giriş izlenir. İlk 90 günde düşük gösterimli sayfalar, yanlış eşleşen başlıklar ve AI tarafından alıntılanmayan bölümler yeniden yazılır. Başarı ölçütü sadece sıralama değildir; doğru sorgularda gösterim, kaynak olarak cite edilme, ürün dokümantasyonuna tıklama ve nitelikli pilot görüşmesi birlikte değerlendirilir.

## Kaynaklar

1. [Google — Google's Guide to Optimizing for Generative AI Features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
2. [Google — Yapılandırılmış veri işaretlemeye giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)
3. [Google — Site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)
4. [OpenAI — Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots)
5. [Bing Webmaster Blog — Introducing AI Performance in Bing Webmaster Tools Public Preview](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
6. [Perplexity — Perplexity Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
7. [Huqan — canonical repository README](https://github.com/ali-ulu/huqan)
