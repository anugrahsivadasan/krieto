import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";

import ScrollProgress from "./components/global/ScrollProgress";
import FloatingWhatsApp from "./components/global/FloatingWhatsApp";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

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
          element={<UnderConstruction />}
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

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}

export default App;