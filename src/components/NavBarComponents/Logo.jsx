// components/Logo.jsx
import React from "react";
import { assets } from "../../assets/assets.js";

export default function Logo({
  showAboutText,
  showProductsText,
  showBlogText,
  showContactText,
}) {
  const texts = [
    "Hyveron",
    "About",
    "Products",
    "Insights",
    "Contact Us",
  ];

  return (
    <div className="flex items-center relative">
      <img
        src={assets.hyveron_mark_white}
        alt="Hyveron Logo"
        className="h-10 w-10 mr-2 rounded-full"
        style={{ transform: "translateY(-5px)" }}
      />
      <div
        className="relative overflow-hidden"
        style={{ width: "200px", height: "40px" }}
      >
        {texts.map((text, index) => {
          let isActive = false;
          if (
            text === "Hyveron" &&
            !showAboutText &&
            !showProductsText &&
            !showBlogText &&
            !showContactText
          )
            isActive = true;
          if (text === "About" && showAboutText) isActive = true;
          if (text === "Products" && showProductsText) isActive = true;
          if (text === "Insights" && showBlogText) isActive = true;
          if (text === "Contact Us" && showContactText) isActive = true;

          return (
            <span
              key={index}
              className="absolute top-0 left-0 transition-all duration-500 ease-in-out font-brand font-bold text-white text-xl whitespace-nowrap"
              style={{
                transform: isActive ? "translateY(0%)" : "translateY(-100%)",
                opacity: isActive ? 1 : 0,
              }}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
