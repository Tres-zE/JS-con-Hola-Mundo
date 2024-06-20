//en js podemos acceder a diferentes propiedades de un objeto, existen algunos atajos para hacer lo mismo, un ejemplo de ello es el constructor

let obj = {};
let obj1 = new Object;

/*
 algunos otros son:
 new Array(); []
 new String(); '' o "" o ´´
 new Number();12
 new Boolean();true false
*/

function Usuario() {
    this.name = 'Chanchito Feliz'
}
let user = new Usuario();
console.log(user.constructor);

const s1 = '1 + 1';
const s2 = new  String('1 + 1');
console.log(s1, s2);