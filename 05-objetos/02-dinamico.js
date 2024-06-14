//creamos un objeto con solo una propiedad
const user = { id: 1 };//al usar const, no podemos cambiar el valor
//pero podemos agregarle otros valores o borrar
user.name = 'Nicolas';
//usamos una funcion anonima para no repetir el nombre de la misma
user.guardar = function () {
    console.log('Guardando...', user.name);
}
//llamanos a la funcion ya que sino nos dara un error
user.guardar();
//para borrar valores en la const
delete user.name;
delete user.guardar;
console.log(user);
//para que un objeto no se pueda modificar, es decir, cambiar, agregar, eliminar usaremos freeze
//const user1 = Object.freeze({ id: 1 });
//ahora si queremos cambiar alguna propiedad que ya existe, usaremos seal
const user1 = Object.seal({ id: 1 });
//para comprobar agregaremos un nombre y cambiaremos el id
user1.name = 'Nico';
user1.id = 2;
console.log(user1);