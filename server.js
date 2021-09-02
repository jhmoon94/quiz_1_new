require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: true })); 
app.use('/',express.static('./public')); 
app.use(cookieParser());

app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}...`);
});

app.get("/", (req,res) => {
    res.render("index")
})
app.use((request, response, next) => { 
    const username = request.cookies.username;
    console.log(request.cookies);
  
    response.locals.username = null;
  
    if (username) {
      response.locals.username = username;
    }
    next();
  });