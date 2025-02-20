import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];
export const features = [
  {
    id: "feature-1",
    icon: star, // Replace with an appropriate icon for "Customized Strategies" if available
    title: "Customized Strategies",
    content:
      "Tailored lead generation strategies designed to meet the specific needs of your business, ensuring optimal growth and expansion.",
  },
  {
    id: "feature-2",
    icon: shield, // Replace with an appropriate icon for "Data Security" if available
    title: "Data Security",
    content:
      "We prioritize the protection of your information, utilizing secure methods to handle all lead data with the utmost confidentiality.",
  },
  {
    id: "feature-3",
    icon: send, // Replace with an appropriate icon for "Industry Expertise" if available
    title: "Industry Expertise",
    content:
      "Our team of experts leverages industry-specific insights and the latest tools to uncover high-quality leads across various sectors.",
  },
  {
    id: "feature-4",
    icon: send, // Replace with an appropriate icon for "Quality Leads" if available
    title: "Quality Leads",
    content:
      "We focus on delivering not just a high quantity of leads, but also the quality and relevance needed to maximize your business success.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Downloads",
    value: "144K",
  },
  {
    id: "stats-2",
    title: "Subscribers",
    value: "12.9K",
  },
  {
    id: "stats-3",
    title: "Users",
    value: "48.3K",
  },
  {
    id: "stats-4",
    title: "Cookies",
    value: "24.5K",
  },
];


export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { name: "Pricing", link: "/pricing" },
      { name: "How to Search", link: "/howtosearch" },
      { name: "Features", link: "/features" },
     
      
    ],
  },
  {
    title: "Community",
    links: [
   
      { name: "Terms & Conditions", link: "/terms" },
      { name: "Privacy Policy", link: "/privacy" },
      { name: "Services", link: "/services" },
      { name: "About Us", link: "/about" },
    ],
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/boomnify",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];