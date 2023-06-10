import { CotizarContext } from '@/contexts/CotizarContext';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

function Cotizar() {

   const [cotizar, setCotizar] = useContext(CotizarContext);
   const [user, setUser] = useState({
      id: "",
      email: ""
   })

   // Obtenemos el ID del usuario llamando a la api api/profile
   useEffect(() => {
      const getProfile = async () => {
         try {
            const response = await axios.get('/api/profile')
            setUser(response.data)
         } catch (error) {
            console.error("Error fetching user profile:", error)
         }
      }

      getProfile()
   }, [])

   //Creamos el objeto que se enviara a la api con el id del usuario y los productos
   var productos = {
      "id_user": user.id,
      "productos": cotizar
   };

   //Se hace la peticion post a la api /api/cotizacion con el objeto productos, para mandar a la bd
   const handleSubmit = async e => {
      e.preventDefault()

      try {
         axios.post("/api/cotizacion", (productos))
            .then(response => {
               console.log(productos);
            })
            .catch(error => {
               console.error(error)
            })
      } catch (error) {
         console.log(error);
      }
   }

   const quantity = cotizar && cotizar.length > 0 ? cotizar.reduce((acc, current) => {
      return acc + current.quantity;
   }, 0) : 0;


   return (
      <>
         <div className="bg-white">

            <div className="overflow-x-auto border-x border-t" >
               <table className="table-auto w-full">
                  <thead className="border-b">
                     <tr className="bg-gray-100">
                        <th className="text-left p-4 font-medium">
                           ID
                        </th>
                        <th className="text-left p-4 font-medium">
                           PRODUCTO
                        </th>
                        <th className="text-left p-4 font-medium">
                           CANTIDAD
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {cotizar.map((item) => (
                        <tr className="border-b hover:bg-gray-50" key={item.id}>
                           <td className="p-4">
                              {item.id}
                           </td>
                           <td className="p-4">
                              {item.name}
                           </td>
                           <td className="p-4">
                              {item.quantity}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                  <div>Total productos:</div>
                  <div className="text-blue-600"> {quantity} </div>
                  <br />
                  <button class="font-medium text-white capitalize transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-700 " onClick={handleSubmit}>
                     <span class="mx-1">Cotizar</span>
                  </button>
                  <pre>

                  </pre>
               </div>
            </div>
         </div>
      </>
   )
}

export default Cotizar

