import React from "react";
import { colors } from "../constants/colors.js";
import { assets } from "../assets/assets.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function HomeSection() {
    return (
        <section
            id="home"
            className="relative py-12 sm:py-20 text-center bg-gradient-to-b from-blackTone via-darkGrey to-blackTone"
        >
            {/* Wrapper with horizontal padding */}
            <div className="px-4 sm:px-6 md:px-8">
                <FadeInWhenVisible>
                    <h1
                        className="text-2xl sm:text-4xl md:text-6xl font-extrabold font-brand mb-4 sm:mb-6 tracking-tight"
                        style={{ color: colors.whiteTone }}
                    >
                        Welcome to Hyveron
                    </h1>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                    <img
                        src={assets.hyveron_slogan_gradient}
                        alt="Company Banner"
                        className="w-full max-w-md sm:max-w-4xl mx-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl mb-6 sm:mb-10"
                    />
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.4}>
                    <p
                        className="text-sm sm:text-base md:text-xl leading-relaxed max-w-md sm:max-w-2xl mx-auto opacity-90"
                        style={{ color: colors.whiteTone }}
                    >
                        We deliver automation, apps, and digital solutions that
                        make your business smarter and faster.
                    </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.6}>
                    <div className="mt-6 sm:mt-10 flex justify-center gap-3 sm:gap-4 flex-wrap">
                        <button
                            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-md sm:shadow-lg hover:scale-105 transition-all duration-300"
                            style={{
                                color: colors.whiteTone,
                                background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
                            }}
                        >
                            Explore Our Products
                        </button>
                        <button
                            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold border hover:scale-105 transition-all duration-300"
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
            </div>
        </section>
    );
}


export default HomeSection;
