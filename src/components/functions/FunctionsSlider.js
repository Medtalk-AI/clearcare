import React from 'react'
import {iphoneMockups} from '../../data'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../../swiper.css'
import {EffectCoverflow, Pagination, Navigation} from 'swiper'

const FunctionsSlider = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='mySwiper'
      >
        {iphoneMockups.map((item, index) => {
          return (
            <SwiperSlide key={index} className='flex flex-col items-center' style={{width: '500px'}}>
              <h2 className="section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[0px] lg:mt-0 mb-16 leading-snug text-center text-xl lg:text-3xl">
                {item.title}
              </h2>
              <img src={item.img} className='w-[250px]' alt="" />
            </SwiperSlide>
          )
        })}
        <div className="swiper-controller">
          <div className="swiper-button-prev swiper-arrow"></div>
          <div className="swiper-button-next swiper-arrow"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  )
}

export default FunctionsSlider