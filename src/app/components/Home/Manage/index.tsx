'use client'

import Image from 'next/image'

const services = [
  {
    number: '01',
    title: 'Marketplace Growth',
    description:
      'We help brands strengthen their product presence across major marketplaces through focused campaigns, visibility strategies, and consistent execution.',
    points: [
      'Product visibility',
      'Marketplace campaigns',
      'Product positioning',
    ],
  },
  {
    number: '02',
    title: 'Influencer Marketing',
    description:
      'We connect products with relevant creators and manage influencer campaigns designed to increase awareness, engagement, and product discovery.',
    points: [
      'Creator discovery',
      'Campaign execution',
      'Product awareness',
    ],
  },
  {
    number: '03',
    title: 'Product Reputation',
    description:
      'We help brands build a stronger and more credible product presence through customer feedback, product perception, and reputation-focused strategies.',
    points: [
      'Customer feedback',
      'Product perception',
      'Reputation management',
    ],
  },
  {
    number: '04',
    title: 'Quick-Commerce Growth',
    description:
      'We help brands explore and strengthen their presence across fast-growing quick-commerce platforms where customers are discovering and purchasing products.',
    points: [
      'Blinkit',
      'Zepto',
      'Instamart',
    ],
  },
  {
    number: '05',
    title: 'Customized Strategy',
    description:
      'We build product-specific strategies based on your category, audience, competition, platforms, and business goals instead of using a one-size-fits-all approach.',
    points: [
      'Product analysis',
      'Growth planning',
      'Platform strategy',
    ],
  },
  {
    number: '06',
    title: 'Campaign Management',
    description:
      'From planning to execution, we coordinate campaigns and keep the work focused on your product goals, audience, visibility, and overall market presence.',
    points: [
      'Campaign planning',
      'Execution support',
      'Growth tracking',
    ],
  },
]

const Manage = () => {
  return (
    <section
      id='Services'
      className='relative overflow-hidden py-20 lg:py-28'
    >
      {/* Existing template decoration */}
      <Image
        src='/images/manage/toggle.svg'
        alt=''
        width={80}
        height={80}
        aria-hidden='true'
        className='pointer-events-none absolute right-[8%] top-20 hidden opacity-30 lg:block'
      />

      <div className='container mx-auto max-w-7xl px-4'>

        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary'>
            What We Do
          </p>

          <h2>
            Strategies Built Around
            <br className='hidden sm:block' />
            <span className='text-primary'> Your Product.</span>
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/65'>
            We combine marketplace growth, influencer marketing, customer
            feedback, reputation management, and customized strategies to help
            brands build stronger product visibility.
          </p>
        </div>

        {/* Services */}
        <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service) => (
            <div
              key={service.number}
              className='group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl'
            >
              {/* Number */}
              <div className='mb-8 flex items-center justify-between'>
                <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white'>
                  {service.number}
                </span>

                <span className='h-px w-16 bg-black/10 transition-all duration-500 group-hover:w-24 group-hover:bg-primary/40' />
              </div>

              <h4 className='mb-4 transition-colors duration-300 group-hover:text-primary'>
                {service.title}
              </h4>

              <p className='text-base leading-7 text-black/60'>
                {service.description}
              </p>

              {/* Service points */}
              <div className='mt-7 space-y-3 border-t border-black/10 pt-6'>
                {service.points.map((point) => (
                  <div
                    key={point}
                    className='flex items-center gap-3'
                  >
                    <span className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary'>
                      ✓
                    </span>

                    <span className='text-sm font-medium text-black/65'>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover decoration */}
              <div className='absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150' />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-grey px-7 py-8 sm:flex-row sm:px-10'>
          <div>
            <p className='text-xl font-bold text-darkmode'>
              Have a product that needs more visibility?
            </p>

            <p className='mt-2 text-base text-black/55'>
              Let&apos;s build a strategy around it.
            </p>
          </div>

          <a
            href='#Contact'
            className='group flex shrink-0 items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
          >
            Let&apos;s Talk

            <span className='transition-transform duration-300 group-hover:translate-x-1'>
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Manage