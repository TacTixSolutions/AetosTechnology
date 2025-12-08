import { CircularProgress } from "@/components/ui/circular-progress";

interface StatCardMiniProps {
  percentage: string;
  description: string;
}

function StatCardMini({ percentage, description }: StatCardMiniProps) {
  const numericValue = Math.abs(parseFloat(percentage));

  return (
    <div className="glass-white rounded-xl p-3 shadow-md flex w-9/10 mx-auto items-center gap-3">
      <div className="shrink-0">
        <CircularProgress
          value={numericValue}
          size={64}
          strokeWidth={6}
          showLabel
          progressClassName="stroke-brand"
          className="stroke-transparent"
          labelClassName="font-bold text-[10px] text-brand"
          renderLabel={() => percentage}
        />
      </div>

      <p className="text-xs text-gray-700 leading-tight flex-1">
        {description}
      </p>
    </div>
  );
}

export default StatCardMini;
