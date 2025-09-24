import aiImg10 from '@/assets/images/ai/img-10.jpg'
import aiImg11 from '@/assets/images/ai/img-11.jpg'
import aiImg12 from '@/assets/images/ai/img-12.jpg'
import aiImg13 from '@/assets/images/ai/img-13.jpg'
import aiImg14 from '@/assets/images/ai/img-14.jpg'
import aiImg21 from '@/assets/images/ai/img-21.jpg'
import aiImg22 from '@/assets/images/ai/img-22.jpg'
import aiImg6 from '@/assets/images/ai/img-6.jpg'
import aiImg9 from '@/assets/images/ai/img-9.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'

const Testimonials = () => {
  const aiImages = [aiImg9, aiImg14, aiImg21, aiImg22, aiImg10]
  const aiImages2 = [aiImg6, aiImg10, aiImg11, aiImg12, aiImg13]
  return (
    <section id="testimonials" className="pb-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-medium text-white">
                Our AI-made Images
              </h2>
              <p className="text-sm font-medium text-default-200">
                I am blown away by the AI-generated artwork. Each piece is a
                masterpiece in its own right, and I love how it combines the
                creativity of human artists with the innovation of AI.
              </p>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
              Generate AI Images
            </a>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div
          className="relative m-auto flex gap-8 overflow-hidden"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration={1000}>
          <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
            {aiImages.map((image, idx) => (
              <Image
                className="aspect-1 h-60 w-full rounded-xl object-cover"
                src={image}
                alt="ai-image"
                key={idx}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
            {aiImages.map((image, idx) => (
              <Image
                className="aspect-1 h-60 w-full rounded-xl object-cover"
                src={image}
                alt="ai-image"
                key={idx}
              />
            ))}
          </div>
        </div>
        <div
          className="marquee--reverse m-auto mt-7 flex gap-8 overflow-hidden"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration={1000}>
          <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]">
            {aiImages2.map((image, idx) => (
              <Image
                className="aspect-1 h-60 w-full rounded-xl object-cover"
                src={image}
                alt="ai-image"
                key={idx}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]">
            {aiImages2.map((image, idx) => (
              <Image
                className="aspect-1 h-60 w-full rounded-xl object-cover"
                src={image}
                alt="ai-image"
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
          More Tools
          <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
