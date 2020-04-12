var socket = io(); // es una funcion del js importado
        //on escuchar sucesos
socket.on('connect',function(){
    console.log('conectado al servidor'); // para establecer que la peticion se conecto
});
socket.on('disconnect',function(){
    console.log('desconexion del servidor'); // para establecer que la peticion se conecto
})
//emit enviar/emitir informacion
//parametros nombre mensaje, mensaje, callbacks
socket.emit('enviarMensaje',{
    usuario: 'Mariana',
    mensaje: 'hola mundo'
},function(resp){
    console.log('se disparo callback - rta', resp);
});
//escuchar
socket.on('enviarMensaje',function(msg){
        console.log('escucha al servidor',msg);

});