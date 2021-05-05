const express = require('express');
const app = express(); // Instance of the app, server

const axios = require('axios');


// Home route
app.get('/', function(req, res){
    // access a databaseif needed
    // make some logic based on what is inside request
    // access an API and return data
    // send resposne at the end
    res.send('Hello, World!')
});



app.get('/rockets', (req,res) => {
    axios.get('https://api.spacexdata.com/v3/rockets')
    .then(response =>{
        console.log(response.data)
        res.json(response.data)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/greet/:name', (req, res) => {
    console.log(req.params); // req.params (object)
    res.send(`Hello ${req.params.name}`)
});

app.get('/github/:username', (req, res) => {
    const { username } = req.params; // destructuring
    axios.get(`https://api.github.com/users/${username}`)
    .then(response=>{
        console.log(response.data);
        res.json(response.data);
    })
})


// app.get('/sei', (req, res) => {
//     res.send('SEI 412')
// });

// needs to be last route or else it will intercept another route
app.get('/*', (req, res) => {
    console.log(req.params)
    res.send('404 Error')
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} 😎`)
});
