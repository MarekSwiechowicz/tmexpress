"use client";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out"
        >
          {/* Custom SVG for the arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
