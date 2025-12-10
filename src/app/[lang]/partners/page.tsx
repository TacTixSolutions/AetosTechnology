import CollabSection from "./_components/collabSection";
import CTASection from "./_components/cta";
import PartnersHeroSection from "./_components/partnersHeroSection";
import TestimonialsSection from "./_components/testimonialsSection";
import TrustedPartners from "./_components/trustedPartners";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const metadata = dict.metadata.partners;

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
      url: `https://aetos.com.tn/${lang}/partners`,
      siteName: "Aetos Technology",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Aetos Technology Partners",
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
      canonical: `https://aetos.com.tn/${lang}/partners`,
      languages: {
        en: "https://aetos.com.tn/en/partners",
        fr: "https://aetos.com.tn/fr/partners",
      },
    },
  };
}

async function PartnersPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="mb-24 pt-32 max-w-[1440px] mx-auto">
      <PartnersHeroSection dict={dict.partners.hero} />
      <TrustedPartners dict={dict.partners.list} />
      <CollabSection dict={dict.partners.collaboration} />
      <TestimonialsSection dict={dict.partners.testimonials} lang={lang} />
      <CTASection dict={dict.partners.cta} />
    </div>
  );
}

export default PartnersPage;
