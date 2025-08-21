import React from "react";
import { colors } from "../constants/colors.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function BlogSection() {
    const blogPosts = [
        {
            id: "product-x",
            title: "Understanding Product X: A Deep Dive",
            description: "Everything about our flagship Product X — features, benefits, and how it transforms businesses in the modern world.",
            youtubeId: "dQw4w9WgXcQ",
        },
        {
            id: "efficiency-tips",
            title: "5 Tips for Maximizing Efficiency",
            description: "Practical strategies to optimize your workflow and leverage our services effectively, boosting productivity across the board.",
            youtubeId: "sFhX8Pj-xQ0",
        },
        {
            id: "future-automation",
            title: "The Future of Automation",
            description: "Our insights into upcoming trends, AI-driven innovation, and the impact of digital transformation on the industry.",
            youtubeId: "M7lc1UVf-VE",
        },
    ];

    return (
        <section id="blog" className="py-20 bg-gradient-to-b from-darkGrey to-blackTone">
            <h2 className="text-3xl md:text-5xl font-bold font-brand text-center mb-12" style={{ color: colors.whiteTone }}>
                Our Latest Insights & Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {blogPosts.map((post, i) => (
                    <FadeInWhenVisible key={post.id} delay={i * 0.2}>
                        <div
                            className="p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border flex flex-col min-h-[480px]" // Adjusted min-h slightly for content
                            style={{ backgroundColor: colors.blackTone, borderColor: colors.verdigris }}
                        >
                            {/* Title with fixed height (2 lines for text-xl) */}
                            <h3 className="text-xl font-semibold mb-2 font-brand line-clamp-2 h-14 overflow-hidden" style={{ color: colors.whiteTone }}>
                                {post.title}
                            </h3>
                            {/* Description with fixed height (3 lines for text-base) */}
                            <p className="text-base leading-relaxed mb-4 opacity-90 line-clamp-3 h-20 overflow-hidden" style={{ color: colors.whiteTone }}>
                                {post.description}
                            </p>
                            <div className="aspect-video w-full rounded-md overflow-hidden mb-4 flex-grow"> {/* flex-grow to push button down */}
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${post.youtubeId}`}
                                    title={post.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* Read More button */}
                            <a
                                href={`/blog/${post.id}`}
                                className="mt-auto px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 text-center"
                                style={{
                                    background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
                                    color: colors.whiteTone,
                                }}
                            >
                                Read More
                            </a>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </section>
    );
}

export default BlogSection;
