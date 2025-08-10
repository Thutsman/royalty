export const siteConfig = {
  companyName: "Royal Consulting and Projects",
  tagline: "Engineering Excellence. Building Tomorrow.",
  description:
    "Royal Consulting and Projects is a South African civil engineering company delivering high-quality, cost-effective infrastructure solutions across Gauteng and Mpumalanga.",
  url: "https://www.mkhize.com",
  locale: "en_ZA",
  region: "ZA",
  industry: "Civil Engineering & Construction",
  contact: {
    email: "admin@royaltycp.com",
    phone: "+27 696169207",
    addressLines: ["Gauteng & Mpumalanga", "South Africa"],
    website: "Mkhize.com",
  },
  social: {
    linkedin: "#",
    facebook: "#",
    x: "#",
  },
  colors: {
    primary: "#2563EB",
    primaryLight: "#3B82F6",
    gray: "#1F2937",
    accent: "#EA580C",
    gold: "#F59E0B",
  },
  services: [
    {
      title: "Structural Engineering",
      description:
        "Design and analysis of structural systems for buildings and civil works, ensuring safety, durability, and compliance.",
      icon: "Ruler",
    },
    {
      title: "Road & Bridge Construction",
      description:
        "Delivery of roads, bridges, and related civil infrastructure with robust quality control and traffic management.",
      icon: "Road",
    },
    {
      title: "Water Management",
      description:
        "Potable water reticulation, stormwater systems, and hydraulic design for sustainable communities.",
      icon: "Droplets",
    },
    {
      title: "Project Management",
      description:
        "End-to-end planning, procurement, coordination, and reporting to deliver projects on time and within budget.",
      icon: "Workflow",
    },
    {
      title: "Geotechnical Services",
      description:
        "Ground investigation, soil characterization, and foundation recommendations for risk-informed design.",
      icon: "Layers",
    },
    {
      title: "Civil Engineering Designs",
      description:
        "Certification-ready civil designs across water, roads, and concrete works, aligned to SANS standards.",
      icon: "Building2",
    },
  ],
  projects: [
    {
      title: "Township Water Pipe Reticulation",
      summary: "Potable pipe reticulation upgrade for township development.",
      image: "/projects/service-4.jpg",
    },
    {
      title: "Housing Foundation & Formwork",
      summary: "Concrete works and foundation formwork for new housing units.",
      image: "/projects/service-3.jpg",
    },
    {
      title: "Regional Team Coordination",
      summary:
        "Coordination of subcontracted teams across Gauteng and Mpumalanga.",
      image: "/projects/service-2.jpg",
    },
  ],
  values: [
    "Professional Integrity",
    "Commitment to Excellence",
    "Safety & Sustainability",
    "Innovation",
    "Empowerment & Skills Development",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

