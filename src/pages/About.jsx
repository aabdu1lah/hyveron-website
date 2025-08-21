import React from "react";
import {colors} from "../constants/colors.js";

function AboutSection() {
    return (
        <section id="about" className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-4x1" style={{ color: colors.whiteTone }}>
                About Hyveron
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <p className="text-ls loading-relaxed" style={{ color: colors.whiteTone }}>
                    Founded in 2025, Hyveron has been a leader in Automation since. We pride ourselves on innovation, quality and unparalleled customer service. Our mission is to empower businesses by simplifying complex operations through innovative automation, intuitive apps, and comprehensive digital solutions.
                </p>
                <p className="text-ls loading-relaxed" style={{ color: colors.whiteTone }}>
                    Our team of dedicated professionals works tirelessly to bring you cutting-edge technologies that meet your evolving needs. We believe in Innovation, Integration and Customer Focus
                </p>
            </div>
            <div>
                <img
                    src="https://placehold.co/600x400/212529/F8F9FA?text=Our+Team"
                    alt="Our Team"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}

export default AboutSection;