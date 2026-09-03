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



'use client'

import Image from 'next/image'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const brands = [
  {
    name: 'Boldfit',
    logo: '/images/brands/brand-01.png',
  },
  {
    name: 'DeoDap',
    logo: '/images/brands/brand-02.png',
  },
  {
    name: 'Glivary',
    logo: '/images/brands/brand-03.png',
  },
  {
    name: 'Luella',
    logo: '/images/brands/brand-04.png',
  },
  {
    name: 'KAHARA',
    logo: '/images/brands/brand-05.png',
  },
  {
    name: 'YADAV CRAFT',
    logo: '/images/brands/brand-06.png',
  },
]

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  cssEase: 'linear',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const Work = () => {
  return (
    <section
      id="Brands"
      className="relative overflow-hidden bg-cover bg-center py-16 lg:py-20"
    >
      {/* Background Decorations */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-center opacity-70"
        style={{
          backgroundImage: "url('/images/wework/elipse.svg')",
        }}
      />

      <div
        className="absolute right-0 top-20 -z-10 h-1/3 w-1/3 bg-no-repeat bg-right-top opacity-70"
        style={{
          backgroundImage: "url('/images/wework/vector.svg')",
        }}
      />

      {/* Heading */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Brand Network
          </p>

          <h2 className="mb-5">
            Brands We Work With
          </h2>

          <p className="text-lg leading-8 text-black/65">
            We work with brands across multiple categories, helping them
            strengthen product visibility, build market presence, and create
            meaningful growth opportunities.
          </p>
        </div>
      </div>

      {/* Brand Slider */}
      <div className="mx-auto max-w-[1600px]">
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.name}>
              <div className="px-3 py-4">
                <div className="group flex h-52 flex-col items-center justify-center rounded-3xl bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                  {/* Brand Logo */}
                  <div className="flex h-28 w-full items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={180}
                      height={100}
                      className="max-h-20 w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Brand Name */}
                  <div className="mt-5 border-t border-black/10 pt-4 text-center">
                    <h6 className="text-lg font-semibold text-black">
                      {brand.name}
                    </h6>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Bottom Statement */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mt-10 text-center">
          <p className="text-base font-medium text-black/50">
            Trusted partnerships built around products, people, and growth.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Work
