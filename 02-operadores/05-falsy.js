//short-circuit

//Falso--> a todos estos valores se les conoce como falsy
//false
//0
//''
//null
//undefine
//NaN
//ejemplo que da como resultado anonimo
let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);
//ejemplo que da como resultado Chanchito Feliz
let Nombre = 'Chanchito Feliz';
let nombreusuario = Nombre || 'Anonimo';
console.log(nombreusuario);

//ejemplo con verdadero imprime las 2 funciones
function fn1(){
    console.log('soy funcion 1');
    return true;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();

//ejemplo con falso imprime solo una funcion
function fn3(){
    console.log('soy funcion 3');
    return false;
}

function fn4(){
    console.log('soy funcion 4');
    return true;
}

let y = fn3() && fn4();