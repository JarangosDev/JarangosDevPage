var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute("tema", "dark");
  } else {
    document.documentElement.setAttribute("tema", "light");
  }
}
colorSwitch.addEventListener("change", cambiaTema);

function sumar() {
  let num1;
  let num2;
  let resultado;
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  resultado = parseInt(num1) + parseInt(num2);
  document.getElementById("result3").innerHTML = resultado;
  document.getElementById(
    "exampleModalLabel"
  ).innerHTML = `El resultado de sumar ${num1} + ${num2} es:`;
  
}

function restar() {
  let num1;
  let num2;
  let resultado;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  resultado = parseInt(num1) - parseInt(num2);
  document.getElementById(
    "exampleModalLabel"
  ).innerHTML = `El resultado de restar ${num1} - ${num2} es:`;
  document.getElementById("result3").innerHTML = resultado;
}

function multiplicar() {
  let num1;
  let num2;
  let resultado;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  resultado = parseInt(num1) * parseInt(num2);
  document.getElementById(
    "exampleModalLabel"
  ).innerHTML = `El resultado de muliplicar ${num1} por ${num2} es:`;
  document.getElementById("result3").innerHTML = resultado;
}

function divivir() {
  let num1;
  let num2;
  let resultado;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  resultado = parseInt(num1) / parseInt(num2);
  document.getElementById(
    "exampleModalLabel"
  ).innerHTML = `El resultado de dividir ${num1} entre ${num2} es:`;
  document.getElementById("result3").innerHTML = resultado;
}
function modular() {
  let num1;
  let num2;
  let resultado;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  resultado = parseInt(num1) % parseInt(num2);
  document.getElementById(
    "exampleModalLabel"
  ).innerHTML = `El resultado de modular ${num1} entre ${num2} es:`;
  document.getElementById("result3").innerHTML = resultado;
}

function potenciar() {
  let num1;
  let num2;
  let resultado;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  resultado = Math.pow(parseInt(num1), parseInt(num2));
  document.getElementById(
    "exampleModalLabel"
  ).innerHTML = `El resultado de potenciar ${num1} a ${num2} es:`;
  document.getElementById("result3").innerHTML = resultado;
}
function imc() {
  let peso;
  let altura;
  let resultado;
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  resultado = parseInt(peso) / ((parseInt(altura)/100)**2);
  document.getElementById("result2").value = resultado.toFixed(1);
  if(resultado<18.5){
    document.getElementById("result2").innerHTML = `Su composición comporal es: Peso inferior al normal.`;

  }if (resultado>=18.5 && resultado<24.9) {
    document.getElementById("result2").innerHTML = `Su composición comporal es: Normal.`;
  } else if(resultado>=24.9 && resultado<30){
    document.getElementById("result2").innerHTML = `Su composición comporal es: Peso superior al normal.`;
  }else{
    document.getElementById("result2").innerHTML = `Su composición comporal es: Obesidad.`;
  }
}
