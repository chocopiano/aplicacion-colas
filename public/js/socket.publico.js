var socket = io();
var lblTciket2 = $('#lblTicket2');
var lblTciket1 = $('#lblTicket1');
var lblTciket3 = $('#lblTicket3');
var lblTciket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTciket1, lblTciket2, lblTciket3, lblTciket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', (data) => {
    console.log(data);
    actualizaHTML(data.ultimos4);
});
socket.on('ultimos4', (data) => {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        lblTickets[i].text('Tciket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio)
    }
}