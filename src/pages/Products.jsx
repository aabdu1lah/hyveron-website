import React from 'react';
import { colors } from '../constants/colors.js';

function ProductsSection() {
    const products = [
        {
            name: 'Product A',
            description: 'An innovative solution designed to streamline your operations and boost efficiency. Features include [Feature 1], [Feature 2], and [Feature 3].',
            image: 'https://placehold.co/400x300/71ADAC/212529?text=Product+A',
        },
        {
            name: 'Service B',
            description: 'Our comprehensive service offers expert guidance and support in [Area 1], [Area 2], and [Area 3]. Tailored to meet your specific business requirements.',
            image: 'https://placehold.co/400x300/71ADAC/212529?text=Service+B',
        },
        {
            name: 'Product C',
            description: 'The next generation of [Type of Product], featuring enhanced performance and user-friendly interface. Perfect for both beginners and advanced users.',
            image: 'https://placehold.co/400x300/71ADAC/212529?text=Product+C',
        },
    ];

    return (
        <section id="products" className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.whiteTone }}>
                Our Products & Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: colors.blackTone, border: `1px solid ${colors.verdigris}` }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/71ADAC/212529?text=Fallback"; }}
                        />
                        <h3 className="text-xl font-semibold mb-2" style={{ color: colors.whiteTone }}>{product.name}</h3>
                        <p className="text-base leading-relaxed" style={{ color: colors.whiteTone }}>{product.description}</p>
                        <button
                            className="mt-4 px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300"
                            style={{ backgroundColor: colors.verdigris, color: colors.whiteTone }}
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductsSection;
