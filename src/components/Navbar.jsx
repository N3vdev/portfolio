import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['hero', 'about', 'services', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const links = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
        style={{
          background: scrolled ? 'rgba(7,3,15,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(139,92,246,0.12)' : 'none',
        }}>
        <div className="main-container flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scrollTo('hero')}
            className="font-heading font-bold text-xl tracking-wider text-white">
            Nev<span style={{
              background: 'linear-gradient(90deg, #c084fc, #7B2FF7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)}
                className="text-sm font-medium tracking-wide transition-all duration-300 relative"
                style={{
                  color: activeSection === link.id ? 'rgba(192,132,252,1)' : 'rgba(255,255,255,0.45)',
                }}>
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, #7B2FF7, transparent)' }} />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 rounded-full text-sm font-medium tracking-wide text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(123,47,247,0.2), rgba(157,78,221,0.15))',
                border: '1px solid rgba(139,92,246,0.35)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(123,47,247,0.4), rgba(157,78,221,0.3))'
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(123,47,247,0.2), rgba(157,78,221,0.15))'
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)'
              }}>
              Let's Talk
            </button>
          </div>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`w-6 h-px transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              style={{ background: 'rgba(192,132,252,0.8)' }} />
            <span className={`w-6 h-px transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              style={{ background: 'rgba(192,132,252,0.8)' }} />
            <span className={`w-6 h-px transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              style={{ background: 'rgba(192,132,252,0.8)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(7,3,15,0.97)', backdropFilter: 'blur(20px)' }}>
        {links.map((link, i) => (
          <button key={link.id} onClick={() => scrollTo(link.id)}
            className="font-heading font-bold text-4xl transition-all duration-300"
            style={{
              color: activeSection === link.id ? 'rgba(192,132,252,1)' : 'rgba(255,255,255,0.7)',
              animationDelay: `${i * 0.07}s`,
            }}>
            {link.label}
          </button>
        ))}
        <button onClick={() => scrollTo('contact')}
          className="px-8 py-3 rounded-full text-base font-medium text-white mt-4"
          style={{ background: 'linear-gradient(135deg, #7B2FF7, #9d4edd)', border: '1px solid rgba(139,92,246,0.5)' }}>
          Let's Talk
        </button>
      </div>
    </>
  )
}

export default Navbar