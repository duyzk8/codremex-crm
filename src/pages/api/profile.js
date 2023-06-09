import {verify} from 'jsonwebtoken'

export default function profilehandler(req, res){

    const {myToken} = req.cookies

    if(!myToken){
        return res.status(401).json({error: 'no token'})
    }

    try {
        const user = verify(myToken, 'secreto')  //process.env.SECRET remplazar XD
        console.log(user)
        return res.json({id: user.id, email: user.email, username: user.username, type: user.type});
    } catch (error) {
        return res.status(401).json({error: 'invalid token'})
    }
}