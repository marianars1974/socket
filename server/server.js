const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app); //crear el servidor x http pero le aplica lo qeu se configura por expres

const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //habilitar la carptetapublica

//IO mantiene conexion directa del back end
module.exports.io = socketIO(server); 

require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
