function Usuario(nombre) {
    this.nombre = nombre;
}
//al igual que los objetos...las funciones tambien tienen propiedades y las podemos visualizar con console.log
console.log(Usuario.name);//para saber el nombre de la funcion
console.log(Usuario.length);//para saber la cantidad de argumentos que recibe una funcion

//tambien podemos pasar una funcion a una variable
const U = Usuario;
//crear un nuevo usuario con base a la referncia de Usuario
let user = new U('Nicolas');
console.log(user);//imprimimos user para visualizar al nuevo usuario

//podemos agregar funciones a otras funciones como argumentos
function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

//tambien podemos retornar a otras funciones
function returned() {
    return function() {
        console.log('Hola Mundo');
    }
}
let saludo = returned();
saludo();