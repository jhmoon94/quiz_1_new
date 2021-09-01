require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override');

app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: true })); 
app.use('/',express.static('./public')); 
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}...`);
});

