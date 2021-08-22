import React from "react";
import Shoes from "./../../shoes.json";

const Product = () => {
  return (
    <>
      <h1>Product Page</h1>
      {Object.keys(Shoes).map((keyName) => {
        const shoe = Shoes[keyName];
        return (
          <div key={keyName}>
            <h4>{shoe.name}</h4>
            <img src={shoe.img} alt={shoe.name} height="200" />
          </div>
        );
      })}
    </>
  );
};

export default Product;
