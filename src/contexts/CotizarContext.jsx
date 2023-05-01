"use client";

import React, { useState } from 'react'
import { createContext } from 'react'

export const CotizarContext = createContext([])

export const CotizarContextProvider = ({ children }) => {

  const [cotizar, setCotizar] = useState([])

  return (
    <CotizarContext.Provider value={[cotizar, setCotizar]}>
      {children}
    </CotizarContext.Provider>
  )
}

