import React, { useState } from "react";
import Childproduct from "./Childproduct";

const Myproduct = () => {
  const ProductForm = (onCreateProduct,index) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const createMsg = (event) => {
      // alert("Name:" + name + "Price:" + price);
      event.preventDefault()
      const product={id:index,name,price}
      onCreateProduct(product)
    };
 
    return (
      <form>
        <label>Product name </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <label>Product price </label>
        <input type="number" onChange={(e) => setPrice(e.target.value)} /> <br />
        <br />
        <button onClick={createMsg}>Create</button>
      </form>
    );
  };
  //-----total calculation
  const [total, setTotal] = useState(0);
  const calcTotal = (price) => {
    setTotal(total + price);
  };
  const Total = ({ mytotal }) => {
    return <h1>Total cash:{mytotal}</h1>;
  };
  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 34500 },
    { id: 2, name: "Samsung", price: 14500 },
    { id: 3, name: "oppo", price: 24500 },
  ]);
  const addProduct=(product)=>{
     setProduct([...products,product])
     
  }
  //-----show product
  const showProduct = (name) => {
    alert("you have selected the " + name);
  };
  //--------total quantity
  const [quantotal, setQuant] = useState(0);

  const multiQuant = (quantity) => {
    // quantotal=0;
    setQuant(quantotal + quantity);
  };
  const Quantity = ({ tot }) => {
    return <h1>Total quantity:{tot}</h1>;
  };


  return (
    <div>
      <ProductForm index={products.length+1} onCreateProduct={addProduct} />

      {products.map((p) => {
        return (
          <Childproduct
            key={p.id}
            name={p.name}
            price={p.price}
            onTotal={calcTotal}
            onShow={showProduct}
            onQuan={multiQuant}
          />
        );
        // {alert("Hi")}
      })}
      <Total mytotal={total} />
      <Quantity tot={quantotal} />
    </div>
  );
};
export default Myproduct;
