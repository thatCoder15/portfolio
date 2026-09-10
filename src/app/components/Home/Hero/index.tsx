
// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const Hero = () => {
//   return (
//     <section className='relative min-h-screen overflow-hidden pt-24 lg:pt-20'>

//       {/* Background Decoration */}

//       <div className='pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl' />

//       <motion.div
//         className='pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-orange-300/10 blur-3xl'
//         animate={{
//           scale: [1, 1.15, 1],
//           opacity: [0.4, 0.7, 0.4],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       />

//       {/* Main Content */}

//       <div className='container mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 sm:px-6 lg:px-8'>

//         <div className='grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8'>

//           {/* ================= LEFT ================= */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >

//             {/* Eyebrow */}

//             <motion.div
//               className='mb-6 flex items-center gap-3'
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//             >
//               <span className='h-2.5 w-2.5 rounded-full bg-primary' />

//               <span className='text-sm font-bold uppercase tracking-[0.2em] text-primary'>
//                 Product Growth Partner
//               </span>

//               <span className='h-px w-10 bg-primary/30' />
//             </motion.div>

//             {/* Heading */}

//             <motion.h1
//               className='max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]'
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.25,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               Make Your Product
//               <br />

//               <span className='relative inline-block text-primary'>
//                 Impossible
//                 <motion.span
//                   className='absolute -bottom-2 left-0 h-1 rounded-full bg-primary'
//                   initial={{ width: 0 }}
//                   animate={{ width: '75%' }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.9,
//                     ease: 'easeOut',
//                   }}
//                 />
//               </span>{' '}
//               To Ignore.
//             </motion.h1>

//             {/* Description */}

//             <motion.p
//               className='mt-7 max-w-xl text-lg leading-8 text-black/60'
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.45,
//               }}
//             >
//               The Achievers helps brands strengthen product visibility,
//               marketplace presence, influencer campaigns, and customer
//               engagement across major digital platforms.
//             </motion.p>

//             {/* Bottom Content */}

//             <motion.div
//               className='mt-9 flex flex-wrap items-center gap-5'
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.6,
//               }}
//             >

//               <a
//                 href='#Contact'
//                 className='group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30'
//               >
//                 Let&apos;s Work Together

//                 <span className='flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1'>
//                   →
//                 </span>
//               </a>

//               <a
//                 href='#Brands'
//                 className='group flex items-center gap-2 font-semibold text-darkmode transition-colors duration-300 hover:text-primary'
//               >
//                 Explore Our Work

//                 <span className='transition-transform duration-300 group-hover:translate-x-1'>
//                   ↗
//                 </span>
//               </a>

//             </motion.div>

//           </motion.div>

//           {/* ================= RIGHT ================= */}

//           <motion.div
//             className='relative flex min-h-[480px] items-center justify-center lg:min-h-[600px]'
//             initial={{ opacity: 0, scale: 0.9, x: 40 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.2,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >

//             {/* Main Glow */}

//             <motion.div
//               className='absolute h-[320px] w-[320px] rounded-full bg-primary/15 blur-3xl sm:h-[430px] sm:w-[430px]'
//               animate={{
//                 scale: [1, 1.08, 1],
//                 opacity: [0.45, 0.7, 0.45],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             />

//             {/* Orbit */}

//             <motion.div
//               className='absolute h-[340px] w-[340px] rounded-full border border-primary/15 sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]'
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 40,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             />

//             <motion.div
//               className='absolute h-[260px] w-[260px] rounded-full border border-dashed border-primary/20 sm:h-[350px] sm:w-[350px]'
//               animate={{ rotate: -360 }}
//               transition={{
//                 duration: 28,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             />

//             {/* Image */}

//             <motion.div
//               className='relative z-10'
//               animate={{ y: [0, -10, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             >
//               <Image
//                 src='/images/hero/pg.png'
//                 alt='The Achievers'
//                 width={600}
//                 height={600}
//                 priority
//                 className='h-auto w-full max-w-[360px] object-contain sm:max-w-[430px] lg:max-w-[500px]'
//               />
//             </motion.div>

//             {/* Floating Orange Element */}

//             <motion.div
//               className='absolute right-[8%] top-[15%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white shadow-xl shadow-primary/20'
//               animate={{
//                 y: [0, -12, 0],
//                 rotate: [0, 5, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             >
//               ↗
//             </motion.div>

//             {/* Floating Dot */}

//             <motion.div
//               className='absolute bottom-[16%] left-[8%] h-5 w-5 rounded-full bg-primary'
//               animate={{
//                 y: [0, 12, 0],
//                 scale: [1, 1.25, 1],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             />

//             {/* Small Decorative Dot */}

//             <motion.div
//               className='absolute left-[18%] top-[18%] h-3 w-3 rounded-full bg-primary/40'
//               animate={{
//                 scale: [1, 1.5, 1],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             />

//           </motion.div>

//         </div>
//       </div>

//       {/* Bottom Scroll Indicator */}

//       <motion.div
//         className='absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/35 lg:flex'
//         animate={{ y: [0, 6, 0] }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       >
//         <span className='h-px w-8 bg-black/20' />
//         Scroll to explore
//         <span className='h-px w-8 bg-black/20' />
//       </motion.div>

//     </section>
//   )
// }

// export default Hero


// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const Hero = () => {
//   return (
//     <section className='relative min-h-screen overflow-hidden bg-white pt-24 lg:pt-20'>

//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <div className='pointer-events-none absolute inset-0 overflow-hidden'>

//         {/* Soft glow */}
//         <motion.div
//           className='absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/[0.08] blur-3xl'
//           animate={{
//             scale: [1, 1.08, 1],
//             opacity: [0.45, 0.7, 0.45],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//         />

//         {/* Bottom glow */}
//         <div className='absolute -bottom-52 -left-40 h-[480px] w-[480px] rounded-full bg-primary/[0.04] blur-3xl' />

//         {/* Editorial grid */}
//         <div className='absolute left-[7%] top-0 h-full w-px bg-black/[0.045]' />
//         <div className='absolute right-[7%] top-0 h-full w-px bg-black/[0.045]' />
//         <div className='absolute left-0 top-[20%] h-px w-full bg-black/[0.045]' />

//         {/* Giant background word */}
//         <span className='absolute -right-10 top-[20%] select-none text-[11rem] font-black leading-none tracking-[-0.09em] text-black/[0.025] sm:text-[17rem] lg:text-[22rem]'>
//           GROW
//         </span>

//       </div>

//       {/* =========================================================
//           MAIN CONTENT
//       ========================================================= */}

//       <div className='container relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 sm:px-6 lg:px-8'>

//         <div className='grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-4'>

//           {/* =====================================================
//               LEFT CONTENT
//           ===================================================== */}

//           <motion.div
//             className='relative z-30 lg:col-span-6'
//             initial={{ opacity: 0, x: -35 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >

//             {/* Eyebrow */}

//             <motion.div
//               className='mb-7 flex items-center gap-3'
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.15,
//               }}
//             >
//               <span className='h-2 w-2 rounded-full bg-primary' />

//               <span className='text-[10px] font-bold uppercase tracking-[0.28em] text-black/45'>
//                 Product Growth Partner
//               </span>

//               <span className='h-px w-10 bg-primary/40' />
//             </motion.div>

//             {/* =================================================
//                 MAIN HEADING
//             ================================================= */}

//             <motion.h1
//               className='max-w-[620px] text-[3.7rem] font-black leading-[0.92] tracking-[-0.06em] sm:text-[5rem] lg:text-[5.25rem] xl:text-[5.7rem]'
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.25,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               Products
//               <br />

//               <span className='relative inline-block text-primary'>
//                 that get
//                 <motion.span
//                   className='absolute -bottom-2 left-0 h-[4px] rounded-full bg-primary'
//                   initial={{ width: 0 }}
//                   animate={{ width: '65%' }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.9,
//                     ease: 'easeOut',
//                   }}
//                 />
//               </span>

//               <br />

//               noticed.
//             </motion.h1>

//             {/* =================================================
//                 DESCRIPTION
//             ================================================= */}

//             <motion.p
//               className='mt-8 max-w-xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8'
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.45,
//               }}
//             >
//               The Achievers helps brands strengthen product visibility,
//               build customer trust through better feedback and ratings,
//               and grow their presence across digital marketplaces.
//             </motion.p>

//             {/* =================================================
//                 CTA
//             ================================================= */}

//             <motion.div
//               className='mt-9 flex flex-wrap items-center gap-5'
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.6,
//               }}
//             >

//               <a
//                 href='#Contact'
//                 className='group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20'
//               >
//                 Grow Your Product

//                 <span className='flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1'>
//                   →
//                 </span>
//               </a>

//               <a
//                 href='#Brands'
//                 className='group flex items-center gap-2 text-sm font-semibold text-black/65 transition-colors duration-300 hover:text-primary'
//               >
//                 See Our Work

//                 <span className='transition-transform duration-300 group-hover:translate-x-1'>
//                   ↗
//                 </span>
//               </a>

//             </motion.div>

//             {/* =================================================
//                 SERVICE STRIP
//             ================================================= */}

//             <motion.div
//               className='mt-11 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-black/10 pt-5'
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.8,
//               }}
//             >
//               <span className='text-[9px] font-bold uppercase tracking-[0.2em] text-black/30'>
//                 Visibility
//               </span>

//               <span className='h-1 w-1 rounded-full bg-primary/50' />

//               <span className='text-[9px] font-bold uppercase tracking-[0.2em] text-black/30'>
//                 Reviews
//               </span>

//               <span className='h-1 w-1 rounded-full bg-primary/50' />

//               <span className='text-[9px] font-bold uppercase tracking-[0.2em] text-black/30'>
//                 Ratings
//               </span>

//               <span className='h-1 w-1 rounded-full bg-primary/50' />

//               <span className='text-[9px] font-bold uppercase tracking-[0.2em] text-black/30'>
//                 Growth
//               </span>
//             </motion.div>

//           </motion.div>

//           {/* =====================================================
//               RIGHT VISUAL
//           ===================================================== */}

//           <motion.div
//             className='relative min-h-[510px] lg:col-span-6 lg:min-h-[650px]'
//             initial={{ opacity: 0, scale: 0.94, x: 30 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.2,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >

//             {/* =================================================
//                 MAIN CIRCLE
//             ================================================= */}

//             <motion.div
//               className='absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 sm:h-[450px] sm:w-[450px] lg:h-[535px] lg:w-[535px]'
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: 55,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             />

//             {/* Inner dashed ring */}

//             <motion.div
//               className='absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/15 sm:h-[350px] sm:w-[350px]'
//               animate={{
//                 rotate: -360,
//               }}
//               transition={{
//                 duration: 34,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             />

//             {/* =================================================
//                 CENTER GLOW
//             ================================================= */}

//             <motion.div
//               className='absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.09] blur-3xl sm:h-[390px] sm:w-[390px]'
//               animate={{
//                 scale: [1, 1.08, 1],
//                 opacity: [0.45, 0.7, 0.45],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             />

//             {/* =================================================
//                 PRODUCT IMAGE
//             ================================================= */}

//             <motion.div
//               className='absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2'
//               animate={{
//                 y: [-8, 8, -8],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             >
//               <Image
//                 src='/images/hero/pg.png'
//                 alt='The Achievers'
//                 width={600}
//                 height={600}
//                 priority
//                 className='mx-auto h-auto w-full max-w-[350px] object-contain sm:max-w-[440px] lg:max-w-[500px]'
//               />
//             </motion.div>

//             {/* =================================================
//                 REVIEW CARD
//             ================================================= */}

//             <motion.div
//               className='absolute left-[1%] top-[18%] z-20 w-[185px] rounded-2xl border border-black/[0.07] bg-white/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.07)] backdrop-blur-md sm:left-[0%] sm:w-[195px]'
//               initial={{
//                 opacity: 0,
//                 x: -15,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: [0, -4, 0],
//               }}
//               transition={{
//                 opacity: {
//                   duration: 0.6,
//                   delay: 0.8,
//                 },
//                 x: {
//                   duration: 4.5,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 },
//               }}
//             >

//               <div className='flex items-center justify-between'>
//                 <span className='text-[9px] font-bold uppercase tracking-[0.18em] text-black/35'>
//                   Customer Voice
//                 </span>

//                 <span className='text-primary'>✦</span>
//               </div>

//               <div className='mt-3 flex items-center gap-1'>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     className='text-sm text-primary'
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>

//               <p className='mt-2 text-xs font-medium leading-5 text-black/60'>
//                 Trust grows when
//                 <br />
//                 customers speak.
//               </p>

//             </motion.div>

//             {/* =================================================
//                 GROWTH CARD
//             ================================================= */}

//             <motion.div
//               className='absolute bottom-[14%] right-[1%] z-20 rounded-2xl border border-black/[0.07] bg-black px-4 py-3.5 shadow-2xl shadow-black/10 sm:right-[3%]'
//               initial={{
//                 opacity: 0,
//                 y: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: [0, -6, 0],
//               }}
//               transition={{
//                 opacity: {
//                   duration: 0.6,
//                   delay: 1,
//                 },
//                 y: {
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 },
//               }}
//             >

//               <div className='flex items-center gap-3'>

//                 <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg text-white'>
//                   ↗
//                 </div>

//                 <div>
//                   <p className='text-[9px] font-bold uppercase tracking-[0.18em] text-white/40'>
//                     Product
//                   </p>

//                   <p className='mt-0.5 text-sm font-bold text-white'>
//                     Growing
//                   </p>
//                 </div>

//               </div>

//             </motion.div>

//             {/* =================================================
//                 SEARCH / VISIBILITY LABEL
//             ================================================= */}

//             <motion.div
//               className='absolute right-[9%] top-[14%] z-20 hidden items-center gap-2 sm:flex'
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: 1,
//               }}
//             >

//               <span className='h-2 w-2 rounded-full bg-primary' />

//               <span className='text-[9px] font-bold uppercase tracking-[0.22em] text-black/35'>
//                 More Visibility
//               </span>

//             </motion.div>

//             {/* =================================================
//                 ORBIT DOT
//             ================================================= */}

//             <motion.div
//               className='absolute right-[12%] top-[40%] z-20 h-3 w-3 rounded-full bg-primary'
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [0.6, 1, 0.6],
//               }}
//               transition={{
//                 duration: 2.8,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             />

//             {/* =================================================
//                 PLUS MARK
//             ================================================= */}

//             <motion.span
//               className='absolute bottom-[23%] left-[12%] z-20 text-xl font-light text-primary/50'
//               animate={{
//                 rotate: [0, 90, 180, 270, 360],
//               }}
//               transition={{
//                 duration: 10,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             >
//               +
//             </motion.span>

//             {/* =================================================
//                 VERTICAL LABEL
//             ================================================= */}

//             <div className='absolute bottom-[23%] left-[5%] hidden lg:block'>
//               <span className='text-[9px] font-bold uppercase tracking-[0.3em] text-black/25 [writing-mode:vertical-rl]'>
//                 Product • Trust • Growth
//               </span>
//             </div>

//           </motion.div>

//         </div>
//       </div>

//       {/* =========================================================
//           SCROLL INDICATOR
//       ========================================================= */}

//       <motion.div
//         className='absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex'
//         animate={{
//           y: [0, 5, 0],
//         }}
//         transition={{
//           duration: 2.2,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       >
//         <span className='text-[9px] font-bold uppercase tracking-[0.25em] text-black/25'>
//           Explore
//         </span>

//         <span className='h-8 w-px bg-black/15' />
//       </motion.div>

//     </section>
//   )
// }

// export default Hero


'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = ['Strategy', 'Visibility', 'Growth']

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative overflow-hidden bg-[#fafafa] text-neutral-950"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Ambient glow - left */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[-120px] h-[380px] w-[380px] rounded-full bg-primary/[0.08] blur-[110px]"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Ambient glow - right */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[15%] h-[450px] w-[450px] rounded-full bg-primary/[0.06] blur-[130px]"
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.028]
          [background-image:linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Top guide */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-neutral-950/[0.05]"
      />

      {/* Center guide */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-neutral-950/[0.045] lg:block"
      />

      {/* =========================================================
          MAIN
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1440px]
          items-center
          px-6
          pb-10
          pt-8
          sm:px-8
          sm:pb-12
          sm:pt-10
          lg:min-h-[calc(100vh-72px)]
          lg:px-12
          lg:py-8
          xl:px-16
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-8
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="relative z-10 max-w-[610px]">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[11px]">
                Brand • Digital • Growth
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-[540px]
                text-[2.65rem]
                font-semibold
                leading-[1.045]
                tracking-[-0.045em]
                text-neutral-950
                sm:text-[3.2rem]
                lg:text-[3.65rem]
                xl:text-[3.9rem]
              "
            >
              <span className="block">Strategy.  Visibility.</span>

              {/* <span className="relative block">
                Visibility.

                <motion.span
                  aria-hidden="true"
                  className="absolute bottom-[-4px] left-0 h-[2px] bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </span> */}

              <span className="block text-primary">Growth.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-6
                max-w-[485px]
                text-[14px]
                leading-6
                text-neutral-500
                sm:text-[15px]
                sm:leading-7
              "
            >
              We help brands build stronger digital presence, connect with
              the right audience, and create meaningful, measurable growth.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              {/* Primary */}
              <a
                href="#Contact"
                className="
                  group
                  inline-flex
                  h-11
                  items-center
                  gap-3
                  rounded-lg
                  bg-neutral-950
                  px-5
                  text-[13px]
                  font-medium
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-primary
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                "
              >
                Let's work together

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary */}
              <a
                href="#Brands"
                className="
                  inline-flex
                  h-11
                  items-center
                  rounded-lg
                  border
                  border-neutral-200
                  bg-white/70
                  px-5
                  text-[13px]
                  font-medium
                  text-neutral-700
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-neutral-300
                  hover:bg-white
                  hover:text-neutral-950
                "
              >
                Explore our work
              </a>
            </motion.div>

            {/* Service line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.48,
              }}
              className="mt-9 border-t border-neutral-200 pt-4"
            >
              <div className="flex flex-wrap items-center gap-5">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center gap-5"
                  >
                    <span className="text-[11px] font-medium tracking-wide text-neutral-500">
                      {service}
                    </span>

                    {index !== services.length - 1 && (
                      <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}

          <div
            className="
              relative
              flex
              min-h-[390px]
              items-center
              justify-center
              sm:min-h-[440px]
              lg:min-h-[500px]
            "
          >
            {/* Outer orbit */}
            <motion.div
              aria-hidden="true"
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                border
                border-neutral-200/80
                sm:h-[360px]
                sm:w-[360px]
                lg:h-[460px]
                lg:w-[460px]
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Inner orbit */}
            <motion.div
              aria-hidden="true"
              className="
                absolute
                h-[245px]
                w-[245px]
                rounded-full
                border
                border-primary/[0.12]
                sm:h-[300px]
                sm:w-[300px]
                lg:h-[380px]
                lg:w-[380px]
              "
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Orbiting point */}
            <motion.div
              aria-hidden="true"
              className="
                absolute
                h-[300px]
                w-[300px]
                sm:h-[360px]
                sm:w-[360px]
                lg:h-[460px]
                lg:w-[460px]
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_16px_rgba(255,100,0,0.45)]" />
            </motion.div>

            {/* Center glow */}
            <motion.div
              aria-hidden="true"
              className="
                absolute
                h-[230px]
                w-[230px]
                rounded-full
                bg-primary/[0.07]
                blur-[70px]
                sm:h-[280px]
                sm:w-[280px]
              "
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* =================================================
                IMAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10"
            >
              {/* Shadow / glow */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-8
                  rounded-[30px]
                  bg-primary/15
                  blur-[40px]
                "
              />

              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 0.25, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white
                  bg-white
                  p-1.5
                  shadow-[0_25px_70px_rgba(0,0,0,0.11)]
                "
              >
                <div className="relative overflow-hidden rounded-[19px]">
                  <Image
                    src="/images/hero/pg.png"
                    alt="The Achievers"
                    width={520}
                    height={580}
                    priority
                    className="
                      h-auto
                      w-[270px]
                      object-cover
                      sm:w-[330px]
                      lg:w-[375px]
                      xl:w-[400px]
                    "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.06] via-transparent to-white/[0.1]" />
                </div>
              </motion.div>
            </motion.div>

            {/* =================================================
                TOP FLOATING CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -5, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.65,
                  delay: 0.6,
                },
                x: {
                  duration: 0.65,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="
                absolute
                right-0
                top-[10%]
                z-20
                hidden
                w-[160px]
                rounded-xl
                border
                border-white
                bg-white/85
                p-3.5
                shadow-[0_15px_45px_rgba(0,0,0,0.09)]
                backdrop-blur-xl
                sm:block
                lg:right-1
                xl:right-8
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                  Focus
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>

              <p className="mt-2.5 text-[13px] font-semibold tracking-tight text-neutral-900">
                Brand Growth
              </p>

              <div className="mt-3 h-1 overflow-hidden rounded-full bg-neutral-100">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{
                    duration: 1.2,
                    delay: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </div>

              <div className="mt-1.5 flex justify-between text-[9px] text-neutral-400">
                <span>Visibility</span>
                <span>78%</span>
              </div>
            </motion.div>

            {/* =================================================
                BOTTOM FLOATING CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -18,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, 5, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.65,
                  delay: 0.72,
                },
                x: {
                  duration: 0.65,
                  delay: 0.72,
                  ease: [0.16, 1, 0.3, 1],
                },
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="
                absolute
                bottom-[10%]
                left-0
                z-20
                hidden
                rounded-xl
                border
                border-neutral-200/80
                bg-white/90
                px-3.5
                py-3
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
                sm:block
                lg:left-0
                xl:left-6
              "
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5 text-primary"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M4 17l6-6 4 4 6-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M17 8h3v3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-neutral-900">
                    Better Reach
                  </p>

                  <p className="mt-0.5 text-[9px] text-neutral-400">
                    Built for growth
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <motion.span
              aria-hidden="true"
              className="absolute right-[13%] top-[7%] h-1.5 w-1.5 rounded-full bg-primary/60"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.span
              aria-hidden="true"
              className="absolute bottom-[15%] right-[10%] h-2 w-2 rounded-full border border-primary/40"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero