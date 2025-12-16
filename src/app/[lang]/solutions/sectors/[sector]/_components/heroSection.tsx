import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validSectors = [
  "hospitality",
  "retail",
  "fashion-boutiques",
  "industry-production",
  "audit",
] as const;

type Sector = (typeof validSectors)[number];

interface HeroSectionProps {
  sector: Sector;
  dict: {
    hero: {
      fashionBoutiques: { title: string; description: string };
      retail: { title: string; description: string };
      hospitality: { title: string; description: string };
      industryProduction: { title: string; description: string };
      audit: { title: string; description: string };
    };
    cta: {
      button: string;
    };
  };
  lang: string;
}

const sectorKeyMap: Record<Sector, string> = {
  "fashion-boutiques": "fashionBoutiques",
  retail: "retail",
  hospitality: "hospitality",
  "industry-production": "industryProduction",
  audit: "audit",
};

function HeroSection({ sector, dict, lang }: HeroSectionProps) {
  const sectorKey = sectorKeyMap[sector] as keyof typeof dict.hero;
  const heroContent = dict.hero[sectorKey];

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
        <p className="text-lg md:text-[42px] text-white font-semibold max-w-4xl text-center px-4">
          {heroContent.title}
        </p>
        <p className="text-sm md:text-[22px] uppercase text-white max-w-4xl text-center px-4 mt-2">
          {heroContent.description}
        </p>
        <Link
          className="w-full flex items-center justify-center"
          href={`/${lang}/contact`}
        >
          <Button className="mx-auto mt-6 w-8/10 max-w-sm py-6 bg-[#024e63] hover:bg-brand rounded-lg text-white text-[16px] font-medium font-inter shadow-lg">
            {dict.cta.button}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
