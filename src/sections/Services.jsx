import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    number: '01',
    title: 'Data Visualization',
    description: 'Transforming complex datasets into interactive dashboards with Power BI and Looker Studio. KPI tracking, drill-through reports, and executive summaries built for real decisions.',
    tags: ['Power BI', 'Looker Studio', 'DAX', 'Data Modeling'],
    accent: '#2F86F7',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Frontend Development',
    description: 'Building fast, accessible web applications with React and modern tooling. Clean architecture, smooth animations, and pixel-perfect implementations from any design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    accent: '#7B2FF7',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description: 'Designing intuitive experiences from wireframe to high-fidelity prototype in Figma. Research-informed decisions, cohesive design systems, and interfaces people enjoy using.',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
    accent: '#BD3EB2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Browser Extensions',
    description: 'Creating custom Chrome extensions that supercharge productivity and workflow. Manifest V3, clean popup UIs, background scripts, and content injection — all polished.',
    tags: ['JavaScript', 'Chrome API', 'Manifest V3', 'Browser Tools'],
    accent: '#FF4D6D',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
        <line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
        <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
      </svg>
    ),
  },
]

const ServiceCard = ({ service, index, visible }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group cursor-default relative overflow-hidden rounded-3xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.01) 100%)',
        border: `1px solid ${hovered ? service.accent + '45' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? `0 28px 64px ${service.accent}1a, inset 0 1px 0 rgba(255,255,255,0.07)`
          : '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)',
        transition: `
          opacity 0.75s cubic-bezier(0.23,1,0.320,1) ${index * 0.12 + 0.1}s,
          transform 0.75s cubic-bezier(0.23,1,0.320,1) ${index * 0.12 + 0.1}s,
          border-color 0.4s ease,
          box-shadow 0.4s ease
        `,
      }}
    >
      {/* Ambient glow blob */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '65%',
          paddingBottom: '65%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${service.accent}14 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      />

      {/* ── Desktop layout ──────────────────────────────────── */}
      <div className="hidden sm:block p-8 lg:p-9">
        {/* Icon */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: hovered ? `${service.accent}25` : `${service.accent}12`,
            color: service.accent,
            border: `1px solid ${hovered ? service.accent + '40' : service.accent + '18'}`,
            transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
            transition: 'all 0.35s cubic-bezier(0.23,1,0.320,1)',
            marginBottom: 22,
          }}
        >
          {service.icon}
        </div>

        {/* Accent line */}
        <div
          style={{
            height: 1.5,
            borderRadius: 99,
            marginBottom: 22,
            background: `linear-gradient(90deg, ${service.accent}, ${service.accent}00)`,
            width: hovered ? 72 : 32,
            transition: 'width 0.55s cubic-bezier(0.23,1,0.320,1)',
          }}
        />

        <h3
          className="font-heading font-bold leading-tight tracking-tight mb-3"
          style={{ fontSize: 'clamp(1.35rem, 2vw, 1.65rem)', color: '#fff' }}
        >
          {service.title}
        </h3>

        <p
          className="leading-[1.8] mb-7"
          style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.38)' }}
        >
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.tags.map(tag => (
            <span
              key={tag}
              style={{
                padding: '5px 12px',
                borderRadius: 99,
                fontSize: '10.5px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                background: hovered ? `${service.accent}14` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hovered ? service.accent + '38' : 'rgba(255,255,255,0.07)'}`,
                color: hovered ? service.accent + 'd0' : 'rgba(255,255,255,0.32)',
                transition: 'all 0.35s ease',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Mobile layout: horizontal — icon left, content right ── */}
      <div className="sm:hidden p-4">
        <div className="flex gap-3 items-start">

          {/* Icon column */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              background: `${service.accent}18`,
              color: service.accent,
              border: `1px solid ${service.accent}28`,
            }}
          >
            {service.icon}
          </div>

          {/* Content column */}
          <div className="flex-1 min-w-0">
            <p
              className="font-mono font-bold mb-0.5"
              style={{ fontSize: 10, color: 'rgba(255,255,255,0.15)' }}
            >
              {service.number}
            </p>

            <h3
              className="font-heading font-bold leading-tight mb-2"
              style={{ fontSize: '0.9375rem', color: '#fff' }}
            >
              {service.title}
            </h3>

            {/* Accent line */}
            <div
              style={{
                height: 1.5,
                width: 28,
                borderRadius: 99,
                marginBottom: 10,
                background: `linear-gradient(90deg, ${service.accent}, ${service.accent}00)`,
              }}
            />

            {/* Description: clamped to 3 lines on mobile */}
            <p
              className="leading-relaxed mb-3 line-clamp-3"
              style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}
            >
              {service.description}
            </p>

            {/* Tags: show first 3, +N for the rest */}
            <div className="flex flex-wrap gap-1.5">
              {service.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 99,
                    fontSize: '9px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.28)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  {tag}
                </span>
              ))}
              {service.tags.length > 3 && (
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.18)', padding: '3px 4px' }}>
                  +{service.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  const { ref, visible } = useReveal(0.05)

  return (
    <section
      id="services"
      ref={ref}
      className="min-h-screen flex flex-col justify-center py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background ambience */}
      <div style={{
        position: 'absolute', top: '5%', left: '-15%',
        width: '50%', paddingBottom: '50%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,47,247,0.05) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '0%', right: '-10%',
        width: '40%', paddingBottom: '40%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(47,134,247,0.045) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="main-container relative" style={{ zIndex: 1 }}>

        {/* Section header */}
        <div
          className="mb-10 lg:mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(30px)',
            transition: 'opacity 0.7s cubic-bezier(0.23,1,0.320,1), transform 0.7s cubic-bezier(0.23,1,0.320,1)',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-white/15" />
            <span className="text-[10px] font-medium text-white/25 tracking-[0.32em] uppercase">Services</span>
          </div>
          <h2 className="font-heading w-100 font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-none">
            What I Do
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-[14px]">
          {services.map((s, i) => (
            <ServiceCard key={s.number} service={s} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services