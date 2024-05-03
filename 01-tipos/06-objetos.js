//Personaje de TV
let nombre = "Tanjiro";
let anime = "Demos Salyer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
}; // objeto literal

console.log(personaje); //para acceder a todas la propiedades o atributos del objeto
console.log(personaje.nombre);//para acceder solo a una propiedad o atributo del objeto 
console.log(personaje['anime']);//otra forma para acceder solo a una propiedad o atributo del objeto 

//cambiando el valor de la propiedad o atributo del objeto
//forma 1
personaje.edad = 13;
//forma 2
personaje['edad'] = 16;
//forma 3 en caso de iterar
let llave = 'edad';
personaje[llave] = 16;

//para eliminar alguna propiedad del objeto
delete personaje.anime;
console.log(personaje);