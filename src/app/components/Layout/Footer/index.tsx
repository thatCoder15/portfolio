// // 'use client'

// // import Image from 'next/image'
// // import Link from 'next/link'
// // import { useEffect, useState } from 'react'
// // import { footerlinks } from '@/app/types/footerlinks'

// // const footer = () => {
// //   // fetch data

// //   const [footerlinks, setFooterLinks] = useState<footerlinks[]>([])

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await fetch('/api/data')
// //         if (!res.ok) throw new Error('Failed to fetch')
// //         const data = await res.json()
// //         setFooterLinks(data.FooterLinksData)
// //       } catch (error) {
// //         console.error('Error fetching services:', error)
// //       }
// //     }
// //     fetchData()
// //   }, [])

// //   return (
// //     <div className='bg-black' id='first-section'>
// //       <div className='container mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
// //         <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
// //           {/* COLUMN-1 */}
// //           <div className='col-span-4'>
// //             <h4 className='text-white text-3xl leading-9 mb-4 lg:mb-20'>
// //               Desgy Solutions
// //             </h4>
// //             <div className='flex items-center gap-4'>
// //               <div className='footer-icons'>
// //                 <Link href='https://facebook.com'>
// //                   <Image
// //                     src={'/images/footer/vec.svg'}
// //                     alt='facebook'
// //                     width={15}
// //                     height={20}
// //                   />
// //                 </Link>
// //               </div>
// //               <div className='footer-icons'>
// //                 <Link href='https://twitter.com'>
// //                   <Image
// //                     src={'/images/footer/twitter.svg'}
// //                     alt='twitter'
// //                     width={25}
// //                     height={20}
// //                   />
// //                 </Link>
// //               </div>
// //               <div className='footer-icons'>
// //                 <Link href='https://instagram.com'>
// //                   <Image
// //                     src={'/images/footer/instagram.svg'}
// //                     alt='instagram'
// //                     width={25}
// //                     height={20}
// //                   />
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //           {/* CLOUMN-2/3 */}
// //           {footerlinks.map((item, i) => (
// //             <div key={i} className='group relative col-span-2'>
// //               <p className='text-white text-xl font-extrabold mb-9'>
// //                 {item.section}
// //               </p>
// //               <ul>
// //                 {item.links.map((item, i) => (
// //                   <li key={i} className='mb-5'>
// //                     <Link
// //                       href={`${item.href}`}
// //                       className='text-white text-lg font-normal mb-6 space-links hover:text-white/60 hover:underline'>
// //                       {item.label}
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       {/* All Rights Reserved */}
// //       <div className='mx-auto max-w-2xl lg:max-w-7xl'>
// //         <div className='pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-t border-white/30'>
// //           <div className='mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8'>
// //             <div>
// //               <p className='text-center md:text-start text-white text-lg'>
// //                 @2025 - All Rights Reserved by{' '}
// //                 <Link
// //                   href='https://getnextjstemplates.com/'
// //                   target='_blank'
// //                   className='hover:text-white/60 hover:underline'>
// //                   {' '}
// //                   GetNextJsTemplates.com
// //                 </Link>
// //               </p>
// //             </div>
// //             <div className='flex justify-center md:justify-end'>
// //               <Link href='/'>
// //                 <p className='text-base text-white pr-6 hover:text-white/60 hover:underline'>
// //                   Privacy policy
// //                 </p>
// //               </Link>
// //               <Link href='/'>
// //                 <p className='text-base text-white pl-6 border-solid border-l border-footer hover:text-white/60 hover:underline'>
// //                   Terms & conditions
// //                 </p>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default footer


// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { footerlinks as FooterLinksType } from '@/app/types/footerlinks'

// const Footer = () => {
//   const [footerLinks, setFooterLinks] = useState<FooterLinksType[]>([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/data')

//         if (!res.ok) {
//           throw new Error('Failed to fetch')
//         }

//         const data = await res.json()

//         setFooterLinks(
//           Array.isArray(data?.FooterLinksData)
//             ? data.FooterLinksData
//             : [],
//         )
//       } catch (error) {
//         console.error('Error fetching footer links:', error)
//         setFooterLinks([])
//       }
//     }

//     fetchData()
//   }, [])

//   return (
//     <footer
//       className='relative overflow-hidden bg-black'
//       id='first-section'
//     >
//       {/* Background Glow */}

//       <div className='pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl' />

//       <div className='pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-primary/5 blur-3xl' />

//       {/* Main Footer */}

//       <div className='container relative mx-auto max-w-2xl px-4 pb-16 pt-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-40'>

//         <div className='grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>

//           {/* COLUMN 1 */}

//           <div className='col-span-4'>

//             <Link
//               href='/'
//               className='group inline-block'
//             >
//               <h4 className='mb-4 text-3xl font-bold leading-9 text-white transition-colors duration-300 group-hover:text-primary lg:mb-6'>
//                 The Achievers
//               </h4>
//             </Link>

//             <p className='mb-8 max-w-sm text-base leading-7 text-white/60'>
//               We create modern digital experiences that
//               transform ideas into powerful digital solutions.
//             </p>

//             {/* Social Links */}

//             <div className='flex items-center gap-4'>

//               <div className='footer-icons transition-transform duration-300 hover:-translate-y-1'>
//                 <Link
//                   href='https://facebook.com'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   aria-label='Facebook'
//                 >
//                   <Image
//                     src='/images/footer/vec.svg'
//                     alt='Facebook'
//                     width={15}
//                     height={20}
//                   />
//                 </Link>
//               </div>

//               <div className='footer-icons transition-transform duration-300 hover:-translate-y-1'>
//                 <Link
//                   href='https://twitter.com'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   aria-label='Twitter'
//                 >
//                   <Image
//                     src='/images/footer/twitter.svg'
//                     alt='Twitter'
//                     width={25}
//                     height={20}
//                   />
//                 </Link>
//               </div>

//               <div className='footer-icons transition-transform duration-300 hover:-translate-y-1'>
//                 <Link
//                   href='https://instagram.com'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   aria-label='Instagram'
//                 >
//                   <Image
//                     src='/images/footer/instagram.svg'
//                     alt='Instagram'
//                     width={25}
//                     height={20}
//                   />
//                 </Link>
//               </div>

//             </div>

//           </div>

//           {/* COLUMN 2 / 3 / ETC */}

//           {footerLinks.map((section, sectionIndex) => (
//             <div
//               key={`${section.section}-${sectionIndex}`}
//               className='col-span-2'
//             >
//               <p className='mb-9 text-xl font-extrabold text-white'>
//                 {section.section}
//               </p>

//               <ul>
//                 {Array.isArray(section.links) &&
//                   section.links.map((link, linkIndex) => (
//                     <li
//                       key={`${link.label}-${linkIndex}`}
//                       className='mb-5'
//                     >
//                       <Link
//                         href={link.href}
//                         className='text-lg font-normal text-white transition-all duration-300 hover:pl-1 hover:text-white/60 hover:underline'
//                       >
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}
//               </ul>
//             </div>
//           ))}

//         </div>
//       </div>

//       {/* ================= COPYRIGHT ================= */}

//       <div className='mx-auto max-w-2xl lg:max-w-7xl'>

//         <div className='border-t border-white/20 px-4 py-5 sm:px-6 lg:px-4'>

//           <div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-16 sm:grid-cols-2 xl:gap-x-8'>

//             {/* Copyright */}

//             <div>
//               <p className='text-center text-base text-white/60 md:text-start'>
//                 © {new Date().getFullYear()} - All Rights Reserved by{' '}

//                 <Link
//                   href='/'
//                   className='font-medium text-white transition-colors duration-300 hover:text-primary hover:underline'
//                 >
//                   The Achievers
//                 </Link>
//               </p>
//             </div>

//             {/* Legal */}

//             <div className='flex justify-center md:justify-end'>

//               <Link
//                 href='/'
//                 className='pr-6 text-base text-white transition-colors duration-300 hover:text-white/60 hover:underline'
//               >
//                 Privacy policy
//               </Link>

//               <Link
//                 href='/'
//                 className='border-l border-white/20 pl-6 text-base text-white transition-colors duration-300 hover:text-white/60 hover:underline'
//               >
//                 Terms &amp; conditions
//               </Link>

//             </div>

//           </div>

//         </div>

//       </div>

//     </footer>
//   )
// }

// export default Footer



'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

const Footer = () => {
  const services = [
    'Product Visibility & Growth',
    'Influencer Marketing',
    'Product & Brand Reputation',
    'Customized Growth Strategy',
  ]

  const platforms = [
    'Amazon',
    'Flipkart',
    'Myntra',
    'AJIO',
    'Meesho',
    'Blinkit',
    'Zepto',
    'Instamart',
  ]

  return (
    <footer
      className='relative overflow-hidden bg-black'
      id='first-section'
    >
      {/* Background Glow */}
      <div className='pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-primary/10 blur-3xl' />

      <div className='pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl' />

      {/* Main Footer */}
      <div className='container relative mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28'>

        {/* CTA */}
        <div className='mb-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-14'>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>
            Let&apos;s Grow Together
          </p>

          <h2 className='mx-auto mb-5 max-w-3xl text-white'>
            Ready to Build a Stronger
            <br className='hidden sm:block' /> Product Presence?
          </h2>

          <p className='mx-auto mb-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg'>
            Let&apos;s create a focused growth strategy for your product,
            built around visibility, marketplace presence, and meaningful
            customer engagement.
          </p>

          <Link
            href='/#Contact'
            className='inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
          >
            Start a Conversation
            <Icon
              icon='tabler:arrow-up-right'
              width='20'
              height='20'
            />
          </Link>
        </div>

        {/* Footer Content */}
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10'>

          {/* Brand */}
          <div className='lg:col-span-4'>
            <Link
              href='/'
              className='group inline-block'
            >
              <h3 className='mb-5 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-primary'>
                The Achievers
              </h3>
            </Link>

            <p className='max-w-sm text-base leading-7 text-white/60'>
              We help ambitious brands strengthen product visibility,
              marketplace presence, and customer engagement through focused
              growth campaigns and strategic execution.
            </p>

            {/* Social */}
            <div className='mt-8 flex items-center gap-3'>
              <Link
                href='#'
                aria-label='Instagram'
                className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'
              >
                <Icon
                  icon='tabler:brand-instagram'
                  width='21'
                  height='21'
                />
              </Link>

              {/* <Link
                href='#'
                aria-label='LinkedIn'
                className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'
              >
                <Icon
                  icon='tabler:brand-linkedin'
                  width='21'
                  height='21'
                />
              </Link> */}
              <Link
  href='https://www.linkedin.com/in/shweta-jain-3037a93bb/'
  target='_blank'
  rel='noopener noreferrer'
  aria-label='LinkedIn'
  className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'
>
  <Icon
    icon='tabler:brand-linkedin'
    width='21'
    height='21'
  />
</Link>
            </div>
          </div>

          {/* Services */}
          <div className='lg:col-span-3'>
            <h5 className='mb-6 text-lg font-semibold text-white'>
              What We Do
            </h5>

            <ul className='space-y-4'>
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href='/#Services'
                    className='group flex items-start gap-2 text-base text-white/60 transition-colors duration-300 hover:text-white'
                  >
                    <Icon
                      icon='tabler:arrow-up-right'
                      width='17'
                      height='17'
                      className='mt-0.5 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                    />

                    <span className='transition-transform duration-300 group-hover:translate-x-1'>
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div className='lg:col-span-2'>
            <h5 className='mb-6 text-lg font-semibold text-white'>
              Platforms
            </h5>

            <ul className='grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-1'>
              {platforms.map((platform) => (
                <li key={platform}>
                  <span className='text-base text-white/60'>
                    {platform}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className='lg:col-span-3'>
            <h5 className='mb-6 text-lg font-semibold text-white'>
              Company
            </h5>

            <ul className='space-y-4'>
              <li>
                <Link
                  href='/#About'
                  className='text-base text-white/60 transition-colors duration-300 hover:text-white'
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href='/#Brands'
                  className='text-base text-white/60 transition-colors duration-300 hover:text-white'
                >
                  Brands We Work With
                </Link>
              </li>

              <li>
                <Link
                  href='/#Contact'
                  className='text-base text-white/60 transition-colors duration-300 hover:text-white'
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href='/#Contact'
                  className='text-base text-white/60 transition-colors duration-300 hover:text-white'
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10'>
        <div className='container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>

            <p className='text-center text-sm text-white/50 md:text-left'>
              © {new Date().getFullYear()} The Achievers. All rights reserved.
            </p>

            <div className='flex items-center gap-5'>
              <Link
                href='/privacy-policy'
                className='text-sm text-white/50 transition-colors duration-300 hover:text-white'
              >
                Privacy Policy
              </Link>

              <span className='h-4 w-px bg-white/20' />

              <Link
                href='/terms-and-conditions'
                className='text-sm text-white/50 transition-colors duration-300 hover:text-white'
              >
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
