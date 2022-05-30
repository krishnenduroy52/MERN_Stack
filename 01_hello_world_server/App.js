// Step 1: npm init -y
// Step 2: npm i express
// Step 3: Create App.js


//Express
const express = require('express');
const app = express();

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
})