const express = require('express');
const app = express();
const path = require('path');


const mongoose = require('mongoose');


mongoose.connect
('mongodb://127.0.0.1:27017/androidApi',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true

});

const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/api', userRoutes);


app.listen(1000);