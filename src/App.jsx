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
  const [pageReady, setPageReady] = useState(false); // NEW: controls when rest of app mounts
  const [activeSection, setActiveSection] = useState("home");
  const [zoomStyle, setZoomStyle] = useState({
    transform: "scale(1)",
    transformOrigin: "top",
  });

  const sectionIds = ["home", "about", "products", "blog", "contact"];

  // Delay page mount (except splash background)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageReady(true);
    }, 3000); // delay everything else by 200ms
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!pageReady) return;

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
  }, [pageReady]);

  const handleSplashFinish = () => {
    const start = performance.now();
    const duration = 500; // zoom duration
    const zoomTarget = 8.2;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      const scale = 1 + (zoomTarget - 1) * easedProgress;
      setZoomStyle({
        transform: `scale(${scale})`,
        transformOrigin: "50% 6.8%",
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
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
      {/* Splash Background ALWAYS renders instantly */}
      {showSplash && (
        <div
          className="fixed inset-0 overflow-hidden z-50"
          style={{
            backgroundImage: `url(${assets.hyveronbackgroundsvg})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            ...zoomStyle,
          }}
        >
          {/* SplashScreen mounts AFTER delay */}
          {pageReady && <SplashScreen onFinish={handleSplashFinish} />}
        </div>
      )}

      {/* Navbar */}
      {pageReady && showNavbar && (
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

      {/* Page Sections */}
      {pageReady && showPage && (
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
