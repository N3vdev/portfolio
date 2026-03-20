import React from 'react'
import { useReveal } from '../hooks/useReveal'

const About = () => {
  const { ref, visible } = useReveal(0.08)

  const dataSkills = ['Power BI', 'Looker Studio', 'DAX', 'Data Modeling', 'SQL', 'ETL']
  const devSkills  = ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vite', 'Node.js']

  const slideIn = (direction = 'left', delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible
      ? 'translate(0,0)'
      : `translate(${direction === 'left' ? '-28px' : '28px'}, 16px)`,
    transition: `opacity 0.9s cubic-bezier(0.23,1,0.320,1) ${delay}s, transform 0.9s cubic-bezier(0.23,1,0.320,1) ${delay}s`,
  })

  return (
    <section id="about" ref={ref}>
      {/* White section — paints over the fixed dark bg */}
      <div className="relative bg-white rounded-t-[60px] overflow-hidden">

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'radial-gradient(circle, #7B2FF7 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        {/* Subtle top-edge purple hint to bridge from dark → white */}
        <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #7B2FF7 0%, #9d4edd 40%, #c084fc 70%, transparent 100%)', opacity: 0.35 }} />

        <div className="main-container relative flex flex-col justify-between pt-24 pb-24 lg:px-20 min-h-screen md:px-20">

          {/* Section label */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.85s cubic-bezier(0.23,1,0.320,1), transform 0.85s cubic-bezier(0.23,1,0.320,1)',
          }}>
            <div className="flex items-center gap-3 mb-20">
              <div className="w-6 h-px" style={{ background: 'rgba(123,47,247,0.3)' }} />
              <span className="text-[10px] font-medium tracking-[0.32em] uppercase"
                style={{ color: 'rgba(123,47,247,0.5)' }}>About</span>
            </div>
          </div>

          {/* Top paragraph */}
          <div style={slideIn('left', 0.15)}>
            <p className="text-black font-heading font-medium text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem] leading-tight w-full lg:w-[68%]">
              I am a creative developer specializing in data visualization and
              advanced dashboard development using{' '}
              <span className="relative">
                <span className="relative z-10">Power BI</span>
                <span className="absolute inset-x-0 bottom-0 h-[30%] rounded"
                  style={{ background: 'linear-gradient(90deg, rgba(123,47,247,0.15), rgba(157,78,221,0.15))' }} />
              </span>
              {' '}and{' '}
              <span className="relative">
                <span className="relative z-10">Looker Studio</span>
                <span className="absolute inset-x-0 bottom-0 h-[30%] rounded"
                  style={{ background: 'linear-gradient(90deg, rgba(157,78,221,0.15), rgba(192,132,252,0.15))' }} />
              </span>
              . I focus on transforming complex data into clear, actionable insights through structured, interactive dashboards.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {dataSkills.map((skill, i) => (
                <span key={skill}
                  className="px-4 py-1.5 rounded-full text-sm font-medium cursor-default transition-all duration-200"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(12px)',
                    transition: `opacity 0.6s ease ${0.32 + i * 0.06}s, transform 0.6s cubic-bezier(0.23,1,0.320,1) ${0.32 + i * 0.06}s`,
                    background: 'rgba(123,47,247,0.06)',
                    border: '1px solid rgba(123,47,247,0.15)',
                    color: 'rgba(109,40,217,0.8)',
                  }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom paragraph */}
          <div className="self-end" style={slideIn('right', 0.35)}>
            <p className="text-black font-heading font-medium text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem] leading-tight w-full lg:w-[68%] lg:ml-auto lg:text-right mt-16 lg:mt-0">
              Alongside data work, I build frontend applications using{' '}
              <span className="relative">
                <span className="relative z-10">React</span>
                <span className="absolute inset-x-0 bottom-0 h-[30%] rounded"
                  style={{ background: 'linear-gradient(90deg, rgba(192,132,252,0.18), rgba(123,47,247,0.12))' }} />
              </span>
              {' '}and modern web technologies — designing in Figma, then crafting pixel-perfect, responsive interfaces that are clean, functional, and thoughtfully built.
            </p>

            <div className="flex flex-wrap gap-2 mt-8 justify-end">
              {devSkills.map((skill, i) => (
                <span key={skill}
                  className="px-4 py-1.5 rounded-full text-sm font-medium cursor-default"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(12px)',
                    transition: `opacity 0.6s ease ${0.52 + i * 0.06}s, transform 0.6s cubic-bezier(0.23,1,0.320,1) ${0.52 + i * 0.06}s`,
                    background: 'rgba(123,47,247,0.06)',
                    border: '1px solid rgba(123,47,247,0.15)',
                    color: 'rgba(109,40,217,0.8)',
                  }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About