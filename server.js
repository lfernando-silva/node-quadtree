//Inicialização do Terminal
var readline = require('readline');
var Interface = require('./interface/Interface.js');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt(Interface.mensagemTerminal);
rl.prompt();

//Objeto que interage com a QuadTree/KD-Tree
Interface.initEnDatasource(); //Insere os nós da base "en"
Interface.initDeDatasource(); //Insere os nós da base "de" considerando as repetições em "en"

rl.on('line', function (line) {
    if (line === "END" || line === 'end') rl.close();
    var point = Interface.pointFormat(line);
    Interface.setEncontrado();
    if (point) {
        var raiz = Interface.getReferencia(); //Pega a referência para o nó raiz da estrutura
        Interface.busca(raiz, point.x, point.y);
        var encontrado = Interface.getEncontrado();
        if ( encontrado === null) {
            console.log("Não encontrado");
        } else {
            console.log(encontrado);
        }
    }
    rl.prompt();
});

rl.on('close', function () {
    process.exit(0);
});

