import { useState } from 'react'
import "../public/style.css"
import Home from './components/Home'
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  


  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home />} exact path='/' />
    <Route element={<Contact />} exact path='/contact' />
      


    </Routes>
    </BrowserRouter>
  )
}

export default App
