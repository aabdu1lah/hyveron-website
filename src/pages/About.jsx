import React from "react";
import { colors } from "../constants/colors.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function AboutSection() {
    return (
        <section id="about" className="py-12 sm:py-20 bg-gradient-to-b from-darkGrey to-blackTone">
            <FadeInWhenVisible>
                <h2
                    className="text-2xl sm:text-3xl md:text-5xl font-bold font-brand text-center mb-8 sm:mb-12"
                    style={{ color: colors.whiteTone }}
                >
                    About Hyveron
                </h2>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto px-4 sm:px-6">
                <FadeInWhenVisible delay={0.2}>
                    <div>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 opacity-90" style={{ color: colors.whiteTone }}>
                            Founded in 2025, Hyveron has been a leader in automation
                            and innovation. Our mission is to simplify complex
                            operations with intuitive apps and comprehensive digital
                            solutions.
                        </p>
                        <ul className="space-y-2 sm:space-y-3">
                            {["Innovation", "Integration", "Customer Focus"].map((value, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm sm:text-base" style={{ color: colors.verdigrisLight }}>
                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{ backgroundColor: colors.darkGrey }}
                                    ></span>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.4}>
                    <img
                        src="https://placehold.co/400x250/212529/F8F9FA?text=Our+Team"
                        alt="Our Team"
                        className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl w-full"
                    />
                </FadeInWhenVisible>
            </div>
        </section>
    );
}

export default AboutSection;
