export default function question(req, res) {
  if (req.method === 'GET') {
    const id = req.query.id
    res.status(200).json({
      id,
      statement: 'Whats is your favorite color?',
      answers: ['white', 'red', 'yellow', 'green'],
    })
  } else {
    res.status(405).send()
  }
}
