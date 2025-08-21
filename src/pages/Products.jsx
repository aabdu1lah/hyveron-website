import React from "react";
import { colors } from "../constants/colors.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function ProductsSection() {
    const products = [
        {
            id: "product-a",
            name: "Product A",
            description: "An innovative solution designed to streamline your operations and boost efficiency. Features include advanced automation, real-time analytics, and seamless integration.",
            image: "https://placehold.co/400x300/71ADAC/212529?text=Product+A",
        },
        {
            id: "service-b",
            name: "Service B",
            description: "Our comprehensive service offers expert guidance and tailored business solutions. From strategy to execution, we help you achieve maximum impact.",
            image: "https://placehold.co/400x300/71ADAC/212529?text=Service+B",
        },
        {
            id: "product-c",
            name: "Product C asdas das das daa asd asasd asd sad a",
            description: "The next generation of smart automation with enhanced performance and usability. Perfect for businesses scaling their operations.",
            image: "https://placehold.co/400x300/71ADAC/212529?text=Product+C",
        },
    ];

    return (
        <section
            id="products"
            className="py-20"
            style={{
                background: `linear-gradient(to bottom, ${colors.blackTone}, ${colors.darkGrey}, ${colors.blackTone})`
            }}
        >
            <h2 className="text-3xl md:text-5xl font-bold font-brand text-center mb-12" style={{ color: colors.whiteTone }}>
                Our Products & Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {products.map((product, i) => (
                    <FadeInWhenVisible key={product.id} delay={i * 0.2}>
                        <div
                            className="p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border flex flex-col min-h-[460px]" // Adjusted min-h slightly for content
                            style={{ backgroundColor: colors.blackTone, borderColor: colors.verdigris }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            {/* Title with fixed height (2 lines for text-xl) */}
                            <h3 className="text-xl font-semibold mb-2 font-brand line-clamp-2 h-14 overflow-hidden" style={{ color: colors.whiteTone }}>
                                {product.name}
                            </h3>
                            {/* Description with fixed height (3 lines for text-base) */}
                            <p className="text-base leading-relaxed opacity-90 line-clamp-3 h-20 overflow-hidden" style={{ color: colors.whiteTone }}>
                                {product.description}
                            </p>
                            {/* Learn More button */}
                            <a
                                href={`/products/${product.id}`}
                                className="mt-auto px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 text-center"
                                style={{
                                    background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
                                    color: colors.whiteTone,
                                }}
                            >
                                Learn More
                            </a>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </section>
    );
}

export default ProductsSection;
