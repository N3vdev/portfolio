export const ROLES = ["Data Visualization", "Frontend Development", "UI/UX Designs", "Browser Extensions"];

export const PROJECTS = [

  {
    id: 1,
    title: "Talentis Recruitment Platform",
    image: "Talentis.png",
    category: "Website",
    year: "2026",
    description: "A high-conversion recruitment agency website built with a strong focus on visual hierarchy, trust signals, and seamless user flow. Features a full-screen modular layout, animated section reveals, interactive hiring funnel, and a fully functional lead capture modal with validation. Designed to simulate a premium hiring experience with clear process communication, service segmentation, and client testimonials.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX", "Landing Page"],
    color: "#22C55E",
    accent: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.2)",
    link: "https://n3vdev.github.io/Talentis/",
    num: "01"
  },

  {
    id: 2,
    title: "TruckVault Landing Page",
    image: "Truckvault.png",
    category: "Website",
    year: "2025",
    description: "Optimised landing page for a Pan-India freight logistics platform. Clean hero with live tracking UI, trust signals, responsive stats grid, and smooth scroll interactions.",
    tags: ["React", "Tailwind CSS", "Landing Page"],
    color: "#00C9A7",
    accent: "rgba(0,201,167,0.12)",
    border: "rgba(0,201,167,0.2)",
    link: "https://n3vdev.github.io/truckvault/",
    num: "02"
  },

  {
    id: 3,
    title: "Infinite Drive",
    image: "game.png",
    category: "Website",
    year: "2026",
    description: "An infinite driving experience set in a minimal, atmospheric environment with calming music. Features smooth animations, immersive visuals, and a distraction-free UI focused on relaxation and flow.",
    tags: ["Three.js", "WebGL", "Game UI"],
    color: "#0EA5E9",
    accent: "rgba(14,165,233,0.12)",
    border: "rgba(14,165,233,0.2)",
    link: "https://n3vdev.github.io/infinite-drive/",
    num: "03"
  },

  {
    id: 4,
    title: "Recruitment Dashboard",
    image: "Figma Dashboard.png",
    category: "Figma",
    year: "2024",
    description: "A comprehensive recruitment analytics dashboard for HR teams. Features real-time candidate tracking, application trend analysis, and offer pipeline management — all in one view.",
    tags: ["Figma", "Data Viz", "HR Analytics"],
    color: "#A855F7",
    accent: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.2)",
    num: "04"
  },

  {
    id: 5,
    title: "Keyword Highlighter",
    image: "KH.png",
    category: "Chrome Extension",
    year: "2024",
    description: "A browser extension that highlights configurable keyword groups across any webpage in real-time. Toggle groups on/off, import/export settings, works instantly with Manifest V3.",
    tags: ["Chrome Extension", "JavaScript", "Manifest V3"],
    color: "#E85D7A",
    accent: "rgba(232,93,122,0.12)",
    border: "rgba(232,93,122,0.2)",
    link: "https://chromewebstore.google.com/detail/multi-keyword-highlighter/onnipamlflmhobjelheonbddcbmgfnco",
    num: "05"
  },

  {
    id: 6,
    title: "Sales Overview Dashboard",
    image: "PBI.jpg",
    category: "Power BI",
    year: "2024",
    description: "A full-featured sales analytics solution tracking revenue trends, product performance, return rates, and regional insights — built on a dark, high-contrast theme for executive clarity.",
    tags: ["Power BI", "DAX", "Sales Analytics"],
    color: "#4F8EF7",
    accent: "rgba(79,142,247,0.12)",
    border: "rgba(79,142,247,0.2)",
    link: "#",
    num: "06"
  },

  {
    id: 7,
    title: "Button Dodger",
    image: "getrekt.png",
    category: "Chrome Extension",
    year: "2025",
    description: "A playful browser extension that makes buttons dodge your cursor, turning simple clicks into a hilarious challenge. Perfect for pranking friends and adding chaos to everyday browsing.",
    tags: ["JavaScript", "Chrome Extension", "UI Manipulation"],
    color: "#F97316",
    accent: "rgba(249,115,22,0.12)",
    border: "rgba(249,115,22,0.2)",
    link: "https://chromewebstore.google.com/detail/get-rekt/fghnhikhkjncimoiipnbpbjcbkpalljg",
    num: "07"
  }

];


export const SERVICES = [
  { number: "01", title: "Data Visualization", description: "Power BI & Looker Studio dashboards built for real decisions. KPI tracking, drill-through reports, executive summaries.", tags: ["Power BI", "Looker Studio", "DAX", "SQL"], accent: "#4F8EF7" },
  { number: "02", title: "Frontend Developer", description: "Fast, accessible React applications with pixel-perfect fidelity. Clean architecture, smooth animations, any design.", tags: ["React", "TypeScript", "Tailwind", "Vite"], accent: "#A855F7" },
  { number: "03", title: "UI / UX Designer", description: "Wireframe to high-fidelity prototype in Figma. Research-informed decisions, cohesive design systems.", tags: ["Figma", "Prototyping", "Design Systems"], accent: "#E885D4" },
  { number: "04", title: "Browser Extensions", description: "Custom Chrome extensions that supercharge productivity. Manifest V3, clean popup UIs, background scripts.", tags: ["JavaScript", "Chrome API", "Manifest V3"], accent: "#E85D7A" },
];

export const CAT_COLORS = {
  "Power BI":        { bg: "rgba(79,142,247,0.1)",  border: "rgba(79,142,247,0.22)",  text: "#4F8EF7"  },
  "Chrome Extension":{ bg: "rgba(232,93,122,0.1)",  border: "rgba(232,93,122,0.22)", text: "#E85D7A"  },
  "Figma":           { bg: "rgba(168,85,247,0.1)",  border: "rgba(168,85,247,0.22)",  text: "#A855F7"  },
  "Frontend Dev":    { bg: "rgba(0,201,167,0.1)",   border: "rgba(0,201,167,0.22)",   text: "#00C9A7"  },
};

export function getCatStyle(cat) {
  return CAT_COLORS[cat] || { bg: "rgba(255,255,255,.06)", border: "rgba(255,255,255,.12)", text: "rgba(255,255,255,.5)" };
}