import { useState, useEffect } from "react";

export default function Loader({ done }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (done) {
      setProgress(100);
      return;
    }
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) return prev;
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [done]);

  return (
    <>
      <style>{`
        .ldr {
          position: fixed; inset: 0; z-index: 9999;
          background: #060609;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          pointer-events: all;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
          transition: clip-path 1.2s cubic-bezier(0.85, 0, 0.15, 1);
          overflow: hidden;
        }
        .ldr.done {
          clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 0%);
          pointer-events: none;
        }

        /* ── Modern Ring ── */
        .ldr-ring {
          position: relative;
          width: 180px; height: 180px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 2rem;
        }
        .ldr-ring-svg {
          position: absolute; inset: 0;
          transform: rotate(-90deg);
        }
        .ldr-ring-base {
          fill: none;
          stroke: rgba(123, 47, 247, 0.05);
          stroke-width: 2;
        }
        .ldr-ring-progress {
          fill: none;
          stroke: #7B2FF7;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 502; /* 2 * PI * 80 */
          stroke-dashoffset: ${502 - (502 * progress) / 100};
          transition: stroke-dashoffset 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          filter: drop-shadow(0 0 10px rgba(123, 47, 247, 0.6));
        }

        .ldr-num {
          font-family: 'DM Mono', monospace;
          font-size: 2.8rem; font-weight: 300;
          color: #fff; letter-spacing: -0.05em;
          display: flex; align-items: baseline;
        }
        .ldr-num span { font-size: 1rem; opacity: 0.3; margin-left: 2px; }

        /* ── Staggered Loading Text ── */
        .ldr-txt-wrap {
          display: flex; gap: 0.4rem;
        }
        .ldr-char {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.4em; text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          animation: char-glow 2s infinite;
          animation-delay: var(--d);
        }
        @keyframes char-glow {
          0%, 100% { color: rgba(255, 255, 255, 0.2); transform: translateY(0); filter: blur(0); }
          50% { color: #fff; transform: translateY(-3px); filter: drop-shadow(0 0 5px #7B2FF7); }
        }

        /* ── Background Subtle Glow ── */
        .ldr-glow {
          position: absolute;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(123, 47, 247, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
          animation: bg-pulse 4s infinite alternate ease-in-out;
        }
        @keyframes bg-pulse {
          from { transform: scale(1); opacity: 0.5; }
          to { transform: scale(1.3); opacity: 0.8; }
        }
      `}</style>

      <div className={`ldr${done ? " done" : ""}`}>
        <div className="ldr-glow" />
        
        <div className="ldr-ring">
          <svg className="ldr-ring-svg" viewBox="0 0 180 180">
            <circle className="ldr-ring-base" cx="90" cy="90" r="80" />
            <circle className="ldr-ring-progress" cx="90" cy="90" r="80" />
          </svg>
          <div className="ldr-num">
            {progress}<span>%</span>
          </div>
        </div>

        <div className="ldr-txt-wrap">
          {"LOADING".split("").map((c, i) => (
            <span key={i} className="ldr-char" style={{ "--d": `${i * 0.1}s` }}>{c}</span>
          ))}
        </div>
      </div>
    </>
  );
}
