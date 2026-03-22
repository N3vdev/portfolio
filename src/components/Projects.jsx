import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "../hooks";
import { PROJECTS, getCatStyle } from "../data";
import ProjectIcon from "./ProjectIcon";

export default function Projects() {
  const ref = useRef(null);
  const v = useInView(ref, .04);
  const [ai, setAi] = useState(0);
  const [slide, setSlide] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const ts = useRef(null);
  const stripRef = useRef(null);

  const go = useCallback(next => {
    if (slide) return;
    const n = ((next % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
    setSlide(true);
    setTimeout(() => { setAi(n); setSlide(false); }, 280);
  }, [slide]);

  useEffect(() => {
    const k = e => {
      if (e.key === "ArrowRight") go(ai + 1);
      if (e.key === "ArrowLeft")  go(ai - 1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [ai, go]);

  // Check scroll position to show/hide arrows
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
        .projects {
          min-height: 100vh;
          background: #07070D;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 7rem 0 4rem;
        }
        .p-wrap { max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; width: 100%; }

        .p-hdr { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2.5rem; gap: 1rem; flex-wrap: wrap; }
        .p-h2 { font-family: 'Syne', sans-serif; font-size: clamp(2rem,4vw,3rem); font-weight: 800; color: #fff; letter-spacing: -.035em; line-height: 1; margin-top: .75rem; }
        .p-counter { font-family: 'DM Mono', monospace; font-size: .65rem; letter-spacing: .1em; color: rgba(255,255,255,.18); padding: .4rem .9rem; border-radius: 999px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06); display: flex; align-items: center; gap: .4rem; }
        .p-counter b { color: rgba(255,255,255,.55); }

        /* Main card — fixed height */
        .pcard {
          border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.018);
          transition: border-color .5s;
          display: grid; grid-template-columns: 1fr 1fr;
          height: 420px;
          margin-bottom: 1.2rem;
          
        }

        /* Visual half */
        .pvis {
        position: relative; overflow: hidden;
        display: flex; align-items: center; justify-content: center;
        border-right: 1px solid rgba(255,255,255,.05);
        isolation: isolate;
        }
        .pvis-bg { position: absolute; inset: 0; transition: background .6s ease; }
        .pvis-dots { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 26px 26px; mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent); -webkit-mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent); }
        .pimg {
          position: relative; z-index: 1;
          width: calc(100% - 3rem); height: calc(100% - 3rem);
           border-radius: 22px;
          transition: opacity .3s, transform .32s cubic-bezier(.22,1,.36,1);
        }
        .pimg.out { opacity: 0; transform: scale(.96); }
        .pico { position: relative; z-index: 1; width: 88px; height: 88px; border-radius: 24px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.06); background: rgba(255,255,255,.02); transition: opacity .25s, transform .28s cubic-bezier(.22,1,.36,1); }
        .pico.out { opacity: 0; transform: scale(.85); }
        .pyear { position: absolute; top: 1.2rem; right: 1.2rem; z-index: 10; font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .08em; color: rgba(255,255,255,.22); background: rgba(0,0,0,.4); border: 1px solid rgba(255,255,255,.07); padding: .26rem .68rem; border-radius: 999px; backdrop-filter: blur(10px); }
        .p-bgnum { position: absolute; bottom: .5rem; right: 1rem; font-family: 'Syne', sans-serif; font-size: 7rem; font-weight: 800; color: rgba(255,255,255,.022); line-height: 1; user-select: none; pointer-events: none; }

        /* Info half */
        .pinfo { display: flex; flex-direction: column; justify-content: space-between; padding: 2rem 2.4rem; overflow: hidden; }
        .ptit-row { display: flex; align-items: flex-start; gap: .65rem; flex-wrap: wrap; margin-bottom: .85rem; }
        .ptit { font-family: 'Syne', sans-serif; font-size: clamp(1.2rem,2.2vw,1.7rem); font-weight: 800; color: #fff; line-height: 1.1; letter-spacing: -.03em; transition: opacity .25s; margin: 0; }
        .ptit.out { opacity: 0; }
        .pcat-pill { font-family: 'DM Mono', monospace; font-size: .54rem; letter-spacing: .1em; text-transform: uppercase; padding: .28rem .78rem; border-radius: 999px; white-space: nowrap; margin-top: .28rem; flex-shrink: 0; }
        .pdesc { font-family: 'DM Sans', sans-serif; font-size: .84rem; line-height: 1.82; color: rgba(255,255,255,.3); margin-bottom: 1.2rem; font-weight: 300; transition: opacity .25s .04s; }
        .pdesc.out { opacity: 0; }
        .ptags { display: flex; flex-wrap: wrap; gap: .32rem; margin-bottom: 1.5rem; }

        /* Nav */
        .pnav { display: flex; align-items: center; gap: .6rem; }
        .narr { width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,.08); background: transparent; color: rgba(255,255,255,.35); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all .22s; font-size: .82rem; flex-shrink: 0; }
        .narr:hover { border-color: #7B2FF7; color: #fff; background: rgba(123,47,247,.1); }
        .pdots { display: flex; gap: .32rem; flex: 1; align-items: center; }
        .pdot { height: 2px; border-radius: 999px; background: rgba(255,255,255,.1); cursor: pointer; transition: all .32s cubic-bezier(.22,1,.36,1); flex: 1; }
        .pdot.on { flex: 2.5; background: #7B2FF7; }
        .bvisit { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .08em; text-transform: uppercase; color: #fff; text-decoration: none; padding: .6rem 1.2rem; border-radius: 999px; background: rgba(123,47,247,.18); border: 1px solid rgba(123,47,247,.28); transition: all .26s; flex-shrink: 0; }
        .bvisit:hover { background: #7B2FF7; box-shadow: 0 4px 22px rgba(123,47,247,.38); }
        .bdis { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.14); padding: .6rem 1.2rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.05); flex-shrink: 0; }

        /* Thumbnail strip */
        .pstrip-wrap { position: relative; }
        .pstrip-btn {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 2;
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.1); background: rgba(6,6,9,.92);
          color: rgba(255,255,255,.55); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .22s; font-size: .78rem;
          backdrop-filter: blur(8px);
        }
        .pstrip-btn:hover { border-color: #7B2FF7; color: #fff; background: rgba(123,47,247,.2); }
        .pstrip-btn.sleft  { left: -14px; }
        .pstrip-btn.sright { right: -14px; }
        .pstrip-btn.hidden { opacity: 0; pointer-events: none; }

        .pstrip {
          display: flex; gap: .55rem;
          overflow-x: auto; scroll-behavior: smooth;
          padding: 2px 0 6px; cursor: grab;
        }
        .pstrip:active { cursor: grabbing; }
        .pstrip::-webkit-scrollbar { display: none; }
        .pstrip { -ms-overflow-style: none; scrollbar-width: none; }

.si {
  flex: 0 0 160px; padding: .95rem 1.05rem; border-radius: 14px;
  border: 1px solid rgba(255,255,255,.06); background: rgba(255,255,255,.02);
  cursor: pointer; transition: all .4s cubic-bezier(.22,1,.36,1); user-select: none;
}

        .si:hover { background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.1); }
        .si.on {
  flex: 0 0 220px;
  background: rgba(123,47,247,.08); border-color: rgba(123,47,247,.22);
}
        .si-bar { width: 18px; height: 2px; border-radius: 999px; margin-bottom: .5rem; transition: width .28s cubic-bezier(.22,1,.36,1); }
        .si.on .si-bar { width: 32px; }
        .si-num { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .1em; margin-bottom: .38rem; color: rgba(255,255,255,.2); transition: color .22s; }
        .si.on .si-num { color: inherit; }
        .si-tit { font-family: 'Syne', sans-serif; font-size: .8rem; font-weight: 700; color: rgba(255,255,255,.38); line-height: 1.3; transition: color .22s; }
        .si.on .si-tit { color: #fff; }
        .si-cat { font-family: 'DM Mono', monospace; font-size: .58rem; color: rgba(255,255,255,.16); margin-top: .25rem; letter-spacing: .06em; text-transform: uppercase; }

        @media(max-width:760px) {
          .projects { padding: 6rem 0 3rem; justify-content: flex-start; }
          .pcard { grid-template-columns: 1fr; height: auto; }
          .pvis { height: 220px; border-right: none; border-bottom: 1px solid rgba(255,255,255,.05); }
        }
      `}</style>

      <section id="projects" className="projects" ref={ref}>
        <div className="noise" />
        <div className="p-wrap">

          {/* Header */}
          <div className={`p-hdr fu${v ? " in" : ""}`}>
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2 className="p-h2">My Projects</h2>
            </div>
            <div className="p-counter">
              <b>{String(ai + 1).padStart(2, "0")}</b>
              <span style={{ color: "rgba(255,255,255,.1)" }}>/</span>
              {String(PROJECTS.length).padStart(2, "0")}
            </div>
          </div>

          {/* Main card */}
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
            {/* Visual half */}
{/* Visual half */}
<div className="pvis">
  {p.image
    ? <div style={{
        width: "calc(100% - 3rem)",
        height: "calc(100% - 3rem)",
        borderRadius: "12px",
        overflow: "hidden",
        flexShrink: 0,
        position: "relative",
        zIndex: 1
      }}>
        <img
          src={p.image}
          alt={p.title}
          className={`pimg${slide ? " out" : ""}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    : <>
        <div className="pvis-bg" style={{ background: `radial-gradient(ellipse at 50% 50%, ${p.color}14 0%, transparent 65%)` }} />
        <div className="pvis-dots" />
        <div className={`pico${slide ? " out" : ""}`} style={{ background: `${p.color}10`, borderColor: `${p.color}25` }}>
          <ProjectIcon category={p.category} color={p.color} />
        </div>
      </>
  }

</div>

            {/* Info half */}
            <div className="pinfo">
              <div>
                <div className="ptit-row">
                  <div className={`ptit${slide ? " out" : ""}`}>{p.title}</div>
                  <div className="pcat-pill" style={{ background: cs.bg, border: `1px solid ${cs.border}`, color: cs.text }}>
                    {p.category}
                  </div>
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
                {p.link !== "#"
                  ? <a href={p.link} target="_blank" rel="noreferrer" className="bvisit">Visit ↗</a>
                  : <span className="bdis">Soon</span>
                }
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className={`pstrip-wrap fu d3${v ? " in" : ""}`}>
            <button
              className={`pstrip-btn sleft${canScrollLeft ? "" : " hidden"}`}
              onClick={() => stripScroll(-1)}
            >←</button>
            <button
              className={`pstrip-btn sright${canScrollRight ? "" : " hidden"}`}
              onClick={() => stripScroll(1)}
            >→</button>
            <div
              className="pstrip"
              ref={stripRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              {PROJECTS.map((pr, i) => {
                const cs2 = getCatStyle(pr.category);
                return (
                  <div key={pr.id} className={`si${i === ai ? " on" : ""}`} onClick={() => go(i)}>
                    <div className="si-bar" style={{ background: i === ai ? cs2.text : "rgba(255,255,255,.08)" }} />
                    <div className="si-num" style={{ color: i === ai ? cs2.text : "rgba(255,255,255,.2)" }}>{pr.num}</div>
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