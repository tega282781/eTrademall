import React from 'react';
import { useState, useEffect } from 'react';
import './myStyles.css';
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from '../images/shoe1.jpg';
import image2 from '../images/shoe2.jpg'
import image3 from '../images/shoe3.jpg'
import image4 from '../images/shoe4.jpg'
import Rate from './Rate';




function Items() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
    const[rating, setRating] = useState(0)
    const[rating2, setRating2] = useState(0)
    const[rating3, setRating3] = useState(0)
    const[rating4, setRating4] = useState(0)
  return (
    <div className='items'>
    <div className='container'>
        <div data-aos="fade-up" className='i-items'>
            <div>
                <img src={image1} alt='' />
                <div className='off'>
                    <div>-30%</div> 
                    <div>#7000</div>
                </div>
                <div className='icons'>
                <div>
                <Rate rating={rating} onRating={rate=> setRating(rate)}/>
                <p>Rating {rating}</p>
                </div>
            </div>
            </div>

            <div>
                <img src={image2} alt='' />
                <div className='off'>
                <div>-20%</div> 
                <div>#15,000</div>
                </div>
                <div className='icons'>
                <div>
                <Rate rating={rating2} onRating={rate=> setRating2(rate)}/>
                <p>Rating {rating2}</p>
                </div>
            </div>
            </div>

            <div>
                <img src={image3} alt='' />
                <div className='off'>
                <div>-30%</div> 
                <div>#7,800</div>
                </div>
                <div className='icons'>
                <div>
                <Rate rating={rating3} onRating={rate=> setRating3(rate)}/>
                <p>Rating {rating3}</p>
                </div>
            </div>
            </div>

            <div>
                <img src={image4} alt='' />
                <div className='off'>
                <div>-20%</div> 
                <div>#10,000</div>
                </div>
                <div className='icons'>
                <div>
                <Rate rating={rating4} onRating={rate=> setRating4(rate)}/>
                <p>Rating {rating4}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Items