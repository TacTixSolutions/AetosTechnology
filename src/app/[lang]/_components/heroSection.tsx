import { Button } from "@/components/ui/button";
import Image from "next/image";
import PieChartCard from "./pieChartCard";
import SalesCard from "./salesCard";
import IconTitleCard from "./iconTitleCard";

function HeroSection() {
  return (
    <div className="w-full relative aspect-auto pb-6 lg:aspect-1920/800">
      <Image
        src="/heroSectionCover.webp"
        alt="Hero Section Cover"
        width={1920}
        height={800}
        className="w-full h-full absolute object-cover"
      />
      {/* container */}
      <div className="pt-32 w-9/10 gap-4 h-full mx-auto relative flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-base md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-poppins font-bold uppercase">
            Votre activité mérite la{" "}
            <span className="text-brand">performance digitale</span>
          </p>
          <p className="font-poppins  text-sm sm:text-base md:text-lg  xl:text-xl mt-4 uppercase">
            Nous créons des solutions puissantes et adaptées à votre réalité
            métier pour gagner du temps, réduire les erreurs et améliorer votre
            productivité.
          </p>
          <Button
            size={"lg"}
            className="bg-brand rounded-lg hover:bg-brand/90 lg:w-72 lg:h-12 text-lg text-white px-6 mt-6"
          >
            Contact Us
          </Button>
        </div>
        <div className="flex relative flex-col scale-75 lg:scale-100 mr-0 lg:mr-6 items-center justify-center w-auto">
          <Image
            src="/heroSectionImage.webp"
            alt="Hero Section Illustration"
            width={500}
            height={500}
            className=" relative"
          />
          <div className="absolute -bottom-4 -left-12 animate-float">
            <PieChartCard />
          </div>
          <div className="absolute bottom-3 -right-18 animate-float-1">
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
