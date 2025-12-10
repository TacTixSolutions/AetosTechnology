"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { useState } from "react";

interface EventCardProps {
  event: {
    _id: string;
    eventHost: string;
    titleEn: string;
    titleFr: string;
    slug: { current: string };
    date: string;
    time?: string;
    location: string;
    descriptionEn: string;
    descriptionFr: string;
    picture?: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
  lang: "en" | "fr";
}

function EventCard({ event, lang }: EventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const title = lang === "fr" ? event.titleFr : event.titleEn;
  const description = lang === "fr" ? event.descriptionFr : event.descriptionEn;

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    { year: "numeric", month: "2-digit", day: "2-digit" }
  );

  return (
    <div
      className="group w-full md:w-[640px] h-[450px]"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? "transform-[rotateY(180deg)]" : ""} md:group-hover:transform-[rotateY(180deg)]`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative flex flex-col justify-between font-inter px-8 py-12 overflow-hidden w-full h-full shrink-0 bg-[#232323] rounded-xl cursor-pointer">
            <div className="absolute right-0 bottom-36 blur-3xl size-24 bg-[#4de3ed]"></div>

            {event.picture && (
              <div className="absolute right-0 bottom-0 w-32 h-46">
                <Image
                  src={urlFor(event.picture).url()}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="w-full">
              <p className="font-medium text-[16px] text-[#4de3ed] mb-2">
                {event.eventHost}
              </p>
              <p className="text-white font-semibold text-2xl mb-2 line-clamp-3">
                {title}
              </p>
              <p className="font-medium text-[16px] text-[#4de3ed] mb-2">
                {formattedDate} {event.time && `- ${event.time}`}
              </p>
            </div>

            <div className="rounded-lg text-white font-medium w-fit px-16 py-2 border border-[#9aa3a6] bg-linear-to-br from-[#3a4346] to-[#464f52]">
              {event.location}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative flex flex-col items-center justify-center font-inter px-8 py-12 w-full h-full bg-[#232323] rounded-xl cursor-pointer">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl size-24 bg-[#4de3ed]"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <p className="text-white font-medium text-xs sm:text-sm md:text-lg text-center line-clamp-12">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
