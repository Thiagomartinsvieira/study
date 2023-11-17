export default function handler(req, res) {
    const id = +req.query.id
    res.status(200).json({
        id,
        name: `Thiago Martins ${id}`,
        email: `thiago${id}@email.com`
    })
}