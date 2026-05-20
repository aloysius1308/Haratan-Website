import type { MetadataRoute } from "next";
import { legalNavigation, navigation } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://haratan.com.sg";

  return [...navigation, ...legalNavigation].map((item) => ({
    url: `${baseUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : 0.8
  }));
}
