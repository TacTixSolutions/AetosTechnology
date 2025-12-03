"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import Image from "next/image";
import LanguageIcon from "./icons/LanguageIcon";
import { useRouter, usePathname } from "next/navigation";
import { Check } from "lucide-react";
import { Locale } from "@/lib/i18n-config";

function LanguageChanger({ isDark = true }: { isDark?: boolean }) {
  const languageOptions = [
    {
      code: "en" as Locale,
      label: "EN",
      flag: "https://flagcdn.com/gb.svg",
      name: "English",
    },
    {
      code: "fr" as Locale,
      label: "FR",
      flag: "https://flagcdn.com/fr.svg",
      name: "Français",
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Extract current locale from pathname (e.g., /en/test -> en)
  const currentLocale = pathname.split("/")[1] as Locale;

  const handleSelect = (newLocale: Locale) => {
    startTransition(() => {
      // Replace the locale in the current pathname
      const segments = pathname.split("/");
      segments[1] = newLocale;
      const newPath = segments.join("/");

      router.push(newPath);
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={`border-0 w-fit flex flex-row items-center justify-center gap-1.5 cursor-pointer active:border-0 focus:border-0 focus-visible:ring-0 hover:bg-white/20 transition-colors hover:text-gray-900 p-2 rounded-full  ${
          isDark ? "[&>svg]:text-black" : "[&>svg]:text-white"
        }`}
        aria-label="Change language"
        disabled={isPending}
      >
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 5L0 0H10L5 5Z" fill={isDark ? "#000000" : "#ffffff"} />
        </svg>
        <div className="block md:hidden">
          <LanguageIcon size={18} color={isDark ? "#000000" : "#ffffff"} />
        </div>
        <div className="hidden md:block">
          <LanguageIcon size={20} color={isDark ? "#000000" : "#ffffff"} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-62" role="listbox">
        {languageOptions.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            aria-label={`Switch to ${lang.name}`}
            onClick={() => handleSelect(lang.code)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Image
                src={lang.flag}
                alt={`${lang.name} flag`}
                width={24}
                height={16}
                className="w-6 h-4"
              />
              <span>{lang.name}</span>
              {currentLocale === lang.code && (
                <span>
                  <Check size={16} color="#7f7f7f" />
                </span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageChanger;
