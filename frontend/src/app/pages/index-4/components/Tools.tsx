import IconifyIcon from '@/components/wrappers/IconifyIcon'
import type { ToolType } from '../types'
import { aiTools } from '../data'

const ToolCard = ({ description, icon, title }: ToolType) => {
  return (
    <div
      className="rounded-xl border border-white/10 bg-default-950/40 p-6 text-center"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <span
        className="relative z-0 inline-flex h-24 w-24 items-center justify-center bg-primary/10"
        style={{ borderRadius: '28% 72% 50% 50%/26% 20% 80% 74%' }}>
        <IconifyIcon icon={icon} className="mx-auto h-10 w-10 text-primary" />
      </span>
      <h2 className="mt-5 text-2xl font-medium text-white">{title}</h2>
      <p className="mb-6 mt-2 text-base font-medium text-default-200">
        {description}
      </p>
      <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
        More Tools <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
      </button>
    </div>
  )
}
const Tools = () => {
  return (
    <section id="tools" className="py-20">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aiTools.map((tool, idx) => (
            <ToolCard {...tool} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
