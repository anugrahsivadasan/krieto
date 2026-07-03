import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import UnderConstruction from "./pages/UnderConstruction";

import ScrollProgress from "./components/global/ScrollProgress";
import FloatingWhatsApp from "./components/global/FloatingWhatsApp";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";


// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <Suspense
        fallback={
          <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
            <div className="h-12 w-12 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<UnderConstruction />}
          />

          <Route
            path="/services"
            element={<UnderConstruction />}
          />

          <Route
            path="/portfolio"
            element={<UnderConstruction />}
          />

          <Route
            path="/contact"
            element={<Contact/>}
          />

          <Route
            path="/services/marketing"
            element={<UnderConstruction />}
          />

          <Route
            path="/services/advertising"
            element={<UnderConstruction />}
          />
        </Routes>
      </Suspense>

      <Footer />

      <FloatingWhatsApp />
            <ToastContainer />

    </>
  );
}

export default App;