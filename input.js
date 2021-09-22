
// setup interface to handle user input from stdin

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();

    stdin.on("data", handleUserInput);

    return stdin;
};

const handleUserInput = function (key) {
    // your code here
    if (key === '\u0003') {
        key = process.exit();
    }
    if (key === `\u0077`) {
        console.log('W pressed');
       // setInterval(() => {
            connection.write('Move: up');
     //   }, 100);
    }
    if (key === `\u0073`) {
        console.log('S pressed');
      //  setInterval(() => {
            connection.write('Move: down');
      //  }, 100);
    }
    if (key === `\u0061`) {
        console.log('A pressed');
      //  setInterval(() => {
            connection.write('Move: left');
       // }, 100);
    }
    if (key === `\u0064`) {
        console.log('D pressed');
   //     setInterval(() => {
    connection.write('Move: right');
    //      }, 100);
    }
    if (key === `\u0071`) {
        console.log('Q pressed');
   //     setInterval(() => {
    connection.write('Say: Ssss');
    //      }, 100);
    }
    if (key === `\u0072`) {
        console.log('Q pressed');
   //     setInterval(() => {
    connection.write('Say: beeeep');
    //      }, 100);
    }
    
    
};

let connection;

//console.log(handleUserInput);

module.exports = {
    setupInput
};