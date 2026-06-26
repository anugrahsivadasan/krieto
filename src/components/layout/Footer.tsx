import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* CTA SECTION */}

      <section className="relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div
            className="
            relative
            rounded-[32px]
            bg-gradient-to-r
            from-primary
            to-secondary
            p-8
            md:p-12
            lg:p-16
            "
          >
            <div
              className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-8
              "
            >
              <div>
                <h2
                  className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-white
                  mb-4
                  "
                >
                  Ready to Grow Your Business?
                </h2>

                <p
                  className="
                  text-white/80
                  max-w-2xl
                  "
                >
                  Let's discuss your goals and
                  build a marketing strategy that
                  drives measurable results.
                </p>
              </div>

              <Link
                to="/contact"
                className="
                flex
                items-center
                gap-2
                bg-white
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                transition
                hover:scale-105
                "
              >
                Get Your Free Audit
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="
        bg-[#050505]
        border-t
        border-white/10
        mt-24
        "
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-12
            "
          >
            {/* COLUMN 1 */}

            <div>
              {/* ADD YOUR LOGO HERE */}

              <div className="mb-6">
                <h3 className="text-3xl font-bold">
                  Krieto
                </h3>
              </div>

              <p
                className="
                text-gray-400
                leading-relaxed
                "
              >
                Helping businesses scale through
                data-driven marketing, strategic
                advertising, and creative design.
              </p>

              {/* SOCIALS */}

              <div className="flex gap-4 mt-8">
                <SocialIcon>
                  <FaFacebookF />
                </SocialIcon>

                <SocialIcon>
                  <FaInstagram />
                </SocialIcon>

                <SocialIcon>
                  <FaLinkedinIn />
                </SocialIcon>

                <SocialIcon>
                  <FaXTwitter />
                </SocialIcon>
              </div>
            </div>

            {/* COLUMN 2 */}

            <div>
              <h4
                className="
                text-lg
                font-semibold
                mb-6
                "
              >
                Quick Links
              </h4>

              <FooterLink
                to="/"
                text="Home"
              />

              <FooterLink
                to="/about"
                text="About"
              />

              <FooterLink
                to="/services"
                text="Services"
              />

              <FooterLink
                to="/portfolio"
                text="Portfolio"
              />

              <FooterLink
                to="/contact"
                text="Contact"
              />
            </div>

            {/* COLUMN 3 */}

            <div>
              <h4
                className="
                text-lg
                font-semibold
                mb-6
                "
              >
                Services
              </h4>

              <FooterLink
                to="/services/marketing"
                text="Marketing"
              />

              <FooterLink
                to="/services/advertising"
                text="Advertising"
              />

              <FooterLink
                to="/services/design"
                text="Design"
              />
            </div>

            {/* COLUMN 4 */}

            <div>
              <h4
                className="
                text-lg
                font-semibold
                mb-6
                "
              >
                Contact
              </h4>

              <div className="space-y-5">
                <ContactItem
                  icon={<Phone size={18} />}
                  text="+1 (000) 000-0000"
                />

                <ContactItem
                  icon={<Mail size={18} />}
                  text="hello@krieto.com"
                />

                <ContactItem
                  icon={<MapPin size={18} />}
                  text="Texas, United States"
                />
              </div>
            </div>
          </div>

          {/* TRUST BADGES */}

          <div
            className="
            mt-16
            pt-10
            border-t
            border-white/10
            "
          >
            <div
              className="
              flex
              flex-wrap
              gap-4
              justify-center
              "
            >
              <TrustBadge text="Results Driven" />
              <TrustBadge text="Transparent Reporting" />
              <TrustBadge text="Client Focused" />
              <TrustBadge text="Performance Marketing" />
            </div>
          </div>

          {/* COPYRIGHT */}

          <div
            className="
            mt-10
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            "
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Krieto
              Advertising & Marketing.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-primary"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-gray-500 hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const FooterLink = ({
  to,
  text,
}: {
  to: string;
  text: string;
}) => (
  <Link
    to={to}
    className="
    block
    mb-4
    text-gray-400
    hover:text-primary
    transition
    "
  >
    {text}
  </Link>
);

const ContactItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex gap-3 text-gray-400">
    <span className="text-primary">
      {icon}
    </span>
    {text}
  </div>
);

const SocialIcon = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <button
    className="
    w-11
    h-11
    rounded-full
    bg-white/5
    border
    border-white/10
    flex
    items-center
    justify-center
    text-white
    hover:bg-primary
    hover:border-primary
    transition
    "
  >
    {children}
  </button>
);

const TrustBadge = ({
  text,
}: {
  text: string;
}) => (
  <div
    className="
    px-5
    py-3
    rounded-full
    border
    border-white/10
    bg-white/[0.03]
    text-sm
    text-gray-300
    "
  >
    {text}
  </div>
);

export default Footer;