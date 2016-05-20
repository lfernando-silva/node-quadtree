var fs = require('fs');
var readline = require('readline');
var datasourceDirectory = './dataparser/datasets/example/';

var DataParse = {
    readTTL: function (file){
        var read = readline.createInterface({
            input: fs.createReadStream(datasourceDirectory + file),
        });

        read.on('line', function (line) {
            return parse(line);
        });
    }
};

//Insere os dados relevantes da linha na árvore
function parse(line){
    var line = line.toString();
    if (contains(line, 'point')) {
        //Seleciona apenas as linhas no formato 
        //<http://dbpedia.org/resource/Algeria> <http://www.georss.org/georss/point> "36.7 3.216666666666667"
        split(line);
    }
    
}

//Verifica se a linha contém a string "point"
function contains(line,point){
    return line.indexOf(point) != -1; 
}

//Quebra uma linha em: URL, x e y
function split(line){
    
    var length = line.length;
    var posURL = [1, line.indexOf('> <')];
    var posPoint = [line.indexOf('point> '), length];
   
    var url = line.slice(posURL[0], posURL[1]);
    var point = (line.slice(posPoint[0], posPoint[1])).split(' ');
    
    var a = point;
    

    //var x = line.slice(posX[0], posX[1]);
    //var y = line.slice(line.indexOf(" "), length);

    //var point = {
    //    url: url,
    //    x: x,
    //    y: y
    //}

    console.log(point);
}

module.exports = DataParse;