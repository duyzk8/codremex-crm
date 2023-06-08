import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CotizacionTable = () => {
  const [cotizaciones, setCotizaciones] = useState({});
  const router = useRouter();
  const {id} = router.query;
  const orden = id;
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/cotizacion/${orden}`);
        const data = await response.json();
        setCotizaciones(data);
      } catch (error) {
        console.log('Error fetching cotizaciones:', error);
      }
    };

    fetchData();
  }, [id]);


  return (
    <>
    <div>
    <h1> {cotizaciones.id} </h1>
    <h1> {cotizaciones.productos} </h1>
    <h1> {cotizaciones.status} </h1>
    </div>
    </>
  );
};

export default CotizacionTable;