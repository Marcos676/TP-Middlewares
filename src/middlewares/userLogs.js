const fs = require('fs')

module.exports = (req, res, next) => {
    fs.appendFileSync('logs/userLogs.txt', `El usuario ingresó a la ruta: ${req.url} \n`);
    next()
}