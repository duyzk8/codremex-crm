import axios from "axios"
import { useState } from "react"

export default function GetUser() {
    const [user, setUser] =useState({
        email:"",
        username:""
    })

    //get profile, va a traer los datos del back end
    const getProfile = async () => {
        const response = await axios.get('/api/profile')
        setUser(response.data)
    }

    return(
        <div>
            <h1>Datos Usuario:</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
            <button onClick={()=>getProfile()}>Profile</button>
        </div>
    )
}