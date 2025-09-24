import Image from 'next/image'
import type { TopicType } from '../types'
import { trendingTopics } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const TopicCard = ({ avatars, description, title, id }: TopicType) => {
  return (
    <div
      className="rounded-lg border border-white/10 bg-default-950/40 p-6"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="flex gap-5">
        <div>
          <div className="mt-2 flex h-8 w-8 items-center justify-center rounded-md bg-primary/20 text-xl font-semibold text-primary">
            {id}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-white">{title}</h2>
          <p className="mt-1 text-base font-medium text-default-200">
            {description}
          </p>
          <div className="mt-6 flex items-center gap-2">
            {avatars.map((avatar, idx) => (
              <Image
                src={avatar}
                height={40}
                width={40}
                className="h-10 rounded bg-white"
                alt="avatar"
                key={idx}
              />
            ))}
          </div>
          <button className="group relative mt-6 inline-flex items-center gap-2 text-primary">
            <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
            Read more{' '}
            <IconifyIcon icon="lucide:move-right" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
const TrendingTopics = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Trending Topics
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trendingTopics.map((topic, idx) => (
            <TopicCard {...topic} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingTopics
