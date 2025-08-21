import React, { useState } from 'react'
import { colors } from "./constants/colors.js";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import HomeSection from "./pages/Home.jsx";
import AboutSection from "./pages/About.jsx";
import ProductsSection from "./pages/Products.jsx";
import BlogSection from "./pages/Blog.jsx";
import ContactSection from "./pages/Contact.jsx";

function App() {
    const [activeSection, setActiveSection] = useState('home');

    // Helper function to render sections based on active section state
    const renderSection = () => {
        switch (activeSection) {
            case 'home':
                return <HomeSection />
            case 'about':
                return <AboutSection />
            case 'products':
                return <ProductsSection />
            case 'blog':
                return <BlogSection />
            case 'contact':
                return <ContactSection />
            default:
                return <HomeSection />
        }
    }

    return (
        <div className="min-h-screen font-inter" style={{ backgroundColor: colors.blackTone, color: colors.whiteTone }}>
            {/*  Navbar  */}
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

            {/*  Main Content  */}
            <main className="container p-6 md:p-8 mx-auto">
                {renderSection()}
            </main>

            {/*  Footer  */}
            <Footer />
        </div>
    );
}

export default App