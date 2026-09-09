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

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const brands = [
  { name: 'Boldfit', logo: '/images/brands/brand-01.png' },
  { name: 'DeoDap', logo: '/images/brands/brand-02.png' },
  { name: 'Glivary', logo: '/images/brands/brand-03.png' },
  { name: 'Luella', logo: '/images/brands/brand-04.png' },
  { name: 'KAHARA', logo: '/images/brands/brand-05.png' },
  { name: 'YADAV CRAFT', logo: '/images/brands/brand-06.png' },
  { name: 'MaheTri', logo: '/images/brands/brand-07.png' },
  { name: 'SALTY', logo: '/images/brands/brand-08.png' },
  { name: 'iSTAR', logo: '/images/brands/brand-09.png' },
]

const BrandCard = ({
  brand,
  index,
}: {
  brand: (typeof brands)[number]
  index: number
}) => {
  return (
    <div className="mx-1.5 w-[165px] shrink-0 sm:mx-2 sm:w-[185px]">
      <motion.div
        animate={{
          y: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 5 + index * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2,
        }}
        className="group relative h-[98px] overflow-hidden rounded-[16px] border border-primary/[0.12] bg-white shadow-[0_8px_25px_rgba(249,115,22,0.07),0_3px_12px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/[0.35] hover:shadow-[0_18px_45px_rgba(249,115,22,0.22),0_8px_25px_rgba(249,115,22,0.12)] sm:h-[106px]"
      >
        {/* Ambient Orange Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.035, 0.1, 0.035],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.25,
          }}
          className="absolute -right-10 -top-10 z-0 h-28 w-28 rounded-full bg-primary blur-3xl"
        />

        {/* Bottom Orange Glow */}
        <motion.div
          animate={{
            opacity: [0.02, 0.07, 0.02],
            scaleX: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.15,
          }}
          className="absolute -bottom-5 left-1/2 z-0 h-10 w-28 -translate-x-1/2 rounded-full bg-primary blur-2xl"
        />

        {/* ============================= */}
        {/* FIRE / FLAME HOVER EFFECT */}
        {/* ============================= */}

        {/* Main Fire Glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.55,
          }}
          whileHover={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.45,
            ease: 'easeOut',
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-[20px]"
        />

        {/* Fire Core */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          whileHover={{
            opacity: [0.35, 0.75, 0.4],
            scale: [0.75, 1.15, 0.9],
          }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-gradient-to-t from-primary via-orange-400/60 to-yellow-300/20 blur-[10px]"
        />

        {/* Flame Tendrils */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="pointer-events-none absolute inset-0 z-[1]"
        >
          <motion.span
            animate={{
              y: [4, -7, 3],
              x: [-2, 4, -2],
              scaleY: [1, 1.3, 0.9],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-[38%] top-[25%] h-[48px] w-[13px] rotate-[18deg] rounded-full bg-gradient-to-t from-primary via-orange-400 to-yellow-300/20 blur-[5px]"
          />

          <motion.span
            animate={{
              y: [-2, -10, 2],
              x: [3, -3, 2],
              scaleY: [0.9, 1.35, 1],
              opacity: [0.25, 0.65, 0.25],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.15,
            }}
            className="absolute left-[52%] top-[20%] h-[52px] w-[14px] -rotate-[15deg] rounded-full bg-gradient-to-t from-primary via-orange-400 to-yellow-300/10 blur-[5px]"
          />

          <motion.span
            animate={{
              y: [3, -8, 4],
              x: [-1, 4, -1],
              scaleY: [1, 1.25, 0.9],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 1.25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
            className="absolute left-[61%] top-[28%] h-[42px] w-[11px] rotate-[20deg] rounded-full bg-gradient-to-t from-primary via-orange-500 to-yellow-300/10 blur-[5px]"
          />
        </motion.div>

        {/* ============================= */}
        {/* MARVELOUS BACKGROUND */}
        {/* ============================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          whileHover={{
            opacity: 0.14,
            scale: 1.08,
          }}
          transition={{
            duration: 0.65,
            ease: 'easeOut',
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[34px] font-black uppercase tracking-[-0.07em] text-primary sm:text-[39px]"
        >
          MARVELOUS
        </motion.div>

        {/* ============================= */}
        {/* BRAND NUMBER */}
        {/* ============================= */}

        <span className="absolute left-3 top-2.5 z-20 text-[8px] font-bold tracking-[0.18em] text-black/25 sm:text-[9px]">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Partner Indicator */}
        <div className="absolute right-3 top-2.5 z-20 flex items-center gap-1.5">
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_7px_rgba(249,115,22,0.55)]"
          />

          <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-black/25 sm:text-[8px]">
            Partner
          </span>
        </div>

        {/* ============================= */}
        {/* 3D LOGO FLIP */}
        {/* ============================= */}

        <div
          className="absolute inset-0 z-10 flex items-center justify-center pb-2 pt-3"
          style={{
            perspective: '700px',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
            className="relative transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:scale-[1.16] group-hover:[transform:rotateY(360deg)]"
          >
            {/* Logo Glow Behind */}
            <div className="absolute inset-0 scale-[0.8] rounded-full bg-primary/20 opacity-0 blur-xl transition-all duration-500 group-hover:scale-[1.4] group-hover:opacity-100" />

            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={170}
              height={70}
              className="relative z-10 max-h-[48px] w-auto max-w-[125px] object-contain drop-shadow-[0_3px_7px_rgba(0,0,0,0.05)] transition-all duration-700 group-hover:drop-shadow-[0_8px_18px_rgba(249,115,22,0.4)] sm:max-h-[52px] sm:max-w-[135px]"
            />
          </motion.div>
        </div>

        {/* Hover Ring */}
        <motion.div
          initial={{
            scale: 0.4,
            opacity: 0,
          }}
          whileHover={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-[4] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 group-hover:h-[88px] group-hover:w-[88px]"
        />

        {/* Bottom Brand Info */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between border-t border-primary/[0.08] bg-white/92 px-3 py-1.5 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/25 group-hover:bg-white/95 sm:px-3.5 sm:py-2">
          <span className="truncate pr-2 text-[12px] font-bold uppercase tracking-[0.08em] text-black/50 transition-colors duration-500 group-hover:text-primary sm:text-[13px] sm:tracking-[0.1em]">
            {brand.name}
          </span>

          {/* Orange Arrow */}
          <motion.span
            animate={{
              x: [0, 3, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.15,
            }}
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.09] text-[13px] font-semibold leading-none text-primary shadow-[0_3px_10px_rgba(249,115,22,0.15)] transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] sm:h-[23px] sm:w-[23px] sm:text-[14px]"
          >
            ↗
          </motion.span>
        </div>

        {/* Animated Orange Bottom Line */}
        <motion.div
          animate={{
            width: ['15%', '70%', '15%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2,
          }}
          className="absolute bottom-0 left-0 z-30 h-[2px] bg-primary shadow-[0_0_10px_rgba(249,115,22,0.65)]"
        />

        {/* Hover Shine */}
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
          className="pointer-events-none absolute inset-y-0 z-40 w-[30%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent"
        />
      </motion.div>
    </div>
  )
}

const Work = () => {
  return (
    <section
      id="Brands"
      className="relative overflow-hidden py-16 lg:py-20"
    >
      {/* Background Art */}
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

        {/* Center Orange Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.065, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
          }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Eyebrow */}
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

          {/* Heading */}
          <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl lg:text-[2.45rem]">
            Trusted by brands.
            <span className="text-black/30">
              {' '}
              Built for growth.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-black/45 sm:text-sm">
            Working alongside ambitious brands to create stronger
            visibility, marketplace presence and lasting customer trust.
          </p>
        </motion.div>

        {/* Brand Rail */}
        <div className="relative mt-10">
          {/* Top Border */}
          <div className="absolute left-0 right-0 top-0 h-px bg-primary/[0.12]" />

          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/[0.12]" />

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

          {/* Moving Orange Spotlight */}
          <motion.div
            animate={{
              x: ['-100%', '500%'],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="pointer-events-none absolute inset-y-0 z-20 w-[200px] -skew-x-[20deg] bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent blur-xl"
          />

          {/* Continuous Rail */}
          <div className="overflow-hidden py-4">
            <div className="animate-brand-rail flex w-max">
              {/* First Sequence */}
              {brands.map((brand, index) => (
                <BrandCard
                  key={`first-${brand.name}`}
                  brand={brand}
                  index={index}
                />
              ))}

              {/* Repeated Sequence */}
              {brands.map((brand, index) => (
                <BrandCard
                  key={`second-${brand.name}`}
                  brand={brand}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Indicator */}
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-5 flex items-center justify-center gap-2"
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

      {/* Rail Animation */}
      <style jsx global>{`
        @keyframes brandRail {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-brand-rail {
          animation-name: brandRail;
          animation-duration: 36s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: running;
          will-change: transform;
        }

        .animate-brand-rail:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Work