const INPUT_BUSCA = document.getElementById('input-busca');
const SIS = document.getElementById('Sistemas da Informação');

INPUT_BUSCA.addEventListener('keyup', () => {
 let expressao = INPUT_BUSCA.value.toLowerCase(); // Corrigido para acessar o valor do campo de entrada

 if (expressao.length === 1) {
  return;
 }

 let linhas = sis.getElementsByTagName('tr');

 for (let posicao in linhas) {
  if (isNaN(posicao)) {
   continue;
  }
  let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

  if (conteudoDaLinha.includes(expressao)) {
   linhas[posicao].style.display = '';
  } else {
   linhas[posicao].style.display = 'none';
  }
 }
});