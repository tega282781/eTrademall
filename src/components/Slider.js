import React from 'react'
import { useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import './myStyles.css';
import emoji1 from "../images/emoji1.jpg"
import emoji2 from "../images/emoji2.jpg"
import emoji3 from "../images/femaleemoji.jpg"
import emoji4 from "../images/emoji4.jpeg"
import {EffectCoverflow, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import {FaRegArrowAltCircleRight} from 'react-icons/fa';
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";

const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div data-aos="fade-up" className='slide'>
      <Swiper
      spaceBetween={200}
      effect={'coverflow'}
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      grabCursor={true}
     
      
      className="slider"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
   
      navigation={{
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
        clickable: true,
      }}
      modules={[EffectCoverflow, Navigation]}
      >
        <SwiperSlide>
       
        <div className='s-info'>
          <img src={emoji1} alt="" />
          <h4>Think Elegance</h4>
          <p>We sell Affordable unisex clothes at affordable rate.
            Beauty is Looking good and Looking good is good business,
            so invest in your looks today and feel confident.
          </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='s-info'><img src={emoji2} alt="" />
        <h4>Dress Smart</h4>
          <p>Confidence is key to success and to confident, 
          you must learn to dress smart, walk smart and talk smart.
          We can help you acheive that @Xclusive Stores by helping you dress smart.
          </p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='s-info'><img src={emoji3} alt="" />
        <h4>Kids Are Not Left Out</h4>
          <p>
            We have very affordable dresses and shoes for the kids
            Kids are special, we can help your kids feel special @Xclusive Stores

          </p>
        </div>
        </SwiperSlide>

        
        <SwiperSlide>
        <div className='s-info'><img src={emoji4} alt="" />
        <h4>We Accessories and Gadgets too</h4>
          <p>
           You can get all types of Accessories and Gadgets @Xclusive Stores.
           Our products are affordable and reliable with long lasting warranty.

          </p>
        </div>
        </SwiperSlide>

        <div className='control'>
        <div className='arrow-right'>
        <FaRegArrowAltCircleRight />
        </div>

        <div className='arrow-left'>
        <FaRegArrowAltCircleLeft />
        </div>
        <div className='swipe'></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Slider