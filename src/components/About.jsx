import { useRef } from "react";
import { useInView } from "../hooks";
import { SERVICES } from "../data";

export default function About() {
  const ref = useRef(null);
  const v = useInView(ref, .08);

  return (
    <>
      <style>{`
        .about {
          min-height: 100vh; background: transparent;
          position: relative; overflow: hidden; padding: 10rem 0 8rem;
        }
        .a-wrap { max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; }

        .a-header { margin-bottom: 4.5rem; }
        .a-h2 {
          font-family: 'Syne', sans-serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 800;
          line-height: 1.06; letter-spacing: -.035em; color: #fff; margin: 1rem 0 0;
        }

        .a-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }

        /* ── Bio card — glass ── */
        .a-bio-wrap {
          background: rgba(8,8,16,0.65);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 24px;
          padding: 2rem 2.2rem;
          box-shadow: 0 8px 32px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.05);
          position: relative; overflow: hidden;
        }
        .a-bio-wrap::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          opacity: .18; mix-blend-mode: overlay; border-radius: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }
        .a-bio {
          font-family: 'DM Sans', sans-serif; font-size: .97rem; line-height: 1.92;
          color: rgba(255,255,255,.55); font-weight: 300; margin-bottom: 2rem;
        }
        .a-bio b { color: rgba(255,255,255,.88); font-weight: 500; }
        .a-pull {
          font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 600;
          color: rgba(255,255,255,.55); line-height: 1.68; letter-spacing: -.02em;
          border-left: 2px solid rgba(123,47,247,.4); padding-left: 1.25rem;
        }

        /* ── Service cards — glass ── */
        .svc-list { display: grid; grid-template-columns: 1fr 1fr; gap: .6rem; }
        .svc {
          display: flex; flex-direction: column; gap: .65rem;
          padding: 1.4rem 1.5rem; border-radius: 20px;
          background: rgba(8,8,16,0.65);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255,255,255,.09);
          box-shadow: 0 4px 20px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04);
          transition: all .28s; cursor: default;
          position: relative; overflow: hidden;
        }
        .svc::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          opacity: .15; mix-blend-mode: overlay; border-radius: 20px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }
        .svc:hover {
          background: rgba(12,10,24,0.75);
          border-color: rgba(255,255,255,.15);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.07);
        }
        .svc-top { display: flex; align-items: center; gap: .75rem; }
        .svnum {
          font-family: 'DM Mono', monospace; font-size: .58rem; letter-spacing: .1em;
          padding: .26rem .65rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.12);
          flex-shrink: 0; color: rgba(255,255,255,.5);
        }
        .svtit { font-family: 'Syne', sans-serif; font-size: .95rem; font-weight: 700; color: rgba(255,255,255,.92); }
        .svdesc { font-family: 'DM Sans', sans-serif; font-size: .8rem; color: rgba(255,255,255,.5); line-height: 1.65; font-weight: 300; }
        .svchips { display: flex; flex-wrap: wrap; gap: .28rem; }
        .sv-chip {
          font-family: 'DM Mono', monospace; font-size: .52rem; letter-spacing: .06em;
          text-transform: uppercase; padding: .18rem .52rem; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.38);
          background: rgba(255,255,255,.03);
        }

        @media(max-width:860px) {
          .a-grid { grid-template-columns: 1fr; gap: 2rem; }
          .svc-list { grid-template-columns: 1fr; }
          .about { padding: 7rem 0 5rem; }
          .a-header { margin-bottom: 2.5rem; }
          .svc {display: none;}
        }
      `}</style>

      <section id="about" className="about" ref={ref}>
        <div className="noise" />
        <div className="a-wrap">

          <div className="a-header">
            <div className={`fu${v ? " in" : ""}`}><span className="eyebrow">About Me</span></div>
            <h2 className={`a-h2 fu d1${v ? " in" : ""}`}>Creative developer</h2>
          </div>

          <div className="a-grid">

            <div className={`a-bio-wrap fu d2${v ? " in" : ""}`}>
              <p className="a-bio">
                I am a <b>UI-focused developer</b> specializing in Power BI dashboards and modern web interfaces. I transform <b>complex data</b> into clear, actionable insights through intuitive visualization, designing in <b>Figma</b> and building pixel-perfect, responsive experiences.
              </p>
              <p className="a-pull">
                "I don't just build — I think about the person who'll use it, and what will make their experience feel effortless and clear."
              </p>
            </div>

            <div className={`svc-list fu d3${v ? " in" : ""}`}>
              {SERVICES.map(s => (
                <div className="svc" key={s.number}>
                  <div className="svc-top">
                    <span className="svnum" style={{ color: s.accent, borderColor: `${s.accent}44` }}>{s.number}</span>
                    <div className="svtit">{s.title}</div>
                  </div>
                  <div className="svdesc">{s.description}</div>
                  <div className="svchips">
                    {s.tags.map(t => <span key={t} className="sv-chip">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}