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

function OurServices() {
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
      title: "Consulting & Analyse métier",
      description:
        "Comprendre vos besoins et vous orienter vers les solutions les plus efficaces.",
      image: "/services/consulting.png",
    },
    {
      title: "Solutions innovantes",
      description: "Moderniser vos opérations grâce à nos solutions digitales.",
      image: "/services/solutions.png",
    },
    {
      title: "Développement spécifique",
      description: "Création de modules et fonctionnalités sur mesure.",
      image: "/services/development.png",
    },
    {
      title: "Un Accompagnement complet",
      description:
        "Un déploiement rapide, une formation adaptée et un accompagnement continu, avec des solutions fiables et personnalisées qui évoluent avec vous.",
      image: "/services/support.png",
    },
  ];

  return (
    <div className="w-full py-16 relative">
      <div className="w-9/10 mx-auto">
        {/* Fixed Header with Indicators */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 md:top-48 md:left-[18%] md:translate-x-0 z-10 flex flex-col items-center gap-1">
          <h3 className="font-isotek font-bold text-brand tracking-wider uppercase">
            OUR SERVICES
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
          className="w-full mt-20"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/1 lg:basis-1/1 px-4 xl:px-24"
              >
                <div className="bg-[#E8F4F8] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 min-h-[400px]">
                  {/* Text Content */}
                  <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-isotek lg:text-4xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 font-isotek text-base md:text-lg leading-relaxed w-full xl:w-1/2">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="shrink-0 w-full md:w-[400px] lg:w-[500px]">
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
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
