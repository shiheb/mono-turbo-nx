import IconifyIcon from '@/components/wrappers/IconifyIcon'
import type { PostGeneratorType } from '../types'
import { postGeneratorFeatures } from '../data'

const PostGeneratorCard = ({ description, icon, title }: PostGeneratorType) => {
  return (
    <div className="group rounded-xl bg-default-950/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-primary/40">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-white/20 group-hover:text-white">
        <IconifyIcon icon={icon} className="h-9 w-9" />
      </div>
      <h3 className="mt-8 text-xl font-medium text-default-200">{title}</h3>
      <p className="mt-4 text-base font-normal text-default-300">
        {description}
      </p>
    </div>
  )
}
const Generator = () => {
  return (
    <section id="generator" className="py-14">
      <div
        className="container"
        data-aos="zoom-in"
        data-aos-easing="ease"
        data-aos-duration={1000}>
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Choose Social Media Post Generator
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {postGeneratorFeatures.map((feature, idx) => (
            <PostGeneratorCard {...feature} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Generator
