import type { MetadataRoute } from "next";
import { personalInfo } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: personalInfo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
