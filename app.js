var createError = require('http-errors');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

const express = require('express');
const app = express();
const port = 3030;
const path = require('path');


app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* RUTAS */
/* app.use('/', indexRouter);
app.use('/users', usersRouter); */
app.get('/',(req,res)=> res.sendFile(path.resolve(__dirname,'views','index.html')))
app.get('/contact',(req,res)=> res.sendFile(path.resolve(__dirname,'views','contact.html')))
app.get('/about',(req,res)=> res.sendFile(path.resolve(__dirname,'views','about.html')))
app.get('/music',(req,res)=> res.sendFile(path.resolve(__dirname,'views','music.html')))
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
