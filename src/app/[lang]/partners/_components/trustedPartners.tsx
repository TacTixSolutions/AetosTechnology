import TrustedPartnerCard from "./trustedPartnerCard";

interface TrustedPartnersProps {
  dict: {
    title: string;
    quantumLeap: {
      name: string;
      description: string;
    };
    smartVolarity: {
      name: string;
      description: string;
    };
  };
}

function TrustedPartners({ dict }: TrustedPartnersProps) {
  return (
    <div className="w-9/10 mx-auto py-16">
      <h2 className="text-3xl font-poppins md:text-4xl font-semibold text-center mb-12">
        {dict.title}
      </h2>
      <div className="flex items-center justify-between flex-col md:flex-row gap-4 xl:gap-16">
        <TrustedPartnerCard
          imageSrc="/partners/quantumLeap.png"
          companyName={dict.quantumLeap.name}
          imageDimensions={{ width: 55, height: 55 }}
          description={dict.quantumLeap.description}
        />
        <TrustedPartnerCard
          imageSrc="/partners/smartValority.png"
          companyName={dict.smartVolarity.name}
          imageDimensions={{ width: 170, height: 55 }}
          description={dict.smartVolarity.description}
        />
      </div>
    </div>
  );
}

export default TrustedPartners;
