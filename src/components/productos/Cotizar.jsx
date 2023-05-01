import { CotizarContext } from '@/contexts/CotizarContext';
import React, { useContext, useEffect, useState } from 'react'

function Cotizar() {

    const [cotizar, setCotizar] = useContext(CotizarContext);

    const quantity = cotizar && cotizar.length > 0 ? cotizar.reduce((acc, current) => {
        return acc + current.quantity;
      }, 0) : 0;
  

  return (
    <>
    <div class="bg-white">

<div class="overflow-x-auto border-x border-t" >
   <table class="table-auto w-full">
      <thead class="border-b">
         <tr class="bg-gray-100">
            <th class="text-left p-4 font-medium">
               ID
            </th>
            <th class="text-left p-4 font-medium">
               PRODUCTO
            </th>
            <th class="text-left p-4 font-medium">
               CANTIDAD
            </th>
         </tr>
      </thead>
      <tbody>
      {cotizar.map((item) =>(
        <tr class="border-b hover:bg-gray-50" key={item.id}>
        <td class="p-4">
           {item.id}
        </td>
        <td class="p-4">
           {item.name}
        </td>
        <td class="p-4">
           {item.quantity}
        </td>
     </tr>
        ))}
      </tbody>
   </table>
   <div class="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                <div>Total productos:</div>
                <div class="text-blue-600"> {quantity} </div>
            </div>
</div>
</div>
    </>
  )
}

export default Cotizar

