# Huqan.com — Canlı Denetim Notları

**Denetim tarihi:** 2026-08-28

## Canlı site

- URL: https://huqan.com/
- Yayınlanan başlık: `Huqan — Deterministic Trust Boundary for AI Agents`
- `html lang`: `en`
- Ana sayfada tek bir H1 mevcut: `Know what is proven before you act.`
- İçerik; claim judgment, memory admission, action gates, Trust Receipts, control flow ve browser demo temaları etrafında kurulmuş.
- Dil anahtarı TR/EN ile içerik JavaScript üzerinden değişiyor; varsayılan ve tarayıcı tarafından çıkarılan içerik İngilizce.
- Blog bağlantısı veya blog sayfası yok.

## Mevcut SEO yüzeyi

Canlı HTML incelemesi sonucunda:

- Description mevcut: `Huqan is a local-first, deterministic trust boundary for AI claims, memory and actions.`
- `robots` ve `googlebot` meta etiketleri yok.
- Canonical link yok.
- Open Graph etiketleri yok: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`.
- Twitter/X kart etiketleri yok.
- JSON-LD yapılandırılmış veri yok.
- Sitemap yok gibi görünüyor: `/sitemap.xml` isteği ana sayfanın fallback HTML'ini döndürüyor.
- Robots dosyası yok gibi görünüyor: `/robots.txt` isteği ana sayfa metnini döndürüyor.
- `/sitemap.xml` ve `/robots.txt` XML/plain-text kaynaklar olarak yayınlanmadığı için arama motoru keşfi zayıf.
- Arama motorları ve AI crawler'lar için `llms.txt`, RSS/Atom feed veya açık içerik keşif yüzeyi yok.

## Mevcut bağlantılar

- GitHub: https://github.com/ali-ulu/huqan
- AI-ULU: https://ai-ulu.com
- levh: https://levh.ai-ulu.com
- İletişim: `aliulu@ai-ulu.com`

## Yayınlama modeli

- Site deposu: https://github.com/ali-ulu/huqan-site
- Depo public, varsayılan dal `main`.
- Kök dosyalar: `.nojekyll`, `CNAME`, `index.html`, `preview.html`, `README.md`.
- `CNAME` mevcut ve içerik `huqan.com`.
- `.github/workflows` altında workflow görünmüyor; mevcut yayınlama GitHub Pages branch tabanlı veya dışarıdan yapılandırılmış olabilir.

## Öncelikli iyileştirme alanları

1. Ana sayfa için canonical, robots, hreflang, Open Graph, Twitter/X ve Organization/WebSite/SoftwareApplication JSON-LD eklenmesi.
2. Fiziksel `robots.txt`, `sitemap.xml`, `llms.txt`, `feed.xml` ve gerekirse `humans.txt` dosyalarının eklenmesi.
3. `/blog/` dizini altında crawl edilebilir statik blog index'i ve ilk içerik sayfalarının oluşturulması.
4. Blog içeriklerinde Article/BlogPosting, BreadcrumbList ve FAQPage şemalarının kullanılması; iddiaların ürün kaynaklarına ve GitHub dokümantasyonuna bağlanması.
5. Ana navigasyona Blog bağlantısının eklenmesi; ilgili ana sayfa bölümlerinden blog yazılarına dahili bağlantılar verilmesi.
6. TR/EN dil sayfalarının URL bazlı ve canonical/hreflang ile keşfedilebilir hale getirilmesi; mevcut yalnızca JS ile dil değiştirme yaklaşımının SEO riskinin azaltılması.
7. Site genelinde erişilebilirlik, performans, semantic HTML, skip link, focus states ve sosyal paylaşım görsellerinin tamamlanması.

## Ürün doğrulama kaynağı

Huqan çekirdek README'si ürünü şu şekilde sınırlar: local-first, partial-trust AI governance and verification layer for claims, memory writes, and selected agent actions. Ürün; evidence, provenance, workspace scope, policy, approval, verification, risk gates, audit records ve Trust Receipts bağlamında anlatılmalı; universal truth engine, hallucination elimination veya universal connector enforcement gibi doğrulanmamış iddialardan kaçınılmalı.

Kaynaklar:

- https://huqan.com/
- https://github.com/ali-ulu/huqan
- https://github.com/ali-ulu/huqan-site

## Resmi AI arama rehberlerinden strateji bulguları

Google'ın resmi generative AI arama rehberi, AI Overviews ve AI Mode'un temel Search sıralama ve kalite sistemleriyle çalıştığını; özel bir AI şeması veya ayrı bir optimizasyon işareti gerekmediğini, temel SEO ve indekslenebilirliğin hâlâ esas olduğunu belirtiyor. Bu nedenle Huqan için öncelik; taranabilir HTML, benzersiz ve faydalı içerik, açık başlıklar, güçlü iç/dış bağlantılar, doğrulanabilir ürün sınırları ve güncel site haritası olacaktır.

OpenAI'ın resmi crawler dokümanına göre `OAI-SearchBot` ChatGPT arama sonuçlarında siteleri yüzeye çıkarır ve robots.txt ile izin verilmemesi ChatGPT Search cevaplarında görünmeyi engeller. `GPTBot` eğitim amaçlı taramayı yönetir ve `ChatGPT-User` kullanıcı tarafından başlatılan erişimler içindir; arama görünürlüğünü yönetmek için özellikle `OAI-SearchBot` kuralı kullanılmalıdır. Arama crawler'ı için izin verilecek; GPTBot için izin kararı ayrıca ürün sahibine bırakılacak; robots.txt güncellemesinin OpenAI sistemlerine yansıması yaklaşık 24 saat sürebilir.

Kaynaklar:

- [Google — Google's Guide to Optimizing for Generative AI Features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [OpenAI — Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots)

## Bing ve Perplexity görünürlük bulguları

Bing Webmaster Tools'un 2026 AI Performance duyurusuna göre AI sonuçlarında görünürlük; toplam citation, cited pages, grounding queries ve zaman trendleri üzerinden izlenebiliyor. Duyuru; açık başlıklar, tablolar, FAQ bölümleri, kanıt ve kaynaklar, güncel içerik ve metin-görsel-video tutarlılığını öneriyor. IndexNow, ekosisteme katılan arama motorlarına yeni/güncellenmiş/silinmiş URL'leri bildirerek keşfi hızlandırabiliyor; ancak bu bir sıralama garantisi değil.

Perplexity'nin resmi crawler dokümanına göre `PerplexityBot`, Perplexity sonuçlarında siteleri yüzeye çıkarıp bağlantılandırmak için kullanılıyor ve robots.txt içinde izin verilmesi öneriliyor. `Perplexity-User` kullanıcı eylemiyle erişim için kullanılıyor ve otomatik web taraması ya da eğitim amacı taşımıyor. Her iki sistem için robots değişikliklerinin yansıması 24 saate kadar sürebiliyor.

Kaynaklar:

- [Bing Webmaster Blog — Introducing AI Performance in Bing Webmaster Tools Public Preview](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Perplexity — Perplexity Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)

## Google yapılandırılmış veri ve sitemap bulguları

Google, JSON-LD'yi geniş ölçekte uygulaması ve sürdürmesi en kolay format olarak öneriyor. Yapılandırılmış veri Google'ın sayfa içeriğini anlamasına yardımcı olabilir ve zengin sonuçlara uygunluk sağlayabilir; ancak markup sayfada kullanıcıya görünen gerçekle uyumlu olmalı ve zengin sonuç gösterimi garanti edilmemelidir.

Google'ın sitemap rehberine göre sitemap, sayfaları ve güncellenme zamanı ya da alternatif dil sürümleri gibi bilgileri keşfe yardımcı eder; fakat sitemap'te bulunan her URL'nin taranacağı veya indeksleneceği garanti edilmez. Yeni ve az dış bağlantılı sitelerde URL keşfi için özellikle faydalıdır.

Kaynaklar:

- [Google — Yapılandırılmış veri işaretlemeye giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)
- [Google — Site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)

## Karşılaştırma kaynağı doğrulamaları

NVIDIA NeMo Guardrails resmi dokümanı, NeMo Guardrails Library'yi LLM uygulamalarına programlanabilir guardrail ekleyen açık kaynak Python paketi olarak tanımlar. Doküman; input, retrieval, dialog, execution ve output rails; YAML/Colang konfigürasyonu; custom actions; Python SDK ve guardrails server yüzeylerini belirtir. Bu, NeMo'nun öncelikli sınırının LLM etkileşimi ve runtime guardrail uygulaması olduğunu destekler.

LangChain resmi guardrails dokümanı; içerik doğrulama/filtreleme, PII tespiti, deterministic ve model-based guardrails, before/after agent middleware ve hassas araçlar için human-in-the-loop onayı anlatır. Bu, LangChain'in agent execution middleware katmanıyla Huqan'ın evidence/provenance/scope/policy/receipt odağının karşılaştırılmasını destekler.

Kaynaklar:

- [NVIDIA NeMo Guardrails — Overview](https://docs.nvidia.com/nemo/guardrails/about-nemo-guardrails-library/overview)
- [LangChain — Guardrails](https://docs.langchain.com/oss/python/langchain/guardrails)

## Listicle kaynağı doğrulamaları

Docker'ın resmi MCP Gateway dokümanı, Gateway'i MCP sunucularını orkestre eden açık kaynak çözüm olarak tanımlıyor. Merkezi proxy; yapılandırma, kimlik bilgileri, erişim kontrolü, yaşam döngüsü, routing ve authentication yönetiyor; sunucuları kısıtlı ayrı Docker konteynerlerinde çalıştırıyor ve logging/call tracing sağlıyor. Docker dokümanı AI Governance içindeki MCP Gateway özelliğinin invite-only olduğunu, ancak Gateway'in açık kaynak çözüm olarak dokümante edildiğini belirtiyor; bu nedenle fiyat metni lisans ile Docker Desktop/kurumsal erişim maliyetlerini ayırmalıdır.

DeepEval resmi dokümanı LLM değerlendirmesini test cases, metrics ve evaluation dataset bileşenleriyle tanımlıyor. `deepeval test run` CI/CD'de çalışabiliyor; `evaluate()` script içinden kullanılabiliyor; Confident AI'ye giriş yapıldığında paylaşılabilir cloud test raporu alınabiliyor. Bu, DeepEval'in governance karar kaydı değil, kalite/evaluation katmanı olarak konumlanmasını destekler.

Kaynaklar:

- [Docker — MCP Gateway](https://docs.docker.com/ai/mcp-catalog-and-toolkit/mcp-gateway/)
- [DeepEval — Introduction to LLM Evals](https://deepeval.com/docs/evaluation-introduction)

## Listicle görsel doğrulaması

- Huqan ekran görüntüsü 1440×900 boyutunda, ürünün gerçek live ana sayfasını ve üst bölümdeki deterministik/local/auditable mesajını gösteriyor; alt metin Türkçe olsa da görüntü gerçek ürün sayfasıdır.
- NeMo Guardrails ekran görüntüsü 1440×900 boyutunda resmi dokümantasyon üst bölümünü gösteriyor; cookie consent overlay başlığı kısmen kapatıyor. Bu, görselin kaynak kanıtı olarak kullanılabilirliğini azaltmasa da kullanıcı deneyimi için overlay'siz alternatif alınması gerektiğini gösteriyor.

LangChain Guardrails ekran görüntüsü okunaklı; resmi docs başlığı, guardrail kullanım alanları ve navigation görünür. Docker MCP Gateway ekran görüntüsü okunaklı; resmi docs başlığı, open-source açıklaması ve invite-only AI Governance notu görünür, alt cookie banner sayfanın altını kapatıyor. Bu screenshot'lar kaynağın üst bölümünü göstermek için yeterli; makaledeki fiyat metni banner veya görselden değil, kaynak dokümandan alınmalıdır.

## Yerel tarayıcı doğrulaması — 28 Ağu 2026

Yerel `/blog/` sayfası 13 görünür etkileşimli öğe ve dört içerik kümesiyle açıldı; yeni NeMo Guardrails alternatif kartı Compare bölümünde görünür. Başlık, kategori bağlantıları ve makale kartları masaüstü viewport'unda düzgün göründü.

Yerel `/blog/what-is-ai-agent-governance/` sayfası tek H1, üst bölümde kısa cevap kutusu, Trust Receipt tanımı, kaynak bağlantıları ve beş açılır FAQ sorusunu görünür biçimde sunuyor. Browser markdown extraction başlık, kısa cevap, kaynaklar ve sınır beyanını başarıyla aldı.

Yerel `/blog/best-ai-governance-tools/` sayfası tek H1, kısa cevap kutusu, kullanım alanı tablosu, beş araç bölümü, her araç için görsel/alt metin ve beş görünür FAQ sorusuyla tarayıcıdan erişilebilir durumda. 1440px ekran görüntüsünde başlık ve kısa cevap kutusu okunaklı.

Yerel `/tr/blog/` sayfası Türkçe başlık, kartlar, TR seçici, `/tr/` navigasyonu ve yeni alternatif makalesiyle açıldı. Hreflang seçicisi EN/TR olarak görünür. Türkçe index içindeki bazı kaynak kartları bilinçli olarak “Yakında” preview bağlantısı gösteriyor; bu sayfalar üretim içeriklerinin yerine geçmiyor.

Yerel `/blog/nemo-guardrails-alternatives/` sayfası tek H1, doğrudan seçim cevabı, alternatif karşılaştırma tablosu, Huqan/LangChain/Docker/DeepEval bölümleri, fiyat ve ödünleşim açıklamaları, görsel alt metinleri ve beş FAQ sorusunu gösteriyor. Türkçe `/tr/blog/nemo-guardrails-alternatives/` sayfası da Türkçe H1, kısa cevap, dört alternatif, TR navigasyon ve beş FAQ ile açıldı. Browser extraction kritik içerikleri aldı.

Yerel İngilizce `/blog/huqan-vs-nemo-guardrails/` sayfasında H1, kısa cevap kutusu, resmi kaynak bağlantıları ve beş FAQ görünür. Türkçe karşılığı `/tr/blog/huqan-vs-nemo-guardrails/` de H1, kısa cevap, Türkçe içerik ve beş FAQ ile açıldı. Browser markdown extraction bazı HTML tablolarını satır başlıklarıyla birlikte düzleştirse de sayfanın görsel viewport'u ve içeriği yükleniyor; kaynaklanan içerik meta ve schema ile eşleşiyor.
