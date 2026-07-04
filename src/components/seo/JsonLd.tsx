// Emits a JSON-LD <script> for SEO / AEO (answer engines) / GEO (generative
// engines). Server-rendered so crawlers and LLMs see it without executing JS.
export const SITE_URL = "https://saleshq.ai";

export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is inert data, not executable script — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
