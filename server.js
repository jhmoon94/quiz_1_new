require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: true })); 
app.use('/',express.static('./public')); 

app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}...`);
});

app.get("/", (req,res) => {
    res.render("index")
})