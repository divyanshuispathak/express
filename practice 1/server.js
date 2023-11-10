const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');

app.listen(3000, () => {
    console.log('Server started at port no. 3000');
})

app.get('/', (req, res) => {
    res.send("Hello from the server");
})

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);

    console.log("Car submitted successfully");
})


mongoose.connect('mongodb://localhost:27017/myDatabase').then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log("Error Occured");
})