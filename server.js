// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const productroutes = require('./routes');

// Initialize Express app & middleware
const app = express();
app.use(express.json());
const mongoUri = 'mongodb://localhost:27017/productdb'

const PORT = 3000

//mongodb connection
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log('connected to mongoDb'))
  .catch((err => console.error('mongoDB connection error', err)));

  //use product routes

  app.use('/', productroutes);

//PORT LISTEN

app.listen(PORT, ()=> {
  console.log(`server is running at http://localhost:${PORT}`);
})


// Export the app for testing purposes
module.exports = app; 