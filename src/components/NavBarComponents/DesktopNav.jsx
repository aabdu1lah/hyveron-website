// components/DesktopNav.jsx
import React from "react";
import { colors } from "../../constants/colors.js";

export default function DesktopNav({
  navItems,
  activeSection,
  setActiveSection,
}) {
  const getActiveColor = () => {
    // if (activeSection === "about" || activeSection === "contact")
    //   return colors.verdigris;
    return colors.blackTone;
  };

  return (
    <ul className="hidden md:flex space-x-6 text-lg font-medium">
      {navItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => setActiveSection(item.id)}
            className="pb-1 transition-all duration-300"
            style={{
              color:
                activeSection === item.id
                  ? getActiveColor(item.id)
                  : colors.whiteTone,
              borderBottom:
                activeSection === item.id
                  ? `2px solid ${getActiveColor(item.id)}`
                  : "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.blackTone;
              e.target.style.borderBottom = `2px solid ${colors.blackTone}`;
            }}
            onMouseLeave={(e) => {
              e.target.style.color =
                activeSection === item.id
                  ? getActiveColor(item.id)
                  : colors.whiteTone;
              e.target.style.borderBottom =
                activeSection === item.id
                  ? `2px solid ${getActiveColor(item.id)}`
                  : "2px solid transparent";
            }}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
