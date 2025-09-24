import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-default-950/40 pt-[72px] backdrop-blur-3xl">
      <div className="-z-1 absolute start-80 top-2/3 h-14 w-14 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none bg-primary/10" />
      <div className="-z-1 absolute end-80 top-2/3 h-14 w-14 animate-ping rounded-full bg-primary/20" />
      <div
        className="overflow-hidden px-6 pt-20"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration={800}>
        <div className="relative">
          <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-default-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              className="animate-spin-slow absolute inset-0 h-full w-full">
              <path
                className="stroke-white/10"
                d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                strokeOpacity="0.7"
              />
              <path
                d="M513 1025C230.23 1025 1 795.77 1 513"
                stroke="url(#:S2:-gradient-1)"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id=":S2:-gradient-1"
                  x1={1}
                  y1={513}
                  x2={1}
                  y2={1025}
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" />
                  <stop offset={1} stopColor="#7c3aed" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              className="animate-spin-reverse-slower absolute inset-0 h-full w-full">
              <path
                className="stroke-white/10"
                d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                strokeOpacity="0.7"
              />
              <path
                d="M913 513c0 220.914-179.086 400-400 400"
                stroke="url(#:S2:-gradient-2)"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id=":S2:-gradient-2"
                  x1={913}
                  y1={513}
                  x2={913}
                  y2={913}
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" />
                  <stop offset={1} stopColor="#7c3aed" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="container">
            <div className="relative py-14 text-center">
              <div className="flex justify-center">
                <div className="max-w-2xl">
                  <h2 className="mb-6 text-5xl font-semibold text-default-100 md:text-6xl/tight">
                    Make short videos From long ones instantly
                  </h2>
                  <p className="px-5 text-base font-medium text-default-200">
                    At Video Podcast Creators, we&apos;re a collective of
                    creative visionaries who believe in the art of visual
                    storytelling. Our mission is to captivate, educate, and
                    inspire audiences worldwide
                  </p>
                  <div className="mx-auto max-w-xl rounded-md bg-white/10 backdrop-blur-2xl">
                    <form className="mt-7 flex w-full items-center justify-between">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full border-0 bg-transparent p-4 text-sm text-white placeholder:text-white focus:outline-none focus:ring-0"
                        placeholder="Enter Your Email"
                        autoComplete="off"
                      />
                      <button className="me-2 rounded-md border-0 bg-primary px-6 py-2 text-sm font-semibold text-white backdrop-blur-2xl transition-all duration-500 hover:bg-primary-hover hover:text-white">
                        <div className="flex items-center justify-center gap-1">
                          <span>Submit</span>
                        </div>
                      </button>
                    </form>
                  </div>
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                      Get start free
                      <IconifyIcon
                        icon="lucide:move-right"
                        className="h-5 w-5"
                      />
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                      More Tools{' '}
                      <IconifyIcon
                        icon="lucide:move-right"
                        className="h-5 w-5"
                      />
                    </button>
                  </div>
                  <p className="mt-5 text-sm font-medium text-default-400">
                    Get 75 mins of upload for free every month
                  </p>
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
