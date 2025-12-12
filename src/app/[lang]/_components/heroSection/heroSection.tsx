import { Button } from "@/components/ui/button";
import Image from "next/image";
import PieChartCard from "./pieChartCard";
import SalesCard from "./salesCard";
import IconTitleCard from "./iconTitleCard";
import Link from "next/link";

interface HeroSectionProps {
  dict: {
    title: string;
    titleHighlight: string;
    description: string;
    ctaButton: string;
    imageAlt: string;
    addedValue: string;
  };
}

function HeroSection({ dict }: HeroSectionProps) {
  return (
    <div className="w-full relative aspect-auto pb-6 mb-8 lg:aspect-1920/800">
      <Image
        src="/heroSectionCover.webp"
        alt={dict.imageAlt}
        width={1920}
        height={800}
        className="w-full h-full absolute object-cover"
      />
      {/* container */}
      <div className="pt-32 w-9/10 lg:w-8/10 gap-4 h-full mx-auto relative flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
          <p className="text-lg text-center lg:text-start md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-poppins font-bold uppercase">
            {dict.title}{" "}
            <span className="text-brand">{dict.titleHighlight}</span>
          </p>
          <p className="font-poppins text-center lg:text-start text-sm sm:text-base md:text-base xl:text-lg mt-4 uppercase">
            {dict.description}
          </p>
          <Link href="/solutions/flowUp">
            <Button
              size={"lg"}
              className="bg-brand border border-[#024E63] rounded-lg hover:bg-brand/90 w-64 lg:w-72 lg:h-12 font-inter text-white px-6 mt-6"
            >
              {dict.ctaButton}
            </Button>
          </Link>
        </div>
        <div className="flex relative scale-75 lg:scale-100 flex-col mr-0 lg:mr-6 items-center justify-center w-auto">
          <Image
            src="/heroSectionImage.webp"
            alt="Hero Section Illustration"
            width={420}
            height={420}
            className=" relative"
          />
          <div className="absolute scale-75 lg:scale-100 -bottom-4 -left-12 animate-float">
            <PieChartCard attendanceRate="" />
          </div>
          <div className="absolute scale-75 lg:scale-100 bottom-3 -right-28 animate-float-1">
            <SalesCard />
          </div>
          <div className="absolute scale-75 lg:scale-100 -top-8 -right-18 animate-float-2">
            <IconTitleCard text={dict.addedValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
