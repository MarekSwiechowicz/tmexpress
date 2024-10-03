import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  handleClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  handleClick,
}) => {
  return (
    <button
      id="buttonId"
      className="flex lg:hidden flex-col justify-center items-center"
      onClick={handleClick}
    >
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-10 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-10 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-10 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
