import Image from "next/image";
import { Plus } from "lucide-react";

function WhyUsSection() {
  const reasons = [
    {
      title: "Expertise terrain",
      description:
        "Une compréhension concrète de vos défis pour créer des solutions réellement utiles.",
    },
    {
      title: "Technologie éprouvée",
      description:
        "Des outils fiables qui améliorent les performances et réduisent les erreurs opérationnelles.",
    },
    {
      title: "Proximité client",
      description:
        "Un accompagnement continu pour accélérer la prise de décision au quotidien.",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="w-8/10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full font-isotek lg:w-1/2 space-y-2">
            <h3 className="text-sm font-semibold text-brand tracking-wider uppercase">
              Pourquoi nous
            </h3>

            <h2 className="text-3xl font-isotek md:text-4xl font-bold text-gray-900 leading-tight">
              Digitalisation adaptée à votre réalité
            </h2>

            <p className="text-gray-600 font-isotek text-lg leading-relaxed">
              Aetos Technology aide les entreprises à digitaliser leurs
              opérations avec des solutions simples, rapides et conçues pour les
              besoins métier du terrain.
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

          {/* Image Section - Hidden on md and below, shown on lg+ */}
          <div className="hidden lg:flex w-1/2 gap-4">
            {/* Left image */}
            <div className="flex-1 relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/whyUsPic.webp"
                alt="Digital workspace"
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
