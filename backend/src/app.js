const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require("./routes/UserRoute");

const app = express();
const port = 7000;

//middleware for crosssite origin
app.use(cors());

//configuring dotenv
dotenv.config();


const DB_CONNECT=
"mongodb+srv://anshusingh0284087:cS0hgIskzVwHr5j2@cluster0.kdnquwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 mongoose
.connect( DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser:true })
.then(()=>console.log("Database Connected "))
.catch((err)=>console.error('Database connection error:',err));

//middleware so it can read json files
app.use(express.json());


//Routes
app.use('/api/user',User);

//litening for requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

