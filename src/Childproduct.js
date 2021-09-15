
import React, { useState } from "react";

const Childproduct = (props) => {
  const [quantity, setQuantity] = useState(0);
  //------buy button
  const buy = () => {
    console.log(props.name)
    setQuantity(quantity + 1);
    // console.log(setQuantity(quantity+1))
    props.onQuan(1)
    props.onTotal(props.price)
    // multiQuant(quantity)

  };
  const myShow= ()=>{
    return  props.onShow(props.name)
  }
  
    return (
    <div><center>

      <h1>product name: {props.name} </h1>
      <h4>product price: ₹{props.price} </h4>
      <button onClick={buy}>buy</button>
      <h5>Quantity:{quantity}</h5>
      <button onClick={myShow}>show</button>
      <hr/> </center>
      {/* <button onClick={()=>{props.onShow(props.name)}}>Show</button> */}
    </div>
  )
  }
export default Childproduct;

