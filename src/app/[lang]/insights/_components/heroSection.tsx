import Image from "next/image";

interface HeroSectionProps {
  dict: {
    title: string;
    description: string;
  };
}

function HeroSection({ dict }: HeroSectionProps) {
  return (
    <div className="w-full h-[335px] rounded-xl relative overflow-hidden">
      <Image
        src={`/insights/insightsHero.webp`}
        alt={`insights hero background`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute font-poppins w-full px-4 h-full flex flex-col items-center justify-center">
        <p className="text-lg md:text-[40px] uppercase text-white font-bold max-w-4xl text-center">
          {dict.title}
        </p>
        <p className="text-sm md:text-[18px] uppercase text-white max-w-4xl text-center">
          {dict.description}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
