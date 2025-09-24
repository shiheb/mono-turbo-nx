import aiImg6 from '@/assets/images/ai/img-6.jpg'
import aiImg8 from '@/assets/images/ai/img-8.jpg'
import aiImg9 from '@/assets/images/ai/img-9.jpg'
import aiImg14 from '@/assets/images/ai/img-14.jpg'
import aiImg21 from '@/assets/images/ai/img-21.jpg'
import aiImg22 from '@/assets/images/ai/img-22.jpg'
import aiImg10 from '@/assets/images/ai/img-10.jpg'
import aiImg11 from '@/assets/images/ai/img-11.jpg'
import aiImg12 from '@/assets/images/ai/img-12.jpg'
import aiImg13 from '@/assets/images/ai/img-13.jpg'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Hero = () => {
  const aiImages = [aiImg9, aiImg14, aiImg21, aiImg22, aiImg10]
  const aiImages2 = [aiImg6, aiImg10, aiImg11, aiImg12, aiImg13]
  return (
    <>
      <section id="home" className="relative overflow-hidden pb-20 pt-[72px]">
        <div className="px-6 py-4">
          <div className="rounded-2xl bg-default-950/40">
            <div className="container">
              <div className="p-6">
                <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div className="-z-1 absolute start-0 top-0 h-14 w-14 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none bg-primary/10" />
                  <div className="-z-1 absolute bottom-0 end-0 h-14 w-14 animate-ping rounded-full bg-primary/20" />
                  <div
                    data-aos="fade-right"
                    data-aos-easing="ease"
                    data-aos-duration={1000}>
                    <span className="rounded-md bg-primary/20 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary">
                      MEET YOUR CO-PILOT
                    </span>
                    <h1 className="my-4 max-w-lg text-4xl font-medium text-white md:text-5xl/tight">
                      Image generate with our ai instantly.
                    </h1>
                    <p className="text-default-300 md:text-lg">
                      Get AI generated images from text straight from your{' '}
                      <br /> browser very easily.
                    </p>
                    <a
                      href="#"
                      className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-1 py-1 pe-4 text-white transition-all duration-300 hover:bg-primary-hover">
                      <span className="me-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-white/10 group-hover:text-white">
                        <IconifyIcon icon="lucide:image" className="h-5 w-5" />
                      </span>
                      Generate Images
                    </a>
                  </div>
                  <div
                    className="mx-auto h-[595px] overflow-hidden"
                    data-aos="zoom-in"
                    data-aos-easing="ease"
                    data-aos-duration={1000}>
                    <div className="marquee grid grid-cols-2 gap-6">
                      <div className="relative m-auto flex flex-col gap-6 overflow-hidden">
                        <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                          {aiImages.map((image, idx) => (
                            <Image
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={image}
                              alt="ai-image"
                              key={idx}
                            />
                          ))}
                        </div>
                        <div
                          aria-hidden="true"
                          className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                          {aiImages.map((image, idx) => (
                            <Image
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={image}
                              alt="ai-image"
                              key={idx}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
                        <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                          {aiImages2.map((image, idx) => (
                            <Image
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={image}
                              alt="ai-image"
                              key={idx}
                            />
                          ))}
                        </div>
                        <div
                          aria-hidden="true"
                          className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                          {aiImages2.map((image, idx) => (
                            <Image
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={image}
                              alt="ai-image"
                              key={idx}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className="relative overflow-hidden rounded-lg"
              data-aos="fade-right"
              data-aos-easing="ease"
              data-aos-duration={1000}>
              <Image
                className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                src={aiImg10}
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute inset-0">
                <div className="h-full w-full">
                  <div className="flex h-full w-full items-end p-5">
                    <div className="w-full rounded bg-white/10 p-6 backdrop-blur-md">
                      <h2 className="text-center text-lg font-normal text-default-300">
                        Gaze upon the awe-inspiring creation of artificial
                        intelligence, a majestic dragon of epic
                        proportions.{' '}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid gap-6 md:grid-cols-2"
              data-aos="fade-left"
              data-aos-easing="ease"
              data-aos-duration={1000}>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                  src={aiImg13}
                  alt="woman"
                  loading="lazy"
                  width={640}
                  height={805}
                />
                <div className="absolute inset-0">
                  <div className="h-full w-full">
                    <div className="flex h-full w-full items-end p-5">
                      <div className="w-full rounded bg-white/10 p-6 backdrop-blur-md">
                        <h3 className="text-center text-lg font-normal text-default-200">
                          An enchanting ice dragon born from the algorithms of
                          AI
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                  src={aiImg8}
                  alt="woman"
                  loading="lazy"
                  width={640}
                  height={805}
                />
                <div className="absolute inset-0">
                  <div className="h-full w-full">
                    <div className="flex h-full w-full items-end p-5">
                      <div className="w-full rounded bg-white/10 p-6 backdrop-blur-md">
                        <h3 className="text-center text-lg font-normal text-default-200">
                          A marvel of mechanical artistry and AI ingenuity
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-lg"
              data-aos="fade-right"
              data-aos-easing="ease"
              data-aos-duration={1000}>
              <Image
                className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                src={aiImg11}
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute inset-0">
                <div className="h-full w-full">
                  <div className="flex h-full w-full items-end p-5">
                    <div className="w-full rounded bg-white/10 p-6 backdrop-blur-md">
                      <h3 className="text-center text-lg font-normal text-default-200">
                        In the heart of an enchanted forest, an AI-born dragon
                        stands as a guardian of the woods
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-lg"
              data-aos="fade-left"
              data-aos-easing="ease"
              data-aos-duration={1000}>
              <Image
                className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                src={aiImg12}
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute inset-0">
                <div className="h-full w-full">
                  <div className="flex h-full w-full items-end justify-end p-5">
                    <button className="flex items-center gap-6 rounded-full bg-white/10 px-3 py-2 text-default-300 backdrop-blur-md">
                      Explore more
                      <IconifyIcon
                        icon="lucide:send"
                        className="h-5 w-5 stroke-white"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
