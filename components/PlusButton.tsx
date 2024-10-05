import React from "react";

interface PlusButtonProps {
  isOpen: boolean;
  handleClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ isOpen, handleClick }) => {
  return (
    <button
      id="buttonId"
      className="flex flex-col justify-center items-center pt-64 lg:pt-36 pl-11"
      onClick={handleClick}
    >
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.25 w-10 rounded-sm absolute ${
          isOpen ? "opacity-0" : "rotate-90"
        }`}
        style={{ transformOrigin: "center" }}
      ></span>

      {/* Horizontal line */}
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.25 w-10 rounded-sm ${
          isOpen ? "opacity-100" : "opacity-100"
        }`}
      ></span>
    </button>
  );
};

export default PlusButton;
