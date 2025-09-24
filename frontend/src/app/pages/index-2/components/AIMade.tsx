import Image from 'next/image'
import aiImg7 from '@/assets/images/ai/img-7.jpg'
import aiImg8 from '@/assets/images/ai/img-8.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
const AIMade = () => {
  return (
    <section id="ai_made" className="pb-24">
      <div className="container">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <Image src={aiImg7} className="rounded-xl" alt="ai-image" />
            <div className="absolute inset-0 rounded-xl bg-default-950/50" />
            <div className="hidden lg:block">
              <div className="absolute -end-52 top-10">
                <div className="inline-block">
                  <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                    <div className="max-w-sm p-6 text-center">
                      <p className="text-base font-medium text-default-300">
                        The image is original and not copied or borroweb from
                        someone else&apos;s work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -start-20 bottom-20 top-auto">
                <div className="inline-block">
                  <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                    <div className="px-6 py-4">
                      <h5>Detailed Work</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <div className="ms-auto max-w-md text-end">
              <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary">
                Unique Images
              </span>
              <h2 className="mt-4 text-3xl font-medium capitalize text-default-200">
                Unique Images means no copyright issues
              </h2>
              <p className="mb-8 mt-5 text-base font-medium text-default-300">
                The image is original and not copied or borrowed from someone
                else&apos;s work, which ensures that there are no legal
                restrictions on its use or distribution.
              </p>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                Read More
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 grid items-center gap-6 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <div className="max-w-md p-3">
              <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary">
                custom Images
              </span>
              <h2 className="mt-4 text-3xl font-medium capitalize text-default-200">
                Create images your custom AI mode
              </h2>
              <p className="mb-8 mt-5 text-base font-medium text-default-300">
                Every element in this image, from the smallest brushstroke to
                the grandest panorama, is a product of AI&apos;s creative
                prowess.
              </p>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                Read More
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration={1000}>
            <Image src={aiImg8} className="rounded-xl" alt="ai-image" />
            <div className="absolute inset-0 rounded-xl bg-default-950/50" />
            <div className="hidden lg:block">
              <div className="absolute -start-52 top-10">
                <div className="inline-block">
                  <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                    <div className="max-w-sm p-6 text-center">
                      <p className="text-base font-medium text-default-300">
                        The image is original and not copied or borroweb from
                        someone else&apos;s work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -end-20 bottom-20 top-auto">
                <div className="inline-block">
                  <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                    <div className="px-6 py-4">
                      <h5>High Quality</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIMade
