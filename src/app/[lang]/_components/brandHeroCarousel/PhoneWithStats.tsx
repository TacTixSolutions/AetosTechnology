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
      <div className="absolute left-1/2 -translate-x-1/2 top-16 w-[280px] h-[580px]">
        <Image
          src="/phonePropWhite.png"
          alt="Phone mockup"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute inset-0">
        {/* card 1 */}
        <div className="absolute top-[200px] left-2.5 w-[150px] z-10">
          <StatCard
            percentage={stats[0].percentage}
            description={stats[0].description}
            isPositive={stats[0].isPositive}
          />
        </div>

        {/* card 2 */}
        <div className="absolute top-[200px] right-2.5 w-[150px] z-10">
          <StatCard
            percentage={stats[1].percentage}
            description={stats[1].description}
            isPositive={stats[1].isPositive}
          />
        </div>

        {/* card 3 */}
        <div className="absolute bottom-[60px] left-2.5 w-[150px] z-10">
          <StatCard
            percentage={stats[2].percentage}
            description={stats[2].description}
            isPositive={stats[2].isPositive}
          />
        </div>

        {/* card 4 */}
        <div className="absolute bottom-[60px] right-2.5 w-[150px] z-10">
          <StatCard
            percentage={stats[3].percentage}
            description={stats[3].description}
            isPositive={stats[3].isPositive}
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneWithStats;
