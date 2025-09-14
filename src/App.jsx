import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import SplashScreen from "./components/Splashscreen.jsx";
import HomeSection from "./pages/Home.jsx";
import AboutSection from "./pages/About.jsx";
import ProductsSection from "./pages/Products.jsx";
import BlogSection from "./pages/Blog.jsx";
import ContactSection from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { assets } from "./assets/assets.js";
function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [zoomStyle, setZoomStyle] = useState({
    transform: "scale(1)",
    transformOrigin: "top left",
  });

  const sectionIds = ["home", "about", "products", "blog", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "home";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSplashFinish = () => {
    const start = performance.now();
    const duration = 500; // 1 second zoom
    const zoomTarget = 8.2; // 8x zoom

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      const scale = 1 + (zoomTarget - 1) * easedProgress;
      setZoomStyle({
        transform: `scale(${scale})`,
        transformOrigin: "top",
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        //animation finished, wait 3 seconds before showing page
        setTimeout(() => {
          setShowSplash(false);
          setShowPage(true);
          setShowNavbar(true);
          requestAnimationFrame(() => setNavVisible(true));
        }, 200);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navbar */}
      {showNavbar && (
        <Navbar
          activeSection={activeSection}
          setActiveSection={(id) => {
            setActiveSection(id);
            const section = document.getElementById(id);
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          visible={navVisible}
        />
      )}

      {/* Splash Screen with zoom */}
      {showSplash && (
        <div
          className="fixed inset-0 overflow-hidden z-50"
          style={{
            backgroundImage: `url(${assets.hyverongradientbackground})`,
            backgroundSize: "cover",
            backgroundPosition: "top left",
            ...zoomStyle,
          }}
        >
          <SplashScreen onFinish={handleSplashFinish} />
        </div>
      )}

      {/* Page Sections */}
      {showPage && (
        <>
          <section id="home" className="min-h-screen">
            <HomeSection />
          </section>

          <section id="about" className="min-h-screen">
            <AboutSection />
          </section>

          <section id="products" className="min-h-screen">
            <ProductsSection />
          </section>

          <section
            id="blog"
            className="min-h-screen flex items-center justify-center py-12"
          >
            <BlogSection />
          </section>

          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
