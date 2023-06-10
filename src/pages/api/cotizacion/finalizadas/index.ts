import { NextApiRequest, NextApiResponse } from "next"
import { conn } from 'src/utils/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.method, req.url);
    const { method, body, } = req;


    switch (method) {
        case "GET":
            try {

                const query = "SELECT * FROM cotizaciones_finalizadas"
                const response = await conn.query(query)
                console.log(response);

                return res.status(200).json(response.rows);

            } catch (error) {
                console.log(error);
            }
        case "POST":
            try {
                const { productos, id_user } = body;
                const query = "INSERT INTO cotizaciones_finalizadas(id_user, productos) VALUES ($1, $2) RETURNING *";
                const values = [id_user, productos];
                const response = await conn.query(query, values)
                console.log(response)

                return res.status(200).json(response.rows[0]);
            } catch (error) {
                console.log(error)
            }

        default:
            return res.status(400).json("Metodo invalido");

    }
};