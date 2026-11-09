import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://denisskiba.ru/sitemap.xml",
    host: "https://denisskiba.ru",
  };
}
