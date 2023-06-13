import axios from "axios"
import { useState, useEffect } from "react"

export default function GetUser() {
    const [cotizaciones, setCotizaciones] = useState([]);
    const [user, setUser] = useState({
        id: "",
        email:"",
        username:"",
        type: ""
    })
    const id_user = user.id

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

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`api/cotizacion/finalizadas?id=${user.id}`, {
              data: {
                id: id_user
              }
            });
            setCotizaciones(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [user.id]);

      console.log(id_user)
      console.table(cotizaciones)

    return(
        <div>
            <h1>Id usuario: {user.id} </h1>
            <h1>email: {user.email} </h1>
            <h1>tipo de usuario: {user.type} </h1>
            
            <div>
            <table>
  <thead>
    <tr>
      <th>Índice</th>
      <th>ID</th>
      <th>ID Usuario</th>
      <th>Productos</th>
      <th>Status</th>
      <th>Fecha</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {cotizaciones.map((cotizacion, index) => (
      <tr key={cotizacion.id}>
        <td>{index + 1}</td>
        <td>{cotizacion.id}</td>
        <td>{cotizacion.id_user}</td>
        <td>{cotizacion.productos}</td>
        <td>{cotizacion.status}</td>
        <td>{cotizacion.fecha}</td>
        <td>{cotizacion.grantotal}</td>
      </tr>
    ))}
  </tbody>
</table>

            </div>
        </div>
    )
}