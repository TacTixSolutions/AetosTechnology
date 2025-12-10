import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import HeroSection from "./_components/heroSection/heroSection";
import ClientsCarousel from "./_components/clientsCarousel/clientsCarousel";
import OurServices from "./_components/ourServices/ourServices";
import WhyUsSection from "./_components/whyUs/whyUs";
import BrandHeroCarousel from "./_components/brandHeroCarousel/brandHeroCarousel";
import TestimonialsSection from "./_components/testimonialsSection/testimonialsSection";
import FaqSection from "./_components/faqSection/faqSection";
import CTASection from "./_components/ctaSection/ctaSection";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const metadata = dict.metadata.home;

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
      url: `https://aetos.com.tn/${lang}`,
      siteName: "Aetos Technology",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Aetos Technology",
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
      canonical: `https://aetos.com.tn/${lang}`,
      languages: {
        en: "https://aetos.com.tn/en",
        fr: "https://aetos.com.tn/fr",
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <HeroSection dict={dict.hero} />
      <ClientsCarousel dict={dict.clients} />
      <WhyUsSection dict={dict.whyUs} />
      <OurServices dict={dict.services} />
      <BrandHeroCarousel dict={dict.brandCarousel} />
      <TestimonialsSection lang={lang} dict={dict.testimonials} />
      <FaqSection lang={lang} dict={dict.faq} />
      <CTASection dict={dict.cta} />
    </div>
  );
}
