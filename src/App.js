import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import ProductsList from "./pages/ProductsList/ProductsList"
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import CartContext from './contexts/cartContext';
import { useState } from 'react';

function App() {
  
  const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart')));
  const value = { cart, setCart };
  // setCart(JSON.parse(window.localStorage.getItem('cart')))
  return (
    <div className="App">
      <CartContext.Provider value={value}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:category" element={<ProductsList/>}/>
          <Route path="/:category/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
