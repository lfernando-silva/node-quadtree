var QuadTree = require('../quadtree/QuadTree.js');

var Interface = {
    pointFormat: function (pointString) {
        
        var virgula = pointString.indexOf(',');
        var length = pointString.length;
        var strX = pointString.slice(0, virgula);
        var strY = pointString.slice(virgula, length).replace(',', '');
        var x = parseFloat(strX);
        var y = parseFloat(strY);
        
        if (checkInputValues(virgula, x, y)) {
            return {x: x, y: y}
        } else {
            console.log('Digite um número no formato especificado!\n****');
        }
    },

    busca: function (point,x,y){
        return QuadTree.busca(point,x,y);
    }
};

function checkInputValues(virgula, x, y) {
    return ((virgula != -1) && (!isNaN(x)) && !isNaN(y));
}

module.exports = Interface;