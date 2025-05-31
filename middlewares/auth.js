const { validateToken } = require("../services/auth")

const checkForAuthorization = async(req, res, next) => {
    const tokenCookie = req.cookies.token
    if(!tokenCookie){
        return next()           // we'll treat the user as a guest
    }
    user = validateToken(tokenCookie)
    req.user = user
    next()
}
module.exports = {checkForAuthorization}