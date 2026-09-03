
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='relative min-h-screen overflow-hidden pt-24 lg:pt-20'>

      {/* Background Decoration */}

      <div className='pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl' />

      <motion.div
        className='pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-orange-300/10 blur-3xl'
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}

      <div className='container mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 sm:px-6 lg:px-8'>

        <div className='grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8'>

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Eyebrow */}

            <motion.div
              className='mb-6 flex items-center gap-3'
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className='h-2.5 w-2.5 rounded-full bg-primary' />

              <span className='text-sm font-bold uppercase tracking-[0.2em] text-primary'>
                Product Growth Partner
              </span>

              <span className='h-px w-10 bg-primary/30' />
            </motion.div>

            {/* Heading */}

            <motion.h1
              className='max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]'
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Make Your Product
              <br />

              <span className='relative inline-block text-primary'>
                Impossible
                <motion.span
                  className='absolute -bottom-2 left-0 h-1 rounded-full bg-primary'
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    ease: 'easeOut',
                  }}
                />
              </span>{' '}
              To Ignore.
            </motion.h1>

            {/* Description */}

            <motion.p
              className='mt-7 max-w-xl text-lg leading-8 text-black/60'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
            >
              The Achievers helps brands strengthen product visibility,
              marketplace presence, influencer campaigns, and customer
              engagement across major digital platforms.
            </motion.p>

            {/* Bottom Content */}

            <motion.div
              className='mt-9 flex flex-wrap items-center gap-5'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
            >

              <a
                href='#Contact'
                className='group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30'
              >
                Let&apos;s Work Together

                <span className='flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </a>

              <a
                href='#Brands'
                className='group flex items-center gap-2 font-semibold text-darkmode transition-colors duration-300 hover:text-primary'
              >
                Explore Our Work

                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  ↗
                </span>
              </a>

            </motion.div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            className='relative flex min-h-[480px] items-center justify-center lg:min-h-[600px]'
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Main Glow */}

            <motion.div
              className='absolute h-[320px] w-[320px] rounded-full bg-primary/15 blur-3xl sm:h-[430px] sm:w-[430px]'
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Orbit */}

            <motion.div
              className='absolute h-[340px] w-[340px] rounded-full border border-primary/15 sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]'
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className='absolute h-[260px] w-[260px] rounded-full border border-dashed border-primary/20 sm:h-[350px] sm:w-[350px]'
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Image */}

            <motion.div
              className='relative z-10'
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src='/images/hero/pg.png'
                alt='The Achievers'
                width={600}
                height={600}
                priority
                className='h-auto w-full max-w-[360px] object-contain sm:max-w-[430px] lg:max-w-[500px]'
              />
            </motion.div>

            {/* Floating Orange Element */}

            <motion.div
              className='absolute right-[8%] top-[15%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white shadow-xl shadow-primary/20'
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ↗
            </motion.div>

            {/* Floating Dot */}

            <motion.div
              className='absolute bottom-[16%] left-[8%] h-5 w-5 rounded-full bg-primary'
              animate={{
                y: [0, 12, 0],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Small Decorative Dot */}

            <motion.div
              className='absolute left-[18%] top-[18%] h-3 w-3 rounded-full bg-primary/40'
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}

      <motion.div
        className='absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/35 lg:flex'
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className='h-px w-8 bg-black/20' />
        Scroll to explore
        <span className='h-px w-8 bg-black/20' />
      </motion.div>

    </section>
  )
}

export default Hero
