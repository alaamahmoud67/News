import { useState } from 'react'

import './App.css'
import Home from './component/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Videos from './component/Videos/Videos'
import Image from './component/Image/Image'
import Sports from './component/Sports/Sports'
import Civilian from './component/Civilian/Civilian'
import Financial from './component/Financial/Financial'
import International from './component/International/International'
import Hour from './component/Hour/Hour'
import Articles from './component/Articles/Articles'
import Contact from './component/Contact/Contact'
import About from './component/About/About'
import Footer from './component/Footer/Footer'
function App() {

  return (
    <>
   
    <Router>
      <Navbar/>
       <Routes>
       <Route path="/" element={ <Home/>} />

       <Route path="/videos" element={ <Videos/>} />

       <Route path="/image" element={ <Image/>} />
       <Route path="/sports" element={ <Sports/>} />
       <Route path="/civilian" element={ <Civilian/>} />
       <Route path="/financial" element={ <Financial/>} />
       <Route path="/international" element={ <International/>} />
       <Route path="/Hour" element={ <Hour/>} />
       <Route path="/Articles" element={ <Articles/>} />
       <Route path="/contact" element={ <Contact/>} />
       <Route path="/about" element={ <About/>} />

          </Routes>
         <Footer/>
       </Router>
    </>
  )
}

export default App
