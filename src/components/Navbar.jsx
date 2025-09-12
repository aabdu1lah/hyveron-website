<<<<<<< HEAD
import React, { useState } from "react";
import { colors } from "../constants/colors.js";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

function Navbar({ activeSection, setActiveSection }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About Us" },
        { id: "products", label: "Products" },
        { id: "blog", label: "Blog" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full z-50 shadow-md"
            style={{
                background: `linear-gradient(to right, ${colors.verdigris}, ${colors.verdigrisDark})`,
            }}
        >
            <div className="container mx-auto flex justify-between items-center py-3 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={assets.hyveron_mark_white}
                        alt="Hyveron Logo"
                        className="h-10 w-10 mr-2 rounded-full"
                    />
                    <span
                        className="text-2xl font-bold font-brand tracking-tight"
                        style={{ color: colors.whiteTone }}
                    >
                        Hyveron
                    </span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-lg font-medium">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => setActiveSection(item.id)}
                                className="pb-1 transition-all duration-300"
                                style={{
                                    color:
                                        activeSection === item.id
                                            ? colors.blackTone
                                            : colors.whiteTone,
                                    borderBottom:
                                        activeSection === item.id
                                            ? `2px solid ${colors.blackTone}`
                                            : "2px solid transparent",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = colors.blackTone;
                                    e.target.style.borderBottom = `2px solid ${colors.verdigris}`;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color =
                                        activeSection === item.id
                                            ? colors.blackTone
                                            : colors.whiteTone;
                                    e.target.style.borderBottom =
                                        activeSection === item.id
                                            ? `2px solid ${colors.blackTone}`
                                            : "2px solid transparent";
                                }}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ color: colors.whiteTone }}
                        className="text-2xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {menuOpen && (
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="md:hidden fixed top-0 right-0 w-full h-full shadow-xl  z-40"
                    style={{
                        background: `linear-gradient(to bottom, ${colors.blackTone}, ${colors.darkGrey})`,
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-3 right-3 text-2xl"
                        style={{ color: colors.whiteTone }}
                    >
                        ✕
                    </button>

                    {/* Menu items */}
                    <div className="flex flex-col space-y-3 mt-12 px-6">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    setMenuOpen(false);
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-2 px-4 rounded-md text-base font-medium transition-all text-left"
                                style={{
                                    color:
                                        activeSection === item.id
                                            ? colors.verdigris
                                            : colors.whiteTone,
                                    border: `1px solid ${colors.verdigris}`,
                                }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}

        </motion.nav>
    );
=======
import React, { useState, useEffect } from "react";
import Logo from "./NavBarComponents/Logo.jsx";
import DesktopNav from "./NavBarComponents/DesktopNav.jsx";
import MobileMenu from "./NavBarComponents/MobileMenu.jsx";

function Navbar({ activeSection, setActiveSection, visible = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAboutText, setShowAboutText] = useState(false);
  const [showProductsText, setShowProductsText] = useState(false);
  const [showBlogText, setShowBlogText] = useState(false);
  const [showContactText, setShowContactText] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    setShowAboutText(activeSection === "about");
    setShowProductsText(activeSection === "products");
    setShowBlogText(activeSection === "blog");
    setShowContactText(activeSection === "contact");
  }, [activeSection]);

  return (
    <nav
      className={`fixed top-10 left-0 w-full z-50 bg-transparent transition-all duration-700 ease-out transform-gpu ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <Logo
          showAboutText={showAboutText}
          showProductsText={showProductsText}
          showBlogText={showBlogText}
          showContactText={showContactText}
        />
        <DesktopNav
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          closeMenu={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
>>>>>>> hyveron-website-b1
}

export default Navbar;
