const mongoose = require('mongoose');
require('dotenv').config();


exports.connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;
        if (!MONGO_URI) {
            console.error('Missing MONGO_URI environment variable.');
            process.exit(1);
        }
        await mongoose.connect(MONGO_URI);

        console.log('Database connected successfully');

    } catch (err) {
        console.log(`Error while connecting server with Database`);
        console.log(err.message);
        process.exit(1);
    }
};

