let accion = 'listar';//declaramos la variable

switch (accion) {//colocamos la variable a evaluar
    //evalua el valor de la varibale 
    case 'listar'://si accion es igial al caso evaluar
        console.log('Acción de listar');//nos mostrara el mensaje 
        break;//ddetiene la ejecucion una vez se evalua la condicion, en caso de no tener break se seguira evaluando y mostrara en consola los mensajes
    case 'guardar':
        console.log('Acción de guardar');
        break;//siempre que se use case debe llevar break
    default://siempre se usa siempre y cuando no exista algun valor igual al de la variable evaluada, es decir una accion no definida
        console.log('Acción no reconocida');    
}
//switch y if-else se usan comunmente de la misma manera para evaluar algo, funcionan igual