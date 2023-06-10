import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CotizacionTable = () => {
  const [cotizaciones, setCotizaciones] = useState({ productos: [] });
  const [productosData, setProductosData] = useState([]);
  const [userData, setUserData] = useState({})
  const router = useRouter();
  const { id } = router.query;
  const orden = id;
  

  // Guardar los datos de producto.name y producto.quantity en constantes
  useEffect(() => {
    const parsedProductosData = cotizaciones.productos.map((productoString) => {
      const producto = JSON.parse(productoString);
      return { productId: producto.id, productName: producto.name, productQuantity: producto.quantity, precioUnitario: '' };
    });
    setProductosData(parsedProductosData);
  }, [cotizaciones.productos]);

  // Manejar el cambio de precio unitario para cada producto
  const handlePrecioUnitarioChange = (index, event) => {
    const { value } = event.target;
    const updatedProductosData = [...productosData];
    updatedProductosData[index].precioUnitario = value;
    updatedProductosData[index].total = value * updatedProductosData[index].productQuantity;
    setProductosData(updatedProductosData);
  };

  // Calcular el gran total
  const granTotal = productosData.reduce((total, producto) => total + producto.total, 0);

  // Actualizar el gran total y añadirlo a productosData
  useEffect(() => {
    setProductosData((prevProductosData) =>
      prevProductosData.map((producto) => ({ ...producto, granTotal }))
    );
  }, [granTotal]);

  // Hacer la solicitud a la API para obtener los datos de la orden con el ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/cotizacion/${orden}`);
        if (!response.ok) {
          throw new Error('Error fetching cotizaciones');
        }
        const data = await response.json();
        //console.log('Data from API:', data);
        setCotizaciones(data);
        //console.log(data)
      } catch (error) {
        console.log('Error fetching cotizaciones:', error);

      }
    };
    
    fetchData();
  }, [orden]);



  //Obtener los datos (email) del usuario con el id_user de la orden
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/userdata?id=${cotizaciones.id_user}`);
        if (!response.ok) {
          throw new Error('Error fetching cotizaciones');
        }
        const data = await response.json();
        //console.log('Data from API /userdata:', data);
        setUserData(data); // Set only the email in the state variable
      } catch (error) {
        console.log('Error fetching cotizaciones:', error);
      }
    };
    if (cotizaciones.id_user){
      fetchData();}
    
  }, [cotizaciones.id_user]);

  
  return (
    <>
      <div>
        <div>
        <h1> Id de Cotizacion: {cotizaciones.id} </h1>
        <h1>Usuario ID: {cotizaciones.id_user} </h1>
        <h1>{userData.email} </h1>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Prod. ID</th>
                <th>Nombre Prod.</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {productosData.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.productId}</td>
                  <td>{producto.productName}</td>
                  <td>{producto.productQuantity}</td>
                  <td>
                    <input
                      type="number"
                      value={producto.precioUnitario}
                      onChange={(event) => handlePrecioUnitarioChange(index, event)}
                    />
                  </td>
                  <td>{producto.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3">Gran Total</th>
                <td>{granTotal}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h1> {cotizaciones.status} </h1>
      </div>
    </>
  );
};

export default CotizacionTable;