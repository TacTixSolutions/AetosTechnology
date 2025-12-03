import Image from "next/image";
import StatCard from "./StatCard";

interface PhoneWithStatsProps {
  stats: Array<{
    percentage: string;
    description: string;
    isPositive?: boolean;
  }>;
}

function PhoneWithStats({ stats }: PhoneWithStatsProps) {
  return (
    <div className="relative w-[360px] h-[600px] hidden lg:block">
      <div className="absolute left-1/2 -translate-x-1/2 top-32 w-[320px] h-[580px]">
        <Image
          src="/phonePropWhite.png"
          alt="Phone mockup"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute inset-0">
        {/* card 1 */}
        <div className="absolute top-60 left-2.5 w-[150px] z-10">
          <StatCard
            percentage={stats[0].percentage}
            description={stats[0].description}
          />
        </div>

        {/* card 2 */}
        <div className="absolute top-60 right-2.5 w-[150px] z-10">
          <StatCard
            percentage={stats[1].percentage}
            description={stats[1].description}
          />
        </div>

        {/* card 3 */}
        <div className="absolute -bottom-4 left-2.5 w-[150px] z-10">
          <StatCard
            percentage={stats[2].percentage}
            description={stats[2].description}
          />
        </div>

        {/* card 4 */}
        <div className="absolute -bottom-4 right-2.5 w-[150px] z-10">
          <StatCard
            percentage={stats[3].percentage}
            description={stats[3].description}
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneWithStats;
