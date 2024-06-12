/* 
 crear un algirtmo que tome un array de objetos y devuelva un array de pares
*/
let array = [{
    id: 1,
    nombre: 'Nicolas',
}, {
    id: 2,
    nombre: 'Felipe',
}, {
    id: 3,
    nombre: 'Chanchito',
}];

let pares = [
    [1, {id: 1, nombre: 'Nicolas'}],
    [2, {id: 2, nombre: 'Felipe'}],
    [3, {id: 3, nombre: 'Chanchito'}]
];

function toPairs(arr) {
    //primero definimos la variable
    let pairs = [];
    //despues iteramos los indices de la matriz
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);