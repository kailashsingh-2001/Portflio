import React from 'react'

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Aboutus from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'



function App() {
 
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about'  element={<Aboutus/>}/>
      <Route path='/skills'  element={<Skills/>}/>   
      <Route path='/education'  element={<Education/>}/>                                                              
    </Routes>
    </BrowserRouter>

       
    </>
  )
}

export default App
