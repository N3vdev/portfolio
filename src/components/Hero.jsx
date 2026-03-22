import { useState, useEffect, useRef } from "react";
import { useTypewriter } from "../hooks";
import { ROLES } from "../data";

const VS = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FS = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
  return mix(b, a, h) - k*h*(1.0-h);
}

float blob(vec2 p, vec2 c, float r) {
  return length(p - c) - r;
}

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.48, 0.31, 0.60);
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / min(u_res.x, u_res.y);
  vec2 mouse = (u_mouse - u_res * 0.5) / min(u_res.x, u_res.y);
  float t = u_time * 0.4;

  vec2 b0 = vec2(sin(t*0.7)*0.55, cos(t*0.5)*0.38);
  vec2 b1 = vec2(cos(t*0.6)*0.42, sin(t*0.8)*0.45);
  vec2 b2 = vec2(sin(t*0.9+1.2)*0.38, cos(t*0.4+0.8)*0.3);
  vec2 b3 = vec2(cos(t*0.5+2.1)*0.48, sin(t*0.7+1.5)*0.42);
  vec2 b4 = vec2(sin(t*0.8+0.5)*0.32, cos(t*0.6+2.0)*0.36);
  vec2 b5 = mix(b0, mouse, 0.72);

  float r = 0.22;
  float d0 = blob(uv, b0, r*1.1);
  float d1 = blob(uv, b1, r*0.9);
  float d2 = blob(uv, b2, r*1.2);
  float d3 = blob(uv, b3, r*0.85);
  float d4 = blob(uv, b4, r*1.0);
  float d5 = blob(uv, b5, r*0.7);

  float k = 0.18;
  float d = smin(d0, d1, k);
  d = smin(d, d2, k);
  d = smin(d, d3, k);
  d = smin(d, d4, k);
  d = smin(d, d5, k);

  vec3 bg = vec3(0.024, 0.024, 0.035);

  float dist = length(uv);
  float angle = atan(uv.y, uv.x);
  vec3 col = palette(dist * 0.5 + angle * 0.16 + t * 0.12);

  float glow = exp(-max(d, 0.0) * 9.0) * 0.55;
  float fill = smoothstep(0.012, -0.012, d);
  float shimmer = sin(d * 40.0 + t * 3.0) * 0.04;

  vec3 blobColor = col * (0.55 + shimmer) * 0.8;
  vec3 glowColor = col * 0.25;

  vec3 final = bg + glowColor * glow + blobColor * fill;

  float vig = 1.0 - smoothstep(0.4, 1.1, length(uv));
  final *= vig;

  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233))) * 43758.5453) * 0.03;
  final += grain * 0.4;

  gl_FragColor = vec4(final, 1.0);
}
`;

function initWebGL(canvas) {
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return null;

  const createShader = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };

  const prog = gl.createProgram();
  gl.attachShader(prog, createShader(gl.VERTEX_SHADER, VS));
  gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "a_pos");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  return {
    gl,
    uRes:   gl.getUniformLocation(prog, "u_res"),
    uTime:  gl.getUniformLocation(prog, "u_time"),
    uMouse: gl.getUniformLocation(prog, "u_mouse"),
  };
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  const [on, setOn] = useState(false);
  const canvasRef = useRef(null);
  const glCtx = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  const raf = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    glCtx.current = initWebGL(canvas);

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      if (glCtx.current) {
        glCtx.current.gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      targetMouse.current = { x: e.clientX, y: e.clientY };
    };
    const onTouch = (e) => {
      targetMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouch, { passive: true });

    const loop = (ts) => {
      const { x: tx, y: ty } = targetMouse.current;
      mouse.current.x += (tx - mouse.current.x) * 0.06;
      mouse.current.y += (ty - mouse.current.y) * 0.06;

      const ctx = glCtx.current;
      if (ctx) {
        const { gl, uRes, uTime, uMouse } = ctx;
        gl.uniform2f(uRes,   canvas.width, canvas.height);
        gl.uniform1f(uTime,  ts * 0.001);
        gl.uniform2f(uMouse, mouse.current.x, canvas.height - mouse.current.y);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouch);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => { setTimeout(() => setOn(true), 80); }, []);

  return (
    <>
      <style>{`
        .hero {
          position: relative; min-height: 100vh; display: flex; align-items: center;
          justify-content: center; background: #060609; overflow: hidden;
        }
        .hero-canvas {
          position: absolute; inset: 0; width: 100%; height: 100%;
          z-index: 0; pointer-events: none;
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
        .h-desc {
          font-family: 'DM Sans', sans-serif; font-size: .95rem; line-height: 1.84;
          color: rgba(255,255,255,.26); max-width: 420px; margin-bottom: 2.6rem; font-weight: 300;
          opacity: 0; transform: translateY(12px);
          transition: opacity .75s cubic-bezier(.22,1,.36,1) .44s, transform .75s cubic-bezier(.22,1,.36,1) .44s;
        }
        .h-desc.on { opacity: 1; transform: translateY(0); }
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
        .btn-ghost {
          font-family: 'DM Mono', monospace; font-size: .68rem; letter-spacing: .1em;
          text-transform: uppercase; color: rgba(255,255,255,.4); background: transparent;
          border: 1px solid rgba(255,255,255,.1); padding: .9rem 2rem; border-radius: 999px;
          cursor: pointer; transition: all .26s;
        }
        .btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,.22); background: rgba(255,255,255,.04); }
        .hc-right {
          display: flex; flex-direction: column; gap: .6rem;
          opacity: 0; transform: translateY(20px);
          transition: opacity .82s cubic-bezier(.22,1,.36,1) .64s, transform .82s cubic-bezier(.22,1,.36,1) .64s;
        }
        .hc-right.on { opacity: 1; transform: translateY(0); }
        .ic {
          background: rgba(255,255,255,.024); border: 1px solid rgba(255,255,255,.06);
          border-radius: 18px; padding: 1.1rem 1.3rem; transition: all .28s;
        }
        .ic:hover { background: rgba(255,255,255,.04); border-color: rgba(123,47,247,.17); }
        .ic-lbl { font-family: 'DM Mono', monospace; font-size: .56rem; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.18); margin-bottom: .44rem; }
        .ic-val { font-family: 'Syne', sans-serif; font-size: 1.08rem; font-weight: 700; color: rgba(255,255,255,.8); line-height: 1.15; }
        .ic-sub { font-family: 'DM Sans', sans-serif; font-size: .72rem; color: rgba(255,255,255,.2); margin-top: .22rem; font-weight: 300; }
        .sk-wrap { display: flex; flex-wrap: wrap; gap: .28rem; margin-top: .48rem; }
        .sk { font-family: 'DM Mono', monospace; font-size: .52rem; letter-spacing: .07em; text-transform: uppercase; padding: .2rem .6rem; border: 1px solid rgba(255,255,255,.07); color: rgba(255,255,255,.24); border-radius: 999px; }
        .h-scroll {
          position: absolute; bottom: 2.2rem; left: 2.5rem; z-index: 3;
          display: flex; align-items: center; gap: .65rem; cursor: pointer;
          opacity: 0; animation: sfin 1s ease 1.4s forwards;
        }
        @keyframes sfin { to { opacity: 1; } }
        .sc-track { width: 1px; height: 40px; background: rgba(255,255,255,.06); position: relative; overflow: hidden; border-radius: 999px; }
        .sc-run {
          position: absolute; top: 0; left: 0; width: 1px; background: rgba(123,47,247,.65);
          border-radius: 999px; animation: scr 2s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes scr { 0% { height: 0; top: 0; } 50% { height: 40px; top: 0; } 100% { height: 0; top: 40px; } }
        .sc-lbl { font-family: 'DM Mono', monospace; font-size: .56rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.14); writing-mode: vertical-lr; }
        @media(max-width:800px) {
          .hc { grid-template-columns: 1fr; gap: 2rem; padding: 0 1.5rem; text-align: center; }
          .hc-right { flex-direction: row; flex-wrap: wrap; }
          .ic { flex: 1; min-width: 140px; }
          .h-scroll { display: none; }
          .h-name { font-size: clamp(2.6rem, 11vw, 4.5rem); line-height: .92; margin-bottom: 2rem; }
          .h-status { margin-bottom: 1.5rem; justify-content: center; }
          .h-role { margin-bottom: 1.5rem; justify-content: center; }
          .h-desc { margin-bottom: 1.8rem; font-size: .88rem; max-width: 100%; }
          .h-cta { justify-content: center; }
          .h-role-txt { font-size: .68rem; }
          .sk-wrap { justify-content: center; }
        }
      `}</style>

      <section id="hero" className="hero">
        <canvas className="hero-canvas" ref={canvasRef} />
        <div className="hero-vignette" />
        <div className="hero-crosshair" />
        <div className="noise" />

        <div className="hc">
          <div>
            <div className={`h-status${on ? " on" : ""}`}>
              <div className="pulse" />
              <span className="h-status-txt"><b>Hello, I'm </b></span>
            </div>
            <h1 className={`h-name${on ? " on" : ""}`}>
              Nevin<span className="h-name-2">Abraham</span>
            </h1>

            <p className="h-role-txt">
              I craft experiences that feel seamless and intuitive,
              <div className={`h-role${on ? " on" : ""}`}>
                <span className="h-role-txt">whether it's</span>
                <div className="h-divider" />
                <span className="h-role-txt-bold">{role}<span className="h-cur" /></span>
              </div>
            </p>

            <div className={`h-cta${on ? " on" : ""}`}>
              <button
                className="btn-fill"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects →
              </button>
            </div>
          </div>
        </div>

        <div className="h-scroll" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
          <div className="sc-track"><div className="sc-run" /></div>
          <span className="sc-lbl">Scroll</span>
        </div>
      </section>
    </>
  );
}