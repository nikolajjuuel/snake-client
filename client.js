const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
    const conn = net.createConnection({
        host: IP,
        port: PORT
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    conn.on("data", (data) => {
        console.log('server says',data);
    })

    conn.on('connect', () => {
        console.log('connected to server');
        conn.write('Name: NJJ')

      });

    return conn;
};

module.exports = {
    connect,
}