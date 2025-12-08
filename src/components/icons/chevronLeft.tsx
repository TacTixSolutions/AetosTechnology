function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="32"
      viewBox="0 0 20 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.35 15.75L19.425 27.825L15.75 31.5L0 15.75L15.75 0L19.425 3.675L7.35 15.75Z"
        fill="white"
      />
    </svg>
  );
}

export default ChevronLeft;
