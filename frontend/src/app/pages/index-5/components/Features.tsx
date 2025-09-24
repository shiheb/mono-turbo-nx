import IconifyIcon from '@/components/wrappers/IconifyIcon'
import type { FeatureType } from '../types'
import Link from 'next/link'
import { features } from '../data'

const FeatureCard = ({ description, icon, title }: FeatureType) => {
  return (
    <div className="hover:-trandefault-y-2 rounded-xl border-s-2 border-primary bg-default-950/40 backdrop-blur-3xl transition-all duration-500">
      <div className="p-10">
        <IconifyIcon icon={icon} className="h-10 w-10 text-primary" />
        <h3 className="mb-4 mt-8 text-2xl font-medium text-white">{title}</h3>
        <p className="mb-4 text-sm font-medium text-default-100">
          {description}
        </p>
        <Link
          href=""
          className="group relative inline-flex items-center gap-2 text-primary">
          <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
          Read More <IconifyIcon icon="lucide:move-right" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              AI Generate Content In Seconds
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
