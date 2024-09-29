//1. INTRODUCCIÓN A JAVASCRIPT
console.log("1. INTRODUCCIÓN A JAVASCRIPT");
//Ejercicio 2
console.log("Ejercicio 2");
let a = 5;
let b = 10;
let c = a + b;
console.log(`La suma de a y b es ${c}`);

//Ejercicio 3
console.log("Ejercicio 3");
let nombre = prompt("¿Cuál es tu nombre?");
console.log(`Hola, ${nombre}!`);

//2. OPERADORES LÓGICOS Y CONDICIONALES
console.log("2. OPERADORES LÓGICOS Y CONDICIONALES");
//Ejercicio 1
console.log("Ejercicio 1");
let a1 = 14;
let b1 = 10;
let c1 = 9;
if (a1 > b1 && a1 > c1){
  console.log(`El mayor de los tres números es: ${a1}`);
} else if(b1 > a1 && b1 > c1){
  console.log(`El mayor de los tres números es: ${b1}`);
} else {
  console.log(`El mayor de los tres números es: ${c1}`);
}

//Ejercicio 2
console.log("Ejercicio 2");
let numeroIngresado = prompt("Ingresa un numero y te dire si es par o impar");
if (numeroIngresado % 2 == 0) {
  console.log(`El número ${numeroIngresado}, es par`);
} else {
  console.log(`El número ${numeroIngresado}, es impar`);
}

//3. OPERADORES DE ASIGNACION Y BUCLES
console.log("3. OPERADORES DE ASIGNACION Y BUCLES");
//Ejercicio 1
console.log("Ejercicio 1");
let nroWhile = 10;
while (nroWhile !== 0) {
  console.log(nroWhile);
  nroWhile -=1;
}

//Ejercicio 2
console.log("Ejercicio 2");
let nroDoWhile;
do {
  nroDoWhile = prompt("Ingresa un número mayor a 100:");
} while (nroDoWhile <= 100);

console.log(`Ingresaste un número mayor a 100: ${nroDoWhile}`);

//4. FUNCIONES DE JAVASCRIPT
console.log("4. FUNCIONES DE JAVASCRIPT");
//Ejercicio 1
console.log("Ejercicio 1");
const esPar = (nroIngresado) =>{
  if (nroIngresado % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let nroPar = 8;
let nroImpar = 7;
console.log(`El número ${nroPar} es par: ${esPar(nroPar)}`);
console.log(`El número ${nroImpar} es par: ${esPar(nroImpar)}`);

//Ejercicio 2
console.log("Ejercicio 2");
const convertirCelsiusAFahrenheit = (gradosCelsius) =>{
  let gradosFahrenheit = (gradosCelsius * 1.8) + 32;
  console.log(`${gradosCelsius}°C son equivalentes a ${gradosFahrenheit}°F`);
}
convertirCelsiusAFahrenheit(30);

//5. OBJETOS EN JAVASCRIPT
console.log("5. OBJETOS EN JAVASCRIPT");
//Ejercicio 1
console.log("Ejercicio 1");
let persona = {
  nombre: "Ana",
  edad: 20,
  ciudad: "Madrid",

  cambiarCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
}
};
persona.cambiarCiudad("Barcelona");
console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);

//Ejercicio 2
console.log("Ejercicio 2");
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  anio: 1957,

  esAntiguo: function() {
    let añoActual = new Date().getFullYear;
    let diferencia = añoActual - this.anio;
    
    if (diferencia > 10) {
        console.log(`El libro "${this.titulo}" es antiguo: ${true}`);
    } else {
        console.log(`El libro "${this.titulo}" es antiguo: ${false}`);
    }
}
};
libro.esAntiguo();

//6. ARRAYS
console.log("6. ARRAYS");
//Ejercicio 1
console.log("Ejercicio 1");
let numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosDuplicados = numeros.map((num) =>{
  return num * 2;
});
console.log(`Números originales: ${numeros}`);
console.log(`Números multiplicados por 2: ${numerosDuplicados}`);

//Ejercicio 2
console.log("Ejercicio 2");
let pares = [];
for (let i = 1; i <= 20; i++) {
  if(esPar(i)){
    pares.push(i);
  }
}
console.log(`Primeros 10 números pares: ${pares}`);

//7. INTRODUCCION AL DOM
console.log("7. INTRODUCCION AL DOM");
//Ejercicio 1
let button = document.getElementById("buttonColor");
let text = document.getElementById("pText");
const handleButton = () =>{
  if(button.classList.contains('buttonBlue')){
      button.classList.remove('buttonBlue');
      button.classList.add('buttonBlack');
  } else {
    button.classList.remove('buttonBlack');
    button.classList.add('buttonBlue');
  }
};
const handleText = () =>{
  if(text.classList.contains('textBlue')){
      text.classList.remove('textBlue');
  } else {
    text.classList.add('textBlue');
  }
}
button.addEventListener("click", () =>{
  handleButton();
  handleText();
});
//Ejercicio 2
let buttonForm = document.getElementById("buttonForm");
buttonForm.addEventListener("click", () =>{
  let inputForm = document.getElementById("inputForm").value;
  alert(`Has ingresado: ${inputForm}`);
});
//8. EVENTOS EN DOM
console.log("8. EVENTOS EN DOM");
//Ejercicio 1
console.log("Ejercicio 1");
const liElements = document.querySelectorAll("li");
liElements.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.textContent);
  });
});

//Ejercicio 2
console.log("Ejercicio 2");
const input = document.getElementById("input");
const disabledbutton = document.getElementById("disabledButton");
const enabledButton = document.getElementById("enabledButton");
disabledbutton.addEventListener('click', () => {
    input.disabled = true;
    disabledbutton.disabled = true;
    enabledButton.disabled = false;
});
enabledButton.addEventListener('click', () => {
    input.disabled = false;
    enabledButton.disabled = true;
    disabledbutton.disabled = false;
});
enabledButton.disabled = true;

//9. LOCALSTORAGE
console.log("9. LOCALSTORAGE");
//Ejercicio 1

let buttonEmail = document.getElementById("buttonEmail");
buttonEmail.addEventListener(("click"), ()=>{
  let inputEmail = document.getElementById("inputEmail").value;
  localStorage.setItem("correo", JSON.stringify(inputEmail));
});

const renderEmail = () => {
  const result = localStorage.getItem("correo");
  console.log("LOCAL STORAGE");
  if(result){
      console.log(JSON.parse(result))
  } else {
      console.log("Los datos no existen en el LocalStorage")
  }
  if (result !== null){
    (document.getElementById("savedEmail")).innerHTML = `
    <p>
      Correo guardado: ${JSON.parse(result)}
    </p>
    <button id="buttonDelete" class="buttonBlack">
      Eliminar Correo Guardado
    </button> 
    `
  }
}
renderEmail();

let buttonDelete = document.getElementById("buttonDelete");
buttonDelete.addEventListener(("click"), () =>{
  localStorage.clear();
  console.log('LocalStorage ha sido eliminado.');
});