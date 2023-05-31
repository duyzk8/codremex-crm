import { CotizarContext } from '@/contexts/CotizarContext';
import React, { useContext } from 'react'
import Cotizar from '../components/productos/Cotizar'
import Navbar from '@/components/Navbar';

const cotizar = () => {



  return (
    <>
    <Navbar/>
    <div className="p-10">

    <Cotizar/>
    </div>
    </>
  )
}

export default cotizar