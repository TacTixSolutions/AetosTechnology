"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import HamburgerMenuIcon from "@/components/icons/hamburgerMenuIcon";
import LanguageChanger from "@/components/language-switcher";
import Link from "next/link";
import {
  Hotel,
  Store,
  Shirt,
  Factory,
  ClipboardCheck,
  Plus,
} from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  dict: {
    home: string;
    solutions: string;
    insights: string;
    partners: string;
    contactUs: string;
    products: {
      title: string;
      flowup: string;
      flowupDescription: string;
      supervisor: string;
      visualMerchandising: string;
      shiftMaster: string;
      communication: string;
      flowHR: string;
      microLearning: string;
      optiStock: string;
    };
    sectors: {
      title: string;
      hospitality: string;
      retail: string;
      fashionBoutiques: string;
      industryProduction: string;
      audit: string;
    };
  };
  lang: string;
}

const sectorIcons = {
  hospitality: Hotel,
  retail: Store,
  fashionBoutiques: Shirt,
  industryProduction: Factory,
  audit: ClipboardCheck,
};

function Navbar({ dict, lang }: NavbarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setIsMobile(width < 768);
      }
    };

    checkWidth();

    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const products = [
    { name: dict.products.supervisor, icon: Plus, id: "supervisor" },
    {
      name: dict.products.visualMerchandising,
      icon: Plus,
      id: "visual-merchandising",
    },
    { name: dict.products.shiftMaster, icon: Plus, id: "shiftmaster" },
    { name: dict.products.communication, icon: Plus, id: "communication" },
    { name: dict.products.flowHR, icon: Plus, id: "flowhr" },
    { name: dict.products.microLearning, icon: Plus, id: "micro-learning" },
    { name: dict.products.optiStock, icon: Plus, id: "optistock" },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed z-20 top-0 -left-1/2 -right-1/2 flex flex-row items-center justify-between py-3 px-4 md:px-8 glass-sm mt-4 rounded-3xl w-9/10 mx-auto"
    >
      <div className="flex items-center gap-4">
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button className="h-9 w-9 hover:bg-accent hover:text-accent-foreground flex items-center justify-center rounded-md">
                <HamburgerMenuIcon color="#024E63" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 flex flex-col">
              {/* Header with logo and close button */}
              <SheetHeader className="p-6 pb-0">
                <div className="flex items-center justify-between">
                  <Link href={`/${lang}`}>
                    <Image
                      src="/logoWithText.png"
                      alt="Aetos Technology Logo"
                      width={120}
                      height={30}
                    />
                  </Link>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </div>
              </SheetHeader>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="space-y-2">
                  {/* Home */}
                  <Link
                    className={cn(
                      "flex w-full items-center rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-[#024E63]/10 hover:text-[#024E63] cursor-pointer no-underline",
                      pathname === `/${lang}`
                        ? "bg-[#024E63]/10 text-[#024E63]"
                        : "text-gray-700"
                    )}
                    href={`/${lang}`}
                  >
                    {dict.home}
                  </Link>

                  {/* Solutions Accordion */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="solutions" className="border-none">
                      <AccordionTrigger className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#024E63]/10 hover:text-[#024E63] rounded-md hover:no-underline">
                        {dict.solutions}
                      </AccordionTrigger>
                      <AccordionContent className="px-2 pt-2 pb-4">
                        <div className="space-y-4">
                          {/* Products Section */}
                          <div>
                            <h3 className="mb-3 text-xs font-semibold text-gray-400 tracking-wider px-4">
                              {dict.products.title}
                            </h3>
                            <div className="space-y-1">
                              {/* Flowup - Featured */}
                              <Link href={`/${lang}/solutions/flowUp`}>
                                <div className="flex items-start gap-3 p-3 rounded-lg cursor-pointer bg-[#26326c]/5 mx-2">
                                  <div className="w-10 h-10 rounded-lg bg-[#26326c] flex items-center justify-center shrink-0">
                                    <Image
                                      src={"/flowupLogo.png"}
                                      alt="Flowup Logo"
                                      width={28}
                                      height={28}
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-sm text-gray-900">
                                      {dict.products.flowup}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                      {dict.products.flowupDescription}
                                    </p>
                                  </div>
                                </div>
                              </Link>

                              {/* Other Products */}
                              {products.map((product, index) => (
                                <Link
                                  key={index}
                                  href={`/${lang}/solutions/flowUp#${product.id}`}
                                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors mx-2 no-underline"
                                >
                                  <Plus size={14} className="text-gray-400" />
                                  <span className="text-sm text-gray-700">
                                    {product.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Sectors Section */}
                          <div>
                            <h3 className="mb-3 text-xs font-semibold text-gray-400 tracking-wider px-4">
                              {dict.sectors.title}
                            </h3>
                            <div className="space-y-1">
                              {Object.entries(dict.sectors)
                                .filter(([key]) => key !== "title")
                                .map(([key, value], index) => {
                                  const IconComponent =
                                    sectorIcons[
                                      key as keyof typeof sectorIcons
                                    ];
                                  const colors = [
                                    "bg-blue-500",
                                    "bg-cyan-500",
                                    "bg-yellow-500",
                                    "bg-teal-600",
                                    "bg-indigo-600",
                                  ];
                                  return (
                                    <div
                                      key={key}
                                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors mx-2"
                                    >
                                      <div
                                        className={`w-10 h-10 rounded-lg ${colors[index]} flex items-center justify-center shrink-0`}
                                      >
                                        <IconComponent
                                          size={18}
                                          className="text-white"
                                        />
                                      </div>
                                      <span className="text-sm font-medium text-gray-900">
                                        {value}
                                      </span>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Insights */}
                  <Link
                    className={cn(
                      "flex w-full items-center rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-[#024E63]/10 hover:text-[#024E63] cursor-pointer no-underline",
                      pathname === `/${lang}/insights`
                        ? "bg-[#024E63]/10 text-[#024E63]"
                        : "text-gray-700"
                    )}
                    href={`/${lang}/insights`}
                  >
                    {dict.insights}
                  </Link>

                  {/* Partners */}
                  <Link
                    className={cn(
                      "flex w-full items-center rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-[#024E63]/10 hover:text-[#024E63] cursor-pointer no-underline",
                      pathname === `/${lang}/partners`
                        ? "bg-[#024E63]/10 text-[#024E63]"
                        : "text-gray-700"
                    )}
                    href={`/${lang}/partners`}
                  >
                    {dict.partners}
                  </Link>
                </nav>
              </div>

              {/* Language Changer at bottom */}
              <div className="p-6 border-t border-gray-200">
                <LanguageChanger />
              </div>
            </SheetContent>
          </Sheet>
        )}
        <Link href={`/${lang}`}>
          <div className="block md:hidden">
            <Image
              src="/logoWithText.png"
              alt="Aetos Technology Logo"
              width={90}
              height={30}
            />
          </div>
          <div className="md:block hidden">
            <Image
              src="/logoWithText.png"
              alt="Aetos Technology Logo"
              width={100}
              height={30}
            />
          </div>
        </Link>
      </div>

      {/* Middle nav links */}
      {!isMobile && (
        <NavigationMenu className="flex">
          <NavigationMenuList className="gap-1">
            {/* Home */}
            <NavigationMenuItem>
              <Link
                className={cn(
                  "group font-medium font-inter inline-flex rounded-md h-10 w-max items-center justify-center px-4 py-2 text-base transition-colors hover:text-[#306D7E] focus:text-[#306D7E] focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                  pathname === `/${lang}` ? "text-[#306D7E]" : "text-gray-900"
                )}
                href={`/${lang}`}
              >
                {dict.home}
              </Link>
            </NavigationMenuItem>

            {/* Solutions with dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "h-10 px-4 py-2 font-inter text-base font-medium bg-transparent hover:text-[#024E63] data-[state=open]:bg-[#024E63]/10 data-[state=open]:text-[#024E63]",
                  "text-gray-700"
                )}
              >
                {dict.solutions}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 gap-4 p-3">
                  {/* Products Column */}
                  <div>
                    <h3 className="mb-4 text-sm font-semibold text-gray-400 tracking-wider">
                      {dict.products.title}
                    </h3>
                    <div className="space-y-1.5">
                      {/* Flowup - Featured */}
                      <Link href={`/${lang}/solutions/flowUp`}>
                        <div className="flex items-start gap-3 p-2 cursor-pointer rounded-lg bg-[#26326c]/5">
                          <div className="w-12 h-12 rounded-lg bg-[#26326c] flex items-center justify-center shrink-0">
                            <Image
                              src={"/flowupLogo.png"}
                              alt="Flowup Logo"
                              width={28}
                              height={28}
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {dict.products.flowup}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {dict.products.flowupDescription}
                            </p>
                          </div>
                        </div>
                      </Link>

                      {/* Other Products */}
                      {products.map((product, index) => (
                        <Link
                          key={index}
                          href={`/${lang}/solutions/flowUp#${product.id}`}
                          className="ml-14 flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors no-underline"
                        >
                          <Plus size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {product.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Sectors Column */}
                  <div>
                    <h3 className="mb-4 text-sm font-semibold text-gray-400 tracking-wider">
                      {dict.sectors.title}
                    </h3>
                    <div className="space-y-0">
                      {Object.entries(dict.sectors)
                        .filter(([key]) => key !== "title")
                        .map(([key, value], index) => {
                          const IconComponent =
                            sectorIcons[key as keyof typeof sectorIcons];
                          const colors = [
                            "bg-blue-500",
                            "bg-cyan-500",
                            "bg-yellow-500",
                            "bg-teal-600",
                            "bg-indigo-600",
                          ];
                          return (
                            <div
                              key={key}
                              className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div
                                className={`w-10 h-10 rounded-lg ${colors[index]} flex items-center justify-center shrink-0`}
                              >
                                <IconComponent
                                  size={20}
                                  className="text-white"
                                />
                              </div>
                              <span className="font-medium text-gray-900">
                                {value}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Insights */}
            <NavigationMenuItem>
              <Link
                className={cn(
                  "group inline-flex rounded-md h-10 w-max items-center justify-center px-4 py-2 text-base font-medium font-inter transition-colors hover:text-[#306D7E] focus:text-[#306D7E] focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                  pathname === `/${lang}/insights`
                    ? "text-[#306D7E]"
                    : "text-gray-900"
                )}
                href={`/${lang}/insights`}
              >
                {dict.insights}
              </Link>
            </NavigationMenuItem>

            {/* Partners */}
            <NavigationMenuItem>
              <Link
                className={cn(
                  "group font-inter inline-flex rounded-md h-10 w-max items-center justify-center px-4 py-2 text-base font-medium transition-colors hover:text-[#024E63] focus:text-[#024E63] focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                  pathname === `/${lang}/partners`
                    ? "bg-[#024E63]/10 text-[#024E63]"
                    : "text-gray-700"
                )}
                href={`/${lang}/partners`}
              >
                {dict.partners}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

      {/* right side */}
      <div className="flex items-center gap-3">
        <div className="hidden md:flex">
          <LanguageChanger />
        </div>

        <Link href={`/${lang}/contact`}>
          <Button className=" font-inter bg-[#024E63] hover:bg-[#024E63]/90 rounded-[7px] text-white px-8 h-10">
            {dict.contactUs}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
