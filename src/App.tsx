import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import UnderConstruction from "./pages/UnderConstruction";

import { ToastContainer } from "react-toastify";
import FloatingWhatsApp from "./components/global/FloatingWhatsApp";
import ScrollProgress from "./components/global/ScrollProgress";
import { scrollToTop } from "./lib/lenis";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import { default as ServicesPage } from "./pages/Services";

const Home = lazy(() => import("./pages/Home"));

function ScrollReset() {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      scrollToTop("auto");
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // Adjust duration if needed

    return () => clearTimeout(timer);
  }, []);

 

  return (
    <>
      <ScrollProgress />

      <Navbar />
      <ScrollReset />

      <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<UnderConstruction />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/marketing" element={<UnderConstruction />} />
          <Route path="/services/design" element={<UnderConstruction />} />
          <Route path="/services/advertising" element={<UnderConstruction />} />
        </Routes>
      </Suspense>

      <Footer />

      <FloatingWhatsApp />
      <ToastContainer />
    </>
  );
}

export default App;
