  //constante
  const PI = 3.1416;
function preguntarNombre() {
  //declaramos una variable y le asignamos el valor que el usuario ingresa en el prompt
  let entrada = prompt('Ingresa tu nombre');

  //no recomendado
  variableSinTipo = 3;


  //invocamos al método/función alert que muestra el nombre almacenado en la variable
  alert('Bienvenido/a ' + entrada);

  //mostrar en consola el valor de la variable entrada
  console.log(entrada);
  console.log(variable);
}

function otraFuncion() {
  let cadena = 'Hola Javascript';
  let numero = 23;
  let booleano = true;
  let objeto = {
    nombre : 'Nombre',
    apellido : 'Apellido'
  }


  entrada2 = 33;
  console.log(objeto);
}

let entrada2 = "Hoisting";

function convertirMay() {

  let cadena = document.getElementById("par_str").innerHTML;
  alert(cadena);
  alert(cadena.toUpperCase());
  console.log(cadena.toLowerCase());
}

function contarCaracteres () {
  let cantidad = document.getElementById("par_str").innerHTML.toLowerCase().length;
  console.log(cantidad);
}

function repetido () {
  let texto = document.getElementById("par_str").innerHTML.repeat(3);
  console.log(texto);
}

function reemplazar () {
  let texto = document.getElementById("par_str").innerHTML.replace("sarasa", "lorem");
  console.log(texto);
}

function parsear() {

  //Creo las variables del tipo String y le asigno un valor mediante el operador =
  let numero1 = "44";
  let numero2 = "44asd3";
  let numero3 = "3.14F";

  //declaramos variables del tipo let para guardar el valor númerico 
  //que obtenemos luego de transformar el string a número 
  //mediante el método de JS parseInt
  let nro1 = parseInt(numero1);
  let nro2 = parseInt(numero2);
  let nro3 = parseFloat(numero3);

  //
  console.log("numero1 : '44' - valor: " + nro1);
  console.log("numero2 : '44asd3' - valor: " + nro2);
  console.log("numero3 : '3.14F' - valor: " + nro3);

  console.log("Number de '44' : " + Number(numero1));
  console.log("Number de '44asd3' : " + Number(numero2));
}

function oper() {
  let nro1 = 20;
  let nro2 = 8;

  let total = nro1 + nro2;
  console.log("La suma de nro1 + nro2 = " + total);

  total = nro1 - nro2;
  console.log("La resta de nro1 - nro2 = " + total);

  total = nro1 * nro2;
  console.log("La multiplicación del nro1 x nro2 = " + total);

  total = nro1 / nro2;
  console.log("La división del nro1 por el nro2 es de = " + total);

  total = nro1 % nro2;
  console.log("El módulo de la división de nro1 x nro2 = " + total);

}


function asignacion() {

  let numero = 15;
  numero += 10;
  console.log("Adición: " + numero);

  numero = 15;

  numero -= 10;
  console.log("Sustracción: " + numero);

  //Tarea hacer las demás operaciones * - / - % - **


}

function agrandarTexto() {
  document.getElementById('demo').style.fontSize='35px';
  document.getElementById('demo').style.color='green';
}

function preguntar() {
  //función prompt() sirve para mostrar una caja de texto en el navegador
  //para que el visitante ingrese algún dato( el nombre )
  let nombre = prompt("Cuál es tu nombre?");


  //función alert para que muestre el mensaje de bienvenida
  //junto con nuestro nombre.
  alert("Bienvenido/a: " + nombre);

  //enviamos la variable nombre a la consola para que me muestre su valor.
  console.log("Valor de la variable nombre: " + nombre);

}

function variables() {
  nombre = 'Julián';
  var numero = 23;

  let nombre2 = 'Julio';
  console.log(nombre2);

  nombre2 = 'Julieta';
  console.log(nombre2);

  const PI = 3.14;
  console.log(PI);

  PI = 3.15;
  console.log(PI);
}

function tipos() {
  let numero = 23;
  //console.log(numero);
  let cadena = "texto de ejemplo";
  //console.log(cadena);
  let esMayor = true;
  //console.log(esMayor);
  let dt = {
    nombre : "Leonel",
    apellido : "Scaloni",
    edad : 33
  }
  alert(numero);
  console.log(numero);
}

function cadena() {
  let cantidad = document.getElementById('texto').innerHTML.length;
  console.log("La cantidad de caracteres del párrafo es de: " + cantidad);
}

function mayusculas() {
  let may = document.getElementById('texto').innerHTML.toUpperCase();
  console.log(may);
}

function compar() {

  let comp1 = 12 > 10;
  console.log("12 > 10 ? : " + comp1);

  let comp2 = 6 < 10;
  console.log("6 < 10 ? : " + comp2);

  let res1 = 125 >= 125;
  let res2 = 10 <= 10;

  console.log("125 >= 125 ? : " + res1);
  console.log("10 <= 10 ? : " + res2);

  let re = '10' == 10;
  console.log("10 string es igual a 10 numérico? : " + re);

  let re2 = '20' != 20;
  console.log("20 string es distinto a 20 numérico? : " + re2);

  let r1 = 10 === 10;
  console.log("10 n es igual a 10 n? : " + r1);

  let r2 = 20 !== 'Hola';
  console.log("20 numérico es distinto a 'Hola' ? : " + r2 );
}


function incdec() {

  let nro = 10;

  console.log(++nro);

  let nro1 = 15;
  console.log(nro1++);
  console.log(nro1++);
  console.log(nro1++);
}

function log() {
  let nro1 = 12;
  let nro2 = 15;
  let nro3 = 22;

  //AND && Sólo devuelve true si todas las comparaciones son verdaderas
  let resultado = (nro1 < 12) && (nro3 >= 20);
  console.log("Operador && " + resultado);

  //|| OR Devuelve true si al menos una condición es verdadera
  let resultado2 = (nro1 < 12) || (nro3 >= 20);
  console.log("Operador || " + resultado2);

  //! Invierte el valor booleano asignado
  
  console.log("Operador NOT ! = " + !resultado2);
}

function iff() {

  //Dato Hardcodeado
  let edad = 18;

  if (edad >= 18) {
    console.log("Es mayor se puede inscribir")
    console.log("Sentencia booleana verdadera, entro en el if");
  } else {
    console.log("Es menor, no se puede inscribir")
    console.log("Sentencia booleana falsa, entro en el else");
  }
}

function ifelse() {
  if (10 > 6) {
    //se ejecuta solo si 10 es mayor que 6
    console.log("Bloque if");
  } else if(6 < 7) {
    //se ejecuta si el if es falso y si la condición booleana se cumple
    console.log("Bloque if-else");
  } else {
    //se ejecuta si los demas bloques anteriores son falsos
    console.log("Bloque else")
  }
}

function swi() {
  let condition = 'blue';

  switch(condition) {

    case 'red':
      console.log("El jean es rojo");
      break;
    case 'blue':
      console.log("El jean es azul");
      break;
    case 'yellow':
      console.log("El jean es amarillo");
      break;
    default:
      console.log("No tengo de ese color");
      break;
  }
}

//Sentencia simplificada del bloque if / else
function ter() {
  let valor = 23;
  let resultado = valor >= 13 ? 'Es mayor que 13' : 'Es menor que 13';
  console.log(resultado);
}

function fort() {
  // 1. declaramos una var y la inicializamos en cero
  // 2. El bucle se ejecuta mientras i sea menor a 10
  // 3. Incremento la variable en una unidad.
  for(let i = 0; i < 10; i++) {
    console.log("El valor de i es : " + i);
  }
}

function whi() {
  let condicion = Number(prompt('1. Ver Saldo\n 0. Salir'));
  while(condicion != 0) {
    switch(condicion) {
      case 1:
        alert('Su saldo es de 0.00$ . Estás más pobre que el chavo');
        condicion = 0;
        break;
      default :
      alert('La opción es incorrecta vuelva a elegir');
      break;
    }
    condicion = Number(prompt('1. Ver Saldo\n 0. Salir'));
  }
}

function suma() {
  console.log("Suma llamada desde el Event Listener = " + (30 + 5) );
}

function encimaCursor() {
  console.log("Encima del elemento " + typeof(x));
}

function fueraCursor() {
  console.log("Fuera del elemento " + typeof(x));
  
}

function msjKeyPress() {
  alert("Se presionó una tecla");
}


var x = document.getElementById('evhand');
x.addEventListener("click", suma);
x.addEventListener("mouseover", encimaCursor);
x.addEventListener("mouseout" , fueraCursor);


document.addEventListener(
  "keypress", msjKeyPress
);


function funex() {

  //declaramos una variable del tipo let con el nombre resultado
  // y le asigamos el valor de lo que me devuelve la función.
  let resultado = function (a , b) {
    return a + b;
  }

  console.log(resultado(11, parseInt('22')));

}

function nuevaFuncion() {

  funex();
  //Sigue el algoritmo

}

function ret() {
  let nombre = 'Julio';
  let apellido = 'Verne';
  let bienvenida = "Bienvenid@ " + apellido + ", " + nombre;
  return bienvenida;
}

function bienvenida() {
  console.log("Ingresaste correctamente al sistema..");
  console.log(ret());
}

function params(a, b) {
  let resultado = a + b;
  console.log(resultado);
  return resultado;
}

let resultado = (a, b) => {
  console.log(a + b);
}



