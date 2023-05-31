import React from 'react'
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import { CotizarContextProvider } from "../contexts/CotizarContext"
import Sidebar from './admin/Sidebar';


const Layout = () => {
  return (
    <div>
        <CotizarContextProvider>
        
        <Navbar />
        <HomePage />
        <Footer/>
      </CotizarContextProvider>
    </div>
  )
}

export default Layout