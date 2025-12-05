import Image from "next/image";

function CollabSection() {
  const reasons = [
    {
      number: "1",
      title: "Développement commercial:",
      description:
        "Accédez à de nouvelles opportunités et élargissez votre marché grâce à notre réseau.",
    },
    {
      number: "2",
      title: "Visibilité et crédibilité:",
      description:
        "Bénéficiez de la notoriété d'Aetos Technology et renforcez votre image auprès de nos clients.",
    },
    {
      number: "3",
      title: "Innovation commune:",
      description:
        "Construisez avec nous des solutions innovantes adaptées aux besoins de vos clients",
    },
    {
      number: "4",
      title: "Support et accompagnement",
      description:
        "Profitez d'un suivi personnalisé, d'une formation et d'un support dédié pour réussir votre partenariat.",
    },
  ];

  return (
    <div className="w-9/10 mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 w-full ">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-gray-900 mb-8">
            Pourquoi collaborer avec nous?
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

        <div className="w-full lg:max-w-md">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src="/partners/collab.webp"
              alt="Business collaboration"
              width={550}
              height={420}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollabSection;
