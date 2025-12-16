import Image from "next/image";

interface CollabSectionProps {
  dict: {
    title: string;
    imageAlt: string;
    advantages: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  sector:
    | "hospitality"
    | "retail"
    | "fashion-boutiques"
    | "industry-production"
    | "audit";
}

function AdvantagesSection({ dict, sector }: CollabSectionProps) {
  const advantagesArray = Object.values(dict.advantages);

  const reasons = advantagesArray.slice(0, 3).map((advantage, index) => ({
    number: String(index + 1),
    title: advantage.title,
    description: advantage.description,
  }));

  return (
    <div className=" mx-auto py-16 mt-0 lg:mt-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 w-full ">
          <h2 className="text-2xl md:text-[26px] font-poppins font-semibold text-gray-900 mb-8">
            {dict.title}
          </h2>

          <div className="space-y-6 font-isotek">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="flex w-full lg:w-9/10 gap-4 flex-col lg:flex-row text-center lg:text-start items-center lg:items-start"
              >
                <div className="shrink-0 w-12 h-12 bg-[#024E63] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {reason.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-base md:text-xl text-[#575757] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:max-w-md xl:max-w-xl flex items-center justify-center">
          <Image
            src={`/sectors/${sector}/advPic.png`}
            alt={dict.imageAlt}
            width={535}
            height={380}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AdvantagesSection;
