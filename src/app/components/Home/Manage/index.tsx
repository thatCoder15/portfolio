// 'use client'

// import Image from 'next/image'

// const services = [
//   {
//     number: '01',
//     title: 'Marketplace Growth',
//     description:
//       'We help brands strengthen their product presence across major marketplaces through focused campaigns, visibility strategies, and consistent execution.',
//     points: [
//       'Product visibility',
//       'Marketplace campaigns',
//       'Product positioning',
//     ],
//   },
//   {
//     number: '02',
//     title: 'Influencer Marketing',
//     description:
//       'We connect products with relevant creators and manage influencer campaigns designed to increase awareness, engagement, and product discovery.',
//     points: [
//       'Creator discovery',
//       'Campaign execution',
//       'Product awareness',
//     ],
//   },
//   {
//     number: '03',
//     title: 'Product Reputation',
//     description:
//       'We help brands build a stronger and more credible product presence through customer feedback, product perception, and reputation-focused strategies.',
//     points: [
//       'Customer feedback',
//       'Product perception',
//       'Reputation management',
//     ],
//   },
//   {
//     number: '04',
//     title: 'Quick-Commerce Growth',
//     description:
//       'We help brands explore and strengthen their presence across fast-growing quick-commerce platforms where customers are discovering and purchasing products.',
//     points: [
//       'Blinkit',
//       'Zepto',
//       'Instamart',
//     ],
//   },
//   {
//     number: '05',
//     title: 'Customized Strategy',
//     description:
//       'We build product-specific strategies based on your category, audience, competition, platforms, and business goals instead of using a one-size-fits-all approach.',
//     points: [
//       'Product analysis',
//       'Growth planning',
//       'Platform strategy',
//     ],
//   },
//   {
//     number: '06',
//     title: 'Campaign Management',
//     description:
//       'From planning to execution, we coordinate campaigns and keep the work focused on your product goals, audience, visibility, and overall market presence.',
//     points: [
//       'Campaign planning',
//       'Execution support',
//       'Growth tracking',
//     ],
//   },
// ]

// const Manage = () => {
//   return (
//     <section
//       id='Services'
//       className='relative overflow-hidden py-20 lg:py-28'
//     >
//       {/* Existing template decoration */}
//       <Image
//         src='/images/manage/toggle.svg'
//         alt=''
//         width={80}
//         height={80}
//         aria-hidden='true'
//         className='pointer-events-none absolute right-[8%] top-20 hidden opacity-30 lg:block'
//       />

//       <div className='container mx-auto max-w-7xl px-4'>

//         {/* Heading */}
//         <div className='mx-auto max-w-3xl text-center'>
//           <p className='mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary'>
//             What We Do
//           </p>

//           <h2>
//             Strategies Built Around
//             <br className='hidden sm:block' />
//             <span className='text-primary'> Your Product.</span>
//           </h2>

//           <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/65'>
//             We combine marketplace growth, influencer marketing, customer
//             feedback, reputation management, and customized strategies to help
//             brands build stronger product visibility.
//           </p>
//         </div>

//         {/* Services */}
//         <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
//           {services.map((service) => (
//             <div
//               key={service.number}
//               className='group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl'
//             >
//               {/* Number */}
//               <div className='mb-8 flex items-center justify-between'>
//                 <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white'>
//                   {service.number}
//                 </span>

//                 <span className='h-px w-16 bg-black/10 transition-all duration-500 group-hover:w-24 group-hover:bg-primary/40' />
//               </div>

//               <h4 className='mb-4 transition-colors duration-300 group-hover:text-primary'>
//                 {service.title}
//               </h4>

//               <p className='text-base leading-7 text-black/60'>
//                 {service.description}
//               </p>

//               {/* Service points */}
//               <div className='mt-7 space-y-3 border-t border-black/10 pt-6'>
//                 {service.points.map((point) => (
//                   <div
//                     key={point}
//                     className='flex items-center gap-3'
//                   >
//                     <span className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary'>
//                       ✓
//                     </span>

//                     <span className='text-sm font-medium text-black/65'>
//                       {point}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* Hover decoration */}
//               <div className='absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150' />
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className='mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-grey px-7 py-8 sm:flex-row sm:px-10'>
//           <div>
//             <p className='text-xl font-bold text-darkmode'>
//               Have a product that needs more visibility?
//             </p>

//             <p className='mt-2 text-base text-black/55'>
//               Let&apos;s build a strategy around it.
//             </p>
//           </div>

//           <a
//             href='#Contact'
//             className='group flex shrink-0 items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
//           >
//             Let&apos;s Talk

//             <span className='transition-transform duration-300 group-hover:translate-x-1'>
//               →
//             </span>
//           </a>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Manage

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Marketplace Growth',
    description:
      'We help brands strengthen their product presence across major marketplaces through focused campaigns, visibility strategies, and consistent execution.',
    points: [
      'Product visibility',
      'Marketplace campaigns',
      'Product positioning',
    ],
  },
  {
    number: '02',
    title: 'Influencer Marketing',
    description:
      'We connect products with relevant creators and manage influencer campaigns designed to increase awareness, engagement, and product discovery.',
    points: [
      'Creator discovery',
      'Campaign execution',
      'Product awareness',
    ],
  },
  {
    number: '03',
    title: 'Product Reputation',
    description:
      'We help brands build a stronger and more credible product presence through customer feedback, product perception, and reputation-focused strategies.',
    points: [
      'Customer feedback',
      'Product perception',
      'Reputation management',
    ],
  },
  {
    number: '04',
    title: 'Quick-Commerce Growth',
    description:
      'We help brands explore and strengthen their presence across fast-growing quick-commerce platforms where customers are discovering and purchasing products.',
    points: [
      'Blinkit',
      'Zepto',
      'Instamart',
    ],
  },
  {
    number: '05',
    title: 'Customized Strategy',
    description:
      'We build product-specific strategies based on your category, audience, competition, platforms, and business goals instead of using a one-size-fits-all approach.',
    points: [
      'Product analysis',
      'Growth planning',
      'Platform strategy',
    ],
  },
  {
    number: '06',
    title: 'Campaign Management',
    description:
      'From planning to execution, we coordinate campaigns and keep the work focused on your product goals, audience, visibility, and overall market presence.',
    points: [
      'Campaign planning',
      'Execution support',
      'Growth tracking',
    ],
  },
]

const Manage = () => {
  return (
    <section
      id="Services"
      className="relative overflow-hidden py-16 lg:py-20"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: ['-4%', '4%', '-4%'],
            y: ['-2%', '3%', '-2%'],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-24 -top-10 h-[420px] w-[420px] opacity-[0.08]"
        >
          <div
            className="h-full w-full bg-contain bg-right-top bg-no-repeat"
            style={{
              backgroundImage:
                "url('/images/wework/vector.svg')",
            }}
          />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-3xl"
        />

        {/* Moving grid */}
        <motion.div
          animate={{
            x: [0, 70],
            y: [0, 70],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -inset-[70px] opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />
      </div>

      {/* Existing decoration */}
      <Image
        src="/images/manage/toggle.svg"
        alt=""
        width={65}
        height={65}
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-16 hidden opacity-25 lg:block"
      />

      <div className="container mx-auto max-w-6xl px-4">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <motion.span
              animate={{
                width: [18, 36, 18],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-px bg-primary"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-primary">
              What We Do
            </span>

            <motion.span
              animate={{
                width: [18, 36, 18],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="h-px bg-primary"
            />
          </div>

          <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl lg:text-[2.45rem]">
            Strategies built around
            <span className="text-primary"> your product.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-black/45 sm:text-sm">
            We combine marketplace growth, influencer marketing, customer
            feedback, reputation management, and customized strategies to
            help brands build stronger product visibility.
          </p>
        </motion.div>

        {/* ================= SERVICES ================= */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <motion.div
                animate={{
                  y: [0, -1.5, 0, 1.5, 0],
                }}
                transition={{
                  duration: 6 + index * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.25,
                }}
                className="relative h-full overflow-hidden rounded-[20px] border border-black/[0.07] bg-white p-5 shadow-[0_8px_28px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-6"
              >
                {/* Animated glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.025, 0.07, 0.025],
                  }}
                  transition={{
                    duration: 5 + index * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary blur-2xl"
                />

                {/* Top */}
                <div className="relative z-10 flex items-center justify-between">
                  <motion.span
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-[10px] font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                  >
                    {service.number}
                  </motion.span>

                  <motion.span
                    animate={{
                      width: ['28px', '52px', '28px'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.25,
                    }}
                    className="h-px bg-primary/25"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-5 text-lg font-semibold tracking-[-0.025em] transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-2.5 text-[13px] leading-6 text-black/50">
                  {service.description}
                </p>

                {/* Points */}
                <div className="relative z-10 mt-5 space-y-2.5 border-t border-black/[0.07] pt-4">
                  {service.points.map((point, pointIndex) => (
                    <motion.div
                      key={point}
                      initial={{
                        opacity: 0,
                        x: -5,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.25 + index * 0.07 + pointIndex * 0.05,
                      }}
                      className="flex items-center gap-2.5"
                    >
                      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary">
                        ✓
                      </span>

                      <span className="text-[11px] font-medium text-black/55">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Corner decoration */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.35, 0.7, 0.35],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                  className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-primary/[0.035]"
                />

                {/* Bottom moving line */}
                <motion.div
                  animate={{
                    width: ['12%', '55%', '12%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.25,
                  }}
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                />

                {/* Hover shine */}
                <motion.div
                  initial={{
                    x: '-180%',
                  }}
                  whileHover={{
                    x: '300%',
                  }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute inset-y-0 z-20 w-[25%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/60 to-transparent"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="relative mt-8 overflow-hidden rounded-[20px] bg-grey px-5 py-6 sm:px-7 sm:py-7"
        >
          {/* Animated CTA glow */}
          <motion.div
            animate={{
              x: ['-30%', '130%'],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute inset-y-0 w-[30%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent blur-xl"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-base font-semibold tracking-[-0.02em] text-darkmode sm:text-lg">
                Have a product that needs more visibility?
              </p>

              <p className="mt-1 text-xs text-black/50 sm:text-sm">
                Let&apos;s build a strategy around it.
              </p>
            </div>

            <a
              href="#Contact"
              className="group flex shrink-0 items-center gap-2.5 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Let&apos;s Talk

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Manage