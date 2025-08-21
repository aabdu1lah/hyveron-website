import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import HomeSection from "./pages/Home.jsx";
import AboutSection from "./pages/About.jsx";
import ProductsSection from "./pages/Products.jsx";
import BlogSection from "./pages/Blog.jsx";
import ContactSection from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [activeSection, setActiveSection] = useState("home");

    // Track scroll position and update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "products", "blog", "contact"];
            let current = "home";

            for (let id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = id;
                        break;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll when nav item clicked
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-blackTone min-h-screen font-brand">
            {/* Navbar */}
            <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />

            {/* Sections */}
            <main className="pt-20"> {/* padding to offset fixed navbar */}
                <div id="home"><HomeSection /></div>
                <div id="about"><AboutSection /></div>
                <div id="products"><ProductsSection /></div>
                <div id="blog"><BlogSection /></div>
                <div id="contact"><ContactSection /></div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
