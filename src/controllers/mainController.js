

module.exports = {
    index: (req,res)=> {
        res.render('index', {
            title: 'Home'
        })
    },
    nosotros: (req,res)=> {
        res.render('nosotros', {
            title: 'Nosotros'
        })
    },
    contactos: (req,res)=> {
        res.render('contactos', {
            title: 'Contactos'
        })
    },
    faqs: (req,res)=> {
        res.render('faqs', {
            title: 'Preguntas frecuentes'
        })
    },
    admin:(req,res)=> {
        res.render('ingresar', {
            title: 'admin'
        })
    },
    processAdmin:(req, res, next) => {
        res.render('admin', {title: `Hola Admin: ${req.user}`})
    }
}