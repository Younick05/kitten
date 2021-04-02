const client = require('../redis')
const express = require('express')
const router = express.Router();

router.post('/user', (req, res) => {
  let id = req.body.id
  let name = 'nikhil'
  client.hmset(id, ['name', name], (error, reply) => {
    if (error) res.send("getting while post :", error)
    else {
      client.hgetall(id, (e, obj) => {
        res.send(obj)
      })
    }
  })
})

module.exports = router;