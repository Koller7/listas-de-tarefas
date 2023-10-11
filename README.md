# listas-de-tarefas

Lista de Tarefas

# Descrição

Basicamente, o código cria uma interação simples em que o usuário clica em um botão, e o JavaScript seleciona aleatoriamente uma tarefa da lista predefinida e a exibe na página. Isso permite ao usuário receber tarefas aleatórias para realizar.

# Pré-requisitos

Navegador da web moderno (compatível com HTML, CSS e JavaScript).

# Instalação

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.

## Uso

Para utilizar o projeto e gerar tarefas aleatórias, siga os passos a seguir:

1. Abra o arquivo `index.html` em seu navegador.

2. Você verá um botão chamado "Gerar Tarefa Aleatória". Clique nele para gerar uma tarefa aleatória.

3. O resultado será exibido na tela, mostrando a tarefa gerada aleatoriamente.

## Funcionamento do código

1. A lista de tarefas é definida como um array de strings na variável tasks:

2. Uma função chamada generateTask é definida para gerar uma tarefa aleatória a partir da lista de tarefas. A função seleciona um índice aleatório no array tasks e retorna a tarefa correspondente:

3. Os elementos HTML da página são referenciados pelo JavaScript. O botão que acionará a geração de tarefas é obtido por meio do getElementById e armazenado na variável generateButton. O elemento que exibirá a tarefa gerada é obtido da mesma maneira e armazenado em taskResult:

4. É adicionado um evento de clique ao botão. Quando o botão é clicado, a função anônima associada a ele é executada. Dentro dessa função, uma tarefa aleatória é gerada chamando generateTask(tasks), e o resultado é exibido no elemento taskResult:
