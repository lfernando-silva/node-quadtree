var QuadTree = require('../quadtree/QuadTree.js');
var DataParse = require('../dataparser/DataParse.js');
var mensagemTerminal = '\n*****\nDigite os pontos no formato: X,Y / X[ESPAÇO]Y ou digite END para encerrar.\n';
mensagemTerminal = mensagemTerminal + 'Se o ponto existir, sua URL será impressa na tela, caso contrário, nada acontece.\n';
mensagemTerminal = mensagemTerminal + ' (X,Y) = ';

var Interface = {
    
    getReferencia: getReferencia,
    mensagemTerminal: mensagemTerminal,
    getEncontrado: getEncontrado,
    setEncontrado: setEncontrado,
    
    pointFormat: function (pointString) {
        var virgula = pointString.indexOf(',');
        var espaco = pointString.indexOf(' ');
        var divisor = checkDivisor(virgula, espaco);
        var length = pointString.length;
        var strX = pointString.slice(0, divisor);
        var strY = pointString.slice(divisor, length).replace(',', '');
        var x = parseFloat(strX);
        var y = parseFloat(strY);
        
        if (checkInputValues(divisor, x, y)) {
            
            return { x: x, y: y }
        } else {
            console.log('Digite um número no formato especificado!\n****************\n');
            return false;
        }
    },
    
    busca: function (point, x, y) {
        QuadTree.busca(point, x, y);
    },
    
    initEnDatasource: function () {
        return DataParse.readTTL('geo_coordinates_mappingbased_en.ttl');
    },

    initDeDatasource: function () {
        return DataParse.readTTL('geo_coordinates_mappingbased_de.ttl');
    }
};

//Verifica se o usuário separou os pontos por , ou [espaço]
function checkDivisor(virgula, espaco) {
    if (espaco == -1) {
        return virgula;
    }
    return espaco;
}

//Verifica se a entrada é válida
function checkInputValues(virgula, x, y) {
    return ((virgula != -1) && (!isNaN(x)) && !isNaN(y));
}

//Obtém a referência para a raiz da árvore
function getReferencia() {
    return QuadTree.raiz;
}

function getEncontrado(){
    return QuadTree.encontrado;
}

function setEncontrado(){
    QuadTree.encontrado = null;
}

module.exports = Interface;