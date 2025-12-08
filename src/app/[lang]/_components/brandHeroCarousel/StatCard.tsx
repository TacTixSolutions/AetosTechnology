import { CircularProgress } from "@/components/ui/circular-progress";

interface StatCardProps {
  percentage: string;
  description: string;
}

function StatCard({ percentage, description }: StatCardProps) {
  const numericValue = Math.abs(parseFloat(percentage));

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center min-h-32 min-w-32 lg:min-w-40 lg:min-h-40">
      <div className="mb-2">
        <CircularProgress
          value={numericValue}
          size={100}
          strokeWidth={10}
          showLabel
          progressClassName="stroke-[#274fb3]"
          className="stroke-transparent"
          labelClassName="font-bold text-base text-black"
          renderLabel={() => percentage}
        />
      </div>
      <p className="text-xs text-center text-gray-600 leading-tight">
        {description}
      </p>
    </div>
  );
}

export default StatCard;
