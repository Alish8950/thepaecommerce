import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'
import Contact from './Components/Contact'
import SingleProduct from './Components/SingleProduct'
import Cart from './Components/Cart'
import Error from './Components/Error'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
