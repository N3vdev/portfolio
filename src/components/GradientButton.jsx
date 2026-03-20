import React, { useState } from 'react'

const GradientButton = ({ text, onClick, link, className = '' }) => {
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    if (link) document.getElementById(link.replace('/', ''))?.scrollIntoView({ behavior: 'smooth' })
    if (onClick) onClick()
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative px-8 py-3.5 rounded-full font-medium text-base tracking-wide text-white overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, #9333ea, #7B2FF7)'
          : 'linear-gradient(135deg, #7B2FF7, #6d28d9)',
        boxShadow: hovered
          ? '0 0 32px rgba(123,47,247,0.5), 0 8px 24px rgba(123,47,247,0.3)'
          : '0 0 0px rgba(123,47,247,0)',
        border: '1px solid rgba(192,132,252,0.25)',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
      }}
    >
      {/* Shimmer */}
      <span className="absolute inset-0 rounded-full pointer-events-none" style={{
        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />
      <span className="relative z-10">{text}</span>
    </button>
  )
}

export default GradientButton