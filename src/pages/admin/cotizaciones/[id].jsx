import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CotizacionTable = () => {
  const [cotizaciones, setCotizaciones] = useState({ productos: [] });
  const [productosData, setProductosData] = useState([]);
  const [userData, setUserData] = useState({})
  const router = useRouter();
  const { id } = router.query;
  const id_cotizacion = id;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  // Hacer la solicitud a la API para obtener los datos de la cotizacion con el ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/cotizacion/${id_cotizacion}`);
        if (!response.ok) {
          throw new Error('Error fetching cotizaciones');
        }
        const data = await response.json();
        console.log('Data from API:', data);
        setCotizaciones(data);
        //console.log(data)
      } catch (error) {
        console.log('Error fetching cotizaciones:', error);

      }
    };

    fetchData();
  }, [id_cotizacion]);



  //Obtener los datos (email) del usuario con el id_user de la id_cotizacion
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/userdata?id=${cotizaciones.id_user}`);
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
    if (cotizaciones.id_user) {
      fetchData();
    }

  }, [cotizaciones.id_user]);

  //hace el cambio en la base de datos, actualizando los productos con su precio y el gran total.
  const handleUpdateCotizacion = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(`/api/cotizacion/${id_cotizacion}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productosData,
          granTotal,
          status: 'procesado',
        }),
      });

      if (!response.ok) {
        throw new Error('Error updating cotizacion');
      }

      // Aquí puedes realizar cualquier acción adicional después de una actualización exitosa, como mostrar una notificación.

    } catch (error) {
      console.log('Error updating cotizacion:', error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  console.log(productosData)

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
                <th>Precio por Cantidad</th>
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
                <td>${granTotal}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h1> {cotizaciones.status} </h1>
        <button onClick={handleUpdateCotizacion} disabled={isLoading}>
          {isLoading ? 'Actualizando...' : 'Actualizar Cotización'}
        </button>
      </div>
    </>
  );
};

export default CotizacionTable;