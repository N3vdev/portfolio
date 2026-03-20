import React, { useEffect, useState, useRef } from 'react'
import GradientButton from '../components/GradientButton'

const STAR_PATH = "M290.361 1.55586L333.686 284.91L333.88 286.179L334.595 285.113L496.712 43.717L530.894 66.1539L354.53 298.389L353.719 299.458L355.031 299.181L644.761 238.164L651.693 276.115L359.086 321.397L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.335L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.684L363.139 630.093L319.819 346.737L319.626 345.469L318.911 346.533L156.783 587.928L122.522 565.048L298.964 333.261L299.777 332.192L298.463 332.469L8.73027 393.473L1.564 354.211L294.405 310.246L295.74 310.046L294.596 309.329L47.5646 154.374L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96535L290.361 1.55586Z"

const SPINNER_PALETTES = [
  [
    { offset: '0%', color: '#c084fc' }, { offset: '33%', color: '#7B2FF7' },
    { offset: '66%', color: '#4f1ab5' }, { offset: '100%', color: '#9d4edd' },
  ],
  [
    { offset: '0%', color: '#a78bfa' }, { offset: '33%', color: '#6d28d9' },
    { offset: '66%', color: '#4338ca' }, { offset: '100%', color: '#818cf8' },
  ],
  [
    { offset: '0%', color: '#e879f9' }, { offset: '33%', color: '#a21caf' },
    { offset: '66%', color: '#7B2FF7' }, { offset: '100%', color: '#c026d3' },
  ],
  [
    { offset: '0%', color: '#d8b4fe' }, { offset: '33%', color: '#9333ea' },
    { offset: '66%', color: '#7e22ce' }, { offset: '100%', color: '#a855f7' },
  ],
]
const roles = ['Frontend Development', 'UI/UX Designs', 'Data Visualization', 'Browser Extensions']

const InteractiveStar = () => {
  const paletteIdxRef = useRef(0)
  const transitioningRef = useRef(false)
  const glowDivRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [showLabel, setShowLabel] = useState(false)
  const [labelText, setLabelText] = useState('')
  const labelTimeoutRef = useRef(null)

  const applyPalette = (idx) => {
    SPINNER_PALETTES[idx].forEach((stop, j) => {
      const el = document.getElementById(`star_stop_${j}`)
      if (el) el.setAttribute('stop-color', stop.color)
    })
  }

  const handleClick = () => {
    if (transitioningRef.current) return
    transitioningRef.current = true
    const next = (paletteIdxRef.current + 1) % SPINNER_PALETTES.length
    paletteIdxRef.current = next
    const path = document.getElementById('star_path')
    if (path) {
      path.style.transition = 'opacity 0.2s ease'
      path.style.opacity = '0'
      setTimeout(() => {
        applyPalette(next)
        path.style.opacity = '1'
        setTimeout(() => { transitioningRef.current = false }, 220)
      }, 220)
    }
    setLabelText(PALETTE_NAMES[next])
    setShowLabel(false)
    requestAnimationFrame(() => setShowLabel(true))
    clearTimeout(labelTimeoutRef.current)
    labelTimeoutRef.current = setTimeout(() => setShowLabel(false), 1500)
  }

  const handleMouseMove = (e) => {
    if (glowDivRef.current) {
      glowDivRef.current.style.left = (e.clientX - 70) + 'px'
      glowDivRef.current.style.top  = (e.clientY - 70) + 'px'
    }
  }

  return (
    <>
      <div ref={glowDivRef} style={{
        position: 'fixed', width: 140, height: 140, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,132,252,0.28) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 9998,
        opacity: isHovered ? 1 : 0, transition: 'opacity 0.2s ease',
        left: -200, top: -200,
      }} />

      <div className="absolute right-[-18%] sm:right-[-10%] lg:right-[-8%] h-screen top-0 flex flex-col justify-center z-10"
        style={{ opacity: 0.55 }}>
        {showLabel && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 30 }}>
            <span key={labelText + Date.now()} style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em',
              textTransform: 'uppercase', color: 'rgba(192,132,252,0.9)',
              animation: 'paletteFade 1.5s ease forwards', whiteSpace: 'nowrap',
            }}>{labelText}</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes paletteFade {
          0%{opacity:0;transform:scale(0.88)} 18%{opacity:1;transform:scale(1)}
          65%{opacity:1} 100%{opacity:0;transform:scale(1.08)}
        }
      `}</style>
    </>
  )
}

const Hero = () => {
  const [phase, setPhase] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleVisible, setRoleVisible] = useState(true)
  const [nameChars, setNameChars] = useState([])
  const NAME = 'Nevin Abraham'

  useEffect(() => {
    const chars = NAME.split('').map((ch, i) => ({ ch, visible: false, i }))
    setNameChars(chars)
    const t1 = setTimeout(() => setPhase(1), 80)
    const t2 = setTimeout(() => {
      setPhase(2)
      chars.forEach((_, i) => {
        setTimeout(() => {
          setNameChars(prev => { const n=[...prev]; if(n[i]) n[i]={...n[i],visible:true}; return n })
        }, i * 45)
      })
    }, 600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false)
      setTimeout(() => { setRoleIndex(i => (i+1) % roles.length); setRoleVisible(true) }, 380)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const ease = 'transition-all duration-700 ease-[cubic-bezier(0.23,1,0.320,1)]'
  const show = phase >= 2

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Curtain */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: '#07030f', zIndex: 50,
        transform: phase >= 1 ? 'translateY(-100%)' : 'translateY(0)',
        transition: phase >= 1 ? 'transform 0.85s cubic-bezier(0.76,0,0.24,1)' : 'none',
      }} />

      <div className="main-container h-screen flex flex-col items-start justify-center relative z-10">


        {/* Hi I'm */}
        <div className={ease}
          style={{ opacity: show?1:0, transform: show?'none':'translateY(20px)', transitionDelay:'0.12s' }}>
          <h1 className="text-2xl lg:text-[2.8vw] font-heading font-semibold leading-none"
            style={{ color: 'rgba(216,180,254,0.5)' }}>Hi, I'm</h1>
        </div>

        {/* Name */}
        <div className="mt-2 mb-6 overflow-hidden">
          <h2 className="text-[14vw] sm:text-[10vw] lg:text-[8vw] font-heading font-bold leading-none tracking-tight text-white">
            {nameChars.map(({ ch, visible, i }) =>
              ch === ' ' ? <span key={i}>&nbsp;</span> : (
                <span key={i} style={{
                  display: 'inline-block',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0) rotateX(0deg)' : 'translateY(55%) rotateX(-35deg)',
                  transition: 'opacity 0.55s cubic-bezier(0.23,1,0.320,1), transform 0.55s cubic-bezier(0.23,1,0.320,1)',
                  color: i >= 6 ? 'transparent' : 'white',
                  WebkitTextStroke: i >= 6 ? '1.5px rgba(139,92,246,0.65)' : undefined,
                }}>{ch}</span>
              )
            )}
          </h2>
        </div>

        {/* Role ticker */}
        <div className={`mb-10 flex items-center gap-3 ${ease}`}
          style={{ opacity: show?1:0, transform: show?'none':'translateY(18px)', transitionDelay:'0.52s' }}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7B2FF7' }} />
          <span className="font-heading font-semibold text-lg lg:text-2xl" style={{
            opacity: roleVisible ? 1 : 0,
            transform: roleVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.38s ease, transform 0.38s ease',
            display: 'inline-block', minWidth: '260px',
            background: 'linear-gradient(90deg, #c084fc 0%, #7B2FF7 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            {roles[roleIndex]}
          </span>
        </div>

        {/* CTA */}
        <div className={`flex flex-wrap items-center gap-4 ${ease}`}
          style={{ opacity: show?1:0, transform: show?'none':'translateY(18px)', transitionDelay:'0.65s' }}>
          <GradientButton
            text="View Projects"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>

        {/* Scroll hint */}
        <div className={`absolute bottom-8 left-6 lg:left-0 flex items-center gap-3 ${ease}`}
          style={{ opacity: show ? 0.4 : 0, transitionDelay: '1.1s' }}>
          <div className="w-px h-10 overflow-hidden">
            <div className="w-full h-full animate-bounce"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.7), transparent)' }} />
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: 'rgba(192,132,252,0.45)' }}>Scroll</span>
        </div>
      </div>

      <div className={ease} style={{ opacity: show?1:0, transitionDelay:'0.3s' }}>
        <InteractiveStar />
      </div>
    </section>
  )
}

export default Hero