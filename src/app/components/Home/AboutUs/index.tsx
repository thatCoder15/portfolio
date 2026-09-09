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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              About The Achievers
            </span>
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Helping products
            <br />
            <span className="text-primary">find their place.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-black/65">
            The Achievers partners with ambitious brands to strengthen their
            product presence across leading marketplaces and quick-commerce
            platforms. From marketplace campaigns and influencer marketing to
            customer feedback, reputation, and customized growth strategies,
            we help products build a stronger and more competitive presence.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-black/50">
            We combine strategy, execution, and channel expertise to identify
            the right opportunities for every product and turn them into
            measurable growth initiatives.
          </p>
        </motion.div>

        {/* =========================================================
            OUR CAPABILITIES
        ========================================================= */}
        <div className="relative mt-24 lg:mt-32">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Capabilities
                </span>
              </div>

              <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[3rem]">
                Where strategy
                <br />
                <span className="text-black/40">meets execution.</span>
              </h3>
            </div>

            <p className="max-w-md text-base leading-7 text-black/60 lg:pb-1">
              From visibility and creator campaigns to reputation and growth
              strategy, we bring together the right channels to help products
              compete in a crowded marketplace.
            </p>
          </motion.div>

          {/* Capability Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-black/[0.06] bg-grey p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:p-9"
              >
                {/* Large Background Number */}
                <span className="pointer-events-none absolute -right-3 -top-8 text-[150px] font-bold leading-none tracking-tighter text-black/[0.035] transition-all duration-500 group-hover:text-primary/[0.08]">
                  {service.number}
                </span>

                {/* Decorative Circle */}
                <div className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full border border-primary/10 transition-all duration-700 group-hover:scale-125 group-hover:border-primary/20" />

                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20">
                      {service.number}
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <span className="text-lg transition-transform duration-300 group-hover:rotate-45">
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Accent */}
                  <div className="mt-8 h-1 w-10 rounded-full bg-primary transition-all duration-500 group-hover:w-20" />

                  {/* Content */}
                  <h4 className="mt-6 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h4>

                  <p className="mt-4 max-w-xl text-base leading-7 text-black/60">
                    {service.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between border-t border-black/[0.07] pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                      The Achievers
                    </span>

                    <span className="text-xs font-medium text-primary">
                      Strategy + Execution
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* =====================================================
              PROCESS STRIP
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-6 overflow-hidden rounded-[28px] bg-darkmode"
          >
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {[
                ['01', 'Understand', 'The product & opportunity'],
                ['02', 'Strategize', 'The right growth approach'],
                ['03', 'Execute', 'Across relevant channels'],
                ['04', 'Grow', 'With continuous optimization'],
              ].map(([number, title, description], index) => (
                <div
                  key={number}
                  className="group relative p-6 transition-colors duration-300 hover:bg-white/[0.04] lg:p-7"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-primary">
                      {number}
                    </span>

                    {index < 3 && (
                      <span className="hidden text-lg text-white/20 lg:block">
                        →
                      </span>
                    )}
                  </div>

                  <h5 className="text-lg font-semibold text-white">
                    {title}
                  </h5>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {description}
                  </p>
                </div>
              ))}
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
        <motion.div
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
        </motion.div>
      </div>
    </section>
  )
}

export default Aboutus