import React from 'react'
import styles from './modal.module.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

export default function Modal({ closeModal }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.modalContainer}>
        <CheckCircleOutlineIcon className={styles.tick}/>
        <h3 className={styles.title}>The product was added to your cart!</h3>
        <div className={styles.btnsWrapper}>
          <button className={styles.continueBtn} onClick={() => {closeModal(false)}}>Continue shopping</button>
          <Link to={"/cart"}>
            <button className={styles.cartBtn}>Go to your cart</button> 
          </Link>
        </div>
      </div>
    </div>
  )
}
