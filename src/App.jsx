import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import {  Route } from 'react-router-dom'
import About from './pages/About'
import OurCraft from './pages/OurCraft'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import { Routes } from 'react-router-dom'

function App() {
  return (
    <div className='bg-black w-screen  max-h-full -z-10 overflow-hidden'>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/craft' element={<OurCraft/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
    </div>
      
  )
}

export default App
