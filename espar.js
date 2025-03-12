/* 
Autor: Samuel Moreno
Código: 2226016
-------------------------------------------------------------------------------
*/

// Regular Function
function determinarParidad(valor) {
    if (valor % 2 === 0) {
        console.log(`${valor} es un número par`);
    } else {
        console.log(`${valor} es un número impar`);
    }
}

// Arrow Function
const evaluarNumero = (valor) => {
    console.log(`${valor} es ${valor % 2 === 0 ? "par" : "impar"}`);
};
