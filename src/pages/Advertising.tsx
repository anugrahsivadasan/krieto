import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import {
    BarChart3,
    Layers,
    Megaphone,
    Monitor,
    Play,
    Target
} from "lucide-react";

const Advertising = () => {
  return (
    <ServicePageTemplate
      title="Advertising That Converts — Not Just Clicks"
      subtitle="Performance-first ad campaigns built to capture demand, test creative, and scale with confidence."
      heroGradient="radial-gradient(circle at top left, rgba(0,180,216,0.18), transparent 30%), radial-gradient(circle at 80% 15%, rgba(144,224,239,0.14), transparent 24%), linear-gradient(180deg, rgba(3,10,23,0.96), rgba(0,0,0,0.92))"
      challenge="Many ad programs optimise for engagement while ignoring actual business outcomes. That wastes budget, floods the funnel with low-quality visitors, and leaves growth stalled."
      solution="Krieto designs advertising as a closed-loop system: strategy, creative, testing, and scaling all tied to target ROI and customer value."
      includedItems={[
        {
          title: "Google Ads",
          description:
            "Search and performance campaigns honed for visibility and conversion efficiency.",
          icon: <Target size={20} />,
        },
        {
          title: "Meta Ads",
          description:
            "Audience-first campaigns that build demand across feeds, stories, and video placements.",
          icon: <Monitor size={20} />,
        },
        {
          title: "LinkedIn Ads",
          description:
            "Professional targeting for B2B and premium audiences with stronger intent.",
          icon: <Layers size={20} />,
        },
        {
          title: "Retargeting",
          description:
            "Creative sequences that re-engage visitors and turn interest into action.",
          icon: <Play size={20} />,
        },
        {
          title: "Paid Strategy",
          description:
            "Media architecture and budget plans that align spend with real business goals.",
          icon: <BarChart3 size={20} />,
        },
        {
          title: "Video Creative",
          description:
            "Ads designed to move fast, land clearly, and perform under real campaign conditions.",
          icon: <Megaphone size={20} />,
        },
      ]}
      approachSteps={[
        {
          title: "Ad Account Audit & Competitive Analysis",
          description:
            "We review your current media, creative, and market context to find the highest opportunity gaps.",
        },
        {
          title: "Campaign Architecture & Creative Brief",
          description:
            "Media structure and messaging built around the audiences, offers, and learning plan.",
        },
        {
          title: "Launch, A/B Testing & Bid Optimization",
          description:
            "Fast experiment cycles with real performance signals that inform every optimisation.",
        },
        {
          title: "Weekly Reporting & Continuous Scale",
          description:
            "Regular readouts and active scaling so campaigns stay efficient as they grow.",
        },
      ]}
      results={[
        {
          metric: "28% lower CPA",
          description:
            "Media programs that reduce cost per acquisition while improving quality.",
        },
        {
          metric: "2.1x ROAS",
          description:
            "Average return on ad spend for campaigns launched with clear performance targets.",
        },
        {
          metric: "Weekly momentum",
          description:
            "Rapid learning cycles that keep the campaign moving and avoid stagnation.",
        },
      ]}
      testimonials={[
        {
          quote:
            "Krieto rebuilt our ad campaigns with a sharp focus on revenue. The quality of leads improved and the numbers finally matched the creative.",
          author: "Samir Patel",
          role: "Marketing Director, Atlas Retail",
        },
        {
          quote:
            "Their attention to testing and creative made the difference. We stopped guessing and started scaling with confidence.",
          author: "Aaliyah Morgan",
          role: "Head of Growth, Ember Studio",
        },
      ]}
      relatedServices={[
        {
          title: "Marketing",
          description:
            "A full demand system to support your media and campaign activity.",
          link: "/services/marketing",
        },
        {
          title: "Design",
          description:
            "Creative direction, landing pages, and ad assets that look premium and convert.",
          link: "/services/design",
        },
        {
          title: "Campaign Strategy",
          description:
            "Planning and positioning to ensure every paid dollar works harder.",
          link: "/services/marketing",
        },
      ]}
      ctaHeadline="Get the advertising clarity and momentum your brand deserves."
      ctaLink="/contact"
      ctaLabel="Get a Free Advertising Audit"
    />
  );
};

export default Advertising;
