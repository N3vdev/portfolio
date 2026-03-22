import { useState, useEffect } from "react";

export default function Navbar({ active }) {
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 1.1rem; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: calc(100% - 2.5rem); max-width: 1320px; transition: all .5s ease;
        }
        .nav-pill {
          display: flex; align-items: center; justify-content: space-between;
          padding: .62rem 1rem .62rem 1.4rem; background: rgba(8,8,14,.38);
          border: 1px solid rgba(255,255,255,.065); border-radius: 999px;
          backdrop-filter: blur(24px) saturate(180%); transition: all .42s;
        }
        .nav.sc .nav-pill {
          background: rgba(6,6,9,.9); border-color: rgba(255,255,255,.09);
          box-shadow: 0 4px 30px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.04);
        }
        .nlogo {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .92rem; color: #fff;
          cursor: pointer; letter-spacing: -.02em; display: flex; align-items: center; gap: .42rem;
        }
        .nlogo-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #7B2FF7;
          box-shadow: 0 0 8px #7B2FF7; animation: pdp 3s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes pdp { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
        .nlinks { display: flex; gap: .12rem; }
        .nitem {
          font-family: 'DM Mono', monospace; font-size: .65rem; letter-spacing: .06em;
          text-transform: uppercase; color: rgba(255,255,255,.33); cursor: pointer;
          padding: .38rem .82rem; border-radius: 999px; transition: all .2s; border: 1px solid transparent;
        }
        .nitem:hover { color: #fff; background: rgba(255,255,255,.05); }
        .nitem.on { color: #fff; background: rgba(123,47,247,.14); border-color: rgba(123,47,247,.2); }
        .ncta {
          font-family: 'DM Mono', monospace; font-size: .63rem; letter-spacing: .07em;
          text-transform: uppercase; color: #fff; background: rgba(123,47,247,.88); border: none;
          padding: .44rem 1.05rem; border-radius: 999px; cursor: pointer; transition: all .26s;
          box-shadow: 0 2px 14px rgba(123,47,247,.28);
        }
        .ncta:hover { background: #8c3fff; box-shadow: 0 4px 22px rgba(123,47,247,.48); transform: translateY(-1px); }
        .nburg { display: none; background: none; border: none; cursor: pointer; color: #fff; padding: .4rem; }
        .mdrawer {
          position: fixed; inset: 0; z-index: 999; background: rgba(6,6,9,.97);
          backdrop-filter: blur(20px); display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 1.6rem;
        }
        .mdrawer .nitem { font-size: .95rem; padding: .62rem 2.2rem; }
        @media(max-width:660px) { .nlinks, .ncta { display: none; } .nburg { display: block; } }
      `}</style>

      <nav className={`nav${sc ? " sc" : ""}`}>
        <div className="nav-pill">
          <div className="nlogo" onClick={() => go("hero")}>
            <div className="nlogo-dot" />
            Nev.
          </div>
          <div className="nlinks">
            {["home", "about", "projects"].map(s => (
              <div
                key={s}
                className={`nitem${active === s ? " on" : ""}`}
                onClick={() => go(s)}
              >
                {s[0].toUpperCase() + s.slice(1)}
              </div>
            ))}
          </div>
          <button className="ncta" onClick={() => go("contact")}>Contact Me</button>
          <button className="nburg" onClick={() => setOpen(o => !o)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mdrawer" onClick={() => setOpen(false)}>
          {["home", "about", "projects", "contact"].map(s => (
            <div
              key={s}
              className="nitem"
              onClick={e => { e.stopPropagation(); go(s); }}
            >
              {s[0].toUpperCase() + s.slice(1)}
            </div>
          ))}
        </div>
      )}
    </>
  );
}