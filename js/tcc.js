document.addEventListener("DOMContentLoaded", function() {
 // Extrair parâmetros da URL
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);

 // Obter os valores dos parâmetros da URL
 const titulo = urlParams.get('titulo');
 const autor = urlParams.get('autor');
 const data = urlParams.get('data');
 const orientador = urlParams.get('orientador');
 const palavraChave = urlParams.get('palavraChave');
 const citacao = urlParams.get('citacao');
 const resumo = urlParams.get('resumo');
 const abstract = urlParams.get('abstract');
 const pdfLink = urlParams.get('pdfLink');

 // Preencher os elementos HTML com os valores dos parâmetros
 document.querySelector('.td titulo').textContent = titulo;
 document.querySelector('.td autor').textContent = autor;
 document.querySelector('.td orientador').textContent = orientador;
 document.querySelector('.td data').textContent = data;
 document.querySelector('.td palavra-chave').textContent = palavraChave;
 document.querySelector('.text-cit').textContent = citacao;
 document.querySelector('.text-resum').textContent = resumo;
 document.querySelector('.text-abst').textContent = abstract;
 document.querySelector('.pdf a').href = pdfLink;
});