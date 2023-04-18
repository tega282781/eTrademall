import React, { Component } from 'react'
import Order from './Order'


class Productmain extends Component {
    constructor(props) {
      super(props)
    
      
    }
  render() {
    return (
        <>
        <Order />
      <div>
        {this.props.data.map((products)=>{
            <Productes {...products} />
        })}
      </div>
      </>
    )
  }
}

function Productes(props) {
    return(
        <div>
            <div>{props.productName}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default Productmain

