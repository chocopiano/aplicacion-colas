// Comando para establecer comunicacion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('conectado al servidor');
});


socket.on('disconnect', () => {
    console.log('desconectado del servidor');
});

socket.on('estadoActual', (resp) => {
    label.text(resp.actual)
})

$('button').on('click', () => {

    socket.emit('siguienteTicket', null, (siguienteTicket) => {

        label.text(siguienteTicket)


    });

});