'use client'
const GlightBox = dynamic(() => import('@/components/GlightBox'), {
  ssr: false,
})
import Image from 'next/image'
import { browseByCategoryData, showcaseImages } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Showcase = () => {
  const diamondIcon = (
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
      data-lucide="diamond"
      className="lucide lucide-diamond h-24 w-24 fill-primary/10 group-hover:fill-white/20">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )

  return (
    <>
      <section
        id="showcase"
        className="pb-24"
        data-aos="zoom-out"
        data-aos-duration={800}>
        <div className="container">
          <div className="mb-10 flex flex-wrap items-center justify-between">
            <div>
              <h2 className="mb-2 text-4xl font-medium capitalize text-white">
                The Best showcase
              </h2>
              <p className="text-sm font-medium text-default-200">
                Start working with Tailwindcss It allows you to compose complex
                designs <br /> by combining and customizing utility classes..
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-sm text-white transition-all duration-300 hover:bg-primary-hover">
              See More{' '}
              <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 overflow-hidden rounded-xl md:grid-cols-4 md:gap-0">
            {showcaseImages.map((image, idx) => (
              <GlightBox
                href={image.src}
                className="glightbox overflow-hidden"
                key={idx}>
                <Image
                  src={image}
                  className="w-full rounded-lg object-cover transition-all duration-1000 hover:scale-110 md:rounded-none"
                  alt="art-image"
                />
              </GlightBox>
            ))}
          </div>
        </div>
      </section>

      <section
        className="pb-24"
        data-aos="zoom-out"
        data-aos-easing="ease"
        data-aos-duration={1000}>
        <div className="container">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl md:grid-cols-2 lg:grid-cols-2">
            <div className="group relative overflow-hidden bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40">
              <div className="p-6">
                <div className="relative h-24 w-24 overflow-hidden text-transparent">
                  {diamondIcon}
                  <div className="absolute end-0 start-0 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-xl text-primary duration-500 group-hover:text-white">
                    <IconifyIcon icon="lucide:wallet" className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href=""
                    className="text-xl font-medium text-white duration-500">
                    Set up your wallet
                  </Link>
                  <p className="mt-3 text-default-300 duration-500 group-hover:text-white/80">
                    Use Trust Wallet, Metamask or any wallet to connect to the
                    app.
                  </p>
                  <p className="mt-2 text-default-300 duration-500 group-hover:text-white/80">
                    You can upload any files from your computer or use Youtube
                    links. Keep in mind that our content repurposing works best
                    with longer videos.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40">
              <div className="p-6">
                <div className="relative inline-block overflow-hidden text-transparent">
                  {diamondIcon}
                  <div className="absolute end-0 start-0 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-xl text-primary duration-500 group-hover:text-white">
                    <IconifyIcon icon="lucide:shapes" className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href=""
                    className="text-xl font-medium text-white duration-500">
                    Create your collection
                  </Link>
                  <p className="mt-3 text-default-300 duration-500 group-hover:text-white/80">
                    Upload your NFTs and set a title, description and price.
                  </p>
                  <p className="mt-2 text-default-300 duration-500 group-hover:text-white/80">
                    You can upload any files from your computer or use Youtube
                    links. Keep in mind that our content repurposing works best
                    with longer videos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24" data-aos="zoom-out" data-aos-duration={800}>
        <div className="container">
          <div className="mb-10 flex flex-wrap items-center justify-between">
            <div>
              <h2 className="mb-2 text-4xl font-medium capitalize text-white">
                Browse by categories
              </h2>
              <p className="text-sm font-medium text-default-200">
                Start working with Tailwindcss It allows you to compose complex
                designs <br /> by combining and customizing utility classes..
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-sm text-white transition-all duration-300 hover:bg-primary-hover">
              See All{' '}
              <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {browseByCategoryData.map((category, idx) => (
              <div className="relative overflow-hidden rounded-xl" key={idx}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute start-0 top-0 p-4">
                  <Link
                    href=""
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-1.5 text-base text-white transition-all duration-300 hover:bg-primary-hover">
                    {category.category}
                  </Link>
                </div>
                <Image src={category.image} alt="art" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase
