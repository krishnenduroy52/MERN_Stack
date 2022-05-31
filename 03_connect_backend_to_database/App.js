// Step 1: npm init -y
// Step 2: npm i express
// Step 3: Create App.js

// Mongoose 

const mongoose = require('mongoose');

//Express
const express = require('express');
const app = express();

// Database
const DB = 'mongodb+srv://<username>:<password>@cluster0.qz4sg1h.mongodb.net/<database_name>?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log(`Connection successful`);
}).catch((err) => console.log(`err`));


// Middleware
const middleware = (req, res, next) =>{
    console.log(`Hello there, i am middleware`);
    next();
}

// Create route
// app.get(path, callback)
app.get('/', (req, res) =>{
    res.send(`Hello there, I am krishnendu roy`);
});

app.get('/about', middleware, (req, res) =>{
    res.send(`Hello there, What you want to know about krishnendu?`);
});

app.get('/contact', (req, res) =>{
    res.send(`Hello there, Why you want to contact krishnendu?`);
});



// Listen port
app.listen(3000, ()=>{
    console.log(`Server is running`);
});

//Krishnendu roy