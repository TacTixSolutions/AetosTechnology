/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroSection from "./_components/heroSection";
import AdvantagesSection from "./_components/advantagesSection";
import AccordionInfoSection from "./_components/accordionInfoSection";
import CTASection from "./_components/ctaSection";

const validSectors = [
  "hospitality",
  "retail",
  "fashion-boutiques",
  "industry-production",
  "audit",
] as const;

type SectorSlug = (typeof validSectors)[number];

const sectorKeyMap: Record<SectorSlug, string> = {
  hospitality: "hospitality",
  retail: "retail",
  "fashion-boutiques": "fashionBoutiques",
  "industry-production": "industryProduction",
  audit: "audit",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; sector: string }>;
}): Promise<Metadata> {
  const { lang, sector } = await params;

  if (!validSectors.includes(sector as SectorSlug)) {
    return {
      title: "Sector Not Found",
    };
  }

  const dict = await getDictionary(lang);
  const sectorKey = sectorKeyMap[sector as SectorSlug];
  const sectorName =
    dict.navbar.sectors[sectorKey as keyof typeof dict.navbar.sectors];

  return {
    title: `${sectorName} Solutions - Aetos Technology`,
    description: `Discover our comprehensive ${sectorName.toLowerCase()} solutions designed to optimize your operations and boost productivity.`,
    keywords: `${sectorName.toLowerCase()}, ${sectorName.toLowerCase()} solutions, digital transformation, business software`,
    authors: [{ name: "Aetos Technology" }],
    creator: "Aetos Technology",
    publisher: "Aetos Technology",
    openGraph: {
      title: `${sectorName} Solutions - Aetos Technology`,
      description: `Discover our comprehensive ${sectorName.toLowerCase()} solutions designed to optimize your operations and boost productivity.`,
      url: `https://aetos.com.tn/${lang}/solutions/sectors/${sector}`,
      siteName: "Aetos Technology",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${sectorName} Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${sectorName} Solutions - Aetos Technology`,
      description: `Discover our comprehensive ${sectorName.toLowerCase()} solutions designed to optimize your operations and boost productivity.`,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://aetos.com.tn/${lang}/solutions/sectors/${sector}`,
      languages: {
        en: `https://aetos.com.tn/en/solutions/sectors/${sector}`,
        fr: `https://aetos.com.tn/fr/solutions/sectors/${sector}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const sectors = validSectors;
  const languages: Locale[] = ["en", "fr"];

  const params: { lang: Locale; sector: string }[] = [];

  languages.forEach((lang) => {
    sectors.forEach((sector) => {
      params.push({ lang, sector });
    });
  });

  return params;
}

async function SectorPage({
  params,
}: {
  params: Promise<{ lang: Locale; sector: string }>;
}) {
  const { lang, sector } = await params;

  if (!validSectors.includes(sector as SectorSlug)) {
    notFound();
  }
  const dict = await getDictionary(lang);

  const sectorKey = sectorKeyMap[sector as SectorSlug];
  const sectorDict = dict.sectors[sectorKey as keyof typeof dict.sectors];

  const accordionSections =
    (dict as any).sectorsAccordion?.[sectorKey]?.sections ||
    (sectorDict as any).accordionSections ||
    [];
  console.log(accordionSections);
  return (
    <div className="min-h-screen pt-32 pb-24 w-9/10 mx-auto max-w-[1440px]">
      <HeroSection sector={sector as SectorSlug} />
      <AdvantagesSection sector={sector as SectorSlug} dict={sectorDict} />
      {accordionSections.length > 0 && (
        <AccordionInfoSection sections={accordionSections} />
      )}
      <CTASection />
    </div>
  );
}

export default SectorPage;
