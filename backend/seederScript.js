require('dotenv').config();

const productsData = require(`./data/products`)
const conectDb = require('./config/db')
const Product = require(`./models/Product`);


conectDb()

const importData = async () => {
    try {
        await Product.insertMany(productsData);
        console.log(`Salvo com sucesso`)
        process.exit();
    } catch (erro) {
        console.log(erro)
        process.exit(1);
    }
}

importData();