import React, { Component } from 'react'
import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Main from './components/Main';
import {products} from './data'
import Cart from './components/Cart';
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cartItems: [],
       selectedSizes: [],
    }
   
  }
  handleClick = (size) =>{
    if (this.state.selectedSizes.includes(size)){
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.filter((s) => s !== size),}))
    }
    else{
      this.setState((prevState) => ({selectedSizes: prevState.selectedSizes.concat(size),}))
    }
   
  }
   

      componentDidMount(){
        if(localStorage.carts){
          this.setState({cartItems: JSON.parse(localStorage.carts) || []})
        }
        window.addEventListener('beforeunload', this.handleUpdateLocalStorage)
      }

      componentWillUnmount(){
       window.removeEventListener("beforeunload", this.handleUpdateLocalStorage)
      }
      

  handleUpdateLocalStorage = () =>{
    localStorage.setItem("carts", JSON.stringify(this.state.cartItems));
  }

  handleAddToCart = (p) =>{
   let isPresent = 
   this.state.cartItems.findIndex(product => product.id === p.id) !==-1;
   if(isPresent){
this.incrementQuantity(p.id);
   } else{
    this.setState(prevState =>({
      cartItems: prevState.cartItems.concat({...p, quantity: 1}),
    })
    )
  }
  }

  incrementQuantity = (id) =>{
   this.setState((prevState) =>{
    let updatedCartItems = prevState.cartItems.map((p) =>{
      if(p.id === id){
        return {
          ...p,
          quantity: p.quantity +1
        }
      }
      return p
    });
    return{
      cartItems: updatedCartItems
     }
   })
   
  }
 

  decrementQuantity = (id) =>{
    this.setState((prevState) =>{
     let updatedCartItems = prevState.cartItems.map((p) =>{
       if(p.id === id){
         return {
           ...p,
           quantity: p.quantity - 1
         }
       }
       return p
     })
     return{
      cartItems: updatedCartItems
     }
    })
   }

   deleteItem = (id) =>{
    this.setState((prevState) =>{
     let updatedCartItems = prevState.cartItems.filter((p) =>{
      return p.id !== id})
     return{
      cartItems: updatedCartItems
     }
    })
   }
   
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Cart cartItems={this.state.cartItems} 
        incrementQuantity={this.incrementQuantity}
        decrementQuantity={this.decrementQuantity}
        deleteItem = {this.deleteItem}/>
        <Slider  />
        <Items />
        <Sidebar products={products} 
        selectedSizes={this.state.selectedSizes}
         handleClick={this.handleClick}/>
         
        <Main products={products} 
        handleAddToCart={this.handleAddToCart}
        selectedSizes={this.state.selectedSizes}/>
        <Footer />
      </div>
    )
  }
}

export default App