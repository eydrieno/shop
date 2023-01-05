import React from 'react'
import styles from "./navbar.module.css"
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { useContext } from 'react';
import cartContext from '../../contexts/cartContext';

export default function Navbar() {

  const { cart } = useContext(cartContext);

  return (
    <div className='navbar'>
      <div className={styles.navigation}>
        <div className={styles.help}>
          <button className={styles.helpBtn}>
            <HelpIcon/>
            <p>help</p>
          </button>
        </div>
        <Link to={"/"}>
          <h1 className={styles.logo}>TERA</h1>
        </Link>
        <div className={styles.accountCartWrapper}>
          <button className={styles.accountBtn}>
            <AccountCircleIcon/>
            <p>account</p>
          </button>
          <Link to={"/cart"} className={styles.cartBtn}>
            <ShoppingCartIcon/>
            <p>cart ({cart.length})</p>
          </Link>
        </div>
      </div>
      <div className={styles.categories}>
        <Link to={"men's clothing"}>Man</Link>
        <Link to={"women's clothing"}>Woman</Link>
        <Link to={"jewelery"}>Jewellery</Link>
        <Link to={"electronics"}>Electronics</Link>
      </div>
      <hr />
    </div>
  )
}
