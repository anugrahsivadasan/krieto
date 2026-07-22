import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import UnderConstruction from "./pages/UnderConstruction";

import { ToastContainer } from "react-toastify";
import FloatingWhatsApp from "./components/global/FloatingWhatsApp";
import ScrollProgress from "./components/global/ScrollProgress";
import { scrollToTop } from "./lib/lenis";
import Contact from "./pages/Contact";

import AboutPage from "./pages/About";
import { default as ServicesPage } from "./pages/Services";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const MarketingPage = lazy(() => import("./pages/Marketing"));
const AdvertisingPage = lazy(() => import("./pages/Advertising"));
const DesignPage = lazy(() => import("./pages/Design"));
const PortfolioPage = lazy(() => import("./pages/Portfolio"));
const PortfolioCasePage = lazy(() => import("./pages/PortfolioCase"));

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
  return (
    <>
      <ScrollProgress />

      <Navbar />
      <ScrollReset />

      <Suspense
        fallback={
          <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
            <div className="h-12 w-12 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioCasePage />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/services/marketing" element={<MarketingPage />} />
          <Route path="/services/design" element={<DesignPage />} />
          <Route path="/services/advertising" element={<AdvertisingPage />} />
        </Routes>
      </Suspense>

      <Footer />

      <FloatingWhatsApp />
      <ToastContainer />
    </>
  );
}

export default App;
