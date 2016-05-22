# Node-QuadTree
Aluno: Luiz Fernando da Silva
Programa de Pós Graduação em Ciência da Computação - Universidade Federal de Juiz de Fora
Turma: 2016/1

-------------------------
Implementação de QuadTree com NodeJS

Observações

- Como o NodeJS se comporta de maneira não-bloqueante, as operações de inserção dos pontos e leitura do arquivo
ocorrem de forma "quase-paralela", o que implica que o sistema não fica travado enquanto os nós são inseridos.

- Com isso, a plataforma garante um maior gerenciamento dos recursos computacionais.

- Entretanto, no pequeno intervalo em que isso acontece, um nó pesquisado pode não ser encontrado, já que ainda
não foi inserido. Recomenda-se aguardar alguns segundos até que seja finalizado o processo de inserção (em torno
de 15 segundos).


