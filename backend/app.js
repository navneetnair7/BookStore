const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes/bookRoutes')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/books', Router)

mongoose
.connect('mongodb+srv://navneet1:navneet123@cluster0.mw4x5vp.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("Mongoose connected"))
.then(() => {
    app.listen(5000)
})
.catch(err => console.log(err))