let user = {
    id: 1,
    name : 'Chanchito feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);//para que nos muestre el vlaor de la propiedad y la propiedad misma
}

//con for in
let animales = ['Chanchito feliz', 'Dragón', 'Perro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}