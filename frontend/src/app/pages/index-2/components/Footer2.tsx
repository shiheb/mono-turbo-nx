import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { footerLinks2 } from '../data'
import Footer from '@/components/Footer'

const Footer2 = () => {
  const socialIcons = [
    'lucide:facebook',
    'lucide:instagram',
    'lucide:twitter',
    'lucide:linkedin',
  ]

  return (
    <footer className="bg-default-950/40 backdrop-blur-3xl">
      <div className="container py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          <div className="col-span-2 md:col-span-2">
            <Image
              src={logo}
              width={124}
              height={40}
              className="h-10"
              alt="logo"
            />
            <p className="mt-6 text-base font-medium text-default-200 md:w-3/4">
              Start working with Tailwindcss It allows you to compose complex
              designs by combining and customizing utility classes.
            </p>
            <div className="mt-6">
              <h6 className="mb-4 text-base text-white">Follow US :</h6>
              <ul className="flex flex-wrap items-center gap-1">
                {socialIcons.map((icon, idx) => (
                  <li key={idx}>
                    <Link
                      href=""
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-500 hover:bg-primary">
                      <IconifyIcon
                        icon={icon}
                        className="h-5 w-5 text-default-300 group-hover:text-white"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {footerLinks2.map((item, idx) => (
            <div key={idx}>
              <ul className="flex flex-col gap-3">
                <h5 className="mb-2 font-medium text-default-200 lg:text-lg xl:text-xl">
                  {item.title}
                </h5>
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url ?? ''}
                      className="text-base font-normal text-slate-300 transition-all hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </footer>
  )
}

export default Footer2
