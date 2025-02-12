// Declaración de diferentes tipos de arrays en JavaScript

let array = [1, 2, 3, 4, 5];

// Métodos disponibles en los arrays de JavaScript
console.log(array.at(2)); // Accede al índice 2

console.log(array.concat([6, 7, 8])); // Concatena otro array

console.log(array.copyWithin(0, 2, 4)); // Copia elementos dentro del array

console.log([...array.entries()]); // Devuelve pares índice-valor

console.log(array.every(num => num > 0)); // Comprueba si todos cumplen condición

array.fill(9, 1, 3); // Rellena con un valor desde índice 1 a 3
console.log(array);

console.log(array.filter(num => num % 2 === 0)); // Filtra los elementos pares

console.log(array.find(num => num > 2)); // Encuentra el primer elemento mayor a 2

console.log(array.findIndex(num => num > 2)); // Índice del primer elemento mayor a 2

console.log(array.findLast(num => num < 4)); // Último menor a 4

console.log(array.findLastIndex(num => num < 4)); // Índice del último menor a 4

console.log(array.flat()); // Aplana arrays anidados

console.log(array.flatMap(num => [num, num * 2])); // Mapea y aplana

array.forEach(num => console.log(num)); // Itera sobre cada elemento

console.log(array.includes(3)); // Verifica si incluye el 3

console.log(array.indexOf(3)); // Índice del 3

console.log(array.join(" - ")); // Convierte a string con separador

console.log([...array.keys()]); // Devuelve los índices

console.log(array.lastIndexOf(3)); // Última aparición del 3

console.log(array.map(num => num * 2)); // Mapea duplicando cada número

console.log(array.pop()); // Elimina y retorna el último

array.push(6); // Agrega un número
console.log(array);

console.log(array.reduce((acc, num) => acc + num, 0)); // Reduce a suma total

console.log(array.reduceRight((acc, num) => acc - num, 0)); // Reduce de derecha a izquierda

console.log(array.reverse()); // Invierte el array

console.log(array.shift()); // Elimina el primer elemento

console.log(array.slice(1, 3)); // Extrae elementos entre índices

console.log(array.some(num => num > 3)); // Verifica si alguno es mayor a 3

console.log(array.sort()); // Ordena los elementos

array.splice(2, 1, 99); // Reemplaza el tercer elemento con 99
console.log(array);

console.log(array.toLocaleString()); // Convierte a string con formato local

console.log(array.toString()); // Convierte a string

array.unshift(0); // Agrega al inicio
console.log(array);

console.log([...array.values()]); // Devuelve un iterador de valores
