/*
 crear un algoritmo que devuelva el numero menor y mayor en un array
 este ejercicio es muy comun en las entrevistas tecnicas
*/

let array = [2, 5, 7, 15, -5, -100, 55];
//usaremos el metodo burbuja
function getMenorMayor(arr) {
    //usaremos 2 varaibles para compararlas una a una
    //le damos un valor inicial que es el primer numero del array, causara problemas si no lo hacemos asi
    let menor = arr[0];
    let mayor = arr[0];

    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array)
console.log(numeros);