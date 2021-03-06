var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('el escritorio es necesario');
}



var escritorio = searchParams.get('escritorio');
var label = $('small');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);
$('button').on('click', () => {
    socket.emit('atenderTicket', { escritorio: escritorio }, (resp) => {
        console.log(resp);
        if (resp === 'No hay tickets') {
            label.text('No hay más Ticket ')
            alert(resp);
            return
        }
        label.text('Ticket ' + resp.numero)
    });
});