import { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import ContactContent from "./_components/contactContent";

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
