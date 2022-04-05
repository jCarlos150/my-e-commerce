const express = require("express")
const productRoutes = express.Router();


const { getProductsAll, getProductById } = require("../controller/productControllers");

// Get todos os podutos

productRoutes.get('/', getProductsAll);

productRoutes.get('/:id', getProductById);


module.exports = productRoutes;





// Get apenas um produto pelo id