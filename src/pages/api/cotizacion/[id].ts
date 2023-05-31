import { NextApiRequest, NextApiResponse } from "next"
import {conn} from 'src/utils/database';

export default async(req:NextApiRequest, res:NextApiResponse)=>{
    const {method, query, body} = req

    switch (method) {
        case "GET":
            try {
                const text = 'SELECT * FROM cotizaciones WHERE id = $1'
                const values =[query.id]
                const result = await conn.query(text, values)
    
                if(result.rows.length === 0)
                return res.status(404).json({message: "Cotizacion no encontrada"});
    
                return res.json(result.rows[0])
            } catch (error:any) {
                return res.status(500).json({message: error.message});
            }
        case "PUT":
            try {
                const {status} = body;
                const text = 'UPDATE cotizaciones SET status = $1 WHERE id = $2 RETURNING *'
                const values =[status, query.id]
                const result = await conn.query(text, values)
    
                if(result.rowCount === 0)
                return res.status(404).json({message: "Cotizacion no encontrada"});
    
                return res.json(result.rows[0])
            } catch (error:any) {
                return res.status(500).json({message: error.message});
            }
        case "DELETE":
            try {
                const text = 'DELETE FROM cotizaciones WHERE id = $1 RETURNING *'
                const values =[query.id]
                const result = await conn.query(text, values)
    
                if(result.rowCount === 0)
                return res.status(404).json({message: "Cotizacion no encontrada"});
    
                return res.json(result.rows[0])
            } catch (error:any) {
                return res.status(500).json({message: error.message});
            }
        default:
            return res.status(400).json("Metodo Invalido")
    }
    
}