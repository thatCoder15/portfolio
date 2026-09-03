
'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

const Footer = () => {
  const services = [
    'Product Visibility & Growth',
    'Influencer Marketing',
    'Product & Brand Reputation',
    'Customized Growth Strategy',
  ]

  const platforms = [
    'Amazon',
    'Flipkart',
    'Myntra',
    'AJIO',
    'Meesho',
    'Blinkit',
    'Zepto',
    'Instamart',
  ]

  return (
    <footer
      className='relative overflow-hidden bg-black'
      id='first-section'
    >
      {/* Background Glow */}
      <div className='pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-primary/10 blur-3xl' />

      <div className='pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl' />

      {/* Main Footer */}
      <div className='container relative mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28'>

        {/* CTA */}
        <div className='mb-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-14'>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>
            Let&apos;s Grow Together
          </p>

          <h2 className='mx-auto mb-5 max-w-3xl text-white'>
            Ready to Build a Stronger
            <br className='hidden sm:block' /> Product Presence?
          </h2>

          <p className='mx-auto mb-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg'>
            Let&apos;s create a focused growth strategy for your product,
            built around visibility, marketplace presence, and meaningful
            customer engagement.
          </p>

          <Link
            href='/#Contact'
            className='inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
          >
            Start a Conversation
            <Icon
              icon='tabler:arrow-up-right'
              width='20'
              height='20'
            />
          </Link>
        </div>

        {/* Footer Content */}
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10'>

          {/* Brand */}
          <div className='lg:col-span-4'>
            <Link
              href='/'
              className='group inline-block'
            >
              <h3 className='mb-5 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-primary'>
                The Achievers
              </h3>
            </Link>

            <p className='max-w-sm text-base leading-7 text-white/60'>
              We help ambitious brands strengthen product visibility,
              marketplace presence, and customer engagement through focused
              growth campaigns and strategic execution.
            </p>

            {/* Social */}
            <div className='mt-8 flex items-center gap-3'>
              <Link
                href='#'
                aria-label='Instagram'
                className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'
              >
                <Icon
                  icon='tabler:brand-instagram'
                  width='21'
                  height='21'
                />
              </Link>

              {/* <Link
                href='#'
                aria-label='LinkedIn'
                className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'
              >
                <Icon
                  icon='tabler:brand-linkedin'
                  width='21'
                  height='21'
                />
              </Link> */}
              <Link
  href='https://www.linkedin.com/in/shweta-jain-3037a93bb/'
  target='_blank'
  rel='noopener noreferrer'
  aria-label='LinkedIn'
  className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'
>
  <Icon
    icon='tabler:brand-linkedin'
    width='21'
    height='21'
  />
</Link>
            </div>
          </div>

          {/* Services */}
          <div className='lg:col-span-3'>
            <h5 className='mb-6 text-lg font-semibold text-white'>
              What We Do
            </h5>

            <ul className='space-y-4'>
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href='/#Services'
                    className='group flex items-start gap-2 text-base text-white/60 transition-colors duration-300 hover:text-white'
                  >
                    <Icon
                      icon='tabler:arrow-up-right'
                      width='17'
                      height='17'
                      className='mt-0.5 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                    />

                    <span className='transition-transform duration-300 group-hover:translate-x-1'>
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div className='lg:col-span-2'>
            <h5 className='mb-6 text-lg font-semibold text-white'>
              Platforms
            </h5>

            <ul className='grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-1'>
              {platforms.map((platform) => (
                <li key={platform}>
                  <span className='text-base text-white/60'>
                    {platform}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className='lg:col-span-3'>
            <h5 className='mb-6 text-lg font-semibold text-white'>
              Company
            </h5>

            <ul className='space-y-4'>
              <li>
                <Link
                  href='/#About'
                  className='text-base text-white/60 transition-colors duration-300 hover:text-white'
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href='/#Brands'
                  className='text-base text-white/60 transition-colors duration-300 hover:text-white'
                >
                  Brands We Work With
                </Link>
              </li>

              <li>
                <Link
                  href='/#Contact'
                  className='text-base text-white/60 transition-colors duration-300 hover:text-white'
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href='/#Contact'
                  className='text-base text-white/60 transition-colors duration-300 hover:text-white'
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10'>
        <div className='container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>

            <p className='text-center text-sm text-white/50 md:text-left'>
              © {new Date().getFullYear()} The Achievers. All rights reserved.
            </p>

            <div className='flex items-center gap-5'>
              <Link
                href='/privacy-policy'
                className='text-sm text-white/50 transition-colors duration-300 hover:text-white'
              >
                Privacy Policy
              </Link>

              <span className='h-4 w-px bg-white/20' />

              <Link
                href='/terms-and-conditions'
                className='text-sm text-white/50 transition-colors duration-300 hover:text-white'
              >
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
