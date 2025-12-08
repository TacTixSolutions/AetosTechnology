import Image from "next/image";

interface CollabSectionProps {
  dict: {
    title: string;
    imageAlt: string;
    reasons: {
      innovation: {
        title: string;
        description: string;
      };
      growth: {
        title: string;
        description: string;
      };
      expertise: {
        title: string;
        description: string;
      };
      network: {
        title: string;
        description: string;
      };
    };
  };
}

function CollabSection({ dict }: CollabSectionProps) {
  const reasons = [
    {
      number: "1",
      title: dict.reasons.innovation.title,
      description: dict.reasons.innovation.description,
    },
    {
      number: "2",
      title: dict.reasons.growth.title,
      description: dict.reasons.growth.description,
    },
    {
      number: "3",
      title: dict.reasons.expertise.title,
      description: dict.reasons.expertise.description,
    },
    {
      number: "4",
      title: dict.reasons.network.title,
      description: dict.reasons.network.description,
    },
  ];

  return (
    <div className="w-9/10 mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 w-full ">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-gray-900 mb-8">
            {dict.title}
          </h2>

          <div className="space-y-6">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="flex gap-4 flex-col lg:flex-row text-center lg:text-start items-center lg:items-start"
              >
                <div className="shrink-0 w-12 h-12 bg-[#024E63] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold font-poppins">
                    {reason.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 font-poppins">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 font-inter leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:max-w-md flex items-center justify-center">
          <Image
            src="/partners/collab.webp"
            alt={dict.imageAlt}
            width={550}
            height={420}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CollabSection;
