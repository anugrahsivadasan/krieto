import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  Building2,
  Briefcase,
  Mail,
  Phone,
  Sparkles,
  MessageSquare,
} from "lucide-react";

const EASE: [number, number, number, number] = [
  0.25,
  0.46,
  0.45,
  0.94,
];

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    industry: "",
    email: "",
    phone: "",
    service: "",
    project: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <section
      id="cta"
      className="
      relative
      overflow-hidden
      py-24
      bg-gradient-to-br
      from-[#00B4D8]
      via-[#0094B8]
      to-[#0077B6]
      "
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-white/10 blur-[180px]" />

        <div className="absolute -bottom-60 -right-40 w-[700px] h-[700px] rounded-full bg-[#03045E]/30 blur-[180px]" />

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,.12),transparent_60%)]" />

      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}

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
            duration: .7,
            ease: EASE,
          }}
          className="text-center mb-14"
        >

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            mb-6
            "
          >

            <Sparkles
              size={15}
              className="text-white"
            />

            <span className="text-sm text-white/90 font-medium">
              Let's Build Something Amazing
            </span>

          </div>

          <h2
            className="
            text-white
            font-heading
            font-black
            text-[clamp(2.5rem,5vw,4.5rem)]
            leading-none
            tracking-tight
            "
          >
            Start a Conversation
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-white/80
            text-lg
            leading-8
            "
          >
            Tell us about your business and your goals.
            We'll reach out with ideas tailored specifically
            for your project.
          </p>

        </motion.div>

        {/* Glass Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
            ease: EASE,
          }}
          className="
          relative
          rounded-[36px]
          overflow-hidden
          border
          border-white/15
          bg-black/30
          backdrop-blur-[35px]
          shadow-[0_35px_80px_rgba(0,0,0,.35)]
          "
        >

          {/* Border Glow */}

          <div
            className="
            absolute
            inset-0
            rounded-[36px]
            bg-gradient-to-br
            from-white/15
            via-transparent
            to-cyan-400/10
            p-[1px]
            "
          >

            <div className="h-full w-full rounded-[36px] bg-black/35 backdrop-blur-3xl" />

          </div>

          <form
            onSubmit={handleSubmit}
            className="
            relative
            z-10
            p-8
            md:p-12
            lg:p-14
            space-y-7
            "
          >

            {/* ---------- Row 1 ---------- */}

            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}

              <div>

                <label className="block text-white/80 text-sm mb-3">
                  Name *
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300"
                  />

                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="
                    w-full
                    h-14
                    rounded-2xl
                    pl-14
                    pr-5
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder:text-white/35
                    outline-none
                    transition-all
                    duration-300
                    hover:border-white/20
                    focus:bg-white/10
                    focus:border-cyan-300
                    focus:ring-4
                    focus:ring-cyan-300/15
                    "
                  />

                </div>

              </div>

              {/* Business */}

              <div>

                <label className="block text-white/80 text-sm mb-3">
                  Business Name
                </label>

                <div className="relative">

                  <Building2
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300"
                  />

                  <input
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="
                    w-full
                    h-14
                    rounded-2xl
                    pl-14
                    pr-5
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder:text-white/35
                    outline-none
                    transition-all
                    duration-300
                    hover:border-white/20
                    focus:bg-white/10
                    focus:border-cyan-300
                    focus:ring-4
                    focus:ring-cyan-300/15
                    "
                  />

                </div>

              </div>

            </div>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Industry */}

    <div>
      <label className="block text-sm font-medium text-white/70 mb-3">
        Industry *
      </label>

      <div className="relative">

        <Briefcase
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300"
        />

        <input
          required
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder="Healthcare"
          className="
            w-full
            h-14
            rounded-2xl
            pl-14
            pr-5
            bg-white/5
            border
            border-white/10
            text-white
            placeholder:text-white/35
            outline-none
            transition-all
            duration-300
            hover:border-white/20
            focus:bg-white/10
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-400/15
          "
        />

      </div>
    </div>

    {/* Email */}

    <div>
      <label className="block text-sm font-medium text-white/70 mb-3">
        Email *
      </label>

      <div className="relative">

        <Mail
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300"
        />

        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="hello@company.com"
          className="
            w-full
            h-14
            rounded-2xl
            pl-14
            pr-5
            bg-white/5
            border
            border-white/10
            text-white
            placeholder:text-white/35
            outline-none
            transition-all
            duration-300
            hover:border-white/20
            focus:bg-white/10
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-400/15
          "
        />

      </div>
    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Phone */}

    <div>
      <label className="block text-sm font-medium text-white/70 mb-3">
        Phone
      </label>

      <div className="relative">

        <Phone
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (123) 456-7890"
          className="
            w-full
            h-14
            rounded-2xl
            pl-14
            pr-5
            bg-white/5
            border
            border-white/10
            text-white
            placeholder:text-white/35
            outline-none
            transition-all
            duration-300
            hover:border-white/20
            focus:bg-white/10
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-400/15
          "
        />

      </div>
    </div>

    {/* Service */}

    <div>
      <label className="block text-sm font-medium text-white/70 mb-3">
        Service Interest
      </label>

      <div className="relative">

        <Sparkles
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300 pointer-events-none"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="
            w-full
            h-14
            rounded-2xl
            pl-14
            pr-5
            bg-white/5
            border
            border-white/10
            text-white
            appearance-none
            outline-none
            transition-all
            duration-300
            hover:border-white/20
            focus:bg-white/10
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-400/15
          "
        >
          <option value="">Choose a Category</option>
          <option>Web Development</option>
          <option>Mobile App Development</option>
          <option>UI / UX Design</option>
          <option>Digital Marketing</option>
          <option>SEO</option>
          <option>Brand Identity</option>
          <option>Advertising</option>
          <option>Other</option>
        </select>

      </div>
    </div>

  </div>

  {/* Project */}

  <div>

    <label className="block text-sm font-medium text-white/70 mb-3">
      Tell us about your project
    </label>

    <div className="relative">

      <MessageSquare
        size={18}
        className="absolute left-5 top-5 text-cyan-300"
      />

      <textarea
        rows={6}
        name="project"
        value={formData.project}
        onChange={handleChange}
        placeholder="Tell us about your project..."
        className="
          w-full
          rounded-2xl
          pl-14
          pr-5
          py-5
          bg-white/5
          border
          border-white/10
          text-white
          placeholder:text-white/35
          resize-none
          outline-none
          transition-all
          duration-300
          hover:border-white/20
          focus:bg-white/10
          focus:border-cyan-400
          focus:ring-4
          focus:ring-cyan-400/15
        "
      />

    </div>

  </div>

  <button
    type="submit"
    className="
      w-full
      h-16
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      via-sky-500
      to-cyan-600
      text-white
      font-semibold
      text-lg
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:shadow-[0_20px_60px_rgba(6,182,212,.35)]
      active:scale-[0.98]
      flex
      items-center
      justify-center
      gap-3
    "
  >
    Start Conversation
    <ArrowRight size={20} />
  </button>

</form>

        </motion.div>

        {/* Trust Indicators */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.3,
          }}
          className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          "
        >

          {[
            {
              title: "Fast Response",
              text: "Replies within one business day.",
            },
            {
              title: "Tailored Solutions",
              text: "Every proposal is customized for your business.",
            },
            {
              title: "Long-Term Partnership",
              text: "We focus on relationships, not one-time projects.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              px-7
              py-6
              hover:border-cyan-400/40
              transition-all
              duration-300
              "
            >

              <h4 className="text-white font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-gray-400 leading-7 text-sm">
                {item.text}
              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default FinalCTA;