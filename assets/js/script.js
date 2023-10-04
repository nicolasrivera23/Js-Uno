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
  let numero1 = "44";
  let numero2 = "44asd3";

  let nro1 = parseInt(numero1);
  let nro2 = parseInt(numero2);

  console.log("numero1=44 - valor: " + nro1);
  console.log("numero2=44asd3 - valor: " + nro2);

  console.log("Number de 44 : " + Number(numero1));
  console.log("Number de 44asd3 : " + Number(numero2));
}
