import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import { features } from '../data'
import type { FeatureType } from '../types'

const FeatureCard = ({ description, icon, name }: FeatureType) => {
  return (
    <div
      className="rounded-lg bg-default-950/40 p-10"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="text-center">
        <IconifyIcon icon={icon} className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 text-2xl font-medium text-default-200">{name}</h2>
        <p className="mt-4 text-base font-normal text-default-300">
          {description}
        </p>
        <Link
          href="#"
          className="group relative mt-5 inline-flex items-center gap-2 text-primary">
          <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
          Lead more <IconifyIcon icon="lucide:move-right" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className="pb-24">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              The AI Generator that helps you Create amazing image taster.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
