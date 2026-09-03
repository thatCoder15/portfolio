// 'use client'
// import React from 'react'
// import Image from 'next/image'

// const Dedicated = () => {
//   return (
//     <section className='relative bg-cover bg-center overflow-hidden'>
//       <div className='container mx-auto max-w-7xl px-4'>
//         <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
//           <Image
//             src='/images/dedicated/spiral.svg'
//             height={272}
//             width={686}
//             alt='spiral-design'
//             className='absolute left-0 top-0 hidden lg:block -z-10'
//           />
//           {/* Left Column */}
//           <div className='col-span-12 lg:col-span-6 justify-self-center'>
//             <Image
//               src='/images/dedicated/man.svg'
//               alt='man-icon'
//               width={416}
//               height={530}
//               className='mx-auto md:mx-0'
//             />
//           </div>

//           {/* Right Column */}
//           <div className='col-span-12 lg:col-span-6'>
//             <div className='relative'>
//               <Image
//                 src='/images/dedicated/comma.svg'
//                 alt='comma-image'
//                 width={200}
//                 height={106}
//                 className='absolute -top-16 -left-32 hidden lg:block'
//               />
//             </div>
//             <h2 className='text-center -mr-1 lg:text-start lg:leading-20 leading-14'>
//               “Dedicated to help people’s design needs.”
//             </h2>
//             <p className='text-xl font-medium text-black/55 mt-5 text-center lg:text-start'>
//               Quis ipsum suspendisse ultrices gravida risus commodo viverra
//               maecenas accumsan lacus vel facilisis
//             </p>
//             <h5 className='mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start'>
//               Cathy Hills, CEO
//             </h5>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default Dedicated



'use client'

import Image from 'next/image'

const Dedicated = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Founder Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl bg-primary/10" />

              <div className="relative overflow-hidden rounded-3xl bg-grey">
                <Image
                  src="/images/dedicated/shweta-jain.png"
                  alt="Shweta Jain - Founder and CEO of The Achievers"
                  width={500}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Founder Content */}
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Leadership
            </p>

            <h2 className="leading-tight">
              Driven By Strategy.
              <br />
              <span className="text-primary">Built For Growth.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-black/65">
              With a clear understanding of digital commerce and brand growth, We focuses on building practical strategies that help products gain visibility, reach the right customers, and create stronger market presence.
            </p>

            <p className="mt-5 max-w-2xl text-xl leading-9 text-black/65">
              Under her leadership, The Achievers works closely with brands to
              build stronger product visibility, smarter campaigns, and
              sustainable growth across marketplaces and quick-commerce
              platforms.
            </p>

            {/* Founder Name */}
            <div className="mt-10 flex items-center gap-5">
              <div className="h-px w-14 bg-primary" />

              <div>
                <h5 className="font-semibold">
                  Shweta Jain
                </h5>

                <p className="mt-1 text-base text-black/55">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Dedicated
