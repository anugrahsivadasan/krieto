import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import {
    LayoutGrid,
    Monitor,
    Package,
    Palette,
    PenTool,
    Sparkles
} from "lucide-react";

const Design = () => {
  return (
    <ServicePageTemplate
      title="Design That Makes Your Brand Impossible to Ignore"
      subtitle="Premium brand and product design that creates clarity, trust, and a memorable impression."
      heroGradient="radial-gradient(circle at top right, rgba(144,224,239,0.16), transparent 28%), radial-gradient(circle at 18% 16%, rgba(0,180,216,0.12), transparent 24%), linear-gradient(180deg, rgba(5,13,37,0.93), rgba(0,0,0,0.92))"
      challenge="Weak or inconsistent design undermines credibility and leaves customers confused at the first touch. That makes it harder to turn attention into action."
      solution="Krieto crafts brand systems, websites, and experiences that feel premium, purposeful, and easy to use. Every detail is built to support the message and the conversion path."
      includedItems={[
        {
          title: "Brand Identity",
          description:
            "Visual systems that make your business feel distinct, memorable, and confidently positioned.",
          icon: <Palette size={20} />,
        },
        {
          title: "Logo Design",
          description:
            "A refined symbol and mark system that works across every touchpoint.",
          icon: <PenTool size={20} />,
        },
        {
          title: "Web Design & Development",
          description:
            "Premium website experiences built to support storytelling, trust, and conversion.",
          icon: <Monitor size={20} />,
        },
        {
          title: "Print & Digital Collateral",
          description:
            "Assets for launches, sales, and investor-facing moments that feel polished and purposeful.",
          icon: <LayoutGrid size={20} />,
        },
        {
          title: "Packaging",
          description:
            "Shelf-ready design that elevates product presentation and brand perception.",
          icon: <Package size={20} />,
        },
        {
          title: "Motion Graphics",
          description:
            "Animated brand and campaign content that brings your story to life online.",
          icon: <Sparkles size={20} />,
        },
      ]}
      approachSteps={[
        {
          title: "Brand Discovery & Mood Board",
          description:
            "We uncover the story, audience, and visual direction that will make the work feel distinct.",
        },
        {
          title: "Concept Development & Presentation",
          description:
            "Bold design options paired with strategic rationale for the direction we recommend.",
        },
        {
          title: "Refinement & Brand Guidelines",
          description:
            "We refine the chosen direction and build the systems needed for consistent execution.",
        },
        {
          title: "Asset Delivery & Ongoing Creative Support",
          description:
            "Launch-ready files, guidance, and support so the design can be used confidently across every channel.",
        },
      ]}
      results={[
        {
          metric: "67% higher engagement",
          description:
            "Design systems that keep attention longer and make the experience feel premium.",
        },
        {
          metric: "Stronger recall",
          description:
            "Brands that stand out with clearer visual language and more confident expression.",
        },
        {
          metric: "Launch-ready",
          description:
            "Delivered assets, guidelines, and support that make the creative easy to deploy.",
        },
      ]}
      testimonials={[
        {
          quote:
            "The design work made our brand feel like a leader in the category. It gave our team confidence and our customers a better first impression.",
          author: "Elena Ortiz",
          role: "Founder, Harbor & Co.",
        },
        {
          quote:
            "Krieto helped us turn a good concept into a premium brand system that works everywhere from web to packaging.",
          author: "Tyler Nguyen",
          role: "Creative Director, Verse Labs",
        },
      ]}
      relatedServices={[
        {
          title: "Marketing",
          description:
            "Consistent creative systems for campaigns, social, and launch planning.",
          link: "/services/marketing",
        },
        {
          title: "Advertising",
          description:
            "Creative assets and campaign-ready messaging for paid media that converts.",
          link: "/services/advertising",
        },
        {
          title: "Visual Strategy",
          description:
            "A design direction that keeps customer perception premium and memorable.",
          link: "/services/design",
        },
      ]}
      ctaHeadline="Get a free design audit and make your brand unforgettable."
      ctaLink="/contact"
      ctaLabel="Get a Free Design Audit"
    />
  );
};

export default Design;
