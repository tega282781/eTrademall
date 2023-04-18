import React from 'react';
import "./myStyles.css"

function CartItem(props) {
   
  return (
    <div className='cart-item'>
      
      <img
        src={props.productImage}
        alt=''
        width='120'
        height='120'
        
      />
      <div className='cart-item-details'>
        <div className='cart-item-name'>
         {props.productName}
        </div>
        <p className='price'>Price: #{props.price}</p>
        <div>Quantity: {props.quantity}</div>
      </div>
      
      <div className='cart-price'>
        <p onClick={()=>props.deleteItem(props.id)} className='cart-cross'>x</p>
        
        <div className='i-d'>
          <div className='i'>
          <Increment incrementQuantity={()=>props.incrementQuantity(props.id)} />
          </div>
          <div className='d'>
          <Decrement decrementQuantity={()=>props.decrementQuantity(props.id)}/>
          </div>
        </div>
        
      
      </div>
    </div>
  );
}

function Increment(props) {
  return (
    <svg style={{height: '20px'}}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
      onClick={props.incrementQuantity}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
        
      />
    </svg>
  );
}
function Decrement(props) {
  return (
    <svg style={{height: '20px'}}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
      onClick={props.decrementQuantity}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M18 12H6'
      />
    </svg>
  );
}

export default CartItem;

