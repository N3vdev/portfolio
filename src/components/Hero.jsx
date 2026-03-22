import { useEffect } from "react";
import { useTypewriter } from "../hooks";
import { ROLES } from "../data";

const snapTo = (id) => window.dispatchEvent(new CustomEvent("snapto", { detail: id }));

export default function Hero({ loaded = false }) {
  const role = useTypewriter(ROLES);

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .hero-vignette {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(ellipse 95% 85% at 50% 50%, transparent 35%, #060609 100%);
        }
        .hero-crosshair { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .hero-crosshair::before {
          content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 1px; height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(123,47,247,.07) 25%, rgba(123,47,247,.07) 75%, transparent 100%);
        }
        .hero-crosshair::after {
          content: ''; position: absolute; left: 0; right: 0; top: 50%; transform: translateY(-50%);
          height: 1px;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,.035) 25%, rgba(255,255,255,.035) 75%, transparent 100%);
        }
        .hc {
          position: relative; z-index: 3; max-width: 1320px; width: 100%;
          padding: 0 2.5rem;
          display: grid; grid-template-columns: 1fr 220px; align-items: center; gap: 3.5rem;
        }
        .h-status {
          display: inline-flex; align-items: center; gap: .5rem;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          border-radius: 999px; padding: .35rem .88rem .35rem .5rem; margin-bottom: 2.4rem;
          opacity: 0; transform: translateY(12px);
          transition: opacity .7s ease .05s, transform .7s cubic-bezier(.22,1,.36,1) .05s;
        }
        .h-status.on { opacity: 1; transform: translateY(0); }
        .pulse {
          width: 6px; height: 6px; border-radius: 50%; background: #3DDB85;
          box-shadow: 0 0 0 0 rgba(61,219,133,.4);
          animation: pr 2.6s cubic-bezier(.455,.03,.515,.955) infinite; flex-shrink: 0;
        }
        @keyframes pr {
          0%   { box-shadow: 0 0 0 0   rgba(61,219,133,.35); }
          70%  { box-shadow: 0 0 0 8px rgba(61,219,133,0); }
          100% { box-shadow: 0 0 0 0   rgba(61,219,133,0); }
        }
        .h-status-txt { font-family: 'MDMono', monospace; font-size: .6rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.28); }
        .h-status-txt b { color: #3DDB85; font-weight: 500; }
        .h-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 12vw, 8.8rem);
          font-weight: 800; line-height: .88; letter-spacing: -.045em; color: #fff;
          margin-bottom: 3rem;
          opacity: 0; transform: translateY(28px);
          transition: opacity .88s cubic-bezier(.22,1,.36,1) .16s, transform .88s cubic-bezier(.22,1,.36,1) .16s;
        }
        .h-name.on { opacity: 1; transform: translateY(0); }
        .h-name-2 { display: block; color: rgba(255,255,255,.45); }
        .h-role {
          display: flex; align-items: center; gap: .7rem; margin-bottom: 2.2rem; min-height: 1.9rem;
          opacity: 0; transform: translateY(12px);
          transition: opacity .75s cubic-bezier(.22,1,.36,1) .32s, transform .75s cubic-bezier(.22,1,.36,1) .32s;
        }
        .h-role.on { opacity: 1; transform: translateY(0); }
        .h-divider { width: 26px; height: 1px; background: rgba(255,255,255,.11); flex-shrink: 0; }
        .h-role-txt { font-family: 'DM Mono', monospace; font-size: .76rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.35); }
        .h-role-txt-bold { font-family: 'DM Mono', monospace; font-size: .76rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.7); font-weight: 500; }
        .h-cur {
          display: inline-block; width: 7px; height: .8em; background: #7B2FF7;
          border-radius: 2px; margin-left: 3px; vertical-align: middle;
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .h-cta {
          display: flex; gap: .8rem; align-items: center; flex-wrap: wrap;
          opacity: 0; transform: translateY(12px);
          transition: opacity .75s cubic-bezier(.22,1,.36,1) .56s, transform .75s cubic-bezier(.22,1,.36,1) .56s;
        }
        .h-cta.on { opacity: 1; transform: translateY(0); }
        .btn-fill {
          font-family: 'DM Mono', monospace; font-size: .68rem; letter-spacing: .1em;
          text-transform: uppercase; color: #fff; background: #7B2FF7; border: none;
          padding: .9rem 2rem; border-radius: 999px; cursor: pointer; transition: all .3s;
          box-shadow: 0 4px 24px rgba(123,47,247,.3), inset 0 1px 0 rgba(255,255,255,.1);
        }
        .btn-fill:hover { background: #8c3fff; transform: translateY(-2px); box-shadow: 0 8px 36px rgba(123,47,247,.5), inset 0 1px 0 rgba(255,255,255,.12); }
        .h-scroll {
          position: absolute; bottom: 2.2rem; left: 2.5rem; z-index: 3;
          display: flex; align-items: center; gap: .65rem; cursor: pointer;
          opacity: 0;
          transition: opacity 0.6s ease 1.2s;
        }
        .h-scroll.on { opacity: 1; }
        .sc-track { width: 1px; height: 40px; background: rgba(255,255,255,.06); position: relative; overflow: hidden; border-radius: 999px; }
        .sc-run {
          position: absolute; top: 0; left: 0; width: 1px; background: rgba(123,47,247,.65);
          border-radius: 999px; animation: scr 2s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes scr { 0% { height: 0; top: 0; } 50% { height: 40px; top: 0; } 100% { height: 0; top: 40px; } }
        .sc-lbl { font-family: 'DM Mono', monospace; font-size: .56rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.14); writing-mode: vertical-lr; }
        @media(max-width:800px) {
          .hc { grid-template-columns: 1fr; gap: 2rem; padding: 0 1.5rem; text-align: center; }
          .h-scroll { display: none; }
          .h-name { font-size: clamp(3rem, 10vw, 5rem); line-height: .92; margin-bottom: 2rem; }
          .h-status { margin-bottom: 1.5rem; justify-content: center; }
          .h-role { margin-bottom: 1.5rem; justify-content: center; }
          .h-cta { justify-content: center; }
          .h-role-txt { font-size: .68rem; }
        }
      `}</style>

      <section id="hero" className="hero">
        <div className="hero-vignette" />
        <div className="hero-crosshair" />
        <div className="noise" />

        <div className="hc">
          <div>
            <div className={`h-status${loaded ? " on" : ""}`}>
              <div className="pulse" />
              <span className="h-status-txt"><b>Hello, I'm </b></span>
            </div>
            <h1 className={`h-name${loaded ? " on" : ""}`}>
              Nevin<span className="h-name-2">Abraham</span>
            </h1>

            <p className="h-role-txt">
              I craft experiences that feel seamless and intuitive,
              <div className={`h-role${loaded ? " on" : ""}`}>
                <span className="h-role-txt">whether it's</span>
                <div className="h-divider" />
                <span className="h-role-txt-bold">{role}<span className="h-cur" /></span>
              </div>
            </p>

            <div className={`h-cta${loaded ? " on" : ""}`}>
              <button className="btn-fill" onClick={() => snapTo("projects")}>
                View Projects →
              </button>
            </div>
          </div>
        </div>

        <div className={`h-scroll${loaded ? " on" : ""}`} onClick={() => snapTo("about")}>
          <div className="sc-track"><div className="sc-run" /></div>
          <span className="sc-lbl">Scroll</span>
        </div>
      </section>
    </>
  );
}