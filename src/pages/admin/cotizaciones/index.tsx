import { CotizarContext } from '@/contexts/CotizarContext';
import React, { useContext } from 'react'
import Cotizar from 'src/components/admin/Cotizaciones'
import Navbar from 'src/components/admin/Navbar';

const Cotizaciones = () => {

  return (
    <>
      <Navbar />
      <div></div>
      <Cotizar />

    </>
  )
}

export default Cotizaciones

