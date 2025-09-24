import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'

import videoImg1 from '@/assets/images/ai/video-1.svg'
import videoImg2 from '@/assets/images/ai/video-2.svg'

const Features2 = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <span className="rounded-md bg-primary/20 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary">
              AI technolog
            </span>
            <h2 className="mt-4 text-3xl/snug font-medium capitalize text-white">
              Create amazing content with AI technology.{' '}
            </h2>
            <p className="mt-5 text-base font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                Get start free
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                More Tools{' '}
                <IconifyIcon
                  icon="lucide:move-right"
                  className="h-5 w-5"></IconifyIcon>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <Image
              src={videoImg2}
              className="h-full w-full"
              alt="video-image"
            />
          </div>
        </div>
        <div className="mt-14 grid items-center gap-6 md:grid-cols-2">
          <div
            className="2xl:-ms-16"
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <Image
              src={videoImg1}
              className="h-full w-full"
              alt="video-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <span className="rounded-md bg-primary/20 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary">
              Content generate
            </span>
            <h2 className="mt-4 text-3xl/snug font-medium capitalize text-white">
              Content you can write &amp; generate with our AI
            </h2>
            <p className="mt-5 text-base font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                Get start free
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                More Tools{' '}
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features2
