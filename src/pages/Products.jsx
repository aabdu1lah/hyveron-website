// src/pages/ProductsSection.jsx
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { colors } from "../constants/colors.js";
import ProductCard from "../components/Cards/ProductCard.jsx";
import SliderArrows from "../components/Cards/SliderArrows.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets.js";

function ProductsSection() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: "product-a",
      name: "bee",
      description: "beeeeeeeeeeeee",
      image: assets.bee,
    },
    {
      id: "product-b",
      name: "person",
      description: "person is a human being, a member of the species",
      image: assets.human,
    },
    {
      id: "product-c",
      name: "Top 10 reasons why speed is a baddie",
      description:
        "The title says it all. Speed is bad, mkay? Don't do speed, kids.",
      image: assets.speed,
    },
    // ...other products (clean versions)
  ];

  const headerMargin = "mb-5";
  const descriptionMargin = "mb-8";
  const buttonMargin = "mt-auto";

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    autoplay: false,
    arrows: false,
    beforeChange: (_, next) => setCurrentIndex(next),
  };

  const handleCardClick = (index) => {
    if (index === currentIndex) return;
    const total = products.length;
    const lastIndex = total - 1;

    if (currentIndex === lastIndex && index === 0) {
      sliderRef.current.slickNext();
    } else if (currentIndex === 0 && index === lastIndex) {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-20">
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-bold font-brand text-center mb-8 sm:mb-12"
        style={{ color: colors.whiteTone }}
      >
        Our Products & Services
      </h2>

      <div className="relative w-full">
        <Slider {...settings} ref={sliderRef}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className="px-4 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <ProductCard
                product={product}
                headerMargin={headerMargin}
                descriptionMargin={descriptionMargin}
                buttonMargin={buttonMargin}
              />
            </div>
          ))}
        </Slider>

        <SliderArrows
          onPrev={() => sliderRef.current.slickPrev()}
          onNext={() => sliderRef.current.slickNext()}
        />
      </div>
    </section>
  );
}

export default ProductsSection;
