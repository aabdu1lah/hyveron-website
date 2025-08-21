import React from "react";
import { colors } from "../constants/colors.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function BlogSection() {
    const blogPosts = [
        { id: "product-x", title: "Understanding Product X: A Deep Dive", description: "Everything about our flagship Product X — features, benefits, and how it transforms businesses.", youtubeId: "dQw4w9WgXcQ" },
        { id: "efficiency-tips", title: "5 Tips for Maximizing Efficiency", description: "Practical strategies to optimize your workflow and leverage our services effectively.", youtubeId: "sFhX8Pj-xQ0" },
        { id: "future-automation", title: "The Future of Automation", description: "Our insights into upcoming trends, AI-driven innovation, and the impact of digital transformation.", youtubeId: "M7lc1UVf-VE" },
    ];

    return (
        <section id="blog" className="py-12 sm:py-20 bg-gradient-to-b from-darkGrey to-blackTone">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-brand text-center mb-8 sm:mb-12" style={{ color: colors.whiteTone }}>
                Our Latest Insights & Videos
            </h2>

            {/* Mobile: horizontal scroll, Desktop: grid */}
            <div className="flex overflow-x-auto space-x-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-x-0 max-w-6xl mx-auto">
                {blogPosts.map((post, i) => (
                    <FadeInWhenVisible key={post.id} delay={i * 0.2}>
                        <div
                            className="min-w-[260px] sm:min-w-0 flex-shrink-0 sm:flex-shrink p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border flex flex-col h-[400px] sm:h-[480px]"
                            style={{ backgroundColor: colors.blackTone, borderColor: colors.verdigris }}
                        >
                            <h3 className="text-base sm:text-lg font-semibold mb-2 font-brand line-clamp-2 h-10 sm:h-14 overflow-hidden" style={{ color: colors.whiteTone }}>
                                {post.title}
                            </h3>
                            <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 opacity-90 line-clamp-3 h-12 sm:h-20 overflow-hidden" style={{ color: colors.whiteTone }}>
                                {post.description}
                            </p>
                            <div className="aspect-video w-full rounded-md overflow-hidden mb-3 sm:mb-4 flex-grow">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${post.youtubeId}`}
                                    title={post.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <a
                                href={`/blog/${post.id}`}
                                className="mt-auto px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition-all duration-300 text-center"
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
