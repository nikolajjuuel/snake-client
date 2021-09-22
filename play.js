const net = require("net");

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

        setInterval(() => {
            conn.write('Move: left')
        }, 100);

      });


// setup interface to handle user input from stdin

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();

    stdin.on("data", handleUserInput);

    return stdin;
  };


  const handleUserInput = function (data) {
    // your code here
    if (key === '\u0003') {
       data = process.exit();
      }
  };



    return conn;
};

console.log("Connecting ...");
connect();
module.exports = connect;
