let i = 0;//comenzamos con la delaracion de la variable que empieza en 0
while (i < 6) {//la condicion es que i sea menor a 6 si eso es verdadero
    i++;//se incrementara de 1 en 1
    if (i === 2) {//ahora si i es exactamente igual a 2, lo ignora
        continue;//y continua
    }
    if (i === 4) {//ahora si i es exactamente igual a 4,
        break;//se rompe la instruccion y se para el programa, mostrando unicamente 1 y 3 
    }
    console.log(i);//nos mostrara en consola los valores de 1 pero ignorara el 2 
}