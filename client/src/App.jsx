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

function App() {
  


  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home />}  path='/' />
    <Route element={<SinglePost />}  path='/singlepost' />
    <Route element={<About />}  path='/about' />
    <Route element={<Shop />} exact path='/shop' />
    <Route element={<Portfolio />} exact path='/portfolio' />
    <Route element={<Contact />} exact path='/contact' />
      


    </Routes>
    </BrowserRouter>
  )
}

export default App
