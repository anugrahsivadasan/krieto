import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaX, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.png";


const Footer = () => {
  return (
    <>
      {/* ─────────────────────────────────────────────────────
          FINAL CTA BAND — pre-footer conversion block
          This is separate from the standalone FinalCTA section.
          ───────────────────────────────────────────────────── */}
      {/* <section className="bg-[#0A0A0A] py-[72px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              bg-gradient-to-r from-[#00B4D8] to-[#0077B6]
              px-8 py-16 md:px-16 md:py-20
            "
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.3),transparent_60%)]" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                  Ready to Grow Your Business?
                </h2>
                <p className="font-body text-white/80 text-lg leading-relaxed">
                  Let's discuss your goals and build a marketing strategy
                  that drives measurable results.
                </p>
              </div>

              <Link
                to="/contact"
                className="
                  flex-shrink-0
                  flex items-center gap-2
                  bg-white text-[#0A0A0A]
                  px-8 py-4
                  rounded-full
                  font-semibold text-sm uppercase tracking-widest
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                "
              >
                Get Your Free Audit
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* ─────────────────────────────────────────────────────
          FOOTER
          ───────────────────────────────────────────────────── */}
      <footer className="bg-[#050505] border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-[80px]">

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Column 1 — Brand */}
            <div>
              <Link to="/" className="inline-block mb-6">
                <img src={logo} alt="Krieto" className="  h-10
      md:h-14
      lg:h-16
      w-auto
      object-contain" />
              </Link>

              <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-8">
                Helping businesses scale through advertising, creative design, and marketing.
                 
              </p>

              {/* Socials */}
              <div className="flex gap-3">
                <SocialIcon href="https://www.instagram.com/krieto.co" label="Instagram"><FaInstagram /></SocialIcon>
                <SocialIcon href="https://www.facebook.com/profile.php?id=61591558468476" label="Facebook"><FaFacebookF /></SocialIcon>
                <SocialIcon href="https://linkedin.com/company/krieto" label="LinkedIn"><FaLinkedinIn /></SocialIcon>
                <SocialIcon href="https://x.com/Krieto_co" label="X (Twitter)"><FaX /></SocialIcon>
                <SocialIcon href="https://www.tiktok.com/@krieto.co" label="TikTok"><FaTiktok /></SocialIcon>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li><FooterLink to="/" text="Home" /></li>
                <li><FooterLink to="/about" text="About" /></li>
                <li><FooterLink to="/services" text="Services" /></li>
                <li><FooterLink to="/portfolio" text="Portfolio" /></li>
                <li><FooterLink to="/contact" text="Contact" /></li>
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                <li><FooterLink to="/services/advertising" text="Creative Advertising" /></li>
                <li><FooterLink to="/services/design" text="Platform Advertising" /></li>
                <li><FooterLink to="/services/design" text="Brand Visibility" /></li>
                <li><FooterLink to="/services/marketing" text="Digital Marketing" /></li>
                <li><FooterLink to="/services/marketing" text="Brand Visibility
" /></li>
                <li><FooterLink to="/services/marketing" text="Brand Reputation" /></li>
                
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li><ContactItem icon={<Phone size={16} />} text="+1 (737) 363-4769" /></li>
                <li><ContactItem icon={<Mail size={16} />} text=" contact@krieto.co" /></li>
                <li><ContactItem icon={<MapPin size={16} />} text="Texas, United States" /></li>
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-white/[0.06]">
            <div className="flex flex-wrap gap-3 justify-center">
              {["Results Driven", "Transparent Reporting", "Client Focused", "Performance Marketing"].map((badge) => (
                <TrustBadge key={badge} text={badge} />
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-[#6B7280] text-sm">
              © {new Date().getFullYear()} Krieto LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="font-body text-sm text-[#6B7280] hover:text-[#00B4D8] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-body text-sm text-[#6B7280] hover:text-[#00B4D8] transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// ─── Sub-components ─────────────────────────────────────────────────────────

const FooterLink = ({ to, text }: { to: string; text: string }) => (
  <Link
    to={to}
    className="font-body text-sm text-[#6B7280] hover:text-white transition-colors duration-200"
  >
    {text}
  </Link>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-start gap-3 text-[#6B7280]">
    <span className="text-[#00B4D8] mt-0.5 flex-shrink-0">{icon}</span>
    <span className="font-body text-sm leading-relaxed">{text}</span>
  </div>
);

const SocialIcon = ({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    aria-label={label}
    className="
      w-10 h-10 rounded-full
      bg-white/[0.05] border border-white/10
      flex items-center justify-center
      text-[#6B7280] text-sm
      hover:bg-[#00B4D8] hover:border-[#00B4D8] hover:text-white
      transition-all duration-300
    "
  >
    {children}
  </a>
);

const TrustBadge = ({ text }: { text: string }) => (
  <div className="
    px-4 py-2
    rounded-full
    border border-white/10
    bg-white/[0.03]
    font-body text-xs text-[#6B7280] tracking-wide
  ">
    {text}
  </div>
);

export default Footer;