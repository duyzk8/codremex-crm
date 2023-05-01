import { CotizarContext } from '@/contexts/CotizarContext';
import React, { useContext, useEffect, useState } from 'react'

function Cotizar() {

    const [cotizar, setCotizar] = useContext(CotizarContext);

    const quantity = cotizar && cotizar.length > 0 ? cotizar.reduce((acc, current) => {
        return acc + current.quantity;
      }, 0) : 0;
  

  return (
    <>
    <div>Total productos a cotizar: {quantity} </div>
    <div>
        {cotizar.map((item) =>(
            <p key={item.id}> {item.id} {item.quantity} {item.name}</p>
        ))}
    </div>
    </>
  )
}

export default Cotizar