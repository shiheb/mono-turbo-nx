import IconifyIcon from '@/components/wrappers/IconifyIcon'
import type { BlogType } from '../types'
import Image from 'next/image'
import { blogs } from '../data'

const BlogCard = ({ date, description, image, title }: BlogType) => {
  return (
    <div
      className="group space-y-6 overflow-hidden rounded-lg bg-default-950/40 p-3 backdrop-blur-3xl"
      data-aos="fade-right"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          className="ransition mx-auto h-full max-w-full object-cover object-top duration-500 group-hover:scale-105"
          src={image}
          alt="image"
        />
        <div className="absolute inset-0">
          <div className="h-full w-full rounded bg-black/60">
            <div className="flex h-full items-end p-4">
              <div>
                <p className="mb-2 font-semibold text-white">{date}</p>
                <h5 className="mb-4 text-3xl font-bold text-white">{title}</h5>
                <p className="mb-6 truncate whitespace-nowrap text-base font-semibold text-default-100 md:whitespace-normal">
                  {' '}
                  {description}
                </p>
                <a
                  href="#"
                  className="border-b border-dashed border-default-200 pb-1 text-white">
                  Read More{' '}
                  <IconifyIcon
                    icon="lucide:move-right"
                    className="ms-2 inline h-4 w-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blogs = () => {
  return (
    <section id="blog" className="pb-24">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-medium capitalize text-white">
              Resources Blog &amp; news
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-sm text-white transition-all duration-300 hover:bg-primary-hover">
            See All <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-4 px-4 sm:px-0 lg:grid-cols-2">
          {blogs.map((blog, idx) => (
            <BlogCard {...blog} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
