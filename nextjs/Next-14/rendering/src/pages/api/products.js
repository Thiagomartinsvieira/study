// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function randomNumber(min = 1, max = 1000) {
  return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    {id: randomNumber(), name: 'Pen', price: 5.60},
    {id: randomNumber(), name: 'Glass', price: 10.80},
    {id: randomNumber(), name: 'Mouse', price: 20.40},
    {id: randomNumber(), name: 'Headset', price: 50.90},
  ])
}
