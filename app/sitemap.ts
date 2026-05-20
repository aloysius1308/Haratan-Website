import type { MetadataRoute } from "next";
import { navItems } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://haratan.com.sg";

  return navItems.map((item) => ({
    url: `${baseUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : 0.8
  }));
}
