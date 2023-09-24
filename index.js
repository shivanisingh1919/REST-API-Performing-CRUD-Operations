const express=require("express");

const coursesRouter = require("./routes/courses");
const bodyParser = require ('body-parser')

require ("dotenv").config()

const app= express();

const mongoose = require('mongoose');
// Replace your connection string and other configuration options as needed
const mongoDBUri = 'mongodb://127.0.0.1:27017/db1';


const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoDBUri, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(bodyParser.json())
app.use("/api/v1/courses",coursesRouter);

app.listen(process.env.PORT,()=>{
    console.log("server is running...");
});