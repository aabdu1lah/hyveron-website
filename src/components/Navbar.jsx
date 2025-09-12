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
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-700 ease-out transform-gpu ${
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
}

export default Navbar;
