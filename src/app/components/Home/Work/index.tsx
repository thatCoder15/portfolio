// 'use client'
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import Slider from 'react-slick'
// import { workdata } from '@/app/types/workdata'
// import WorkSkeleton from '../../Skeleton/Work'

// const settings = {
//   dots: false,
//   infinite: true,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   arrows: false,
//   autoplay: true,
//   speed: 4000,
//   autoplaySpeed: 2000,
//   cssEase: 'linear',
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 450,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//       },
//     },
//   ],
// }

// const Work = () => {
//   // fetch work data
//   const [work, setWork] = useState<workdata[]>([])
//   const [loading, setLoding] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/data')
//         if (!res.ok) throw new Error('Failed to fetch')
//         const data = await res.json()
//         setWork(data.WorkData)
//       } catch (error) {
//         console.error('Error fetching services:', error)
//       } finally {
//         setLoding(false)
//       }
//     }

//     fetchData()
//   }, [])

//   return (
//     <section
//       id='Team'
//       className="relative dark:bg-darkmode py-4 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
//       <div className='container mx-auto max-w-7xl px-4'>
//         <div className='text-center overflow-hidden'>
//           <h3 className='text-black my-5'>
//             We work in several verticals.
//           </h3>
//         </div>
//       </div>

//       <Slider {...settings}>
//         {loading
//           ? Array.from({ length: 5 }).map((_, i) => <WorkSkeleton key={i} />)
//           : work.map((items, i) => (
//               <div key={i}>
//                 <div className='bg-white dark:bg-darkHeroBg m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
//                   <div className='relative'>
//                     <Image
//                       src={items.imgSrc}
//                       alt='gaby'
//                       width={182}
//                       height={182}
//                       className='inline-block m-auto'
//                     />
//                     <div className='absolute right-16 bottom-0 bg-white shadow-linckedin p-5 rounded-full'>
//                       <Image
//                         src={'/images/wework/linkedin.svg'}
//                         alt='greenbg'
//                         width={30}
//                         height={30}
//                         className='inline-block'
//                       />
//                     </div>
//                   </div>
//                   <h6 className='text-xl text-black dark:text-white font-bold pt-14'>
//                     {items.name}
//                   </h6>
//                   <p className='text-base dark:text-white font-normal pt-4 pb-2'>
//                     {items.profession}
//                   </p>
//                 </div>
//               </div>
//             ))}
//       </Slider>
//     </section>
//   )
// }
// export default Work



// 'use client'

// import Image from 'next/image'
// import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// const brands = [
//   {
//     name: 'Boldfit',
//     logo: '/images/brands/brand-01.png',
//   },
//   {
//     name: 'DeoDap',
//     logo: '/images/brands/brand-02.png',
//   },
//   {
//     name: 'Glivary',
//     logo: '/images/brands/brand-03.png',
//   },
//   {
//     name: 'Luella',
//     logo: '/images/brands/brand-04.png',
//   },
//   {
//     name: 'KAHARA',
//     logo: '/images/brands/brand-05.png',
//   },
//   {
//     name: 'YADAV CRAFT',
//     logo: '/images/brands/brand-06.png',
//   },
// ]

// const settings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 0,
//   speed: 4000,
//   cssEase: 'linear',
//   pauseOnHover: true,
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 450,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// }

// const Work = () => {
//   return (
//     <section
//       id="Brands"
//       className="relative overflow-hidden bg-cover bg-center py-16 lg:py-20"
//     >
//       {/* Background Decorations */}
//       <div
//         className="absolute inset-0 -z-10 bg-no-repeat bg-center opacity-70"
//         style={{
//           backgroundImage: "url('/images/wework/elipse.svg')",
//         }}
//       />

//       <div
//         className="absolute right-0 top-20 -z-10 h-1/3 w-1/3 bg-no-repeat bg-right-top opacity-70"
//         style={{
//           backgroundImage: "url('/images/wework/vector.svg')",
//         }}
//       />

//       {/* Heading */}
//       <div className="container mx-auto max-w-7xl px-4">
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
//             Our Brand Network
//           </p>

//           <h2 className="mb-5">
//             Brands We Work With
//           </h2>

//           <p className="text-lg leading-8 text-black/65">
//             We work with brands across multiple categories, helping them
//             strengthen product visibility, build market presence, and create
//             meaningful growth opportunities.
//           </p>
//         </div>
//       </div>

//       {/* Brand Slider */}
//       <div className="mx-auto max-w-[1600px]">
//         <Slider {...settings}>
//           {brands.map((brand) => (
//             <div key={brand.name}>
//               <div className="px-3 py-4">
//                 <div className="group flex h-52 flex-col items-center justify-center rounded-3xl bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

//                   {/* Brand Logo */}
//                   <div className="flex h-28 w-full items-center justify-center">
//                     <Image
//                       src={brand.logo}
//                       alt={`${brand.name} logo`}
//                       width={180}
//                       height={100}
//                       className="max-h-20 w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* Brand Name */}
//                   <div className="mt-5 border-t border-black/10 pt-4 text-center">
//                     <h6 className="text-lg font-semibold text-black">
//                       {brand.name}
//                     </h6>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Bottom Statement */}
//       <div className="container mx-auto max-w-7xl px-4">
//         <div className="mt-10 text-center">
//           <p className="text-base font-medium text-black/50">
//             Trusted partnerships built around products, people, and growth.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Work

// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const brands = [
//   { name: 'Boldfit', logo: '/images/brands/brand-01.png' },
//   { name: 'DeoDap', logo: '/images/brands/brand-02.png' },
//   { name: 'Glivary', logo: '/images/brands/brand-03.png' },
//   { name: 'Luella', logo: '/images/brands/brand-04.png' },
//   { name: 'KAHARA', logo: '/images/brands/brand-05.png' },
//   { name: 'YADAV CRAFT', logo: '/images/brands/brand-06.png' },
//   { name: 'MaheTri', logo: '/images/brands/brand-07.png' },
//   { name: 'SALTY', logo: '/images/brands/brand-08.png' },
// ]

// const BrandCard = ({
//   brand,
//   index,
// }: {
//   brand: (typeof brands)[number]
//   index: number
// }) => {
//   return (
//     <div className="mx-1.5 w-[155px] shrink-0 sm:mx-2 sm:w-[175px]">
//       <motion.div
//         animate={{
//           y: [0, -2, 0, 2, 0],
//         }}
//         transition={{
//           duration: 4 + index * 0.25,
//           repeat: Infinity,
//           ease: 'easeInOut',
//           delay: index * 0.2,
//         }}
//         className="group relative h-[92px] overflow-hidden rounded-[16px] border border-black/[0.07] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:h-[100px]"
//       >
//         {/* Soft animated glow */}
//         <motion.div
//           animate={{
//             scale: [1, 1.25, 1],
//             opacity: [0.025, 0.075, 0.025],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: index * 0.25,
//           }}
//           className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary blur-2xl"
//         />

//         {/* Top number */}
//         <span className="absolute left-3 top-2.5 z-10 text-[7px] font-bold tracking-[0.18em] text-black/20">
//           0{index + 1}
//         </span>

//         {/* Partner */}
//         <div className="absolute right-3 top-2.5 z-10 flex items-center gap-1.5">
//           <motion.span
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [0.3, 1, 0.3],
//             }}
//             transition={{
//               duration: 1.6,
//               repeat: Infinity,
//               delay: index * 0.2,
//             }}
//             className="h-1 w-1 rounded-full bg-primary"
//           />

//           <span className="text-[6px] font-bold uppercase tracking-[0.14em] text-black/20">
//             Partner
//           </span>
//         </div>

//         {/* Logo */}
//         <div className="flex h-full items-center justify-center px-5 pb-1 pt-3">
//           <motion.div
//             animate={{
//               scale: [1, 1.025, 1],
//             }}
//             transition={{
//               duration: 3.5,
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: index * 0.2,
//             }}
//           >
//             <Image
//               src={brand.logo}
//               alt={`${brand.name} logo`}
//               width={160}
//               height={65}
//               className="max-h-[44px] w-auto max-w-[115px] object-contain"
//             />
//           </motion.div>
//         </div>

//         {/* Bottom label */}
//         <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-black/[0.05] bg-white/90 px-3 py-1.5 backdrop-blur-sm">
//           <span className="text-[7px] font-bold uppercase tracking-[0.11em] text-black/35">
//             {brand.name}
//           </span>

//           <motion.span
//             animate={{
//               x: [0, 3, 0],
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//             }}
//             className="text-[10px] text-primary"
//           >
//             ↗
//           </motion.span>
//         </div>

//         {/* Animated bottom line */}
//         <motion.div
//           animate={{
//             width: ['15%', '70%', '15%'],
//           }}
//           transition={{
//             duration: 3.5,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: index * 0.2,
//           }}
//           className="absolute bottom-0 left-0 z-20 h-[2px] bg-primary"
//         />

//         {/* Hover shine */}
//         <motion.div
//           initial={{
//             x: '-180%',
//           }}
//           whileHover={{
//             x: '300%',
//           }}
//           transition={{
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           className="pointer-events-none absolute inset-y-0 z-30 w-[30%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent"
//         />
//       </motion.div>
//     </div>
//   )
// }

// const Work = () => {
//   return (
//     <section
//       id="Brands"
//       className="relative overflow-hidden py-16 lg:py-20"
//     >
//       {/* ================= BACKGROUND ================= */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {/* Existing ellipse */}
//         <div
//           className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.08]"
//           style={{
//             backgroundImage:
//               "url('/images/wework/elipse.svg')",
//           }}
//         />

//         {/* Existing vector */}
//         <motion.div
//           animate={{
//             x: ['-4%', '4%', '-4%'],
//             y: ['-2%', '3%', '-2%'],
//             rotate: [0, 2, 0, -2, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           className="absolute -right-24 top-0 h-[430px] w-[430px] opacity-[0.1]"
//         >
//           <div
//             className="h-full w-full bg-contain bg-right-top bg-no-repeat"
//             style={{
//               backgroundImage:
//                 "url('/images/wework/vector.svg')",
//             }}
//           />
//         </motion.div>

//         {/* Center glow */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.02, 0.055, 0.02],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto max-w-6xl px-4">
//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 18,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="mx-auto max-w-2xl text-center"
//         >
//           <div className="mb-3 flex items-center justify-center gap-3">
//             <motion.span
//               animate={{
//                 width: [18, 36, 18],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//               className="h-px bg-primary"
//             />

//             <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-primary">
//               Brands We Work With
//             </span>

//             <motion.span
//               animate={{
//                 width: [18, 36, 18],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//                 delay: 0.5,
//               }}
//               className="h-px bg-primary"
//             />
//           </div>

//           <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl lg:text-[2.45rem]">
//             Trusted by brands.
//             <span className="text-black/30">
//               {' '}
//               Built for growth.
//             </span>
//           </h2>

//           <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-black/45 sm:text-sm">
//             Working alongside ambitious brands to create stronger
//             visibility, marketplace presence and lasting customer trust.
//           </p>
//         </motion.div>

//         {/* ================= CONTINUOUS BRAND RAIL ================= */}
//         <div className="relative mt-10">
//           {/* Rail lines */}
//           <div className="absolute left-0 right-0 top-0 h-px bg-black/[0.07]" />
//           <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.07]" />

//           {/* Left fade */}
//           <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />

//           {/* Right fade */}
//           <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

//           {/* Moving spotlight */}
//           <motion.div
//             animate={{
//               x: ['-100%', '500%'],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: 'linear',
//             }}
//             className="pointer-events-none absolute inset-y-0 z-20 w-[180px] -skew-x-[20deg] bg-gradient-to-r from-transparent via-primary/[0.055] to-transparent blur-xl"
//           />

//           {/* Rail */}
//           <div className="overflow-hidden py-4">
//             <motion.div
//               className="flex w-max"
//               animate={{
//                 x: ['0%', '-50%'],
//               }}
//               transition={{
//                 duration: 18,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             >
//               {/* First sequence */}
//               {brands.map((brand, index) => (
//                 <BrandCard
//                   key={`first-${brand.name}`}
//                   brand={brand}
//                   index={index}
//                 />
//               ))}

//               {/* Second sequence for seamless loop */}
//               {brands.map((brand, index) => (
//                 <BrandCard
//                   key={`second-${brand.name}`}
//                   brand={brand}
//                   index={index}
//                 />
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* ================= STATUS ================= */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 8,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.6,
//             delay: 0.2,
//           }}
//           className="mt-5 flex items-center justify-center gap-2"
//         >
//           <motion.span
//             animate={{
//               scale: [1, 1.6, 1],
//               opacity: [0.3, 1, 0.3],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//             }}
//             className="h-1.5 w-1.5 rounded-full bg-primary"
//           />

//           <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/25">
//             Growing network
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Work

// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const brands = [
//   { name: 'Society Tea', logo: '/images/brands/brand-01.png' },
//   { name: 'DeoDap', logo: '/images/brands/brand-02.png' },
//   { name: 'Glivary', logo: '/images/brands/brand-03.png' },
//   { name: 'Luella', logo: '/images/brands/brand-04.png' },
//   { name: 'KAHARA', logo: '/images/brands/brand-05.png' },
//   { name: 'YADAV CRAFT', logo: '/images/brands/brand-06.png' },
//   { name: 'MaheTri', logo: '/images/brands/brand-07.png' },
//   { name: 'MIZUNA', logo: '/images/brands/brand-08.png' },
//   { name: 'iSTAR', logo: '/images/brands/brand-09.png' },
//   { name: 'On Time Octus', logo: '/images/brands/brand-10.png' },
//   { name: 'Delavala', logo: '/images/brands/brand-11.png' },
//   { name: 'Vyoox', logo: '/images/brands/brand-12.png' },
//   { name: 'Boldfit', Logo: '/images/brands/brand-13.png'}
// ]

// const BrandCard = ({
//   brand,
//   index,
// }: {
//   brand: (typeof brands)[number]
//   index: number
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 25 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '-50px' }}
//       transition={{
//         duration: 0.55,
//         delay: index * 0.05,
//         ease: 'easeOut',
//       }}
//       whileHover={{ y: -8 }}
//       className="group relative"
//     >
//       <div
//         className="
//           relative
//           h-[155px]
//           overflow-hidden
//           rounded-[22px]
//           border border-black/[0.07]
//           bg-white
//           shadow-[0_8px_30px_rgba(0,0,0,0.045)]
//           transition-all
//           duration-500
//           group-hover:border-primary/30
//           group-hover:shadow-[0_20px_50px_rgba(249,115,22,0.18)]
//           sm:h-[175px]
//         "
//       >

//         {/* Ambient Glow */}
//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             -right-12
//             -top-12
//             h-32
//             w-32
//             rounded-full
//             bg-primary
//             blur-3xl
//           "
//           animate={{
//             scale: [1, 1.15, 1],
//             opacity: [0.025, 0.07, 0.025],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: index * 0.15,
//           }}
//         />

//         {/* Hover Fire Glow */}
//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             left-1/2
//             top-1/2
//             h-24
//             w-24
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-primary/40
//             blur-[28px]
//           "
//           initial={{ opacity: 0, scale: 0.4 }}
//           whileHover={{
//             opacity: 1,
//             scale: 1.35,
//           }}
//           transition={{
//             duration: 0.5,
//             ease: 'easeOut',
//           }}
//         />

//         {/* Fire Particles */}
//         <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           {[...Array(7)].map((_, i) => (
//             <motion.span
//               key={i}
//               className="absolute h-1.5 w-1.5 rounded-full bg-primary"
//               style={{
//                 left: `${25 + i * 8}%`,
//                 top: `${55 - (i % 3) * 8}%`,
//               }}
//               animate={{
//                 y: [0, -25 - (i % 3) * 12, -45],
//                 x: [0, (i % 2 ? 8 : -8), i % 2 ? 14 : -14],
//                 opacity: [0, 0.8, 0],
//                 scale: [0.5, 1, 0.2],
//               }}
//               transition={{
//                 duration: 1 + (i % 3) * 0.2,
//                 repeat: Infinity,
//                 delay: i * 0.08,
//                 ease: 'easeOut',
//               }}
//             />
//           ))}
//         </div>

//         {/* Number */}
//         <span className="absolute left-4 top-4 z-20 text-[9px] font-bold tracking-[0.2em] text-black/20">
//           {String(index + 1).padStart(2, '0')}
//         </span>

//         {/* Partner */}
//         <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5">
//           <motion.span
//             className="h-1.5 w-1.5 rounded-full bg-primary"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [0.35, 1, 0.35],
//             }}
//             transition={{
//               duration: 1.8,
//               repeat: Infinity,
//               delay: index * 0.1,
//             }}
//           />

//           <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-black/25">
//             Partner
//           </span>
//         </div>

//         {/* Logo Area */}
       
// {/* Logo Area */}
// <div className="absolute inset-x-0 top-0 flex h-[115px] items-center justify-center px-8 pt-4 sm:h-[132px]">

//   {/* Logo Glow */}
//   <div
//     className="
//       pointer-events-none
//       absolute
//       h-24
//       w-24
//       rounded-full
//       bg-primary/15
//       opacity-0
//       blur-2xl
//       transition-all
//       duration-500
//       group-hover:scale-150
//       group-hover:opacity-100
//     "
//   />

//   <motion.div
//     className="
//       relative
//       z-10
//       flex
//       h-[76px]
//       w-[76px]
//       items-center
//       justify-center
//       overflow-hidden
//       rounded-full
//       border
//       border-black/[0.07]
//       bg-white
//       shadow-[0_8px_25px_rgba(0,0,0,0.06)]
//       transition-all
//       duration-500
//       group-hover:border-primary/30
//       group-hover:shadow-[0_10px_30px_rgba(249,115,22,0.18)]
//       sm:h-[88px]
//       sm:w-[88px]
//     "
//     whileHover={{
//       scale: 1.08,
//       rotate: 2,
//     }}
//     transition={{
//       type: 'spring',
//       stiffness: 250,
//       damping: 15,
//     }}
//   >

//     {/* Inner Ring */}
//     <div
//       className="
//         pointer-events-none
//         absolute
//         inset-[4px]
//         rounded-full
//         border
//         border-black/[0.045]
//         transition-all
//         duration-500
//         group-hover:border-primary/20
//       "
//     />

//     {/* Logo */}
//     <Image
//       src={brand.logo}
//       alt={`${brand.name} logo`}
//       width={120}
//       height={120}
//       className="
//         relative
//         z-10
//         h-[52px]
//         w-[52px]
//         rounded-full
//         object-contain
//         p-2
//         transition-all
//         duration-500
//         group-hover:scale-110
//         group-hover:drop-shadow-[0_6px_15px_rgba(249,115,22,0.25)]
//         sm:h-[62px]
//         sm:w-[62px]
//       "
//     />

//     {/* Subtle Shine */}
//     <motion.div
//       initial={{ x: '-150%', rotate: 25 }}
//       whileHover={{ x: '150%' }}
//       transition={{
//         duration: 0.7,
//         ease: 'easeInOut',
//       }}
//       className="
//         pointer-events-none
//         absolute
//         inset-y-0
//         z-20
//         w-5
//         bg-gradient-to-r
//         from-transparent
//         via-white/70
//         to-transparent
//         blur-[2px]
//       "
//     />

//   </motion.div>
// </div>



//         {/* Hover Shine */}
//         <motion.div
//           initial={{ x: '-180%' }}
//           whileHover={{ x: '300%' }}
//           transition={{
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           className="
//             pointer-events-none
//             absolute
//             inset-y-0
//             z-30
//             w-[35%]
//             -skew-x-[20deg]
//             bg-gradient-to-r
//             from-transparent
//             via-white/70
//             to-transparent
//           "
//         />

//         {/* Bottom Info */}
//         <div
//           className="
//             absolute
//             bottom-0
//             left-0
//             right-0
//             z-20
//             flex
//             items-center
//             justify-between
//             border-t
//             border-black/[0.06]
//             bg-white/90
//             px-4
//             py-3
//             backdrop-blur-md
//             transition-all
//             duration-500
//             group-hover:border-primary/20
//             group-hover:bg-white
//           "
//         >
//           <div>
//             <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-black/25">
//               Brand
//             </span>

//             <span className="mt-0.5 block truncate text-[13px] font-bold uppercase tracking-[0.08em] text-black/55 transition-colors duration-300 group-hover:text-primary sm:text-[14px]">
//               {brand.name}
//             </span>
//           </div>

//           {/* Arrow */}
//           <motion.span
//             className="
//               flex
//               h-7
//               w-7
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-primary/20
//               bg-primary/[0.06]
//               text-[14px]
//               text-primary
//               transition-all
//               duration-300
//               group-hover:border-primary
//               group-hover:bg-primary
//               group-hover:text-white
//               group-hover:shadow-[0_0_18px_rgba(249,115,22,0.45)]
//             "
//             whileHover={{
//               rotate: 45,
//               scale: 1.1,
//             }}
//           >
//             ↗
//           </motion.span>
//         </div>

//         {/* Animated Orange Border */}
//         <motion.div
//           className="
//             absolute
//             bottom-0
//             left-0
//             z-40
//             h-[2px]
//             bg-primary
//             shadow-[0_0_12px_rgba(249,115,22,0.7)]
//           "
//           initial={{ width: '10%' }}
//           animate={{
//             width: ['10%', '35%', '10%'],
//           }}
//           transition={{
//             duration: 3.5,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: index * 0.15,
//           }}
//         />
//       </div>
//     </motion.div>
//   )
// }

// const Work = () => {
//   return (
//     <section
//       id="Brands"
//       className="relative overflow-hidden py-16 lg:py-20"
//     >

//       {/* ================= BACKGROUND ================= */}

//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

//         {/* Ellipse */}
//         <div
//           className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.08]"
//           style={{
//             backgroundImage:
//               "url('/images/wework/elipse.svg')",
//           }}
//         />

//         {/* Vector */}
//         <motion.div
//           animate={{
//             x: ['-4%', '4%', '-4%'],
//             y: ['-2%', '3%', '-2%'],
//             rotate: [0, 2, 0, -2, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           className="absolute -right-24 top-0 h-[430px] w-[430px] opacity-[0.1]"
//         >
//           <div
//             className="h-full w-full bg-contain bg-right-top bg-no-repeat"
//             style={{
//               backgroundImage:
//                 "url('/images/wework/vector.svg')",
//             }}
//           />
//         </motion.div>

//         {/* Center Glow */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.02, 0.06, 0.02],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto max-w-6xl px-4">

//         {/* ================= HEADER ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto max-w-2xl text-center"
//         >
//           <div className="mb-3 flex items-center justify-center gap-3">

//             <motion.span
//               animate={{
//                 width: [18, 36, 18],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//               className="h-px bg-primary"
//             />

//             <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-primary">
//               Brands We Work With
//             </span>

//             <motion.span
//               animate={{
//                 width: [18, 36, 18],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//                 delay: 0.5,
//               }}
//               className="h-px bg-primary"
//             />
//           </div>

//           <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl lg:text-[2.45rem]">
//             Trusted by brands.
//             <span className="text-black/30">
//               {' '}
//               Built for growth.
//             </span>
//           </h2>

//           <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-black/45 sm:text-sm">
//             Working alongside ambitious brands to create stronger
//             visibility, marketplace presence and lasting customer trust.
//           </p>
//         </motion.div>

//         {/* ================= BRAND GRID ================= */}

//         <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">

//           {brands.map((brand, index) => (
//             <BrandCard
//               key={brand.name}
//               brand={brand}
//               index={index}
//             />
//           ))}

//         </div>

//         {/* ================= FOOTER ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.6,
//             delay: 0.2,
//           }}
//           className="mt-10 flex items-center justify-center gap-2"
//         >
//           <motion.span
//             animate={{
//               scale: [1, 1.6, 1],
//               opacity: [0.3, 1, 0.3],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//             }}
//             className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(249,115,22,0.6)]"
//           />

//           <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/25">
//             Growing network
//           </span>
//         </motion.div>

//       </div>
//     </section>
//   )
// }

// export default Work

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const brands = [
  {
    name: 'Society Tea',
    logo: '/images/brands/brand-01.png',
    cover: '/images/brands/cover.png',
  },
  { name: 'DeoDap', logo: '/images/brands/brand-02.png' },
  { name: 'Glivary', logo: '/images/brands/brand-03.png' },
  { name: 'Luella', logo: '/images/brands/brand-04.png' },
  { name: 'KAHARA', logo: '/images/brands/brand-05.png' },
  { name: 'YADAV CRAFT', logo: '/images/brands/brand-06.png' },
  { name: 'MaheTri', logo: '/images/brands/brand-07.png' },
  { name: 'MIZUNA', logo: '/images/brands/brand-08.png' },
  { name: 'iSTAR', logo: '/images/brands/brand-09.png' },
  { name: 'On Time Octus', logo: '/images/brands/brand-10.png' },
  { name: 'Delavala', logo: '/images/brands/brand-11.png' },
  { name: 'Vyoox', logo: '/images/brands/brand-12.png' },
  { name: 'Boldfit', logo: '/images/brands/brand-13.png' },
]

const BrandCard = ({
  brand,
  index,
}: {
  brand: (typeof brands)[number]
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div
        className="
          relative
          h-[155px]
          overflow-hidden
          rounded-[22px]
          border border-black/[0.07]
          bg-white
          shadow-[0_8px_30px_rgba(0,0,0,0.045)]
          transition-all
          duration-500
          group-hover:border-primary/30
          group-hover:shadow-[0_20px_50px_rgba(249,115,22,0.18)]
          sm:h-[175px]
        "
      >
        {/* Ambient Glow */}
        <motion.div
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-32
            w-32
            rounded-full
            bg-primary
            blur-3xl
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.025, 0.07, 0.025],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.15,
          }}
        />

        {/* Hover Fire Glow */}
        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-24
            w-24
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/40
            blur-[28px]
          "
          initial={{ opacity: 0, scale: 0.4 }}
          whileHover={{
            opacity: 1,
            scale: 1.35,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        />

        {/* Fire Particles */}
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {[...Array(7)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-primary"
              style={{
                left: `${25 + i * 8}%`,
                top: `${55 - (i % 3) * 8}%`,
              }}
              animate={{
                y: [0, -25 - (i % 3) * 12, -45],
                x: [0, i % 2 ? 8 : -8, i % 2 ? 14 : -14],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.2],
              }}
              transition={{
                duration: 1 + (i % 3) * 0.2,
                repeat: Infinity,
                delay: i * 0.08,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Number */}
        <span className="absolute left-4 top-4 z-20 text-[9px] font-bold tracking-[0.2em] text-black/20">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Partner */}
        <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          />

          <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-black/25">
            Partner
          </span>
        </div>

        {/* Logo Area */}
        <div className="absolute inset-x-0 top-0 flex h-[115px] items-center justify-center px-8 pt-4 sm:h-[132px]">

          {/* Logo Glow */}
          <div
            className="
              pointer-events-none
              absolute
              h-24
              w-24
              rounded-full
              bg-primary/15
              opacity-0
              blur-2xl
              transition-all
              duration-500
              group-hover:scale-150
              group-hover:opacity-100
            "
          />

          <motion.div
            className="
              relative
              z-10
              flex
              h-[76px]
              w-[76px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-black/[0.07]
              bg-white
              shadow-[0_8px_25px_rgba(0,0,0,0.06)]
              transition-all
              duration-500
              group-hover:border-primary/30
              group-hover:shadow-[0_10px_30px_rgba(249,115,22,0.18)]
              sm:h-[88px]
              sm:w-[88px]
            "
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 15,
            }}
          >
            {/* Inner Ring */}
            <div
              className="
                pointer-events-none
                absolute
                inset-[4px]
                z-20
                rounded-full
                border
                border-black/[0.045]
                transition-all
                duration-500
                group-hover:border-primary/20
              "
            />

            {/* Society Tea Logo + Cover Crossfade */}
            {brand.cover ? (
              <div className="absolute inset-0">

                {/* Cover Image */}
                <motion.div
                  className="absolute inset-0 z-10"
                  animate={{
                    opacity: [0, 1, 0, 0],
                  }}
                  transition={{
                    duration: 6,
                    times: [0, 0.5, 0.85, 1],
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={brand.cover}
                    alt={`${brand.name} brand showcase`}
                    fill
                    sizes="88px"
                    className="
                      rounded-full
                      object-contain
                      p-1
                    "
                  />
                </motion.div>

                {/* Original Logo */}
                <motion.div
                  className="absolute inset-0 z-10"
                  animate={{
                    opacity: [1, 0, 1, 1],
                  }}
                  transition={{
                    duration: 6,
                    times: [0, 0.5, 0.85, 1],
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="88px"
                    className="
                      rounded-full
                      object-contain
                      p-2
                      transition-all
                      duration-500
                      group-hover:drop-shadow-[0_6px_15px_rgba(249,115,22,0.25)]
                    "
                  />
                </motion.div>

              </div>
            ) : (
              /* Other Brand Logos */
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={120}
                height={120}
                className="
                  relative
                  z-10
                  h-[52px]
                  w-[52px]
                  rounded-full
                  object-contain
                  p-2
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:drop-shadow-[0_6px_15px_rgba(249,115,22,0.25)]
                  sm:h-[62px]
                  sm:w-[62px]
                "
              />
            )}

            {/* Subtle Shine */}
            <motion.div
              initial={{ x: '-150%', rotate: 25 }}
              whileHover={{ x: '150%' }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
              }}
              className="
                pointer-events-none
                absolute
                inset-y-0
                z-30
                w-5
                bg-gradient-to-r
                from-transparent
                via-white/70
                to-transparent
                blur-[2px]
              "
            />
          </motion.div>
        </div>

        {/* Hover Shine */}
        <motion.div
          initial={{ x: '-180%' }}
          whileHover={{ x: '300%' }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            z-30
            w-[35%]
            -skew-x-[20deg]
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
          "
        />

        {/* Bottom Info */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-20
            flex
            items-center
            justify-between
            border-t
            border-black/[0.06]
            bg-white/90
            px-4
            py-3
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:border-primary/20
            group-hover:bg-white
          "
        >
          <div>
            <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-black/25">
              Brand
            </span>

            <span className="mt-0.5 block truncate text-[13px] font-bold uppercase tracking-[0.08em] text-black/55 transition-colors duration-300 group-hover:text-primary sm:text-[14px]">
              {brand.name}
            </span>
          </div>

          {/* Arrow */}
          <motion.span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-primary/20
              bg-primary/[0.06]
              text-[14px]
              text-primary
              transition-all
              duration-300
              group-hover:border-primary
              group-hover:bg-primary
              group-hover:text-white
              group-hover:shadow-[0_0_18px_rgba(249,115,22,0.45)]
            "
            whileHover={{
              rotate: 45,
              scale: 1.1,
            }}
          >
            ↗
          </motion.span>
        </div>

        {/* Animated Orange Border */}
        <motion.div
          className="
            absolute
            bottom-0
            left-0
            z-40
            h-[2px]
            bg-primary
            shadow-[0_0_12px_rgba(249,115,22,0.7)]
          "
          initial={{ width: '10%' }}
          animate={{
            width: ['10%', '35%', '10%'],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.15,
          }}
        />
      </div>
    </motion.div>
  )
}

const Work = () => {
  return (
    <section
      id="Brands"
      className="relative overflow-hidden py-16 lg:py-20"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Ellipse */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.08]"
          style={{
            backgroundImage:
              "url('/images/wework/elipse.svg')",
          }}
        />

        {/* Vector */}
        <motion.div
          animate={{
            x: ['-4%', '4%', '-4%'],
            y: ['-2%', '3%', '-2%'],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-24 top-0 h-[430px] w-[430px] opacity-[0.1]"
        >
          <div
            className="h-full w-full bg-contain bg-right-top bg-no-repeat"
            style={{
              backgroundImage:
                "url('/images/wework/vector.svg')",
            }}
          />
        </motion.div>

        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
              Brands We Work With
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

          <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl lg:text-[2.45rem]">
            Trusted by brands.
            <span className="text-black/30">
              {' '}
              Built for growth.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-black/45 sm:text-sm">
            Working alongside ambitious brands to create stronger
            visibility, marketplace presence and lasting customer trust.
          </p>
        </motion.div>

        {/* ================= BRAND GRID ================= */}

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">

          {brands.map((brand, index) => (
            <BrandCard
              key={brand.name}
              brand={brand}
              index={index}
            />
          ))}

        </div>

        {/* ================= FOOTER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <motion.span
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(249,115,22,0.6)]"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/25">
            Growing network
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Work
