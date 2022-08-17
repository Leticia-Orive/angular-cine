const express = require('express');
const morgan = require('morgan');
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

// Global variable

// Routes
app.use(require('./routes/index'))
// Public

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})
