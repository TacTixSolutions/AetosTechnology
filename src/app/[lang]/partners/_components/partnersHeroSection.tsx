import Image from "next/image";
import IconTitleCard from "./iconTitleCard";
import BarGraphIcon from "@/components/icons/barGraphIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PartnersHeroSectionProps {
  dict: {
    title: string;
    description: string;
    ctaButton: string;
    floatingCard1: string;
    floatingCard2: string;
    imageAlt: string;
  };
}

function PartnersHeroSection({ dict }: PartnersHeroSectionProps) {
  return (
    <div className="relative bg-brand rounded-2xl h-auto py-6 lg:py-0 lg:h-[350px] w-9/10 mx-auto overflow-hidden">
      <div className="flex h-full flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-evenly md:justify-between px-6 md:px-20">
        <div className="flex flex-col w-full lg:w-1/2 text-white text-center md:text-start font-poppins items-center lg:items-start gap-4">
          <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
            {dict.title}
          </p>
          <p className="text-base lg:text-lg uppercase">{dict.description}</p>
          <Link href="/contact">
            <Button className="bg-white w-fit text-brand py-6 px-8 hover:bg-white/90 transition-colors font-semibold mt-2">
              {dict.ctaButton}
            </Button>
          </Link>
        </div>
        {/* img */}
        <div className="scale-75 md:scale-100 relative">
          <Image
            src="/partners/partnersHeroPic.png"
            alt={dict.imageAlt}
            width={420}
            height={300}
          />
          <div className="absolute top-24 -right-16 animate-float">
            <IconTitleCard
              backgroundColor="#306d7e"
              title={dict.floatingCard1}
              icon={<BarGraphIcon />}
            />
          </div>
          <div className="absolute -bottom-8 -left-18 lg:-left-24 animate-float-1">
            <IconTitleCard
              backgroundColor="#306d7e"
              title={dict.floatingCard2}
              orientation="col"
              icon={<BarGraphIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersHeroSection;
