import { client } from "@/utils/sanity";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://jacobtechinfo.com";

export async function GET() {
  let posts = [];
  let categories = [];

  try {
    const [postsData, categoriesData] = await Promise.all([
      client.fetch(`*[_type == "post"] { "slug": slug.current, _createdAt }`),
      client.fetch(`*[_type == "category"] { "slug": slug.current }`)
    ]);
    posts = postsData;
    categories = categoriesData;
  } catch (error) {
    console.error("[SITEMAP_SANITY_ERROR]", error);
  }

  // Static routes
  const staticRoutes = [
    { url: "/", priority: 1.0, changefreq: "daily" },
    { url: "/blog", priority: 0.9, changefreq: "daily" },
    { url: "/login", priority: 0.5, changefreq: "monthly" },
    { url: "/privacy", priority: 0.3, changefreq: "monthly" },
    { url: "/terms", priority: 0.3, changefreq: "monthly" },
    { url: "/cookies", priority: 0.3, changefreq: "monthly" },
    { url: "/disclaimer", priority: 0.3, changefreq: "monthly" },
  ];

  // Generate XML
  const generateUrlEntry = (url, priority, changefreq, lastmod = null) => {
    const lastmodXml = lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : "";
    return `
    <url>
      <loc>${BASE_URL}${url}</loc>
      ${lastmodXml}
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
  };

  const staticEntries = staticRoutes.map((route) =>
    generateUrlEntry(route.url, route.priority, route.changefreq)
  );

  const postEntries = posts.map((post) =>
    generateUrlEntry(`/posts/${post.slug}`, 0.8, "weekly", post._createdAt)
  );

  const categoryEntries = categories.map((cat) =>
    generateUrlEntry(`/blog?cat=${cat.slug}`, 0.7, "weekly")
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries.join("")}
${postEntries.join("")}
${categoryEntries.join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
