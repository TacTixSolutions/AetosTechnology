import Image from "next/image";
import { ReactNode } from "react";

interface InfoSectionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  layout: "text-left" | "text-right";
  floatingComponentOne?: ReactNode;
  floatingComponentTwo?: ReactNode;
}

function InfoSectionCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  layout,
  floatingComponentOne,
  floatingComponentTwo,
}: InfoSectionCardProps) {
  const isTextLeft = layout === "text-left";

  return (
    <div className="w-full">
      <div
        className={`flex flex-col ${
          isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-8 lg:gap-16`}
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-[42px] font-poppins font-semibold text-gray-900">
            {title}
          </h2>
          <p className="text-base md:text-[22px] font-medium font-inter text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative">
          <div className="relative flex items-center justify-center  w-full aspect-4/3 rounded-2xl overflow-hidden">
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
            <div className="absolute top-2 -right-4 z-10">
              {floatingComponentOne}
            </div>
          )}

          {/* Floating Component Two - Bottom Left */}
          {floatingComponentTwo && (
            <div className="absolute bottom-4 -left-4 z-10">
              {floatingComponentTwo}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoSectionCard;
