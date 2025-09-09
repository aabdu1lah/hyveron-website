// src/components/BlogCard.jsx
import React from "react";
import { colors } from "../../constants/colors.js";

function BlogCard({ post }) {
  return (
    <div
      className="flex flex-row relative rounded-4xl shadow-md hover:shadow-2xl transition-all duration-300 border overflow-hidden"
      style={{
        borderColor: colors.whiteTone,
        borderWidth: "0px",
        height: "380px",
      }}
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${post.youtubeId}/hqdefault.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(30px)",
          transform: "scale(1.1)",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground */}
      <div className="relative flex flex-row w-full h-full p-4">
        {/* Left side: Video thumbnail/iframe */}
        <div
          className="relative overflow-hidden rounded-lg"
          style={{
            width: "45%",
            margin: "1%",
            height: "95%",
            zIndex: 1,
          }}
        >
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${post.youtubeId}`}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right side: Text content */}
        <div className="flex flex-col p-10 w-2/3 relative z-10">
          <h3
            className="text-3xl font-bold font-brand line-clamp-2 overflow-hidden mb-6"
            style={{ color: colors.whiteTone }}
          >
            {post.title}
          </h3>

          <p
            className="text-xl leading-relaxed opacity-90 line-clamp-3 overflow-hidden mb-8"
            style={{ color: colors.whiteTone }}
          >
            {post.description}
          </p>

          <a
            href={`/blog/${post.id}`}
            className="mt-auto px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 text-center"
            style={{
              background: `linear-gradient(90deg, ${colors.transparent}, ${colors.transparent})`,
              color: colors.whiteTone,
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
