import React from "react";
import { colors } from "../constants/colors.js";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.footer
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="py-8 text-center border-t"
            style={{borderColor: colors.verdigris, backgroundColor: colors.blackTone}}
        >
            <div className="flex justify-center gap-6 mb-4">
                <a href="#" className="text-xl hover:opacity-80" style={{color: colors.verdigris}}>
                    <FaLinkedin/>
                </a>
                <a href="#" className="text-xl hover:opacity-80" style={{color: colors.verdigris}}>
                    <FaGithub/>
                </a>
                <a href="#" className="text-xl hover:opacity-80" style={{color: colors.verdigris}}>
                    <FaYoutube/>
                </a>
            </div>
            <p className="text-sm" style={{color: colors.whiteTone}}>
                &copy; {new Date().getFullYear()} Hyveron. All rights reserved.
            </p>
            {/*<p className="text-xs mt-1 opacity-70" style={{color: colors.whiteTone}}>*/}
            {/*    Designed with ❤️ and built with React & Tailwind CSS.*/}
            {/*</p>*/}
        </motion.footer>
    );
}

export default Footer;
