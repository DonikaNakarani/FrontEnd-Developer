import React from 'react'
import Index from './Pages/Index';
import About from './Pages/About';
import Services from './Pages/Services';
import Project from './Pages/Project';
import Footer from './Component/Footer';
import Banner1 from './Component/Banner1'
import Header from './Component/Header';
import Banner2 from './Component/Banner2'
import Contact from './Pages/Contact';
import Signup from './Pages/Signup'
import Login from './Pages/Login';


import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Single from './Pages/Single';
import Single_Product from './Pages/Single_Product';




function Main() {
  return (
    <div>
    <Header/>

        <Routes>
          <Route index element={<><Banner1/><Index/></>}/>
          <Route path='/index' element={<><Banner1/><Index/></>}/>
          <Route path='/about' element={<><Banner2 title={"About"}/><About/></>}/>
          <Route path='/services' element={<><Banner2 title={"Services"}/><Services/></>}/>
          <Route path='/project' element={<><Banner2 title={"Project"}/><Project/></>}/>
          <Route path='/contact' element={<><Banner2 title={"Contact"}/><Contact/></>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<><Login/></>}/>
          <Route path='/single' element={<><Single/></>}/>
          <Route path='/project/:id' element={<><Banner2 title={"View Product"}/><Single_Product/></>}/>   
          
        </Routes>
      
        <Footer/>
    </div>
  )
}

export default Main