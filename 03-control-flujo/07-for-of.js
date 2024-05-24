//while
//do while
//for
//estos 3 nos permite calcular las iteraciones de manera manual

let animales = ['Chanchito Feliz', 'Dragón', 'Perrito'];

//forma de alguna manera mas facil
for (let animal of animales) {
    console.log(animal);
}

//asi se veria en while
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}