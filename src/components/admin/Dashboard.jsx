import axios from "axios"
import { useState, useEffect } from "react"

export default function Dashboard() {
    const [user, setUser] = useState({
        id: "",
        email:"",
        username:"",
        type: ""
    })

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

    
    return (
        <div>
            <h1>Datos Usuario:</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}