# Conteúdo da Semana 2 - Reprograma

Lógica - Variáveis, Tipos de Dados e Operadores 🚀

**O que é NodeJS?**

É um interpretador Javascript que não depende do navegador. Ele é formado pelo V8, motor interpretador de Javascript criado pelo Google, e pela libuv, uma biblioteca que deu características de linguagem backend para o node.
  
Node.js revolucionou a forma de programar em Javascript, pois a linguagem evoluiu de uma forma de dar vida aos elementos no navegador para uma linguagem capaz de criar software para tratamento de dados no backend.
  

## Tipos de dados:

JavaScript é uma linguagem dinamicamente tipada.

Isso significa dizer que não é preciso especificar o tipo do dado quando formos declarar uma variavél ou quando esperamos o retorno de uma função. Além disso, os tipos de dados são convertidos automaticamente conforme a necessidade de execução do nosso script. Mais pra frente você vai perceber isso melhor.

Aprender tipos de dados é um super poder para resolver problemas com estrutura de dados e algoritmos lá no futuro.

Vamos aprender os tipos de dados primitivos em javascript:

 **String**

É uma cadeia de caracteres. A gente identifica o dado do tipo string quando caracteres formam palavras ou frases entre aspas simples ou duplas.

Quando queremos escrever textos em javascript é preciso usar uma das três formas abaixo. Elas não possuem diferenças, só ter atenção pois você não pode em uma única string começar com uma e terminar com a outra.

*Aspas simples ' '
Aspas duplas " "
Template literals ``*

Podemos também unir strings concatenando ou interpolando.  

Os templates literals podemos usar quando queremos interpolar uma string com uma expressão de javascript.
  
Qual aspas usar? É uma preferência da pessoa desenvolvedora ou acordo do time. Agora, o ***JSON só aceita aspas duplas.***

**Number**

É o tipo de dado númerico no Javascript e podemos identificar, geralmente como números inteiros ou decimais, também conhecido como float.

**Boolean**

É o tipo de dado lógico e tem apenas dois valores.

**Null x undefined**

Null é um objeto vazio undefined é o valor pra uma variável não definida, por exemplo.

**Objeto, array e function**

Um objeto do JavaScript é um mapeamento entre chaves e valores. Chaves são Strings e valores podem ser de qualquer tipo.

Arrays são objetos perfeitos para representação de listas e conjuntos.

Funções são objetos comuns com a capacidade adicional de serem chamados.

 **Determinando tipos usando o operador typeof**

O operador typeof pode te ajudar a encontrar o tipo de sua variável.

A gente precisa usar uma palavra reservada do Javascript e um identificador. Além disso, a gente pode atribuir valores para essas variáveis.

 É mais ou menos assim:

  A palavra reservada: var Identificador: myName Atribuindo valor: "Maysa"

Declarando uma variável: var myName Atribuindo valor: myName = Maysa Recuperando o dado que está guardado na variável : myName

 Aqui vão algumas dicas pra você ficar muito expert em declarar variaveis com Javascript
 
**O que pode?** Podem começar com letra, $ ou _ É possível usar acento, símbolos e números.

**O que não pode?** Não pode começar com número Não pode conter espaço Não podem ser palavras reservadas.

 **Qual o ideal?** Ter atenção, pois é ***case sensitive***. Use nomes coerentes.

  
### Diferenças entre let, const e var:

- var são declarações de escopo global ou de escopo de funções, enquanto let e const são de escopo bloqueado; 
- var podem ser   atualizadas ou reatribuídas nestes escopos;
- let podem ser atualizadas, mas const não podem ser atualizadas ou retribuídas; 
- Enquanto var e let podem ser declaradas sem inicializar, const precisa ser inicializada durante a 			     declaração; 
 - var sofrem hoisting de escopo.

Ficou por fora quando eu falei de escopo e de hoisting? Esses conceitos são mais fáceis de entender com a mão no código.

Escopo se refere ao local em que podemos acessar a variável no algoritmo ou em uma função. E as variáveis podem ser locais ou globais.

 ### Operadores:

Termos: unário, binário e operando

**Operando** – na multiplicação de 8 * 2 existem dois operandos: esquerdo é o 8 e direito é o 2.

 **Unário** - quando temos um único operando. Por exemplo, a negação unária -inverte o sinal de um número:

**Binário** - se tiver dois operandos. O mesmo sinal de menos também existe na forma binária:

Precisamos de operadores para realizar qualquer operação em uma linguagem de programação. O javascript também tem seus operadores aritméticos, de atribuição, lógicos entre outros.

