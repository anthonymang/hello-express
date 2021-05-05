const express = require('express');

const app = express(); // Instance of the app, server

// Home route
app.get('/', function(req, res){
    // access a databaseif needed
    // make some logic based on what is inside request
    // access an API and return data
    // send resposne at the end
    res.send('Hello, World!')
});

app.get('/sei', (req, res) => {
    res.send('SEI 412')
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} 😎`)
});
