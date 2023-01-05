import React from 'react';
import { useContext, useEffect, useState } from 'react';
import cartContext from '../../contexts/cartContext';
import styles from './cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
// const { cart, setCart } = useContext(cartContext)
const { cart, setCart} = useContext(cartContext)
console.log(cart);
// const { myCart, setMyCart } = useState(cart)
  
  var productsPrice = 0;
  var deliveryPrice;
console.log(cart);
  
  cart.forEach(element => {
    productsPrice += element.item.price
  });

  if(productsPrice > 200) {
    deliveryPrice = 0;
  } else {
    deliveryPrice = 9.99;
  }

  const deleteItem = item => {
    console.log(item);
    const index = cart.indexOf(item);
    cart.splice(index, 1)
    console.log(cart);
    window.localStorage.setItem('cart', JSON.stringify(cart))
    setCart([...cart])
  }
  

  return (
    <div>
      {cart.length ?
      <div className={styles.container}>
        <div className={styles.itemsWrapper}>
          <h1>Cart</h1>
          {cart.map(item => {
            return (
              <div className={styles.itemContainer}>
                <img className={styles.img} src={item.item.image} alt="product" />
                <div className={styles.infoWrapper}>
                  <p className={styles.info}>{item.item.title}</p>
                  <p className={styles.info}>size: {item.size}</p>
                </div>
                <div className={styles.deletePrice} onClick={() => deleteItem(item)}>
                  <DeleteIcon className={styles.deleteBtn}/>
                  <p className={styles.price}>{item.item.price}$</p>
                </div>
                
              </div>
            )
          })}
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryWrapper}>
            <div className={styles.summaryContent}>
              <div className={styles.summaryTitle}>
                PRODUCTS PRICE
              </div>
              <div className={styles.summaryPrice}>
                {productsPrice} $
              </div>
            </div>
            <div className={styles.summaryContent}>
              <div className={styles.summaryTitle}>
                DELIVERY
              </div>
              <div className={styles.summaryPrice}>
                {deliveryPrice} $
              </div>
            </div>
            <hr />
            <div className={styles.summaryContent}>
              <div className={styles.summaryTitle}>
                TOTAL
              </div>
              <div className={styles.summaryPrice}>
                {(productsPrice + deliveryPrice).toFixed(2)} $
              </div>
            </div>
            <div className={styles.button}>
              Go to checkout
            </div>
          </div>
        </div>
      </div>
      :
      <div className={styles.emptyInfo}>
        <h1 >Your cart is empty</h1>
      </div>
      }
    </div>
  )
}
