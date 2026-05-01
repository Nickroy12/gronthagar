'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import data from '@/data/data.json'
import Image from 'next/image'

// Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// modules
import { EffectCards, Autoplay } from 'swiper/modules'

const SliderCard = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 1600,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="w-[300px] h-[400px]"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="rounded-xl overflow-hidden outline outline-purple-500 shadow-white"
          >
            <Image
              src={item.image_url}
              alt={item.title}
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderCard