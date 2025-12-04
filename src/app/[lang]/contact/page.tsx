import { Locale } from "@/lib/i18n-config";
import ContactContent from "./_components/contactContent";

async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  await params;
  return (
    <div className="bg-white">
      <div className="bg-[#f3f8fa] my-24 w-9/10 mx-auto rounded-xl">
        <ContactContent />
      </div>
    </div>
  );
}

export default ContactPage;
