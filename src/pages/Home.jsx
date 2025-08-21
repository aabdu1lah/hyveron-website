import React from "react";
import { colors } from "../constants/colors.js";
import { assets } from "../assets/assets.js";

function HomeSection() {
    return (
        <section
            id="home"
            className="relative py-20 text-center bg-gradient-to-b from-blackTone via-darkGrey to-blackTone"
        >
            <h1
                className="text-4xl md:text-6xl font-extrabold font-brand mb-6 tracking-tight"
                style={{ color: colors.whiteTone }}
            >
                Welcome to Hyveron
            </h1>

            {/* Banner */}
            <img
                src={assets.hyveron_slogan_gradient}
                alt="Company Banner"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-10"
            />

            <p
                className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90"
                style={{ color: colors.whiteTone }}
            >
                We deliver automation, apps, and digital solutions that make
                your business smarter and faster.
            </p>

            <div className="mt-10 flex justify-center gap-4">
                <button
                    className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-verdigris/50 transition-all duration-300"
                    style={{
                        color: colors.whiteTone,
                        background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
                    }}
                    onClick={() => alert("Explore Products clicked!")}
                >
                    Explore Our Products
                </button>

                <button
                    className="px-8 py-3 rounded-full text-lg font-semibold border transition-all duration-300"
                    style={{
                        borderColor: colors.verdigris,
                        color: colors.verdigris,
                        backgroundColor: "transparent",
                    }}
                >
                    Contact Us
                </button>
            </div>
        </section>
    );
}

export default HomeSection;
