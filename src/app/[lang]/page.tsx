import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import HeroSection from "./_components/heroSection/heroSection";
import ClientsCarousel from "./_components/clientsCarousel/clientsCarousel";
import OurServices from "./_components/ourServices/ourServices";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <HeroSection />
      <ClientsCarousel />
      {/* why us section */}
      <OurServices />
    </div>
  );
}
