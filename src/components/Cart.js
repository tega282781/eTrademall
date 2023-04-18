import React from 'react';
import CartItem from './CartItem';
import "./myStyles.css"
import { FaShoppingBag} from 'react-icons/fa';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  close = () => {
    this.setState({ isOpen: false });
  };
  open = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const { isOpen } = this.state;
    let totalQuantity = this.props.cartItems.reduce((acc, cv)=>{
      acc = acc + cv.quantity;
      return acc;
    },0)
    if (!isOpen) {
      return <ClosedCart open={this.open} totalQuantity={totalQuantity}/>;
    }
 
    let totalAmount = this.props.cartItems.reduce((acc, cv)=>{
      acc = acc + cv.price * cv.quantity;
      return acc;
    }, 0)

    return (
      <div className='carted'>
      <aside className='cart'>
        <div onClick={this.close} className='close-btn'>
          X
        </div>
        <div className='cart-body'>

          <div className='cart-heading'>
            <div className='cart-icon'>
            <span className='item-count'>{totalQuantity}
           </span> 
            <div className='bag'><FaShoppingBag /></div>
            
            </div>
          </div>

     
          <div className='c-items'>
        {
            this.props.cartItems.map((item) =>(
            <CartItem  {...item} 
            incrementQuantity={this.props.incrementQuantity}
            decrementQuantity={this.props.decrementQuantity}
            deleteItem={this.props.deleteItem}/>
            ))
        }
        </div>

          <div className='cart-checkout'>
            <div>
              <p className='total'>SUBTOTAL: #{totalAmount}</p>
            </div>
            <button className='checkout' onClick={()=> alert(`Total amount is: #${totalAmount}`)}>CHECKOUT</button>
          </div>
        </div>
      </aside>
      </div>
    );
  }
}

function ClosedCart(props) {
  return (
    <div className='close-cart'>
      <span onClick={props.open} className='open-btn'>
        <div className='cart-icon'>
         <div className='bag'><FaShoppingBag /></div>
          <span className='item-count'>{props.totalQuantity}</span>
        </div>
      </span>
    </div>
  );
}

export default Cart;