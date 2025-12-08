import { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import ContactContent from "./_components/contactContent";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const metadata = dict.metadata.contact;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: "Aetos Technology" }],
    creator: "Aetos Technology",
    publisher: "Aetos Technology",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://aetos-technology.com/${lang}/contact`,
      siteName: "Aetos Technology",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Aetos Technology Contact",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://aetos-technology.com/${lang}/contact`,
      languages: {
        en: "https://aetos-technology.com/en/contact",
        fr: "https://aetos-technology.com/fr/contact",
      },
    },
  };
}

async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="bg-white">
      <ContactContent dict={dict.contact} lang={lang} />
    </div>
  );
}

export default ContactPage;
