import { useRef, useState, useEffect } from "react";

function useScrollAware(ref, threshold = 0.08) {
  const [state, setState] = useState({ visible: false, fromAbove: false });
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrollingDown = window.scrollY >= lastScrollY.current;
        lastScrollY.current = window.scrollY;
        setState({ visible: entry.isIntersecting, fromAbove: !scrollingDown });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return state;
}

const CAPS = [
  {
    label: "Web Apps & UI",
    desc: "I design in Figma and build in React. The kind of UI where nothing feels out of place and every interaction is intentional.",
    chips: ["React", "Vite", "Tailwind", "Figma"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="18" height="14" rx="2.5" />
        <path d="M7 17v2M15 17v2M5 20h12" />
        <path d="M7 9l2.5 2.5L13 8" />
      </svg>
    ),
    accent: "rgba(123,47,247,",
  },
  {
    label: "Complex Dashboards",
    desc: "I take messy data and turn it into something people can actually read. Power BI, D3, Recharts, whatever gets the story across clearly.",
    chips: ["Power BI", "D3.js", "Recharts", "Looker"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="14" width="3.5" height="6" rx="1" />
        <rect x="9.25" y="9" width="3.5" height="11" rx="1" />
        <rect x="15.5" y="4" width="3.5" height="16" rx="1" />
        <path d="M3 7l4-3 4 3 4-4" />
      </svg>
    ),
    accent: "rgba(80,180,255,",
  },
  {
    label: "AI Integration",
    desc: "I hook up LLMs and AI APIs where they actually make sense: smarter search, automated pipelines, chat that does real work.",
    chips: ["OpenAI", "Claude API", "Python", "Automation"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="3.5" />
        <path d="M11 2v2.5M11 17.5V20M2 11h2.5M17.5 11H20" />
        <path d="M4.93 4.93l1.77 1.77M15.3 15.3l1.77 1.77M4.93 17.07l1.77-1.77M15.3 6.7l1.77-1.77" />
      </svg>
    ),
    accent: "rgba(61,219,133,",
  },
];

export default function About() {
  const ref = useRef(null);
  const { visible, fromAbove } = useScrollAware(ref, 0.08);

  return (
    <>
      <style>{`
        .about {
          min-height: 100vh; background: transparent;
          position: relative; overflow: hidden;
          display: flex; align-items: center;
          padding: 8rem 0; /* Padding for scroll spacing */
        }
        .a-wrap {
          max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; width: 100%;
          display: flex; flex-direction: column; gap: clamp(1.2rem, 2.5vh, 2rem);
        }

        /* ── Header ── */
        .a-header { margin-bottom: 0; }
        .a-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.6rem);
          font-weight: 700;
          line-height: 1.06; letter-spacing: -.035em; color: #fff; margin: .7rem 0 0;
        }

        /* ── Bio card ── */
        .a-bio-card {
          background: rgba(8,8,16,0.72);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 24px;
          padding: clamp(1.4rem, 2.8vh, 2rem) clamp(1.4rem, 2vw, 2rem);
          box-shadow: 0 8px 40px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06);
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; justify-content: space-between;
          will-change: opacity, transform;
          transition: opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1);
        }
        .a-bio-card::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          opacity: .2; mix-blend-mode: overlay; border-radius: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }
        .a-bio-label {
          font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .2em;
          text-transform: uppercase; color: rgba(255,255,255,.65);
          display: flex; align-items: center; gap: .5rem; margin-bottom: .9rem;
        }
        .a-bio-label::before { content: ''; width: 14px; height: 1px; background: rgba(255,255,255,.15); display: block; }
        .a-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(.82rem, 1.45vh, .96rem);
          line-height: 1.9;
          color: rgba(255,255,255,.92); font-weight: 300; margin: 0 0 1.1rem;
        }
        .a-bio b { color: rgba(255,255,255,.88); font-weight: 500; }
        .a-bio-chips { display: flex; flex-wrap: wrap; gap: .3rem; }
        .a-bio-chip {
          font-family: 'DM Mono', monospace; font-size: .52rem; letter-spacing: .08em;
          text-transform: uppercase; padding: .2rem .6rem; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.55);
          background: rgba(255,255,255,.03);
        }

        /* ── Capability cards row ── */
        .a-caps-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: .85rem;
        }
        .a-cap {
          background: rgba(8,8,16,0.62);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 20px;
          padding: 1.2rem 1.3rem;
          display: flex; flex-direction: column; gap: .75rem;
          position: relative; overflow: hidden;
          will-change: opacity, transform;
          transition:
            opacity  .65s cubic-bezier(.22,1,.36,1),
            transform .65s cubic-bezier(.22,1,.36,1),
            border-color .26s, background .26s;
        }
        .a-cap:hover {
          background: rgba(12,10,22,0.78);
          border-color: rgba(255,255,255,.14);
          transform: translateY(-3px) !important;
        }
        .a-cap-d0 { transition-delay: .28s; }
        .a-cap-d1 { transition-delay: .38s; }
        .a-cap-d2 { transition-delay: .48s; }

        .a-cap-ico {
          width: 38px; height: 38px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .a-cap-tit {
          font-family: 'Syne', sans-serif; font-size: .95rem; font-weight: 700;
          color: rgba(255,255,255,.9); margin: 0;
        }
        .a-cap-desc {
          font-family: 'DM Sans', sans-serif; font-size: .78rem; line-height: 1.68;
          color: rgba(255,255,255,.45); font-weight: 300; margin: 0;
        }
        .a-cap-chips { display: flex; flex-wrap: wrap; gap: .26rem; margin-top: auto; }
        .a-cap-chip {
          font-family: 'DM Mono', monospace; font-size: .5rem; letter-spacing: .07em;
          text-transform: uppercase; padding: .16rem .52rem; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.09); color: rgba(255,255,255,.32);
          background: rgba(255,255,255,.025);
        }

        /* ── Desktop tweaks ── */
        @media(min-width: 861px) {
          .a-h2 { font-size: clamp(2.8rem, 5vw, 4.6rem); }
          .a-bio { font-size: clamp(.95rem, 1.7vh, 1.12rem); }
          .a-bio-label { font-size: .62rem; }
          .a-cap-tit { font-size: 1.05rem; }
          .a-cap-desc { font-size: .85rem; }
          .a-cap-chip { font-size: .55rem; }
        }

        /* ── Mobile ── */
        @media(max-width: 860px) {
          .about { align-items: flex-start; padding-top: 5.5rem; padding-bottom: 4rem; overflow-y: auto; height: auto; min-height: 100vh; }
          .a-wrap { padding: 0 1.4rem; gap: 1.2rem; }
          .a-h2 { font-size: clamp(1.8rem, 8vw, 2.4rem); }
          
          .a-caps-row { 
            grid-template-columns: repeat(3, 1fr); 
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 1rem;
            padding: 0.5rem 0.2rem 1.5rem;
            margin: 0 -0.2rem;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .a-caps-row::-webkit-scrollbar { display: none; }
          
          .a-cap { 
            flex: 0 0 85%; 
            scroll-snap-align: center;
            min-height: 200px;
          }
        }
      `}</style>

      <section id="about" className="about" ref={ref}>
        <div className="noise" />
        <div className="a-wrap">

          {/* ── Header ── */}
          <div className="a-header">
            <div className={`fu${visible ? " in" : ""}`}>
              <span className="eyebrow">About Me</span>
            </div>
            <h2 className={`a-h2 fu d1${visible ? " in" : ""}`}>
              Developer
            </h2>
          </div>

          {/* ── Bio card (full width) ── */}
          <div
            className="a-bio-card"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-72px)",
            }}
          >
            <div>
              <div className="a-bio-label">Bio</div>
              <p className="a-bio">
                I’m a developer focused on building clean, intuitive products people genuinely enjoy using. From web apps to dashboards, I aim to make complex systems feel simple and effortless. I use AI where it adds real value, not just for the sake of it, and I design every product around what users actually need.

              </p>
            </div>
            <div className="a-bio-chips">
              {["React", "TypeScript", "Figma", "Power BI", "Python", "OpenAI API"].map(c => (
                <span className="a-bio-chip" key={c}>{c}</span>
              ))}
            </div>
          </div>

          {/* ── Capability cards ── */}
          <div className="a-caps-row">
            {CAPS.map((cap, i) => (
              <div
                key={cap.label}
                className={`a-cap a-cap-d${i}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                  borderColor: visible ? `${cap.accent}.12)` : "rgba(255,255,255,.08)",
                }}
              >
                <div
                  className="a-cap-ico"
                  style={{
                    background: `${cap.accent}.1)`,
                    border: `1px solid ${cap.accent}.18)`,
                    color: cap.accent === "rgba(123,47,247,"
                      ? "rgba(180,130,255,1)"
                      : cap.accent === "rgba(80,180,255,"
                        ? "rgba(120,200,255,1)"
                        : "rgba(61,219,133,1)",
                  }}
                >
                  {cap.icon}
                </div>
                <p className="a-cap-tit">{cap.label}</p>
                <p className="a-cap-desc">{cap.desc}</p>
                <div className="a-cap-chips">
                  {cap.chips.map(c => <span className="a-cap-chip" key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
} 