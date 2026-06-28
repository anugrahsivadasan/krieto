import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/Krieto-logo-white.png"

import {
  ChevronDown,
  Menu,
  X,
  Megaphone,
  Palette,
  LineChart,
} from "lucide-react";

const services = [
  {
    title: "Marketing",
    description: "SEO, Content, Social Media & Strategy",
    icon: LineChart,
    path: "/services/marketing",
  },
  {
    title: "Advertising",
    description: "Google Ads, Meta Ads & Paid Campaigns",
    icon: Megaphone,
    path: "/services/advertising",
  },
  {
    title: "Design",
    description: "Brand Identity & Creative Design",
    icon: Palette,
    path: "/services/design",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-[#0D1B2A]/95 backdrop-blur-xl shadow-lg"
              : "bg-transparent backdrop-blur-md"
          }
        `}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="h-[72px] flex items-center justify-between">
            {/* LOGO */}

            <Link to="/">
              {/* Add logo manually here */}
 <img
    src={logo}
    alt="Krieto Logo"
    className="
      h-20
      md:h-24
      lg:h-36
      w-auto
      object-contain
    "
  />
            </Link>

            {/* DESKTOP NAV */}

            <nav className="hidden lg:flex items-center gap-10">
              <NavItem to="/about" label="About" />

              {/* SERVICES */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setServicesOpen(true)
                }
                onMouseLeave={() =>
                  setServicesOpen(false)
                }
              >
                <button
                  className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-white
                  hover:text-primary
                  transition
                  "
                >
                  Services
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                      absolute
                      top-10
                      left-1/2
                      -translate-x-1/2
                      w-[900px]
                      rounded-3xl
                      border
                      border-white/10
                      bg-[#0D1B2A]
                      backdrop-blur-xl
                      shadow-2xl
                      p-8
                      "
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {services.map(
                          (service) => {
                            const Icon =
                              service.icon;

                            return (
                              <Link
                                key={
                                  service.title
                                }
                                to={
                                  service.path
                                }
                                className="
                                group
                                rounded-2xl
                                border
                                border-white/5
                                bg-white/[0.03]
                                p-6
                                transition-all
                                duration-300
                                hover:border-primary/40
                                hover:shadow-[0_0_30px_rgba(0,180,216,0.15)]
                                "
                              >
                                <Icon
                                  size={30}
                                  className="
                                  text-primary
                                  mb-4
                                  "
                                />

                                <h3
                                  className="
                                  font-heading
                                  text-lg
                                  font-semibold
                                  mb-2
                                  "
                                >
                                  {
                                    service.title
                                  }
                                </h3>

                                <p
                                  className="
                                  text-sm
                                  text-gray-400
                                  "
                                >
                                  {
                                    service.description
                                  }
                                </p>
                              </Link>
                            );
                          }
                        )}
                      </div>

                      <div
                        className="
                        mt-8
                        border-t
                        border-white/10
                        pt-5
                        text-center
                        "
                      >
                        <Link
                          to="/services"
                          className="
                          text-primary
                          font-medium
                          hover:underline
                          "
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavItem
                to="/portfolio"
                label="Portfolio"
              />

              <NavItem
                to="/contact"
                label="Contact"
              />
            </nav>

            {/* CTA */}

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="
                bg-primary
                px-7
                py-3
                rounded-full
                font-semibold
                text-white
                hover:bg-secondary
                transition-all
                duration-300
                hover:shadow-[0_0_30px_rgba(0,180,216,0.4)]
                "
              >
                Start a Conversation
              </Link>
            </div>

            {/* MOBILE */}

            <button
              onClick={() =>
                setMobileOpen(true)
              }
              className="lg:hidden"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed
            inset-0
            z-[60]
            bg-[#0A0A0A]
            "
          >
            <div className="p-6 flex justify-end">
              <button
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                <X size={32} />
              </button>
            </div>

            <div
              className="
              flex
              flex-col
              items-center
              justify-center
              gap-8
              h-[80vh]
              "
            >
              <MobileLink
                to="/about"
                text="About"
                close={() =>
                  setMobileOpen(false)
                }
              />

              <MobileLink
                to="/services"
                text="Services"
                close={() =>
                  setMobileOpen(false)
                }
              />

              <MobileLink
                to="/portfolio"
                text="Portfolio"
                close={() =>
                  setMobileOpen(false)
                }
              />

              <MobileLink
                to="/contact"
                text="Contact"
                close={() =>
                  setMobileOpen(false)
                }
              />

              <Link
                to="/contact"
                className="
                mt-10
                bg-primary
                px-8
                py-4
                rounded-full
                font-semibold
                "
              >
                Get Your Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function NavItem({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        relative
        text-sm
        font-medium
        transition
        hover:text-primary
        ${
          isActive
            ? "text-primary"
            : "text-white"
        }
      `
      }
    >
      {({ isActive }) => (
        <>
          {label}

          {isActive && (
            <motion.div
              layoutId="nav-indicator"
              className="
              absolute
              left-0
              right-0
              -bottom-2
              h-[2px]
              bg-primary
              "
            />
          )}
        </>
      )}
    </NavLink>
  );
}

function MobileLink({
  to,
  text,
  close,
}: {
  to: string;
  text: string;
  close: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={close}
      className="
      text-4xl
      font-heading
      font-semibold
      hover:text-primary
      transition
      "
    >
      {text}
    </Link>
  );
}

export default Navbar;