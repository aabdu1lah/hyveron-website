// components/MobileMenu.jsx
import React from "react";
import { colors } from "../../constants/colors.js";

export default function MobileMenu({
  navItems,
  activeSection,
  setActiveSection,
  closeMenu,
}) {
  const getActiveColor = () => {
    if (activeSection === "about" || activeSection === "contact")
      return colors.verdigris;
    return colors.blackTone;
  };

  return (
    <div
      className="md:hidden fixed top-0 right-0 w-full h-full shadow-xl z-40"
      style={{
        background: `linear-gradient(to bottom, ${colors.blackTone}, ${colors.darkGrey})`,
      }}
    >
      <button
        onClick={closeMenu}
        className="absolute top-3 right-3 text-2xl"
        style={{ color: colors.whiteTone }}
      >
        ✕
      </button>

      <div className="flex flex-col space-y-3 mt-12 px-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              closeMenu();
            }}
            className="py-2 px-4 rounded-md text-base font-medium transition-all text-left"
            style={{
              color:
                activeSection === item.id
                  ? getActiveColor(item.id)
                  : colors.whiteTone,
              border: `1px solid ${colors.verdigris}`,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
