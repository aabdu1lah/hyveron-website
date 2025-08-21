import React from "react";
import { colors } from "../constants/colors.js";
import { assets } from "../assets/assets.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function HomeSection() {
    return (
        <section
            id="home"
            className="relative py-20 text-center"
            style={{
                background: `linear-gradient(to bottom, ${colors.blackTone}, ${colors.darkGrey}, ${colors.blackTone})`
            }}
        >
            <FadeInWhenVisible>
                <h1
                    className="text-4xl md:text-6xl font-extrabold font-brand mb-6 tracking-tight"
                    style={{ color: colors.whiteTone }}
                >
                    Welcome to Hyveron
                </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
                <img
                    src={assets.hyveron_slogan_gradient}
                    alt="Company Banner"
                    className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-10"
                />
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
                <p
                    className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90"
                    style={{ color: colors.whiteTone }}
                >
                    We deliver automation, apps, and digital solutions that make
                    your business smarter and faster.
                </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.6}>
                <div className="mt-10 flex justify-center gap-4">
                    <button
                        className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                        style={{
                            color: colors.whiteTone,
                            background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
                        }}
                    >
                        Explore Our Products
                    </button>
                    <button
                        className="px-8 py-3 rounded-full text-lg font-semibold border hover:scale-105 hover:bg-opacity-10 transition-all duration-300"
                        style={{
                            borderColor: colors.verdigris,
                            color: colors.verdigris,
                            backgroundColor: "transparent",
                        }}
                    >
                        Contact Us
                    </button>
                </div>
            </FadeInWhenVisible>
        </section>
    );
}

export default HomeSection;
