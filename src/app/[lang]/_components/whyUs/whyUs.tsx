import Image from "next/image";
import { Plus } from "lucide-react";

interface WhyUsDict {
  title: string;
  subtitle: string;
  description: string;
  imageAlt: string;
  reasons: {
    simplicity: { title: string; description: string };
    speed: { title: string; description: string };
    support: { title: string; description: string };
  };
}

interface WhyUsSectionProps {
  dict: WhyUsDict;
}

function WhyUsSection({ dict }: WhyUsSectionProps) {
  const reasons = [
    {
      title: dict.reasons.simplicity.title,
      description: dict.reasons.simplicity.description,
    },
    {
      title: dict.reasons.speed.title,
      description: dict.reasons.speed.description,
    },
    {
      title: dict.reasons.support.title,
      description: dict.reasons.support.description,
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="w-8/10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full font-isotek lg:w-1/2 ">
            <div className="space-y-2 xl:w-8/10">
              <h3 className="text-sm font-semibold text-brand tracking-wider uppercase">
                {dict.title}
              </h3>

              <h2 className="text-3xl font-isotek md:text-4xl font-bold text-gray-900 leading-tight">
                {dict.subtitle}
              </h2>

              <p className="text-gray-600 font-isotek text-base leading-relaxed">
                {dict.description}
              </p>

              {/* Reasons list with plus icons */}
              <div className="space-y-6 pt-2">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0">
                      <Plus className="w-6 h-6 text-brand" strokeWidth={3} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section - Hidden on md and below, shown on lg+ */}
          <div className="flex w-full lg:w-1/2 gap-4">
            {/* Left image */}
            <div className="flex-1 relative h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/whyUsPic.webp"
                alt={dict.imageAlt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
