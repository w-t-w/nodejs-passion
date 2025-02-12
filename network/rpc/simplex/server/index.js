const net = require('net');

const PORT = 3000;

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log(data.toString().trim());
    });
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
