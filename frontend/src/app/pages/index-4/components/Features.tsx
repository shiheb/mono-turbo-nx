import IconifyIcon from '@/components/wrappers/IconifyIcon'
import type { FeatureType } from '../types'
import { features } from '../data'

const FeatureCard = ({ description, icon, name }: FeatureType) => {
  return (
    <div
      className="overflow-hidden rounded-3xl border border-white/10 bg-default-950/40 p-10"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="group transition-all duration-700">
        <div>
          <div className="flex flex-col">
            <div className="relative">
              <div className="opacity-100">
                <div className="pb-12 transition-all duration-700 group-hover:w-10 group-hover:pb-8">
                  <IconifyIcon
                    icon={icon}
                    className="h-12 w-12 text-primary transition-all duration-700 group-hover:h-8 group-hover:w-8"
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-medium text-white">{name}</h4>
              <p className="mt-3 text-default-200">{description}</p>
              <div className="-mb-3 h-3 overflow-hidden transition-all duration-700 group-hover:overflow-visible group-hover:pt-6">
                <div className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <p className="flex items-center pb-5 text-base text-default-200">
                    Read more{' '}
                    <IconifyIcon
                      icon="lucide:chevron-right"
                      className="h-5 w-5 text-primary"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              What can it write for you?
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
