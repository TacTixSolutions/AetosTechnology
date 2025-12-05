import CTASection from "../../_components/ctaSection/ctaSection";
import FlowUpHero from "./_components/flowUpHero";
import InfoSection from "./_components/infoSection";
import { infoCards } from "./_components/infoSectionData";

function FlowUpPage() {
  return (
    <div className="mb-24 mt-28">
      <FlowUpHero />
      <InfoSection cards={infoCards} />
      <CTASection />
    </div>
  );
}

export default FlowUpPage;
