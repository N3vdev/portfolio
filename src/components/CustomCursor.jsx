import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, animFrame

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top  = mouseY + 'px'
      }

      // Check the background colour of the element directly under the cursor
      // and switch the cursor to dark mode on light backgrounds
      const el = document.elementFromPoint(mouseX, mouseY)
      if (el) {
        const bg = getComputedStyle(el).backgroundColor
        const isLight = isLightBackground(el, bg)
        const dotColor  = isLight ? 'rgba(80,20,180,0.85)'   : '#a855f7'
        const dotShadow = isLight ? '0 0 6px rgba(80,20,180,0.35)' : '0 0 6px rgba(168,85,247,0.8)'
        const ringBorder = isLight ? 'rgba(100,40,200,0.5)'  : 'rgba(139,92,246,0.5)'

        if (dotRef.current) {
          dotRef.current.style.background  = dotColor
          dotRef.current.style.boxShadow   = dotShadow
        }
        if (ringRef.current && !ringRef.current.classList.contains('hovering')) {
          ringRef.current.style.borderColor = ringBorder
        }
      }
    }

    // Walk up the DOM to find a meaningful background colour
    const isLightBackground = (el, bg) => {
      let node = el
      let color = bg
      // Walk up until we get a non-transparent background
      while (node && (color === 'rgba(0, 0, 0, 0)' || color === 'transparent')) {
        node = node.parentElement
        if (node) color = getComputedStyle(node).backgroundColor
      }
      if (!color || color === 'rgba(0, 0, 0, 0)') return false
      // Parse rgb/rgba
      const parts = color.match(/[\d.]+/g)
      if (!parts || parts.length < 3) return false
      const [r, g, b] = parts.map(Number)
      // Perceived luminance
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
      return luminance > 0.55
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top  = ringY + 'px'
      }
      animFrame = requestAnimationFrame(animate)
    }

    const onEnter = () => ringRef.current?.classList.add('hovering')
    const onLeave = () => ringRef.current?.classList.remove('hovering')

    window.addEventListener('mousemove', onMove)
    animate()

    const attach = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()

    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animFrame)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="hidden lg:block" style={{
        position: 'fixed',
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: '#a855f7',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 6px rgba(168,85,247,0.8)',
        transition: 'background 0.15s ease, box-shadow 0.15s ease',
      }} />

      <div ref={ringRef} className="hidden lg:block" style={{
        position: 'fixed',
        width: 28,
        height: 28,
        borderRadius: '50%',
        border: '1px solid rgba(139,92,246,0.5)',
        pointerEvents: 'none',
        zIndex: 99998,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.25s ease, height 0.25s ease, border-color 0.15s ease, background 0.15s ease',
      }} />

      <style>{`
        .hovering {
          width: 44px !important;
          height: 44px !important;
          border-color: rgba(168,85,247,0.7) !important;
          background: rgba(123,47,247,0.06);
        }
      `}</style>
    </>
  )
}

export default CustomCursor