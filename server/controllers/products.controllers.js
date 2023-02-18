const {Product} = require('../model/products.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (req, res) =>{
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(error => res.json(error))
}

module.exports.findProduct = (req, res) =>{
    Product.find()
    .then(todosLosProductos => res.json({products: todosLosProductos}))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}