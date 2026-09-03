// import Image from 'next/image'
// import Link from 'next/link'

// export const Logo: React.FC = () => {
//   return (
//     <Link href='/' className='flex items-center gap-3'>
//       {/* Logo Image */}
//       <Image
//         src='/images/logo/logota.png'
//         alt='The Achievers'
//         width={148}
//         height={148}
//         priority
//         className='h-[148px] w-[148px] object-contain sm:h-[52px] sm:w-[52px]'
//       />

//       {/* Brand Name */}
//       <div className='flex flex-col leading-none'>
//         <span className='text-[10px] font-bold uppercase tracking-[0.28em] text-black/50'>
//           The
//         </span>

//         <span className='mt-1 text-xl font-black uppercase tracking-tight text-darkmode sm:text-2xl'>
//           Achievers
//         </span>
//       </div>
//     </Link>
//   )
// }

// export default Logo

// import Image from 'next/image'
// import Link from 'next/link'

// export const Logo: React.FC = () => {
//   return (
//     <Link href='/' className='flex items-center gap-3'>
//       {/* Actual Logo */}
//       <div className='relative h-[72px] w-[78px] shrink-0 overflow-hidden sm:h-[78px] sm:w-[84px]'>
//         <Image
//           src='/images/logo/logota.png'
//           alt='The Achievers'
//           fill
//           priority
//           sizes='84px'
//           className='object-cover object-center'
//         />
//       </div>

//       {/* Brand Name */}
//       <div className='flex flex-col leading-none'>
//         <span className='text-[10px] font-bold uppercase tracking-[0.28em] text-black/50 sm:text-[11px]'>
//           The
//         </span>

//         <span className='mt-1 text-2xl font-black uppercase tracking-tight text-darkmode sm:text-3xl'>
//           Achievers
//         </span>
//       </div>
//     </Link>
//   )
// }

// export default Logo


'use client'

import Image from 'next/image'
import Link from 'next/link'

export const Logo: React.FC = () => {
  return (
    <Link
      href='/'
      className='group relative flex items-center gap-3'
      aria-label='The Achievers home'
    >
      {/* ================= LOGO ================= */}
      <div className='relative h-[68px] w-[72px] shrink-0 sm:h-[74px] sm:w-[78px]'>
        {/* Orange ambient glow */}
        <div className='absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/30 blur-2xl transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:bg-orange-500/50' />

        {/* Green ambient glow */}
        <div className='absolute left-[58%] top-[35%] h-8 w-8 rounded-full bg-green-400/25 blur-xl transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:bg-green-400/40' />

        {/* Soft outer ring */}
        <div className='absolute inset-1 rounded-full border border-orange-400/10 transition-all duration-500 group-hover:scale-110 group-hover:border-orange-400/30' />

        {/* Actual logo */}
        <div className='relative z-10 h-full w-full overflow-hidden'>
          <Image
            src='/images/logo/logota.png'
            alt='The Achievers'
            fill
            priority
            sizes='78px'
            className='object-contain object-center transition-all duration-500 group-hover:scale-110'
          />

          {/* Moving shine */}
          <div className='pointer-events-none absolute -left-10 top-0 h-full w-5 rotate-[20deg] bg-white/30 blur-md transition-all duration-700 group-hover:left-[110%]' />
        </div>
      </div>

      {/* ================= BRAND NAME ================= */}
      <div className='relative flex flex-col leading-none'>
        {/* THE */}
        <span className='text-[10px] font-bold uppercase tracking-[0.35em] text-black/45 transition-colors duration-300 group-hover:text-primary sm:text-[11px]'>
          The
        </span>

        {/* ACHIEVERS */}
        <span className='mt-1 bg-gradient-to-r from-darkmode via-orange-500 to-darkmode bg-clip-text text-[22px] font-black uppercase tracking-[-0.03em] text-transparent transition-all duration-500 group-hover:from-orange-500 group-hover:via-primary group-hover:to-green-500 sm:text-[25px]'>
          Achievers
        </span>

        {/* Tiny accent */}
        <span className='mt-2 h-[2px] w-7 rounded-full bg-gradient-to-r from-orange-500 to-green-400 transition-all duration-500 group-hover:w-14' />

        {/* Small glow underneath */}
        <span className='pointer-events-none absolute -bottom-3 left-0 h-2 w-16 rounded-full bg-orange-500/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
      </div>
    </Link>
  )
}

export default Logo