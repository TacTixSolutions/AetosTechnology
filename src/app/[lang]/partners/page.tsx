import CollabSection from "./_components/collabSection";
import CTASection from "./_components/cta";
import PartnersHeroSection from "./_components/partnersHeroSection";
import TestimonialsSection from "./_components/testimonialsSection";
import TrustedPartners from "./_components/trustedPartners";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";

async function PartnersPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="mb-24 mt-28">
      <PartnersHeroSection dict={dict.partners.hero} />
      <TrustedPartners dict={dict.partners.list} />
      <CollabSection dict={dict.partners.collaboration} />
      <TestimonialsSection dict={dict.partners.testimonials} lang={lang} />
      <CTASection dict={dict.partners.cta} />
    </div>
  );
}

export default PartnersPage;
