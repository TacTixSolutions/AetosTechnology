"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientForm from "./ClientForm";
import PartnerForm from "./PartnerForm";
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
import { Locale } from "@/lib/i18n-config";

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

interface ContactContentProps {
  dict: {
    hero: { title: string; address: string };
    tabs: { client: string; partner: string; join: string };
    formIntro: {
      demo: string;
      features: { demo: string; access: string; answers: string };
    };
    clientForm: {
      intro: string;
      firstName: string;
      lastName: string;
      jobTitle?: string;
      businessEmail: string;
      phoneNumber: string;
      company: string;
      locations: string;
      employees: string;
      placeholder: string;
      footer: string;
      footerLink: string;
      submit: string;
      submitting: string;
    };
    partnerForm: {
      intro: string;
      lastName: string;
      firstName: string;
      company: string;
      country: string;
      phoneNumber: string;
      email: string;
      website: string;
      sector: string;
      hasClients: string;
      yes: string;
      no: string;
      submit: string;
      submitting: string;
    };
    testimonialsSection: {
      clientsTitle: string;
      partnersTitle: string;
      teamTitle: string;
    };
  };
  lang: Locale;
  initialTab?: string;
}

export default function ContactContent({
  dict,
  lang,
  initialTab,
}: ContactContentProps) {
  const getValidTab = (tab?: string): "client" | "partner" | "join" => {
    if (tab === "client" || tab === "partner" || tab === "join") {
      return tab;
    }
    return "client";
  };

  const [activeTab, setActiveTab] = useState<"client" | "partner" | "join">(
    getValidTab(initialTab)
  );
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  );

  useEffect(() => {
    const fetchTestimonials = async () => {
      const typeMap = {
        client: "client",
        partner: "partner",
        join: "member",
      };

      const query = `*[_type == "testimonial" && type == $type] | order(_createdAt desc)`;
      const data = await client.fetch(query, { type: typeMap[activeTab] });
      if (data.length > 2) {
        setTestimonials([...data, ...data]); // duplicate ONLY when looping
      } else {
        setTestimonials(data); // no duplication
      }
    };

    fetchTestimonials();
  }, [activeTab]);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const shouldLoop = testimonials.length > 2;
  return (
    <>
      <div className="bg-[#f3f8fa] py-24 w-9/10 mx-auto rounded-xl">
        <div className="min-h-screen flex">
          {/* Left Side - Image */}
          <div className="hidden lg:flex lg:w-1/2 relative">
            <Image
              src="/contactPageBg.webp"
              alt={dict.hero.title}
              fill
              className="object-cover rounded-l-xl"
              priority
            />
            <div className="absolute top-8 h-16 w-full">
              <Image
                src="/logoWithTextWhite.png"
                alt="Aetos Technology"
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
                <span>{dict.formIntro.features.demo}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-1 bg-brand rounded-md">
                  <CheckIcon className="w-5 h-5" strokeWidth={3} />
                </div>
                <span>{dict.formIntro.features.access}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-1 bg-brand rounded-md">
                  <CheckIcon className="w-5 h-5" strokeWidth={3} />
                </div>
                <span>{dict.formIntro.features.answers}</span>
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
                    {dict.formIntro.demo}
                  </h1>

                  <TabsList className="flex-1 w-full grid grid-cols-2 mb-6 bg-white gap-2">
                    <TabsTrigger
                      value="client"
                      className="font-inter data-[state=active]:bg-[#024E63] data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-700 rounded-md"
                    >
                      {dict.tabs.client}
                    </TabsTrigger>
                    <TabsTrigger
                      value="partner"
                      className="font-inter data-[state=active]:bg-[#024E63] data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-700 rounded-md"
                    >
                      {dict.tabs.partner}
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="client">
                  <ClientForm dict={dict.clientForm} />
                </TabsContent>

                <TabsContent value="partner">
                  <PartnerForm dict={dict.partnerForm} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials section */}
      {testimonials.length > 0 && (
        <div
          className={`w-full md:w-9/10 xl:w-9/10 2xl:w-8/10 mx-auto pt-8 relative ${
            shouldLoop ? "pb-16" : "pb-0"
          }`}
        >
          <div
            id="goopman"
            className="absolute top-1/2 left-1/2 bg-blue-300 blur-[120px] -translate-x-1/2 -translate-y-1/2 w-7/10 h-24 z-0"
          />

          <h2 className="text-3xl font-poppins md:text-4xl font-semibold text-center mb-12">
            {activeTab === "client"
              ? dict.testimonialsSection.clientsTitle
              : activeTab === "partner"
                ? dict.testimonialsSection.partnersTitle
                : dict.testimonialsSection.teamTitle}
          </h2>
          <Carousel
            setApi={setApi}
            opts={{
              align: shouldLoop ? "center" : "start",
              loop: shouldLoop,
            }}
            plugins={shouldLoop ? [plugin.current] : []}
            className="w-full"
          >
            <CarouselContent
              className={shouldLoop ? "" : "flex justify-center gap-5"}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={{
                    ...testimonial,
                    content:
                      lang === "fr" && testimonial.textFr
                        ? testimonial.textFr
                        : testimonial.textEn,
                    logo: urlFor(testimonial.image).url(),
                  }}
                />
              ))}
            </CarouselContent>

            {/* Custom indicators */}
            {shouldLoop && (
              <div className="flex justify-center items-center gap-2 -mt-12">
                {Array.from({
                  length: shouldLoop
                    ? testimonials.length / 2
                    : testimonials.length,
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      api?.scrollTo(index);
                    }}
                    className={`h-2 rounded-full cursor-pointer transition-all z-20 ${
                      index === current ||
                      index === current - testimonials.length / 2
                        ? "w-4 h-4 bg-[#024e63]"
                        : "w-3 h-3 bg-[#99bcc6]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </Carousel>
        </div>
      )}
    </>
  );
}
