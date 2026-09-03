// 'use client'
// import { useEffect, useState } from 'react'
// import { aboutdata } from '@/app/types/aboutdata'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Icon } from '@iconify/react'
// import AboutSkeleton from '../../Skeleton/AboutUs'

// const Aboutus = () => {
//   // fetch about data
//   const [about, setAbout] = useState<aboutdata[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/data')
//         if (!res.ok) throw new Error('Failed to fetch')
//         const data = await res.json()
//         setAbout(data.Aboutdata)
//       } catch (error) {
//         console.error('Error fetching services:', error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchData()
//   }, [])

//   return (
//     <section id='About' className=' bg-cover bg-center overflow-hidden'>
//       <div className='container mx-auto max-w-7xl px-4 relative z-1'>
//         <div className='p-12 bg-grey rounded-3xl'>
//           <Image
//             src='/images/aboutus/dots.svg'
//             width={100}
//             height={100}
//             alt='dots-image'
//             className='absolute bottom-1 -left-20'
//           />
//           <p className='text-center text-primary text-lg tracking-widest uppercase mt-10'>
//             about us
//           </p>
//           <h2 className='text-center pb-12'>Know more about us.</h2>
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
//             {loading
//               ? Array.from({ length: 3 }).map((_, index) => (
//                   <AboutSkeleton key={index} />
//                 ))
//               : about.map((item, i) => (
//                   <div
//                     key={i}
//                     className='hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group'>
//                     <h5 className='group-hover:text-white mb-5'>
//                       {item.heading}
//                     </h5>
//                     <Image
//                       src={item.imgSrc}
//                       alt={item.imgSrc}
//                       width={100}
//                       height={100}
//                       className='mb-5'
//                     />
//                     <p className='text-lg font-normal text-black group-hover:text-white mb-5'>
//                       {item.paragraph}
//                     </p>
//                     <Link
//                       href='#'
//                       className='text-18 font-semibold text-primary hover-underline flex items-center'>
//                       {item.link}
//                       <Icon
//                         icon='tabler:chevron-right'
//                         width='20'
//                         height='20'
//                       />
//                     </Link>
//                   </div>
//                 ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Aboutus



'use client'

import Image from 'next/image'

const services = [
  {
    number: '01',
    title: 'Product Visibility & Growth',
    description:
      'We help brands strengthen product visibility across major marketplaces and quick-commerce platforms through focused campaigns and consistent execution.',
  },
  {
    number: '02',
    title: 'Influencer Marketing',
    description:
      'We connect products with relevant creators and execute influencer campaigns designed to increase awareness, engagement, and product discovery.',
  },
  {
    number: '03',
    title: 'Product & Brand Reputation',
    description:
      'We help brands build a stronger market presence by focusing on customer feedback, product perception, reputation, and overall brand positioning.',
  },
  {
    number: '04',
    title: 'Customized Growth Strategy',
    description:
      'Every product has different goals and challenges. We create customized strategies based on the product, platform, audience, and growth objectives.',
  },
]

const platforms = [
  {
    name: 'Amazon',
    logo: '/images/platforms/amazon.png',
  },
  {
    name: 'Flipkart',
    logo: '/images/platforms/flipkart.png',
  },
  {
    name: 'Myntra',
    logo: '/images/platforms/myntra.png',
  },
  {
    name: 'AJIO',
    logo: '/images/platforms/ajio.png',
  },
  {
    name: 'Meesho',
    logo: '/images/platforms/meesho.png',
  },
  {
    name: 'Shopsy',
    logo: '/images/platforms/shopsy.png',
  },
  {
    name: 'Blinkit',
    logo: '/images/platforms/blinkit.png',
  },
  {
    name: 'Zepto',
    logo: '/images/platforms/zepto.png',
  },
  {
    name: 'Instamart',
    logo: '/images/platforms/instamart.png',
  },
]

const Aboutus = () => {
  return (
    <section id="About" className="overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Intro */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-lg font-medium uppercase tracking-[0.2em] text-primary">
            About The Achievers
          </p>

          <h2 className="mb-7">
            We Build Product Visibility
            <br className="hidden sm:block" /> That Drives Growth
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-black/70">
            The Achievers partners with ambitious brands to strengthen their
            product presence across leading marketplaces and quick-commerce
            platforms. From marketplace campaigns and influencer marketing to
            customer feedback, reputation management, and customized growth
            strategies, we work closely with brands to create a stronger and
            more competitive product presence.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-black/70">
            Our approach is simple — understand the product, identify the
            right opportunities, build a focused strategy, and execute it
            effectively to create measurable opportunities for growth.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-3xl bg-grey p-8 transition-all duration-300 hover:bg-darkmode"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-primary">
                  {service.number}
                </span>

                <span className="h-px w-16 bg-primary/30 transition-all duration-300 group-hover:w-24" />
              </div>

              <h4 className="mb-4 transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h4>

              <p className="text-lg leading-8 text-black/70 transition-colors duration-300 group-hover:text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="mt-20 rounded-3xl bg-grey px-6 py-12 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Network
            </p>

            <h3 className="mb-5">
              Platforms We Work With
            </h3>

            <p className="text-lg leading-8 text-black/70">
              We work across leading marketplaces and quick-commerce platforms
              to help brands reach customers wherever they shop.
            </p>
          </div>

          {/* Platform Logos */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex h-28 items-center justify-center rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  width={140}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}

            {/* More Platforms */}
            <div className="flex h-28 flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-white/60 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white">
              <span className="text-2xl font-bold text-primary">
                + More
              </span>
              <span className="mt-1 text-sm text-black/60">
                Platforms & Channels
              </span>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="leading-tight">
            Your Product.
            <span className="text-primary"> Our Strategy.</span>
            <br />
            Your Growth.
          </h3>
        </div>

      </div>
    </section>
  )
}

export default Aboutus
