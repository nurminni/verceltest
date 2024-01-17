export default function handler(req, res) {
    res.status(200).json({
        method: req.method,
        hello: "World!",
        env: process.env.FOO
    });
}
