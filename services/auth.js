const jwt = require("jsonwebtoken")
const secret = "#$%987%"

const createToken = (user) => {
    const { _id, email, password, role, name } = user
    const payload = {
        _id,
        email,
        password, 
        role, 
        name
    }
    return jwt.sign(payload, secret)
}

const validateToken = (token) => {
    return jwt.verify(token, secret)
}

module.exports = {createToken, validateToken}
