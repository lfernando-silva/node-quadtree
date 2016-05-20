var readline = require('readline');
var Interface = require('./interface/Interface.js');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Digite os pontos no formato: X,Y ou digite END para encerrar ');
rl.prompt();

Interface.initDatasource();
//var QuadTree = require('./quadtree/QuadTree.js');
//var raiz = QuadTree.insere(null, 'Chicago', 35, 40);

//QuadTree.insere(raiz, "Chicago", 35.0, 40.0);
//QuadTree.insere(raiz, "Mobile", 50.0, 10.0);
//QuadTree.insere(raiz, "Toronto", 60.0, 75.0);
//QuadTree.insere(raiz, "Buffalo", 80.0, 65.0);
//QuadTree.insere(raiz, "Denver", 5.0, 45.0);
//QuadTree.insere(raiz, "Omaha", 25.0, 35.0);
//QuadTree.insere(raiz, "Miami", 90.0, 5.0);
//QuadTree.insere(raiz, "Atlanta", 85.0, 15.0);

rl.on('line', function (line) {
    if (line === "END") rl.close();
    var point = Interface.pointFormat(line);
    Interface.busca(raiz,point.x,point.y);
    
    rl.prompt();
});

rl.on('close', function () {
    process.exit(0);
});

