const mongoose = require('mongoose');

require('dotenv').config();

const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(console.log("DB connected"))
        .catch((error) => {
            console.log("DB Connection Issue");
            console.log(error);
            process.exit(1);
        })
}

module.exports = connectDb;