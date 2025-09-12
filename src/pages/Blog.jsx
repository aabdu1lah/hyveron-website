// src/pages/BlogSection.jsx
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { colors } from "../constants/colors.js";
import BlogCard from "../components/Cards/BLogCard.jsx";
import SliderControls from "../components/Cards/SliderArrows.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BlogSection() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = [
    {
      id: "product-x",
      title: "Understanding Product X: A Deep Dive",
      description:
        "Everything about our flagship Product X — features, benefits, and how it transforms businesses.",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: "efficiency-tips",
      title: "5 Tips for Maximizing Efficiency",
      description:
        "Practical strategies to optimize your workflow and leverage our services effectively.",
      youtubeId: "sFhX8Pj-xQ0",
    },
    {
      id: "future-automation",
      title: "The Future of Automation",
      description:
        "Our insights into upcoming trends, AI-driven innovation, and the impact of digital transformation.",
      youtubeId: "M7lc1UVf-VE",
    },
    // ... add more posts here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5%",
    arrows: false,
    autoplay: false,
    beforeChange: (_, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { centerPadding: "15%" },
      },
      {
        breakpoint: 768,
        settings: { centerPadding: "5%" },
      },
      {
        breakpoint: 480,
        settings: { centerPadding: "0%" },
      },
    ],
  };

  const goNext = () => sliderRef.current?.slickNext();
  const goPrev = () => sliderRef.current?.slickPrev();

  // --- FIX: copied from ProductsSection ---
  const handleCardClick = (index) => {
    if (index === currentIndex) return;
    const total = blogPosts.length;
    const lastIndex = total - 1;

    if (currentIndex === lastIndex && index === 0) {
      sliderRef.current.slickNext(); // keep forward animation
    } else if (currentIndex === 0 && index === lastIndex) {
      sliderRef.current.slickPrev(); // keep backward animation
    } else {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section
      id="blog"
      className="py-12 sm:py-20 bg-gradient-to-b from-transparent to-transparent min-h-screen flex flex-col items-center justify-center"
    >
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-bold font-brand text-center mb-8 sm:mb-12"
        style={{ color: colors.whiteTone }}
      >
        Our Latest Insights & Videos
      </h2>

      <div
        className="relative w-full max-w-6xl px-4"
        style={{ overflow: "visible" }}
      >
        <Slider {...settings} ref={sliderRef}>
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="px-4 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </Slider>

        <SliderControls onPrev={goPrev} onNext={goNext} />
      </div>
    </section>
  );
}

export default BlogSection;
