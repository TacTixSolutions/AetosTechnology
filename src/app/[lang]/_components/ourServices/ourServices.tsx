"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface OurServicesDict {
  header: string;
  digitalSolutions: { title: string; description: string };
  customSoftware: { title: string; description: string };
  processOptimization: { title: string; description: string };
  fullCompanionship: { title: string; description: string };
}

interface OurServicesProps {
  dict: OurServicesDict;
}

function OurServices({ dict }: OurServicesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const services = [
    {
      title: dict.digitalSolutions.title,
      description: dict.digitalSolutions.description,
      image: "/services/solutions.png",
    },
    {
      title: dict.customSoftware.title,
      description: dict.customSoftware.description,
      image: "/services/consulting.png",
    },
    {
      title: dict.processOptimization.title,
      description: dict.processOptimization.description,
      image: "/services/development.png",
    },
    {
      title: dict.fullCompanionship.title,
      description: dict.fullCompanionship.description,
      image: "/services/support.png",
    },
  ];

  return (
    <div className="w-full py-16 relative">
      <div className="w-85/100 mx-auto">
        {/* Fixed Header with Indicators */}
        <div className="absolute top-24 left-[15%] md:top-28 lg:top-32 2xl:top-32  md:left-[12%] 2xl:left-[15%] md:translate-x-0 z-10 flex flex-col items-center gap-1">
          <h3 className="font-isotek font-bold text-brand tracking-wider uppercase">
            {dict.header}
          </h3>

          {/* Custom Carousel Indicators */}
          <div className="flex gap-1">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index ? "w-12 bg-brand" : "w-6 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/1 lg:basis-1/1 px-4 2xl:px-24"
              >
                <div className="bg-[#E8F4F8] rounded-2xl md:rounded-[40px] p-6 md:p-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 h-auto md:h-[410px] min-h-[350px]">
                  {/* Text Content */}
                  <div className="flex flex-col mt-20 md:mt-0 space-y-2">
                    <div className="flex flex-col w-full">
                      <h2 className="text-2xl font-isotek lg:text-[40px] font-bold text-gray-900">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 font-isotek text-base md:text-lg w-full 2xl:w-1/2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="shrink-0 w-full md:w-[320px] lg:w-[400px]">
                    <div className="relative aspect-4/3 rounded-2xl md:rounded-[40px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default OurServices;
