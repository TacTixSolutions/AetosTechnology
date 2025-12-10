import { getBlogs, getEvents } from "@/lib/sanity";
import { Locale } from "@/lib/i18n-config";
import BlogsSection from "./_components/blogsSection";
import EventsSection from "./_components/eventsSection";
import HeroSection from "./_components/heroSection";
import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const title =
    lang === "fr"
      ? "Insights - Aetos Technology"
      : "Insights - Aetos Technology";
  const description =
    lang === "fr"
      ? "Découvrez nos derniers blogs et événements sur la technologie et l'innovation."
      : "Discover our latest blogs and events about technology and innovation.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Aetos Technology",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

async function Insights({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const [blogs, events, dict] = await Promise.all([
    getBlogs(),
    getEvents(),
    getDictionary(lang),
  ]);

  return (
    <div className="min-h-screen pt-32 pb-24 w-9/10 px-auto lg:px-16 mx-auto max-w-[1440px]">
      <HeroSection dict={dict.insights.hero} />
      <EventsSection events={events} lang={lang} />
      <BlogsSection blogs={blogs} lang={lang} />
    </div>
  );
}

export default Insights;
