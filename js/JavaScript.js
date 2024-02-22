const img = document.getElementById('img');
const contagem = document.getElementById('contagem');

let cliquesDuplos = 0;

img.addEventListener('dblclick', () => {
  cliquesDuplos++;
  contagem.textContent = `${cliquesDuplos} curtida(s) para o gatinho`;
});