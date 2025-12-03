import { ArrowRight } from "lucide-react";
import Image from "next/image";

function CTASection() {
  return (
    <div className="w-full py-16 mb-16">
      <div className="bg-[#dde8eb] flex flex-col items-center justify-center h-96 rounded-3xl w-8/10 mx-auto relative">
        <div className="relative flex items-center justify-center">
          <Image
            src="/glassPill.png"
            alt="glass pill"
            width={420}
            height={120}
          />
          <p className="text-6xl font-semibold absolute inset-0 flex items-center justify-center">
            Want to start
          </p>
        </div>
        <p className="text-6xl font-semibold">a project?</p>
        <div className=" cursor-pointer hover:bg-brand/80 transition-colors w-64 h-16 flex flex-row items-center justify-between bg-brand rounded-full mt-8">
          <div className="w-8" />
          <p className="font-poppins font-medium text-lg text-white">
            Lets talk!
          </p>
          <button className="h-15 w-15 mr-0.5 rounded-full bg-white border-2 border-black">
            <ArrowRight
              size={16}
              className="text-white bg-black rounded-full mx-auto"
            />
          </button>
        </div>
        <div className="absolute -top-12 -left-24 animate-float">
          <Image
            src="/cta/cta1.png"
            alt="cta decoration"
            width={400}
            height={300}
          />
        </div>
        <div className="absolute -bottom-16 right-8 animate-float-1">
          <Image
            src="/cta/cta4.png"
            alt="cta decoration"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute -bottom-26 left-18 animate-float-2">
          <Image
            src="/cta/cta3.png"
            alt="cta decoration"
            width={250}
            height={250}
          />
        </div>
        <div className="absolute top-2 -right-18 animate-float-2">
          <Image
            src="/cta/cta2.png"
            alt="cta decoration"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-2 right-64 animate-float">
          <Image
            src="/logoNoText.png"
            alt="cta decoration"
            width={80}
            height={80}
          />
        </div>
        <div className="absolute bottom-32 left-4 animate-float-3">
          <Image
            src="/logoNoText.png"
            alt="cta decoration"
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
