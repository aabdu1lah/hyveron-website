import React from "react";
import { colors } from "../constants/colors.js";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

function Navbar({ activeSection, setActiveSection }) {
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
                        style={{ color: colors.blackTone }}
                    >
                        Hyveron
                    </span>
                </div>

                {/* Navigation */}
                <ul className="flex space-x-6 text-lg font-medium">
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
            </div>
        </motion.nav>
    );
}

export default Navbar;
