//Crear y asignar propiedades a un objeto y mostrarlo con una funcion
const persona = {
    name: 'Carlos Brito', edad: 22, estadoCivil: 'Soltero',

};
const mostrarPersona = () => {
    return (persona);
}
console.log(mostrarPersona(persona));


console.log();

//Determinar si una variable es de tipo objeto

let variableConOjeto = {};
let x = 'variableString';

console.log(typeof variableConOjeto);
console.log(typeof x);

console.log();

console.log(typeof variableConOjeto === 'object');
console.log(typeof x === 'object');

console.log();

// Crear un Arreglo 
let arregloDeAutos = ['Susuki', 'Mazda ', 'For', 'Fiat'];
console.log(arregloDeAutos.length);

console.log(arregloDeAutos[0]);
console.log(arregloDeAutos[3]);


console.log();

// Realizar un ciclo for para recorrer un arreglo
let sujeto = ['Carlos', 'Daniel', 'Miguel', 'Angel'];

for (let i = 0; i < sujeto.length; i++) {
    console.log(sujeto[i]);
}

console.log();

//Realizar un forEach para recorrer un arreglo
sujeto.forEach((nombres, indice) => {
    console.log(`${nombres} esta en la posición numero: ${indice}`);

});

console.log();
// use de ciclo while para recorrer un arreglo

let i = 0;
while (i < sujeto.length) {
    console.log(sujeto[i]);
    i++;
}

console.log();

// Crear un objeto y recorrerlo 

const car = { Marca: 'GT', Año: 2016, tipo: 'AutoDeCarreras' };
console.log(Object.keys(car));


console.log();
//para recorrer el objeto sin las llaves
Object.keys(car).forEach((valores) => {
    console.log(valores);
});

console.log();

// Crear un Objeto que tenga nombre apellido edad y run  y concatenar  el contenido  de las variables  en una cadena 

const personita = { name: 'Carlos', apellido: 'Brito', edad: 22, rut: 12324532 };
console.log(`${personita.name} ${personita.apellido} tiene una edad de ${personita.edad} años y su rut es ${personita.rut}`);

console.log();

// Usar  el operador de suma

//Suma Pasando parametros
const sumar = (num1, num2) => {
    return num1 + num2;

}
console.log(sumar(20, 20));

console.log();

//suma con valores ya declarados
let a = 5;
let b = 20;

const sum = () => {
    return a + b;

}
console.log(sum());

console.log()
// Usar  el operador de resta

const restar = (a, b) => {
    return a - b;
}
console.log(restar(12, 6));

console.log();
// Usar  el operador de producto o multiolicación

const multiplicar = (a, b) => {
    return a * b;
}; console.log(multiplicar(5, 8));

console.log();
// Usar  el operador de division

const dividir = (a, b) => {
    return a / b;
}; console.log(dividir(9, 2));


console.log();
//Usar el operador  modulo o resto de la division

const restoDeLaDivision = (a, b) => {
    return a % b;

}; console.log(restoDeLaDivision(7, 6))

console.log();

// uso del operador distinto de 

if (10 != 8) {
    console.log('10 es distinto a 8');
}
else { console.log('son inguales') };

console.log()

if (20 != 20) {
    console.log('20 es distinto a 20')
} else { console.log('son iguales') };

console.log();

//uso del operador condicional ternario
let edad = 64;
let resultado;

resultado = edad <= 12 ? 'Es un niño' : edad < 18 ? 'es un adolescente' : edad <= 50 ? 'Es Adulto' : 'es un Adulto mayor';
console.log(resultado);

console.log();


// Concatenar  cadena de Caracteres 
let concatenadorNombre = 'Carlos';
console.log(`${concatenadorNombre} Es un sujeto que está practicando Javascript`);

// Iterar por todos  los caracteres  de una cadena  de caracteres


let texto = 'JavaScript tiene Muchas cosas que aun desconozco';

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
};

console.log();

//iterar una cadena con el siclo for of

let textito = 'Hola'
for (const tex of textito) {
    console.log(tex);
};
console.log();

// iterrar con el ciclo for in

for (indice in textito) {
    console.log(`este es el lugar numero : del indice ${indice} `);
};
console.log();
//Indicar si una cadena  comienza por una  palabra especifica
//se utiliza para eso el   " startWith "
let cadena = 'Carlitos esta modo practica';
console.log(cadena.startsWith('Carlos'));
console.log(cadena.startsWith('Carlitos'));

console.log();

//Indicar si una cadena  termina por una  palabra especifica


console.log(cadena.endsWith('practica'));
console.log();


// Encontrar  la posicion en donde se encuentr auna palabra 
// si no encuentra la palabra diria -1
console.log(cadena.indexOf('modo'));
console.log();


//volver todas las palabras en minúsculas 
console.log(cadena.toLowerCase());
console.log();

//volver todas las palabras en Mayúsculas
console.log(cadena.toUpperCase());
console.log();


// comprobar  el orden de  dos cadenas de caracteres 
let c = 'Carlos';
let d = 'Dani';
console.log(c.localeCompare(d));
console.log(d.localeCompare(c));
console.log(c.localeCompare(c));

console.log();

// convertir  cadenas de caracteres a números.

let string = '20';
let num = parseInt(string);
console.log(typeof string);
console.log(typeof num);
console.log(num);
console.log();

// Verificar  que un valor que un valor dado corresponda a un número entero 
let  one = 1;
console.log(Number.isInteger(one));
let two = '2';
console.log(Number.isInteger(two));
console.log();

//crear función para generar números aleatorios
const generarAleatorio = (minimo, maximo) =>{
    return Math.floor(Math.random() * (maximo - minimo +1) + minimo);
}
 for(let i = 0; i < 10; i++){
     console.log(generarAleatorio(1, 20));
 }

 console.log();


 // Calcular el valor absoluto de un numero con la funcion Math.abs
console.log(Math.abs(one));
console.log(Math.abs(null));
console.log(Math.abs(undefined));
console.log(Math.abs(''));
console.log();
