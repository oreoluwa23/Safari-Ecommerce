import React from "react";
import CartItem from "./CartItem";
import cartStyle from "../stylesheets/cart.module.css";

export default function Cart() {
  const products = [
    {
      id: 1,
      productName: "Shoe",
      price: 10000,
      quantity: 1,
      size: "XL - US",
    },
    {
      id: 1,
      productName: "T-Shirt",
      price: 20000,
      quantity: 1,
      size: "XL - EU",
    },
    {
      id: 1,
      productName: "Trousers",
      price: 70000,
      quantity: 1,
      size: "XL - NG",
    },
  ];
  return (
    <>
      <div className={cartStyle.container}>
        <div className={cartStyle.row}>
          <h6>Shopping Cart (2 Items)</h6>
        </div>
        <div className={cartStyle.row}>
          <div className={cartStyle.content}>ITEM DESCRIPTION</div>
          <div className={cartStyle.quantity}>QUANTITY</div>
          <div className={cartStyle.price}>UNIT PRICE </div>
          <div className={cartStyle.subTotal}>SUB TOTAL</div>
        </div>
        {products.map((product, key) => (
          <CartItem key={key} productData={product} />
        ))}

        <div className={cartStyle.row}>
          <h6>
            TOTAL PRICE: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x20A6;120,000
          </h6>
          <small>Delivery fee not included yet</small>
        </div>
        <div className={cartStyle.row}>
          <button className={cartStyle.shopping}>CONTINUE SHOPPING</button>
          <button className={cartStyle.checkout}>CONTINUE TO CHECKOUT</button>
        </div>
      </div>
    </>
  );
}
