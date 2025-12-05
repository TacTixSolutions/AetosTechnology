"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CTASection from "../../_components/ctaSection/ctaSection";
import FlowUpHero from "./_components/flowUpHero";
import InfoSection from "./_components/infoSection";

import { infoCards } from "./_components/infoSectionData";

function FlowUpPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="mb-24 mt-28">
      <FlowUpHero />
      <InfoSection cards={infoCards} />
      <CTASection />
    </div>
  );
}

export default FlowUpPage;
