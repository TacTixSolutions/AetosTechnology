"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "./testimonialCard";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  logo: string;
}

function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marouen Atouani",
      role: "Directeur des Opérations",
      company: "women's secret",
      content:
        "vant SuperVisor, le suivi des opérations et la communication terrain étaient difficiles. Aujourd'hui, nous avons une vision centralisée, des échanges fluides et une coordination beaucoup plus rapide. Nos opérations en boutique sont nettement plus efficaces.",
      rating: 4,
      logo: "/clients/womensecret.png",
    },
    {
      id: 2,
      name: "Lilesh",
      role: "Directeur des Opérations,",
      company: "QuickSilver",
      content:
        "Avec plus de 80 boutiques, il était difficile de suivre les opérations et de bien communiquer. SuperVisor nous offre une visibilité en temps réel, une meilleure coordination et un vrai gain de temps. C'est devenu un outil essentiel pour piloter notre réseau.",
      rating: 5,
      logo: "/clients/quicksilver.png",
    },
    {
      id: 3,
      name: "Sashi",
      role: "Retail Manager",
      company: "Haze",
      content:
        "Grâce à SuperVisor, nous avons totalement structuré notre processus de contrôle qualité. Les checklists digitalisées, le suivi en temps réel et la solidité sur les écarts nous ont permis d'améliorer la qualité et la réactivité de nos équipes. L'outil est devenu essentiel dans notre quotidien.",
      rating: 4.5,
      logo: "/clients/islandhaze.png",
    },
    {
      id: 4,
      name: "Sashi",
      role: "Retail Manager",
      company: "Haze",
      content:
        "Grâce à SuperVisor, nous avons totalement structuré notre processus de contrôle qualité. Les checklists digitalisées, le suivi en temps réel et la solidité sur les écarts nous ont permis d'améliorer la qualité et la réactivité de nos équipes. L'outil est devenu essentiel dans notre quotidien.",
      rating: 4.5,
      logo: "/clients/islandhaze.png",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 bg-blue-300 blur-[120px] -translate-x-1/2 -translate-y-1/2 w-7/10 h-24 -z-10" />
      <div className="w-9/10 mx-auto">
        <h2 className="text-3xl font-poppins md:text-4xl font-semibold text-center mb-12">
          Our successful clients
        </h2>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </CarouselContent>

          {/* Custom indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-5 h-5 bg-[#024e63]"
                    : "w-3 h-3 bg-[#99bcc6]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialsSection;
