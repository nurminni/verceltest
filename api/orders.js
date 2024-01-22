import { sql } from '@vercel/postgres';

export default async function handler(req, res) {

    if (req.method == "POST") {
        const { orderId, 
            productId,
            quantity } = req.body;
        await sql`
            INSERT INTO orders (
                orderId, 
                productId,
                quantity
                ) VALUES ( 
                    ${orderId}, ${productId}, ${quantity}
                    );`;

        res.status(200).json({status: "created new order"})
    }

    const { rows } = await sql`SELECT * FROM orders`;

    res.status(200).json({
        method: req.method,
        hello: "World!",
        env: process.env.FOO,
        orders: rows
    });
}
