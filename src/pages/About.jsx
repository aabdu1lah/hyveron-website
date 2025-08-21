import React from "react";
import { colors } from "../constants/colors.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function AboutSection() {
    return (
        <section
            id="about"
            className="py-20"
            style={{
                background: `linear-gradient(to bottom right, ${colors.darkGrey}, ${colors.blackTone})`,
            }}
        >
            <FadeInWhenVisible>
                <h2
                    className="text-3xl md:text-5xl font-bold font-brand text-center mb-12"
                    style={{ color: colors.whiteTone }}
                >
                    About Hyveron
                </h2>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
                <FadeInWhenVisible delay={0.2}>
                    <div>
                        <p className="text-lg leading-relaxed mb-6 opacity-90" style={{ color: colors.whiteTone }}>
                            Founded in 2025, Hyveron has been a leader in automation
                            and innovation. Our mission is to simplify complex
                            operations with intuitive apps and comprehensive digital
                            solutions.
                        </p>
                        <ul className="space-y-3">
                            {["Innovation", "Integration", "Customer Focus"].map((value, i) => (
                                <li key={i} className="flex items-center gap-2 text-whiteTone">
                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{ backgroundColor: colors.verdigris }}
                                    ></span>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.4}>
                    <img
                        src="https://placehold.co/600x400/212529/F8F9FA?text=Our+Team"
                        alt="Our Team"
                        className="rounded-xl shadow-2xl"
                        style={{ border: `2px solid ${colors.verdigris}` }}
                    />
                </FadeInWhenVisible>
            </div>
        </section>
    );
}

export default AboutSection;
