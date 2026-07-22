import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import UnderConstruction from "./pages/UnderConstruction";

import { ToastContainer } from "react-toastify";
import FloatingWhatsApp from "./components/global/FloatingWhatsApp";
import ScrollProgress from "./components/global/ScrollProgress";
import { scrollToTop } from "./lib/lenis";
import Contact from "./pages/Contact";
import LoaderOverlay from "./components/loader/LoaderOverlay";
import krietoLogo from "./assets/OnlyK.png";

import AboutPage from "./pages/About";
import { default as Services, default as ServicesPage } from "./pages/Services";

// Lazy-loaded pages
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
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <LoaderOverlay logoSrc={krietoLogo} logoAlt="Krieto" onComplete={() => setLoaderDone(true)}>
      <div
        style={{
          opacity: loaderDone ? 1 : 0,
          transition: "opacity 0.6s ease-out",
        }}
      >
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

            {/* <Route path="/services" element={<ServicesPage />} /> */}

            <Route path="/portfolio" element={<UnderConstruction />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/services/marketing" element={<Services />} />
            <Route path="/services/design" element={<Services />} />
            <Route path="/services/advertising" element={<Services />} />
          </Routes>
        </Suspense>

        <Footer />

        <FloatingWhatsApp />
        <ToastContainer />
      </div>
    </LoaderOverlay>
  );
}

export default App;
