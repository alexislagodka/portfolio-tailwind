import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import { FaReact } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiFirebase
} from 'react-icons/si'

SwiperCore.use([Autoplay])

export default function TechnoCard () {
  let nbSlides = 3
  if (window.innerWidth < 640) {
    nbSlides = 1
  }
  const [slidesPerView, setSlides] = useState(nbSlides)

  React.useEffect(() => {
    function handleResize () {
      window.innerWidth < 640 ? setSlides(1) : setSlides(3)
    }
    window.addEventListener('resize', handleResize)
  })

  React.useState()

  return (
    <div className='card grid'>
      <Swiper
        className='w-full h-full flex justify-center'
        centeredSlides
        slidesPerView={slidesPerView}
        loop
        autoplay={{
          delay: 3500,
          waitForTransition: false,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide className='text-center'>
          <div className='flex justify-center'>
            <SiFirebase size={100} className='hover:text-yellow-500' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <div className='flex justify-center'>
            <FaReact size={100} className='hover:text-cyan-300' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <SiNextdotjs size={100} className='hover:text-black' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <SiJavascript size={100} className='hover:text-yellow-400' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <SiTypescript size={100} className='hover:text-blue-600' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <SiRedux size={100} className='hover:text-purple-700' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
