const mostrar = window.document.querySelector('.resultado');

function valores(n) {
  mostrar.innerHTML += n;
}

function calcular() {
  const res = document.querySelector('.resultado').innerHTML;

  if (mostrar) {
    mostrar.innerHTML = eval(res);
  } else {
    mostrar.innerHTML = 'esta errado';
  }
}

function apaga() {
  const resul = window.document.querySelector('.resultado').innerHTML;
  document.querySelector('.resultado').innerHTML = resul.substring(0, resul.length - 1);
}

function clean() {
  mostrar.innerHTML = '';
}
