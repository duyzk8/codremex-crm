import { verify } from 'jsonwebtoken'
import {serialize} from 'cookie'

export default function logoutHandler (req, res){

    //recivo un token, si existe el token verifica si es correcto y cioerra la sesion 
    const {myToken} = req.cookies

    if(!myToken){
        return res.status(401).json({error: 'no token'})
    }

    try {
        verify(myToken, process.env.SECRET)
        const serialized = serialize('myToken', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json('Su sesion fue cerrada correctamente.')
    } catch (error) {
        return res.status(401).json({error: 'invalid token'})
    }

}