'use client'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

import avatar1 from '@/assets/images/avatars/img-1.png'
import avatar2 from '@/assets/images/avatars/img-2.png'
import avatar3 from '@/assets/images/avatars/img-3.png'
import avatar4 from '@/assets/images/avatars/img-4.png'
import avatar5 from '@/assets/images/avatars/img-5.png'
import avatar6 from '@/assets/images/avatars/img-6.png'

import { testimonialData } from '../data'

import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialSwiper = () => {
  return (
    <section
      className="pb-24"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="container">
        <div className="relative rounded-xl bg-default-950/20 p-6 backdrop-blur-sm md:p-20">
          <div className="hidden lg:block">
            <div className="-z-1 absolute start-32 top-10 h-14 w-14">
              <Image src={avatar1} className="rounded-full" alt="avatar-1" />
            </div>
            <div className="-z-1 absolute start-10 top-64 h-14 w-14">
              <Image src={avatar2} className="rounded-full" alt="avatar-2" />
            </div>
            <div className="-z-1 absolute bottom-10 start-32 h-14 w-14">
              <Image src={avatar3} className="rounded-full" alt="avatar-3" />
            </div>
            <div className="-z-1 absolute end-32 top-10 h-14 w-14">
              <Image src={avatar4} className="rounded-full" alt="avatar-4" />
            </div>
            <div className="-z-1 absolute end-10 top-64 h-14 w-14">
              <Image src={avatar5} className="rounded-full" alt="avatar-5" />
            </div>
            <div className="-z-1 absolute bottom-10 end-32 h-14 w-14">
              <Image src={avatar6} className="rounded-full" alt="avatar-6" />
            </div>
          </div>
          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            className="testimonial-swiper">
            {testimonialData.map((item, idx) => (
              <SwiperSlide key={idx} className="pb-20">
                <div className="mx-auto max-w-2xl text-center">
                  <IconifyIcon
                    icon="lucide:quote"
                    className="mx-auto h-8 w-8 fill-primary text-primary"
                  />
                  <p className="mt-7 text-lg font-medium text-default-200">
                    {item.description}
                  </p>
                  <Image
                    src={item.avatar}
                    width={64}
                    height={64}
                    className="mx-auto my-8 h-16 rounded-full"
                    alt=""
                  />
                  <h2 className="text-xl font-medium text-default-200">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-sm font-normal text-default-400">
                    {item.role}
                  </p>
                  <div className="mt-1 flex items-center justify-center gap-1">
                    <IconifyIcon
                      icon="lucide:star"
                      className="h-4 w-4 text-yellow-300"
                    />
                    <IconifyIcon
                      icon="lucide:star"
                      className="h-4 w-4 text-yellow-300"
                    />
                    <IconifyIcon
                      icon="lucide:star"
                      className="h-4 w-4 text-yellow-300"
                    />
                    <IconifyIcon
                      icon="lucide:star"
                      className="h-4 w-4 text-yellow-300"
                    />
                    <IconifyIcon
                      icon="lucide:star"
                      className="h-4 w-4 text-yellow-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination pt-5" />
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSwiper
