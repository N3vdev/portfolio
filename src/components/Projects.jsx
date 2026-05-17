import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "../hooks";
import { PROJECTS, getCatStyle } from "../data";
import ProjectIcon from "./ProjectIcon";

// ── CONFIG ───────────────────────────────────────────
const AUTO_INTERVAL = 4000; // ms between auto-advances
// ────────────────────────────────────────────────────

export default function Projects({ isActive = false }) {
  const ref = useRef(null);
  const v = useInView(ref, .04);
  const [ai, setAi] = useState(0);
  const [filter, setFilter] = useState("All");
  const [showFilters, setShowShowFilters] = useState(false);
  const [isListView, setIsListView] = useState(false);
  const [slide, setSlide] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const ts = useRef(null);
  const stripRef = useRef(null);
  const timerRef = useRef(null);

  const filterOptions = ["All", "Website", "Chrome Extension", "Figma", "Power BI"];
  const displayNames = {
    "All": "All Projects",
    "Website": "Websites",
    "Chrome Extension": "Extensions",
    "Figma": "Figma",
    "Power BI": "Power BI"
  };

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  // ── Click outside to close filter ─────────────────
  useEffect(() => {
    const clickOutside = e => {
      if (!e.target.closest(".p-filter")) setShowShowFilters(false);
    };
    if (showFilters) {
      window.addEventListener("click", clickOutside);
    }
    return () => window.removeEventListener("click", clickOutside);
  }, [showFilters]);

  // ── Body Scroll Lock & History for List View ──────
  useEffect(() => {
    if (isListView) {
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent("lock-scroll", { detail: true }));
      // Push state so back button works
      window.history.pushState({ isListView: true }, "");
    } else {
      document.body.style.overflow = "unset";
      window.dispatchEvent(new CustomEvent("lock-scroll", { detail: false }));
    }

    const onPopState = () => {
      // If user presses back, close the list view
      setIsListView(false);
    };

    window.addEventListener("popstate", onPopState);
    return () => { 
      document.body.style.overflow = "unset"; 
      window.dispatchEvent(new CustomEvent("lock-scroll", { detail: false }));
      window.removeEventListener("popstate", onPopState);
    };
  }, [isListView]);

  const closeListView = () => {
    if (isListView) window.history.back();
  };

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (filteredProjects.length <= 1) return;
    timerRef.current = setInterval(() => {
      setAi(prev => {
        const next = (prev + 1) % filteredProjects.length;
        setSlide(true);
        setTimeout(() => setSlide(false), 280);
        return next;
      });
    }, AUTO_INTERVAL);
  }, [filteredProjects.length]);

  const go = useCallback((next) => {
    if (slide || filteredProjects.length <= 1) return;
    const n = ((next % filteredProjects.length) + filteredProjects.length) % filteredProjects.length;
    setSlide(true);
    setTimeout(() => { setAi(n); setSlide(false); }, 300);
    startTimer();
  }, [slide, startTimer, filteredProjects.length]);

  // ── Auto-advance: only run when this page is active ──
  useEffect(() => {
    if (isActive) {
      startTimer();
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, startTimer]);

  // ── Keyboard nav ──────────────────────────────────
  useEffect(() => {
    const k = e => {
      if (e.key === "ArrowRight") go(ai + 1);
      if (e.key === "ArrowLeft")  go(ai - 1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [ai, go]);

  // ── Thumbnail strip scroll indicators ─────────────
  const checkScroll = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const onMouseDown = e => {
    const el = stripRef.current;
    el._drag = true;
    el._startX = e.pageX - el.offsetLeft;
    el._scrollLeft = el.scrollLeft;
  };
  const onMouseMove = e => {
    const el = stripRef.current;
    if (!el._drag) return;
    e.preventDefault();
    el.scrollLeft = el._scrollLeft - (e.pageX - el.offsetLeft - el._startX);
  };
  const onMouseUp = () => { if (stripRef.current) stripRef.current._drag = false; };
  const stripScroll = dir => {
    stripRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        /* ── Section ── */
        .projects {
          height: 100vh;
          background: transparent;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 6rem 0 2rem;
          box-sizing: border-box;
        }
        .p-wrap { max-width: 1320px; margin: 0 auto; padding: 0 2.5rem; width: 100%; position: relative; z-index: 20; }
        
.p-hdr-wrap { flex-shrink: 0; }
.p-ftr-wrap { flex-shrink: 0; margin-top: 0; }

        .p-hdr { display: flex; align-items: flex-end; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap; position: relative; z-index: 200; margin-bottom: 2.5rem; }
        .p-h2 { font-family: 'Syne', sans-serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 700; color: #fff; letter-spacing: -.035em; line-height: 1; margin-top: .75rem; }
        
        .p-hdr-top { display: flex; align-items: flex-end; justify-content: space-between; width: 100%; }
        .p-hdr-actions { display: flex; gap: .8rem; align-items: center; }
        
        .p-counter { font-family: 'DM Mono', monospace; font-size: .65rem; letter-spacing: .1em; color: rgba(255,255,255,.4); padding: .4rem .9rem; border-radius: 999px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; gap: .4rem; backdrop-filter: blur(10px); }
        .p-counter b { color: rgba(255,255,255,.85); }

        .btn-list-all {
          font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 700; letter-spacing: .02em;
          text-transform: uppercase; color: #fff; 
          background: rgba(123, 47, 247, 0.15); 
          border: 1.5px solid rgba(123, 47, 247, 0.8);
          padding: .6rem 1.4rem; border-radius: 999px; cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          flex-shrink: 0;
          backdrop-filter: blur(10px);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: btn-pulse 2s infinite;
        }

        @keyframes btn-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(123, 47, 247, 0.7);
            transform: scale(1);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(123, 47, 247, 0);
            transform: scale(1.03);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(123, 47, 247, 0);
            transform: scale(1);
          }
        }

        .btn-list-all:hover { 
          background: rgba(123, 47, 247, 0.25);
          border-color: #fff;
          transform: translateY(-2px) scale(1.08);
          animation: none; /* Stop pulse on hover for better control */
          box-shadow: 0 8px 25px rgba(123, 47, 247, 0.6);
        }
        .btn-list-all:active { transform: translateY(0) scale(0.95); }
        /* ── Project List View Overlay ── */
        .p-list-view {
          position: fixed; inset: 0; z-index: 9999;
          background: #060609;
          display: flex; flex-direction: column;
          opacity: 0; pointer-events: none; transition: opacity .4s ease;
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .p-list-view.open { opacity: 1; pointer-events: all; }
        
        .pl-hdr {
          position: sticky; top: 0; z-index: 10;
          padding: 1.5rem 2.5rem;
          background: rgba(6,6,9,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between;
        }
        .pl-back {
          font-family: 'Syne', monospace; font-size: 1.2rem;font-weight: 700; color: rgba(255,255,255,0.7);
          display: flex; align-items: center; gap: .5rem; cursor: pointer;
        }

        .pl-back-arrow {
          font-size: 1.7rem; color: rgba(255,255,255,0.7);
        }
        
        .pl-grid {
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 1.5rem; padding: 2rem 2.5rem 4rem;
        }
        .pl-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 1.2rem;
          display: flex; flex-direction: column; gap: 0.8rem;
          transition: transform 0.3s, border-color 0.3s;
        }
        .pl-card:hover { transform: translateY(-5px); border-color: rgba(123,47,247,0.3); }

        .pl-img-box {
          aspect-ratio: 16/9; border-radius: 12px; overflow: hidden;
          background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center;
        }
        .pl-img { width: 100%; height: 100%; object-fit: contain; padding: 1.2rem; }
        .pl-tit { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0.2rem 0 0; }
        .pl-cat { font-family: 'DM Mono', monospace; font-size: .65rem; color: rgba(123,47,247,0.8); text-transform: uppercase; letter-spacing: 0.05em; }
        .pl-desc { font-family: 'DM Sans', sans-serif; font-size: .85rem; color: rgba(255,255,255,0.5); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        .pl-visit {
          margin-top: 0.8rem; padding: 0.75rem; border-radius: 10px;
          background: rgba(123,47,247,0.15); color: #fff; text-align: center;
          font-family: 'DM Mono', monospace; font-size: .7rem; text-decoration: none;
          border: 1px solid rgba(123,47,247,0.3);
          transition: all 0.3s;
        }
        .pl-visit:hover { background: #7B2FF7; box-shadow: 0 4px 15px rgba(123,47,247,0.4); }
        .pl-soon {
           margin-top: auto; padding: 0.5rem; border-radius: 8px;
           background: transparent; color: rgba(255,255,255,0.2); text-align: center;
           font-family: 'DM Mono', monospace; font-size: 0.55rem;
           border: 1px solid rgba(255,255,255,0.05);
        }

        /* ── Filter Dropdown ── */
        .p-filter { position: relative; z-index: 300; }
        .p-filter-btn {
          font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 700; letter-spacing: .02em; 
          color: #fff; padding: .6rem 1.4rem; border-radius: 999px; 
          background: rgba(255, 255, 255, 0.03); border: 1.5px solid rgba(123, 47, 247, 0.6);
          display: flex; align-items: center; gap: .6rem; cursor: pointer; transition: all .4s cubic-bezier(0.2, 1, 0.3, 1);
          backdrop-filter: blur(10px); text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(123, 47, 247, 0.1);
        }
        .p-filter-btn:hover { 
          background: rgba(123, 47, 247, 0.15); 
          border-color: #fff;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(123, 47, 247, 0.4);
        }
        .p-filter-btn:active { transform: translateY(0) scale(0.98); }
        .p-filter-btn i { font-size: .5rem; transition: transform .3s; }
        .p-filter-btn.open i { transform: rotate(180deg); }

        .p-filter-menu {
          position: absolute; top: calc(100% + .5rem); right: 0; 
          background: rgba(16,16,28,0.98); border: 1px solid rgba(123,47,247,0.4);
          border-radius: 16px; padding: .5rem; min-width: 180px;
          backdrop-filter: blur(24px); box-shadow: 0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(123,47,247,0.15);
          opacity: 0; transform: translateY(-10px); pointer-events: none;
          transition: all .3s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .p-filter-menu.open { opacity: 1; transform: translateY(0); pointer-events: all; }
        
        .p-filter-opt {
          font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 700; letter-spacing: .02em;
          color: rgba(255,255,255,0.65); padding: .7rem 1rem; border-radius: 10px;
          cursor: pointer; transition: all .2s; white-space: nowrap; text-transform: uppercase;
        }
        .p-filter-opt:hover { background: rgba(255,255,255,0.08); color: #fff; }
        .p-filter-opt.on { background: rgba(123,47,247,0.25); color: #fff; border: 1px solid rgba(123,47,247,0.5); }

        /* ── Carousel Stage ── */
.p-stage {
  position: relative;
  z-index: 10;
  width: 100%;
  flex: 1;
  min-height: 0; /* KEY: lets flex child shrink below content size */
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  overflow: visible;
  padding: 0.5rem 0;
}
.p-carousel {
  position: relative;
  width: 100%;
  height: 100%; /* fills the flex-shrinkable stage */
  max-height: 420px; /* never get too tall on big monitors */
  min-height: 220px; /* never get too squished */
  display: flex;
  align-items: center;
  justify-content: center;
}

        /* ── Project card ── */
        .pcard {
          position: absolute;
          width: min(900px, 90%);
          height: 100%;
          border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(8,8,16,0.85);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 8px 40px rgba(0,0,0,.5);
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          transition: transform 0.7s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.7s ease;
          opacity: 0;
          pointer-events: none;
          transform: translateX(0) scale(0.6);
          z-index: 1;
          will-change: transform, opacity;
        }

        @media (max-width: 768px) {
          .pcard, .p-filter-menu, .btn-list-all, .projects {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(13, 13, 21, 0.98) !important;
          }
        }

        .pcard::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 10;
          opacity: .25; mix-blend-mode: overlay; border-radius: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }

        /* Statuses */
        .pcard.active {
          opacity: 1;
          pointer-events: all;
          z-index: 10;
          transform: translateX(0) scale(1);
        }
        .pcard.prev {
          opacity: 0.3;
          pointer-events: all;
          z-index: 5;
          transform: translateX(-42%) scale(0.8);
          cursor: pointer;
          filter: blur(2px);
        }
        .pcard.next {
          opacity: 0.3;
          pointer-events: all;
          z-index: 5;
          transform: translateX(75%) scale(0.8);
          cursor: pointer;
          filter: blur(2px);
        }
        .pcard.prev:hover, .pcard.next:hover { opacity: 0.5; }

        /* ── Progress bar ── */
        .pcard-progress {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: rgba(255,255,255,.06); z-index: 11; border-radius: 0 0 24px 24px; overflow: hidden;
        }
        .pcard-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #7B2FF7, #b06aff);
          border-radius: 999px;
          animation: progress-tick ${AUTO_INTERVAL}ms linear infinite;
        }
        @keyframes progress-tick {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Visual half ── */
        .pvis {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          border-right: 1px solid rgba(255,255,255,.07);
          isolation: isolate;
          background: rgba(0,0,0,.18);
        }
        .pvis-bg { position: absolute; inset: 0; transition: background .6s ease; }
        .pvis-dots { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px); background-size: 26px 26px; mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent); -webkit-mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent); }
        .pimg {
          position: relative; z-index: 1;
          width: calc(100% - 1.5rem); height: calc(100% - 1.5rem);
          border-radius: 14px;
          transition: transform .6s cubic-bezier(.22,1,.36,1);
          box-shadow: 0 4px 24px rgba(0,0,0,.4);
        }
        .pico { position: relative; z-index: 1; width: 88px; height: 88px; border-radius: 24px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04); backdrop-filter: blur(8px); }

        /* ── Info half ── */
        .pinfo { display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem 2rem; overflow: hidden; transition: opacity .4s; }
        .pcard:not(.active) .pinfo { opacity: 0; }

        .ptit-row { display: flex; align-items: flex-start; gap: .65rem; flex-wrap: wrap; margin-bottom: .6rem; }
        .ptit { font-family: 'Syne', sans-serif; font-size: clamp(1.2rem,2.2vw,1.6rem); font-weight: 700; color: #fff; line-height: 1.1; letter-spacing: -.03em; margin: 0; text-shadow: 0 1px 8px rgba(0,0,0,.4); }
        .pcat-pill { font-family: 'DM Mono', monospace; font-size: .54rem; letter-spacing: .1em; text-transform: uppercase; padding: .28rem .78rem; border-radius: 999px; white-space: nowrap; margin-top: .28rem; flex-shrink: 0; backdrop-filter: blur(8px); }
        .pdesc { font-family: 'DM Sans', sans-serif; font-size: .82rem; line-height: 1.7; color: rgba(255,255,255,.55); margin-bottom: .8rem; font-weight: 300; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        .ptags { display: flex; flex-wrap: wrap; gap: .32rem; margin-bottom: 1rem; }
        .pinfo .chip { border-color: rgba(255,255,255,.1); color: rgba(255,255,255,.4); background: rgba(255,255,255,.03); font-size: .65rem; padding: .2rem .6rem; }

        /* ── Stage Arrows (Anchored to center) ── */
        .p-stage-nav {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(900px, 90%); /* Same as card width */
          height: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 110;
          pointer-events: none;
        }
        .p-stage-arr {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(8,8,16,0.8);
          border: 1px solid rgba(123,47,247,0.8);
          color: rgba(180,120,255,1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);
          backdrop-filter: blur(12px);
          font-size: 1.2rem;
          box-shadow: 0 0 15px rgba(123,47,247,0.3), inset 0 0 8px rgba(123,47,247,0.2);
          pointer-events: all;
          line-height: 1;
          padding-bottom: 3px; /* Nudge up to counter unicode baseline shift */
        }
        .p-stage-arr.left { transform: translateX(-120%); }
        .p-stage-arr.right { transform: translateX(120%); }

        .p-stage-arr:hover {
          background: #7B2FF7;
          color: #fff;
          transform: translateX(var(--tx)) scale(1.1);
          box-shadow: 0 0 30px rgba(123,47,247,0.7), inset 0 0 12px rgba(255,255,255,0.4);
          border-color: #fff;
        }
        .p-stage-arr.left:hover { --tx: -120%; }
        .p-stage-arr.right:hover { --tx: 120%; }

        /* ── Nav ── */
        .pnav { display: flex; align-items: center; gap: .6rem; margin-top: auto; }
        .pnav .narr { display: none; } /* Hide in-card arrows on desktop */
        
        .narr {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(123,47,247,.45);
          background: rgba(123,47,247,.15);
          color: rgba(180,120,255,1);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .22s; font-size: .88rem; flex-shrink: 0;
          box-shadow: 0 0 12px rgba(123,47,247,.2);
          backdrop-filter: blur(8px);
          line-height: 1; padding-bottom: 2px; /* Center unicode arrow */
        }
        .narr:hover { border-color: #7B2FF7; color: #fff; background: rgba(123,47,247,.35); box-shadow: 0 0 20px rgba(123,47,247,.5); transform: scale(1.08); }
        /* ── Shiny Visit Button ── */
        .bvisit-wrap {
          position: relative;
          border-radius: 999px;
          overflow: hidden;
          flex: 1;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        .bvisit { 
          font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .08em; text-transform: uppercase; color: #fff; text-decoration: none; 
          padding: .65rem 1.3rem; border-radius: 999px; background: rgba(123,47,247,0.15); 
          transition: all .3s cubic-bezier(0.2, 1, 0.3, 1); display: block; position: relative; z-index: 2;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          overflow: hidden;
          text-align: center;
        }
        
        /* Moving shimmer sweep */
        .bvisit::before {
          content: '';
          position: absolute; top: 0; left: -150%; width: 100%; height: 100%;
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(255, 255, 255, 0), 
            rgba(255, 255, 255, 0.3), 
            rgba(255, 255, 255, 0), 
            transparent
          );
          transform: skewX(-25deg);
          animation: shimmer 2.5s infinite;
        }
        @keyframes shimmer {
          0% { left: -150%; }
          40% { left: 150%; }
          100% { left: 150%; }
        }

        .bvisit:hover { 
          background: #7B2FF7; 
          box-shadow: 0 0 25px rgba(123,47,247,0.5), inset 0 0 10px rgba(255,255,255,0.3); 
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-2px);
        }

        .bdis { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.25); padding: .6rem 1.1rem; border-radius: 999px; border: 1px solid rgba(255,255,255,.08); flex: 1; text-align: center; }


        /* ── Thumbnail strip ── */
        .pstrip-wrap { position: relative; }
        .pstrip-btn {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 2;
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.1); background: rgba(6,6,9,.92);
          color: rgba(255,255,255,.55); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .22s; font-size: .78rem; backdrop-filter: blur(8px);
        }
        .pstrip-btn:hover { border-color: #7B2FF7; color: #fff; background: rgba(123,47,247,.2); }
        .pstrip-btn.sleft  { left: -14px; }
        .pstrip-btn.sright { right: -14px; }
        .pstrip-btn.hidden { opacity: 0; pointer-events: none; }
        .pstrip { display: flex; gap: .55rem; overflow-x: auto; scroll-behavior: smooth; padding: 2px 0 6px; cursor: grab; }
        .pstrip:active { cursor: grabbing; }
        .pstrip::-webkit-scrollbar { display: none; }
        .pstrip { -ms-overflow-style: none; scrollbar-width: none; }
        .si {
          flex: 0 0 160px; padding: .9rem 1rem; border-radius: 14px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(8,8,16,0.65);
          backdrop-filter: blur(16px);
          cursor: pointer; transition: all .4s cubic-bezier(.22,1,.36,1); user-select: none;
        }
        .si:hover { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.14); }
        .si.on { flex: 0 0 210px; background: rgba(123,47,247,.12); border-color: rgba(123,47,247,.28); }
        .si-bar { width: 18px; height: 2px; border-radius: 999px; margin-bottom: .5rem; transition: width .28s cubic-bezier(.22,1,.36,1); }
        .si.on .si-bar { width: 32px; }
        .si-num { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .1em; margin-bottom: .38rem; color: rgba(255,255,255,.3); transition: color .22s; }
        .si.on .si-num { color: inherit; }
        .si-tit { font-family: 'Syne', sans-serif; font-size: .8rem; font-weight: 700; color: rgba(255,255,255,.5); line-height: 1.3; transition: color .22s; }
        .si.on .si-tit { color: #fff; }
        .si-cat { font-family: 'DM Mono', monospace; font-size: .58rem; color: rgba(255,255,255,.22); margin-top: .25rem; letter-spacing: .06em; text-transform: uppercase; }

        /* ── Laptop / compact height ── */
        @media(max-height: 850px) and (min-width: 761px) {
          .projects { padding: 4rem 0 1.5rem; }
          .pdesc { -webkit-line-clamp: 3; }
        }


        @media(max-height: 700px) and (min-width: 761px) {
          .projects { padding: 3.5rem 0 1rem; }
          .p-carousel { min-height: 180px; }
          .pdesc { -webkit-line-clamp: 2; }
          .ptags { display: none; }
        }

        /* ── Mobile ── */
        @media(max-width: 760px) {
          .projects { height: 100%; padding: 4.5rem 0 1.5rem; display: flex; flex-direction: column; justify-content: flex-start; overflow: hidden; }
          .p-wrap { position: relative; padding: 0 1.2rem; width: 100%; }
          .p-hdr-wrap { margin-bottom: 0rem; }
          .p-ftr-wrap { display: none; }

          .pl-hdr { padding: 1.5rem 1.2rem; }
          .pl-grid { grid-template-columns: 1fr; padding: 1.2rem 1.2rem 4rem; }
          .pl-img { padding: 0.8rem; }
          .pl-tit { font-size: 1rem; }
          .pl-desc { font-size: 0.78rem; }

          .p-hdr { display: flex; flex-direction: column; gap: 0.6rem; width: 100%; margin-bottom: 0; }

          .p-hdr-actions { 
            display: flex;
            width: 100%; 
            justify-content: space-between; 
            align-items: center; 
            margin-top: 0; 
          }
          
          .p-h2 { font-size: 1.8rem; }
          .btn-list-all { display: block; margin-bottom: 4px; padding: 0.5rem 1.2rem; font-size: 0.7rem; }
          
          .p-stage { position: relative; flex: 1; margin: 0; perspective: none; display: flex; align-items: center; padding: 0.5rem 1rem; min-height: 0; }
          .p-carousel { flex-direction: column; height: 100%; width: 100%; display: flex; align-items: center; justify-content: center; }
          .pcard { 
            position: relative; width: 100%; display: none; 
            height: 100%;
            max-height: 500px;
            min-height: 340px;
            grid-template-columns: 1fr; 
            grid-template-rows: 50% 50%; 
            transform: none !important; opacity: 1 !important; 
            filter: none !important; pointer-events: all !important; margin: 0 auto;
            max-width: 380px; 
            overflow: hidden;
          }
          .pcard.active { display: grid; }
          .pvis { 
            height: 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.07); 
            width: 100%;
          }
          .pimg { padding: 0.2rem; }
          .pinfo { padding: 1rem 1rem; justify-content: flex-start; gap: 0.5rem; }
          .ptit { font-size: 1rem; }
          .pdesc { font-size: 0.75rem; -webkit-line-clamp: 3; margin-bottom: 0.5rem; line-height: 1.5; }
          .p-stage-nav { display: none; }
          .pnav { margin-top: auto; padding-top: 0.5rem; }
          .pnav .narr { display: flex; }
          .p-filter-btn { background: rgba(123, 47, 247, 0.85); border-color: #7B2FF7; padding: 0.5rem 1.2rem; font-size: 0.7rem; box-shadow: 0 4px 15px rgba(123, 47, 247, 0.3); }
          .narr { width: 32px; height: 32px; font-size: 0.75rem; }
          .bvisit, .bdis { padding: 0.5rem 1rem; font-size: 0.55rem; }
          .ptags { display: none; }
        }
      `}</style>

      <section id="projects" className="projects" ref={ref}>
        <div className="noise" />
        
        <div className="p-wrap p-hdr-wrap">
          <div className={`p-hdr fu${v ? " in" : ""}`}>
            <div className="p-hdr-top">
              <div>
                <span className="eyebrow">Selected Work</span>
                <h2 className="p-h2">My Projects</h2>
              </div>
              <button className="btn-list-all" onClick={() => setIsListView(true)}>View List</button>
            </div>
            
            <div className="p-hdr-actions">
              <div className="p-counter">
                <b>{filteredProjects.length > 0 ? String(ai + 1).padStart(2, "0") : "00"}</b>
                <span style={{ color: "rgba(255,255,255,.2)" }}>/</span>
                {String(filteredProjects.length).padStart(2, "0")}
              </div>
              
              <div className="p-filter">
                <button className={`p-filter-btn${showFilters && !isListView ? " open" : ""}`} onClick={() => setShowShowFilters(!showFilters)}>
                  {displayNames[filter]} <i>▼</i>
                </button>
                <div className={`p-filter-menu${showFilters && !isListView ? " open" : ""}`}>
                  {filterOptions.map(opt => (
                    <div 
                      key={opt} 
                      className={`p-filter-opt${filter === opt ? " on" : ""}`}
                      onClick={() => { setFilter(opt); setAi(0); setSlide(false); setShowShowFilters(false); }}
                    >
                      {displayNames[opt]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile List View Overlay ── */}
        <div className={`p-list-view${isListView ? " open" : ""}`}>
          <div className="pl-hdr">
            <div className="pl-back" onClick={closeListView}>
              <span>←</span> Back
            </div>
            <div className="p-filter">
              <button className={`p-filter-btn${showFilters && isListView ? " open" : ""}`} onClick={() => setShowShowFilters(!showFilters)}>
                {displayNames[filter]} <i>▼</i>
              </button>
              <div className={`p-filter-menu${showFilters && isListView ? " open" : ""}`}>
                {filterOptions.map(opt => (
                  <div 
                    key={opt} 
                    className={`p-filter-opt${filter === opt ? " on" : ""}`}
                    onClick={() => { setFilter(opt); setShowShowFilters(false); }}
                  >
                    {displayNames[opt]}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pl-grid">
            {filteredProjects.map(p => {
               const cs = getCatStyle(p.category);
               return (
                <div className="pl-card" key={p.id}>
                  <div className="pl-img-box">
                    {p.image 
                      ? <img src={p.image} alt={p.title} className="pl-img" />
                      : <div style={{ transform: "scale(0.7)" }}><ProjectIcon category={p.category} color={p.color} /></div>
                    }
                  </div>
                  <div className="pl-cat">{p.category}</div>
                  <div className="pl-tit">{p.title}</div>
                  <div className="pl-desc">{p.description}</div>
                  {p.link && p.link !== "#"
                    ? <a href={p.link} target="_blank" rel="noreferrer" className="pl-visit">Visit</a>
                    : <div className="pl-soon">Soon</div>
                  }
                </div>
               );
            })}
          </div>
        </div>

        <div className={`p-stage fu d2${v ? " in" : ""}`}>
          {/* ... stage content ... */}
          {filteredProjects.length > 1 && (
            <div className="p-stage-nav">
              <button className="p-stage-arr left" onClick={() => go(ai - 1)}>←</button>
              <button className="p-stage-arr right" onClick={() => go(ai + 1)}>→</button>
            </div>
          )}
          
          <div className="p-carousel">
            {filteredProjects.length === 0 && (
              <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                No projects found.
              </div>
            )}
            {filteredProjects.map((p, i) => {
              const currentAi = ai >= filteredProjects.length ? 0 : ai;
              let status = "hidden";
              if (i === currentAi) status = "active";
              else if (filteredProjects.length === 2) {
                if (i === (currentAi + 1) % 2) status = "next";
              }
              else if (i === (currentAi - 1 + filteredProjects.length) % filteredProjects.length) status = "prev";
              else if (i === (currentAi + 1) % filteredProjects.length) status = "next";
              
              const cs = getCatStyle(p.category);
              return (
                <div
                  key={p.id}
                  className={`pcard ${status}`}
                  style={{ borderColor: cs.border }}
                  onClick={() => status !== "active" && go(i)}
                  onTouchStart={e => { if (status === "active") ts.current = e.touches[0].clientX; }}
                  onTouchEnd={e => {
                    if (status !== "active" || !ts.current) return;
                    const dx = e.changedTouches[0].clientX - ts.current;
                    if (Math.abs(dx) > 50) go(currentAi + (dx < 0 ? 1 : -1));
                    ts.current = null;
                  }}
                >
                  {status === "active" && filteredProjects.length > 1 && (
                    <div className="pcard-progress">
                      <div className="pcard-progress-fill" key={currentAi} />
                    </div>
                  )}

                  <div className="pvis">
                    {p.image
                      ? <div style={{ width: "calc(100% - 1.5rem)", height: "calc(100% - 1.5rem)", borderRadius: "12px", overflow: "hidden", flexShrink: 0, position: "relative", zIndex: 1, background: "#fff" }}>
                          <img src={p.image} alt={p.title} className="pimg" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                        </div>
                      : <>
                          <div className="pvis-bg" style={{ background: `radial-gradient(ellipse at 50% 50%, ${p.color}18 0%, transparent 65%)` }} />
                          <div className="pvis-dots" />
                          <div className="pico" style={{ background: `${p.color}12`, borderColor: `${p.color}30` }}>
                            <ProjectIcon category={p.category} color={p.color} />
                          </div>
                        </>
                    }
                  </div>

                  <div className="pinfo">
                    <div>
                      <div className="ptit-row">
                        <div className="ptit">{p.title}</div>
                        <div className="pcat-pill" style={{ background: cs.bg, border: `1px solid ${cs.border}`, color: cs.text }}>{p.category}</div>
                      </div>
                      <div className="pdesc">{p.description}</div>
                      <div className="ptags">
                        {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                      </div>
                    </div>
                    
                    <div className="pnav">
                      <button className="narr" onClick={(e) => { e.stopPropagation(); go(ai - 1); }}>←</button>
                      <button className="narr" onClick={(e) => { e.stopPropagation(); go(ai + 1); }}>→</button>
                      {p.link && p.link !== "#"
                        ? <div className="bvisit-wrap" onClick={e => e.stopPropagation()}>
                            <a href={p.link} target="_blank" rel="noreferrer" className="bvisit">Visit ↗</a>
                          </div>
                        : <span className="bdis">Soon</span>
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-wrap p-ftr-wrap">
          <div className={`pstrip-wrap fu d3${v ? " in" : ""}`}>
            <button className={`pstrip-btn sleft${canScrollLeft ? "" : " hidden"}`} onClick={() => stripScroll(-1)}>←</button>
            <button className={`pstrip-btn sright${canScrollRight ? "" : " hidden"}`} onClick={() => stripScroll(1)}>→</button>
            <div className="pstrip" ref={stripRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>
              {filteredProjects.map((pr, i) => {
                const cs2 = getCatStyle(pr.category);
                return (
                  <div key={pr.id} className={`si${i === ai ? " on" : ""}`} onClick={() => go(i)}>
                    <div className="si-bar" style={{ background: i === ai ? cs2.text : "rgba(255,255,255,.1)" }} />
                    <div className="si-num" style={{ color: i === ai ? cs2.text : "rgba(255,255,255,.25)" }}>{pr.num}</div>
                    <div className="si-tit">{pr.title}</div>
                    <div className="si-cat">{pr.category}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}