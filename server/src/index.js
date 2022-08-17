const express = require('express');
const morgan = require('morgan');
const { dirname } = require('path');
const expressbs = require(express.handlebars);
const path = require('path');
//initializations
const app = express();

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views', 'layouts')),
    partialsDir: path.join(app.get('views', 'partials')),
    extname: '.hbs',
    helpers: require('./lib/handlebars'),
}))
//funciona 
app.set('view engine', 'hbs'),

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //aceptar formularios
app.use(express.json());

// Global variable
app.use( req, res, next), () =>{
    next();
}

// Routes
app.use(require('./routes/index')),
app.use(require('./routes/authentication')),
app.use('/links',require('./routes/links'))
// Public
app.use(express.static(path.join(dirname, 'public')))
// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

