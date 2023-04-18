import React, { useState } from 'react'
import PropTypes from "prop-types"
import { useMemo } from 'react'
import { FaStar } from 'react-icons/fa'



const Rate = ({count, rating, color, onRating}) => {
    const [hoverRating, sethoverRating] = useState(0);
    const getColor = index =>{
        if(hoverRating >= index){
            return color.filled
        } else if(hoverRating && rating >= index){
            return color.filled
        }
        return color.unfilled;
    }
    const starRating= useMemo(()=>{
        return Array(count)
        .fill(0)
        .map((_, i) => i + 1)
        .map(idx=>
            <FaStar
            key={idx}
            className="cursor-pointer"
            icon= "star"
            onClick={() => onRating(idx)}
            style={{color:getColor(idx)}}
            
           
            onMouseDown={()=>sethoverRating(idx)}
            
            />
        )
    },[count,rating, hoverRating])
  return (
    <div>
        {starRating}
    </div>
  )
}

  Rate.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onchange: PropTypes.func,
    color: {
        filled: PropTypes.string,
        unfilled: PropTypes.string
    }
}

Rate.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: "#f5eb3b",
        unfilled: "#DCDCDC"
    }
}
export default Rate