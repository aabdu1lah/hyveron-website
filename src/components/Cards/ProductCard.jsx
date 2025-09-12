// src/components/ProductCard.jsx
import React from "react";
import { colors } from "../../constants/colors.js";

function ProductCard({
  product,
  headerMargin,
  descriptionMargin,
  buttonMargin,
}) {
  return (
    <div
      className="flex flex-row relative rounded-4xl shadow-md hover:shadow-2xl transition-all duration-300 border overflow-hidden"
      style={{
        borderColor: colors.whiteTone,
        borderWidth: "0px",
        height: "600px",
      }}
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${product.image})`,
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
        <img
          src={product.image}
          alt={product.name}
          className="object-cover"
          style={{
            width: "45%",
            margin: "1%",
            borderRadius: "15px",
            height: "97%",
            zIndex: 1,
          }}
        />

        <div className="flex flex-col p-10 w-2/3 relative z-10">
          <h3
            className={`text-3xl font-bold font-brand line-clamp-2 overflow-hidden ${headerMargin}`}
            style={{ color: colors.whiteTone }}
          >
            {product.name}
          </h3>

          <p
            className={`text-xl leading-relaxed opacity-90 line-clamp-3 overflow-hidden ${descriptionMargin}`}
            style={{ color: colors.whiteTone }}
          >
            {product.description}
          </p>

          <a
            href={`/products/${product.id}`}
            className={`${buttonMargin} px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105 text-center`}
            style={{
              background: `linear-gradient(90deg, ${colors.verdigrisLight}, ${colors.verdigrisDark})`,
              color: colors.whiteTone,
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
