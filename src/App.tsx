import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
// import CursorGlow from "./components/global/CursorGlow"
import ScrollProgress from "./components/global/ScrollProgress"
import FloatingWhatsApp from "./components/global/FloatingWhatsApp"

function App() {

  return (
    <>
    {/* <CursorGlow /> */}
  <ScrollProgress />
    <Navbar />
    <div className="pt-[]">
  <Home />
</div>

    <Footer />
    <FloatingWhatsApp/>
    </>
  )
}

export default App
 

