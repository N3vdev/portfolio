export default function ProjectIcon({ category, color }) {
  const props = {
    width: 36, height: 36, viewBox: "0 0 36 36",
    fill: "none", stroke: color, strokeWidth: 1.5, strokeLinecap: "round",
  };

  if (category === "Power BI") return (
    <svg {...props}>
      <rect x="4"  y="22" width="5" height="10" rx="1.5" />
      <rect x="11" y="16" width="5" height="16" rx="1.5" />
      <rect x="18" y="10" width="5" height="22" rx="1.5" />
      <rect x="25" y="4"  width="5" height="28" rx="1.5" />
    </svg>
  );

  if (category === "Chrome Extension") return (
    <svg {...props}>
      <circle cx="18" cy="18" r="6" />
      <path d="M18 12V4M18 12h10.4M18 12l-5.2 9" />
      <path d="M18 24v8M18 24H7.6M18 24l5.2-9" />
    </svg>
  );

  if (category === "Figma") return (
    <svg {...props}>
      <rect x="10" y="4"  width="8" height="8" rx="2" />
      <rect x="18" y="4"  width="8" height="8" rx="2" />
      <rect x="10" y="14" width="8" height="8" rx="2" />
      <circle cx="22" cy="18" r="4" />
      <rect x="10" y="24" width="8" height="8" rx="2" />
    </svg>
  );

  if (category === "Frontend Dev") return (
    <svg {...props} strokeLinejoin="round">
      <polyline points="10,14 4,18 10,22" />
      <polyline points="26,14 32,18 26,22" />
      <line x1="21" y1="8" x2="15" y2="28" />
    </svg>
  );

  // Fallback
  return (
    <svg {...props}>
      <circle cx="18" cy="18" r="10" />
    </svg>
  );
}