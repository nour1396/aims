const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('userToken');
    if (token && token != null && token != undefined) {
        jwt.verify(token, 'Roots', (err, decoded) => {
            if (err) {
                res.json(err)
            } else {
                next(token)
            }
        })
    } else {
        res.json('No Token Provided ')
    }
}