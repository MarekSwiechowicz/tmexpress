"use client";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeOnOutsideClick = (event: MouseEvent) => {
    const modal = document.getElementById("modalId");
    const button = document.getElementById("buttonId");
    if (
      isOpen &&
      modal &&
      button &&
      !modal.contains(event.target as Node) &&
      !button.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [isOpen]);

  const Links = [
    { href: "/", title: "home", className: "mr-4" },
    { href: "/about", title: "about", className: "mx-4" },
  ];

  return (
    <div>
      <div>TMExpress</div>
      <div>O nas</div>
      <div>Usługi</div>
      <div>Partnerzy</div>
      <div>Kontakt</div>
      <div>+48 530 995 026</div>
    </div>
  );
}
