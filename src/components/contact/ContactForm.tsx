import { motion } from "framer-motion";
import { BadgeCheck, Handshake, Loader2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)
      ?.value;

    if (honeypot) return;

    if (!form.checkValidity()) {
      form.reportValidity();

      toast.error("Please complete all required fields.");

      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));

      setSuccess(true);

      toast.success("Message sent successfully.");

      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

              {/* ================= Name + Email ================= */}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-white/50
                    bg-white/[0.03]
                    px-5
                    h-14
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#00B4D8]
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-white/50
                    bg-white/[0.03]
                    px-5
                    h-14
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#00B4D8]
                    "
                  />
                </div>
              </div>

              {/* ================= Phone + Enquiry Type ================= */}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-white/50
                    bg-white/[0.03]
                    px-5
                    h-14
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#00B4D8]
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Enquiry Type *
                  </label>

                  <select
                    name="enquiry"
                    required
                    defaultValue=""
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-white/50
                    bg-white/[0.03]
                    px-5
                    h-14
                    text-white
                    outline-none
                    focus:border-[#00B4D8]
                    "
                  >
                    <option value="" disabled>
                      Select Enquiry
                    </option>

                    <option className="text-white bg-[#0A0A0A]">Marketing</option>
                    <option className="text-white bg-[#0A0A0A]">Advertising</option>
                    <option className="text-white bg-[#0A0A0A]">Design</option>
                    <option className="text-white bg-[#0A0A0A]">Full-Service</option>
                    <option className="text-white bg-[#0A0A0A]">Not Sure Yet</option>
                  </select>
                </div>
              </div>

              {/* ================= Message ================= */}

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Message *
                </label>

                <textarea
                  name="message"
                  required
                  minLength={20}
                  maxLength={1000}
                  rows={6}
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-white/50
                  bg-white/[0.03]
                  px-5
                  py-4
                  text-white
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:border-[#00B4D8]
                  "
                />
              </div>

              {/* ================= Referral ================= */}

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  How did you find us?
                </label>

                <select
                  name="referral"
                  defaultValue=""
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-white/50
                  bg-white/[0.03]
                  px-5
                  h-14
                  text-white
                  outline-none
                  transition-colors
                  duration-300
                  hover:border-[#00B4D8]
                  focus:border-[#00B4D8]
                  "
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
