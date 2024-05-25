//cuales son los numeros pares
//si la condicion se cumple, lo que esta dentro del parentesis, ejecuta el bloque de codigo que esta dentro de los corchetes

let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Numero par: ',i);
    }
    
    i++;
}

console.log('Fuera del while');