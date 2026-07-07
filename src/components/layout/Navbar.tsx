import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  Clapperboard,
  Palette,
  Globe,
  Megaphone,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import logo from "../../assets/Krieto-logo-white.png";

/**
 * Each item now carries its own icon + accent color (instead of only the
 * parent category having an icon). Labels, descriptions and hrefs are
 * untouched — only presentation/data-shape for icons was added.
 */
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
        icon: Clapperboard,
                color: "#8B5CF6",

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
        icon: Palette,
        color: "#F5A623",
      },
      {
        label: "Web Development & E-Commerce",
        desc: "High-performance websites built to convert.",
        href: "/services/design",
        icon: Globe,
        color: "#3B82F6",
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
        icon: Megaphone,
        color: "#00B4D8",
      },
      {
        label: "Market Presence & Reputation",
        desc: "Build trust through consistent brand visibility.",
        href: "/services/marketing",
        icon: ShieldCheck,
        color: "#14B8A6",
      },
      {
        label: "Growth Intelligence & Analytics",
        desc: "Performance insights that drive better decisions.",
        href: "/services/marketing",
        icon: LineChart,
        color: "#F43F5E",
      },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          fixed top-0 left-0 right-0 z-50 h-[80px] 
          transition-all duration-300 ease-in-out pt-2
          ${scrolled
            ? "  "
            : "bg-transparent backdrop-blur-[12px]"}
        `}
      >
        <div
          className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-full flex items-center justify-between gap-8 
            transition-all duration-300 ease-in-out
            ${scrolled ? 'bg-white/[0.04] backdrop-blur-md border border-white/[0.06] rounded-3xl h-[64px] px-6 shadow-[0_8px_30px_rgba(2,6,23,0.45)]' : ''}
          `}
        >
         <Link
  to="/"
  className="flex-shrink-0 flex items-center overflow-visible"
  aria-label="Krieto home"
>
  <img
    src={logo}
    alt="Krieto"
    className="w-auto object-contain scale-105 origin-left"
    style={{
      height: "212px",
      maxWidth: "320px",
    }}
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
              Start A Conversation
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

        {/* ===================================================================
            SERVICES MEGA MENU — premium floating card, solid dark background
            (no transparency/blur), per-item icon badges, and a highlighted
            CTA sidebar. All original text/links are unchanged.
        =================================================================== */}
        <div
          ref={megaRef}
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handlePanelLeave}
          className={`
            absolute top-full left-0 right-0 flex justify-center
            px-4 sm:px-6 lg:px-8 xl:px-10
            transition-all duration-[250ms] ease-out
            ${megaOpen ? " opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none "}
          `}
          aria-hidden={!megaOpen}
        >
          <div
            className={`mt-3 w-full max-w-[1180px] overflow-hidden rounded-[28px] ${scrolled
              ? 'bg-white/[0.04] backdrop-blur-md border border-white/[0.06] shadow-[0_40px_90px_rgba(0,0,0,0.45)]'
              : 'bg-black border border-white/[0.06] shadow-[0_40px_90px_rgba(0,0,0,0.6)]'
            }`}
          >
            {/* subtle top glow so the solid panel still feels premium, not flat */}
            <div
              className="pointer-events-none h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0,180,216,0.6), transparent)",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_260px]">
              {/* ---------- item columns ---------- */}
              {serviceColumns.map((col, index) => (
                <div
                  key={col.category}
                  className={`
                    px-6 py-7
                    ${index !== 0 ? "lg:border-l lg:border-white/[0.06]" : ""}
                  `}
                >
                  <div className="mb-5 flex items-center gap-2.5">
                    <span className="text-[#00B4D8]/70">{col.icon}</span>
                    <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.2em] text-[#5B6B7C] uppercase">
                      {col.category}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {col.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="
                              group flex items-start gap-3
                              rounded-2xl px-3 py-3
                              transition-colors duration-150
                              hover:bg-white/[0.045]
                            "
                          >
                            <span
                              className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                              style={{
                                backgroundColor: `${item.color}1A`,
                                color: item.color,
                              }}
                            >
                              <ItemIcon size={18} strokeWidth={1.75} />
                            </span>

                            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                              <span className="flex items-center gap-1.5">
                                <span className="font-['Inter'] text-sm font-medium text-[#F9FAFB] transition-colors duration-150 group-hover:text-white">
                                  {item.label}
                                </span>
                                <ArrowRight
                                  size={13}
                                  className="flex-shrink-0 text-[#F9FAFB]/40 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                />
                              </span>
                              <span className="font-['Inter'] text-xs leading-relaxed text-[#6B7280]">
                                {item.desc}
                              </span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    to={col.href}
                    onClick={() => setMegaOpen(false)}
                    className="
                      mt-4 inline-flex items-center gap-1.5 px-3
                      font-['Inter'] text-xs font-semibold text-[#00B4D8]
                      hover:gap-2.5 transition-all duration-200
                    "
                  >
                    View all {col.category}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              ))}

              {/* ---------- highlighted CTA sidebar ---------- */}
              <div className="border-t border-white/[0.06] p-6 lg:border-l lg:border-t-0">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#075E7A] p-6">
                  <div
                    className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
                    aria-hidden
                  />

                  <div className="relative">
                    <p className="font-['Inter'] text-base font-semibold leading-snug text-white">
                      Not sure where to start?{" "}
                      <Link
                        to="/contact"
                        onClick={() => setMegaOpen(false)}
                        className="underline decoration-white/40 underline-offset-2 hover:decoration-white"
                      >
                        Let's talk.
                      </Link>
                    </p>
                  </div>

                  <Link
                    to="/services"
                    onClick={() => setMegaOpen(false)}
                    className="
                      relative mt-6 inline-flex w-fit items-center gap-2
                      rounded-full bg-white px-5 py-3
                      font-['Inter'] text-sm font-semibold text-[#075E7A]
                      transition-colors duration-200 hover:bg-white/90
                    "
                  >
                    All Services
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* ===================================================================
          MOBILE MENU — rendered through a portal directly into
          document.body. This guarantees the panel always covers the full
          viewport and always paints on top, regardless of any ancestor
          elsewhere in the app that might have a `transform`, `filter`, or
          `will-change` style (e.g. page-transition wrappers) — any of
          which would otherwise hijack what `position: fixed` measures
          itself against and could make the menu render off-screen or
          collapse to zero height, which is what "no items showing" was.
      =================================================================== */}
      {mounted &&
        createPortal(
          <>
            <div
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
              className={`
                fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm
                transition-opacity duration-300 ease-out
                lg:hidden
                ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
              `}
            />

            <div
              className={`
                fixed top-0 right-0 bottom-0 z-[101] w-[300px] max-w-[85vw]
                bg-white/[0.03] backdrop-blur-md border-l border-white/[0.06]
                flex flex-col
                transition-transform duration-300 ease-out
                ${mobileOpen ? "translate-x-0" : "translate-x-full"}
                lg:hidden
              `}
            >
              <div className="flex items-center justify-between px-4 sm:px-6 h-[72px] border-b border-white/[0.06] flex-shrink-0">
                <img src={logo} alt="Krieto" className="h-20 w-auto object-contain" style={{ maxWidth: "120px" }} />
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
                              {col.items.map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                  <Link
                                    key={item.label}
                                    to={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2.5 px-2 py-2 font-['Inter'] text-sm text-[#6B7280] hover:text-[#F9FAFB] transition-colors duration-150 rounded-lg hover:bg-white/[0.03]"
                                  >
                                    <span
                                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
                                      style={{
                                        backgroundColor: `${item.color}1A`,
                                        color: item.color,
                                      }}
                                    >
                                      <ItemIcon size={14} strokeWidth={1.75} />
                                    </span>
                                    {item.label}
                                  </Link>
                                );
                              })}
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
                  Start A Conversation
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}