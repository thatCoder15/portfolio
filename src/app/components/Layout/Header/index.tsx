'use client'

import { useEffect, useState } from 'react'
import { Logo } from '@/app/components/Layout/Header/Logo'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { label: 'About', href: '#About' },
    { label: 'Services', href: '#Services' },
    { label: 'Work', href: '#Brands' },
    { label: 'FAQ', href: '#FAQ' },
    { label: 'Contact', href: '#Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className='container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8'>
          <div
            className={`relative flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? 'rounded-2xl border border-black/10 bg-white/90 px-5 py-2 shadow-[0_15px_45px_rgba(0,0,0,0.07)] backdrop-blur-xl'
                : ''
            }`}
          >
            {/* LOGO */}
            <div
              className={`transition-all duration-500 ${
                scrolled ? 'scale-95' : 'scale-100'
              }`}
            >
              <Logo />
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className='hidden items-center gap-9 lg:flex'>
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='group relative py-3 text-[15px] font-semibold text-black/65 transition-colors duration-300 hover:text-darkmode'
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span className='relative z-10'>
                    {item.label}
                  </span>

                  <span className='absolute bottom-1 left-0 h-[2px] w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full' />

                  <span className='absolute -right-2 top-2 h-1 w-1 scale-0 rounded-full bg-primary transition-all duration-300 group-hover:scale-100' />
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className='hidden items-center gap-5 lg:flex'>
              {/* READY TO GROW */}
              <div className='flex items-center gap-2'>
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60' />
                  <span className='relative h-2 w-2 rounded-full bg-primary' />
                </span>

                <span className='text-[11px] font-bold uppercase tracking-[0.18em] text-black/45'>
                  Ready to grow
                </span>
              </div>

              {/* CTA */}
              <a
                href='#Contact'
                className='group relative flex items-center gap-3 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(255,100,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(255,100,0,0.28)]'
              >
                <span className='relative z-10'>
                  Let&apos;s Talk
                </span>

                <span className='relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/30'>
                  →
                </span>

                <span className='absolute left-[-100%] top-0 h-full w-1/2 skew-x-[-20deg] bg-white/20 transition-all duration-700 group-hover:left-[130%]' />
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type='button'
              onClick={() => setMenuOpen(true)}
              className='group relative flex h-11 w-11 items-center justify-center rounded-xl bg-darkmode lg:hidden'
              aria-label='Open menu'
              aria-expanded={menuOpen}
            >
              <div className='flex flex-col gap-[5px]'>
                <span className='h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:w-3 group-hover:bg-primary' />
                <span className='h-[2px] w-3 rounded-full bg-primary transition-all duration-300 group-hover:w-5' />
                <span className='h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:w-4 group-hover:bg-primary' />
              </div>
            </button>
          </div>
        </div>

        {/* DECORATIVE LINE */}
        <div
          className={`pointer-events-none absolute bottom-0 left-1/2 hidden h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-all duration-700 lg:block ${
            scrolled ? 'w-0 opacity-0' : 'w-[45%] opacity-100'
          }`}
        />
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          menuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
        onClick={closeMenu}
        aria-hidden='true'
      />

      {/* MOBILE MENU */}
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-[88%] max-w-[390px] overflow-hidden bg-darkmode transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        {/* ORANGE GLOW */}
        <div className='pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl' />

        <div className='pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl' />

        {/* MOBILE HEADER */}
        <div className='relative flex items-center justify-between border-b border-white/10 px-6 py-6'>
          <div className='rounded-lg bg-white px-2 py-1'>
            <Logo />
          </div>

          <button
            type='button'
            onClick={closeMenu}
            className='group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:rotate-90 hover:border-primary hover:bg-primary'
            aria-label='Close menu'
          >
            <span className='text-2xl leading-none'>
              ×
            </span>
          </button>
        </div>

        {/* MOBILE CONTENT */}
        <div className='relative px-6 pt-10'>
          <div className='mb-7 flex items-center gap-3'>
            <span className='h-[2px] w-8 bg-primary' />

            <span className='text-[11px] font-bold uppercase tracking-[0.25em] text-primary'>
              Explore
            </span>
          </div>

          {/* MOBILE NAVIGATION */}
          <nav className='flex flex-col'>
            {navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className='group flex items-center justify-between border-b border-white/10 py-5'
              >
                <span className='text-2xl font-bold text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary'>
                  {item.label}
                </span>

                <span className='text-xl text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary'>
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* MOBILE CTA */}
          <a
            href='#Contact'
            onClick={closeMenu}
            className='group mt-9 flex items-center justify-between rounded-2xl bg-primary px-6 py-5 text-white transition-all duration-300 hover:bg-white hover:text-darkmode'
          >
            <div>
              <p className='text-xs font-semibold uppercase tracking-wider opacity-70'>
                Start a conversation
              </p>

              <p className='mt-1 text-lg font-bold'>
                Let&apos;s Grow Together
              </p>
            </div>

            <span className='flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-xl transition-transform duration-300 group-hover:translate-x-1'>
              →
            </span>
          </a>

          {/* BRAND STATEMENT */}
          <div className='mt-14'>
            <p className='text-4xl font-black leading-[1.02] tracking-tight text-white'>
              Make your
              <br />
              product
              <br />
              <span className='text-primary'>
                impossible to ignore.
              </span>
            </p>

            <div className='mt-7 flex items-center gap-3'>
              <span className='h-2 w-2 rounded-full bg-primary' />

              <span className='text-xs font-medium text-white/40'>
                Product Growth & Marketplace Partner
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Header