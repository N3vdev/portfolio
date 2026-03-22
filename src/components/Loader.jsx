export default function Loader({ done }) {
  return (
    <>
      <style>{`
        .loader-wrap {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          pointer-events: none;
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .loader-squares {
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .loader-sq {
          width: 11px;
          height: 11px;
          border-radius: 2px;
          animation: sq-pulse 1.1s ease-in-out infinite;
        }
        .loader-sq:nth-child(1) { animation-delay: 0s;    background: rgba(255,255,255,0.9); }
        .loader-sq:nth-child(2) { animation-delay: 0.18s; background: rgba(123,47,247,0.9);  }
        .loader-sq:nth-child(3) { animation-delay: 0.36s; background: rgba(255,255,255,0.9); }

        @keyframes sq-pulse {
          0%, 100% { transform: scaleY(1);   opacity: 0.7; }
          50%       { transform: scaleY(1.8); opacity: 1;   }
        }

        .loader-txt {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          animation: txt-blink 1.8s ease-in-out infinite;
        }

        @keyframes txt-blink {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.7; }
        }
      `}</style>

      {/* opacity via inline style so it reacts to the done prop */}
      <div className="loader-wrap" style={{ opacity: done ? 0 : 1 }}>
        <div className="loader-squares">
          <div className="loader-sq" />
          <div className="loader-sq" />
          <div className="loader-sq" />
        </div>
        <div className="loader-txt">Loading</div>
      </div>
    </>
  );
}