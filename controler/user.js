const client = require('../redis')

const userDetails = (req, res) => {
  console.log("why worry", req.body)
  let { userName, win, loose } = req.body
  win = win || 0;
  loose = loose || 0;
  client.hset(userName, {
    'win': win,
    'loose': loose
  }, (error, reply) => {
    console.log("reply chahiye", reply)
    if (error) res.status(400).send("error :>", error)
    else {
      client.hgetall(userName, (e, obj) => {
        console.log(obj)
        res.status(200).send(obj)
      })
    }
  })
}

module.exports = userDetails;