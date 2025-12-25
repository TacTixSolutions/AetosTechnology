"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ClientsCarouselDict {
  title: string;
  logoAlt: string;
}

interface ClientsCarouselProps {
  dict: ClientsCarouselDict;
}

function ClientsCarousel({ dict }: ClientsCarouselProps) {
  const clients = [
    { name: "kiabi", logo: "/clients/kiabi.png" },
    { name: "etam", logo: "/clients/etam.png" },
    { name: "koton", logo: "/clients/koton.png" },
    { name: "armani", logo: "/clients/armani.png" },
    { name: "diesel", logo: "/clients/diesel.png" },
    { name: "quick silver", logo: "/clients/quicksilver.png" },
    { name: "islandhaze", logo: "/clients/islandHaze.png" },
    { name: "bodynsoul", logo: "/clients/bodynsoul.png" },
    { name: "joliesse", logo: "/clients/joliesse.png" },
    { name: "strass", logo: "/clients/strass.png" },
    { name: "springfield", logo: "/clients/springfield.png" },
    { name: "women'secret", logo: "/clients/womensecret.png" },
    { name: "gemo", logo: "/clients/gemo.png" },
    { name: "jules", logo: "/clients/jules.png" },
    { name: "les galets", logo: "/clients/lesgalets.png" },
    { name: "bondin", logo: "/clients/bondin.png" },
    { name: "dreamprice", logo: "/clients/dreamPrice.png" },
  ];

  return (
    <div className="w-full py-6 md:py-16 relative">
      {/* Background Image */}
      <div className="absolute hidden md:block w-9/10 mx-auto inset-0 -z-10">
        <Image
          src="/clientCarouselBg.png"
          alt="Clients carousel background"
          fill
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-9/10 bg-gray-50 md:bg-transparent mx-auto">
        <h2 className="text-center font-space text-[#73779C] text-xl py-3 md:py0">
          {dict.title}
        </h2>

        <div className="relative rounded-2xl py-8 overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full px-2 lg:px-12"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/7"
                >
                  <div className="flex items-center justify-center h-16">
                    <Image
                      src={client.logo}
                      alt={dict.logoAlt}
                      width={100}
                      height={40}
                      className="object-contain h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 max-w-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ClientsCarousel;
