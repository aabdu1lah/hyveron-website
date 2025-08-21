import React from "react";
import { colors } from "../constants/colors.js";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="py-8 text-center border-t" style={{ borderColor: colors.verdigris, backgroundColor: colors.blackTone }}>
            <div className="flex justify-center gap-6 mb-4">
                <a href="#" className="text-xl hover:opacity-80" style={{ color: colors.verdigris }}>
                    <FaLinkedin />
                </a>
                <a href="#" className="text-xl hover:opacity-80" style={{ color: colors.verdigris }}>
                    <FaGithub />
                </a>
                <a href="#" className="text-xl hover:opacity-80" style={{ color: colors.verdigris }}>
                    <FaYoutube />
                </a>
            </div>
            <p className="text-sm" style={{ color: colors.whiteTone }}>
                &copy; {new Date().getFullYear()} Hyveron. All rights reserved.
            </p>
            <p className="text-xs mt-1 opacity-70" style={{ color: colors.whiteTone }}>
                Designed with ❤️ and built with React & Tailwind CSS.
            </p>
        </footer>
    );
}

export default Footer;
