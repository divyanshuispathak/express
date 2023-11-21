const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const blog = require('./routes/blog');
app.use("/api/v1", blog);

const connectDb = require('./config/database');
connectDb();

app.listen(PORT, () => {
    console.log(`App is started at ${PORT} port`);
})

app.get("/", (req, res) => {
    res.send(`This is my Homepage`);
})