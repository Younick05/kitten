const client = require('../redis')

const authentication = (req, res, next) => {
  console.log("req bro", req.body)
  const {userName, win, loose} = req.body
  client.exists(userName, function (err, reply) {
    console.log("value of reply", reply)
    if (reply === 0) {
      next()
    } else {
      client.hgetall(userName, (e, obj) => {
        console.log("obj here", obj)
        if(e) return res.status(400).send(e)
        if(parseInt(obj.win) < parseInt(win)) {
          client.hincrby(userName, "win", 1, (err, resp) => {
            if(err) return res.send("didn't increased")
            console.log("inc win", resp)
            client.hgetall(userName, (e, objj) => {console.log("increased ob 1",objj)})
            res.send()
          })
        }
        if(parseInt(obj.loose) < parseInt(loose)) {
          client.hincrby(userName, "loose", 1, (err, resp) => {
            if(err) return res.send("didn't increased")
            client.hgetall(userName, (e, objj) => {console.log("increased ob 2",objj)})
            console.log("inc loose", resp)
            return res.send(resp)
          })
        }
        res.status(200).send(obj)
      })
    }
  });
}

module.exports = authentication;