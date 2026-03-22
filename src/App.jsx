import { useState, useEffect, useRef, useCallback } from "react";
import { globalStyles } from "./styles/global";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import Loader   from "./components/Loader";
import { PROJECTS } from "./data";

const VS = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;
const FS = `
precision highp float;
uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_mouse;
uniform float u_sx0;
uniform float u_sx1;
uniform float u_sx2;
uniform float u_sx3;
uniform float u_sx4;
uniform float u_sx5;

float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float blob(vec2 p,vec2 c,float r){return length(p-c)-r;}
vec3 palette(float t){
  vec3 a=vec3(.5,.5,.5),b=vec3(.5,.5,.5),c=vec3(1.,1.,1.),d=vec3(.48,.31,.60);
  return a+b*cos(6.28318*(c*t+d));
}
void main(){
  vec2 uv=(gl_FragCoord.xy-u_res*.5)/min(u_res.x,u_res.y);
  vec2 mouse=(u_mouse-u_res*.5)/min(u_res.x,u_res.y);
  float t=u_time*.4;
  vec2 b0=vec2(sin(t*.7)*.55+u_sx0,cos(t*.5)*.38);
  vec2 b1=vec2(cos(t*.6)*.42+u_sx1,sin(t*.8)*.45);
  vec2 b2=vec2(sin(t*.9+1.2)*.38+u_sx2,cos(t*.4+.8)*.3);
  vec2 b3=vec2(cos(t*.5+2.1)*.48+u_sx3,sin(t*.7+1.5)*.42);
  vec2 b4=vec2(sin(t*.8+.5)*.32+u_sx4,cos(t*.6+2.)*.36);
  vec2 b5=mix(b0,mouse,.72); b5.x+=u_sx5;
  float r=.22;
  float d=smin(smin(smin(smin(smin(blob(uv,b0,r*1.1),blob(uv,b1,r*.9),.18),blob(uv,b2,r*1.2),.18),blob(uv,b3,r*.85),.18),blob(uv,b4,r*1.),.18),blob(uv,b5,r*.7),.18);
  vec3 bg=vec3(.024,.024,.035);
  vec3 col=palette(length(uv)*.5+atan(uv.y,uv.x)*.16+t*.12);
  vec3 final=bg+col*.25*exp(-max(d,0.)*9.)*.55+col*(.55+sin(d*40.+t*3.)*.04)*.8*smoothstep(.012,-.012,d);
  final*=1.-smoothstep(.4,1.1,length(uv));
  final+=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)*.03*.4;
  gl_FragColor=vec4(final,1.);
}
`;

function initWebGL(canvas) {
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return null;
  const mk = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s,src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, mk(gl.VERTEX_SHADER, VS));
  gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(prog); gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "a_pos");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  return {
    gl,
    uRes:   gl.getUniformLocation(prog,"u_res"),
    uTime:  gl.getUniformLocation(prog,"u_time"),
    uMouse: gl.getUniformLocation(prog,"u_mouse"),
    uSx:    [0,1,2,3,4,5].map(i=>gl.getUniformLocation(prog,`u_sx${i}`)),
  };
}

function sectionToTargetX(idx) {
  return [0, -0.38, 0.38, -0.38][idx] ?? 0;
}

function BlobCanvas({ sectionIndex, loaded = false }) {
  const canvasRef   = useRef(null);
  const glCtx       = useRef(null);
  const mouse       = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  const blobTargetX = useRef(0);
  const blobX       = useRef([0,0,0,0,0,0]);
  const raf         = useRef();

  useEffect(() => {
    blobTargetX.current = sectionToTargetX(sectionIndex);
  }, [sectionIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    glCtx.current = initWebGL(canvas);
    const resize = () => {
      canvas.width = window.innerWidth; canvas.height = window.innerHeight;
      glCtx.current?.gl.viewport(0,0,canvas.width,canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);
    const onMM = e => { targetMouse.current = { x: e.clientX, y: e.clientY }; };
    const onT  = e => { targetMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
    window.addEventListener("mousemove", onMM);
    window.addEventListener("touchmove", onT, { passive: true });
    const LAG = [0.055,0.038,0.028,0.020,0.015,0.011];
    const loop = (ts) => {
      mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.06;
      mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.06;
      const bx = blobX.current;
      bx[0] += (blobTargetX.current - bx[0]) * LAG[0];
      for (let i=1;i<6;i++) bx[i] += (bx[i-1]-bx[i])*LAG[i];
      const ctx = glCtx.current;
      if (ctx) {
        const { gl,uRes,uTime,uMouse,uSx } = ctx;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, ts*0.001);
        gl.uniform2f(uMouse, mouse.current.x, canvas.height - mouse.current.y);
        for (let i=0;i<6;i++) gl.uniform1f(uSx[i], bx[i]);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMM);
      window.removeEventListener("touchmove", onT);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position:"fixed", inset:0, width:"100%", height:"100%",
      zIndex:0, pointerEvents:"none",
      transform: loaded ? "scale(1)" : "scale(3)",
      transition: loaded
        ? "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)"
        : "none",
      transformOrigin: "center center",
    }} />
  );
}

const SECTIONS = ["hero","about","projects","contact"];
const TRANSITION_MS = 900;
const COOLDOWN_MS   = 950;
const WHEEL_THRESH  = 30;

export default function App() {
  const [loaded, setLoaded]       = useState(false);  // loader done?
  const [idx, setIdx]             = useState(0);
  const [prevIdx, setPrevIdx]     = useState(null);
  const [dir, setDir]             = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const cooldown  = useRef(false);
  const touchY    = useRef(null);
  const wheelAcc  = useRef(0);
  const wheelTimer= useRef(null);

  // ── Loader: preload all project images + fonts dynamically ──
  // Just add a new entry to PROJECTS in data/index.js — this picks it up automatically
  useEffect(() => {
    const preloadImages = PROJECTS
      .filter(p => p.image)
      .map(p => new Promise(res => {
        const img = new Image();
        img.onload  = res;
        img.onerror = res; // don't block if one image fails
        img.src = p.image;
      }));

    const minDelay = new Promise(res => setTimeout(res, 1500));
    const fonts    = document.fonts ? document.fonts.ready : Promise.resolve();

    Promise.all([minDelay, fonts, ...preloadImages]).then(() => setLoaded(true));
  }, []);

  const goTo = useCallback((next) => {
    const clamped = Math.max(0, Math.min(SECTIONS.length - 1, next));
    if (clamped === idx || cooldown.current) return;
    cooldown.current = true;
    setDir(clamped > idx ? 1 : -1);
    setPrevIdx(idx);
    setIdx(clamped);
    setTransitioning(true);
    setTimeout(() => {
      setPrevIdx(null);
      setTransitioning(false);
      cooldown.current = false;
    }, COOLDOWN_MS);
  }, [idx]);

  // Wheel
  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      wheelAcc.current += e.deltaY;
      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => { wheelAcc.current = 0; }, 200);
      if (Math.abs(wheelAcc.current) >= WHEEL_THRESH) {
        goTo(idx + (wheelAcc.current > 0 ? 1 : -1));
        wheelAcc.current = 0;
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goTo, idx]);

  // Touch
  useEffect(() => {
    const onStart = e => { touchY.current = e.touches[0].clientY; };
    const onEnd   = e => {
      if (touchY.current === null) return;
      const dy = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) goTo(idx + (dy > 0 ? 1 : -1));
      touchY.current = null;
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend",   onEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend",   onEnd);
    };
  }, [goTo, idx]);

  // Keyboard
  useEffect(() => {
    const onKey = e => {
      if (e.key === "ArrowDown" || e.key === "PageDown") goTo(idx + 1);
      if (e.key === "ArrowUp"   || e.key === "PageUp")   goTo(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, idx]);

  // snapto — fired by child components
  useEffect(() => {
    const onSnapTo = e => {
      const i = SECTIONS.indexOf(e.detail);
      if (i !== -1) goTo(i);
    };
    window.addEventListener("snapto", onSnapTo);
    return () => window.removeEventListener("snapto", onSnapTo);
  }, [goTo]);

  // Allow Navbar goTo
  const navGoTo = useCallback((id) => {
    const i = SECTIONS.indexOf(id);
    if (i !== -1) goTo(i);
  }, [goTo]);

  const sections = [
    <Hero     key="hero"     loaded={loaded} />,
    <About    key="about"    />,
    <Projects key="projects" />,
    <Contact  key="contact"  />,
  ];

  return (
    <>
      <style>{globalStyles}</style>
      <style>{`
        html, body { overflow: hidden; height: 100%; }

        .snap-root {
          position: fixed;
          inset: 0;
          overflow: hidden;
        }

        .snap-page {
          position: absolute;
          inset: 0;
          will-change: transform, opacity;
          overflow: hidden;
          transform: translateY(100%);
          opacity: 0;
          pointer-events: none;
        }

        .snap-page.is-enter {
          animation: page-enter-down ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .snap-page.is-enter.from-above {
          animation: page-enter-up ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .snap-page.is-exit {
          animation: page-exit-up ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .snap-page.is-exit.to-below {
          animation: page-exit-down ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .snap-page.is-active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        @keyframes page-enter-down {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; pointer-events: auto; }
        }
        @keyframes page-enter-up {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; pointer-events: auto; }
        }
        @keyframes page-exit-up {
          from { transform: translateY(0);     opacity: 1; }
          to   { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes page-exit-down {
          from { transform: translateY(0);    opacity: 1; }
          to   { transform: translateY(100%); opacity: 0; }
        }

        .scroll-dots {
          position: fixed;
          right: 1.6rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 200;
          display: flex;
          flex-direction: column;
          gap: .55rem;
          align-items: center;
        }
        .scroll-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: rgba(255,255,255,.18);
          cursor: pointer;
          transition: all .4s cubic-bezier(.22,1,.36,1);
          border: 1px solid transparent;
        }
        .scroll-dot.on {
          background: #7B2FF7;
          height: 18px;
          box-shadow: 0 0 8px rgba(123,47,247,.6);
        }
        .scroll-dot:hover:not(.on) { background: rgba(255,255,255,.4); }

        .scroll-progress {
          position: fixed;
          top: 0; left: 0;
          height: 2px;
          background: linear-gradient(90deg, #7B2FF7, #a855f7);
          z-index: 300;
          transition: width ${TRANSITION_MS}ms cubic-bezier(0.76,0,0.24,1);
          box-shadow: 0 0 8px rgba(123,47,247,.5);
        }

        @media(max-width:600px) { .scroll-dots { display: none; } }
      `}</style>

      {/* Blob canvas — always visible, even during loading */}
      <BlobCanvas sectionIndex={idx} loaded={loaded} />

      {/* Loader — sits above blob, fades out when done */}
      <Loader done={loaded} />

      {/* Progress bar + dots + navbar — hidden until loaded */}
      <div className="scroll-progress" style={{
        width: `${(idx / (SECTIONS.length - 1)) * 100}%`,
        opacity: loaded ? 1 : 0,
        transition: `opacity 0.6s ease, width ${TRANSITION_MS}ms cubic-bezier(0.76,0,0.24,1)`,
      }} />

      <div className="scroll-dots" style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}>
        {SECTIONS.map((id, i) => (
          <div
            key={id}
            className={`scroll-dot${i === idx ? " on" : ""}`}
            onClick={() => goTo(i)}
            title={id.charAt(0).toUpperCase() + id.slice(1)}
          />
        ))}
      </div>

      <div style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}>
        <Navbar active={SECTIONS[idx]} onNav={navGoTo} />
      </div>

      {/* Pages — slide in only after loaded */}
      <div className="snap-root" style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
        {sections.map((section, i) => {
          const isActive = i === idx;
          const isExit   = i === prevIdx;

          let cls = "snap-page";
          if (isActive) {
            cls += transitioning
              ? ` is-enter${dir === -1 ? " from-above" : ""}`
              : " is-active";
          } else if (isExit) {
            cls += ` is-exit${dir === -1 ? " to-below" : ""}`;
          }

          return (
            <div key={SECTIONS[i]} className={cls}
              style={{ zIndex: isActive ? 2 : isExit ? 1 : 0 }}
            >
              {section}
            </div>
          );
        })}
      </div>
    </>
  );
}