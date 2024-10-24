interface PlusButtonProps {
  isOpen: boolean;
  handleClick: () => void;
}

export const ArrowButton: React.FC<PlusButtonProps> = ({
  isOpen,
  handleClick,
}) => {
  return (
    <button
      id="buttonId"
      className="flex flex-col justify-center items-center "
      onClick={handleClick}
    >
      <span
        className={`bg-dark transition-all duration-300 ease-out block h-0.25 w-7 rounded-sm absolute transform ${
          isOpen ? "translate-x-10" : "translate-x-0"
        } rotate-45`}
        style={{
          transformOrigin: "center",
          transform: `translateY(-16px) ${
            isOpen ? "translateX(30px)" : "translateX(0px)"
          } rotate(135deg)`,
        }}
      ></span>

      <span
        className={`bg-dark  transition-all duration-300 ease-out block h-0.25 w-7 rounded-sm absolute transform ${
          isOpen ? "translate-x-10" : "translate-x-0"
        } rotate-135`}
        style={{
          transformOrigin: "center",
          transform: `translateY(-35px) ${
            isOpen ? "translateX(30px)" : "translateX(0px)"
          } rotate(45deg)`,
        }}
      ></span>

      {/* Horizontal line */}
      <span
        className={`bg-dark transition-all duration-300 ease-out block h-0.25 w-10 rounded-sm ${
          isOpen ? "opacity-100" : "opacity-100"
        }`}
        style={{
          transform: `translateY(-25px) translateX(-10px) ${
            isOpen ? "translateX(30px)" : "translateX(0px)"
          }`,
        }}
      ></span>
    </button>
  );
};
