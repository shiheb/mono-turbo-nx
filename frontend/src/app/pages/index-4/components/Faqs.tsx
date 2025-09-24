import { cn } from '@/hooks/helpers/cn'
import { faqs } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Faqs = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="grid gap-6 xl:grid-cols-2">
          <div
            className="text-center xl:text-start"
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Frequently asked questions
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
            <button className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
              See More{' '}
              <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <div className="hs-accordion-group space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'hs-accordion overflow-hidden rounded-lg border border-white/10 bg-default-950/40 backdrop-blur-3xl',
                    { active: idx === 0 },
                  )}
                  id="faq-1">
                  <button
                    className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all"
                    aria-controls="faq-accordion-1">
                    <h5 className="flex text-base font-semibold">
                      <IconifyIcon
                        icon="lucide:circle-help"
                        className="me-3 h-5 w-5 stroke-white align-middle"
                      />
                      {faq.question}
                    </h5>
                    <IconifyIcon
                      icon="lucide:chevron-up"
                      className="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180"
                    />
                  </button>
                  <div
                    id="faq-accordion-1"
                    className={cn(
                      'hs-accordion-content w-full overflow-hidden transition-[height] duration-300',
                      { hidden: idx != 0 },
                    )}
                    aria-labelledby="faq-1">
                    <div className="px-6 pb-4 pt-0">
                      <p className="mb-2 text-sm font-medium text-default-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
