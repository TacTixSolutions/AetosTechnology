import Image from "next/image";
import { urlFor } from "@/lib/sanity";

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
  const title = lang === "fr" ? event.titleFr : event.titleEn;
  const description = lang === "fr" ? event.descriptionFr : event.descriptionEn;

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    { year: "numeric", month: "2-digit", day: "2-digit" }
  );

  return (
    <div className="group relative flex flex-col justify-between font-inter px-8 py-12 overflow-hidden w-full md:w-[640px] h-[450px] shrink-0 bg-[#232323] rounded-xl cursor-pointer">
      <div className="absolute right-0 bottom-36 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 blur-3xl size-24 bg-[#4de3ed] transition-all duration-700 ease-in-out"></div>

      {event.picture && (
        <div className="absolute right-0 bottom-0 w-32 h-46 group-hover:opacity-0 transition-opacity duration-500">
          <Image
            src={urlFor(event.picture).url()}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Default content */}
      <div className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-500">
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

      <div className="rounded-lg text-white font-medium w-fit px-16 py-2 border border-[#9aa3a6] bg-linear-to-br from-[#3a4346] to-[#464f52] opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        {event.location}
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10 px-8">
        <p className="text-white font-medium text-xs sm:text-sm md:text-lg text-center line-clamp-12">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
