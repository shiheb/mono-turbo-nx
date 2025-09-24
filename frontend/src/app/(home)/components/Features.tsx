import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { features } from '../data'

const Features = () => {
  return (
    <section
      id="features"
      className="py-20"
      data-aos="zoom-in"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full border-x-2 border-x-primary bg-primary/20 px-2 text-base font-semibold text-primary">
              Landing Features
            </span>
            <h2 className="mb-1 text-3xl/snug font-bold capitalize text-white">
              Why Choose WebAi
            </h2>
            <p className="text-base font-medium text-default-200">
              A modern design, fresh look and feel
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-4 rounded bg-default-950/40 p-2 backdrop-blur-3xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/20">
              <svg
                className="h-6 w-6 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33">
                <g clipPath="url(#prefix__clip0)">
                  <path
                    className="fill-primary"
                    fillRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            </span>
            <h5 className="text-base font-medium text-default-100">
              Based on latest Tailwind v3.4.17
            </h5>
          </div>
          {features.map((feature, idx) => (
            <div
              className="flex items-center gap-4 rounded bg-default-950/40 p-2 backdrop-blur-3xl"
              key={idx}>
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/20">
                <IconifyIcon
                  icon={feature.icon}
                  className="h-6 w-6 text-primary"
                />
              </span>
              <h5 className="text-base font-medium text-default-100">
                {feature.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
