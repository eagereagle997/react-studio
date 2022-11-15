import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import {BakeryItem} from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */



  const [cart, addToCart] = useState([]); //The cart
  const [cartTotal, setTotal] = useState(0); // Cart Total

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className = "outerFlex">
        <div className = "bakeryItemContainer">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            // <p>Bakery Item {index}</p> // replace with BakeryItem component
            <BakeryItem key={index} item = {item} cart = {cart} handleCart = {addToCart} cartTotal = {cartTotal} setTotal = {setTotal}/>
          ))}
        </div>

        <div className = "cartTotalContainer">
          <h2>Cart</h2>

          {/* TODO: render a list of items in the cart */
            cart.map((item, index) => (
              <p key = {index}>{item.name}</p>
            ))
          }
          
          <b><p>Total Price: ${cartTotal.toFixed(2)}</p></b>

        </div>
      </div>
    </div>
  );
}

export default App;
