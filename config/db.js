const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bloomflow_db', {
            serverSelectionTimeoutMS: 5000 // 5s timeout
        });

        console.log(`✅ [MongoDB Connected]: Host -> ${conn.connection.host} | DB -> ${conn.connection.name}`);
        return true;
    } catch (error) {
        console.error(`❌ [MongoDB Connection Error]: ${error.message}`);
        console.warn(`⚠️ Tip: Ensure MongoDB is running locally (mongod service) or set a valid MONGO_URI in .env`);
        // We won't exit process so the server still serves frontend and gives helpful status to the client
        return false;
    }
};

module.exports = connectDB;
