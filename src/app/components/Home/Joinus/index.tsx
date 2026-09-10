
// 'use client'

// import { Icon } from '@iconify/react'

// const Join = () => {
//   return (
//     <section
//       id='Contact'
//       className='relative overflow-hidden py-24 lg:py-32'
//     >
//       {/* Background decoration */}
//       <div className='pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl' />
//       <div className='pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl' />

//       <div className='container relative mx-auto max-w-7xl px-4'>

//         {/* Heading */}
//         <div className='mx-auto max-w-3xl text-center'>
//           <p className='mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary'>
//             Let&apos;s Talk
//           </p>

//           <h4>
//             Have a Product?
//             <br className='hidden sm:block' />
//             <span className='text-primary'> Let&apos;s Grow It.</span>
//           </h4>

//           <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60'>
//             Whether you&apos;re looking to improve marketplace visibility,
//             launch an influencer campaign, build product reputation, or
//             create a customized growth strategy, we&apos;d love to hear
//             about your brand.
//           </p>
//         </div>

//         {/* Contact Card */}
//         <div className='mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] bg-darkmode shadow-2xl'>
//           <div className='grid grid-cols-1 lg:grid-cols-2'>

//             {/* Left */}
//             <div className='relative overflow-hidden p-8 sm:p-10 lg:p-14'>
//               <div className='absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl' />

//               <div className='relative'>
//                 <span className='inline-flex rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary'>
//                   Start a conversation
//                 </span>

//                 <h3 className='mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl'>
//                   Let&apos;s discuss
//                   <br />
//                   your next move.
//                 </h3>

//                 <p className='mt-5 max-w-md text-base leading-7 text-white/60'>
//                   Tell us about your product, your goals, and where you want
//                   to go. We&apos;ll figure out the right growth approach
//                   together.
//                 </p>

//                 <div className='mt-10 flex flex-wrap gap-3'>
//                   <span className='rounded-full border border-white/10 px-4 py-2 text-sm text-white/70'>
//                     Marketplace Growth
//                   </span>

//                   <span className='rounded-full border border-white/10 px-4 py-2 text-sm text-white/70'>
//                     Influencer Marketing
//                   </span>

//                   <span className='rounded-full border border-white/10 px-4 py-2 text-sm text-white/70'>
//                     Product Strategy
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Right */}
//             <div className='bg-white p-8 sm:p-10 lg:p-14'>
//               <p className='text-sm font-semibold uppercase tracking-widest text-black/40'>
//                 Get in touch
//               </p>

//               <div className='mt-7 space-y-4'>

//                 {/* Email */}
//                 <a
//                   href='mailto:theachievers18@gmail.com'
//                   className='group flex items-center gap-4 rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg'
//                 >
//                   <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white'>
//                     <Icon
//                       icon='lucide:mail'
//                       width='22'
//                       height='22'
//                     />
//                   </span>

//                   <div className='min-w-0'>
//                     <p className='text-sm text-black/40'>
//                       Email
//                     </p>

//                     <p className='mt-1 break-all font-semibold text-black'>
//                       theachievers18@gmail.com
//                     </p>
//                   </div>

//                   <span className='ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary'>
//                     →
//                   </span>
//                 </a>

//                 {/* WhatsApp */}
//                 <a
//                   href='https://wa.me/917203045355'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='group flex items-center gap-4 rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg'
//                 >
//                   <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white'>
//                     <Icon
//                       icon='lucide:message-circle'
//                       width='22'
//                       height='22'
//                     />
//                   </span>

//                   <div>
//                     <p className='text-sm text-black/40'>
//                       WhatsApp
//                     </p>

//                     <p className='mt-1 font-semibold text-black'>
//                       +91 72030 45355
//                     </p>
//                   </div>

//                   <span className='ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-500'>
//                     →
//                   </span>
//                 </a>

//                 {/* LinkedIn */}
//                 <a
//                   href='https://www.linkedin.com/in/shweta-jain-3037a93bb/'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='group flex items-center gap-4 rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg'
//                 >
//                   <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white'>
//                     <Icon
//                       icon='lucide:linkedin'
//                       width='22'
//                       height='22'
//                     />
//                   </span>

//                   <div>
//                     <p className='text-sm text-black/40'>
//                       LinkedIn
//                     </p>

//                     <p className='mt-1 font-semibold text-black'>
//                       Connect with us
//                     </p>
//                   </div>

//                   <span className='ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary'>
//                     →
//                   </span>
//                 </a>

//               </div>

//               <p className='mt-7 text-center text-sm text-black/40'>
//                 We&apos;re always open to discussing new products,
//                 partnerships and growth opportunities.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Join

'use client'

import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const Join = () => {
  return (
    <section
      id="Contact"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4">

        {/* ================= HEADING ================= */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="mx-auto max-w-2xl text-center"
>
  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
    Let&apos;s Talk
  </p>

  <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[46px]">
    Have a Product?
    <span className="text-primary"> Let&apos;s Grow It.</span>
  </h2>

  <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
    From product visibility to customer feedback and marketplace growth,
    we help your products build stronger presence and better performance.
  </p>
</motion.div>


        {/* ================= CONTACT CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] bg-darkmode shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ================= LEFT ================= */}
            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-14">

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

              {/* Decorative Circle */}
              <div className="pointer-events-none absolute right-8 top-8 h-32 w-32 rounded-full border border-white/5" />
              <div className="pointer-events-none absolute right-14 top-14 h-20 w-20 rounded-full border border-primary/10" />

              <div className="relative">

                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Start a conversation
                </span>

                <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Let&apos;s discuss
                  <br />
                  your next move.
                </h3>

                <p className="mt-5 max-w-md text-base leading-7 text-white/60">
                  Tell us about your product, your goals, and where you want
                  to go. We&apos;ll figure out the right growth approach
                  together.
                </p>


                {/* Services */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition hover:border-primary/40 hover:text-white">
                    Marketplace Growth
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition hover:border-primary/40 hover:text-white">
                    Influencer Marketing
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition hover:border-primary/40 hover:text-white">
                    Product Strategy
                  </span>
                </div>


                {/* Bottom Brand Statement */}
                <div className="mt-12 flex items-center gap-3">
                  <div className="h-px w-10 bg-primary" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                    Strategy • Visibility • Growth
                  </span>
                </div>

              </div>
            </div>


            {/* ================= RIGHT ================= */}
            <div className="bg-white p-8 sm:p-10 lg:p-14">

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
                    Get in touch
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-black">
                    We&apos;re here to help.
                  </h4>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary sm:flex">
                  <Icon
                    icon="lucide:arrow-up-right"
                    width="20"
                    height="20"
                  />
                </div>
              </div>


              <div className="mt-7 space-y-4">

                {/* ================= EMAIL ================= */}
                <a
                  href="mailto:theachievers18@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon
                      icon="lucide:mail"
                      width="22"
                      height="22"
                    />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm text-black/40">
                      Email
                    </p>

                    <p className="mt-1 break-all font-semibold text-black">
                      theachievers18@gmail.com
                    </p>
                  </div>

                  <span className="ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                </a>


                {/* ================= SHWETA WHATSAPP ================= */}
                <a
                  href="https://wa.me/917203045355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon
                      icon="lucide:message-circle"
                      width="22"
                      height="22"
                    />
                  </span>

                  <div>
                    <p className="text-sm text-black/40">
                      WhatsApp
                    </p>

                    <p className="mt-1 font-semibold text-black">
                      +91 72030 45355
                    </p>

                    <p className="mt-0.5 text-xs text-black/40">
                      Shweta Jain
                    </p>
                  </div>

                  <span className="ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
                    →
                  </span>
                </a>


                {/* ================= ANSHUL WHATSAPP ================= */}
                <a
                  href="https://wa.me/917838827537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon
                      icon="lucide:phone"
                      width="21"
                      height="21"
                    />
                  </span>

                  <div className="relative">
                    <p className="text-sm text-black/40">
                      WhatsApp
                    </p>

                    <p className="mt-1 font-semibold text-black">
                      +91 78388 27537
                    </p>

                    <p className="mt-0.5 text-xs text-black/40">
                      Anshul
                    </p>
                  </div>

                  <span className="relative ml-auto text-xl text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                </a>


                {/* ================= LINKEDIN ================= */}
                <a
                  href="https://www.linkedin.com/in/shweta-jain-3037a93bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon
                      icon="lucide:linkedin"
                      width="22"
                      height="22"
                    />
                  </span>

                  <div>
                    <p className="text-sm text-black/40">
                      LinkedIn
                    </p>

                    <p className="mt-1 font-semibold text-black">
                      Connect with us
                    </p>
                  </div>

                  <span className="ml-auto text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                </a>

              </div>


              {/* Bottom Note */}
              <div className="mt-7 rounded-xl bg-black/[0.025] px-4 py-3 text-center">
                <p className="text-sm leading-6 text-black/40">
                  We&apos;re always open to discussing new products,
                  partnerships and growth opportunities.
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Join