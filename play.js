const net = require("net");
const  {setupInput} = require("./input");

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: '135.23.223.133',
        port: '50542'
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    conn.on("data", (data) => {
        console.log('server says',data);
    })

    conn.on('connect', () => {
        console.log('connected to server');
        conn.write('Name: SUP')

      });

    return conn;
};
setupInput(connect());

//console.log(setupInput);

console.log("Connecting ...");
//connect();
module.exports = connect;
