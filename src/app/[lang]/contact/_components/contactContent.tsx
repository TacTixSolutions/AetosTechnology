"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientForm from "./ClientForm";
import PartnerForm from "./PartnerForm";
import JoinUsForm from "./JoinUsForm";
import { CheckIcon } from "lucide-react";
import { client } from "@/lib/sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "@/app/[lang]/_components/testimonialsSection/testimonialCard";

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source);
}

interface Testimonial {
  _id: string;
  type: string;
  textEn: string;
  textFr: string;
  rating: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  name: string;
  role: string;
  company?: string;
}

export default function ContactContent() {
  const [activeTab, setActiveTab] = useState<"client" | "partner" | "join">(
    "client"
  );
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const typeMap = {
        client: "client",
        partner: "partner",
        join: "member",
      };

      const query = `*[_type == "testimonial" && type == $type] | order(_createdAt desc)`;
      const data = await client.fetch(query, { type: typeMap[activeTab] });
      setTestimonials(data);
    };

    fetchTestimonials();
  }, [activeTab]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="bg-[#f3f8fa] my-24 w-9/10 mx-auto rounded-xl">
        <div className="min-h-screen flex">
          {/* Left Side - Image */}
          <div className="hidden lg:flex lg:w-1/2 relative">
            <Image
              src="/contactPageBg.webp"
              alt="Contact background"
              fill
              className="object-cover rounded-l-xl"
              priority
            />
            <div className="absolute top-8 h-16 w-full">
              <Image
                src="/logoWithTextWhite.png"
                alt="Contact background"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-8 left-8 text-white space-y-2 font-light font-poppins">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-1 bg-brand rounded-md">
                  <CheckIcon className="w-5 h-5" strokeWidth={3} />
                </div>
                <span>Demo built around your needs.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-1 bg-brand rounded-md">
                  <CheckIcon className="w-5 h-5" strokeWidth={3} />
                </div>
                <span>Instant access to tools you can start using now</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-1 bg-brand rounded-md">
                  <CheckIcon className="w-5 h-5" strokeWidth={3} />
                </div>
                <span>
                  Straight answers to your questions, without buzzwords
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <div className="w-full max-w-lg space-y-6">
              <Tabs
                value={activeTab}
                onValueChange={(value) =>
                  setActiveTab(value as "client" | "partner" | "join")
                }
                className="w-full"
              >
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                  <h1 className="text-xl font-poppins font-medium mb-4">
                    Tell us who you are
                  </h1>

                  <TabsList className="flex-1 w-full grid grid-cols-3 mb-6 bg-white gap-2">
                    <TabsTrigger
                      value="client"
                      className="font-inter data-[state=active]:bg-[#024E63] data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-700 rounded-md"
                    >
                      Client
                    </TabsTrigger>
                    <TabsTrigger
                      value="partner"
                      className="font-inter data-[state=active]:bg-[#024E63] data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-700 rounded-md"
                    >
                      Partner
                    </TabsTrigger>
                    <TabsTrigger
                      value="join"
                      className="font-inter data-[state=active]:bg-[#024E63] data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-700 rounded-md"
                    >
                      Join us
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="client">
                  <ClientForm />
                </TabsContent>

                <TabsContent value="partner">
                  <PartnerForm />
                </TabsContent>

                <TabsContent value="join">
                  <JoinUsForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials section */}
      {testimonials.length > 0 && (
        <div className="w-full md:w-9/10 xl:w-9/10 2xl:w-8/10 mx-auto pb-16 pt-8 relative">
          <div
            id="goopman"
            className="absolute top-1/2 left-1/2 bg-blue-300 blur-[120px] -translate-x-1/2 -translate-y-1/2 w-7/10 h-24 z-0"
          />

          <h2 className="text-3xl font-poppins md:text-4xl font-semibold text-center mb-12">
            What our {activeTab === "join" ? "team members" : `${activeTab}s`}{" "}
            say
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
                <TestimonialCard
                  key={testimonial._id}
                  testimonial={{
                    ...testimonial,
                    content: testimonial.textEn,
                    logo: urlFor(testimonial.image).url(),
                  }}
                />
              ))}
            </CarouselContent>

            {/* Custom indicators */}
            <div className="flex justify-center items-center gap-2 -mt-12">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? "w-4 h-4 bg-[#024e63]"
                      : "w-3 h-3 bg-[#99bcc6]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      )}
    </>
  );
}
