import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'

import avatar1 from '@/assets/images/avatars/img-1.png'
import avatar2 from '@/assets/images/avatars/img-2.png'
import avatar3 from '@/assets/images/avatars/img-3.png'

const ActionBox = () => {
  return (
    <section className="py-14">
      <div
        className="container"
        data-aos="zoom-out"
        data-aos-easing="ease"
        data-aos-duration={1000}>
        <div className="rounded-xl bg-default-950/40 p-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex-shrink">
              <div className="flex -space-x-2">
                <Image
                  className="inline-block h-10 w-10 rounded-full bg-white ring-2 ring-default-950"
                  src={avatar1}
                  alt="Image Description"
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full bg-white ring-2 ring-default-950"
                  src={avatar2}
                  alt="Image Description"
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full bg-white ring-2 ring-default-950"
                  src={avatar3}
                  alt="Image Description"
                />
                <button className="text-primarys h-10 w-10 rounded-full bg-white font-medium">
                  80+
                </button>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-default-200">
                Join our AI experts communiy
              </h3>
              <p className="mt-5 w-3/4 text-base font-medium text-default-300">
                Meet and learn from 80+ creators &amp; companies who share how
                thay use AI to create better content at lightning speed.
              </p>
            </div>
            <div className="flex-shrink">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                Join
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionBox
