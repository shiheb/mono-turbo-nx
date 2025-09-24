'use client'
import Image from 'next/image'
import type { CategoriesType } from '../types'
import Link from 'next/link'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { trendingCategories } from '../data'
import useCountdown from '@/hooks/useCountdown'

const CategoryCard = ({ category }: { category: CategoriesType }) => {
  const { days, hours, minutes, seconds } = useCountdown()

  const { avatar, currentBid, image, lastBid, name, username, hasTime } =
    category
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-default-950/40 backdrop-blur-3xl duration-500 ease-in-out"
      data-aos="zoom-in"
      data-aos-duration={800}>
      <div className="p-3">
        <div className="relative">
          <Image src={image} alt="" className="rounded-md" />
          <div className="-trandefault-y-1/2 absolute end-0 start-0 top-1/2 scale-0 text-center opacity-0 duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
            <button className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-1.5 text-center align-middle text-base font-semibold tracking-wide text-white duration-500 hover:border-primary-hover hover:bg-primary-hover">
              Place Bid{' '}
              <IconifyIcon
                icon="lucide:navigation"
                className="h-4 w-4 fill-white"
              />
            </button>
          </div>
          {hasTime && (
            <div className="absolute start-0 top-0 p-2 transition-all duration-700">
              <div className="inline-flex w-full justify-center">
                <div className="rounded-full bg-gradient-to-r from-rose-500 to-blue-600 px-2.5 py-1">
                  <p
                    id="auction-item-1"
                    className="flex flex-col text-sm font-bold text-white">
                    {days} : {hours} : {minutes} : {seconds}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative pt-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={avatar}
                className="h-10 w-10 rounded-full"
                alt="avatar"
              />
              <span>
                <a
                  href="#"
                  className="text-sm font-medium text-default-100 hover:text-primary">
                  {username}
                </a>
                <span className="block text-xs text-default-100">{name}</span>
              </span>
            </div>
            <Link
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center text-center align-middle text-lg tracking-wide text-default-100 duration-500 hover:text-red-600 focus:text-red-600">
              <IconifyIcon icon="mdi:heart" />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="block font-semibold text-default-100">
                Current Bid
              </span>
              <span className="inline-flex font-semibold text-primary">
                <IconifyIcon
                  icon="mdi:ethereum"
                  className="me-1 text-xl leading-none text-primary"
                />
                {currentBid} ETH
              </span>
            </div>
            <div className="text-end">
              <span className="block font-semibold text-default-100">
                Last Bid
              </span>
              <span className="inline-flex font-semibold text-primary">
                <IconifyIcon
                  icon="mdi:ethereum"
                  className="me-1 text-xl leading-none text-primary"
                />
                {lastBid} ETH
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TrendingCategories = () => {
  return (
    <section id="categories" className="py-24">
      <div className="container relative">
        <div className="mb-10 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-medium capitalize text-white">
              Trending Categories
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
          <Link
            href=""
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-sm text-white transition-all duration-300 hover:bg-primary-hover">
            See More{' '}
            <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trendingCategories.map((category, idx) => (
            <CategoryCard category={category} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingCategories
