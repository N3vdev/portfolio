import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'

const App = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <CustomCursor />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* ── Fixed deep-space background ───────────────────────────────────── */}
      {/* This stays fixed behind everything. Only the white-bg sections
          (About, Contact) will paint over it with their own backgrounds. */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          background: '#000000',
          // Subtle radial glows baked into the bg
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(123,47,247,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 70%, rgba(157,78,221,0.05) 0%, transparent 55%),
            radial-gradient(ellipse 40% 30% at 50% 10%, rgba(192,132,252,0.04) 0%, transparent 50%)
          `,
        }}
      >
        {/* Static star dots */}
        <StarField />
      </div>

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.23,1,0.320,1) 0.2s',
        }}
      >
        <Navbar />
        <Home />
      </div>
    </>
  )
}

// ── Deterministic star field (no random — stable across renders) ──────────────
const STARS = Array.from({ length: 120 }, (_, i) => {
  // Pseudo-random but deterministic via index
  const x = ((i * 137.508 + 23) % 100)
  const y = ((i * 97.3 + 41) % 100)
  const size = i % 3 === 0 ? 1.5 : i % 5 === 0 ? 1 : 0.75
  const opacity = 0.08 + (i % 7) * 0.04
  return { x, y, size, opacity }
})

const StarField = () => (
  <svg
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    viewBox="0 0 100 100"
  >
    {STARS.map((s, i) => (
      <circle
        key={i}
        cx={s.x}
        cy={s.y}
        r={s.size * 0.12}
        fill="white"
        opacity={s.opacity}
      />
    ))}
  </svg>
)

export default App