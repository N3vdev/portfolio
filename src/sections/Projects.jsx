import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    id: 2,
    title: 'Sales Overview Dashboard',
    category: 'Power BI',
    image: '/PBI.jpg',
    year: '2024',
    description: 'A full-featured sales analytics solution tracking revenue trends, product performance, return rates, and regional insights — built on a dark, high-contrast dark theme for executive clarity.',
    tags: ['Power BI', 'DAX', 'Sales Analytics', 'Dark Theme'],
    imageKey: 'pbi',
    color: '#7B2FF7',
    link: '#',
  },
  {
    id: 3,
    title: 'Keyword Highlighter',
    category: 'Chrome Extension',
    image: 'Keyword Highlighter Banner.png',
    year: '2024',
    description: 'A browser extension that highlights configurable keyword groups across any webpage in real-time. Toggle groups on/off, import/export settings, and works instantly with Manifest V3.',
    tags: ['Chrome Extension', 'JavaScript', 'Manifest V3', 'Browser Tools'],
    imageKey: 'extension',
    color: '#FF4D6D',
    link: 'https://chromewebstore.google.com/detail/multi-keyword-highlighter/onnipamlflmhobjelheonbddcbmgfnco?hl=en&authuser=0',
  },
    {
    id: 1,
    title: 'Recruitment Dashboard',
    category: 'Figma',
    year: '2024',
    description: 'A comprehensive recruitment analytics dashboard built for HR teams. Features real-time candidate tracking, application trend analysis, and offer pipeline management — all in one view.',
    tags: ['Power BI', 'Figma', 'Data Viz', 'HR Analytics'],
    image: '/Figma Dashboard.jpg',
    imageKey: 'figma',
    color: '#2F86F7',
    link: 'https://www.figma.com/design/wQv2zexn2WggTxbhzlJyrm/Nevin-Co?node-id=0-1&t=BeOmwJmRTegqatpy-1',
  },
  {
    id: 4,
    title: 'TruckVault Landing Page',
    category: 'Frontend Development',
    year: '2025',
    description: 'Conversion-optimised landing page for a Pan-India freight logistics platform. Clean hero with live tracking UI, trust signals, responsive stats grid, and smooth scroll interactions.',
    tags: ['React', 'Tailwind CSS', 'Figma', 'Landing Page'],
    image: 'Truckvault.png',
    imageKey: 'truckvault',
    color: '#2FF7ED',
    link: 'https://n3vdev.github.io/truckvault/',
  },
  {
    id: 5,
    title: 'Button Dodger',
    category: 'Chrome Extension',
    image: '/get-rekt.png',
    year: '2025',
    description: 'A playful browser extension that makes buttons dodge your cursor, turning simple clicks into a hilarious challenge. Perfect for pranking friends and adding chaos to everyday browsing.',
    tags: ['JavaScript', 'Chrome Extension', 'Fun Tool', 'UI Manipulation'],
    imageKey: 'getrekt',
    color: '#FF2E2E',
    link: 'https://chromewebstore.google.com/detail/get-rekt/fghnhikhkjncimoiipnbpbjcbkpalljg?hl=en&authuser=0',
  },
]


const gradients = {
  figma:      'linear-gradient(135deg, #060d1f 0%, #0a1628 60%, #111c35 100%)',
  pbi:        'linear-gradient(135deg, #0d0618 0%, #120820 60%, #1a0d2a 100%)',
  extension:  'linear-gradient(135deg, #180509 0%, #1a050d 60%, #200a10 100%)',
  truckvault: 'linear-gradient(135deg, #041212 0%, #061518 60%, #0a1a1a 100%)',
  getrekt:    'linear-gradient(135deg, #1a0404 0%, #200505 60%, #260808 100%)',
}

// Desktop side card
const SideCard = ({ project, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left rounded-2xl overflow-hidden border transition-all duration-400 flex-shrink-0 ${
      isActive
        ? 'border-white/12 scale-[1.015] shadow-xl'
        : 'border-white/04 opacity-50 hover:opacity-75 hover:border-white/08'
    }`}
    style={{ background: gradients[project.imageKey] ?? gradients.extension }}
  >
    <div className="h-[2px] w-full transition-all duration-500"
      style={{ background: isActive ? project.color : 'transparent' }} />
    <div className="p-5">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5"
            style={{ color: project.color }}>{project.category}</p>
          <h4 className="font-heading font-bold text-base text-white leading-tight">{project.title}</h4>
        </div>
        <span className="text-[11px] text-white/25 flex-shrink-0 mt-0.5">{project.year}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 2).map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded text-[10px] text-white/35 border border-white/06">
            {tag}
          </span>
        ))}
        {project.tags.length > 2 && (
          <span className="px-2 py-0.5 rounded text-[10px] text-white/20">+{project.tags.length - 2}</span>
        )}
      </div>
    </div>
  </button>
)

// Mobile mini card — 2-col grid
const MobileCard = ({ project, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left rounded-xl overflow-hidden border transition-all duration-300 ${
      isActive
        ? 'border-white/12'
        : 'border-white/04 opacity-55 hover:opacity-75'
    }`}
    style={{ background: gradients[project.imageKey] ?? gradients.extension }}
  >
    <div className="h-[2px] w-full transition-all duration-500"
      style={{ background: isActive ? project.color : 'transparent' }} />
    <div className="p-3">
      <p className="text-[9px] font-bold tracking-[0.18em] uppercase mb-0.5"
        style={{ color: project.color }}>{project.category}</p>
      <h4 className="font-heading font-bold text-[11px] text-white leading-tight mb-1">{project.title}</h4>
      <span className="text-[9px] text-white/20">{project.year}</span>
    </div>
  </button>
)

const Projects = () => {
  const { ref, visible } = useReveal(0.05)
  const [activeIdx, setActiveIdx] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')
  const timerRef = useRef(null)
  const featuredRef = useRef(null)
  const [featuredHeight, setFeaturedHeight] = useState(560)
  const AUTO_INTERVAL = 4200

  // Derive unique categories from projects data
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  // Filtered list — always includes at least the active project's category
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  // Keep activeIdx in bounds when filter changes
  const safeIdx = Math.min(activeIdx, filtered.length - 1)
  const active = filtered[safeIdx]

  // Track featured panel's rendered height so side column never exceeds it
  useEffect(() => {
    if (!featuredRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      setFeaturedHeight(entry.contentRect.height)
    })
    ro.observe(featuredRef.current)
    return () => ro.disconnect()
  }, [])

  const goTo = useCallback((i) => {
    if (i === activeIdx || transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setActiveIdx(i)
      setTransitioning(false)
    }, 320)
  }, [activeIdx, transitioning])

  const handleSelect = (i) => {
    setAutoPlay(false)
    goTo(i)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setAutoPlay(true), 12000)
  }

  const handleFilterChange = (cat) => {
    setActiveFilter(cat)
    setActiveIdx(0)
    setAutoPlay(true)
  }

  const prev = () => handleSelect((safeIdx - 1 + filtered.length) % filtered.length)
  const next = () => handleSelect((safeIdx + 1) % filtered.length)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      goTo((safeIdx + 1) % filtered.length)
    }, AUTO_INTERVAL)
    return () => clearInterval(interval)
  }, [autoPlay, safeIdx, filtered.length, goTo])

  return (
    <section id="projects" ref={ref} className="py-28 lg:py-36">
      <div className="main-container">

        {/* ── Header ─────────────────────────────────────── */}
        <div
          className="mb-5 lg:mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(28px)',
            transition: 'all 0.7s cubic-bezier(0.23,1,0.320,1)',
          }}
        >
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-white/15" />
                <span className="text-[10px] font-medium text-white/30 tracking-[0.32em] uppercase">Work</span>
              </div>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-none">
                Projects
              </h2>
            </div>

            {/* Nav arrows — desktop only */}
            <div className="hidden lg:flex items-center gap-3 mb-1.5">
              <button onClick={prev}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-white/25 hover:text-white/80 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3L5 7l4 4"/></svg>
              </button>
              <button onClick={next}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-white/25 hover:text-white/80 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 3l4 4-4 4"/></svg>
              </button>
            </div>
          </div>

          {/* Mobile: dots + counter + arrows */}
          <div className="flex lg:hidden items-center gap-2 mt-4">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  width: safeIdx === i ? '18px' : '5px',
                  height: '5px',
                  background: safeIdx === i ? active.color : 'rgba(255,255,255,0.12)',
                }}
              />
            ))}
            <span className="text-[10px] text-white/20 font-mono ml-1">
              {String(safeIdx + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
            </span>
            <div className="ml-auto flex gap-2">
              <button onClick={prev}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-white/25 hover:text-white/70 transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3L5 7l4 4"/></svg>
              </button>
              <button onClick={next}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-white/25 hover:text-white/70 transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 3l4 4-4 4"/></svg>
              </button>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mt-5">
            {categories.map(cat => {
              const isActive = activeFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className="transition-all duration-250 text-[11px] font-medium tracking-wide rounded-full px-4 py-1.5"
                  style={{
                    background: isActive ? 'rgba(123,47,247,0.18)' : 'rgba(255,255,255,0.04)',
                    border: isActive ? '1px solid rgba(139,92,246,0.55)' : '1px solid rgba(255,255,255,0.08)',
                    color: isActive ? 'rgba(192,132,252,0.95)' : 'rgba(255,255,255,0.35)',
                    boxShadow: isActive ? '0 0 12px rgba(123,47,247,0.2)' : 'none',
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Layout ─────────────────────────────────────── */}
        {/*
          items-start: prevents the grid from stretching the side column to
          match the featured panel height. The side column then self-contains
          via maxHeight + overflow-y scroll.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] items-start gap-5">

          {/* Featured panel */}
          <div
            ref={featuredRef}
            className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-[560px]"
            style={{
              background: gradients[active.imageKey] ?? gradients.extension,
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(40px) scale(0.975)',
              transition: 'all 0.8s cubic-bezier(0.23,1,0.320,1) 0.15s, background 0.5s ease',
            }}
          >
            <div className="absolute inset-0 pointer-events-none transition-all duration-700"
              style={{ background: `radial-gradient(ellipse at 25% 35%, ${active.color}18, transparent 65%)` }} />

            <div className="absolute inset-3 sm:inset-5 rounded-2xl border border-white/[0.06] flex flex-col overflow-hidden bg-black/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/[0.05] bg-black/20 flex-shrink-0">
                <div className="flex gap-1.5">
                  {['', '', ''].map((_, i) => (
                    <div key={i} className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/[0.08]" />
                  ))}
                </div>
                <div className="flex-1 min-w-0 bg-white/[0.04] rounded-full px-3 sm:px-4 py-1 text-[10px] sm:text-[11px] text-white/15 font-mono tracking-wide truncate">
                  nevinabraham.dev / {active.title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden">
                <img
                  key={activeIdx}
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{
                    opacity: transitioning ? 0 : 1,
                    transform: transitioning ? 'scale(1.03)' : 'scale(1)',
                    transition: 'opacity 0.32s ease, transform 0.5s cubic-bezier(0.23,1,0.320,1)',
                  }}
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(6,6,6,0.97) 0%, rgba(6,6,6,0.65) 65%, rgba(6,6,6,0.1) 100%)' }} />

                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-9"
                  style={{
                    opacity: transitioning ? 0 : 1,
                    transform: transitioning ? 'translateY(12px)' : 'translateY(0)',
                    transition: 'opacity 0.32s ease, transform 0.32s ease',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: active.color }}>
                      {active.category}
                    </span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-white/25 text-xs">{active.year}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-[2.2rem] text-white leading-tight mb-2 sm:mb-4">
                    {active.title}
                  </h3>

                  <p className="text-white/45 text-[11px] sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 lg:mb-7 max-w-xl line-clamp-2 sm:line-clamp-none">
                    {active.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 flex-wrap">
                    <div className="flex flex-wrap gap-2">
                      {active.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] text-white/40 border border-white/[0.08] bg-white/[0.03]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {active.link !== '#' && (
                      <a href={active.link} target="_blank" rel="noopener noreferrer"
                        className="hidden sm:flex sm:ml-auto items-center gap-2 text-xs font-medium text-white/40 hover:text-white transition-colors duration-300 group">
                        <span>View project</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                          className="group-hover:translate-x-0.5 transition-transform duration-300">
                          <path d="M2 6h8M6.5 2.5l4 3.5-4 3.5"/>
                        </svg>
                      </a>
                    )}

                    {active.link !== '#' && (
                      <a href={active.link} target="_blank" rel="noopener noreferrer"
                        className="sm:hidden inline-flex items-center gap-1.5 text-[11px] font-medium text-white/50 border border-white/10 rounded-full px-3 py-1.5 w-fit hover:text-white hover:border-white/25 transition-colors duration-300">
                        <span>View project</span>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 6h8M6.5 2.5l4 3.5-4 3.5"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {autoPlay && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04]">
                <div
                  key={`${activeIdx}-${autoPlay}`}
                  className="h-full rounded-full"
                  style={{ background: active.color, animation: `lineGrow ${AUTO_INTERVAL}ms linear both` }}
                />
              </div>
            )}
          </div>

          {/* ── Side cards ─────────────────────────────── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(40px)',
              transition: 'all 0.8s cubic-bezier(0.23,1,0.320,1) 0.3s',
            }}
          >
            {/*
              Desktop: side column is capped to the featured panel's exact
              rendered height (via ResizeObserver → featuredHeight state).
              Cards overflow into a hidden scrollable area — the scrollbar
              itself is hidden via scrollbar-width/msOverflowStyle/webkit.
              Adding more projects will never push the section taller.
            */}
            {/* Wrapper: fixed height = featured panel, split into scrollable cards + pinned footer */}
            <div
              className="hidden lg:flex flex-col"
              style={{ height: featuredHeight }}
            >
              <style>{`
                .side-cards::-webkit-scrollbar { width: 3px; }
                .side-cards::-webkit-scrollbar-track { background: transparent; }
                .side-cards::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.35); border-radius: 99px; }
                .side-cards::-webkit-scrollbar-thumb:hover { background: rgba(139,92,246,0.6); }
              `}</style>

              {/* Single scroll container — cards only, no horizontal overflow */}
              <div
                className="side-cards flex-1 flex flex-col gap-3 overflow-y-auto overflow-x-hidden min-h-0"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(139,92,246,0.35) transparent',
                  paddingRight: '4px',
                }}
              >
                {filtered.map((project, i) => (
                  <SideCard
                    key={project.id}
                    project={project}
                    isActive={safeIdx === i}
                    onClick={() => handleSelect(i)}
                  />
                ))}
              </div>

              {/* Dots + counter — pinned below scroll area, never scrolls away */}
              <div className="flex items-center gap-2 px-1 flex-shrink-0 pt-3">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="rounded-full transition-all duration-300 focus:outline-none"
                    style={{
                      width: safeIdx === i ? '22px' : '6px',
                      height: '6px',
                      background: safeIdx === i ? active.color : 'rgba(255,255,255,0.12)',
                    }}
                  />
                ))}
                <span className="ml-auto text-[11px] text-white/20 font-mono">
                  {String(safeIdx + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Mobile: 2-column grid — all cards visible, no scroll */}
            <div className="grid grid-cols-2 lg:hidden gap-2.5">
              {filtered.map((project, i) => (
                <MobileCard
                  key={project.id}
                  project={project}
                  isActive={safeIdx === i}
                  onClick={() => handleSelect(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects