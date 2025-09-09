// src/components/SliderArrows.jsx
import React from "react";
import { colors } from "../../constants/colors.js";

function SliderArrows({ onPrev, onNext }) {
  return (
    <div className="flex justify-center items-center gap-10 mt-6">
      <button
        onClick={onPrev}
        style={{
          background: colors.transparent,
          color: colors.whiteTone,
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {"<"}
      </button>

      <button
        onClick={onNext}
        style={{
          background: colors.transparent,
          color: colors.whiteTone,
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default SliderArrows;
