"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface InfoSectionCardProps {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  layout: "text-left" | "text-right";
  floatingComponentOne?: ReactNode;
  floatingComponentTwo?: ReactNode;
}

function InfoSectionCard({
  id,
  title,
  description,
  imageSrc,
  imageAlt = "",
  layout,
  floatingComponentOne,
  floatingComponentTwo,
}: InfoSectionCardProps) {
  const isTextLeft = layout === "text-left";
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div id={id} ref={cardRef} className="w-full scroll-mt-28">
      <div
        className={`flex flex-col ${
          isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-8 lg:gap-16`}
      >
        {/* Text Content */}
        <div
          className={`flex-1 space-y-6 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : `opacity-0 ${isTextLeft ? "-translate-x-12" : "translate-x-12"}`
          }`}
        >
          <h2 className="text-3xl md:text-[42px] font-poppins font-semibold text-gray-900">
            {title}
          </h2>
          <p className="text-base md:text-[22px] font-medium font-inter text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Content */}
        <div
          className={`flex-1 relative transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative flex items-center justify-center w-full aspect-4/3 rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Image
              src={imageSrc}
              alt={imageAlt}
              height={350}
              width={500}
              className="object-contain"
            />
          </div>

          {/* Floating Component One - Top Right */}
          {floatingComponentOne && (
            <div className="absolute md:scale-100 scale-75 -top-8  md:top-8 -right-4 z-10">
              {floatingComponentOne}
            </div>
          )}

          {/* Floating Component Two - Bottom Left */}
          {floatingComponentTwo && (
            <div className="absolute md:scale-100 scale-75 bottom-0 -left-4 md:bottom-12 md:left-12 z-10">
              {floatingComponentTwo}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoSectionCard;
