import { useState } from 'react'
import "../public/style.css"
import Home from './components/Home'
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Shop from './components/Shop';
import Portfolio from './components/Portfolio';
import SinglePost from './components/SinglePost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContextProvider from "./utils/ContextProvider"
import Product from './components/Productdetails';
import Cart from './components/Cart';
import Nopage from './components/Nopage';

function App() {



  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<SinglePost />} path='/singlepost' />
          <Route element={<About />} path='/about' />
          <Route element={<Shop />} exact path='/shop' />
          <Route element={<Product />} exact path='/product/:id' />
          <Route element={<Portfolio />} exact path='/portfolio' />
          <Route element={<Contact />} exact path='/contact' />
          <Route element={<Cart />} exact path='/cart' />
          <Route element={<Nopage />} exact path='/*' />

        </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
