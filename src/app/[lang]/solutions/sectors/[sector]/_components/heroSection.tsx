import { Button } from "@/components/ui/button";
import Image from "next/image";

const validSectors = [
  "hospitality",
  "retail",
  "fashion-boutiques",
  "industry-production",
  "audit",
] as const;

type Sector = (typeof validSectors)[number];

function HeroSection({ sector }: { sector: Sector }) {
  return (
    <div className="w-full h-[400px] rounded-xl relative overflow-hidden">
      <Image
        src={`/sectors/${sector}.webp`}
        alt={`${sector} hero background`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute font-poppins w-full h-full flex flex-col items-center justify-center">
        <p className="text-lg md:text-[42px] text-white font-semibold max-w-4xl text-center">
          FlowUp pour {sector}: piloter vos opérations sans effort
        </p>
        <p className="text-sm md:text-[22px] uppercase text-white max-w-4xl text-center">
          Centralisez vos équipes, vos plannings et vos standards, et offrez à
          vos clients une meilleure expérience
        </p>
        <Button className="mt-6 w-8/10 max-w-sm py-6 bg-[#024e63] hover:bg-brand rounded-lg text-white text-[16px] font-medium font-inter shadow-lg">
          Contactez nous
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
