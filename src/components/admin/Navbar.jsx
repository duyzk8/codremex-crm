import { CotizarContext } from "@/contexts/CotizarContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export default function Navbar() {
  const router = useRouter();

  const [cotizar, setCotizar] = useContext(CotizarContext);

  const quantity = cotizar && cotizar.length > 0 ? cotizar.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0) : 0;
  

  return (
    <>
      <header className="text-gray-600 body-font " >
        <div className="text-center p-5 ">
          <Link href="/">
            <span className="text-2xl font-bold mb-6 text-center">CODREMEX | ADMIN PANEL</span>
          </Link>

        </div>
        <div>
        <nav className="text-xl bg-grey md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/admin/cotizaciones">
              <span className="mr-5 hover:text-gray-900">Cotizaciones</span>
            </Link>
            <Link href="/admin/mensajes">
              <span className="mr-5 hover:text-gray-900">Mensajes</span>
            </Link>
            <Link href="/admin/ventas">
              <span className="mr-5 hover:text-gray-900">Ventas</span>
            </Link>
          </nav>
          </div>
      </header>
    </>
  );
}