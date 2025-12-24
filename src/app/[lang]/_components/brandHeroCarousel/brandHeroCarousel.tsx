"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PhoneWithStats from "./PhoneWithStats";

interface BrandSlide {
  brand: string;
  backgroundImage: string;
  title: string;
  description: string;
  stats: Array<{
    percentage: string;
    description: string;
    isPositive?: boolean;
  }>;
}

interface BrandHeroCarouselDict {
  title: string;
  kiabi: {
    brand: string;
    description: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
  gemo: {
    brand: string;
    description: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
  bodySoul: {
    brand: string;
    description: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
  quiksilver: {
    brand: string;
    description: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
}

interface BrandHeroCarouselProps {
  dict: BrandHeroCarouselDict;
}

function BrandHeroCarousel({ dict }: BrandHeroCarouselProps) {
  const slides: BrandSlide[] = [
    {
      brand: dict.quiksilver.brand,
      backgroundImage: "/brandHeroCarousel/quiksilverBg.webp",
      title: dict.title,
      description: dict.quiksilver.description,
      stats: [
        {
          percentage: "+30%",
          description: dict.quiksilver.stat1Label,
          isPositive: true,
        },
        {
          percentage: "+50%",
          description: dict.quiksilver.stat2Label,
          isPositive: true,
        },
        {
          percentage: "-25%",
          description: dict.quiksilver.stat3Label,
          isPositive: true,
        },
        {
          percentage: "+32%",
          description: dict.quiksilver.stat4Label,
          isPositive: true,
        },
      ],
    },
    {
      brand: dict.gemo.brand,
      backgroundImage: "/brandHeroCarousel/gemoBg.webp",
      title: dict.title,
      description: dict.gemo.description,
      stats: [
        {
          percentage: "+25%",
          description: dict.gemo.stat1Label,
          isPositive: true,
        },
        {
          percentage: "+30%",
          description: dict.gemo.stat2Label,
          isPositive: true,
        },
        {
          percentage: "+36%",
          description: dict.gemo.stat3Label,
          isPositive: true,
        },
        {
          percentage: "+22%",
          description: dict.gemo.stat4Label,
          isPositive: true,
        },
      ],
    },
    {
      brand: dict.bodySoul.brand,
      backgroundImage: "/brandHeroCarousel/bodynsoulBg.webp",
      title: dict.title,
      description: dict.bodySoul.description,
      stats: [
        {
          percentage: "+55%",
          description: dict.bodySoul.stat1Label,
          isPositive: true,
        },
        {
          percentage: "-45%",
          description: dict.bodySoul.stat2Label,
          isPositive: true,
        },
        {
          percentage: "+38%",
          description: dict.bodySoul.stat3Label,
          isPositive: true,
        },
        {
          percentage: "+27%",
          description: dict.bodySoul.stat4Label,
          isPositive: true,
        },
      ],
    },

    {
      brand: dict.kiabi.brand,
      backgroundImage: "/brandHeroCarousel/kiabiBg.png",
      title: dict.title,
      description: dict.kiabi.description,
      stats: [
        {
          percentage: "+42%",
          description: dict.kiabi.stat3Label,
          isPositive: true,
        },
        {
          percentage: "-35%",
          description: dict.kiabi.stat1Label,
          isPositive: true,
        },
        {
          percentage: "+28%",
          description: dict.kiabi.stat2Label,
          isPositive: true,
        },
        {
          percentage: "+30%",
          description: dict.kiabi.stat4Label,
          isPositive: true,
        },
      ],
    },
  ];

  return (
    <div className="w-full relative py-16">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full font-isotek"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem className="pl-0 px-0" key={index}>
              <div className="relative w-full max-[450px]:h-[750px] h-[700px] md:h-[648px]">
                {/* Background image*/}
                <div className="absolute inset-0">
                  <Image
                    src={slide.backgroundImage}
                    alt={`${slide.brand} background`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* container contnet */}
                <div className="relative h-full w-9/10 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
                  <div className="flex-1 text-white space-y-4 p-4 pt-6 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {slide.title} {slide.brand}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 leading-snug">
                      {slide.description}
                    </p>
                  </div>

                  {/* Phone with Stats */}
                  <div className="mr-0 lg:mr-16">
                    <PhoneWithStats stats={slide.stats} />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 bg-transparent border-transparent text-white hover:bg-transparent " />
        <CarouselNext className="right-4 md:right-8 bg-transparent border-transparent text-white hover:bg-transparent " />
      </Carousel>
    </div>
  );
}

export default BrandHeroCarousel;
