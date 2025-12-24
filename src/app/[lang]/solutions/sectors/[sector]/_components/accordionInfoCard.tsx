"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

interface AccordionItem {
  title: string;
  description: string;
}

interface FloatingImages {
  topLeft?: string;
  topRight?: string;
  bottomLeft?: string;
  bottomRight?: string;
}

interface AccordionInfoCardProps {
  title: string;
  items: AccordionItem[];
  imageSrc: string;
  imageAlt?: string;
  layout: "text-left" | "text-right";
  floatingImages?: FloatingImages;
}

function AccordionInfoCard({
  items,
  imageSrc,
  imageAlt = "",
  layout,
  floatingImages,
}: AccordionInfoCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isTextLeft = layout === "text-left";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={cardRef} className="w-full">
      <div
        className={`flex flex-col items-center justify-center ${
          isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-16`}
      >
        {/* Text Content with Accordion */}
        <div
          className={`flex-1 space-y-6 w-full transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : `opacity-0 ${isTextLeft ? "-translate-x-12" : "translate-x-12"}`
          }`}
        >
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="border-b font-isotek border-gray-400 last:border-b-0 overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1 text-left">
                    <span className="text-[#024E63] text-xl font-bold shrink-0">
                      <Plus
                        size={24}
                        strokeWidth={2.5}
                        className={`transition-all ${openIndex === index ? "rotate-45" : "rotate-0"}`}
                      />
                    </span>
                    <h3 className="text-base md:text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-4 pb-4 pl-14">
                    <p className="text-sm md:text-xl text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div
          className={`w-full lg:w-1/2 relative transition-all duration-1000 ease-out delay-200${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative flex items-center justify-center w-full aspect-4/3 rounded-2xl  transform transition-transform duration-300 hover:scale-105">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={475}
              height={435}
              className="object-contain"
            />
          </div>

          {/* Floating Images */}
          {floatingImages?.topLeft && (
            <div className="absolute top-0 left-2 md:top-8 md:left-12 z-10">
              <div className="relative animate-float-1 w-32 h-32 lg:w-40 lg:h-40 overflow-hidden p-2">
                <Image
                  src={floatingImages.topLeft}
                  alt="Top left decoration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {floatingImages?.topRight && (
            <div className="absolute top-0 right-2 md:top-8 md:right-12 z-10">
              <div className="relative animate-float-2 w-32 h-32 lg:w-40 lg:h-40  overflow-hidden p-2">
                <Image
                  src={floatingImages.topRight}
                  alt="Top right decoration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {floatingImages?.bottomLeft && (
            <div className="absolute bottom-0 left-2 md:bottom-8 md:left-12 z-10">
              <div className="relative animate-float-3 w-32 h-32 lg:w-40 lg:h-40  overflow-hidden p-2">
                <Image
                  src={floatingImages.bottomLeft}
                  alt="Bottom left decoration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {floatingImages?.bottomRight && (
            <div className="absolute bottom-0 right-2 md:bottom-8 md:right-12 z-10">
              <div className="relative animate-float w-40 h-32 lg:w-52 lg:h-40 overflow-hidden  p-2">
                <Image
                  src={floatingImages.bottomRight}
                  alt="Bottom right decoration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionInfoCard;
