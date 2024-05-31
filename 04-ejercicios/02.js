//switch
/* 
 Nombre: ancho y alto
 8k 7680 x 4320
 4k 3840 x 2160
 WQHD 2560 x 1440
 FHD 1920 x 1080
 HD 1280 x 720
*/

// function nombreResolucion(ancho, alto) {
//     //forma 1: if - else de rulodev osease yo
//     if (ancho >= 7680 && alto >= 4320) {
//         console.log('8k');
//     } else if (ancho >= 3840 && ancho <7680 && alto >= 2160 && alto < 4320) {
//         console.log('4k');
//     } else if (ancho >= 2560 && ancho <3840 && alto >= 1440 && alto < 2160) {
//         console.log('WQHD');
//     } else if (ancho >= 1920 && ancho <2560 && alto >= 1080 && alto < 1440) {
//         console.log('FHD');
//     } else if (ancho >= 1280 && ancho <1920 && alto >= 720 && alto < 1080) {
//         console.log('HD');
//     } else {
//         console.log('pilas mijo, estudie las resoluciones de las pantallas');
//     }
// }

// let nombre = nombreResolucion(1930, 10);


// function nombreResolucion(ancho, alto) {
//     //forma 2: if - else de rulodev osease yo, en lugae del console.log sera un return
//     if (ancho >= 7680 && alto >= 4320) {
//         return'8k';
//     } else if (ancho >= 3840 && ancho <7680 && alto >= 2160 && alto < 4320) {
//         return'4k';
//     } else if (ancho >= 2560 && ancho <3840 && alto >= 1440 && alto < 2160) {
//         return'WQHD';
//     } else if (ancho >= 1920 && ancho <2560 && alto >= 1080 && alto < 1440) {
//         return'FHD';
//     } else if (ancho >= 1280 && ancho <1920 && alto >= 720 && alto < 1080) {
//         return'HD';
//     } else {
//         return'pilas mijo, estudie las resoluciones de las pantallas';
//     }
// }

// let nombre = nombreResolucion(1930, 1099);
// console.log(nombre);

function nombreResolucion(ancho, alto) {
    //forma 2: if - else de Mundo
    if (ancho >= 7680 && alto >= 4320) {
        return'8k';
    } else if (ancho >= 3840 && alto >= 2160) {
        return'4k';
    } else if (ancho >= 2560 && alto >= 1440) {
        return'WQHD';
    } else if (ancho >= 1920 && alto >= 1080) {
        return'FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return'HD';
    } else {
        return'pilas mijo, estudie las resoluciones de las pantallas';
    }
}

let nombre = nombreResolucion(3840, 2160);
console.log(nombre);