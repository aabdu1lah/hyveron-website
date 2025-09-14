import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
function SplashScreen({ onFinish }) {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-bg");
    const timer4 = setTimeout(() => {
      document.body.classList.remove("no-bg");
      document.body.style.backgroundColor = "black";
    }, 2000);
    const timer1 = setTimeout(() => setShowText(true), 700); // show text
    const timer2 = setTimeout(() => setFadeOut(true), 2500); // start fade-out
    const timer3 = setTimeout(() => onFinish(), 3500); // finish splash

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        // backgroundImage:
        //   'url("/src/assets/hyveron_Gradient - background.avif")',
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div
        className={`flex items-center transition-all duration-1000 ease-out ${
          showText ? "-translate-x-12" : ""
        }`}
      >
        <img
          alt="Hyveron Logo"
          className="h-24 w-24 rounded-full"
          src="/src/assets/hyveron_White%20-%20Mark.webp"
        />
        <span
          className={`text-5xl font-bold font-brand tracking-tight ml-4 transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: "rgb(248, 249, 250)" }}
        >
          Hyveron
        </span>
      </div>
    </div>
  );
}

export default SplashScreen;
