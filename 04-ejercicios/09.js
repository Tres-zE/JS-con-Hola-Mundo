/* 
 crear un algoritmo que devuelva un array de objetos en base a pares
*/

let pairs = [
    [1, {nombre: 'Nicolas'}],
    [2, {nombre: 'Felipe'}],
    [3, {nombre: 'Chanchito'}],
];

let array = [{
    id: 1,
    nombre: 'Nicolas',
}, {
    id: 2,
    nombre: 'Felipe'
}, {
    id: 3,
    nombre: 'Chanchito'
}];

function toCollection(arr) {
    //creamos un arreglo
    let collection = [];
    //iteramos el arreglo
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];//accedemos a la propiedad del elemento
        //agregamos el id
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);