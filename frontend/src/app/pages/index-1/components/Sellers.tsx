import Image from 'next/image'
import type { SellerType } from '../types'
import { currency } from '@/common/constants'
import { sellersData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

const SellerCard = ({ seller }: { seller: SellerType }) => {
  const { amount, avatar, images, name, id } = seller
  return (
    <div
      className="rounded-xl bg-default-950/40 backdrop-blur-3xl"
      data-aos="zoom-in-up"
      data-aos-duration={800}>
      <div className="flex items-center border-b border-dashed border-white/20 p-4">
        {images.map((image, idx) => (
          <div className="w-1/2 p-1" key={idx}>
            <Image src={image} className="rounded-md" alt="image" />
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="mb-6 flex w-full items-center justify-between">
          <Image alt="avatar" src={avatar} className="h-14 w-14 rounded-full" />
          <h3 className="text-3xl font-semibold text-default-100/60">0{id}</h3>
        </div>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h5 className="mb-2 flex items-center text-xl font-medium text-white">
              {name}
            </h5>
            <p className="text-xs text-default-200">
              {' '}
              Total earnings:{' '}
              <span className="font-medium text-white">
                {currency}
                {amount}{' '}
              </span>
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-sm text-white transition-all duration-300 hover:bg-primary-hover">
            View Detail
          </button>
        </div>
      </div>
    </div>
  )
}

const Sellers = () => {
  return (
    <section id="sellers" className="pb-24">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-medium capitalize text-white">
              Top Sellers
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
          <Link
            href=""
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-sm text-white transition-all duration-300 hover:bg-primary-hover">
            View All{' '}
            <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {sellersData.map((seller, idx) => (
            <SellerCard seller={seller} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sellers
