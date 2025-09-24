import Link from 'next/link'
import { authPages } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const AccountPages = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto mb-14 text-center">
          <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary bg-primary/20 px-2 text-base font-semibold text-primary">
            Account Pages
          </span>
          <h2 className="mb-2.5 text-3xl font-semibold text-default-100">
            Auth Pages
          </h2>
          <p className="text-base font-medium text-default-300">
            Start working with Tailwindcss <br /> It allows you to compose
            complex designs.
          </p>
        </div>
        <div
          className="justify-content-center aos-init aos-animate flex flex-wrap"
          data-aos="fade-up"
          data-aos-duration={1000}>
          {authPages.map((page, idx) => {
            return (
              <Link
                href={page.url}
                target="_blank"
                className="w-full p-3 lg:w-1/2"
                key={idx}>
                <div className="group relative rounded-lg bg-default-950/40 text-center shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="p-4">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        alt="demo-img"
                        className="w-full rounded-lg"
                        src={page.image}
                      />
                      <div className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <div className="hover:bg-primary-600 inline-flex items-center justify-center rounded-full bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500">
                          Live Preview{' '}
                          <span className="ms-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white text-primary">
                            <IconifyIcon
                              icon="mdi:share-all-outline"
                              className="text-lg"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <h5 className="mt-5 text-center text-xl font-semibold capitalize text-white">
                      {page.name}
                    </h5>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AccountPages
