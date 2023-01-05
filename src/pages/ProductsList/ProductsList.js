import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './productsList.module.css'

export default function ProductsList() {

  const category = useParams().category;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res=>res.json())
      .then(data=> {
        setItems(data)
      })
      .catch(error => {
        console.log(error);
      }) 
  }, [category])

  return (
    <div className={styles.container}>
      {items.map(item => {
      return (
        <ProductCard
          image={item.image}
          title={item.title}
          price={item.price}
          key={item.id}
          id={item.id}
        />
      )
      })}
    </div>
  )
}
