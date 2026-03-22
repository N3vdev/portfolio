import { useState, useRef } from "react";
import { useInView } from "../hooks";

export default function Contact() {
  const ref = useRef(null);
  const v = useInView(ref, .1);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("nevinabraham77@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      <style>{`
        .contact { min-height: 100vh; background: transparent; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; padding: 8rem 2.5rem; }
        .c-grid { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 44px 44px; mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, black, transparent); -webkit-mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, black, transparent); }
        .c-orb { position: absolute; width: 600px; height: 400px; border-radius: 50%; pointer-events: none; background: radial-gradient(ellipse, rgba(123,47,247,.05) 0%, transparent 65%); top: 50%; left: 50%; transform: translate(-50%,-50%); }
        .c-inner { position: relative; z-index: 2; max-width: 1320px; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .c-h2 { font-family: 'Syne', sans-serif; font-size: clamp(2.4rem,6vw,4.4rem); font-weight: 800; color: #fff; line-height: .9; letter-spacing: -.04em; margin: 1.1rem 0 1.5rem; text-shadow: 0 2px 12px rgba(0,0,0,.5); }
        .c-sub { font-family: 'DM Sans', sans-serif; font-size: .93rem; line-height: 1.82; color: rgba(255,255,255,.55); font-weight: 300; }
        .c-right { display: flex; flex-direction: column; gap: .75rem; padding-top: .5rem; }

        /* ── Glass cards ── */
        .email-card {
          display: flex; align-items: center; gap: .9rem;
          background: rgba(8,8,16,0.68);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 18px; padding: 1.1rem 1.4rem; cursor: pointer; position: relative; transition: all .32s;
          box-shadow: 0 4px 20px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.05);
        }
        .email-card:hover { background: rgba(123,47,247,.12); border-color: rgba(123,47,247,.28); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.4), 0 0 20px rgba(123,47,247,.15); }
        .eico { width: 36px; height: 36px; border-radius: 12px; flex-shrink: 0; background: rgba(123,47,247,.18); border: 1px solid rgba(123,47,247,.25); display: flex; align-items: center; justify-content: center; color: rgba(180,130,255,1); }
        .etxt { font-family: 'DM Mono', monospace; font-size: .8rem; letter-spacing: .02em; color: rgba(255,255,255,.82); display: block; text-align: left; }
        .ehint { font-family: 'DM Mono', monospace; font-size: .55rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.28); transition: color .28s; display: block; margin-top: .16rem; }
        .email-card:hover .ehint { color: rgba(180,130,255,.7); }
        .ctoast { position: absolute; top: -2.3rem; left: 50%; transform: translateX(-50%); font-family: 'DM Mono', monospace; font-size: .58rem; letter-spacing: .1em; background: #7B2FF7; color: #fff; padding: .26rem .78rem; border-radius: 999px; white-space: nowrap; opacity: 0; transition: opacity .22s; pointer-events: none; }
        .ctoast.show { opacity: 1; }

        .socials { display: flex; gap: .55rem; }
        .sb {
          height: 44px; padding: 0 1.1rem; border-radius: 12px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(8,8,16,0.65);
          backdrop-filter: blur(16px);
          display: flex; align-items: center; gap: .52rem; color: rgba(255,255,255,.55); text-decoration: none; transition: all .26s; font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .06em; text-transform: uppercase;
          box-shadow: 0 2px 12px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.04);
        }
        .sb:hover { border-color: rgba(123,47,247,.35); color: #fff; background: rgba(123,47,247,.12); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.35), 0 0 14px rgba(123,47,247,.2); }

        .avail-card {
          background: rgba(8,24,16,0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(61,219,133,.18); border-radius: 18px; padding: 1.15rem 1.4rem; display: flex; align-items: center; gap: .9rem;
          box-shadow: 0 4px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(61,219,133,.05);
        }
        .avail-dot { width: 7px; height: 7px; border-radius: 50%; background: #3DDB85; flex-shrink: 0; box-shadow: 0 0 0 0 rgba(61,219,133,.4); animation: pr2 2.6s ease infinite; }
        @keyframes pr2 { 0% { box-shadow: 0 0 0 0 rgba(61,219,133,.35); } 70% { box-shadow: 0 0 0 8px rgba(61,219,133,0); } 100% { box-shadow: 0 0 0 0 rgba(61,219,133,0); } }
        .avail-txt { font-family: 'DM Sans', sans-serif; font-size: .82rem; color: rgba(255,255,255,.55); font-weight: 300; }
        .avail-txt b { color: #3DDB85; font-weight: 500; }
        .c-footer { margin-top: 2rem; font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .15em; text-transform: uppercase; color: rgba(255,255,255,.2); }

        @media(max-width: 760px) {
          .contact { padding: 6rem 1.4rem 4rem; align-items: flex-start; }
          .c-inner { grid-template-columns: 1fr; gap: 2.4rem; }
          .c-h2 { font-size: clamp(2.2rem, 11vw, 3.2rem); margin: .8rem 0 1rem; }
          .c-sub { font-size: .88rem; }
          .c-right { padding-top: 0; gap: .65rem; }
          .email-card { padding: .95rem 1.1rem; }
          .etxt { font-size: .72rem; }
          .socials { flex-wrap: wrap; }
          .sb { flex: 1; justify-content: center; min-width: 100px; }
          .c-footer { margin-top: 1.2rem; }
        }
      `}</style>

      <section id="contact" className="contact" ref={ref}>
        <div className="c-grid" />
        <div className="c-orb" />
        <div className="noise" />

        <div className="c-inner">
          <div>
            <div className={`fu${v ? " in" : ""}`}><span className="eyebrow">Get In Touch</span></div>
            <h2 className={`c-h2 fu d1${v ? " in" : ""}`}>Have a<br />project<br />in mind?</h2>
            <p className={`c-sub fu d2${v ? " in" : ""}`}>
              Let's make it happen — I'm open to freelance work, collaborations, and full-time opportunities.
            </p>
          </div>

          <div className={`c-right fu d2${v ? " in" : ""}`}>
            <div className="avail-card">
              <div className="avail-dot" />
              <div className="avail-txt"><b>Available for work</b></div>
            </div>

            <div style={{ position: "relative" }}>
              <div className="email-card" onClick={copy}>
                <div className="eico">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="etxt">nevinabraham77@gmail.com</span>
                  <span className="ehint">{copied ? "✓ Copied to clipboard" : "Click to copy email"}</span>
                </div>
                <div className={`ctoast${copied ? " show" : ""}`}>Copied!</div>
              </div>
            </div>

            <div>
              <div className="socials">
                <a href="https://github.com/n3vdev" target="_blank" rel="noreferrer" className="sb">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className={`c-footer fu d5${v ? " in" : ""}`}>© 2026 Nevin Abraham</div>
        </div>
      </section>
    </>
  );
}