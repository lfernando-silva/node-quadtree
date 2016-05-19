var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Digite os pontos no formato: X,Y ou digite END para encerrar ');
rl.prompt();

rl.on('line', function (line) {
    if (line === "END") rl.close();
    //LOGIC HERE
    rl.prompt();
});

rl.on('close', function () {
    process.exit(0);
});