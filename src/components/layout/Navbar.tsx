import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../../assets/Krieto-logo-white.png";

const serviceColumns = [
  {
    category: "Advertising",
    href: "/services/advertising",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    items: [
      {
        label: "Creative Advertising & Video Production",
        desc: "AI-powered video, animated ads & premium production.",
        href: "/services/advertising",
      },
    ],
  },

  {
    category: "Design",
    href: "/services/design",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    items: [
      {
        label: "Brand Identity & Design",
        desc: "Visual identity, branding & creative systems.",
        href: "/services/design",
      },
      {
        label: "Web Development & E-Commerce",
        desc: "High-performance websites built to convert.",
        href: "/services/design",
      },
    ],
  },

  {
    category: "Marketing",
    href: "/services/marketing",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    items: [
      {
        label: "Digital Marketing & Content Creation",
        desc: "SEO, campaigns, content & audience growth.",
        href: "/services/marketing",
      },
      {
        label: "Market Presence & Reputation",
        desc: "Build trust through consistent brand visibility.",
        href: "/services/marketing",
      },
      {
        label: "Growth Intelligence & Analytics",
        desc: "Performance insights that drive better decisions.",
        href: "/services/marketing",
      },
    ],
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTriggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        megaTriggerRef.current &&
        !megaTriggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const handleServicesEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMegaOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimerRef.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const handlePanelEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handlePanelLeave = () => {
    closeTimerRef.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-[72px]
          transition-all duration-300 ease-in-out
          ${scrolled
            ? "bg-[#0D1B2A]/95 backdrop-blur-[12px] shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent backdrop-blur-[12px]"}
        `}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between gap-8">
          <Link to="/" className="flex-shrink-0 flex items-center" aria-label="Krieto home">
            <img
              src={logo}
              alt="Krieto"
              className="h-60 w-auto object-contain"
              style={{ maxWidth: "190px" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label} className="relative">
                  <button
                    ref={megaTriggerRef}
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                    onClick={() => setMegaOpen((o) => !o)}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    className={`
                      relative flex items-center gap-1.5
                      font-['Inter'] text-sm font-medium
                      px-4 py-2 rounded-lg
                      transition-colors duration-200
                      ${isActive(link.href)
                        ? "text-[#00B4D8]"
                        : "text-[#F9FAFB]/70 hover:text-[#F9FAFB]"}
                    `}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {isActive(link.href) && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00B4D8]" />
                    )}
                  </button>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`
                    relative
                    font-['Inter'] text-sm font-medium
                    px-4 py-2 rounded-lg
                    transition-colors duration-200
                    ${isActive(link.href)
                      ? "text-[#00B4D8]"
                      : "text-[#F9FAFB]/70 hover:text-[#F9FAFB]"}
                  `}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00B4D8]" />
                  )}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2
                bg-[#00B4D8] hover:bg-[#0077B6]
                text-white font-['Inter'] font-semibold text-sm
                px-6 py-2.5 rounded-full
                transition-all duration-200
                hover:shadow-[0_0_24px_rgba(0,180,216,0.35)]
                hover:-translate-y-px active:translate-y-0
              "
            >
              Get Your Free Audit
              <ArrowRight size={15} />
            </Link>
          </div>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#F9FAFB]/70 hover:text-[#F9FAFB] hover:bg-white/[0.06] transition-colors duration-200"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          ref={megaRef}
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handlePanelLeave}
          className={`
            absolute top-full left-0 right-0
            overflow-hidden
            transition-all duration-[250ms] ease-out
            ${megaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
          aria-hidden={!megaOpen}
        >
          <div className="bg-[#0D1B2A]/90 backdrop-blur-[12px] border-b border-white/[0.06] shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {serviceColumns.map((col, index) => (
                  <div
                    key={col.category}
                    className={`
                      relative
                      ${
                        index !== serviceColumns.length - 1
                          ? "after:absolute after:right-[-16px] after:top-1/2 after:-translate-y-1/2 after:h-[70%] after:w-px after:bg-[#00B4D8]/20"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8]">
                        {col.icon}
                      </div>
                      <span className="font-['JetBrains_Mono'] text-[#00B4D8] text-xs tracking-[0.2em] uppercase">
                        {col.category}
                      </span>
                    </div>

                    <ul className="space-y-1">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="
                              group flex flex-col gap-0.5
                              px-3 py-3 rounded-xl
                              hover:bg-white/[0.04]
                              transition-colors duration-150
                            "
                          >
                            <span className="font-['Inter'] text-sm font-medium text-[#F9FAFB] group-hover:text-[#00B4D8] transition-colors duration-150">
                              {item.label}
                            </span>
                            <span className="font-['Inter'] text-xs text-[#6B7280] leading-relaxed">{item.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={col.href}
                      onClick={() => setMegaOpen(false)}
                      className="
                        inline-flex items-center gap-1.5 mt-4 px-3
                        font-['Inter'] text-xs font-semibold text-[#00B4D8]
                        hover:gap-2.5 transition-all duration-200
                      "
                    >
                      View all {col.category}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <p className="font-['Inter'] text-xs text-[#6B7280]">
                  Not sure where to start?{" "}
                  <Link to="/contact" onClick={() => setMegaOpen(false)} className="text-[#00B4D8] hover:underline">
                    Let's talk.
                  </Link>
                </p>
                <Link
                  to="/services"
                  onClick={() => setMegaOpen(false)}
                  className="
                    inline-flex items-center gap-2
                    font-['Inter'] text-xs font-semibold
                    text-[#F9FAFB]/60 hover:text-[#F9FAFB]
                    transition-colors duration-200
                  "
                >
                  All Services
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm hidden" />

        <div
          className={`
            absolute top-0 right-0 bottom-0 w-[300px]
            bg-[#0D1B2A] border-l border-white/[0.06]
            flex flex-col
            transition-transform duration-300 ease-out
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
            lg:hidden
          `}
        >
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/[0.06] flex-shrink-0">
            <img src={logo} alt="Krieto" className="h-8 w-auto object-contain" style={{ maxWidth: "120px" }} />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#6B7280] hover:text-[#F9FAFB] hover:bg-white/[0.06] transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    className={`
                      w-full flex items-center justify-between
                      px-4 py-3 rounded-xl text-left
                      font-['Inter'] text-sm font-medium
                      transition-colors duration-200
                      ${isActive(link.href)
                        ? "text-[#00B4D8] bg-[#00B4D8]/[0.06]"
                        : "text-[#F9FAFB]/80 hover:text-[#F9FAFB] hover:bg-white/[0.04]"}
                    `}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`
                      overflow-hidden transition-all duration-250
                      ${mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="ml-4 mt-1 space-y-1 border-l border-white/[0.06] pl-4">
                      {serviceColumns.map((col) => (
                        <div key={col.category} className="pt-2">
                          <p className="font-['JetBrains_Mono'] text-[#00B4D8] text-[10px] tracking-[0.2em] uppercase px-2 mb-1">
                            {col.category}
                          </p>
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-2 py-2 font-['Inter'] text-sm text-[#6B7280] hover:text-[#F9FAFB] transition-colors duration-150 rounded-lg hover:bg-white/[0.03]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    block px-4 py-3 rounded-xl
                    font-['Inter'] text-sm font-medium
                    transition-colors duration-200
                    ${isActive(link.href)
                      ? "text-[#00B4D8] bg-[#00B4D8]/[0.06]"
                      : "text-[#F9FAFB]/80 hover:text-[#F9FAFB] hover:bg-white/[0.04]"}
                  `}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="px-4 pb-8 flex-shrink-0 border-t border-white/[0.06] pt-6">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="
                flex items-center justify-center gap-2 w-full
                bg-[#00B4D8] hover:bg-[#0077B6]
                text-white font-['Inter'] font-semibold text-sm
                px-6 py-3.5 rounded-full
                transition-all duration-200
                hover:shadow-[0_0_24px_rgba(0,180,216,0.3)]
              "
            >
              Get Your Free Audit
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="h-[72px]" aria-hidden="true" />
      </header>
    </>
  );
}

