var No = require('./No.js');

var QuadTree = {
    
    raiz: null,
    encontrado: null,
    getQuadrante: function (raiz, x, y){
        if (raiz.x < x) {
            if (raiz.y < y) {
                return 3; //SW
            } else {
                return 0; //NW
            }
        } else {
            if (raiz.y > y) return 2; //SE
            return 1;//NE
        }
    },

    insere: function (raiz,url,x,y){
        if (!raiz) return new No(url,x,y);
        
        var quadrante = QuadTree.getQuadrante(raiz, x, y);
        raiz.filhos[quadrante] = QuadTree.insere(raiz.filhos[quadrante], url, x, y);

        return raiz;
    },
    
    busca: function (raiz, x, y){
        if (raiz) {
            if ((raiz.x == x) && (raiz.y == y)) {
                QuadTree.encontrado = 'URL: ' + raiz.url;              
            }
            var quadrante = QuadTree.getQuadrante(raiz, x, y);
            raiz.filhos[quadrante] = QuadTree.busca(raiz.filhos[quadrante], x, y);
        } 
        return raiz;
    },

    imprime: function (raiz){
        console.log('%j', raiz);
    }
};

module.exports = QuadTree;