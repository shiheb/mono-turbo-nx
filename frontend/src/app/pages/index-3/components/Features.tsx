import IconifyIcon from '@/components/wrappers/IconifyIcon'
import type { FeatureType } from '../types'
import { features } from '../data'

const FeatureCard = ({ description, icon, title }: FeatureType) => {
  return (
    <div
      className="bg-default-950/40 backdrop-blur-3xl"
      data-aos="fade-right"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="p-8 sm:p-10">
        <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <IconifyIcon icon={icon} className="h-10 w-10" />
        </div>
        <h2 className="mb-4 text-2xl font-medium text-white">{title}</h2>
        <p className="mb-6 text-base text-default-200"> {description}</p>
        <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
          More Tools{' '}
          <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className="py-14">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              We&apos;re here to support you every step way
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl md:grid-cols-2">
          {features.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
