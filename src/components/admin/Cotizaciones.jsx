import React, { useState, useEffect } from 'react';

const CotizacionTable = () => {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cotizacion');
        const data = await response.json();
        setCotizaciones(data);
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
          <th>Productos</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {cotizaciones.map((cotizacion) => (
          <tr key={cotizacion.id}>
            <td>{cotizacion.id}</td>
            <td>{cotizacion.productos}</td>
            <td>{cotizacion.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default CotizacionTable;