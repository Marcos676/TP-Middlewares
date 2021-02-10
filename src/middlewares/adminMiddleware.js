const usuarios = ['Ada','Greta', 'Vim', 'Tim']

module.exports = (req, res, next) => {
    const serch = req.query.user
    if(usuarios.includes(serch)){
        req.user = serch
        return next()
    } else {
       return res.render('admin', {
            title: 'No tienes los privilegios para ingresar'
        })
    }
}