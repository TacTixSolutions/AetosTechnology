import CTASection from "../../_components/ctaSection/ctaSection";
import FlowUpHero from "./_components/flowUpHero";
import InfoSection from "./_components/infoSection";
import { getInfoCards } from "./_components/infoSectionData";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const metadata = dict.metadata.flowup;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: "Aetos Technology" }],
    creator: "Aetos Technology",
    publisher: "Aetos Technology",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://aetos.com.tn/${lang}/solutions/flowUp`,
      siteName: "Aetos Technology",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "FlowUp by Aetos Technology",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
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
      canonical: `https://aetos.com.tn/${lang}/solutions/flowUp`,
      languages: {
        en: "https://aetos.com.tn/en/solutions/flowUp",
        fr: "https://aetos.com.tn/fr/solutions/flowUp",
      },
    },
  };
}

async function FlowUpPage({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const infoCards = getInfoCards(dict.flowUp.modules);

  return (
    <div className="mb-24 mt-28 max-w-[1440px] mx-auto">
      <FlowUpHero dict={dict.flowUp.hero} />
      <InfoSection cards={infoCards} />
      <CTASection dict={dict.flowUp.cta} />
    </div>
  );
}

export default FlowUpPage;
