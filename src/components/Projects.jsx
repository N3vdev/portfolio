import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "../hooks";
import { PROJECTS, getCatStyle } from "../data";
import ProjectIcon from "./ProjectIcon";

// ── CONFIG ───────────────────────────────────────────
const AUTO_INTERVAL = 4000; // ms between auto-advances
// ────────────────────────────────────────────────────

export default function Projects() {
  const ref = useRef(null);
  const v = useInView(ref, .04);
  const [ai, setAi] = useState(0);
  const [slide, setSlide] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const ts = useRef(null);
  const stripRef = useRef(null);
  const timerRef = useRef(null); // holds the auto-advance interval

  const go = useCallback((next, isAuto = false) => {
    if (slide) return;
    const n = ((next % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
    setSlide(true);
    setTimeout(() => { setAi(n); setSlide(false); }, 280);

    // If user manually navigated, reset the timer so it doesn't
    // immediately fire again right after their click
    if (!isAuto) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setAi(prev => {
          const next = (prev + 1) % PROJECTS.length;
          setSlide(true);
          setTimeout(() => setSlide(false), 280);
          return next;
        });
      }, AUTO_INTERVAL);
    }
  }, [slide]);

  // ── Auto-advance on mount ──────────────────────────
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAi(prev => {
        const next = (prev + 1) % PROJECTS.length;
        setSlide(true);
        setTimeout(() => setSlide(false), 280);
        return next;
      });
    }, AUTO_INTERVAL);

    return () => clearInterval(timerRef.current);
  }, []); // runs once — timer restarts itself via go() on manual nav

  // ── Keyboard nav ──────────────────────────────────
  useEffect(() => {
    const k = e => {
      if (e.key === "ArrowRight") go(ai + 1);
      if (e.key === "ArrowLeft")  go(ai - 1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [ai, go]);

  // ── Thumbnail strip scroll indicators ─────────────
  const checkScroll = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const onMouseDown = e => {
    const el = stripRef.current;
    el._drag = true;
    el._startX = e.pageX - el.offsetLeft;
    el._scrollLeft = el.scrollLeft;
  };
  const onMouseMove = e => {
    const el = stripRef.current;
    if (!el._drag) return;
    e.preventDefault();
    el.scrollLeft = el._scrollLeft - (e.pageX - el.offsetLeft - el._startX);
  };
  const onMouseUp = () => { if (stripRef.current) stripRef.current._drag = false; };
  const stripScroll = dir => {
    stripRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  const p  = PROJECTS[ai];
  const cs = getCatStyle(p.category);

  return (
    <>
      <style>{`
        /* ── Section ── */
        .projects {
          height: 100vh;
          background: transparent;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 7rem 0 3rem;
        }
        .p-wrap { max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; width: 100%; }

        .p-hdr { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.8rem; gap: 1rem; flex-wrap: wrap; }
        .p-h2 { font-family: 'Syne', sans-serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 700; color: #fff; letter-spacing: -.035em; line-height: 1; margin-top: .75rem; }
        .p-counter { font-family: 'DM Mono', monospace; font-size: .65rem; letter-spacing: .1em; color: rgba(255,255,255,.4); padding: .4rem .9rem; border-radius: 999px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; gap: .4rem; backdrop-filter: blur(10px); }
        .p-counter b { color: rgba(255,255,255,.85); }

        /* ── Main card ── */
        .pcard {
          border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(8,8,16,0.72);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 8px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.06);
          transition: border-color .5s;
          display: grid; grid-template-columns: 1fr 1fr;
          height: 400px;
          margin-bottom: 1rem;
          position: relative;
        }
        .pcard::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 10;
          opacity: .25; mix-blend-mode: overlay; border-radius: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }

        /* ── Progress bar showing time until next slide ── */
        .pcard-progress {
          position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: rgba(255,255,255,.06); z-index: 11; border-radius: 0 0 24px 24px; overflow: hidden;
        }
        .pcard-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #7B2FF7, #b06aff);
          border-radius: 999px;
          animation: progress-tick ${AUTO_INTERVAL}ms linear infinite;
        }
        @keyframes progress-tick {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Visual half ── */
        .pvis {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          border-right: 1px solid rgba(255,255,255,.07);
          isolation: isolate;
          background: rgba(0,0,0,.18);
        }
        .pvis-bg { position: absolute; inset: 0; transition: background .6s ease; }
        .pvis-dots { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px); background-size: 26px 26px; mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent); -webkit-mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent); }
        .pimg {
          position: relative; z-index: 1;
          width: calc(100% - 1rem); height: calc(100% - 1rem);
          border-radius: 14px;
          transition: opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1), filter .6s cubic-bezier(.22,1,.36,1);
          box-shadow: 0 4px 24px rgba(0,0,0,.4);
        }
        .pimg.out { opacity: 0; transform: scale(.97); filter: blur(6px); }
        .pico { position: relative; z-index: 1; width: 88px; height: 88px; border-radius: 24px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04); backdrop-filter: blur(8px); transition: opacity .25s, transform .28s cubic-bezier(.22,1,.36,1); }
        .pico.out { opacity: 0; transform: scale(.85); }

        /* ── Info half ── */
        .pinfo { display: flex; flex-direction: column; justify-content: space-between; padding: 1.8rem 2.2rem; overflow: hidden; }
        .ptit-row { display: flex; align-items: flex-start; gap: .65rem; flex-wrap: wrap; margin-bottom: .75rem; }
        .ptit { font-family: 'Syne', sans-serif; font-size: clamp(1.2rem,2.2vw,1.6rem); font-weight: 700; color: #fff; line-height: 1.1; letter-spacing: -.03em; transition: opacity .25s; margin: 0; text-shadow: 0 1px 8px rgba(0,0,0,.4); }
        .ptit.out { opacity: 0; }
        .pcat-pill { font-family: 'DM Mono', monospace; font-size: .54rem; letter-spacing: .1em; text-transform: uppercase; padding: .28rem .78rem; border-radius: 999px; white-space: nowrap; margin-top: .28rem; flex-shrink: 0; backdrop-filter: blur(8px); }
        .pdesc { font-family: 'DM Sans', sans-serif; font-size: .84rem; line-height: 1.82; color: rgba(255,255,255,.55); margin-bottom: 1rem; font-weight: 300; transition: opacity .25s .04s; }
        .pdesc.out { opacity: 0; }
        .ptags { display: flex; flex-wrap: wrap; gap: .32rem; margin-bottom: 1.2rem; }
        .pinfo .chip { border-color: rgba(255,255,255,.14); color: rgba(255,255,255,.45); background: rgba(255,255,255,.04); }

        /* ── Nav arrows ── */
        .pnav { display: flex; align-items: center; gap: .6rem; }
        .narr {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1px solid rgba(123,47,247,.45);
          background: rgba(123,47,247,.15);
          color: rgba(180,120,255,1);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .22s; font-size: .88rem; flex-shrink: 0;
          box-shadow: 0 0 12px rgba(123,47,247,.2);
          backdrop-filter: blur(8px);
        }
        .narr:hover { border-color: #7B2FF7; color: #fff; background: rgba(123,47,247,.35); box-shadow: 0 0 20px rgba(123,47,247,.5); transform: scale(1.08); }
        .narr:active { transform: scale(.95); }
        .pdots { display: flex; gap: .32rem; flex: 1; align-items: center; }
        .pdot { height: 2px; border-radius: 999px; background: rgba(255,255,255,.15); cursor: pointer; transition: all .32s cubic-bezier(.22,1,.36,1); flex: 1; }
        .pdot.on { flex: 2.5; background: #7B2FF7; }
        .bvisit { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .08em; text-transform: uppercase; color: #fff; text-decoration: none; padding: .6rem 1.2rem; border-radius: 999px; background: rgba(123,47,247,.22); border: 1px solid rgba(123,47,247,.38); transition: all .26s; flex-shrink: 0; backdrop-filter: blur(8px); }
        .bvisit:hover { background: #7B2FF7; box-shadow: 0 4px 22px rgba(123,47,247,.45); }
        .bdis { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.25); padding: .6rem 1.2rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.08); flex-shrink: 0; }

        /* ── Thumbnail strip ── */
        .pstrip-wrap { position: relative; }
        .pstrip-btn {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 2;
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.1); background: rgba(6,6,9,.92);
          color: rgba(255,255,255,.55); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .22s; font-size: .78rem; backdrop-filter: blur(8px);
        }
        .pstrip-btn:hover { border-color: #7B2FF7; color: #fff; background: rgba(123,47,247,.2); }
        .pstrip-btn.sleft  { left: -14px; }
        .pstrip-btn.sright { right: -14px; }
        .pstrip-btn.hidden { opacity: 0; pointer-events: none; }
        .pstrip { display: flex; gap: .55rem; overflow-x: auto; scroll-behavior: smooth; padding: 2px 0 6px; cursor: grab; }
        .pstrip:active { cursor: grabbing; }
        .pstrip::-webkit-scrollbar { display: none; }
        .pstrip { -ms-overflow-style: none; scrollbar-width: none; }
        .si {
          flex: 0 0 160px; padding: .95rem 1.05rem; border-radius: 14px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(8,8,16,0.65);
          backdrop-filter: blur(16px);
          cursor: pointer; transition: all .4s cubic-bezier(.22,1,.36,1); user-select: none;
        }
        .si:hover { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.14); }
        .si.on { flex: 0 0 220px; background: rgba(123,47,247,.12); border-color: rgba(123,47,247,.28); }
        .si-bar { width: 18px; height: 2px; border-radius: 999px; margin-bottom: .5rem; transition: width .28s cubic-bezier(.22,1,.36,1); }
        .si.on .si-bar { width: 32px; }
        .si-num { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .1em; margin-bottom: .38rem; color: rgba(255,255,255,.3); transition: color .22s; }
        .si.on .si-num { color: inherit; }
        .si-tit { font-family: 'Syne', sans-serif; font-size: .8rem; font-weight: 700; color: rgba(255,255,255,.5); line-height: 1.3; transition: color .22s; }
        .si.on .si-tit { color: #fff; }
        .si-cat { font-family: 'DM Mono', monospace; font-size: .58rem; color: rgba(255,255,255,.22); margin-top: .25rem; letter-spacing: .06em; text-transform: uppercase; }

        /* ── Mobile ── */
        @media(max-width: 760px) {
          .projects { height: 100vh; min-height: unset; padding: 5.5rem 0 1.5rem; justify-content: flex-start; overflow: hidden; }
          .p-wrap { padding: 0 1.2rem; display: flex; flex-direction: column; height: 100%; margin-bottom: 5rem; }
          .p-hdr { margin-bottom: 1rem; flex-shrink: 0; }
          .p-h2 { font-size: 1.5rem; margin-top: .3rem; }
          .pcard { grid-template-columns: 1fr; height: auto; flex: 1; min-height: 0; margin-bottom: .7rem; flex-shrink: 0; }
          .pvis { height: 220px; border-right: none; border-bottom: 1px solid rgba(255,255,255,.07); flex-shrink: 0; }
          .pinfo { padding: 1rem 1.1rem; flex: 1; min-height: 0; }
          .ptit { font-size: .95rem; }
          .pdesc { font-size: .76rem; line-height: 1.6; margin-bottom: .65rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
          .ptags { margin-bottom: .65rem; }
          .pstrip-wrap { display: none; }
          .narr { width: 32px; height: 32px; font-size: .78rem; }
          .bvisit, .bdis { padding: .5rem .9rem; font-size: .55rem; }
        }
      `}</style>

      <section id="projects" className="projects" ref={ref}>
        <div className="noise" />
        <div className="p-wrap">

          <div className={`p-hdr fu${v ? " in" : ""}`}>
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2 className="p-h2">My Projects</h2>
            </div>
            <div className="p-counter">
              <b>{String(ai + 1).padStart(2, "0")}</b>
              <span style={{ color: "rgba(255,255,255,.2)" }}>/</span>
              {String(PROJECTS.length).padStart(2, "0")}
            </div>
          </div>

          <div
            className={`pcard fu d2${v ? " in" : ""}`}
            style={{ borderColor: cs.border }}
            onTouchStart={e => { ts.current = e.touches[0].clientX; }}
            onTouchEnd={e => {
              if (!ts.current) return;
              const dx = e.changedTouches[0].clientX - ts.current;
              if (Math.abs(dx) > 40) go(ai + (dx < 0 ? 1 : -1));
              ts.current = null;
            }}
          >
            {/* Progress bar — restarts via key prop when slide changes */}
            <div className="pcard-progress">
              <div className="pcard-progress-fill" key={ai} />
            </div>

            <div className="pvis">
              {p.image
                ? <div style={{ width: "calc(100% - 1rem)", height: "calc(100% - 1rem)", borderRadius: "12px", overflow: "hidden", flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <img src={p.image} alt={p.title} className={`pimg${slide ? " out" : ""}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                : <>
                    <div className="pvis-bg" style={{ background: `radial-gradient(ellipse at 50% 50%, ${p.color}18 0%, transparent 65%)` }} />
                    <div className="pvis-dots" />
                    <div className={`pico${slide ? " out" : ""}`} style={{ background: `${p.color}12`, borderColor: `${p.color}30` }}>
                      <ProjectIcon category={p.category} color={p.color} />
                    </div>
                  </>
              }
            </div>

            <div className="pinfo">
              <div>
                <div className="ptit-row">
                  <div className={`ptit${slide ? " out" : ""}`}>{p.title}</div>
                  <div className="pcat-pill" style={{ background: cs.bg, border: `1px solid ${cs.border}`, color: cs.text }}>{p.category}</div>
                </div>
                <div className={`pdesc${slide ? " out" : ""}`}>{p.description}</div>
                <div className="ptags">
                  {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
              <div className="pnav">
                <button className="narr" onClick={() => go(ai - 1)}>←</button>
                <button className="narr" onClick={() => go(ai + 1)}>→</button>
                <div className="pdots">
                  {PROJECTS.map((_, i) => (
                    <div key={i} className={`pdot${i === ai ? " on" : ""}`} onClick={() => go(i)} />
                  ))}
                </div>
                {p.link && p.link !== "#"
                  ? <a href={p.link} target="_blank" rel="noreferrer" className="bvisit">Visit ↗</a>
                  : <span className="bdis">Soon</span>
                }
              </div>
            </div>
          </div>

          <div className={`pstrip-wrap fu d3${v ? " in" : ""}`}>
            <button className={`pstrip-btn sleft${canScrollLeft ? "" : " hidden"}`} onClick={() => stripScroll(-1)}>←</button>
            <button className={`pstrip-btn sright${canScrollRight ? "" : " hidden"}`} onClick={() => stripScroll(1)}>→</button>
            <div className="pstrip" ref={stripRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>
              {PROJECTS.map((pr, i) => {
                const cs2 = getCatStyle(pr.category);
                return (
                  <div key={pr.id} className={`si${i === ai ? " on" : ""}`} onClick={() => go(i)}>
                    <div className="si-bar" style={{ background: i === ai ? cs2.text : "rgba(255,255,255,.1)" }} />
                    <div className="si-num" style={{ color: i === ai ? cs2.text : "rgba(255,255,255,.25)" }}>{pr.num}</div>
                    <div className="si-tit">{pr.title}</div>
                    <div className="si-cat">{pr.category}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}