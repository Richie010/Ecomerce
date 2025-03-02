/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import TopComopents from './components/TopComopents'
import TailoringService from './components/TailoringService'
import Product from './components/Product'
import FashionGallery from './components/About'
import Footer from './components/Footer'
// import Footer from './components/Footer'

function App() {

  return (
    <>
     <BrowserRouter>
        
      <TopComopents />
      {/* <Footer /> */}

      {/* <Header />
    
      <TailoringService />
      <Product /> */}
      <Routes>
       <Route path='' element={<Header />}></Route> 
    
     <Route path='/about' element={ <TailoringService />}></Route>
     <Route path='/products' element={<Product />}></Route>
     <Route path='/abouts' element={<FashionGallery />}/>
    </Routes>
        <Footer />
    </BrowserRouter>

   
    </>
  )
}

export default App
