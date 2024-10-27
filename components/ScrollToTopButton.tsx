"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from "../public/images/arrrowToTop.svg";

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
          className="fixed bottom-10 right-5 lg:right-20 text-black transition-all duration-300 ease-in-out"
        >
          <Image src={Arrow} alt="arow"></Image>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
