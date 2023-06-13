import { NextApiRequest, NextApiResponse } from "next";
import { conn } from 'src/utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.method, req.url);
    const { method, query, body } = req;
    
    const id = body // Obtener el ID de los parámetros de consulta

    /// ejemplo de llamada a la api con el paramatro de id en la url: http://localhost:3000/api/userdata?id=2

    switch (method) {
        case "GET":
            try {
                const text = 'SELECT * FROM cotizaciones WHERE id_user = $1';
                const values = [query.id];
                const result = await conn.query(text, values);
    
                console.log(result);

                return res.status(200).json(result.rows);

            } catch (error) {
                console.log(error);
            }
        default:
            return res.status(400).json("Método inválido");
    }
};