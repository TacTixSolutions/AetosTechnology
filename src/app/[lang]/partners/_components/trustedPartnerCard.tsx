import Image from "next/image";

function TrustedPartnerCard({
  imageSrc,
  companyName,
  description,
  imageDimensions,
}: {
  imageSrc: string;
  companyName: string;
  description: string;
  imageDimensions?: { width: number; height: number };
}) {
  return (
    <div className="w-full bg-white box-card-shadow rounded-xl h-[460px] xl:h-[420px] flex items-center justify-between flex-col py-8 px-4">
      <Image
        src={imageSrc}
        alt={`${companyName} logo`}
        width={imageDimensions?.width || 150}
        height={imageDimensions?.height || 50}
        className="object-contain mx-auto"
      />
      <div className="flex flex-col items-center px-4 font-poppins">
        <h3 className="text-xl lg:text-3xl font-semibold text-center text-gray-900 mb-4">
          {companyName}
        </h3>
        <p className="text-center text-sm lg:text-base xl:text-lg">
          {description}
        </p>
      </div>
      <div className="flex items-center mt-4 gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i.toFixed()}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9327 0.815498L7.94318 6.87702L1.25445 7.85217C0.05496 8.02615 -0.42575 9.5049 0.444106 10.3519L5.28325 15.0674L4.1387 21.7287C3.93269 22.9327 5.20084 23.8346 6.26298 23.2715L12.2467 20.1263L18.2304 23.2715C19.2925 23.8301 20.5607 22.9327 20.3547 21.7287L19.2101 15.0674L24.0492 10.3519C24.9191 9.5049 24.4384 8.02615 23.2389 7.85217L16.5502 6.87702L13.5606 0.815498C13.025 -0.264955 11.473 -0.278689 10.9327 0.815498Z"
              fill="#FF9900"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default TrustedPartnerCard;
