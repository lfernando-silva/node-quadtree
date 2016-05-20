var No = require('./No.js');

var QuadTree = {
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

    insere: function (raiz,valor,x,y){
        
        if (!raiz) return new No(valor,x,y);
        
        var quadrante = QuadTree.getQuadrante(raiz, x, y);
        raiz.filhos[quadrante] = QuadTree.insere(raiz.filhos[quadrante], valor, x, y);

        return raiz;
    },
    
    busca: function (raiz, x, y){
        if ((raiz.x == x) && (raiz.y == y)) {
            console.log('URL: %j', raiz.valor);
            return true;
        }

        var quadrante = QuadTree.getQuadrante(raiz, x, y);
        raiz.filhos[quadrante] = QuadTree.busca(raiz.filhos[quadrante],x, y);
    },

    imprime: function (raiz){
        console.log('%j', raiz);
    }
};

module.exports = QuadTree;