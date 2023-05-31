import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
      <div className="flex flex-col h-screen w-32 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="">CODREMEX</h1>
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col p-4">
            <li className="py-2 hover:bg-gray-700">
              <a href="#" className="block">Ordenes</a>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <a href="#" className="block">Clientes</a>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <a href="#" className="block">Ventas</a>
            </li>
          </ul>
        </nav>
      </div>
      
    );
  };
  
  export default Sidebar;