/**
 * 404 — NOT FOUND PAGE
 * --------------------------------------------------------------
 * Route setup (in your router, e.g. App.tsx):
 *   <Route path="*" element={<NotFound />} />
 *
 * NAV / FOOTER:
 *   Adjust these two import paths to match whatever your global
 *   Navbar/Footer components are actually called in this project
 *   (they're included here so this page matches every other page).
 * --------------------------------------------------------------
 */


import Aurora from "@/components/global/Aurora";
import { Container } from "@/components/global/Section";
import { motion } from "framer-motion";
import { ArrowRight, Compass, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">

      <main className="relative flex flex-1 items-center overflow-hidden">
        {/* ================= Background — same system as the rest of the site ================= */}
        <div className="pointer-events-none absolute inset-0">
          <Aurora
            colorStops={["#03045E", "#0077B6", "#00B4D8"]}
            blend={0.3}
            amplitude={0.7}
            speed={0.35}
          />
        </div>
        <div className="pointer-events-none absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#00B4D8]/10 blur-[180px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#0077B6]/10 blur-[160px]" />

        <Container className="relative z-10 w-full py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            {/* ================= Copy column ================= */}
            <div className="text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00B4D8]"
              >
                Error 404
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
                className="mt-6 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-black leading-[1.05] tracking-tight text-white"
              >
                This Page Doesn&apos;t Exist —<br className="hidden sm:block" />{" "}
                But Great Marketing{" "}
                <span className="text-[#00B4D8]">Does.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
                className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-400 lg:mx-0"
              >
                You may have followed an old link or mistyped the URL.
                Let&apos;s get you back on track.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Link
                  to="/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00B4D8] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:brightness-110 sm:w-auto"
                >
                  Go Home
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#00B4D8] hover:text-[#00B4D8] sm:w-auto"
                >
                  Our Services
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#00B4D8] hover:text-[#00B4D8] sm:w-auto"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* ================= Abstract illustration — pure CSS/SVG, no image asset ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]"
            >
              <svg
                viewBox="0 0 440 440"
                className="absolute inset-0 h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0077B6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Soft background blob */}
                <motion.path
                  d="M220 60c60 0 120 40 140 100s-10 130-70 160-140 20-180-30-40-130 10-180 40-50 100-50Z"
                  fill="url(#blobGradient)"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "220px 220px" }}
                />

                {/* Outer dashed orbit */}
                <motion.circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke="url(#ringGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="4 10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "220px 220px" }}
                />

                {/* Inner solid ring */}
                <circle
                  cx="220"
                  cy="220"
                  r="120"
                  stroke="#00B4D8"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                />

                {/* Orbiting node on outer ring */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "220px 220px" }}
                >
                  <circle cx="220" cy="50" r="6" fill="#00B4D8" />
                  <circle cx="220" cy="50" r="12" fill="#00B4D8" fillOpacity="0.2" />
                </motion.g>

                {/* Orbiting node on inner ring, opposite direction */}
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "220px 220px" }}
                >
                  <circle cx="340" cy="220" r="4" fill="#90E0EF" />
                  <circle cx="340" cy="220" r="9" fill="#90E0EF" fillOpacity="0.2" />
                </motion.g>

                {/* Scattered static dots for texture */}
                <circle cx="90" cy="130" r="2.5" fill="#00B4D8" fillOpacity="0.5" />
                <circle cx="360" cy="120" r="2" fill="#00B4D8" fillOpacity="0.4" />
                <circle cx="100" cy="330" r="2" fill="#00B4D8" fillOpacity="0.4" />
                <circle cx="330" cy="340" r="2.5" fill="#00B4D8" fillOpacity="0.5" />
              </svg>

              {/* Big 404 wordmark, center-locked */}
              <div className="relative text-center">
                <p className="font-display text-[clamp(4rem,12vw,7.5rem)] font-black leading-none tracking-tight text-white/95">
                  4
                  <span className="bg-gradient-to-b from-[#90E0EF] to-[#00B4D8] bg-clip-text text-transparent">
                    0
                  </span>
                  4
                </p>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  <Compass size={13} className="text-[#00B4D8]" />
                  Lost in the funnel
                </div>
              </div>

              {/* Floating glass chip, matches hero-style floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-2 top-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md sm:-left-6"
              >
                <Sparkles size={14} className="text-[#00B4D8]" />
                <span className="text-xs font-medium text-slate-200">
                  Page not found
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md sm:-right-6"
              >
                <MessageCircle size={14} className="text-[#00B4D8]" />
                <span className="text-xs font-medium text-slate-200">
                  We can help
                </span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </main>

    </div>
  );
};

export default NotFound;