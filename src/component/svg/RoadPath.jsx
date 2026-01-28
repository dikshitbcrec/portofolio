export const RoadPath = () => {
  return (
    <svg
      viewBox="0 0 200 800"
      className="absolute left-1/2 transform -translate-x-1/2 h-full w-40"
      fill="none"
    >
      <path
        d="
          M100 0
          C40 100, 160 200, 100 300
          C40 400, 160 500, 100 600
          C40 700, 160 800, 100 900
        "
        stroke="#14532d"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
