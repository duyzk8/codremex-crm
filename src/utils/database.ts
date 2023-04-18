import { Pool } from 'pg'

let conn: any

if(!conn) {

    conn = new Pool({
        user: 'postgres',
        password: 'o2uv4K5ERqSDPUu1FVXA',
        host: 'containers-us-west-11.railway.app',
        port: 5887,
        database: 'railway' 
    });
}

export { conn }