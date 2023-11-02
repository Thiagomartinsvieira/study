const method = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({
      name: 'Thiago',
    })
  } else {
    res.status(200).json({ name: 'Sisleide' })
  }
}

export default method
