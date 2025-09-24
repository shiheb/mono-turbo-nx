import { currency } from '@/common/constants'
import type { PricingType } from '../types'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { cn } from '@/hooks/helpers/cn'
import { pricingPlans } from '../data'

const PricingCard = ({ plan }: { plan: PricingType }) => {
  const { features, name, price, isPopular } = plan
  return (
    <div data-aos="zoom-in" data-aos-easing="ease" data-aos-duration={1000}>
      <div className="rounded-xl bg-slate-950/40 transition-all duration-500 hover:-translate-y-2">
        <div className="rounded-xl border border-white/10">
          <div className="p-6">
            <h5 className="text-base font-medium text-primary">{name}</h5>
            <p className="relative mt-5 text-5xl font-normal tracking-tight text-white">
              {currency}
              {price}
              <sub className="text-lg font-normal text-default-200">/mo</sub>
            </p>
            <p className="mt-4 text-default-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className={cn(
                'mt-6 flex w-full items-center justify-center gap-2 rounded-lg border px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover',
                isPopular ? 'border-primary bg-primary' : 'border-white/10',
              )}>
              Get started{' '}
              <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
            </button>
            <hr className="my-5 border-dashed border-white/10" />
            <ul role="list" className="mt-3 text-sm text-default-700">
              {features.map((feature, idx) => (
                <li className="flex items-center gap-2 py-2" key={idx}>
                  <IconifyIcon
                    icon="lucide:check"
                    className="me-1 inline-block h-5 w-5 text-primary"
                  />
                  <span className="text-default-50">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
const Pricing = () => {
  return (
    <section id="price" className="py-14">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              We&apos;ve got a plan that&apos;s perfect for you
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="text-base font-medium text-default-200">
                Monthly
              </span>
              <label
                htmlFor="pricing-input"
                className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  id="pricing-input"
                  className="peer sr-only"
                />
                <span className="h-4 w-11 rounded-full bg-default-700 after:absolute after:left-[2px] after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:rounded-full after:border after:border-default-950 after:bg-primary after:ring-2 after:ring-primary after:ring-offset-2 after:ring-offset-default-950 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-default-950" />
              </label>
              <span className="text-base font-medium text-default-200">
                Yearly
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <PricingCard plan={plan} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
