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
import Shopdetails from './components/Shopdetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContextProvider from "./utils/ContextProvider"

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
          <Route element={<Shopdetails />} exact path='/shop/:id' />
          <Route element={<Portfolio />} exact path='/portfolio' />
          <Route element={<Contact />} exact path='/contact' />

        </Routes>
        <Footer/>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
