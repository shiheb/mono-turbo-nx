import Image from 'next/image'
import type { TestimonialType } from '../types'
import { splitArray } from '@/utils/array'
import { userTestimonialData } from '../data'

const TestimonialCard = ({ avatar, description, name }: TestimonialType) => {
  return (
    <div>
      <div className="relative m-2 w-full lg:w-full">
        <div className="group">
          <div className="w-full translate-x-1 rounded-xl border border-black transition-all duration-500">
            <div className="relative z-10 h-full rounded-xl bg-default-950 p-6">
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={avatar}
                    className="h-12 w-12 rounded-full"
                    alt="avatar"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-default-200">
                    {name}
                  </h3>
                  <p className="mt-1 text-sm font-normal text-default-400">
                    user
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-base font-medium text-default-300">
                {description}
              </p>
            </div>
          </div>
          <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary" />
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const testimonialChunks = splitArray(userTestimonialData, 3)
  return (
    <section
      id="testimonials"
      className="py-20"
      data-aos="fade-down"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              What Our Users Say
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div>
          <div className="relative m-auto flex gap-8 overflow-hidden">
            {testimonialChunks.map((chunk, idx) => (
              <div
                className="marquee__group flex min-w-full flex-shrink-0 justify-around gap-8"
                key={idx}>
                {chunk.map((testimonial, idx) => (
                  <TestimonialCard key={idx} {...testimonial} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
