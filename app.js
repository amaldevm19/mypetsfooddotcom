var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs  = require('express-handlebars');
var helpers = require('handlebars-helpers')();
var cors = require('cors');
var session = require('express-session');
var flash = require('express-flash-messages')

var home_router = require('./routes/home_routes');
var users_router = require('./routes/users_routes');
var products_router = require('./routes/products_routes');
var brands_router = require('./routes/brands_routes');
var pets_router = require('./routes/pets_routes');
var categories_router = require('./routes/categories_routes');
var header_data = require('./middleware/header_middleware');
var user_middleware = require('./middleware/users_middleware');

var app = express();

// view engine setup
app.engine('.hbs', exphbs({extname: '.hbs', helpers }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 30000
  }
}));
app.use(flash());

app.use('*', header_data);
app.use('/', home_router);
app.use('/users', users_router);
app.use('/products',user_middleware.session_data, products_router);
app.use('/brands',user_middleware.session_data, brands_router);
app.use('/pets',user_middleware.session_data, pets_router);
app.use('/categories',user_middleware.session_data, categories_router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
