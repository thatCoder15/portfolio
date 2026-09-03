// 'use client'
// import React from 'react'
// import { Icon } from '@iconify/react'
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from '@headlessui/react'

// const FAQ = () => {
//   return (
//     <section
//       id='FAQ'
//       className='relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode'>
//       <div className='container mx-auto max-w-7xl px-4'>
//         <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
//           <p className='text-lg font-normal text-white text-center mb-6'>FAQ</p>
//           <h2 className='text-white text-center max-w-3xl mx-auto'>
//             Frequently asked questions.
//           </h2>
//           <div className='w-full px-4 pt-16'>
//             <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
//               <Disclosure>
//                 {({ open }) => (
//                   <div>
//                     <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
//                       <span className='text-black'>
//                         Can you design my site?
//                       </span>
//                       <div
//                         className={`h-5 w-5 transform transition-transform duration-300 ${
//                           open ? 'rotate-180' : ''
//                         }`}>
//                         <Icon icon='lucide:chevron-up' width='20' height='20' />
//                       </div>
//                     </DisclosureButton>
//                     <DisclosurePanel className='text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border'>
//                       <div className='lg:max-w-70%'>
//                         Craven omni memoria patriae zombieland clairvius
//                         narcisse religionis sunt diri undead historiarum.
//                         Golums, zombies unrelenting et Raimi fascinati
//                         beheading.
//                       </div>
//                     </DisclosurePanel>
//                   </div>
//                 )}
//               </Disclosure>
//             </div>
//             <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
//               <Disclosure as='div' className='mt-2'>
//                 {({ open }) => (
//                   <>
//                     <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
//                       <span className='text-black'>Can you code my site?</span>
//                       <div
//                         className={`h-5 w-5 transform transition-transform duration-300 ${
//                           open ? 'rotate-180' : ''
//                         }`}>
//                         <Icon icon='lucide:chevron-up' width='20' height='20' />
//                       </div>
//                     </DisclosureButton>
//                     <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 text-left border-t border-border'>
//                       <div className='lg:max-w-70%'>
//                         Craven omni memoria patriae zombieland clairvius
//                         narcisse religionis sunt diri undead historiarum.
//                         Golums, zombies unrelenting et Raimi fascinati
//                         beheading.
//                       </div>
//                     </DisclosurePanel>
//                   </>
//                 )}
//               </Disclosure>
//             </div>

//             <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white'>
//               <Disclosure as='div' className='mt-2'>
//                 {({ open }) => (
//                   <>
//                     <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
//                       <span className='text-black'>Where are you located?</span>
//                       <div
//                         className={`h-5 w-5 transform transition-transform duration-300 ${
//                           open ? 'rotate-180' : ''
//                         }`}>
//                         <Icon icon='lucide:chevron-up' width='20' height='20' />
//                       </div>
//                     </DisclosureButton>
//                     <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border'>
//                       <div className='lg:max-w-70%'>
//                         Craven omni memoria patriae zombieland clairvius
//                         narcisse religionis sunt diri undead historiarum.
//                         Golums, zombies unrelenting et Raimi fascinati
//                         beheading.
//                       </div>
//                     </DisclosurePanel>
//                   </>
//                 )}
//               </Disclosure>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FAQ


'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const faqs = [
  {
    question: 'What services does The Achievers provide?',
    answer:
      'We help brands improve product visibility and market presence through marketplace growth, influencer marketing, customer feedback and reputation management, product-focused campaigns, and customized growth strategies.',
  },
  {
    question: 'Which platforms do you work with?',
    answer:
      'We work across Amazon, Flipkart, Myntra, AJIO, Meesho, Shopsy, Blinkit, Zepto, and Instamart. We can also explore additional platforms based on your product and target audience.',
  },
  {
    question: 'Do you provide influencer marketing services?',
    answer:
      'Yes. We plan and execute influencer campaigns by connecting products with relevant creators to increase awareness, engagement, and product discovery.',
  },
  {
    question: 'Can you create a customized strategy for our product?',
    answer:
      'Yes. We create strategies based on your product, target audience, competition, marketplace presence, and specific growth objectives.',
  },
  {
    question: 'Do you help with product reviews and customer feedback?',
    answer:
      'Yes. We focus on genuine customer feedback, product perception, and reputation-focused campaigns to help brands build a stronger and more credible product presence.',
  },
  {
    question: 'How do we start working with The Achievers?',
    answer:
      'Share your product, current platforms, goals, and challenges with us. We review your requirements, identify relevant opportunities, and suggest a strategy based on your brand needs.',
  },
]

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative overflow-hidden py-20 lg:py-28'
    >
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative overflow-hidden rounded-[2rem] bg-faq-bg bg-cover bg-center bg-no-repeat px-5 py-16 sm:px-8 lg:px-16 lg:py-20'>

          {/* Soft overlay to blend with the portfolio */}
          <div className='pointer-events-none absolute inset-0 bg-primary/80' />

          <div className='relative'>
            <div className='mx-auto max-w-3xl text-center'>
              <p className='mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/80'>
                FAQ
              </p>

              <h2 className='text-white'>
                Questions brands usually ask.
              </h2>

              <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75'>
                Everything you need to know about our services, platforms,
                campaigns, and the way we work with brands.
              </p>
            </div>

            <div className='mx-auto mt-12 max-w-5xl space-y-4'>
              {faqs.map((faq, index) => (
                <Disclosure key={faq.question} as='div'>
                  {({ open }) => (
                    <div className='overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm transition-all duration-300 hover:shadow-xl'>

                      <DisclosureButton className='flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8'>
                        <div className='flex items-center gap-4'>
                          <span className='hidden text-sm font-bold text-primary sm:block'>
                            0{index + 1}
                          </span>

                          <span className='text-lg font-semibold text-darkmode sm:text-xl'>
                            {faq.question}
                          </span>
                        </div>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}
                        >
                          ↓
                        </span>
                      </DisclosureButton>

                      <DisclosurePanel className='px-6 pb-7 sm:px-8'>
                        <div className='border-t border-black/10 pt-5 sm:pl-12'>
                          <p className='max-w-3xl text-base leading-7 text-black/60'>
                            {faq.answer}
                          </p>
                        </div>
                      </DisclosurePanel>

                    </div>
                  )}
                </Disclosure>
              ))}
            </div>

            <div className='mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl border border-white/20 bg-white/10 px-6 py-6 backdrop-blur-sm sm:flex-row sm:px-8'>
              <div>
                <p className='text-lg font-semibold text-white'>
                  Have a specific requirement?
                </p>
                <p className='mt-1 text-sm text-white/65'>
                  Let&apos;s discuss your product and growth goals.
                </p>
              </div>

              <a
                href='#Contact'
                className='group flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-darkmode transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
              >
                Let&apos;s Talk
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ