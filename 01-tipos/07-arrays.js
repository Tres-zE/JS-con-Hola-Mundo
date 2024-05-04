//los elemento de un arry comienzan en 0
let animales = ['chanchito', 'caballo'];

console.log(animales);
console.log(animales[0]);//para acceder solo a un dato en especifico

//agregamos un nuevo animal
animales[2] = 'dragón';
console.log(animales);

//debemos tener cuidado al agregar datos en un array
animales[10] = 'pez';
console.log(animales);//aparece como 7 espacios vacios
console.log(animales.length);//nos da la longitud del array