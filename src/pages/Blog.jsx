import React from "react";
import { colors } from "../constants/colors.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";

function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            title: "Understanding Product X: A Deep Dive",
            description: "Everything about our flagship Product X and how it transforms businesses.",
            youtubeId: "dQw4w9WgXcQ",
        },
        {
            id: 2,
            title: "5 Tips for Maximizing Efficiency",
            description: "Practical strategies to get the most out of our services.",
            youtubeId: "sFhX8Pj-xQ0",
        },
        {
            id: 3,
            title: "The Future of Automation",
            description: "Our insights into the trends shaping the future of the industry.",
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
                    <FadeInWhenVisible delay={i * 0.2}>
                        <div
                            key={post.id}
                            className="p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border hover:scale-105"
                            style={{ backgroundColor: colors.blackTone, borderColor: colors.verdigris }}
                        >
                            <h3 className="text-xl font-semibold mb-2 font-brand" style={{ color: colors.whiteTone }}>
                                {post.title}
                            </h3>
                            <p className="text-base leading-relaxed mb-4 opacity-90" style={{ color: colors.whiteTone }}>
                                {post.description}
                            </p>
                            <div className="aspect-video w-full rounded-md overflow-hidden mb-4">
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
                                href={`https://www.youtube.com/watch?v=${post.youtubeId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300"
                                style={{
                                    background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
                                    color: colors.whiteTone,
                                }}
                            >
                                Watch on YouTube
                            </a>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </section>
    );
}

export default BlogSection;
