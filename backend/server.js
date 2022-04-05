require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

// conexão com o banco
connectDB();

// iniciar o servidor
const app = express();

// habilitar o json
app.use(express.json());

app.use("/api/products", productRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))