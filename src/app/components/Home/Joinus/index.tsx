
'use client'

import { Icon } from '@iconify/react'

const Join = () => {
  return (
    <section
      id='Contact'
      className='relative overflow-hidden py-24 lg:py-32'
    >
      {/* Background decoration */}
      <div className='pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl' />

      <div className='container relative mx-auto max-w-7xl px-4'>

        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary'>
            Let&apos;s Talk
          </p>

          <h2>
            Have a Product?
            <br className='hidden sm:block' />
            <span className='text-primary'> Let&apos;s Grow It.</span>
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60'>
            Whether you&apos;re looking to improve marketplace visibility,
            launch an influencer campaign, build product reputation, or
            create a customized growth strategy, we&apos;d love to hear
            about your brand.
          </p>
        </div>

        {/* Contact Card */}
        <div className='mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] bg-darkmode shadow-2xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>

            {/* Left */}
            <div className='relative overflow-hidden p-8 sm:p-10 lg:p-14'>
              <div className='absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl' />

              <div className='relative'>
                <span className='inline-flex rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary'>
                  Start a conversation
                </span>

                <h3 className='mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl'>
                  Let&apos;s discuss
                  <br />
                  your next move.
                </h3>

                <p className='mt-5 max-w-md text-base leading-7 text-white/60'>
                  Tell us about your product, your goals, and where you want
                  to go. We&apos;ll figure out the right growth approach
                  together.
                </p>

                <div className='mt-10 flex flex-wrap gap-3'>
                  <span className='rounded-full border border-white/10 px-4 py-2 text-sm text-white/70'>
                    Marketplace Growth
                  </span>

                  <span className='rounded-full border border-white/10 px-4 py-2 text-sm text-white/70'>
                    Influencer Marketing
                  </span>

                  <span className='rounded-full border border-white/10 px-4 py-2 text-sm text-white/70'>
                    Product Strategy
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className='bg-white p-8 sm:p-10 lg:p-14'>
              <p className='text-sm font-semibold uppercase tracking-widest text-black/40'>
                Get in touch
              </p>

              <div className='mt-7 space-y-4'>

                {/* Email */}
                <a
                  href='mailto:theachievers18@gmail.com'
                  className='group flex items-center gap-4 rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg'
                >
                  <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white'>
                    <Icon
                      icon='lucide:mail'
                      width='22'
                      height='22'
                    />
                  </span>

                  <div className='min-w-0'>
                    <p className='text-sm text-black/40'>
                      Email
                    </p>

                    <p className='mt-1 break-all font-semibold text-black'>
                      theachievers18@gmail.com
                    </p>
                  </div>

                  <span className='ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary'>
                    →
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href='https://wa.me/917203045355'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-4 rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg'
                >
                  <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white'>
                    <Icon
                      icon='lucide:message-circle'
                      width='22'
                      height='22'
                    />
                  </span>

                  <div>
                    <p className='text-sm text-black/40'>
                      WhatsApp
                    </p>

                    <p className='mt-1 font-semibold text-black'>
                      +91 72030 45355
                    </p>
                  </div>

                  <span className='ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-500'>
                    →
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/shweta-jain-3037a93bb/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-4 rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg'
                >
                  <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white'>
                    <Icon
                      icon='lucide:linkedin'
                      width='22'
                      height='22'
                    />
                  </span>

                  <div>
                    <p className='text-sm text-black/40'>
                      LinkedIn
                    </p>

                    <p className='mt-1 font-semibold text-black'>
                      Connect with us
                    </p>
                  </div>

                  <span className='ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary'>
                    →
                  </span>
                </a>

              </div>

              <p className='mt-7 text-center text-sm text-black/40'>
                We&apos;re always open to discussing new products,
                partnerships and growth opportunities.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Join
