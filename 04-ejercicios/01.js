//cual de los dos numeros es mayor 
function cualEsMayor(a, b) {//asignamos 2 variables
    //comparamos forma 1: if - else
    // if (a > b) {
    //     return a;
    // } else {
    //     return b;
    // }
    //forma 2: ternario
    return (a > b) ? a : b;
}

let mayor = cualEsMayor(10, 5);
console.log(mayor);