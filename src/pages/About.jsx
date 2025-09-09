import React from "react";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";
import { assets } from "../assets/assets.js"; // assuming the logo path is in assets

function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-20 bg-gradient-to-b from-transparent to-transparent min-h-screen  items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full text-center">
        <FadeInWhenVisible>
          <img
            src={assets.hyveron_mark_gradient}
            alt="Hyveron Logo"
            className="h-24 w-24 mx-auto mb-6 rounded-full"
            style={{
              mixBlendMode: "screen", // blends the logo with background
              opacity: 0.9, // optional for subtle transparency
            }}
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6"
            style={{
              mixBlendMode: "screen",
              color: "white", // the actual color becomes transparent via blend
              opacity: 0.9,
            }}
          >
            Founded in 2025, Hyveron has been a leader in automation and
            innovation. Our mission is to simplify complex operations with
            intuitive apps and comprehensive digital solutions.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <ul className="space-y-2 sm:space-y-3">
            {["Innovation", "Integration", "Customer Focus"].map((value, i) => (
              <li
                key={i}
                className="flex items-center gap-2 justify-center text-sm sm:text-base"
                style={{
                  mixBlendMode: "screen",
                  color: "white",
                  opacity: 0.8,
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "currentColor" }}
                ></span>
                {value}
              </li>
            ))}
          </ul>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default AboutSection;
