import React, { useState } from "react";

export const AchievementCardModal = ({ title, detail, img }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button with text only */}
      <button
  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg hover:shadow-lg transition w-full"
  onClick={() => setIsOpen(true)}
>
  {/* Left content */}
  <div className="flex flex-col items-start">
    {title && <p className="font-semibold text-sm">{title}</p>}
    {detail && <p className="text-xs text-gray-600">{detail}</p>}
  </div>

  {/* Right link/logo icon */}
  <div className="ml-3 text-gray-500 hover:text-gray-700">
    {/* External link icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3h7m0 0v7m0-7L10 14"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 10v11h11"
      />
    </svg>
  </div>
</button>


      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Frosted background */}
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md"></div>

          {/* Modal content */}
          <div
            className="relative bg-white p-4 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            {/* Image inside modal */}
            {img && (
              <img
                src={img}
                alt={detail || "Achievement"}
                className="w-full h-auto rounded-md mb-2"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
