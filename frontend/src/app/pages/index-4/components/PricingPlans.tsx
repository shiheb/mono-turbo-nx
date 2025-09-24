import { currency } from '@/common/constants'
import type { PricingType } from '../types'
import { pricingPlans } from '../data'

const PricingCard = ({ features, name, price }: PricingType) => {
  return (
    <div className="flex h-full flex-col text-center">
      <div className="bg-default-950/40 px-8 pb-5 pt-8">
        <h4 className="text-lg font-medium text-default-200">{name}</h4>
      </div>
      <div className="h-full bg-default-950/40 px-8 lg:mt-px lg:py-5">
        <span className="mt-7 text-5xl font-bold text-default-200">
          {price != 0 && (
            <span className="-me-2 text-2xl font-bold">{currency} </span>
          )}
          {price === 0 ? 'Free' : price}
        </span>
      </div>
      <div className="flex justify-center bg-default-950/40 px-8 pt-7 lg:mt-px">
        <ul className="space-y-2.5 text-center text-sm">
          {features.map((feature, idx) => (
            <li className="text-default-200" key={idx}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-default-950/40 px-8 py-8">
        <a
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover"
          href="#">
          Sign up
        </a>
      </div>
    </div>
  )
}

const PricingPlans = () => {
  return (
    <section
      id="price"
      className="py-20"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Pricing and plans for everyone
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
            {pricingPlans.map((plan, idx) => (
              <PricingCard {...plan} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
