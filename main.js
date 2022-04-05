import './style.css';
import perguntas from './perguntas.js';
console.log(perguntas);
click.addEventListener('click', valida);
let i = -1;
let pergunta = perguntas[i];
proxima();
function valida() {
  const valor = input.value;
  console.log(valor, pergunta);

  if (valor === pergunta.answer) {
    emoji.innerText = '🤩';
    texto.innerText = pergunta.award;
    proxima();
  } else {
    texto.innerText = pergunta.hint;
    emoji.innerText = '😭';
  }
}

function proxima() {
  i = (i + 1) % perguntas.length;
  pergunta = perguntas[i];
  label.innerText = pergunta.question;
}
