function suma(a){
    return a + 2;// cuando referenciamos a la funcion,lo que esta dentro se llama PARAMETROS 
}

let resultado = suma(5);// cuando llamamos a las funciones, lo que esta dentro se llama ARGUMENTOS
console.log(resultado);
//estas pueden recibir multiples parametros y argumentos
function sumas(a, b){
    return a + b;// cuando referenciamos a la funcion,lo que esta dentro se llama PARAMETROS 
}

let resultados = sumas(5, 6);// cuando llamamos a las funciones, lo que esta dentro se llama ARGUMENTOS

//forma no recomenda para acceder a los valores de una funcion= arguments
function sumasS(a, b){
    console.log(arguments);
    return a + b;// cuando referenciamos a la funcion,lo que esta dentro se llama PARAMETROS 
}

let resultadoTres = sumasS(5, 6, 7, 8, 9);// cuando llamamos a las funciones, lo que esta dentro se llama ARGUMENTOS

console.log(resultados);
console.log(typeof suma);
console.log(typeof sumas);
