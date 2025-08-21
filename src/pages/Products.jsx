import React from "react";
import { colors } from "../constants/colors.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function ProductsSection() {
    const products = [
        { id: "product-a", name: "Product A", description: "An innovative solution designed to streamline your operations and boost efficiency.", image: "https://placehold.co/400x300/71ADAC/212529?text=Product+A" },
        { id: "service-b", name: "Service B", description: "Our comprehensive service offers expert guidance and tailored business solutions.", image: "https://placehold.co/400x300/71ADAC/212529?text=Service+B" },
        { id: "product-c", name: "Product C", description: "The next generation of smart automation with enhanced performance.", image: "https://placehold.co/400x300/71ADAC/212529?text=Product+C" },
    ];

    return (
        <section id="products" className="py-12 sm:py-20 bg-gradient-to-b from-blackTone via-darkGrey to-blackTone">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-brand text-center mb-8 sm:mb-12" style={{ color: colors.whiteTone }}>
                Our Products & Services
            </h2>
            {/* Mobile: horizontal scroll, Desktop: grid */}
            <div className="flex overflow-x-auto space-x-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-x-0 max-w-6xl mx-auto">
                {products.map((product, i) => (
                    <FadeInWhenVisible key={product.id} delay={i * 0.2}>
                        <div
                            className="min-w-[250px] sm:min-w-0 flex-shrink-0 sm:flex-shrink p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border flex flex-col h-[360px] sm:h-[420px]"
                            style={{ backgroundColor: colors.blackTone, borderColor: colors.verdigris }}
                        >
                            <img src={product.image} alt={product.name} className="w-full h-32 sm:h-48 object-cover rounded-md mb-3 sm:mb-4" />
                            <h3 className="text-base sm:text-lg font-semibold mb-2 font-brand line-clamp-2 h-10 sm:h-14 overflow-hidden" style={{ color: colors.whiteTone }}>
                                {product.name}
                            </h3>
                            <p className="text-xs sm:text-sm leading-relaxed opacity-90 line-clamp-3 h-14 sm:h-20 overflow-hidden" style={{ color: colors.whiteTone }}>
                                {product.description}
                            </p>
                            <a
                                href={`/products/${product.id}`}
                                className="mt-auto px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 text-center"
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
