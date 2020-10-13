const express = require('express');
const api = require('../modules/api/dist/app');
const http = require('http');
const path = require('path');

// Get port from environment
let port = normalizePort(process.env.PORT || '8080');
// Get bind address.
let host = process.env.IP || '0.0.0.0';

let app = express();
// use static content
app.use(express.static(path.resolve(process.cwd(), 'dist/ticket-voting')));
// use api
app.use(api);

// Create HTTP server.
// noinspection JSUnresolvedFunction
let server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, host);
server.on('error', onError);
server.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}

// Event listener for HTTP server "error" event.
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            // eslint-disable-next-line no-console
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            // eslint-disable-next-line no-console
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Event listener for HTTP server "listening" event.
function onListening() {
    let addr = server.address();
    // eslint-disable-next-line no-console
    console.log(new Date().toUTCString(), '[INFO]', 'Listening on ' + addr.address + ':' + addr.port);
}
// nodemon quit event
process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
});
