import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Product from './pages/Product'

function App() {
  return (
    <>
  <Navbar/>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Product' element={<Product/>}/>
  </Routes>
    </>
  )
}

export default App
