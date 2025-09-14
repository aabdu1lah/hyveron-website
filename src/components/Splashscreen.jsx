import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";

function SplashScreen({ onFinish }) {
  const [logoFadeIn, setLogoFadeIn] = useState(false);
  const [logoSlideIn, setLogoSlideIn] = useState(false);
  const [textFadeIn, setTextFadeIn] = useState(false);
  const [textSlideIn, setTextSlideIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate logo fade-in
    const timerLogoFade = setTimeout(() => setLogoFadeIn(true), 300);

    // Then slide logo
    const timerLogoSlide = setTimeout(() => setLogoSlideIn(true), 1000);

    // Animate text fade-in
    const timerTextFade = setTimeout(() => setTextFadeIn(true), 1200);

    // Then slide text
    const timerTextSlide = setTimeout(() => setTextSlideIn(true), 1600);

    // Apply background
    const timerBg = setTimeout(() => {
      document.body.style.backgroundImage = `url(${assets.hyveronbackgroundsvg})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "top";
    }, 2000);

    // Start fade out
    const timerFadeOut = setTimeout(() => setFadeOut(true), 2800);

    // Finish splash
    const timerFinish = setTimeout(() => onFinish(), 3800);

    return () => {
      clearTimeout(timerLogoFade);
      clearTimeout(timerLogoSlide);
      clearTimeout(timerTextFade);
      clearTimeout(timerTextSlide);
      clearTimeout(timerBg);
      clearTimeout(timerFadeOut);
      clearTimeout(timerFinish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center">
        {/* LOGO */}
        <img
          alt="Hyveron Logo"
          src={assets.hyveronmarkwhite}
          className={`h-24 w-24 rounded-full transition-all duration-700 ease-out
            ${logoFadeIn ? "opacity-100" : "opacity-0"}
            ${logoSlideIn ? "translate-x-0" : "translate-x-20"}
          `}
          style={{
            marginLeft: "0%",
            marginTop: "-40%",
          }}
        />

        {/* TEXT */}
        <span
          className={`ml-4 text-5xl font-bold font-brand tracking-tight transition-all duration-700 ease-out
            ${textFadeIn ? "opacity-100" : "opacity-0"}
           ${textSlideIn ? "-translate-x-5" : "-translate-x-5"}
          `}
          style={{
            color: "rgb(248, 249, 250)",
            marginTop: "-40%",
          }}
        >
          Hyveron
        </span>
      </div>
    </div>
  );
}

export default SplashScreen;
