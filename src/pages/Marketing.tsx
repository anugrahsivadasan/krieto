import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import {
    ChartPie,
    Clock3,
    Mail,
    Search,
    Share2,
    TrendingUp,
} from "lucide-react";

const Marketing = () => {
  return (
    <ServicePageTemplate
      title="Digital Marketing That Drives Real Revenue"
      subtitle="Integrated marketing systems built to acquire demand, nurture attention, and turn traffic into measurable growth."
      heroGradient="radial-gradient(circle at top right, rgba(0,180,216,0.16), transparent 28%), radial-gradient(circle at 20% 20%, rgba(144,224,239,0.14), transparent 22%), linear-gradient(180deg, rgba(4,12,27,0.95), rgba(0,0,0,0.9))"
      challenge="Most brands chase clicks and impressions without a clear path to revenue. That creates wasted spend, fragmented messaging, and weak customer journeys."
      solution="Krieto builds marketing systems designed around profitable demand. We align channels, content, and campaigns so every touch supports your business objectives."
      includedItems={[
        {
          title: "SEO",
          description:
            "Technical and content optimisation that makes your brand more visible to buyers.",
          icon: <Search size={20} />,
        },
        {
          title: "Content Marketing",
          description:
            "Stories, articles, and social systems that earn attention and pull customers closer.",
          icon: <Share2 size={20} />,
        },
        {
          title: "Email Marketing",
          description:
            "Audience nurturing and reactivation flows that convert interest into action.",
          icon: <Mail size={20} />,
        },
        {
          title: "Social Media Marketing",
          description:
            "Platform-native campaigns with a consistent brand that builds trust.",
          icon: <TrendingUp size={20} />,
        },
        {
          title: "Marketing Strategy",
          description:
            "Go-to-market planning, channel prioritisation, and measurement frameworks.",
          icon: <ChartPie size={20} />,
        },
        {
          title: "Analytics & Reporting",
          description:
            "Performance intelligence that turns monthly reporting into strategic decisions.",
          icon: <Clock3 size={20} />,
        },
      ]}
      approachSteps={[
        {
          title: "Market & Competitor Research",
          description:
            "We map your category, audience, and adjacent opportunities so every channel is selected with intent.",
        },
        {
          title: "Custom Channel Strategy",
          description:
            "A practical plan for the channels, offers, and creative needed to grow your business sustainably.",
        },
        {
          title: "Content & Campaign Execution",
          description:
            "Creative, copy, and media are launched together so every piece of work supports performance.",
        },
        {
          title: "Analytics, Reporting & Ongoing Optimisation",
          description:
            "We measure, learn, and refine so your marketing budget becomes an accelerating growth engine.",
        },
      ]}
      results={[
        {
          metric: "42% increase",
          description:
            "Average lift in qualified traffic from integrated marketing campaigns.",
        },
        {
          metric: "3x ROAS",
          description:
            "More efficient demand performance after aligning ad, email, and content systems.",
        },
        {
          metric: "4–6 weeks",
          description:
            "Time to baseline visibility and the first optimisation cycle for live campaigns.",
        },
      ]}
      testimonials={[
        {
          quote:
            "Working with Krieto turned our marketing from noisy to profitable. Their data-driven approach made a dramatic difference in our pipeline.",
          author: "Mia Carter",
          role: "Chief Growth Officer, Prism Labs",
        },
        {
          quote:
            "We finally stopped guessing which channels worked. Their strategy gave us a clear funnel and measurable momentum.",
          author: "Jordan Lee",
          role: "Founder, Nova Commerce",
        },
      ]}
      relatedServices={[
        {
          title: "Advertising",
          description: "Launch campaigns that turn attention into conversions.",
          link: "/services/advertising",
        },
        {
          title: "Design",
          description:
            "Visual systems for premium landing pages, brand creative, and launch assets.",
          link: "/services/design",
        },
        {
          title: "Brand Strategy",
          description:
            "Clarity-led positioning that makes your messaging easier to buy.",
          link: "/services/design",
        },
      ]}
      ctaHeadline="Book a free marketing audit for your growth engine."
      ctaLink="/contact"
      ctaLabel="Get a Free Marketing Audit"
    />
  );
};

export default Marketing;
