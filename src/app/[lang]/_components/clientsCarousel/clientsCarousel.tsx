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
    <div className="w-full  py-12">
      <div className="w-9/10 mx-auto bg-[#FAFAFA] rounded-2xl p-2">
        <h2 className="text-center mt-2 font-space text-gray-500 text-lg mb-2">
          Clients that trust us
        </h2>

        <div className="relative rounded-2xl glass py-8 overflow-hidden">
          {/* Gradient overlays for fade effect */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white/80 to-transparent z-10 pointer-events-none" /> */}

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
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="flex items-center justify-center h-24">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 max-w-full h-auto"
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
