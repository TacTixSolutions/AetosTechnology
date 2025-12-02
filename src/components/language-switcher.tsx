"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { i18n, type Locale } from "@/lib/i18n-config";

export function LanguageSwitcher({
  currentLang,
  label,
}: {
  currentLang: Locale;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLang = currentLang === "en" ? "fr" : "en";
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <Button onClick={switchLanguage} variant="default">
      {label}
    </Button>
  );
}
