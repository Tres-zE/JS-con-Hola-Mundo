let a = 1;
let b = a;

b++;
console.log(a, b);
////////////////////////
let c = {};
let d = c;

d.prop = 1;
console.log(c, d);
///////////////////////
let e = 1;

function suma(n) {
    n++;
}

suma(e);
console.log(e);
///////////////////////
let f = { prop: 1};

function adicion(n) {
    n.prop++;
}

adicion(f)
console.log(f);

//NOTA: los datos primitivos se copian
//      los datos de referencia se referencian: objetos, arrays y funciones