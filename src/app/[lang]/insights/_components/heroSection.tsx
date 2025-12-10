import Image from "next/image";

function HeroSection() {
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
          Insights
        </p>
        <p className="text-sm md:text-[18px] uppercase text-white max-w-4xl text-center">
          Nos actualités, insights et événements clés
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
