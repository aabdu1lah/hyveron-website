import React from "react";
import {colors} from "../constants/colors.js";

function Footer() {
    return (
        <footer className="p-6 mt-10 text-center" style={{ backgroundColor: colors.blackTone, color: colors.whiteTone }}>
            <p className="text-sm">&copy; {new Date().getFullYear()} Hyveron. All rights reserved.</p>
            <p className="text-xs mt-1">Designed with <span role="img" aria-label="heart">❤️</span> and built with React & Tailwind CSS.</p>
        </footer>
    );
}

export default Footer;