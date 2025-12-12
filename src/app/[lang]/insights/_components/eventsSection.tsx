import EventCard from "./eventCard";

interface EventsSectionProps {
  events: Array<{
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
  }>;
  lang: "en" | "fr";
}

function EventsSection({ events, lang }: EventsSectionProps) {
  return (
    <div className="my-16">
      <p className="font-poppins font-semibold text-[32px]">Events</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {events.map((event) => (
          <EventCard key={event._id} event={event} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default EventsSection;
