const menuMobile = document.querySelector('.menu-mobile');
const headerNav = document.querySelector('.header-nav');
const introducao = document.querySelector('.introducao');

function abrirMenu() {
  const alturaMenu = headerNav.offsetHeight;
  introducao.style.marginTop = alturaMenu + 'px';
}

function fecharMenu() {
  introducao.style.marginTop = '0px';
  headerNav.classList.remove('ativo');
  menuMobile.classList.remove('ativo');
  menuMobile.setAttribute('aria-expanded', false);
}

menuMobile.addEventListener('click', () => {
  const menuAberto = headerNav.classList.contains('ativo');

  if (menuAberto) {
    fecharMenu();
  } else {
    headerNav.classList.add('ativo');
    menuMobile.classList.add('ativo');
    menuMobile.setAttribute('aria-expanded', true);
    abrirMenu();
  }
});

document.querySelectorAll('.header-menu a').forEach((link) => {
  link.addEventListener('click', fecharMenu);
});