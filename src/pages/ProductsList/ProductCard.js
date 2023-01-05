import React from 'react'
import styles from './productCard.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div className={styles.container}>
      <Link to={`${props.id}`}>
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={props.image} alt="img" />
        </div>
        <div className={styles.infoWrapper}>
          <p>{props.title}</p>
          <p>{props.price}$</p>
        </div>
      </Link>
    </div>
  )
}
