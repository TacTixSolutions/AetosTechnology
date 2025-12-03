import { CircularProgress } from "@/components/ui/circular-progress";

interface StatCardProps {
  percentage: string;
  description: string;
  isPositive?: boolean;
}

function StatCard({
  percentage,
  description,
  isPositive = true,
}: StatCardProps) {
  const numericValue = Math.abs(parseFloat(percentage));

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center min-h-32 min-w-32 lg:min-w-40 lg:min-h-40">
      <div className="mb-2">
        <CircularProgress
          value={numericValue}
          size={80}
          strokeWidth={7}
          showLabel
          progressClassName={isPositive ? "stroke-brand" : "stroke-red-500"}
          className={isPositive ? "stroke-brand/25" : "stroke-red-500/25"}
          labelClassName={`font-bold text-sm ${
            isPositive ? "text-brand" : "text-red-500"
          }`}
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
