# Huqan.com SEO / GEO / AEO / AIO Uygulama Raporu

**Tarih:** 28 Ağustos 2026  
**Depo:** [ali-ulu/huqan-site](https://github.com/ali-ulu/huqan-site)  
**Yayın commit'i:** `f7a1536` — `feat: add AI governance SEO and bilingual journal`

## Türkçe özet

Huqan.com için teknik SEO, GEO, AEO ve AIO keşif altyapısı GitHub Pages'e gönderildi ve yayınlandı. İngilizce ve Türkçe blog yüzeyleri; doğrudan cevap blokları, soru odaklı başlıklar, kaynak bağlantıları, FAQ içerikleri ve JSON-LD yapılandırılmış verileriyle oluşturuldu. Yeni içerik mimarisi Huqan'ın doğrulanmış ürün sınırlarını aşmadan kanıt, provenance, çalışma alanı, politika, onay, doğrulama ve Trust Receipt kavramlarını merkezde tutuyor.

> **Önemli sınır:** Hiçbir teknik SEO çalışması Google sıralaması, AI Overview görünürlüğü veya bir yapay zekâ yanıtında kesin olarak alıntılanma garantisi vermez. Uygulama; keşfedilebilirlik, anlamlandırılabilirlik, kaynak şeffaflığı ve cevap motorlarının sayfayı doğru bağlama yerleştirme olasılığını artırır.

## Yapılan başlıca çalışmalar

| Alan | Uygulama | Sonuç |
| --- | --- | --- |
| Teknik SEO | Ana sayfa ve Türkçe landing page'e canonical, Open Graph, Twitter Card, hreflang ve Organization/WebSite JSON-LD eklendi. | Dil ve sosyal paylaşım sinyalleri netleşti; ana sayfadan Journal'a iç bağlantı kuruldu. |
| Blog mimarisi | `/blog/` ve `/tr/blog/` crawl edilebilir index sayfaları oluşturuldu; Understand, Compare ve Build kümeleri eklendi. | İçerik keşfi ve konu kümelenmesi için merkezi hub oluşturuldu. |
| AEO | Makalelerin başında kısa cevap kutuları, doğrudan tanımlar, soru biçimli başlıklar ve beş soruluk görünür FAQ blokları oluşturuldu. | İnsan ve answer-engine okuyucusu için hızlı, alıntılanabilir cevap yüzeyi sağlandı. |
| Structured data | BlogPosting, BreadcrumbList, FAQPage ve listicle için ItemList JSON-LD kullanıldı. | Sayfa amacı, içerik türü, kırıntı yolu ve soru-cevap ilişkisi makinece okunabilir hale geldi. |
| GEO / kaynak disiplini | Huqan, NVIDIA, LangChain, Docker ve DeepEval için birincil kaynak bağlantıları; kapsam ve non-claims metinleri eklendi. | Ürün iddiaları “evrensel” gibi sunulmadı; doğrulanabilir kaynak yolları oluşturuldu. |
| AI discovery | `robots.txt`, `sitemap.xml`, `llms.txt`, RSS `feed.xml` ve `security.txt` eklendi. | Arama crawler'ları, answer engine'ler, RSS okuyucuları ve araştırma ajanları için açık keşif yüzeyi oluşturuldu. |
| İki dillilik | Her ana içerik İngilizce ve Türkçe canonical/hreflang karşılığıyla yayınlandı. | `/blog/` ve `/tr/blog/` arasında dil geçişi kuruldu. |

## Yayınlanan içerikler

| İngilizce URL | Türkçe URL | İçerik amacı |
| --- | --- | --- |
| [`/blog/what-is-ai-agent-governance/`](https://huqan.com/blog/what-is-ai-agent-governance/) | [`/tr/blog/what-is-ai-agent-governance/`](https://huqan.com/tr/blog/what-is-ai-agent-governance/) | Yapay zekâ ajan yönetişimi tanımı, kontrol akışı, beş temel ve Trust Receipt. |
| [`/blog/huqan-vs-nemo-guardrails/`](https://huqan.com/blog/huqan-vs-nemo-guardrails/) | [`/tr/blog/huqan-vs-nemo-guardrails/`](https://huqan.com/tr/blog/huqan-vs-nemo-guardrails/) | Huqan ve NeMo Guardrails için sınır-bazlı karşılaştırma; fiyat/lisans ve artı/eksi açıklamaları. |
| [`/blog/best-ai-governance-tools/`](https://huqan.com/blog/best-ai-governance-tools/) | [`/tr/blog/best-ai-governance-tools/`](https://huqan.com/tr/blog/best-ai-governance-tools/) | Huqan, NeMo Guardrails, LangChain Guardrails, Docker MCP Gateway ve DeepEval listicle'ı. |
| [`/blog/nemo-guardrails-alternatives/`](https://huqan.com/blog/nemo-guardrails-alternatives/) | [`/tr/blog/nemo-guardrails-alternatives/`](https://huqan.com/tr/blog/nemo-guardrails-alternatives/) | NeMo Guardrails alternatifleri: Huqan, LangChain Guardrails, Docker MCP Gateway ve DeepEval. |

Her makalede kısa cevap, kaynaklı gövde, iç bağlantılar, `BlogPosting`, `BreadcrumbList` ve beş sorulu `FAQPage` yapılandırılmış verisi bulunur. Listicle ayrıca `ItemList` verisi, beş araç tablosu ve beş ürün görseli içerir.

## Crawler ve AI keşif yüzeyleri

[`robots.txt`](https://huqan.com/robots.txt), herkese açık sayfaları taramaya açan repo kuralları ve `https://huqan.com/sitemap.xml` direktifini içerir. [`sitemap.xml`](https://huqan.com/sitemap.xml), İngilizce/Türkçe ana sayfa, blog index'leri ve dört içerik çiftini `lastmod` ve hreflang bağlantılarıyla listeler. [`llms.txt`](https://huqan.com/llms.txt), Huqan'ın kanonik ürün tanımını, desteklenen yolları, non-claims sınırını ve öncelikli kaynaklarını answer-engine araştırmasına uygun biçimde özetler. [`feed.xml`](https://huqan.com/feed.xml), üç ana İngilizce yazıyı RSS olarak sunar. [`security.txt`](https://huqan.com/.well-known/security.txt), güvenlik bildirim adresini tanımlar.

Canlı `robots.txt` incelemesinde Cloudflare'ın repo dosyasından önce eklediği Managed Content bloğu görüldü. Bu edge katmanı `Content-Signal: search=yes,ai-train=no,use=reference` döndürüyor ve `GPTBot`, `Google-Extended`, `ClaudeBot` gibi bazı crawler'lar için `Disallow: /` uyguluyor. `OAI-SearchBot` ve `PerplexityBot` için aynı blokta ayrı bir `Disallow` görülmedi. Sonuç olarak repo tarafındaki discoverability tamamlanmış olsa da geniş AI crawler erişimi Cloudflare hesabındaki ayarlarla sınırlıdır. ChatGPT/OpenAI ve Google AI görünürlüğünü genişletmek isteniyorsa Cloudflare'ın robots/content-signal yönetimi ayrıca gözden geçirilmelidir.

## Doğrulama sonuçları

| Kontrol | Sonuç |
| --- | --- |
| Statik HTML kalite kontrolü | `13` HTML dosyası kontrol edildi; `0` hata, `0` unresolved local link notu. |
| SEO metadata | Başlık, description, canonical, tek H1, image alt text ve JSON-LD doğrulandı. |
| XML | `sitemap.xml` ve `feed.xml` parse edildi. |
| Yerel kritik rotalar | Ana sayfa, iki dil blog index'i, dört içerik çifti, robots, sitemap, llms, feed ve security.txt `200` döndürdü. |
| Release check | `git diff --check` ve HTML encoding kontrolü başarılı. |
| GitHub Pages | Commit `f7a1536` için `pages build and deployment` tamamlandı; build ve deploy job'ları başarılı. |
| Canlı smoke test | `https://huqan.com/blog/`, `https://huqan.com/blog/nemo-guardrails-alternatives/`, `https://huqan.com/sitemap.xml` ve `https://huqan.com/llms.txt` deployment sonrası yeni içerikle doğrulandı. |

## Kapsam ve dikkat edilmesi gerekenler

Bu uygulama GitHub Pages üzerinde statik dosyalarla sınırlıdır. Sunucu taraflı HTTP header, dinamik sitemap ping'i, Search Console API gönderimi veya Cloudflare hesabı yapılandırması repo üzerinden değiştirilemez. Bu yüzden HSTS, CSP, `X-Robots-Tag` gibi header tabanlı ayarlar hosting/edge panelinde ayrıca yönetilmelidir.

Ayrıca `preview.html` yanlışlıkla arama sonuçlarına girmemesi için `noindex,nofollow` ve canonical ile işaretlendi. “Coming soon” kartları gerçek makale gibi sitemap'e eklenmedi; yalnızca mevcut içerikteki doğrulanabilir bölümlere preview bağlantıları verir.

## Operasyon önerileri

1. Google Search Console ve Bing Webmaster Tools'a `https://huqan.com/sitemap.xml` gönderin; URL Inspection ile dört yeni makalenin indekslenmesini isteyin.
2. Cloudflare panelindeki Managed Content / AI crawler / Content Signals ayarlarını gözden geçirin. `search=yes` ve `use=reference` politikası korunabilir; ancak OpenAI/Google/Claude crawler erişimi ürün politikanızla uyumluysa açıkça izin verilmelidir.
3. Her yeni makaleyi önce birincil kaynaklarla doğrulayın; kısa cevap, beş FAQ, canonical/hreflang, BlogPosting ve sitemap girdisini aynı değişiklikte ekleyin.
4. Search Console sorgularını, Bing AI Performance verisini ve yönlendirme kaynaklarını aylık inceleyin. Yapay zekâ motoru görünürlüğünü yalnızca marka adıyla değil, “AI agent governance”, “Trust Receipt”, “memory admission”, “action approval” ve “evidence-bound AI” konu kümeleriyle takip edin.

## English summary

The Huqan website now has a bilingual, crawlable Journal with four English/Turkish article pairs, answer-first copy, source links, FAQ blocks, BlogPosting/BreadcrumbList/FAQPage/ItemList JSON-LD, `robots.txt`, XML sitemap, RSS feed, `llms.txt`, and security contact metadata. The changes were committed to GitHub as `f7a1536` and deployed through GitHub Pages. Local validation checked 13 HTML files with zero errors; critical local routes returned HTTP 200, and the live blog, alternatives article, sitemap, and `llms.txt` were smoke-tested after deployment.

The main remaining visibility constraint is upstream Cloudflare Managed Content in the live `robots.txt`. It currently advertises `search=yes,ai-train=no,use=reference` and disallows some AI crawlers, including GPTBot and Google-Extended. The repository cannot override that edge-managed policy. Review the Cloudflare AI crawler/content-signal settings if broader answer-engine access is desired.

## References

1. [Google Search Central — AI features and your website](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
2. [Google Search Central — Introduction to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
3. [Google Search Central — Sitemaps overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
4. [OpenAI — Overview of OpenAI crawlers](https://developers.openai.com/api/docs/bots)
5. [Bing Webmaster Blog — AI Performance in Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
6. [Perplexity — Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
7. [Huqan — Canonical repository](https://github.com/ali-ulu/huqan)
8. [Huqan — Competitive positioning](https://github.com/ali-ulu/huqan/blob/main/docs/competitive-positioning.md)
9. [NVIDIA — NeMo Guardrails Library overview](https://docs.nvidia.com/nemo/guardrails/about-nemo-guardrails-library/overview)
10. [LangChain — Guardrails](https://docs.langchain.com/oss/python/langchain/guardrails)
11. [Docker — MCP Gateway](https://docs.docker.com/ai/mcp-catalog-and-toolkit/mcp-gateway/)
12. [DeepEval — Introduction to LLM Evals](https://deepeval.com/docs/evaluation-introduction)
