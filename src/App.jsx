/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TopComopents from './components/TopComopents'
import TailoringService from './components/TailoringService'

function App() {

  return (
    <>
    
      <TopComopents />
     <Header />
    <TailoringService />

   
    </>
  )
}

export default App
