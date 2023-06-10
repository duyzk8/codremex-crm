import { NextApiRequest, NextApiResponse } from "next";
import { conn } from 'src/utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.method, req.url);
    const { method, query } = req;
    
    const id = query.id as string; // Obtener el ID de los parámetros de consulta

    /// ejemplo de llamada a la api con el paramatro de id en la url: http://localhost:3000/api/userdata?id=2

    switch (method) {
        case "GET":
            try {
                const text = 'SELECT * FROM users WHERE id = $1';
                const values = [id];
                const result = await conn.query(text, values);
    
                if (result.rows.length === 0) {
                    return res.status(404).json({ message: "Usuario no encontrado" });
                }
    
                return res.json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({ message: error.message });
            }
        default:
            return res.status(400).json("Método inválido");
    }
};
