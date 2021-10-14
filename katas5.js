// implemente aqui as funções de teste

// 1.Escreva duas funções de teste unitário chamadas testReverseString1 e testReverseString2. Em seguida, escreva uma função chamada reverseString que inverte uma string.
   
function reverseString(str) {
      let separa = str.split("");   
      let inverte = separa.reverse();
      let junta = inverte.join(""); 
      return junta;
  }

 // 1 - FUNÇÕES DE TESTE
function testeReverseString1() {
   let result = reverseString("Kenzie Academy");
   let expected = "a";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testeReverseString2() {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

//_____________________________________________________________________________________________________________________________________________
//  2. Escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2. Em seguida, escreva uma função chamada reverseSentence que inverte uma frase.Ex:   
function reverseSentence(sentence){
   let separa = sentence.split(" ")
   let inverte = separa.reverse()
   let joinSentence = inverte.join(" ")

   return joinSentence
}

// 2 - FUNÇÕES DE TESTE 
function testReverseSentence1(){
   let result = reverseSentence("bob likes dogs");
   let expected = "dogs likes bob";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testReverseSentence2() {
   let result = reverseSentence("Kenzie Academy");
   let expected = "Academy Kenzie";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


//_____________________________________________________________________________________________________________________________________________
// 3. Escreva duas funções de teste unitário chamadas testMinimumValue1 e testMinimumValue2. Em seguida, escreva uma função chamada minimumValue que encontra o valor mínimo de um array.
function MinimumValue(arr){
  
   return Math.min(...arr);
}

function testMinimumValue1(){
   let result = MinimumValue([11, 12, 13, -14, 15, 16, 17, 18, 19, -20]);
   let expected = -20;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2(){
   let result = MinimumValue([1, -2, 3, 4, 5, -6, 7, 8, 0, -10]);
   let expected = -10;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

//_____________________________________________________________________________________________________________________________________________
// 4. Escreva duas funções de teste unitário chamadas testMaximumValue1 e testMaximumValue2. Em seguida, escreva uma função chamada maximumValue que encontra o valor máximo de um array.
function MaximumValue(arr){
  
   return Math.max(...arr);
}

function testMaximumValue1(){
   let result = MaximumValue([11, 12, 13, -14, 15, 16, 17, 18, 19, -20]);
   let expected = 19;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2(){
   let result = MaximumValue([1, -2, 3, 4, 5, -6, 7, 8, 0, -10]);
   let expected = 8;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


//_____________________________________________________________________________________________________________________________________________
// 5. Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e testCalculateRemainder2. 
//Em seguida, escreva uma função chamada calculateRemainder que calcula o resto de uma determinada divisão.
function CalculateRemainder(x,y){
  
   return x % y
}

function testCalculateRemainder1(){
   let result = CalculateRemainder(15, 5);
   let expected = 0;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2(){
   let result = CalculateRemainder(13, 5);
   let expected = 3;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


//_____________________________________________________________________________________________________________________________________________
// 6. Escreva duas funções de teste unitário chamadas testDistinctValues1 e testDistinctValues2. 
//Em seguida, escreva uma função chamada distinctValues que retorna valores distintos de uma lista. Ex: 
// >"1 3 5 3 7 3 1 1 5" retorna "1 3 5 7"
function distinctValues(arr){
  const novo = [...new Set(arr)]
  const novo2 = novo.sort((a, b) => a - b)
   
   return novo.toString()
}

function testDistinctValues1(){
   let result = distinctValues([11, 11, 11, 13, 11, 14, 15, 16, 13, 14]);
   let expected = "11,13,14,15,16";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2(){
   let result = distinctValues([1, -2, 3, 4, 5, -6, 7, 8, 0, -10]);
   let expected = '-10,-6,-2,0,1,3,4,5,7,8';
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


//_____________________________________________________________________________________________________________________________________________
// 7. Escreva duas funções de teste unitário chamadas testCountValues1 e testCountValues2. 
//Em seguida, escreva uma função chamada countValues que retorna os valores de uma lista e suas ocorrências.Ex:   
// >"1 3 5 3 7 3 1 1 5" retorna "1(3) 3(3) 5(2) 7(1)" que é a quantidade de vezes que os números apareceram na primeira lista.




//_____________________________________________________________________________________________________________________________________________
// 8. Escreva duas funções de teste unitário chamadas testEvaluateExpression1 e testEvaluateExpression2. Em seguida, escreva uma função chamada evaluateExpression que receberá dois parâmetros:
//    >Uma string: Com uma expressão a ser avaliada. Ex: `"a + b + c - d"`;
   
//    >Um objeto: Com valores que substituira as incógnitas da expressão. Ex: `{a: 1, b: 7, c: 3, d: 14}`.

// O resultado esperado da função `evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})` seria -3.

// Por exemplo, um teste unitário para o 8º kata poderia se parecer com isso:

// ```js
// function testEvaluateExpression1() {
//    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
//    let expected = -3
//    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }