import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Footer from '@/components/Footer'

const Footer4 = () => {
  const socialIcons = [
    'lucide:facebook',
    'lucide:instagram',
    'lucide:twitter',
    'lucide:linkedin',
  ]

  return (
    <footer
      className="bg-default-950/40 backdrop-blur-3xl"
      data-aos="fade-down"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="container py-20 lg:px-20">
        <div className="mb-6">
          <Image
            src={logo}
            width={179}
            height={56}
            className="mx-auto h-14"
            alt="logo"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#"
            className="text-lg font-medium text-default-400 transition-all duration-500 hover:text-white">
            Management
          </a>
          <a
            href="#"
            className="text-lg font-medium text-default-400 transition-all duration-500 hover:text-white">
            Reporting
          </a>
          <a
            href="#"
            className="text-lg font-medium text-default-400 transition-all duration-500 hover:text-white">
            Tracking
          </a>
          <a
            href="#"
            className="text-lg font-medium text-default-400 transition-all duration-500 hover:text-white">
            Subscibe
          </a>
          <a
            href="#"
            className="text-lg font-medium text-default-400 transition-all duration-500 hover:text-white">
            Company
          </a>
        </div>
        <div className="mt-6">
          <h6 className="mb-4 text-center text-lg font-semibold text-white">
            Follow US :
          </h6>
          <ul className="flex flex-wrap items-center justify-center gap-1">
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
      <Footer />
    </footer>
  )
}

export default Footer4
