const express = require('express')

const app = express()

const port = 3000; // You can change your port value

// base route
app.get('/', (req, res) => {
    res.send("Hello world!")
})

// /health test route
app.get('/health', (req, res) => {
    res.send("Welcome to health route")
})

// create the server
app.listen(port, () => {
    console.log(`This server is listening to port ${port}`);
})