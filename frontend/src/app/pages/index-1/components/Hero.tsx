import IconifyIcon from '@/components/wrappers/IconifyIcon'
import artImg22 from '@/assets/images/nft/art/22.png'
import artImg18 from '@/assets/images/nft/art/18.png'
import artImg5 from '@/assets/images/nft/art/5.png'
import artImg6 from '@/assets/images/nft/art/6.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-[74px]">
      <div className="container-fluid relative overflow-hidden md:px-3 lg:px-10">
        <div className="bg-default-950/40 py-[74px] shadow backdrop-blur-3xl md:rounded-lg lg:py-24">
          <div className="container relative">
            <div className="absolute top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="badge"
                className="lucide lucide-badge h-12 w-12 animate-[spin_10s_linear_infinite] fill-primary/20 text-transparent">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              </svg>
            </div>
            <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-12">
              <div
                className="md:col-span-7"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration={1000}>
                <div className="md:me-6">
                  <span className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1.5 text-sm font-medium text-primary">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                    Collect NFTs
                  </span>
                  <h4 className="mb-4 text-4xl/tight font-semibold capitalize text-white lg:text-6xl/tight">
                    <span className="bg-gradient-to-l from-red-600 to-primary bg-clip-text text-transparent">
                      Discover &amp; collect
                    </span>{' '}
                    the best NFTs digital art
                  </h4>
                  <p className="mb-6 max-w-xl text-lg text-default-200">
                    We are a huge marketplace dedicated to connecting great
                    artists of all NFT with their fans and unique token
                    collectors!
                  </p>
                  <div>
                    <a
                      href="#"
                      className="me-2 mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                      Explore Now
                    </a>
                    <a
                      href="#"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-2 text-white transition-all duration-300 hover:border-primary hover:bg-primary">
                      Sell Now{' '}
                      <IconifyIcon
                        icon="mdi:arrow-top-right-thin"
                        className="text-xl leading-[0]"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="md:col-span-5"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration={1000}>
                <div className="tilt flex gap-4 md:gap-6">
                  <div className="flex w-full flex-col gap-4 pt-10 md:gap-6 md:pt-16">
                    <Image
                      src={artImg22}
                      className="h-40 w-full rounded-lg object-cover md:h-[278px]"
                      alt="art"
                    />
                    <Image
                      src={artImg18}
                      className="h-40 w-full rounded-lg object-cover md:h-[278px]"
                      alt="art"
                    />
                  </div>
                  <div className="relative flex w-full flex-col gap-4 pb-10 md:gap-6 md:pb-16">
                    <div className="absolute bottom-0 end-0 -z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="triangle"
                        className="lucide lucide-triangle h-12 w-12 animate-[spin_10s_linear_infinite] fill-primary/20 text-transparent">
                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      </svg>
                    </div>
                    <Image
                      src={artImg5}
                      className="h-40 w-full rounded-lg object-cover md:h-[278px]"
                      alt="art"
                    />
                    <Image
                      src={artImg6}
                      className="h-40 w-full rounded-lg object-cover md:h-[278px]"
                      alt="art"
                    />
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

export default Hero
