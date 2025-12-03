import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import HeroSection from "./_components/heroSection/heroSection";
import ClientsCarousel from "./_components/clientsCarousel/clientsCarousel";
import OurServices from "./_components/ourServices/ourServices";
import WhyUsSection from "./_components/whyUs/whyUs";
import BrandHeroCarousel from "./_components/brandHeroCarousel/brandHeroCarousel";
import TestimonialsSection from "./_components/testimonialsSection/testimonialsSection";
import FaqSection from "./_components/faqSection/faqSection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <HeroSection />
      <ClientsCarousel />
      <WhyUsSection />
      <OurServices />
      <BrandHeroCarousel />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
