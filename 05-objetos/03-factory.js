//creamos un objeto usuario
// let user = {
//     id: 1,
//     email: 'nico@holamundo.io',
//     name: 'Nicolas',
//     activo: true,
//     recuperarclave: function () {
//         console.log('recuperando clave...');
//     },
// };

//NOTA: imaginemos que creamos otro usuario, copy-paste y listo pero que pasaria si creamos otros mil...copy-paste ya no serviria. Es por eso que para darle solucion a este tipo de problema usaremos las factory function

//creamos una funcion crearUsuario
//los parametros van dentro del ()
function crearUsuario(name, email) {
    //copiamos el objeto de usuario pero en lugar de tener la variable user...usamos return
    return {//modificamos el codigo
        //email: email, puede ser asi o solo email
        email,
        // name: name, o solo name
        name,
        activo: true,
        recuperarclave: function () {
            console.log('recuperando clave...');
        },
    };
};

//definimmos la variable user
let user1 = crearUsuario('Nicolas', 'nicolas@holamundo.io');
let user2 = crearUsuario('Felipe', 'felipe@holamunso.io');
console.log(user1, user2);