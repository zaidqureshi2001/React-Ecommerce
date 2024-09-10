import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Product from './pages/Product/Product'
import Footer from './pages/Footer/Footer'
import FAQ from './pages/Footer/FAQ'
import PrivacyPolicy from './pages/Footer/PrivacyPolicy'
import Cart from './pages/Cart/Cart'
import Cotton from './pages/Product/Cotton'
import Pakistani from './pages/Product/Pakistani'
import Georgette from './pages/Product/Georgette'
import Wedding from './pages/Product/Wedding'
import ProductDetail from './pages/Product/ProductDetail'

function App() {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Product' element={<Product/>}/>
    <Route path='/FAQ' element={<FAQ/>}/>
    <Route path='/Privacy' element={<PrivacyPolicy/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Cotton' element={<Cotton/>}/>
    <Route path='/Pakistani' element={<Pakistani/>}/>
    <Route path='/Georgette' element={<Georgette/>}/>
    <Route path='/Wedding' element={<Wedding/>}/>
    <Route path="/product/:id" element={<ProductDetail/>} />
    </Routes>
  <Footer/>
    </>
  )
}

export default App
