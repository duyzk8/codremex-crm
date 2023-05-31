import React from 'react'
import storeItems from '../../utils/products.json'
import { Producto } from './Producto'


function ListaProductos() {
  return (
    
    <div className="p-10 grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {
            storeItems.map((product, idx)=>{
                return <Producto key={product.id} {...product} />
            })
        }
    </div>
  )
}

export default ListaProductos