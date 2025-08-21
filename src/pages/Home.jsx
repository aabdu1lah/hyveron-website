import React from "react";
import {colors} from "../constants/colors.js";
import {assets} from "../assets/assets.js";

function HomeSection() {
    return (
        <section id="home" className="py-12 text-center">
            <h1 className="text-4x1 md:text-5x1 font-extrabold mb-6" style={{ color: colors.whiteTone }}>
                Welcome to Hyveron!
            </h1>
            {/*  Banner  */}
            <img
                src={assets.hyveron_slogan_gradient}
                alt="Company Banner"
                className="w-ful g-auto rounded-lg shadow-lg mb-8"
            />
            <p className="text-lg md:text-xl leading-relaxed max-w-3x1 mx-auto" style={{ color: colors.whiteTone }}>
                We are dedicated to providing the best solutions for your needs. Explore our products and services, and check out our latest videos!
            </p>
            <button
                className="mt-8 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duraion-300"
                style={{ color: colors.whiteTone, backgroundColor: colors.verdigris }}
                onClick={() => { /*TODO: implement functionality*/ alert('Explore Products clicked!')}}
            >
                Explore Our Products
            </button>
        </section>
    );
}

export default HomeSection;