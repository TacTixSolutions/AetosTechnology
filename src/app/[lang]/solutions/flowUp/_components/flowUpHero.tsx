import Image from "next/image";
import IconTitleCard from "./iconTitleCard";

function FlowUpHero() {
  return (
    <div className="relative bg-linear-to-r from-[#26326c] to-[#1b6073] rounded-2xl h-[400px] w-9/10 mx-auto overflow-hidden">
      <div className="flex h-full flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20">
        <div className="flex flex-col text-white text-center md:text-start font-poppins gap-4">
          <p className="text-5xl font-semibold">FlowUp</p>
          <p className="text-xl">l&apos;efficacité sans effort</p>
        </div>
        {/* img */}
        <div className="bg-[#27326c] scale-75 md:scale-100 p-6 rounded-3xl mr-0 md:mr-24 relative">
          <Image
            src="/flowupLogoBig.png"
            alt="FlowUp Hero Image"
            width={150}
            height={150}
          />
          <div className="absolute -top-8 -right-16 animate-float">
            <IconTitleCard />
          </div>
          <div className="absolute -bottom-8 -left-24 animate-float-1">
            <Image
              src="/graphFlowup.png"
              alt="FlowUp Hero Image"
              width={130}
              height={150}
            />
          </div>
        </div>
      </div>
      {/* flaoting logos */}
      <div>
        <div className="absolute -top-24 -left-24">
          <Image
            src="/flowupOpaque.png"
            alt="FlowUp Hero Image"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute -bottom-32 -left-28">
          <Image
            src="/flowupOpaque.png"
            alt="FlowUp Hero Image"
            width={300}
            height={300}
          />
        </div>
        <div className="hidden md:block absolute -bottom-36 -right-24">
          <Image
            src="/flowupOpaque.png"
            alt="FlowUp Hero Image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default FlowUpHero;
