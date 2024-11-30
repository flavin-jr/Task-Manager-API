const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://flaviojcvj:${process.env.DB_PASSWORD}@taksmanager.wzyaw.mongodb.net/?retryWrites=true&w=majority&appName=TaksManager&ssl=true`);
        console.log("Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
};

module.exports = connectToDatabase;