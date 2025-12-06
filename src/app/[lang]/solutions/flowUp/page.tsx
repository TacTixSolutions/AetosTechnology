import CTASection from "../../_components/ctaSection/ctaSection";
import FlowUpHero from "./_components/flowUpHero";
import InfoSection from "./_components/infoSection";
import { getInfoCards } from "./_components/infoSectionData";
import { getDictionary } from "@/lib/get-dictionary";

async function FlowUpPage({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const infoCards = getInfoCards(dict.flowUp.modules);

  return (
    <div className="mb-24 mt-28">
      <FlowUpHero dict={dict.flowUp.hero} />
      <InfoSection cards={infoCards} />
      <CTASection dict={dict.flowUp.cta} />
    </div>
  );
}

export default FlowUpPage;
