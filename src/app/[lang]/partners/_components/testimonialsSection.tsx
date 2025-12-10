/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { client } from "@/lib/sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import TestimonialCard from "../../_components/testimonialsSection/testimonialCard";

const builder = createImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Testimonial {
  _id: string;
  type: string;
  textEn: string;
  textFr?: string;
  rating: number;
  image: any;
  name: string;
  role: string;
  company?: string;
}

interface TestimonialsSectionProps {
  dict: {
    title: string;
    loading: string;
    empty: string;
  };
  lang: string;
}

function TestimonialsSection({ dict, lang }: TestimonialsSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const query = `*[_type == "testimonial" && type == "partner" && isPublished == true] {
          _id,
          type,
          textEn,
          textFr,
          rating,
          image,
          name,
          role,
          company,
          isPublished
        }`;
        const data = await client.fetch(query);
        setTestimonials([...data, ...data]);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full md:w-9/10 mx-auto py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 bg-blue-300 blur-[120px] -translate-x-1/2 -translate-y-1/2 w-7/10 h-24 -z-10" />
      <div className="w-full md:w-9/10 mx-auto">
        <h2 className="text-3xl font-poppins md:text-4xl font-semibold text-center mb-12">
          {dict.title}
        </h2>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600">{dict.loading}</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">{dict.empty}</p>
          </div>
        ) : (
          <>
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
              <div className="flex justify-center items-center -mt-12 gap-2">
                {Array.from({ length: testimonials.length / 2 }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        api?.scrollTo(index);
                      }}
                      className={`h-2 rounded-full cursor-pointer z-20 transition-all ${
                        index === current ||
                        index === current - testimonials.length / 2
                          ? "w-4 h-4 bg-[#024e63]"
                          : "w-3 h-3 bg-[#99bcc6]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
                )}
              </div>
            </Carousel>
          </>
        )}
      </div>
    </div>
  );
}

export default TestimonialsSection;
