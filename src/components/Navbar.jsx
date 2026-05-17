import { useState, useEffect, useRef, useCallback } from "react";

const LINKS = ["home", "about", "projects"];

export default function Navbar({ active, onNav }) {
  const [sc, setSc]   = useState(false);
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const linksRef = useRef(null);
  const itemRefs = useRef({});
  const [ind, setInd] = useState({ x: 0, w: 0, ready: false });

  useEffect(() => {
    const h = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const handleLock = (e) => setIsHidden(e.detail);
    window.addEventListener("lock-scroll", handleLock);
    return () => window.removeEventListener("lock-scroll", handleLock);
  }, []);

  // Measure active item and slide indicator to it
  const updateInd = useCallback(() => {
    const key = active === "hero" ? "home" : active;
    const el  = itemRefs.current[key];
    const wrap = linksRef.current;
    if (!el || !wrap) return;
    const er = el.getBoundingClientRect();
    const wr = wrap.getBoundingClientRect();
    setInd({ x: er.left - wr.left, w: er.width, ready: true });
  }, [active]);

  useEffect(() => { updateInd(); }, [updateInd]);
  useEffect(() => {
    window.addEventListener("resize", updateInd);
    return () => window.removeEventListener("resize", updateInd);
  }, [updateInd]);

  const go = (id) => { onNav?.(id); setOpen(false); };

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 1.1rem; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: calc(100% - 2.5rem); max-width: 1320px;
        }

        /* ── Pill ── */
        .nav-pill {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: space-between;
          padding: .62rem 1rem .62rem 1.4rem;
          background: rgba(8,8,14,.38);
          border: 1px solid rgba(255,255,255,.065); border-radius: 999px;
          backdrop-filter: blur(24px) saturate(180%);
          transition: background .42s, border-color .42s, box-shadow .42s;
          box-shadow: 0 0 0 0 rgba(123,47,247,0);
          animation: pill-breathe 5s ease-in-out infinite;
        }
        @keyframes pill-breathe {
          0%,100% { box-shadow: 0 2px 20px rgba(0,0,0,.35), 0 0 0 1px rgba(123,47,247,.08); }
          50%      { box-shadow: 0 2px 28px rgba(0,0,0,.45), 0 0 0 1px rgba(123,47,247,.22); }
        }
        .nav.sc .nav-pill {
          background: rgba(6,6,9,.92); border-color: rgba(255,255,255,.09);
          animation: none;
          box-shadow: 0 4px 30px rgba(0,0,0,.5), 0 0 0 1px rgba(123,47,247,.14),
                      inset 0 1px 0 rgba(255,255,255,.04);
        }
        /* Shimmer scan */
        .nav-pill::after {
          content: ''; position: absolute; top: 0; height: 100%; width: 45%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.055), transparent);
          border-radius: 999px; pointer-events: none;
          animation: pill-shimmer 7s ease-in-out infinite;
        }
        @keyframes pill-shimmer {
          0%,55% { left: -50%; }
          100%   { left: 110%; }
        }

        /* ── Logo ── */
        .nlogo {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .92rem; color: #fff;
          cursor: pointer; letter-spacing: -.02em;
          display: flex; align-items: center; gap: .42rem;
          position: relative; z-index: 1; transition: color .2s;
        }
        .nlogo::after {
          content: ''; position: absolute; bottom: -3px; left: 0;
          width: 0; height: 1px; border-radius: 999px;
          background: linear-gradient(90deg, #7B2FF7, #a855f7);
          transition: width .32s cubic-bezier(.22,1,.36,1);
        }
        .nlogo:hover::after { width: 100%; }
        .nlogo-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #7B2FF7;
          box-shadow: 0 0 8px #7B2FF7; flex-shrink: 0;
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s;
          animation: dot-pulse 3s ease-in-out infinite;
        }
        .nlogo:hover .nlogo-dot {
          transform: scale(1.5);
          box-shadow: 0 0 14px #7B2FF7;
        }
        @keyframes dot-pulse {
          0%,100% { opacity: 1; box-shadow: 0 0 8px #7B2FF7; }
          50%      { opacity: .4; box-shadow: 0 0 3px #7B2FF7; }
        }

        /* ── Nav links + sliding indicator ── */
        .nlinks { display: flex; gap: .12rem; position: relative; z-index: 1; }
        .nind {
          position: absolute; top: 0; left: 0; height: 100%;
          background: rgba(123,47,247,.15); border: 1px solid rgba(123,47,247,.3);
          border-radius: 999px; pointer-events: none;
          box-shadow: 0 0 14px rgba(123,47,247,.18);
          transition: transform .38s cubic-bezier(.22,1,.36,1),
                      width   .38s cubic-bezier(.22,1,.36,1),
                      opacity .2s;
        }
        .nitem {
          font-family: 'DM Mono', monospace; font-size: .65rem; letter-spacing: .06em;
          text-transform: uppercase; color: rgba(255,255,255,.36); cursor: pointer;
          padding: .38rem .82rem; border-radius: 999px;
          transition: color .22s, transform .2s;
          border: 1px solid transparent; position: relative; z-index: 1;
        }
        .nitem:hover  { color: rgba(255,255,255,.82); transform: scale(1.05); }
        .nitem.on     { color: #fff; }

        /* ── CTA ── */
        .ncta {
          position: relative; z-index: 1;
          font-family: 'DM Mono', monospace; font-size: .63rem; letter-spacing: .07em;
          text-transform: uppercase; color: #fff; background: rgba(123,47,247,.88); border: none;
          padding: .44rem 1.05rem; border-radius: 999px; cursor: pointer;
          transition: background .26s, transform .22s, box-shadow .26s;
          animation: cta-glow 4s ease-in-out infinite;
        }
        @keyframes cta-glow {
          0%,100% { box-shadow: 0 2px 14px rgba(123,47,247,.3); }
          50%      { box-shadow: 0 2px 26px rgba(123,47,247,.6); }
        }
        .ncta:hover {
          background: #8c3fff; transform: translateY(-1px) scale(1.05);
          box-shadow: 0 6px 28px rgba(123,47,247,.55) !important;
          animation: none;
        }
        .ncta:active { transform: scale(.97); }

        /* ── Burger → X ── */
        .nburg {
          display: none; background: none; border: none; cursor: pointer;
          color: #fff; padding: .4rem; position: relative; z-index: 1;
        }
        .nburg-svg line {
          transition: transform .32s cubic-bezier(.22,1,.36,1), opacity .22s;
          transform-box: fill-box; transform-origin: center;
        }
        .nburg-svg.open line:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .nburg-svg.open line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nburg-svg.open line:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .mdrawer {
          position: fixed; inset: 0; z-index: 999; background: rgba(6,6,9,.97);
          backdrop-filter: blur(20px); display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 1.6rem;
        }
        .mdrawer .nitem { font-size: .95rem; padding: .62rem 2.2rem; }

        @media(max-width:660px) { .nlinks, .ncta { display: none; } .nburg { display: block; } }
      `}</style>

      <nav className={`nav${sc ? " sc" : ""}`} style={{
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? "none" : "auto",
        zIndex: isHidden ? 0 : 1000,
        transition: "opacity 0.3s ease"
      }}>
        <div className="nav-pill">
          <div className="nlogo" onClick={() => go("hero")}>
            <div className="nlogo-dot" />
            Nev.
          </div>

          <div className="nlinks" ref={linksRef}>
            {/* Sliding active indicator */}
            <div className="nind" style={{
              transform: `translateX(${ind.x}px)`,
              width: ind.w,
              opacity: ind.ready ? 1 : 0,
            }} />
            {LINKS.map(s => (
              <div
                key={s}
                ref={el => { itemRefs.current[s] = el; }}
                className={`nitem${active === (s === "home" ? "hero" : s) ? " on" : ""}`}
                onClick={() => go(s === "home" ? "hero" : s)}
              >
                {s[0].toUpperCase() + s.slice(1)}
              </div>
            ))}
          </div>

          <button className="ncta" onClick={() => go("contact")}>Contact Me</button>

          <button className="nburg" onClick={() => setOpen(o => !o)}>
            <svg className={`nburg-svg${open ? " open" : ""}`}
              width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="3" y1="6"  x2="21" y2="6"  />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mdrawer" onClick={() => setOpen(false)}>
          {["home","about","projects","contact"].map(s => (
            <div
              key={s}
              className="nitem"
              onClick={e => { e.stopPropagation(); go(s === "home" ? "hero" : s); }}
            >
              {s[0].toUpperCase() + s.slice(1)}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
