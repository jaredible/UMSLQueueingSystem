const express = require('express');
const engine = require('ejs-locals');
const path = require('path');
const process = require('process');

const app = express();
const server = require('http').Server(app);

const PORT = process.env.port || 5000;
const HOST = process.env.host || 'localhost';
const ENV = app.get('env');

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

// TODO
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// TODO
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            status: err.status,
            message: err.message,
            error: err
        });
    });
}

// TODO
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        status: err.status,
        message: err.message,
        error: {}
    });
});

server.listen(PORT, HOST, () => {
  console.log(`${ENV.charAt(0).toUpperCase() + ENV.substring(1)} app listening at http://${server.address().address}:${server.address().port}`);
});
