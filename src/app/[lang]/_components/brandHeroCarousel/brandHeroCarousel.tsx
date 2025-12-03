"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import PhoneWithStats from "./PhoneWithStats";
import StatCardMini from "./StatCardMini";

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

function BrandHeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const slides: BrandSlide[] = [
    {
      brand: "Jules",
      backgroundImage: "/brandHeroCarousel/julesBg.webp",
      title: "Our Success with Jules",
      description:
        "Une meilleure exécution en magasin grâce à un suivi clair, structuré et harmonisé sur l'ensemble du réseau.",
      stats: [
        {
          percentage: "-35%",
          description: "de temps perdu sur les reporting manuels",
          isPositive: false,
        },
        {
          percentage: "+28%",
          description: "de visibilité dans la résolution des incidents",
          isPositive: true,
        },
        {
          percentage: "+42%",
          description: "de visites terrain réalisées dans les délais",
          isPositive: true,
        },
        {
          percentage: "+30%",
          description: "d'engagement opérationnel en magasin",
          isPositive: true,
        },
      ],
    },
    {
      brand: "Gemo",
      backgroundImage: "/brandHeroCarousel/gemoBg.webp",
      title: "Our Success with Gemo",
      description:
        "Optimisation des opérations retail avec un suivi en temps réel des performances magasin.",
      stats: [
        {
          percentage: "+45%",
          description: "d'efficacité opérationnelle",
          isPositive: true,
        },
        {
          percentage: "-28%",
          description: "de temps d'administration",
          isPositive: false,
        },
        {
          percentage: "+38%",
          description: "de conformité standards",
          isPositive: true,
        },
        {
          percentage: "+52%",
          description: "de satisfaction équipes",
          isPositive: true,
        },
      ],
    },
    {
      brand: "Body & Soul",
      backgroundImage: "/brandHeroCarousel/bodynsoulBg.webp",
      title: "Our Success with Body & Soul",
      description:
        "Digitalisation complète des processus magasin pour une expérience client optimale.",
      stats: [
        {
          percentage: "+62%",
          description: "de productivité équipes",
          isPositive: true,
        },
        {
          percentage: "-32%",
          description: "d'erreurs opérationnelles",
          isPositive: false,
        },
        {
          percentage: "+48%",
          description: "de suivi qualité",
          isPositive: true,
        },
        {
          percentage: "+35%",
          description: "de réactivité incidents",
          isPositive: true,
        },
      ],
    },
    {
      brand: "Quiksilver",
      backgroundImage: "/brandHeroCarousel/quiksilverBg.webp",
      title: "Our Success with Quiksilver",
      description:
        "Transformation digitale des opérations pour une gestion retail moderne et efficace.",
      stats: [
        {
          percentage: "+55%",
          description: "d'amélioration processus",
          isPositive: true,
        },
        {
          percentage: "-40%",
          description: "de délais résolution",
          isPositive: false,
        },
        {
          percentage: "+41%",
          description: "de visibilité opérationnelle",
          isPositive: true,
        },
        {
          percentage: "+33%",
          description: "d'engagement terrain",
          isPositive: true,
        },
      ],
    },
  ];

  return (
    <div className="w-full relative py-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem className="pl-0" key={index}>
              <div className="relative w-full h-[600px] md:h-[500px]">
                {/* Background image*/}
                <div className="absolute inset-0">
                  <Image
                    src={slide.backgroundImage}
                    alt={`${slide.brand} background`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* container contnt */}
                <div className="relative h-full w-9/10 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
                  <div className="flex-1 text-white space-y-4 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Stats mobile view */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-0 pb-8 lg:hidden">
                      {slide.stats.map((stat, statIndex) => (
                        <StatCardMini
                          key={statIndex}
                          percentage={stat.percentage}
                          description={stat.description}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Phone with Stats */}
                  <PhoneWithStats stats={slide.stats} />
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
