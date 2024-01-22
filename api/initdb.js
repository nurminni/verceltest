import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    try {
        await sql`CREATE TABLE IF NOT EXISTS orders (orderId serial, productId serial, quantity numeric);`;
        

        return res.status(200).json({ status: 'success' });
    } catch (error) {
        return res.status(500).json({ error });
    }
}