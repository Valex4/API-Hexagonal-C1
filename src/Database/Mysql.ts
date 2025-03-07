import { createPool, Pool } from 'mysql2/promise';

let pool: Pool;

export async function connect() {
    pool = createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        // ... otras opciones si las tienes
    });
}

export async function query(sql: string, params?: any[]): Promise<any> {
    if (!pool) await connect();
    try {
        if (params) {
            const [rows] = await pool.execute(sql, params);
            return rows;
        } else {
            const [rows] = await pool.query(sql);
            return rows;
        }
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}

export async function getConnection() {
    if (!pool) await connect();
    return pool.getConnection();
}