import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/seo/JsonLd";

// Allow all crawlers, including AI answer/generative engines (GPTBot,
// PerplexityBot, ClaudeBot, Google-Extended, etc.) so the content is eligible
// for AEO/GEO surfacing. Restrict here later if any should be excluded.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
