const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes/bookRoutes')
const categoryRouter = require('./routes/categoryRoutes')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/books', Router)
app.use('/categories', categoryRouter)

mongoose
.connect('mongodb+srv://navneet:navneet123@cluster0.msofnaj.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("Mongoose connected"))
.then(() => {
    app.listen(5000)
})
.catch(err => console.log(err))