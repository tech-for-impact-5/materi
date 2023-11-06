const jwt = require("jsonwebtoken")

const KEY = "oljhcsaouhbgoq"

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization

  if (!header) {
    res.json({
      message: "undefined header"
    })
    return
  }

  const token = header.split(" ")[1]
  // const token = header

  if (!token) {
    res.json({
      message: "invalid token"
    })
    return
  }

  const payload = jwt.verify(token, KEY)

  req.payload = payload

  next()
}

module.exports = verifyToken