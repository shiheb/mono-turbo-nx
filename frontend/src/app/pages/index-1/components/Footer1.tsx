import Link from 'next/link'
import React from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Footer from '@/components/Footer'
import { footerLinks } from '../data'

const Footer1 = () => {
  const socialIcons = [
    'lucide:facebook',
    'lucide:instagram',
    'lucide:twitter',
    'lucide:linkedin',
  ]

  return (
    <footer className="bg-default-950/40 backdrop-blur-3xl">
      <div className="container lg:px-20">
        <div className="flex flex-col justify-between gap-14 py-24 lg:flex-row">
          <div className="lg:w-3/12">
            <Link href="/" className="logo flex items-center gap-2">
              <Image src={logo} className="w-36" alt="logo" />
            </Link>
            <p className="mt-6 max-w-xs text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs by combining and customizing utility classes.
            </p>
            <h5 className="mb-4 mt-6 text-base font-semibold text-default-200">
              Follow Us :
            </h5>
            <ul className="flex flex-wrap items-center gap-1">
              {socialIcons.map((icon, idx) => (
                <li key={idx}>
                  <Link
                    href=""
                    className="group inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 transition-all duration-500 hover:bg-primary">
                    <IconifyIcon
                      icon={icon}
                      className="h-4 w-4 text-default-300 group-hover:text-white"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-8/12">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {footerLinks.map((item, idx) => (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    <h5 className="mb-2 font-semibold text-default-200 lg:text-lg xl:text-xl">
                      {item.title}
                    </h5>
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href=""
                          className="inline-flex items-center gap-2 text-base font-semibold text-default-100 transition-all hover:text-primary">
                          <IconifyIcon
                            icon="lucide:circle-slash"
                            className="inline-block h-4 w-4"
                          />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </footer>
  )
}

export default Footer1
