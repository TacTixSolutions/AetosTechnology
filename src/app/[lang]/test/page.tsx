import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { LanguageSwitcher } from "@/components/language-switcher";

export default async function TestPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div className="space-y-6 max-w-2xl w-full">
        <p className="font-poppins text-2xl text-center">{dict.test.poppins}</p>

        <p className="font-isotek text-2xl text-center">{dict.test.isotek}</p>

        <p className="font-inter text-2xl text-center">{dict.test.inter}</p>
      </div>

      <LanguageSwitcher currentLang={lang} label={dict.test.switchLanguage} />
    </div>
  );
}
