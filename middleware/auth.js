const client = require('../redis')

const authentication = (req, res, next) => {
  console.log("req bro", req.body)
  const {userName} = req.body
  client.exists(userName, function (err, reply) {
    if (reply === 0) {
      next()
    } else res.status(401)
  });
}

module.exports = authentication;