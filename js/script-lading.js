function ajustarCabecalhoFixo() {
 const headerSocial = document.querySelector('.header-social');
 const headerFixed = document.querySelector('.header-fixed');

 // Altura do cabeçalho social
 const headerSocialHeight = headerSocial.offsetHeight;

 if (window.pageYOffset > headerSocialHeight) {
  headerFixed.style.position = 'fixed';
  headerFixed.style.top = '0';
 } else {
  headerFixed.style.position = 'static'; // Alterado de 'absolute' para 'static'
 }
}

// Adicionar um ouvinte de evento para a rolagem da página
window.addEventListener('scroll', ajustarCabecalhoFixo);

// Chamar a função inicialmente para configurar o estado inicial
ajustarCabecalhoFixo();