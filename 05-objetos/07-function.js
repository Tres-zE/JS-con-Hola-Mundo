function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('Dibujando...');
    }
}

// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() {
//         console.log('Dibujando...');
//     }
// `)

// const p = new Point(1, 2);
// console.log(p);

let punto = { z: 7 };
// Punto.call({}, 1, 2);//callnos permite llamar otra funciones
Punto.apply(punto, [1, 2])

console.log(punto);