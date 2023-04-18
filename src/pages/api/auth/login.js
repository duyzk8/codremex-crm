import jwt from 'jsonwebtoken'
import { serialize } from "cookie"
import { conn } from "../../../utils/database";

export default async function loginHandler(req, res){
    
    const {email, password} = req.body

    /// VALIDACION SI EL EMAIL Y PASSWORD COINCIDE EN BD
    const query = "SELECT * FROM users WHERE email= $1 AND password =$2";
    const response = await conn.query(query, [email,password]);
    console.log(response.rows[0].email);
    console.log(response.rows[0].password)
    const emailbd = response.rows[0].email;
    const passwordbd = response.rows[0].password;

    

    //SI LOS VALIDA CREA EL TOKEN CON LOS DATOS
    if (email === emailbd && password=== passwordbd){
        //creamos el token con los datos y los datos que contendra
       const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 *60*24*30,
            email: emailbd,
            username: passwordbd,
        }, 'secreto') //process.env.SECRET
        const serialized = serialize('myToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/'
        })
    
        res.setHeader('Set-Cookie', serialized)
        return res.json('login route')
    }

    return res.status(401).json({error: ' Invalid Email or Password'})
}