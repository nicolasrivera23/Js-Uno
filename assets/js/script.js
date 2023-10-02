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
