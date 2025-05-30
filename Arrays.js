let numeros = [1,2,3,4,5]
console.log(numeros.push(6))

let numerosIniciales = [1,2,3,4,5]
console.log(numerosIniciales.unshift(0))

console.log(numeros.toString())

console.log(numeros.splice(3,2))

console.log(numeros.concat(numerosIniciales))

console.log(numeros.indexOf(6))

console.log(numerosIniciales.find(x => x<1))

function isPair(x) {
    return x % 2 == 0
}
let numerosMezclados = [1,3,13,23,24,30,45]
let par = numerosMezclados.findIndex(isPair)
console.log(par)

function div2(x){
    console.log(x/2)
}
numerosMezclados.forEach(div2)

console.log(numerosMezclados.includes(2))
console.log(numerosMezclados.includes(23))

let numerosDesordenados = [43,223,1,543,4392,34,254,590,-1,-456]
console.log(numerosDesordenados.sort())

let numerosCortados = numerosDesordenados.slice(2,7)
console.log(numerosCortados)

let constructor = numerosMezclados.constructor
console.log(constructor)

let personajes = ["Vatista", "Heathcliff", "DULLAHAN", "▄ ▄ ▄ ▄ ▄", "Sancho", "Philip"]
personajes.copyWithin(5,3)
console.log(personajes)

personajesEntradas = personajes.entries()
for (let entry of personajesEntradas){
    console.log(entry)
}

let todosPares = numerosDesordenados.every(isPair)
console.log(todosPares)

let numerosLlenos = [1,2,3,4,5,6,7,8,9,10]
numerosLlenos.fill("RAPID GASHES")
console.log(numerosLlenos)

let numerosPares = numerosDesordenados.filter(isPair)
console.log(numerosPares)

let nestedArray = [1,2,3,[4,5,6,[7,8,[9]]]]
let arrayPlano = nestedArray.flat(3)
console.log(arrayPlano)

let cuadradosNumeros = [...numerosDesordenados].flatMap((x) => [x**2])
console.log(numerosDesordenados)
console.log(cuadradosNumeros)

let caracteresTexto = Array.from("LamentMournDespair")
console.log(caracteresTexto)

let cadenaTexto = "LA SANGRE"
console.log(Array.isArray(cadenaTexto))

let cathy = ["Through","Patches","of","Violet"]
let whereAreYou = cathy.join(" ")
console.log(whereAreYou)

let clavesFrases = cathy.keys();

for (let key of clavesFrases) {
  console.log(key);
}

let lastIndex = numerosDesordenados.lastIndexOf(223)
console.log(lastIndex)

let len = nestedArray.length
console.log(len)

let cuadradosMapeados = [...numerosDesordenados].map((x) => [x**2])
console.log(cuadradosMapeados)

let frases = Array.of("HERO", "ON", "A", "PLASTIC", "HORSE")
console.log(frases)

let frasesCopia = [...frases]
let ultimoElemento = frasesCopia.pop()
console.log(frasesCopia)
console.log(ultimoElemento)

let palabras = ["I ", "have ", "nothing ", "but ", "my ", "sorrow "]
function joinStrings(accumulator, currentValue) {
    return accumulator + currentValue;
}
let joinedString = palabras.reduce(joinStrings);
console.log(joinedString);

function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue; 
}
let sumaTotal = numerosIniciales.reduceRight(sum_reducer); 
console.log(sumaTotal);

let arrayInvertido = [...numerosIniciales]
arrayInvertido.reverse()
console.log(arrayInvertido)

let arrayShifted = [...arrayInvertido]
let primerElemento = arrayShifted.shift()
console.log(arrayShifted)
console.log(primerElemento)

console.log(numerosDesordenados.some(isPair))

let stringlocale = palabras.toLocaleString()
console.log(stringlocale)

let valoresPalabras = palabras.values();

for (let value of valoresPalabras) {
  console.log(value);
}