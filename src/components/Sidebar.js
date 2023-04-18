import React, { Component } from 'react'
import './myStyles.css'

function Sidebar(props){

    let sizes = props.products.reduce((acc, cv) => {
        acc = acc.concat(cv.availableSizes);
        return acc;
      }, []);
      let uniqueSizes = [...new Set(sizes)];
      let {selectedSizes } = props;
    return (
        <aside className="flex-20 sidebar">
        <div className="side">
          {uniqueSizes.map((size) => (
            <span onClick={()=>props.handleClick(size)} 
            className= {`size ${selectedSizes.includes(size) ? 'active' : ''}`}>{size}</span>
          ))}
        </div>
      </aside>
    )
  }


export default Sidebar