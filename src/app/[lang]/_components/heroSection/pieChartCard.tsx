function PieChartCard() {
  return (
    <div className="bg-white rounded-2xl px-4 card-shadow">
      <div className="p-6 flex flex-col items-center justify-center gap-4">
        <PieChartIcon />
        <p className="text-2xl font-bold">+70%</p>
      </div>
    </div>
  );
}

function PieChartIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_0_1)">
        <path
          d="M55.8137 28.5C55.8137 24.7573 55.0765 21.0513 53.6443 17.5935C52.212 14.1357 50.1127 10.9939 47.4663 8.34746C44.8198 5.70099 41.678 3.60169 38.2202 2.16943C34.7624 0.737174 31.0564 -1.63597e-07 27.3137 0L27.3137 28.5H55.8137Z"
          fill="#6EA1B1"
        />
      </g>
      <g filter="url(#filter1_i_0_1)">
        <path
          d="M25.5296 4.1665C20.4491 4.19785 15.4919 5.73505 11.285 8.58371C7.07812 11.4324 3.81041 15.4646 1.89513 20.1704C-0.0201587 24.8762 -0.496996 30.0443 0.524911 35.0211C1.54682 39.9979 4.02158 44.5599 7.63623 48.1302C11.2509 51.7006 15.8431 54.1188 20.8321 55.0793C25.8212 56.0397 30.983 55.4991 35.6648 53.5259C40.3466 51.5527 44.3382 48.2355 47.1347 43.9938C49.9313 39.752 51.4072 34.7763 51.3758 29.6957L25.6881 29.8542L25.5296 4.1665Z"
          fill="#277B8D"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_0_1"
          x="27.3137"
          y="0"
          width="28.5"
          height="32.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter
          id="filter1_i_0_1"
          x="0"
          y="4.1665"
          width="51.3762"
          height="55.376"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
      </defs>
    </svg>
  );
}

export default PieChartCard;
