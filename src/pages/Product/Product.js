import { React, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from './product.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import cartContext from '../../contexts/cartContext';
import Modal from './Modal'

export default function Product() {

  const productID = useParams().id;
  const category = useParams().category;
  const [product, setProduct] = useState([]);
  const [size, setSize] = useState('');
  const [sizeNotChosen, setSizeNotChosen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { cart, setCart } = useContext(cartContext);
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then(res=>res.json())
      .then(data=> {
        setProduct(data)
      })
      .catch(error => {
        console.log(error);
      }) 
      window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [productID, cart])

  const handleSizeChange = (event) => {
    setSize(event.target.value);
    setSizeNotChosen(false)
  };

  const addToCart = () => {
    if(category === 'jewelery' || category === 'electronics') {
      setCart(prevState => {
        return [
          ...prevState,
          {
            id: product.id,
            item: product,
            size: size
          }
        ]
      })
      setModalOpen(true);
    } else {
      if (size !== '') {   
        setCart(prevState => {
          return [
            ...prevState,
            {
              id: product.id,
              item: product,
              size: size
            }
          ]
        })
        setModalOpen(true);
        console.log(cart);
        // window.localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        setSizeNotChosen(true)
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <img className={styles.img} src={product.image} alt="product" />
        <div className={styles.info}>
          <p className={styles.title}>{product.title}</p>
          { category === 'jewelery' || category === 'electronics' ? 
            <div style={{display: 'none'}}></div>
          :
            <FormControl sx={{ m: 1, minWidth: 120, width: 300, margin: 0 }} size="small" required={true}>
              <InputLabel id="demo-simple-select-helper-label">size</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={size}
                label="size"
                onChange={handleSizeChange}
              >
                <MenuItem value={'XS'}>XS</MenuItem>
                <MenuItem value={'S'}>S</MenuItem>
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'L'}>L</MenuItem>
                <MenuItem value={'XL'}>XL</MenuItem>
              </Select>
            </FormControl>
            
          }
          { sizeNotChosen && <p className={styles.sizeWarning}>choose size</p> }
          <div className={styles.button} onClick={addToCart}>
            <AddShoppingCartIcon/>
            <p>add to cart</p>
          </div>
        </div>
      </div>
      <p className={styles.description}>{product.description}</p>
      {isModalOpen && <Modal closeModal={setModalOpen}/>}
    </div>
  )
}
