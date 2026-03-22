export const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

*,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: #060609; color: #fff; overflow-x: hidden; font-family: 'DM Sans', sans-serif; }
::selection { background: rgba(123,47,247,.18); color: #fff; }
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: #060609; }
::-webkit-scrollbar-thumb { background: rgba(123,47,247,.3); border-radius: 99px; }

.noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 1;
  opacity: .4; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.06'/%3E%3C/svg%3E");
}

.eyebrow {
  font-family: 'DM Mono', monospace; font-size: .63rem; letter-spacing: .22em;
  text-transform: uppercase; color: rgba(255,255,255,.26);
  display: inline-flex; align-items: center; gap: .6rem;
}
.eyebrow::before { content: ''; width: 16px; height: 1px; background: rgba(255,255,255,.14); display: block; }

.chip {
  font-family: 'DM Mono', monospace; font-size: .57rem; letter-spacing: .06em;
  text-transform: uppercase; padding: .24rem .68rem;
  border: 1px solid rgba(255,255,255,.08); color: rgba(255,255,255,.28); border-radius: 999px;
}

.fu { opacity: 0; transform: translateY(20px); transition: opacity .72s cubic-bezier(.22,1,.36,1), transform .72s cubic-bezier(.22,1,.36,1); }
.fu.in { opacity: 1; transform: translateY(0); }
.fu.d1 { transition-delay: .1s; }
.fu.d2 { transition-delay: .2s; }
.fu.d3 { transition-delay: .32s; }
.fu.d4 { transition-delay: .44s; }
.fu.d5 { transition-delay: .56s; }
`;