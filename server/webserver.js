
const io = require('socket.io')();

var toilets = {
    toilet0: 0,
    toilet1: 0,
    toilet2: 0,
    toilet3: 0,
    toilet4: 0,
    toilet5: 0,
    toilet6: 0,
    toilet7: 0,
    toilet8: 0,
    toilet9: 0,
    toilet10: 0,
    toilet11: 0
};

var newToilets = {
    toilet0: 0,
    toilet1: 2,
    toilet2: 1,
    toilet3: 1,
    toilet4: 0,
    toilet5: 0,
    toilet6: 0,
    toilet7: 0,
    toilet8: 1,
    toilet9: 0,
    toilet10: 1,
    toilet11: 0
};

io.on('connection', (client) => {
    console.log('New client ', client.handshake.headers.origin, ' connected to server!');

    client.on('hi', () => {
        console.log('client said hi, how nice, I will respond back');
        client.emit('hi back', 'hello back to you');
    });

    client.on('getCurrentState', () => {
        console.log('Sending back the current state');
        client.emit('currentState', toilets);
    });

    client.on('subscribeToChanges', () => {
        console.log('Subscribing client to toilet changes');

        // This part is just for testing purposes
        setInterval(() => {
            console.log('Change Happened!')
            for (var key in newToilets) {
                newToilets[key] = Math.floor(Math.random() * Math.floor(3))
            }
            client.emit('newState', newToilets);
        },2000);


        // TODO: Track changes and if changed, emit new state:
        // client.emit('newState', newToilets);
    });
});


const port = 8000;
io.listen(port);
console.log('Listening on port: ', port);