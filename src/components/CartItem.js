import React, { useState, useRef, useEffect } from "react";
import cartItemStyle from "../stylesheets/cartItem.module.css";
import productImage from "../icons/image1.png";
import "../styles/numberInput.css";
import currencyFormatter from "../../src/currencyFormerter";

export default function CartItem(product) {
  const [currentPrice, setCurrentPrice] = useState(product.productData.price);
  const currentQuantity = useRef(product.productData.quantity);
  useEffect(() => {
    setCurrentPrice(
      (currentPrice) => currentPrice * currentQuantity.current.value
    );
  }, []);
  const updateSubtotal = (e) => {
    setCurrentPrice(
      (currentPrice) => currentPrice * currentQuantity.current.value
    );
  };
  return (
    <>
      <div className={cartItemStyle.container}>
        <div className={cartItemStyle.content}>
          <img
            src={productImage}
            alt={productImage}
            className={cartItemStyle.productImage}
          />
          <div className={cartItemStyle.mid}>
            <div className={cartItemStyle.productDetails}>
              <h6>{product.productData.productName}</h6>
              <small>{product.productData.size}</small>
            </div>

            <div className={cartItemStyle.moveToFavorites}>
              <i class="far fa-heart"></i>
              MOVE TO FAVOURITES
            </div>
          </div>
          <div className={cartItemStyle.remove}>
            <i class="fas fa-times-circle"></i>
            REMOVE
          </div>
        </div>
        <div className={cartItemStyle.quantity}>
          <input
            type="number"
            defaultValue={product.productData.quantity}
            min="1"
            max="1000"
            ref={currentQuantity}
            className={cartItemStyle.quantityInput}
            onKeyUp={updateSubtotal}
          />
        </div>
        <div className={cartItemStyle.price}>
          {currencyFormatter.format(product.productData.price)}
        </div>
        <div className={cartItemStyle.subTotal}>
          {currencyFormatter.format(currentPrice)}
        </div>
      </div>
    </>
  );
}
