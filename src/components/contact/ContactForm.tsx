import { motion } from "framer-motion";
import { BadgeCheck, Handshake, Loader2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// ================= Category options mapped to each Service Interest =================
const CATEGORY_OPTIONS: Record<string, string[]> = {
  Advertising: [
    "AI-Powered Video Ads",
    "Animated Ads",
    "Video Production",
    "Product Photography",
    "AI Avatars",
    "TV Ads",
    "Cinema Ads",
  ],
  Design: [
    "Website Design",
    "Logo Design",
    "Motion Design",
    "E-Com Design",
    "Brochure",
    "Posters",
    "Business Cards",
    "Greeting Cards",
    "Letterheads",
    "Packages",
  ],
  Marketing: [
    "Social Media Marketing",
    "Content Strategy",
    "Campaign Management",
    "Email Marketing",
    "SEO",
    "Growth Analytics",
    "Google Reviews",
    "Yelp Reviews",
    "TripAdvisor Reviews",
    "Trustpilot Reviews",
  ],
};

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Track selected Service Interest so we can render the matching Category list
  const [serviceInterest, setServiceInterest] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxVJlvAWD0zHGOApVfd3wOuj78mCIboIOi0gV5fSll9N8nVWVGTh0I70fUIRh6UlIOG/exec";

  const handleServiceInterestChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setServiceInterest(e.target.value);
    // Reset the category whenever the interest changes so stale values
    // from a different interest can't be submitted.
    setServiceCategory("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      toast.error("Please complete all required fields.");
      return;
    }

    setLoading(true);

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      businessName: formData.get("businessName"),
      industry: formData.get("industry"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      state: formData.get("state"),
      country: formData.get("country"),
      serviceInterest: formData.get("serviceInterest"),
      serviceCategory: formData.get("serviceCategory"),
      message: formData.get("message"),
      referral: formData.get("referral"),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      console.log("Submitted");

      toast.success("Message sent successfully!");

      setSuccess(true);

      form.reset();
      setServiceInterest("");
      setServiceCategory("");
    } catch (error) {
      console.error(error);

      toast.error("Network Error.");
    }

    setLoading(false);
  };

  const availableCategories = serviceInterest
    ? CATEGORY_OPTIONS[serviceInterest] ?? []
    : [];

  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#0A0A0A]
      py-24
      lg:py-32
      "
    >
      {/* ================= Background ================= */}

      <div className="absolute inset-0">
        {/* Soft Top Glow */}

        <div
          className="
          absolute
          inset-x-0
          top-0
          h-[500px]
          bg-[radial-gradient(circle_at_top,rgba(0,180,216,.10),transparent_70%)]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[260px]
          rounded-full
          bg-[#00B4D8]/10
          blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          bg-[size:70px_70px]
          "
        />
      </div>

      <div
        className="
        relative
        z-10
        w-full
        max-w-5xl
        mx-auto
        px-5
        sm:px-8
        lg:px-10
        "
      >
        {/* ================= Heading ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="text-center mb-16"
        >
          <p
            className="
            uppercase
            tracking-[0.35em]
            text-[#00B4D8]
            font-semibold
            text-sm
            mb-5
            "
          >
            Contact Us
          </p>

          <h2
            className="
            font-heading
            font-black
            text-white
            leading-none
            tracking-tight
            text-[clamp(2.4rem,4.5vw,3.6rem)]
            "
          >
            We'd Love To
            <span className="block text-[#00B4D8] mt-2">Hear From You</span>
          </h2>

          <p
            className="
            mt-8
            max-w-2xl
            mx-auto
            text-lg
            leading-8
            text-[#9CA3AF]
            "
          >
            Tell us about your business and goals. We'll respond within one
            business day with honest advice and practical next steps.
          </p>
        </motion.div>

        {/* ================= Form Card ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: EASE,
          }}
        >
          <div
            className="
            rounded-[36px]
            border
            border-white/50
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            lg:p-12
            "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}

              <input
                type="text"
                name="website"
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />

              {/* ================= Contact Details ================= */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Business Name
                  </label>

                  <input
                    type="text"
                    name="businessName"
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Industry *
                  </label>

                  <select
                    name="industry"
                    required
                    defaultValue=""
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  >
                    <option
                      value=""
                      disabled
                      className="text-white bg-[#0A0A0A]"
                    >
                      Select Industry
                    </option>
                    <option className="text-white bg-[#0A0A0A]">
                      Technology
                    </option>
                    <option className="text-white bg-[#0A0A0A]">
                      Healthcare
                    </option>
                    <option className="text-white bg-[#0A0A0A]">Retail</option>
                    <option className="text-white bg-[#0A0A0A]">Finance</option>
                    <option className="text-white bg-[#0A0A0A]">
                      Real Estate
                    </option>
                    <option className="text-white bg-[#0A0A0A]">
                      Education
                    </option>
                    <option className="text-white bg-[#0A0A0A]">
                      Hospitality
                    </option>
                    <option className="text-white bg-[#0A0A0A]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Country *
                  </label>

                  <select
                    name="country"
                    required
                    defaultValue="United States"
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  >
                    <option
                      value="United States"
                      className="text-white bg-[#0A0A0A]"
                    >
                      United States
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Service Interest *
                  </label>

                  <select
                    name="serviceInterest"
                    required
                    value={serviceInterest}
                    onChange={handleServiceInterestChange}
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8]"
                  >
                    <option
                      value=""
                      disabled
                      className="text-white bg-[#0A0A0A]"
                    >
                      Select Service Interest
                    </option>
                    <option className="text-white bg-[#0A0A0A]">
                      Advertising
                    </option>
                    <option className="text-white bg-[#0A0A0A]">
                      Design
                    </option>
                    <option className="text-white bg-[#0A0A0A]">
                      Marketing
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Choose a Category *
                  </label>

                  <select
                    name="serviceCategory"
                    required
                    disabled={!serviceInterest}
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 focus:border-[#00B4D8] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option
                      value=""
                      disabled
                      className="text-white bg-[#0A0A0A]"
                    >
                      {serviceInterest
                        ? "Select Category"
                        : "Select Service Interest First"}
                    </option>
                    {availableCategories.map((category) => (
                      <option
                        key={category}
                        className="text-white bg-[#0A0A0A]"
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ================= Project Details ================= */}

              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  Tell us about your project *
                </label>

                <textarea
                  name="message"
                  required
                  minLength={20}
                  maxLength={1000}
                  rows={6}
                  className="w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 py-4 text-white outline-none resize-none transition-all duration-300 focus:border-[#00B4D8]"
                />
              </div>

              {/* ================= Referral ================= */}

              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  How did you find us?
                </label>

                <select
                  name="referral"
                  defaultValue=""
                  className="h-14 w-full rounded-2xl border border-white/50 bg-white/[0.03] px-5 text-white outline-none transition-colors duration-300 hover:border-[#00B4D8] focus:border-[#00B4D8]"
                >
                  <option value="" className="text-white bg-[#0A0A0A]">
                    Select Option
                  </option>

                  <option className="text-white bg-[#0A0A0A]">
                    Google Search
                  </option>
                  <option className="text-white bg-[#0A0A0A]">
                    Social Media
                  </option>
                  <option className="text-white bg-[#0A0A0A]">Referral</option>
                  <option className="text-white bg-[#0A0A0A]">LinkedIn</option>
                  <option className="text-white bg-[#0A0A0A]">Other</option>
                </select>
              </div>

              {/* ================= Agreement ================= */}

              <label
                className="
                flex
                items-center
                gap-3
                text-sm
                text-[#9CA3AF]
                cursor-pointer
                "
              >
                <input
                  type="checkbox"
                  name="agree"
                  required
                  className="
                  w-4
                  h-4
                  rounded
                  border-white/50
                  bg-white/[0.03]
                  accent-[#00B4D8]
                  "
                />
                I agree to talk about my project with the team
              </label>

              {/* ================= Success ================= */}

              {success ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                  rounded-2xl
                  border
                  border-[#00B4D8]/30
                  bg-[#00B4D8]/10
                  p-8
                  text-center
                  "
                >
                  <h3
                    className="
                    text-2xl
                    font-bold
                    text-white
                    "
                  >
                    Thank You!
                  </h3>

                  <p
                    className="
                    mt-4
                    leading-8
                    text-[#E5E7EB]
                    "
                  >
                    Your message is on its way.
                    <br />
                    We'll be in touch within
                    <span className="text-[#00B4D8] font-semibold">
                      {" "}
                      1 business day.
                    </span>
                  </p>
                </motion.div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="
                  w-full
                  h-16
                  rounded-2xl
                  bg-[#00B4D8]
                  text-black
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  transition-all
                  duration-300
                  hover:brightness-110
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                  flex
                  items-center
                  justify-center
                  gap-3
                  "
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              )}
            </form>
          </div>
        </motion.div>

        {/* ================= Trust Badges ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: EASE,
          }}
          className="
          mt-16
          grid
          sm:grid-cols-3
          gap-8
          text-center
          "
        >
          <div className="flex flex-col items-center gap-4">
            <div
              className="
              w-14
              h-14
              rounded-full
              bg-[#00B4D8]/10
              border
              border-[#00B4D8]/30
              flex
              items-center
              justify-center
              "
            >
              <Handshake className="text-[#00B4D8]" size={24} />
            </div>

            <p className="text-white font-medium">Free Initial Consultation</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div
              className="
              w-14
              h-14
              rounded-full
              bg-[#00B4D8]/10
              border
              border-[#00B4D8]/30
              flex
              items-center
              justify-center
              "
            >
              <ShieldCheck className="text-[#00B4D8]" size={24} />
            </div>

            <p className="text-white font-medium">No Long-term Contracts</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div
              className="
              w-14
              h-14
              rounded-full
              bg-[#00B4D8]/10
              border
              border-[#00B4D8]/30
              flex
              items-center
              justify-center
              "
            >
              <BadgeCheck className="text-[#00B4D8]" size={24} />
            </div>

            <p className="text-white font-medium">
              100% Satisfaction Commitment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;