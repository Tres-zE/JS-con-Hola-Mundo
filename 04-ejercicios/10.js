/*
 crear array de longitud N y que sus elementos sean numeros de 1 hasra N
*/

let longitud = 7;

function crearArray(n){
    //primero tenemos que validar que sean solo numeros mayores a 0 de lo contrario que muestre un array vacio
    if(n <= 0) {
        return [];
    }
    //creamos una variable
    let arr = [];
    //iteramos
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

let resultado = crearArray(longitud);
console.log(resultado);