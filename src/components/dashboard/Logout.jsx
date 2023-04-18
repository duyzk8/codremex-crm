import axios from "axios"
import { useRouter } from "next/router"


export default function Logout() {
    // router para se usa para mandar al usuario a otra pagina, en este caso cuando se logea, lo redirige a home
    const router = useRouter()

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout')
            router.push("/login")
        } catch (error) {
            console.error(error)
            router.push("/login")
        }
        router.push("/login")
    }

    return(
        <div>
            <button onClick={()=>logout()}>Logout</button>
        </div>
    )
}