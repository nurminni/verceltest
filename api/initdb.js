import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    try {
        await sql`CREATE TABLE IF NOT EXISTS pets (id serial, name varchar);`;
        await sql`ALTER TABLE pets ADD COLUMN IF NOT EXISTS species varchar;`;
        await sql`ALTER TABLE pets ADD COLUMN IF NOT EXISTS age numeric;`;

        return res.status(200).json({ status: 'success' });
    } catch (error) {
        return res.status(500).json({ error });
    }
}