const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testDB', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
