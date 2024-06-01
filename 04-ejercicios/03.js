/*
 indice validar que no sea menor a 0 y que el elemento exita en el array 
*/

function getbyIdx(arr, idx) {
    //primero validamos que el indice no sea cero y validamos la longitud del array con una de sus propiedades
    if (idx < 0 || arr.length <= idx) {
        return 'El elemento no existe';//en caso de que sea cero
    }
    //retornamos el array
    return arr[idx];
}

let resultado = getbyIdx([1, 2], 2)
console.log(resultado);