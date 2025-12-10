import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CTASectionProps {
  dict: {
    title: string;
    description: string;
    button: string;
  };
  lang: string;
}

function CTASection({ dict, lang }: CTASectionProps) {
  return (
    <div className="relative w-9/10 h-auto md:h-[420px] bg-[#e6eef0] flex items-center justify-center flex-col md:flex-row gap-8 p-12 mx-auto mb-16 rounded-[50px]">
      <div className="w-full lg:w-45/100 h-full flex items-center justify-center ">
        <Image
          src="/sectors/cta.png"
          alt="CTA Image"
          width={478}
          height={328}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="w-full md:w-55/100 gap-4 font-inter flex-col h-full flex items-center md:items-start justify-center">
        <p className="font-bold text-2xl md:text-4xl lg:text-[62px]">
          {dict.title}
        </p>
        <p className=" text-base text-gray-600 md:text-lg">
          {dict.description}
        </p>
        <Link href={`/${lang}/contact`}>
          <Button className="px-20 w-9/10 md:w-80 py-6 font-poppins uppercase shadow-lg bg-[#024e63] hover:bg-brand">
            {dict.button}
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CTASection;
