const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    // server.send(msg+rinfo.port,rinfo.port,'239.255.255.250',function(){
    //     console.log('message returned')
    //
    // })
});

server.on('listening', () => {
    server.addMembership('239.255.255.250')
    const address = server.address();
console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41235);

// server listening 0.0.0.0:41234//
