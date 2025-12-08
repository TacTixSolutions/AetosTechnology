"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionInfoCardProps {
  title: string;
  items: AccordionItem[];
  imageSrc: string;
  imageAlt?: string;
  layout: "text-left" | "text-right";
}

function AccordionInfoCard({
  title,
  items,
  imageSrc,
  imageAlt = "",
  layout,
}: AccordionInfoCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isTextLeft = layout === "text-left";

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div
        className={`flex flex-col items-center justify-center ${
          isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-16`}
      >
        {/* Text Content with Accordion */}
        <div className="flex-1 space-y-6 w-full">
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
        <div className="w-full lg:w-1/2 relative">
          <div className="relative flex items-center justify-center w-full aspect-4/3 rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionInfoCard;
