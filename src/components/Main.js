import Products from "./Products";
import './myStyles.css'

function Main(props) {
  return (
    <div className="main">
      <Products data={props.products} 
      handleAddToCart={props.handleAddToCart}
      selectedSizes={props.selectedSizes}/>
    </div>
  );
}

export default Main;