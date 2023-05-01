import React, { createContext, useReducer } from 'react'


export const Store = createContext()

// el estado inicial de nuestra aplicaion o variable de estado

const initialState = {
    cart:{
        cartItems:[]
    }
}

// funcion reductora pa crear la logica funcional

function reducer(state, action){

}

// funcion pa crear store y envolver a los componentes

export function StoreProvider({children}){
    cosnt [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return<Store.Provider value={value}></Store.Provider>
}