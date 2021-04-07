const client = require('../redis')

const userDetails = (req, res) => {
  let { userName, winning, loose } = req.body
  winning = winning || 0;
  loose = loose || 0;
  client.hmset(userName, {
    'win': winning,
    'loose': loose
  }, (error, reply) => {
    if (error) res.status(400).send("error :", error)
    else {
      client.hgetall(userName, (e, obj) => {
        res.status(200).send(obj)
      })
    }
  })
}

module.exports = userDetails;