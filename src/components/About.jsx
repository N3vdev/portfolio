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
          height: 100vh; background: transparent;
          position: relative; overflow: hidden;
          display: flex; align-items: center;
          padding: 0;
        }
        .a-wrap { max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; width: 100%; }

        .a-header { margin-bottom: clamp(1.5rem, 3vh, 4rem); }
        .a-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.6rem);
          font-weight: 700;
          line-height: 1.06; letter-spacing: -.035em; color: #fff; margin: 1rem 0 0;
        }

        .a-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1.2rem; align-items: start;
        }

        /* ── Bio card ── */
        .a-bio-card {
          background: rgba(8,8,16,0.72);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 24px;
          padding: clamp(1.4rem, 3vh, 2.2rem) clamp(1.4rem, 2vw, 2.2rem);
          box-shadow: 0 8px 40px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06);
          position: relative; overflow: hidden;

          /* enter animation */
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.22,1,.36,1) .15s,
                      transform .7s cubic-bezier(.22,1,.36,1) .15s;
        }
        .a-bio-card.in { opacity: 1; transform: translateY(0); }
        .a-bio-card::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          opacity: .2; mix-blend-mode: overlay; border-radius: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }

        .a-bio-label {
          font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .2em;
          text-transform: uppercase; color: rgba(255,255,255,.25);
          display: flex; align-items: center; gap: .5rem; margin-bottom: 1rem;
        }
        .a-bio-label::before { content: ''; width: 14px; height: 1px; background: rgba(255,255,255,.15); display: block; }

        .a-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(.82rem, 1.5vh, .97rem);
          line-height: 1.88;
          color: rgba(255,255,255,.55); font-weight: 300; margin: 0;
        }
        .a-bio b { color: rgba(255,255,255,.88); font-weight: 500; }

        /* ── Pull quote card ── */
        .a-pull-card {
          background: rgba(123,47,247,0.07);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(123,47,247,.18);
          border-radius: 24px;
          padding: clamp(1.4rem, 3vh, 2.2rem) clamp(1.4rem, 2vw, 2.2rem);
          box-shadow: 0 8px 40px rgba(0,0,0,.4), 0 0 30px rgba(123,47,247,.06), inset 0 1px 0 rgba(123,47,247,.1);
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; justify-content: space-between; gap: 1.5rem;

          /* enter animation — slightly delayed */
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.22,1,.36,1) .3s,
                      transform .7s cubic-bezier(.22,1,.36,1) .3s;
        }
        .a-pull-card.in { opacity: 1; transform: translateY(0); }
        .a-pull-card::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          opacity: .15; mix-blend-mode: overlay; border-radius: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }

        .a-quote-mark {
          font-family: 'Syne', sans-serif;
          font-size: 4rem; font-weight: 800; line-height: 1;
          color: rgba(123,47,247,.35);
          margin-bottom: -.5rem;
        }
        .a-pull {
          font-family: 'Syne', sans-serif;
          font-size: clamp(.88rem, 1.6vh, 1.08rem);
          font-weight: 600;
          color: rgba(255,255,255,.75); line-height: 1.7; letter-spacing: -.01em;
        }
        .a-pull-attr {
          font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .16em;
          text-transform: uppercase; color: rgba(123,47,247,.55);
        }

        /* ── Service cards ── */
        .svc-list { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; }
        .svc {
          display: flex; flex-direction: column; gap: .65rem;
          padding: 1.4rem 1.5rem; border-radius: 20px;
          background: rgba(8,8,16,0.65);
          backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255,255,255,.09);
          box-shadow: 0 4px 20px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04);
          transition: all .28s; cursor: default; position: relative; overflow: hidden;
        }
        .svc:hover { background: rgba(12,10,24,0.75); border-color: rgba(255,255,255,.15); transform: translateY(-2px); }
        .svc-top { display: flex; align-items: center; gap: .75rem; }
        .svnum { font-family: 'DM Mono', monospace; font-size: .58rem; letter-spacing: .1em; padding: .26rem .65rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.12); flex-shrink: 0; }
        .svtit { font-family: 'Syne', sans-serif; font-size: .95rem; font-weight: 700; color: rgba(255,255,255,.92); }
        .svdesc { font-family: 'DM Sans', sans-serif; font-size: .8rem; color: rgba(255,255,255,.5); line-height: 1.65; font-weight: 300; }
        .svchips { display: flex; flex-wrap: wrap; gap: .28rem; }
        .sv-chip { font-family: 'DM Mono', monospace; font-size: .52rem; letter-spacing: .06em; text-transform: uppercase; padding: .18rem .52rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.38); background: rgba(255,255,255,.03); }

        /* ── Mobile ── */
        @media(max-width:860px) {
          .about { align-items: flex-start; padding-top: 5.5rem; overflow-y: auto; }
          .a-wrap { padding: 0 1.4rem; }
          .a-header { margin-bottom: 1.2rem; }
          .a-h2 { font-size: clamp(1.6rem, 6vw, 2.2rem); }
          .a-grid { grid-template-columns: 1fr; gap: 1rem; }
          .svc-list { display: none; }
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

            {/* Bio card */}
            <div className={`a-bio-card${v ? " in" : ""}`}>
              <div className="a-bio-label">Bio</div>
              <p className="a-bio">
                I am a <b>UI-focused developer</b> specializing in Power BI dashboards and modern web interfaces. I transform <b>complex data</b> into clear, actionable insights through intuitive visualization, designing in <b>Figma</b> and building pixel-perfect, responsive experiences.
              </p>
            </div>

            {/* Pull quote card */}
            <div className={`a-pull-card${v ? " in" : ""}`}>
              <div className="a-quote-mark">"</div>
              <p className="a-pull">
                I don't just build — I think about the person who'll use it, and what will make their experience feel effortless and clear.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}