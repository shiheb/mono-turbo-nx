import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { tools } from '../data'
import Link from 'next/link'
import { cn } from '@/hooks/helpers/cn'

const BusinessTools = () => {
  return (
    <section
      id="tools"
      className="py-20"
      data-aos="zoom-in"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              60+ Powerfull Tools
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, idx) => (
            <div
              className="rounded-xl bg-default-950/40 backdrop-blur-3xl"
              key={idx}>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-lg',
                      tool.iconClass,
                    )}>
                    <IconifyIcon icon={tool.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium text-default-200">
                    {tool.name}
                  </h3>
                </div>
                <Link
                  href=""
                  className="group relative inline-flex items-center gap-2 text-primary">
                  <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
                  Select &amp; try{' '}
                  <IconifyIcon icon="lucide:move-right" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
            More Tools{' '}
            <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BusinessTools
