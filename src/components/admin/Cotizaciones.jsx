import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CotizacionTable = () => {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cotizacion');
        const data = await response.json();
        setCotizaciones(data);
        console.log(data)
      } catch (error) {
        console.log('Error fetching cotizaciones:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>id_usuario</th>
            <th>Productos</th>
            <th>Status</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cotizacion) => (
            <tr key={cotizacion.id}>
              <td>{cotizacion.id}</td>
              <td>{cotizacion.id_user}</td>
              <td>{cotizacion.productos}</td>
              <td>{cotizacion.status}</td>
              <td>
                <Link href={`/admin/cotizaciones/${cotizacion.id}`}>
                  Procesar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CotizacionTable;
