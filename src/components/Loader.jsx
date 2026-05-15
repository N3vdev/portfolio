export default function Loader({ done }) {
  return (
    <>
      <style>{`
        .ldr {
          position: fixed; inset: 0; z-index: 9999;
          background: linear-gradient(135deg, #0d001f 0%, #3b0d82 40%, #7B2FF7 72%, #c084fc 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem;
          pointer-events: none;
          /* 5-point polygon: top-left corner duplicated as first + last point so
             the diagonal sweep can split them apart during the exit transition */
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
          transition: clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        /* Exit: first point races to the right, last point races downward —
           together they create a diagonal line that sweeps top-left → bottom-right */
        .ldr.done {
          clip-path: polygon(210% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 210%);
        }

        .ldr-bars {
          display: flex; align-items: flex-end; gap: 6px; height: 54px;
        }
        .ldr-bar {
          width: 5px; border-radius: 3px; background: rgba(0,0,0,0.75);
          animation: lbar 1s ease-in-out infinite;
        }
        /* Each bar's max height grows left → right (small to big) */
        .ldr-bar:nth-child(1) { --mh: 12px; animation-delay: 0s;    }
        .ldr-bar:nth-child(2) { --mh: 22px; animation-delay: 0.12s; }
        .ldr-bar:nth-child(3) { --mh: 34px; animation-delay: 0.24s; }
        .ldr-bar:nth-child(4) { --mh: 44px; animation-delay: 0.36s; }
        .ldr-bar:nth-child(5) { --mh: 54px; animation-delay: 0.48s; }

        @keyframes lbar {
          0%, 100% { height: 5px;        opacity: 0.35; }
          50%       { height: var(--mh); opacity: 1;    }
        }

        .ldr-txt {
          font-family: 'Syne', sans-serif;
          font-size: 1rem; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: #000;
        }
      `}</style>

      <div className={`ldr${done ? " done" : ""}`}>
        <div className="ldr-bars">
          {[1,2,3,4,5].map(i => <div key={i} className="ldr-bar" />)}
        </div>
        <div className="ldr-txt">Loading</div>
      </div>
    </>
  );
}
