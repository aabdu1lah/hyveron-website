import React from "react";
import { colors } from "../constants/colors.js";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
<<<<<<< HEAD

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-6 sm:py-8 text-center border-t"
            style={{ borderColor: colors.verdigris, backgroundColor: colors.blackTone }}
        >
            <div className="flex justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                <a href="#" className="text-lg sm:text-xl hover:opacity-80" style={{ color: colors.verdigris }}>
                    <FaLinkedin />
                </a>
                <a href="#" className="text-lg sm:text-xl hover:opacity-80" style={{ color: colors.verdigris }}>
                    <FaGithub />
                </a>
                <a href="#" className="text-lg sm:text-xl hover:opacity-80" style={{ color: colors.verdigris }}>
                    <FaYoutube />
                </a>
            </div>
            <p className="text-xs sm:text-sm" style={{ color: colors.whiteTone }}>
                &copy; {new Date().getFullYear()} Hyveron. All rights reserved.
            </p>
            {/*<p className="text-[10px] sm:text-xs mt-1 opacity-70" style={{ color: colors.whiteTone }}>*/}
            {/*    Designed with ❤️ and built with React & Tailwind CSS.*/}
            {/*</p>*/}
        </motion.footer>
    );
=======
function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.01 }}
      className="py-6 sm:py-8 text-center"
      style={
        {
          // borderColor: colors.whiteTone,
          // backgroundColor: colors.blackTone,
        }
      }
    >
      <div className="flex justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
        <a
          href="#"
          className="text-lg sm:text-xl hover:opacity-80"
          style={{ color: colors.whiteTone }}
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-lg sm:text-xl hover:opacity-80"
          style={{ color: colors.whiteTone }}
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="text-lg sm:text-xl hover:opacity-80"
          style={{ color: colors.whiteTone }}
        >
          <FaYoutube />
        </a>
      </div>
      <p className="text-xs sm:text-sm" style={{ color: colors.whiteTone }}>
        &copy; {new Date().getFullYear()} Hyveron. All rights reserved.
      </p>
      {/*<p className="text-[10px] sm:text-xs mt-1 opacity-70" style={{ color: colors.whiteTone }}>*/}
      {/*    Designed with ❤️ and built with React & Tailwind CSS.*/}
      {/*</p>*/}
    </motion.footer>
  );
>>>>>>> hyveron-website-b1
}

export default Footer;
