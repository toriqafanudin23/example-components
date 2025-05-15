const button = document.getElementById('menu-button');
const menu = document.getElementById('dropdown-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('show');
  const expanded = button.getAttribute('aria-expanded') === 'true' || false;
  button.setAttribute('aria-expanded', !expanded);
});

window.addEventListener('click', (e) => {
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('show');
    button.setAttribute('aria-expanded', false);
  }
});
