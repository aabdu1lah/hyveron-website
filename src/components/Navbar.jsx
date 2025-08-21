import React from "react";
import { colors } from "../constants/colors.js";
import { assets } from "../assets/assets.js";

function Navbar({ activeSection, setActiveSection }) {
    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About Us" },
        { id: "products", label: "Products" },
        { id: "blog", label: "Blog" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-verdigris/90 shadow-md"
        >
            <div className="container mx-auto flex justify-between items-center py-3 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={assets.hyveron_mark_white}
                        alt="Hyveron Logo"
                        className="h-10 w-10 mr-2 rounded-full"
                    />
                    <span className="text-2xl font-bold font-brand tracking-tight" style={{ color: colors.blackTone }}>
                        Hyveron
                    </span>
                </div>

                {/* Navigation */}
                <ul className="flex space-x-6 text-lg font-medium">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => setActiveSection(item.id)} // this now scrolls
                                className={`pb-1 transition-colors duration-300 ${
                                    activeSection === item.id
                                        ? "border-b-2 border-blackTone text-blackTone"
                                        : "text-whiteTone hover:text-blackTone"
                                }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
