// // 'use client'
// // import { useEffect, useState } from 'react'
// // import { aboutdata } from '@/app/types/aboutdata'
// // import Link from 'next/link'
// // import Image from 'next/image'
// // import { Icon } from '@iconify/react'
// // import AboutSkeleton from '../../Skeleton/AboutUs'

// // const Aboutus = () => {
// //   // fetch about data
// //   const [about, setAbout] = useState<aboutdata[]>([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await fetch('/api/data')
// //         if (!res.ok) throw new Error('Failed to fetch')
// //         const data = await res.json()
// //         setAbout(data.Aboutdata)
// //       } catch (error) {
// //         console.error('Error fetching services:', error)
// //       } finally {
// //         setLoading(false)
// //       }
// //     }
// //     fetchData()
// //   }, [])

// //   return (
// //     <section id='About' className=' bg-cover bg-center overflow-hidden'>
// //       <div className='container mx-auto max-w-7xl px-4 relative z-1'>
// //         <div className='p-12 bg-grey rounded-3xl'>
// //           <Image
// //             src='/images/aboutus/dots.svg'
// //             width={100}
// //             height={100}
// //             alt='dots-image'
// //             className='absolute bottom-1 -left-20'
// //           />
// //           <p className='text-center text-primary text-lg tracking-widest uppercase mt-10'>
// //             about us
// //           </p>
// //           <h2 className='text-center pb-12'>Know more about us.</h2>
// //           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
// //             {loading
// //               ? Array.from({ length: 3 }).map((_, index) => (
// //                   <AboutSkeleton key={index} />
// //                 ))
// //               : about.map((item, i) => (
// //                   <div
// //                     key={i}
// //                     className='hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group'>
// //                     <h5 className='group-hover:text-white mb-5'>
// //                       {item.heading}
// //                     </h5>
// //                     <Image
// //                       src={item.imgSrc}
// //                       alt={item.imgSrc}
// //                       width={100}
// //                       height={100}
// //                       className='mb-5'
// //                     />
// //                     <p className='text-lg font-normal text-black group-hover:text-white mb-5'>
// //                       {item.paragraph}
// //                     </p>
// //                     <Link
// //                       href='#'
// //                       className='text-18 font-semibold text-primary hover-underline flex items-center'>
// //                       {item.link}
// //                       <Icon
// //                         icon='tabler:chevron-right'
// //                         width='20'
// //                         height='20'
// //                       />
// //                     </Link>
// //                   </div>
// //                 ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Aboutus



// 'use client'

// import Image from 'next/image'

// const services = [
//   {
//     number: '01',
//     title: 'Product Visibility & Growth',
//     description:
//       'We help brands strengthen product visibility across major marketplaces and quick-commerce platforms through focused campaigns and consistent execution.',
//   },
//   {
//     number: '02',
//     title: 'Influencer Marketing',
//     description:
//       'We connect products with relevant creators and execute influencer campaigns designed to increase awareness, engagement, and product discovery.',
//   },
//   {
//     number: '03',
//     title: 'Product & Brand Reputation',
//     description:
//       'We help brands build a stronger market presence by focusing on customer feedback, product perception, reputation, and overall brand positioning.',
//   },
//   {
//     number: '04',
//     title: 'Customized Growth Strategy',
//     description:
//       'Every product has different goals and challenges. We create customized strategies based on the product, platform, audience, and growth objectives.',
//   },
// ]

// const platforms = [
//   {
//     name: 'Amazon',
//     logo: '/images/platforms/amazon.png',
//   },
//   {
//     name: 'Flipkart',
//     logo: '/images/platforms/flipkart.png',
//   },
//   {
//     name: 'Myntra',
//     logo: '/images/platforms/myntra.png',
//   },
//   {
//     name: 'AJIO',
//     logo: '/images/platforms/ajio.png',
//   },
//   {
//     name: 'Meesho',
//     logo: '/images/platforms/meesho.png',
//   },
//   {
//     name: 'Shopsy',
//     logo: '/images/platforms/shopsy.png',
//   },
//   {
//     name: 'Blinkit',
//     logo: '/images/platforms/blinkit.png',
//   },
//   {
//     name: 'Zepto',
//     logo: '/images/platforms/zepto.png',
//   },
//   {
//     name: 'Instamart',
//     logo: '/images/platforms/instamart.png',
//   },
// ]

// const Aboutus = () => {
//   return (
//     <section id="About" className="overflow-hidden py-20 lg:py-28">
//       <div className="container mx-auto max-w-7xl px-4">

//         {/* Intro */}
//         <div className="mx-auto max-w-5xl text-center">
//           <p className="mb-4 text-lg font-medium uppercase tracking-[0.2em] text-primary">
//             About The Achievers
//           </p>

//           <h2 className="mb-7">
//             We Build Product Visibility
//             <br className="hidden sm:block" /> That Drives Growth
//           </h2>

//           <p className="mx-auto max-w-4xl text-lg leading-8 text-black/70">
//             The Achievers partners with ambitious brands to strengthen their
//             product presence across leading marketplaces and quick-commerce
//             platforms. From marketplace campaigns and influencer marketing to
//             customer feedback, reputation management, and customized growth
//             strategies, we work closely with brands to create a stronger and
//             more competitive product presence.
//           </p>

//           <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-black/70">
//             Our approach is simple — understand the product, identify the
//             right opportunities, build a focused strategy, and execute it
//             effectively to create measurable opportunities for growth.
//           </p>
//         </div>

//         {/* Services */}
//         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
//           {services.map((service) => (
//             <div
//               key={service.number}
//               className="group rounded-3xl bg-grey p-8 transition-all duration-300 hover:bg-darkmode"
//             >
//               <div className="mb-6 flex items-center justify-between">
//                 <span className="text-sm font-semibold tracking-widest text-primary">
//                   {service.number}
//                 </span>

//                 <span className="h-px w-16 bg-primary/30 transition-all duration-300 group-hover:w-24" />
//               </div>

//               <h4 className="mb-4 transition-colors duration-300 group-hover:text-white">
//                 {service.title}
//               </h4>

//               <p className="text-lg leading-8 text-black/70 transition-colors duration-300 group-hover:text-white/70">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Platforms */}
//         <div className="mt-20 rounded-3xl bg-grey px-6 py-12 sm:px-10 lg:px-14">
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
//               Our Network
//             </p>

//             <h3 className="mb-5">
//               Platforms We Work With
//             </h3>

//             <p className="text-lg leading-8 text-black/70">
//               We work across leading marketplaces and quick-commerce platforms
//               to help brands reach customers wherever they shop.
//             </p>
//           </div>

//           {/* Platform Logos */}
//           <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
//             {platforms.map((platform) => (
//               <div
//                 key={platform.name}
//                 className="flex h-28 items-center justify-center rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//               >
//                 <Image
//                   src={platform.logo}
//                   alt={`${platform.name} logo`}
//                   width={140}
//                   height={60}
//                   className="max-h-12 w-auto object-contain"
//                 />
//               </div>
//             ))}

//             {/* More Platforms */}
//             <div className="flex h-28 flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-white/60 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white">
//               <span className="text-2xl font-bold text-primary">
//                 + More
//               </span>
//               <span className="mt-1 text-sm text-black/60">
//                 Platforms & Channels
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Closing Statement */}
//         {/* <div className="mx-auto mt-16 max-w-4xl text-center">
//           <h3 className="leading-tight">
//             Your Product.
//             <span className="text-primary"> Our Strategy.</span>
//             <br />
//             Your Growth.
//           </h3>
//         </div> */}

//       </div>
//     </section>
//   )
// }

// export default Aboutus

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Product Visibility',
    description:
      'Strengthen your product presence across leading marketplaces and quick-commerce platforms with focused visibility strategies.',
  },
  {
    number: '02',
    title: 'Influencer Marketing',
    description:
      'Connect products with relevant creators and build campaigns that drive awareness, engagement, and meaningful product discovery.',
  },
  {
    number: '03',
    title: 'Brand Reputation',
    description:
      'Build stronger customer confidence through better feedback, product perception, reputation, and consistent market positioning.',
  },
  {
    number: '04',
    title: 'Growth Strategy',
    description:
      'Create customized growth strategies around your product, audience, platform, and business objectives.',
  },
]

const platforms = [
  { name: 'Amazon', logo: '/images/platforms/amazon.png' },
  { name: 'Flipkart', logo: '/images/platforms/flipkart.png' },
  { name: 'Myntra', logo: '/images/platforms/myntra.png' },
  { name: 'AJIO', logo: '/images/platforms/ajio.png' },
  { name: 'Meesho', logo: '/images/platforms/meesho.png' },
  { name: 'Shopsy', logo: '/images/platforms/shopsy.png' },
  { name: 'Blinkit', logo: '/images/platforms/blinkit.png' },
  { name: 'Zepto', logo: '/images/platforms/zepto.png' },
  { name: 'Instamart', logo: '/images/platforms/instamart.png' },
]

const Aboutus = () => {
  return (
    <section id="About" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background Art */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-[-180px] top-[45%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute left-[8%] top-0 h-full w-px bg-black/[0.04]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-black/[0.04]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        {/* =========================================================
            INTRO
        ========================================================= */}
      <motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.65,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="mx-auto max-w-6xl"
>
  {/* Section label */}
  <div className="mb-8 flex items-center gap-3">
    <span className="h-px w-8 bg-primary" />

    <span className="text-xs font-semibold tracking-[0.08em] text-neutral-500">
      About The Achievers
    </span>
  </div>

  {/* Main content */}
  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
    {/* Heading */}
    <div>
      <h3
        className="
          max-w-md
          text-[2rem]
          font-semibold
          leading-[1.2]
          tracking-[-0.025em]
          text-neutral-950
          sm:text-[2.25rem]
          lg:text-[2.5rem]
        "
      >
        Building brands with
        <span className="text-primary"> purpose and precision.</span>
      </h3>
    </div>

    {/* Content */}
    <div className="max-w-2xl">
      <p
        className="
          text-[15px]
          leading-7
          text-neutral-600
          sm:text-base
          sm:leading-7
        "
      >
        The Achievers helps ambitious brands strengthen their digital
        presence, improve visibility, and connect with the audiences
        that matter.
      </p>

      <p
        className="
          mt-5
          text-[14px]
          leading-6
          text-neutral-500
          sm:text-[15px]
          sm:leading-7
        "
      >
        Our work spans marketplace strategy, digital campaigns, customer feedback, positive ratings and reviews, product visibility, and reputation, helping products build trust, attract more customers, increase sales, and achieve measurable growth.
      </p>

      {/* Capabilities */}
      {/* <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-neutral-200 pt-5 sm:grid-cols-4">
        {[
          'Strategy',
          'Marketplace',
          'Digital',
          'Growth',
        ].map((item) => (
          <div
            key={item}
            className="text-sm font-medium text-neutral-800"
          >
            {item}
          </div>
        ))}
      </div> */}
    </div>
  </div>
</motion.div>
        {/* =========================================================
            OUR CAPABILITIES
        ========================================================= */}
        <div className="relative mt-24 lg:mt-32">
          {/* =====================================================
              PROCESS STRIP
          ===================================================== */}
          <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="mx-auto mt-10 w-full max-w-5xl px-2 sm:mt-12"
>
  <div className="relative pt-12">
    {/* Base line */}
    <div className="absolute left-[4%] right-[4%] top-[19px] h-px bg-neutral-200" />

    {/* Animated orange fire trail */}
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        top-[17px]
        h-[4px]
        w-[15%]
        rounded-full
        bg-primary
        blur-[0.5px]
        shadow-[0_0_6px_rgba(255,100,0,0.7),0_0_16px_rgba(255,100,0,0.35)]
      "
      animate={{
        left: ['3%', '82%'],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: [0.45, 0, 0.55, 1],
        times: [0, 0.08, 0.88, 1],
      }}
    />

    {/* Tiny hot core inside the moving trail */}
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        top-[14px]
        h-[10px]
        w-[10px]
        rounded-full
        bg-primary
        blur-[3px]
      "
      animate={{
        left: ['4%', '94%'],
        opacity: [0, 0.9, 0.9, 0],
        scale: [0.6, 1.2, 1, 0.5],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: [0.45, 0, 0.55, 1],
        times: [0, 0.1, 0.88, 1],
      }}
    />

    {/* Points */}
    <div className="relative grid grid-cols-4">
      {[
        {
          number: '01',
          title: 'Understand',
          description: 'The opportunity',
        },
        {
          number: '02',
          title: 'Strategize',
          description: 'The right direction',
        },
        {
          number: '03',
          title: 'Execute',
          description: 'Across key channels',
        },
        {
          number: '04',
          title: 'Grow',
          description: 'With continuous insight',
        },
      ].map((item, index) => (
        <motion.div
          key={item.number}
          className="group relative flex flex-col items-center"
        >
          {/* Point */}
          <motion.div
            className="
              relative z-10
              flex h-[9px] w-[9px]
              items-center justify-center
              rounded-full
              bg-neutral-300
            "
            animate={{
              backgroundColor: [
                'rgb(212,212,212)',
                'rgb(255,100,0)',
                'rgb(212,212,212)',
              ],
              boxShadow: [
                '0 0 0px rgba(255,100,0,0)',
                '0 0 10px rgba(255,100,0,0.75)',
                '0 0 0px rgba(255,100,0,0)',
              ],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              delay: index * 0.95,
              ease: 'easeInOut',
            }}
          />

          {/* Content */}
          <motion.div
            className="mt-4 text-center"
            animate={{
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              delay: index * 0.95,
              ease: 'easeInOut',
            }}
          >
            <span className="text-[9px] font-medium tracking-[0.12em] text-primary/70">
              {item.number}
            </span>

            <h4 className="mt-1 text-[13px] font-semibold tracking-[-0.01em] text-neutral-900 sm:text-sm">
              {item.title}
            </h4>

            <p className="mt-1 text-[10px] leading-4 text-neutral-400 sm:text-[11px]">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>
        </div>

        {/* =========================================================
            PLATFORMS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-24 overflow-hidden rounded-[32px] bg-grey lg:mt-28"
        >
          <div className="relative px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
            {/* Background Circle */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-primary/[0.06]" />

            <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-primary" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Marketplace Network
                  </span>
                </div>

                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Where your customers
                  <br />
                  <span className="text-black/40">shop and discover.</span>
                </h3>
              </div>

              <p className="max-w-md text-base leading-7 text-black/55">
                Our campaigns are built around the platforms where your
                customers already search, compare, discover, and buy.
              </p>
            </div>

            {/* Platform Grid */}
            <div className="relative z-10 mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group flex h-24 items-center justify-center rounded-2xl border border-black/[0.06] bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="relative h-10 w-28 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}

              {/* More Platforms */}
              <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-primary/[0.05] px-5 text-center transition-all duration-300 hover:bg-primary/[0.08]">
                <div>
                  <span className="block text-xl font-semibold text-primary">
                    +
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-black/50">
                    More Platforms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================= */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-24 max-w-4xl text-center lg:mt-28"
        >
          <span className="mx-auto mb-6 block h-10 w-px bg-primary" />

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Built for ambitious products
          </p>

          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[3rem]">
            Better visibility is just the beginning.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/55">
            We help brands create stronger product experiences, connect with
            the right audiences, and build the foundation for sustainable
            marketplace growth.
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Aboutus