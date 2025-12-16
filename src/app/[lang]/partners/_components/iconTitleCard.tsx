function IconTitleCard({
  icon,
  title,
  subtitle,
  backgroundColor,
  orientation = "row",
}: {
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  orientation?: "row" | "col";
}) {
  return (
    <div
      className={`bg-white font-inter shadow-lg px-3 py-2 rounded-2xl flex ${orientation === "row" ? "flex-row items-center gap-4 max-w-56 " : "flex-col items-center gap-1 text-center py-4 max-w-36 "}`}
    >
      <div
        style={{ backgroundColor }}
        className="shrink-0 flex items-center w-10 h-10 rounded-lg justify-center"
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text text-[#060336]">{title}</h2>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

export default IconTitleCard;
