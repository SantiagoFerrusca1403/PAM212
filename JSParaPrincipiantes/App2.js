// asignaciones de valores a variables 
var username = 'John';
let lastUsername = 'Carter';
//Cambio de nombre 
username = 'Pedrito';
//Valores constantes que no pueden cambiar 

const PI = 3.1416;

//Juntar nombre completo 
let name = 'Santiago';
let Lastname = 'Alcaraz'
let CompleteName =  name + ' ' + lastname;
console.log(CompleteName)

let NumberOne = 100;
let NumberTwo = 500; 
let Result = NumberOne + NumberTwo;
let Comparation = NumberOne== NumberTwo;
console.log(Result);
console.log(Comparation);

// Comparación con ifs (Validaciones)
let password = "1234";

let input = '4321' 
let Correcto = input == password;
if(Correcto= true){
    console.log('Sesión iniciada con éxito');
} else{
    console.log('Contraseña incorrecta')
}

//Puntajes
let score=70;
if(score< 15){
    console.log('You need to practice more');
}
if(score > 30){
    console.log('Vas mejorando');
}
else{
    console.log('echale ganas master');
}

// Tarjetas
let typeCard = 'Credit card';

switch(typeCard){
    case 'Debid card':
        console.log('this is a debid card');
        break;
    case 'Credit card':
        console.log('this is a redit card');
        break;
    default:
        console.log('you dont have a card');
}

// WHILE
let count = 0;   
while(count< 50){
    console.log(count);
    count ++;
}
// Arreglos 
let names = ['ryan', 'joe', 'john'];

for(let i=1;i< names.length; i++){
    console.log(names[i])
}

// Funciones
function greeting(person){
    console.log('hello' + person);
}
greeting('Karla');
greeting('Ivette');
greeting('Daniela');

function add(n1, n2){
    console.log(n1+n2);
}
add(500,400);
add(600,2);