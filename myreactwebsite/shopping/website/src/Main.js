import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Product from './components/Product'
import Cart from './components/Cart'
import Login from './components/Login'
import SignUp from './components/SignUp'
import About from './components/About'
import Contact from './components/Contact'


function Main() {
    
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
    
         
    
    
    </div>
  )
}

export default Main