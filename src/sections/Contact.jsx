import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const Contact = () => {
  const { ref, visible } = useReveal(0.08)
  const [emailHover, setEmailHover] = useState(false)
  const [copied, setCopied] = useState(false)

  const email = 'nevinabraham77@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const socials = [
    {
      name: 'LinkedIn', href: '#',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      name: 'GitHub', href: '#',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      name: 'Behance', href: '#',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.8 5.73c.58 0 1.1.05 1.6.15.48.1.9.27 1.24.51.34.23.61.54.8.92.19.38.28.85.28 1.39 0 .6-.13 1.11-.4 1.52-.27.41-.67.75-1.21 1.01.72.21 1.27.58 1.64 1.12.37.54.55 1.2.55 1.97 0 .6-.12 1.13-.35 1.57-.23.45-.55.83-.96 1.12-.41.3-.89.53-1.43.67-.54.15-1.11.22-1.72.22H1V5.73h6.8zm-.35 4.99c.47 0 .86-.11 1.15-.33.29-.22.44-.57.44-1.06 0-.27-.05-.49-.14-.68-.09-.18-.22-.33-.38-.44-.16-.11-.34-.19-.55-.24-.21-.05-.43-.07-.66-.07H3.83v2.82h3.62zm.17 5.18c.26 0 .52-.03.76-.07.24-.05.45-.13.63-.25.18-.12.33-.29.44-.49.11-.2.16-.47.16-.8 0-.64-.18-1.09-.53-1.36-.36-.27-.83-.4-1.42-.4H3.83v3.37h3.79zm10.28-3.07c.23.35.35.81.35 1.37h-5.27c.02.52.17.94.45 1.25.28.31.68.46 1.19.46.37 0 .69-.09.94-.28.26-.19.42-.39.48-.61h1.9c-.3.93-.76 1.61-1.38 2.02-.61.41-1.36.62-2.23.62-.6 0-1.15-.1-1.64-.3-.49-.2-.91-.48-1.25-.84-.34-.36-.61-.79-.79-1.29-.19-.5-.28-1.05-.28-1.65 0-.58.1-1.13.29-1.63.19-.5.46-.94.81-1.3.35-.36.77-.65 1.25-.85.48-.2 1.01-.3 1.59-.3.65 0 1.21.12 1.7.37.49.25.89.58 1.21 1l.68 1.37zm-1.62-2.62c-.26-.28-.64-.42-1.15-.42-.32 0-.59.05-.81.16-.22.11-.4.24-.54.4-.14.16-.24.33-.3.5-.06.18-.1.34-.11.5h3.38c-.08-.51-.22-.86-.47-1.14zM14.85 6.73h4.43v1.14h-4.43V6.73z"/>
        </svg>
      ),
    },
  ]

  const ease = 'transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.320,1)]'

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden"
      style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Faint dot grid — same vibe as About */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.022,
        backgroundImage: 'radial-gradient(circle, #7B2FF7 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Top purple accent line */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(123,47,247,0.35) 40%, rgba(157,78,221,0.35) 60%, transparent 100%)' }} />

      <div className="relative z-10 py-28 lg:py-36">
        <div className="main-container">

          {/* Section label */}
          <div className={`flex items-center gap-3 mb-10 lg:mb-16 ${ease} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="w-6 h-px" style={{ background: 'rgba(123,47,247,0.35)' }} />
            <span className="text-[10px] font-medium tracking-[0.32em] uppercase"
              style={{ color: 'rgba(123,47,247,0.55)' }}>Contact</span>
          </div>

          {/* ── CTA card — dark, strong, clean ── */}
          <div
            className="rounded-3xl overflow-hidden flex flex-col items-center text-center px-5 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-24"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(40px) scale(0.975)',
              transition: `all 800ms cubic-bezier(0.23,1,0.320,1) 0.1s`,
              // Dark card on white page — clear contrast, no muddy tint
              background: 'linear-gradient(145deg, #0e0720 0%, #07030f 60%, #0a0416 100%)',
              boxShadow: '0 2px 0 0 rgba(123,47,247,0.5), 0 32px 80px rgba(0,0,0,0.18)',
              position: 'relative',
            }}
          >
            {/* Inner purple ambient glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,47,247,0.12) 0%, transparent 65%)',
            }} />

            {/* Top glowing line on card */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{
              background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6) 30%, rgba(192,132,252,0.6) 70%, transparent)',
            }} />

            <div className="relative z-10 w-full flex flex-col items-center">

              {/* Heading */}
              <div className={`${ease} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.2s' }}>
                <h2 className="font-heading font-bold text-[2rem] sm:text-4xl lg:text-[4rem] xl:text-[5rem] leading-[1.05] mb-4 lg:mb-5 text-white">
                  Let's build<br />
                  <span style={{
                    background: 'linear-gradient(90deg, #c084fc 0%, #7B2FF7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>something great</span>
                </h2>
              </div>

              <div className={`${ease} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '0.3s' }}>
                <p className="text-sm sm:text-base lg:text-lg max-w-sm mb-10 lg:mb-14 leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Have something in mind? Let's make it happen.
                </p>
              </div>

              {/* Email — desktop */}
              <div className={`w-full ${ease} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '0.38s' }}>
                <a
                  href={`mailto:${email}`}
                  onMouseEnter={() => setEmailHover(true)}
                  onMouseLeave={() => setEmailHover(false)}
                  className="group hidden sm:inline-flex items-center gap-4 mb-10 lg:mb-14"
                >
                  <span className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl"
                    style={{
                      color: emailHover ? 'transparent' : 'rgba(255,255,255,0.9)',
                      WebkitTextStroke: emailHover ? '1px rgba(192,132,252,0.7)' : '0',
                      transition: 'all 0.3s ease',
                    }}>
                    {email}
                  </span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      border: emailHover ? '1px solid rgba(192,132,252,0.55)' : '1px solid rgba(139,92,246,0.3)',
                      color: emailHover ? '#c084fc' : 'rgba(139,92,246,0.55)',
                    }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 6.5h9M7.5 2.5l4 4-4 4"/>
                    </svg>
                  </div>
                </a>

                {/* Email — mobile */}
                <div className="sm:hidden flex flex-col items-center gap-3 mb-10 w-full">
                  <a href={`mailto:${email}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold break-all text-center"
                    style={{ border: '1px solid rgba(139,92,246,0.25)', color: 'rgba(255,255,255,0.8)' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    {email}
                  </a>
                  <button onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px]"
                    style={{
                      border: '1px solid rgba(139,92,246,0.2)',
                      background: 'rgba(123,47,247,0.08)',
                      color: 'rgba(192,132,252,0.7)',
                    }}>
                    {copied ? (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                          <rect x="9" y="9" width="13" height="13" rx="2"/>
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                        </svg>
                        Copy email
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full mb-8" style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)',
              }} />

              {/* Socials */}
              <div className={`flex items-center gap-3 ${ease} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.48s' }}>
                {socials.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    title={s.name}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ border: '1px solid rgba(139,92,246,0.2)', color: 'rgba(139,92,246,0.5)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(192,132,252,0.5)'
                      e.currentTarget.style.color = 'rgba(192,132,252,0.9)'
                      e.currentTarget.style.background = 'rgba(123,47,247,0.1)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                      e.currentTarget.style.color = 'rgba(139,92,246,0.5)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="pb-10 text-center relative z-10">
        <div className="main-container">
          <div style={{ height: '1px', background: 'rgba(123,47,247,0.08)', marginBottom: '28px' }} />
          <p className="text-xs" style={{ color: 'rgba(0,0,0,0.28)', letterSpacing: '0.12em' }}>
            © 2026 Nevin Abraham
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact