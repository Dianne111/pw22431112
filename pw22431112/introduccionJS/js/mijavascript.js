document.write("<h1>Hola</h1>");
console.log("consola desde JS");
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

let id1= Symbol("id");
let id2= Symbol("id");
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

let variable = "valor";
const CONSTANTE = "VALOR";
function miFuncion(a = 2){
    return 2*a;
}
console.log(miFuncion(6));
const funcionFlecha = (a = 10) => {
    return 2*a;
}
console.log(funcionFlecha(7));

//Destructuring = Destructurar
//Objetos
const usuarios = {
    nombre:'Dianne',
    apellido:'Parroquin'
}
//let nombre = usuarios.nombre;
//let apellido = usuarios.apellido;
let { nombre, apellido} =  usuario;  //Los campos deben corresponder al nombre de la variable en el objeto
console.log(nombre+" "+apellido);

//Otro objeto

const usuarios2 = {
    nombre:'Dianne',
    apellido:'Parroquin',
    redes: {
        sociales: {
            twx:'@miusuario',
            face: '@miface'
        }
    }
}
//const face = usuarios2.redes.sociales.face;
//const {twx, face} = usuarios2.redes.sociales;
//console.log(twx+" "+face);
const { redes: {sociales:{twx}}} = usuarios2;
console.log(twx);

//Arreglos
const arregloNombres =['Juan','Ernesto','Omar'];
//let nombre1 = arregloNombres[0];
//let nombre3 = arregloNombres[2];
const[nombre1,,nombre3]= arregloNombres;
console.log(nombre1+" "+nombre3);

//Combinaciones
//Objetos
const usuarios3 = {
    direcciones: 'conocida',
    numerocasa: '300'
}

//Propagacion de campos (...)
const nuevoObjeto={...usuarios2,...usuarios3}; 
console.log(nuevoObjeto);

//Arreglos
const arregloApellidos = ['Parroquin','Diaz','Ruezga'];
const nuevoArreglo = [...arregloNombres,...arregloApellidos];
console.log(nuevoArreglo);
const otroNuevoArreglo = arregloNombres.concat(arregloApellidos);
console.log(otroNuevoArreglo);

//foreach, for, map, reduce <--- iterar arreglos
for(let i=0;i<nuevoArreglo.length;i++){
    console.log(nuevoArreglo[i])
}

nuevoArreglo.forEach(function(nombre){
    console.log(nombre)
})
let numeros = [1,2,3,4,5];
let suma = 0;

//Foreach //Recorre todo el arreglo captando cada elemento en el parametro
numeros.forEach(function(numero){
    suma += numero;
})
console.log(suma);

//Map //Crea un arreglo nuevo
let precios =[10,20,30,40,50];
const conversion = 0.85;
let preciosnuevos=precios.map(function(precio){
    return precio * conversion;
})
console.log(preciosnuevos);

//Reduce //regresa un solo resultado
let sumaPrecios = precios.reduce(function(suma,precio){
    return suma+precio;
},0)
console.log(sumaPrecios);

//Clases
class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    habla(){
        console.log(`Este ${this.nombre} hace ruido`);
    }
}
class Perro extends Animal{
    habla(){
        console.log(`Mi perro ${this.nombre} ladra`);
    }
}
const perro =new Perro('Hunter');
perro.habla();