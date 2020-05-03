const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');


const ticketControl = new TicketControl()



io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {

        let sigueinte = ticketControl.siguiente();

        console.log(sigueinte);
        callback(sigueinte);
    });

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });
    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'escritorio es necesario'
            });
        }
        let atenderTicket = ticketControl.atenderTicker(data.escritorio);
        callback(atenderTicket);
        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimos4()
        })
    })



});