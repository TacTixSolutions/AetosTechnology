import { Button } from "@/components/ui/button";
import Image from "next/image";
import PieChartCard from "./pieChartCard";
import SalesCard from "./salesCard";
import IconTitleCard from "./iconTitleCard";

function HeroSection() {
  return (
    <div className="w-full relative aspect-auto pb-6 mb-8 lg:aspect-1920/800">
      <Image
        src="/heroSectionCover.webp"
        alt="Hero Section Cover"
        width={1920}
        height={800}
        className="w-full h-full absolute object-cover"
      />
      {/* container */}
      <div className="pt-32 w-8/10 gap-4 h-full mx-auto relative flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-poppins font-bold uppercase">
            Votre activité mérite la{" "}
            <span className="text-brand">performance digitale</span>
          </p>
          <p className="font-poppins  text-sm sm:text-base md:text-base xl:text-lg mt-4 uppercase">
            Nous créons des solutions puissantes et adaptées à votre réalité
            métier pour gagner du temps, réduire les erreurs et améliorer votre
            productivité.
          </p>
          <Button
            size={"lg"}
            className="bg-brand border border-[#024E63] rounded-lg hover:bg-brand/90 lg:w-72 lg:h-12 font-inter text-white px-6 mt-6"
          >
            Découvrir nos solutions
          </Button>
        </div>
        <div className="flex relative flex-col scale-75 lg:scale-100 mr-0 lg:mr-6 items-center justify-center w-auto">
          <Image
            src="/heroSectionImage.webp"
            alt="Hero Section Illustration"
            width={420}
            height={420}
            className=" relative"
          />
          <div className="absolute -bottom-4 -left-12 animate-float">
            <PieChartCard />
          </div>
          <div className="absolute bottom-3 -right-28 animate-float-1">
            <SalesCard />
          </div>
          <div className="absolute -top-8 -right-18 animate-float-2">
            <IconTitleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
