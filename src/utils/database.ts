import { Pool } from 'pg'

let conn: any

if(!conn) {

    conn = new Pool({
        user: 'zgbvllsd',
        password: '7lEJcKMnwXae9YVoMbOULatR9Zm7kaPF',
        host: 'mahmud.db.elephantsql.com',
        port: 5432,
        database: 'zgbvllsd' 
    });
}

export { conn }