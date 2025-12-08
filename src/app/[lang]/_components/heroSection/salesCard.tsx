function SalesCard() {
  return (
    <div className="bg-white scale-75 font-space rounded-2xl px-4 flex flex-col card-shadow">
      <div className="p-4 flex flex-col items-start justify-center gap-1">
        <h2 className="font-bold text-sm text-[#060336]">Sales</h2>
        <p className="text-xl text-[#060336] font-extrabold">
          27632 TND
          <span className="text-sm text-green-400"> +3.5%</span>
        </p>
        <p className="text-sm text-gray-500">Compared to 245140 last year!</p>
      </div>
    </div>
  );
}

export default SalesCard;
