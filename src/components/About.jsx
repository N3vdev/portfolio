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
          min-height: 100vh; background: #060609;
          position: relative; overflow: hidden; padding: 10rem 0 8rem;
        }
        .a-wrap { max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; }

        /* Header */
        .a-header { margin-bottom: 4.5rem; }
        .a-h2 {
          font-family: 'Syne', sans-serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 800;
          line-height: 1.06; letter-spacing: -.035em; color: #fff; margin: 1rem 0 0;
        }

        /* 50/50 split */
        .a-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: start;
        }

        /* Left — bio */
        .a-bio-wrap {}
        .a-bio {
          font-family: 'DM Sans', sans-serif; font-size: .97rem; line-height: 1.92;
          color: rgba(255,255,255,.33); font-weight: 300; margin-bottom: 2.5rem;
        }
        .a-bio b { color: rgba(255,255,255,.72); font-weight: 500; }
        .a-pull {
          font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 600;
          color: rgba(255,255,255,.42); line-height: 1.68; letter-spacing: -.02em;
          border-left: 2px solid rgba(255,255,255,.08); padding-left: 1.25rem;
        }

        /* Right — services */
        .svc-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: .5rem;
            }
        .svc {
          display: flex; flex-direction: column; gap: .65rem;
          padding: 1.4rem 1.5rem; border-radius: 20px;
          background: rgba(255,255,255,.018); border: 1px solid rgba(255,255,255,.055);
          transition: all .28s; cursor: default;
        }
        .svc:hover {
          background: rgba(255,255,255,.032);
          border-color: rgba(255,255,255,.1);
          transform: translateX(4px);
        }
        .svc-top { display: flex; align-items: center; gap: .75rem; }
        .svnum {
          font-family: 'DM Mono', monospace; font-size: .58rem; letter-spacing: .1em;
          padding: .26rem .65rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.08);
          flex-shrink: 0;
        }
        .svtit { font-family: 'Syne', sans-serif; font-size: .95rem; font-weight: 700; color: rgba(255,255,255,.85); }
        .svdesc { font-family: 'DM Sans', sans-serif; font-size: .8rem; color: rgba(255,255,255,.3); line-height: 1.65; font-weight: 300; }
        .svchips { display: flex; flex-wrap: wrap; gap: .28rem; }
        .sv-chip {
          font-family: 'DM Mono', monospace; font-size: .52rem; letter-spacing: .06em;
          text-transform: uppercase; padding: .18rem .52rem; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.06); color: rgba(255,255,255,.22);
        }

        @media(max-width:860px) {
        .a-grid { grid-template-columns: 1fr; gap: 3rem; }
        .svc-list { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="about" className="about" ref={ref}>
        <div className="noise" />
        <div className="a-wrap">

          {/* Header */}
          <div className="a-header">
            <div className={`fu${v ? " in" : ""}`}><span className="eyebrow">About Me</span></div>
            <h2 className={`a-h2 fu d1${v ? " in" : ""}`}>Creative developer</h2>
          </div>

          {/* 50/50 grid */}
          <div className="a-grid">

            {/* Left — bio */}
            <div className={`a-bio-wrap fu d2${v ? " in" : ""}`}>
              <p className="a-bio">
I am a <b>UI-focused developer</b> specializing in Power BI dashboards and modern web interfaces. I transform <b>complex data</b> into clear, actionable insights through intuitive visualization, designing in <b>Figma</b> and building pixel-perfect, responsive experiences.
              </p>
              <p className="a-pull">
                "I don't just build — I think about the person who'll use it, and what will make their experience feel effortless and clear."
              </p>
            </div>

            {/* Right — services */}
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