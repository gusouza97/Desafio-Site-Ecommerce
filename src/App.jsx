import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ListProducts from './pages/ListProducts/ListProducts';
import Product from './pages/Product/Product';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Products" element={<ListProducts />} />
        <Route path="Product/:id" element={<Product />} />
        <Route path="ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
