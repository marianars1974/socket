const {io} =require('../server');
// conecciones de suarios    - on escuchar.
io.on('connection',(client)=>{console.log('usuario conectado');
    //enviar al usaurio
    client.emit('enviarMensaje',{
        usuario: 'admin',
        mensaje: 'hola usuario'
    });

    client.on('disconnect',()=>{
        console.log('usuario desconectado');
    })
    //escuchar cliente
    //se escuha x nombre de mensaje y recibe el mensaje y la funcion de callback (que se ejecuta en clietne)
    client.on('enviarMensaje',(data,callback)=>{
        //console.log(data);

        client.emit('enviarMensaje',data); //se lo manda al mismo usuario

        client.broadcast.emit('enviarMensaje',data); //a todos los usuarios conectados al servidor


        // if(msg.usuario)
        // {
        //     callback({
        //         rta: "todo ok"
        //     });  
        // }
        // else
        // {
        //     callback({
        //         rta: "todo mal"
        //     });  
        // } 
    });

});