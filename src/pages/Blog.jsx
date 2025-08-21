import React from 'react';
import { colors } from '../constants/colors.js';

function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding Product X: A Deep Dive',
            description: 'Learn everything about our flagship Product X, from its features to its benefits and how it can transform your business.',
            youtubeId: 'dQw4w9WgXcQ',
        },
        {
            id: 2,
            title: '5 Tips for Maximizing Efficiency with Our Service',
            description: 'Discover practical strategies and tips to get the most out of our comprehensive service offerings.',
            youtubeId: 'sFhX8Pj-xQ0',
        },
        {
            id: 3,
            title: 'The Future of [Your Industry]: Our Vision',
            description: 'Explore our insights into the upcoming trends and innovations shaping the future of [Your Industry].',
            youtubeId: 'M7lc1UVf-VE',
        },
    ];

    return (
        <section id="blog" className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.whiteTone }}>
                Our Latest Insights & Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: colors.blackTone, border: `1px solid ${colors.verdigris}` }}>
                        <h3 className="text-xl font-semibold mb-2" style={{ color: colors.whiteTone }}>{post.title}</h3>
                        <p className="text-base leading-relaxed mb-4" style={{ color: colors.whiteTone }}>{post.description}</p>
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
                            style={{ backgroundColor: colors.verdigris, color: colors.whiteTone }}
                        >
                            Watch Video on YouTube
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BlogSection;
