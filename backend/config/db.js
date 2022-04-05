const mongoose = require("mongoose")

mongoose.Promise = global.Promise
const conectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost/produtos",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true

            }

        );
        console.log("Conectado ao banco com sucesso")
    } catch (error) {
        console.log(erro)
        process.exit(1);
    }

}

module.exports = conectDb;