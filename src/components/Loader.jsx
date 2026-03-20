import React, { useEffect, useState, useRef } from 'react'

// 4 boxes that fill in sequence like good-fella.com
const BOX_COUNT = 4
const PURPLE = '#7B2FF7'
const BG = '#5a1fd1' // rich purple background

const Loader = ({ onComplete }) => {
  const [activeBox, setActiveBox] = useState(0)
  const [exiting, setExiting] = useState(false)
  const intervalRef = useRef(null)
  const cycleRef = useRef(0)

  useEffect(() => {
    // Each box lights up every 180ms, full cycle = 720ms
    // After ~2.5s (≈3.5 full cycles), trigger exit
    let step = 0
    const totalSteps = 14 // ~2.5s worth of steps

    intervalRef.current = setInterval(() => {
      step++
      setActiveBox(step % BOX_COUNT)

      if (step >= totalSteps) {
        clearInterval(intervalRef.current)
        // Fill all boxes briefly
        setActiveBox(BOX_COUNT) // special value = all filled
        setTimeout(() => {
          setExiting(true)
          setTimeout(() => onComplete?.(), 900)
        }, 300)
      }
    }, 180)

    return () => clearInterval(intervalRef.current)
  }, [onComplete])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      {/* Purple background layer — slides away diagonally on exit */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: BG,
          // Diagonal wipe: clip-path shrinks from top-left corner
          clipPath: exiting
            ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transition: exiting
            ? 'clip-path 0.85s cubic-bezier(0.76, 0, 0.24, 1)'
            : 'none',
          zIndex: 1,
        }}
      />

      {/* Dark overlay that reveals beneath (diagonal) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0d0d0d',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: exiting ? 0 : 1,
          transition: 'opacity 0.3s ease 0.1s',
        }}
      >
        {/* Animated boxes */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '12px' }}>
          {[...Array(BOX_COUNT)].map((_, i) => {
            const isActive = activeBox === BOX_COUNT
              ? true  // all filled
              : i === activeBox

            return (
              <div
                key={i}
                style={{
                  width: '14px',
                  height: '14px',
                  background: isActive ? '#1a1a1a' : 'rgba(0,0,0,0.35)',
                  transition: 'background 0.12s ease',
                }}
              />
            )
          })}
        </div>

        {/* LOADING text */}
        <span
          style={{
            fontFamily: '"Arial", sans-serif',
            fontWeight: 400,
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.5)',
            userSelect: 'none',
          }}
        >
          LOADING
        </span>
      </div>

      {/* Bottom-right "Nev" */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '36px',
          zIndex: 3,
          opacity: exiting ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <span
          style={{
            fontFamily: '"Arial Black", sans-serif',
            fontWeight: 900,
            fontSize: '13px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.4)',
            userSelect: 'none',
          }}
        >
          Nev
        </span>
      </div>

      <style>{`
        @keyframes boxPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

export default Loader