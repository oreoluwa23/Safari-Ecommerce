import React from 'react'
import '../styles/product.css'
import { useState } from 'react';
import {Card} from 'react-bootstrap';
// import products from '../products';

const Product = ({product}) => {

  const [cart, setCart] = useState([])
  function addToCart(item) {
    let newCart = cart;
    newCart.push(item);
    setCart(newCart)
    console.log(cart)
  }
    return (
        <Card className='my-3 p-3 rounded' >
          <a href={`/product/${product._id}`}>
              <Card.Img src={product.image} variant ='top' />  
          </a>
          <Card.Body >
          </Card.Body>
          <Card.Title className='prodCenter mx-3'>
          <a href={`/product/${product._id}`}>
              <strong>{product.productName}</strong>
          </a>
              <strong className=' my-3 p-3'><br/>&#8358;{product.price}</strong>
              
              <div className ='p-3 fav-cart'>
                <a href={`/favorite`} className="btn-favorite m-3"><i className="far fa-heart fa-lg"></i></a>
                <a  href={`/#`} className="btn btn-outline-danger btn-sm" onClick={()=>addToCart(product)}>ADD TO CART<i className="fas fa-shopping-cart"></i></a>
              </div>              
          </Card.Title>    
      </Card>
    )
}

export default Product
