//dentro de los parentesis se compone de 3 partes:
//inicializacion, comparacion y  termina la iteracion
//tambien dentro de los corchetes va el bloque de codigo

//el ciclo while
/*let i = 2;
while (i < 2) {
    if (i % 2 == 0) {
        console.log('Numero par: ', i);
    }
    i++;
}*/

//ahora el codigo del while se ve asi en el ciclo for
//inicializamos la variable i en 2, luego comparamos la variable con algo que seria 2 y luego incrementamos el valor de la variable
for (let i = 2; i < 10; i++) {
    if (i % 2 == 0) {
        console.log('Numero par: ', i);
    }
}