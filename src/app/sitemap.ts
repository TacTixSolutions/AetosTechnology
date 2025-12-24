import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aetos.com.tn";
  const languages = ["en", "fr"];
  const lastModified = new Date();

  const pages = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    {
      path: "/solutions/flowUp",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/insights", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/partners", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page.path}`,
            fr: `${baseUrl}/fr${page.path}`,
          },
        },
      });
    });
  });

  return sitemap;
}
