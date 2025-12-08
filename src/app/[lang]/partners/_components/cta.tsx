import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CTASectionProps {
  dict: {
    title: string;
    description: string;
    button: string;
    imageAlt: string;
  };
}

function CTASection({ dict }: CTASectionProps) {
  return (
    <div className="w-9/10 mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-7xl font-poppins text-gray-900 mb-8">
            {dict.title}
          </h2>
          <p className="text-xl font-poppins font-light text-gray-600 mb-8">
            {dict.description}
          </p>
          <Button className="px-20 py-6 font-poppins shadow-lg rounded-full bg-brand hover:bg-brand/70">
            {dict.button}
          </Button>
        </div>

        <div className="w-full flex justify-center lg:w-1/2">
          <Image
            src="/partners/cta.png"
            alt={dict.imageAlt}
            width={600}
            height={380}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CTASection;
