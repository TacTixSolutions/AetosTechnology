import CollabSection from "./_components/collabSection";
import CTASection from "./_components/cta";
import PartnersHeroSection from "./_components/partnersHeroSection";
import TestimonialsSection from "./_components/testimonialsSection";
import TrustedPartners from "./_components/trustedPartners";

function PartnersPage() {
  return (
    <div className="mb-24 mt-28">
      <PartnersHeroSection />
      <TrustedPartners />
      <CollabSection />
      <TestimonialsSection lang="fr" />
      <CTASection />
    </div>
  );
}

export default PartnersPage;
