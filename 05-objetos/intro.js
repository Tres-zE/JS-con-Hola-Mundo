//propiedades de un objeto--usuario
//estas variables ya no las necesitamos porque estan en el objeto de abajo
// let email = 'rulo@holamundo.io';
// let nombre = 'Miguel';
// let direccion = {
//     calle: 'Queen st',
//     numero: 15,
// };
//podemos colocar objetos dentro de un objeto
let user = {
    email: 'rulo@holamundo.io',
    nombre: 'Miguel',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    //podemos asignarle un valor booleano
    activo: true,
    //tambien agregar una funcion que puede llevar el nombre pero en este caso usaremos una funcion que se llama funcion anonima ya que si volvemos a colocar el mismo nombre, es decir, recuperarClave: function recuperarClave () {} esta seria redundante
    recuperarClave: function () {
        console.log('Recuperando clave');
    },
};