import Image from 'next/image'
import starSvg from '@/assets/images/ai/star.svg'
import aiImg3 from '@/assets/images/ai/img-3.jpg'

const Hero = () => {
  const marqueeGroup1 = [
    'Automatic learning',
    'Describe your idea',
    'Select Templates',
    'Optimization',
  ]
  const marqueeGroup2 = [
    'Innovation',
    'Generate Copy',
    'Advanced analytics',
    'Algorithm',
    'Text Editor',
  ]
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pb-14 pt-[72px]"
        data-aos="zoom-out"
        data-aos-easing="ease"
        data-aos-duration={1000}>
        <div className="px-10">
          <div
            className="overflow-hidden rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${aiImg3.src})` }}>
            <div className="rounded-2xl bg-default-950/70">
              <div className="container">
                <div className="relative p-6">
                  <div className="-z-1 absolute start-80 top-20 animate-[spin_10s_linear_infinite]">
                    <Image src={starSvg} alt="" />
                  </div>
                  <div className="tot-auto -z-1 absolute bottom-40 end-60 animate-[spin_10s_linear_infinite]">
                    <Image src={starSvg} alt="" />
                  </div>
                  <div className="tot-auto -z-1 absolute bottom-96 end-36 animate-[spin_10s_linear_infinite]">
                    <Image src={starSvg} alt="" />
                  </div>
                  <div className="flex h-full items-center justify-center py-36">
                    <div className="relative mx-auto max-w-3xl text-center">
                      <span className="rounded-md bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-white/80">
                        AI knowledge hub
                      </span>
                      <h1 className="mt-10 text-3xl font-semibold text-white md:text-5xl/snug">
                        AI-Powered Solution For Effective Business.
                      </h1>
                      <p className="mx-auto mt-5 w-3/4 text-base font-normal text-default-200">
                        Lorem lpsum Dolor sit Amet, Consectetur Adipiscing Elit,
                        sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore
                        Magna Aliqua. Ut Enim Ad Minim, Quis Nostrud
                        Exercitation Ullamco Laboris Nisi Ut Aliquip
                      </p>
                      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                        <a
                          href="#"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pb-20"
        data-aos="zoom-in"
        data-aos-easing="ease"
        data-aos-duration={1000}>
        <div>
          <div className="relative m-auto flex gap-8 overflow-hidden">
            <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
              {marqueeGroup1.map((item, idx) => (
                <div className="py-3" key={idx}>
                  <h2 className="text-5xl font-medium text-white">{item}</h2>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
              {marqueeGroup1.map((item, idx) => (
                <div className="py-3" key={idx}>
                  <h2 className="text-5xl font-medium text-white">{item}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="marquee--reverse m-auto mt-7 flex gap-8 overflow-hidden">
            <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]">
              {marqueeGroup2.map((item, idx) => (
                <div className="py-3" key={idx}>
                  <h2 className="text-5xl font-medium text-white">{item}</h2>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]">
              {marqueeGroup2.map((item, idx) => (
                <div className="py-3" key={idx}>
                  <h2 className="text-5xl font-medium text-white">{item}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
