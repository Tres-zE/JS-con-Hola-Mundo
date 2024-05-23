//cuales son los numeros pares
//si la ondicion se cumple, lo que esta dentro del parentesis, ejecuta el bloque de codigo que esta dentro de los corchetes

let i = 0;
//en while primero se evalua la condicion para despues ejecutar el bloque de codigo
while (i < 2) {
    if (i % 2 == 0) {
        console.log('Numero par: ',i);
    }
    
    i++;
}

//en do while primero se ejecuta el bloque de codigo y luego se evalua la condicion
/*do {
    if (i % 2 == 0) {
        console.log('Numero par: ',i);
    }
    
    i++;
} while (i < 2);*/