import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import './myStyles.css';
import {  EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import jacket1 from '../images/jacket1.jpg'
import jacket2 from '../images/jacket2.jpg'
import jacket3 from '../images/jacket3.jpg'
import jacket4 from '../images/jacket4.jpg'
import jacket5 from '../images/jacket5.png'
import jacket6 from '../images/jacket6.jpg'
import jacket7 from '../images/jacket7.jpg'
import jacket8 from '../images/jacket8.jpg'
import jacket9 from '../images/jacket9.jpg'

import bag1 from '../images/bag1.jpg'
import bag2 from '../images/bag2.jpg'
import bag3 from '../images/bag3.jpg'
import bag4 from '../images/bag4.jpg'
import bag5 from '../images/bag5.jpg'
import bag6 from '../images/bag6.jpg'
import bag7 from '../images/bag7.jpg'
import bag8 from '../images/bag8.jpg'
import bag9 from '../images/bag9.jpg'
import bag10 from '../images/bag10.jpg'
import bag11 from '../images/bag11.jpg'

import unisexpant from '../images/unisexpant.jpg'
import pant2 from '../images/pant2.jpg'
import pantf2 from '../images/pantf2.jpg'
import pantf3 from '../images/pantf3.jpg'
import pantf4 from '../images/pantf4.jpg'
import pants1 from '../images/pants1.jpg'
import pantm1 from '../images/pantm1.jpg'

import shoe1 from '../images/shoe1.jpg'
import shoe2 from '../images/shoe2.jpg'
import shoe3 from '../images/shoe3.jpg'
import shoe4 from '../images/shoe4.jpg'
import shoe5 from '../images/shoe5.jpg'
import shoe6 from '../images/shoe6.jpg'
import shoe7 from '../images/shoe7.jpg'
import shoe8 from '../images/shoe8.jpg'
import shoe9 from '../images/shoe9.jpg'
import shoe10 from '../images/shoe10.jpg'
import shoe11 from '../images/shoe11.jpg'
import shoe12 from '../images/shoe12.jpg'
import shoe13 from '../images/shoe13.jpg'
import shoe14 from '../images/shoe14.jpg'
import shoe15 from '../images/shoe15.jpg'

import hats from '../images/hats.jpg'
import hat1 from '../images/hat1.jpg'
import hat2 from '../images/hat2.jpg'
import hat4 from '../images/hat4.jpg'
import hat5 from '../images/hat5.jpg'
import hat6 from '../images/hat6.jpg'
import hat7 from '../images/hat7.jpg'
import hat8 from '../images/hat8.jpg'
import hat9 from '../images/hat9.jpg'
import hat10 from '../images/hat10.jpg'
import hat11 from '../images/hat11.jpg'

import watch1 from '../images/watch1.jpg'
import watch2 from '../images/watch2.jpg'
import watch3 from '../images/watch3.jpg'
import watch4 from '../images/watch4.jpg'
import watch5 from '../images/watch5.jpg'
import watch6 from '../images/watch6.jpg'
import watch7 from '../images/watch7.jpg'
import watch9 from '../images/watch9.jpg'
function Shirts() {
  return (
    
    <div className='shirts'>
      <h4>Swipe right/left to see our amazing collections</h4>
        <Swiper 
      spaceBetween={200}
      effect={'coverflow'}
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      grabCursor={true}
     
      pagination={{clickable:true}}
      className="s-slider"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      Pagination={{el:'.swipe', clickable:true}}
      navigation={{
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      >
         <SwiperSlide>
    <div className='slide1'>
        <img src={shoe1} alt='' />
        <img src={shoe2} alt='' />
        <img src={shoe3} alt='' />
        <img src={shoe4} alt='' />
        <img src={shoe5} alt='' />
        <img src={shoe6} alt='' />
        <img src={shoe7} alt='' />
        <img src={shoe8} alt='' />
        <img src={shoe9} alt='' />
        <img src={shoe10} alt='' />
        <img src={shoe11} alt='' />
        <img src={shoe12} alt='' />
        <img src={shoe13} alt='' />
        <img src={shoe14} alt='' />
        <img src={shoe15} alt='' />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='slide1'>
        <img src={jacket1} alt='' />
        <img src={jacket2} alt='' />
        <img src={jacket3} alt='' />
        <img src={jacket4} alt='' />
        <img src={jacket5} alt='' />
        <img src={jacket6} alt='' />
        <img src={jacket7} alt='' />
        <img src={jacket8} alt='' />
        <img src={jacket9} alt='' />
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='slide1'>
        <img src={bag1} alt='' />
        <img src={bag2} alt='' />
        <img src={bag3} alt='' />
        <img src={bag4} alt='' />
        <img src={bag5} alt='' />
        <img src={bag6} alt='' />
        <img src={bag7} alt='' />
        <img src={bag8} alt='' />
        <img src={bag9} alt='' />
        <img src={bag10} alt='' />
        <img src={bag11} alt='' />
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='slide1'>
        <img src={unisexpant} alt='' />
        <img src={pant2} alt='' />
        <img src={pantf2} alt='' />
        <img src={pantf3} alt='' />
        <img src={pantf4} alt='' />
        <img src={pantm1} alt='' />
        <img src={pants1} alt='' />
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='slide1'>
        <img src={hats} alt='' />
        <img src={hat1} alt='' />
        <img src={hat2} alt='' />
        <img src={hat4} alt='' />
        <img src={hat5} alt='' />
        <img src={hat6} alt='' />
        <img src={hat7} alt='' />
        <img src={hat8} alt='' />
        <img src={hat9} alt='' />
        <img src={hat10} alt='' />
        <img src={hat11} alt='' />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='slide1'>
        <img src={watch1} alt='' />
        <img src={watch2} alt='' />
        <img src={watch3} alt='' />
        <img src={watch4} alt='' />
        <img src={watch5} alt='' />
        <img src={watch6} alt='' />
        <img src={watch7} alt='' />
        <img src={watch9} alt='' />
      </div>
    </SwiperSlide>
      </Swiper>
    </div>
  
  )
}

export default Shirts