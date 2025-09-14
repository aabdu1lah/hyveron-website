import React, { useEffect, useState } from "react";
import { colors } from "../constants/colors.js";

function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect after component mounts
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-20 text-center"
    >
      <div className="px-4 sm:px-6 md:px-8">
        <h1
          className={`text-2xl sm:text-4xl md:text-6xl font-extrabold font-brand mb-4 sm:mb-6 tracking-tight transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: colors.whiteTone }}
        >
          Hyveron
        </h1>

        <p
          className={`text-sm sm:text-base md:text-xl leading-relaxed max-w-md sm:max-w-2xl mx-auto opacity-90 transition-opacity duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: colors.whiteTone }}
        >
          We deliver automation, apps, and digital solutions that make your
          business smarter and faster.
        </p>

        <div
          className={`mt-6 sm:mt-10 flex justify-center gap-3 sm:gap-4 flex-wrap transition-opacity duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("products")}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-md sm:shadow-lg hover:scale-105 transition-all duration-300"
            style={{
              color: colors.whiteTone,
              background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
            }}
          >
            Explore Our Products
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold border hover:scale-105 transition-all duration-300"
            style={{
              borderColor: colors.whiteTone,
              color: colors.whiteTone,
              backgroundColor: "transparent",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
// File: vite-project2/src/components/Footer.jsx
