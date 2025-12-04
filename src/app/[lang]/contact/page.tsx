import { Locale } from "@/lib/i18n-config";
import ContactContent from "./_components/contactContent";

async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  await params;
  return (
    <div className="bg-white">
      <ContactContent />
    </div>
  );
}

export default ContactPage;
