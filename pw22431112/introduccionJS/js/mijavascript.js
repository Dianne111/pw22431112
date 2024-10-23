document.write("<h1>Hola</h1>");
consolole.log("consola desde JS");
//console.error("Esto es un error");

/*comentarios
multiples lineas*/ 
//variables
//<--- tipo --tipado debil
let x; 
console.log(typeof(x));
let esPW = false;
console.log(typeof(esPW));
if (esPW) {
    console.log("estamos en clase");
} else {
    console.log("no estamos en clase");
}
let numero = -2324.33;
console.log(numero);

let cadena = "una cadena 'comillas'"
console.log(cadena);
let cadena2 = 'otra cadena "al reves"'+numero;
console.log(cadena2);
//interpolacion de variables
let cadena3 = `otra cadena 
incluso puedo tener renglones 
y variables ${numero}`;
console.log(cadena3);

let id1= symbol("id");
let id2= symbol("id");
console.log(id1);
let usuario ={nombre:"Dianne",[id1]:123};
console.log(usuario.nombre+" "+usuario[id1])

let variablenula = null;
console.log(variablenula);

const PI = 3.1416;
console.log(PI);
//PI = 1232;

let arreglo =[];
console.log(arreglo);
arreglo = [1, 2, 3];
console.log(arreglo);
arreglo.push(4);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);
arreglo.unshift(10);
console.log(arreglo);

let objeto = {nombre:"Dianne",edad:47};
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

alert("Alerta en pantalla");
let edad = prompt("Dame la edad",0);
console.log(edad);