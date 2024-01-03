// External Dependencies
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path  = require('path');

// Internal Dependencies
const stuRoute = require("./routes/studentRoute");
const teaRoute = require("./routes/teacherRoute");
const connectDB = require("./connections/connect");

dotenv.config();
const PORT = process.env.PORT || 7410;

// application
const app = express();

// app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, './views'));

// Middlewares
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

app.use("/student", stuRoute);
app.use("/teacher", teaRoute);


const start = async() => {
    try {
      app.listen(PORT,()=>{
        console.log(`App listening on port ${PORT}!`);
      })
      connectDB()
    } catch (error) {
      console.log('EXCEPTION', error.message);
      
    }
  
}
start();

  