'use client'
import starImg from '@/assets/images/ai/star.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import logoSm from '@/assets/images/logo-sm.png'
import { accountPages, demoPages } from '../data'
import TextTyping from './TextTyping'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[72px]"
      data-aos="zoom-out"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="relative mx-10 overflow-hidden rounded-2xl bg-gradient-to-l from-red-800/40 to-violet-800/40 backdrop-blur-3xl">
        <div>
          <div className="-z-1 absolute end-[10%] top-1/4 h-14 w-14 animate-ping rounded-full bg-primary/20" />
          <div className="-z-1 absolute start-[20%] top-10 animate-ping rounded-full">
            <IconifyIcon
              icon="lucide:hexagon"
              className="h-14 w-14 fill-orange-500/20 text-transparent"
            />
          </div>
          <div className="-z-1 absolute end-[20%] top-10 animate-[spin_10s_linear_infinite] rounded-full">
            <Image src={starImg} alt="star"  width={32} height={32} className="h-8 w-8" />
          </div>
          <div className="-z-1 absolute start-[10%] top-1/4 animate-[spin_10s_linear_infinite] rounded-full">
            <Image src={starImg} alt="star"  width={32} height={32} className="h-8 w-8" />
          </div>
        </div>
        <div className="container relative">
          <div className="flex items-center justify-center pt-20">
            <div className="mx-auto max-w-4xl text-center">
              <div>
                <Image
                  src={logoSm}
                  height={80}
                  width={80}
                  alt="logo"
                  className="mx-auto h-20"
                />
              </div>
              <h1 className="mb-6 text-4xl/snug font-semibold capitalize tracking-wide text-white">
                WebAI- AI Startup &amp; Technology Landing Page HTML Template
                built for&nbsp;
                <TextTyping />
              </h1>
              <p className="mb-8 text-lg font-medium text-default-200">
                Start working with Tailwindcss It allows you to compose complex
                designs by combining and customizing utility classes..
              </p>
              <a
                className="hover:shadow-primary-200 inline-flex w-auto items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:shadow-xl"
                href="#demo">
                View Demos <IconifyIcon icon="lucide:eye" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-cols-1">
          <div className="mb-6 mt-14">
            <div className="relative m-auto flex gap-8 overflow-hidden">
              <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
                {demoPages.map((image, idx) => (
                  <div
                    key={idx}
                    className="aspect-1 h-60 w-full rounded-lg object-cover">
                    <Image
                      className="h-full w-full rounded-lg"
                      src={image}
                      alt="demo"
                    />
                  </div>
                ))}
              </div>
              <div
                aria-hidden="true"
                className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
                {accountPages.map((image, idx) => (
                  <Image
                    key={idx}
                    className="aspect-1 h-60 w-full rounded-lg object-cover"
                    src={image}
                    alt="account"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
