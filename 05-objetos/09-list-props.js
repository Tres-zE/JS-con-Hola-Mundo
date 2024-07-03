const punto = {
    x: 10,
    y: 15,
    //forma 1 del metodo dibujar
    // dibujar: function() {
    //     console.log('dibujando');
    // }
    //forma 2 que es mas practico
    dibujar() {
        console.log('dibujando');
    }
}
//para verificar o buscar alguna propiedad o metodo dentro de un objeto
//buscamos un metdo que se elimino y nos dara error
// delete punto.dibujar;
//para checar si el metodo se encuentra solo llamamos al metodo
//punto.dibujar();
//tmabien lo podemos hacer de la siguente manera
if ('dibujar' in punto) {
    punto.dibujar();
}
//ahora accederemps al contenido de punto
//console.log(Object.keys(punto));//nos dara un array con las propiedades de punto
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}
//maneraa 2 de acceder a los valores del objeto
for (let entry of Object.entries(punto)) {
    console.log(entry);
}
//forma 3 de acceder a los valoes del objeto
for (let llave in punto) {
    console.log(llave, punto[llave]);
}