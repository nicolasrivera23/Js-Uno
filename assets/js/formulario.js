function suma() {
  //Dos variables que extraen los valores de dichos elementos(campos numéricos)
  let n1 = document.getElementById('numero1').value;
  let n2 = document.getElementById('numero2').value;

  console.log(parseInt(n1) + parseInt(n2));

  let resultado = parseInt(n1) + parseInt(n2)

  //insertar resultado en el nodo span con id = total
  document.getElementById('total').innerText = resultado;

}

function limpiar() {
  document.getElementById('total').innerHTML = '';
  document.getElementById('form_id').reset();
}

var x = document.getElementById('btnSumar');
x.addEventListener('click', suma);


var y = document.getElementById('btnLimpiar');
y.addEventListener('click', limpiar);