import React from "react";
import { colors } from "../constants/colors.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function ProductsSection() {
    const products = [
        {
            name: "Product A",
            description:
                "An innovative solution designed to streamline your operations and boost efficiency.",
            image: "https://placehold.co/400x300/71ADAC/212529?text=Product+A",
        },
        {
            name: "Service B",
            description:
                "Our comprehensive service offers expert guidance and tailored business solutions.",
            image: "https://placehold.co/400x300/71ADAC/212529?text=Service+B",
        },
        {
            name: "Product C",
            description:
                "The next generation of smart automation with enhanced performance and usability.",
            image: "https://placehold.co/400x300/71ADAC/212529?text=Product+C",
        },
    ];

    return (
        <section id="products" className="py-20 bg-gradient-to-b from-blackTone via-darkGrey to-blackTone">
            <h2 className="text-3xl md:text-5xl font-bold font-brand text-center mb-12" style={{ color: colors.whiteTone }}>
                Our Products & Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {products.map((product, i) => (
                    <FadeInWhenVisible delay={i * 0.2}>
                        <div
                            key={i}
                            className="p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border hover:scale-105"
                            style={{ backgroundColor: colors.blackTone, borderColor: colors.verdigris }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 font-brand" style={{ color: colors.whiteTone }}>
                                {product.name}
                            </h3>
                            <p className="text-base leading-relaxed opacity-90" style={{ color: colors.whiteTone }}>
                                {product.description}
                            </p>
                            <button
                                className="mt-4 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                                style={{
                                    background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
                                    color: colors.whiteTone,
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </section>
    );
}

export default ProductsSection;
