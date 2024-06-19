//creamos una funcion constructora y por convencion esta debe ser escrita con la primer letra mayuscula ademas debe estar relacionado al objeto que se va a construir

function Usuario() {
    //para pasarle o agregar una propiedad al objeto usamos la palabra reservado this. seguida de la propiedad
    this.id = 1;
    //ahora agregamos una funcion anonima
    this.recuperarClave = function () {
        //NOTA IMPORTANTE: cuando en una propiedad del objeto agregamos una funcion constructora o una factory function... esta ya no se llamara FUNCION, a partir de ahora la llamaremos !!!METODO!!!
        console.log('recuperando clave...');
    }
}

//para crear un usuario, es decri, usar el objeto, debebos llamar la funcion creada, sin embargo para que esta funcione debemos usar la palabra reservada new ya que sino, nos dara undefined
/*
 NOTA IMPORTANTE: cuando usamos NEW ocurren 4 cosas:
    1: se crean cosas del aire
    2: se enlaza el prototipo con la funcion usuario
    3: el objeto vacio creado del aire se retorna a this
    4: sino retorna nada...en automatico retorna this
*/
let usuario = new Usuario();
console.log(usuario);