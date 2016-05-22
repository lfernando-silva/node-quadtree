var fs = require('fs');
var readline = require('readline');
var datasourceDirectory = './dataparser/datasets/';
var QuadTree = require('../quadtree/QuadTree.js');

var raiz = null;

var DataParse = {
    readTTL: function (file){
        var read = readline.createInterface({
            input: fs.createReadStream(datasourceDirectory + file),
        });
        read.on('line', function (line) {
            var a = read;
            if (line) parse(line);
        });
    }
};

//Insere os dados relevantes da linha na árvore
function parse(line){
    var line = line.toString();
    if (contains(line, 'point')) {
        //Seleciona apenas as linhas no formato 
        //<http://dbpedia.org/resource/Algeria> <http://www.georss.org/georss/point> "36.7 3.216666666666667"
        var data = split(line);
        if (!raiz) {
            raiz = QuadTree.insere(null, data.url, data.x, data.y);
            QuadTree.raiz = raiz;
        } else {
            setEncontrado();
            QuadTree.busca(raiz, data.x, data.y);
            var encontrado = getEncontrado();
            if (encontrado === null) { //Se ele não encontrou, então insere na QuadTree
                QuadTree.insere(raiz, data.url, data.x, data.y);
            } 
        }
    }
}

//Verifica se a linha contém a string "point"
function contains(line,point){
    return line.indexOf(point) != -1; 
}

//Quebra uma linha em: URL, x e y
function split(line){
    line = line.replace(' <http://www.georss.org/georss/point> ','').replace('"','');
    var length = line.length;
    var posURL = [1, line.indexOf('>')];
    var posPoint = [line.indexOf('>')+1, length-2];
   
    var url = line.slice(posURL[0], posURL[1]);
    var point = line.slice(posPoint[0], posPoint[1]);
    point = point.split(' ');
    
    var x = parseFloat(point[0]);
    var y = parseFloat(point[1]);
    
    return {
        url: url,
        x: x,
        y: y
    };
}

//Retorna o último ponto encontrado
function getEncontrado() {
    return QuadTree.encontrado;
}

//Inicializa o último ponto encontrado = null, sendo que null é quando o nó não foi encontrado.
function setEncontrado() {
    QuadTree.encontrado = null;
}

module.exports = DataParse;