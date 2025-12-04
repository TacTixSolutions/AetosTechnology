"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function ClientsCarousel() {
  const clients = [
    { name: "quick silver", logo: "/clients/quicksilver.png" },
    { name: "kiabi", logo: "/clients/kiabi.png" },
    { name: "bondin", logo: "/clients/bondin.png" },
    { name: "les galets", logo: "/clients/lesgalets.png" },
    { name: "koton", logo: "/clients/koton.png" },
    { name: "women'secret", logo: "/clients/womensecret.png" },
    { name: "gemo", logo: "/clients/gemo.png" },
    { name: "jules", logo: "/clients/jules.png" },
    { name: "joliesse", logo: "/clients/joliesse.png" },
  ];

  return (
    <div className="w-full py-16 relative">
      {/* Background Image */}
      <div className="absolute hidden md:block w-9/10 mx-auto inset-0 -z-10">
        <Image
          src="/clientCarouselBg.png"
          alt="Clients carousel background"
          fill
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-9/10 bg-[#fefefe] md:bg-transparent mx-auto">
        <h2 className="text-center font-space text-[#73779C] text-xl">
          Clients that trust us
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
                      alt={`${client.name} logo`}
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
