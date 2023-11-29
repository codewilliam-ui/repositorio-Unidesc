const dropdown = document.querySelector('.wrapper .search_box .dropdown');
const dropdownList = document.querySelector('.wrapper .search_box .dropdown ul');
const defaultOption = dropdown.querySelector('.default_option');

dropdown.addEventListener('click', function(event) {
 if (event.target.tagName === 'LI') {
  // Se um item da lista for clicado, atualiza o texto do .default_option e fecha o dropdown
  const selectedText = event.target.textContent.toLowerCase();
  defaultOption.textContent = selectedText.charAt(0).toUpperCase() + selectedText.slice(1);
  dropdownList.classList.remove('active');
 } else {
  // Se o dropdown estiver visível, esconde-o
  if (dropdownList.classList.contains('active')) {
   dropdownList.classList.remove('active');
  } else {
   // Se o dropdown estiver escondido, mostra-o
   dropdownList.classList.add('active');
  }
 }
});

document.addEventListener('click', function(event) {
 // Esconde o dropdown se o clique for fora dele
 if (!dropdown.contains(event.target) && dropdownList.classList.contains('active')) {
  dropdownList.classList.remove('active');
 }
});