import React from 'react'
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import { CotizarContextProvider } from "../contexts/CotizarContext"


const Layout = () => {
  return (
    <div>
        <CotizarContextProvider>
        <Navbar />
        <HomePage />
      </CotizarContextProvider>
    </div>
  )
}

export default Layout