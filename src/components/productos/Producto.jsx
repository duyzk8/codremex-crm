import { CotizarContext } from '@/contexts/CotizarContext'
import React, { useContext } from 'react'

export const Producto = ({ id, name, category, image, description }) => {

  const [cotizar, setCotizar] = useContext(CotizarContext);

  const addCotizar = () => { 
    setCotizar((currentItems) => {
       const isItemFound = currentItems.find((item) => item.id === id);
       if(isItemFound){
        return currentItems.map((item)=>{
          if(item.id === id){
            return {...item, quantity: item.quantity + 1};
          }else {
            return item;
          }
        });
       }else{
        return [...currentItems, {id, name, quantity: 1}];
       }
    })
   }

   const removeItem = (id) => {
    console.log("setCotizar:", setCotizar);
    setCotizar((currentItems) => {
      if(currentItems.find((item)=> item.id ===id)?.quantity===1){
        return currentItems.filter((item) => item.id !== id);
      }else{
        return currentItems.map((item)=>{
          if(item.id === id){
            return {...item, quantity: item.quantity -1}
          }else{
            return item;
          }
        })
      }
    })
   }

   const getQuantityById = (id) => { 
    return cotizar.find((item) => item.id ===id)?.quantity || 0;
    }

    const quantityPerItem = getQuantityById(id);


  return (
    <div>
      {
        quantityPerItem > 0 && (
          <div class="text-blue-600 justify-center w-full"> Cantidad: {quantityPerItem} </div>
        )
      }

      <img className="object-cover w-full rounded-md h-72 xl:h-80" src={image} alt="Duraslot" />
      <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-800">{name}</h4>
      <p className="text-blue-500"> Descripcion: {description} </p>
      <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        onClick={() => addCotizar()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <span className="mx-1">+ Cotizar</span>
      </button>

      {
        quantityPerItem > 0 && (
          <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        onClick={() => removeItem(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <span className="mx-1">- Remover</span>
      </button>
        )
      }
    </div>
  )
}