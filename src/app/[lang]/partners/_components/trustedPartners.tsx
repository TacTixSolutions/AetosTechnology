import TrustedPartnerCard from "./trustedPartnerCard";

function TrustedPartners() {
  return (
    <div className="w-9/10 mx-auto py-16">
      <h2 className="text-3xl font-poppins md:text-4xl font-semibold text-center mb-12">
        Nos Partenaires de Confiance
      </h2>
      <div className="flex items-center justify-between flex-col md:flex-row gap-4 xl:gap-16">
        <TrustedPartnerCard
          imageSrc="/partners/quantumLeap.png"
          companyName="SARL Quantum Leap Evolution"
          imageDimensions={{ width: 55, height: 55 }}
          description="Depuis 2006, SARL Quantum Leap Evolution accompagne la transformation digitale des entreprises en Algérie grâce à son expertise en systèmes d’information et en intégration de solutions ERP. Aujourd’hui, l’entreprise distribue également la solution FlowUp sur le marché algérien, offrant aux organisations un outil moderne et performant pour optimiser leurs opérations."
        />
        <TrustedPartnerCard
          imageSrc="/partners/smartValority.png"
          companyName="Smart Volarity"
          imageDimensions={{ width: 170, height: 55 }}
          description="Smart Volarity est un partenaire stratégique basé au Maroc, Grâce à leur connaissance du marché et leur maitrise de nos solutions , ils garantissent un accompagnement de qualité et une présence de proximité pour nos clients."
        />
      </div>
    </div>
  );
}

export default TrustedPartners;
