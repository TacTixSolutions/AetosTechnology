"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

interface CTASectionDict {
  title: string;
  titleHighlight: string;
  button: string;
  imageAlt: string;
}

interface CTASectionProps {
  dict: CTASectionDict;
}

function CTASection({ dict }: CTASectionProps) {
  const { lang } = useParams();
  return (
    <div className="w-full py-16 mb-16">
      <div className="bg-[#dde8eb] flex flex-col items-center justify-center h-96 rounded-3xl w-9/10 lg:w-8/10 mx-auto relative">
        <div className="relative flex items-center justify-center">
          <div className="block xl:hidden">
            <Image
              src="/glassPill.png"
              alt={dict.imageAlt}
              width={320}
              height={120}
            />
          </div>
          <div className="xl:block hidden">
            <Image
              src="/glassPill.png"
              alt={dict.imageAlt}
              width={420}
              height={120}
            />
          </div>
          <p
            className={`text-4xl ${
              lang === "en" ? "xl:text-6xl" : "xl:text-5xl"
            } font-semibold absolute inset-0 flex items-center justify-center`}
          >
            {dict.title}
          </p>
        </div>
        <p
          className={`text-4xl ${lang === "en" ? "xl:text-6xl" : "xl:text-5xl"} font-semibold`}
        >
          {dict.titleHighlight}
        </p>
        <div className=" cursor-pointer hover:bg-brand/80 transition-colors w-64 h-16 flex flex-row items-center justify-between bg-brand rounded-full mt-8">
          <div className="w-8" />
          <p className="font-poppins font-medium text-lg text-white">
            {dict.button}
          </p>
          <button className="h-15 w-15 mr-0.5 rounded-full bg-white border-2 border-black">
            <ArrowRight
              size={16}
              className="text-white bg-black rounded-full mx-auto"
            />
          </button>
        </div>
        <div className="hidden lg:block scale-90 xl:scale-100 absolute -top-12 -left-24 animate-float">
          <Image
            src="/cta/cta1.png"
            alt={dict.imageAlt}
            width={400}
            height={300}
          />
        </div>
        <div className="hidden lg:block scale-90 xl:scale-100 absolute -bottom-16 right-8 animate-float-1">
          <Image
            src="/cta/cta4.png"
            alt={dict.imageAlt}
            width={300}
            height={300}
          />
        </div>
        <div className="hidden lg:block scale-90 xl:scale-100 absolute -bottom-26 left-18 animate-float-2">
          <Image
            src="/cta/cta3.png"
            alt={dict.imageAlt}
            width={250}
            height={250}
          />
        </div>
        <div className="hidden lg:block scale-90 xl:scale-100 absolute top-2 -right-18 animate-float-2">
          <Image
            src="/cta/cta2.png"
            alt={dict.imageAlt}
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-2 right-64 animate-float">
          <Image
            src="/logoNoText.png"
            alt={dict.imageAlt}
            width={80}
            height={80}
          />
        </div>
        <div className="absolute bottom-32 left-4 animate-float-3">
          <Image
            src="/logoNoText.png"
            alt={dict.imageAlt}
            className="blur-xs"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}

export default CTASection;
