import React from 'react'

const items = [
  'Power BI', 'React', 'Figma', 'Looker Studio', 'DAX',
  'TypeScript', 'Tailwind CSS', 'Chrome Extensions',
  'Data Visualization', 'Frontend Development', 'UI/UX Design', 'Dashboard Design',
]

const Marquee = () => {
  const doubled = [...items, ...items]

  return (
    <div className="py-8 border-y border-white/04 overflow-hidden relative select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex items-center animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="text-xs font-medium text-white/25 tracking-[0.2em] uppercase hover:text-white/50 transition-colors cursor-default">
              {item}
            </span>
            <span className="text-white/10 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee