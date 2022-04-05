const Product = require('../models/Product')

const getProductsAll = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products);

    } catch (error) {
        console.error("Erro ao buscar os produtos");
        res.status(500).json({ message: "Server error" })
    }

}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product);
    } catch (error) {
        console.error("Erro ao busca o produto")
        res.status(500).json({ message: "error ao se connectar" })
    }
}

module.exports = {
    getProductsAll,
    getProductById
}