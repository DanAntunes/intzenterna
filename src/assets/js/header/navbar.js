$(document).ready(() => {
  let hideTimeout;
  const mobileBreakpoint = 992;
  const MOBILE_HIDE_DELAY = 2000;
  const DESKTOP_HIDE_DELAY = 3000;
  const $navbar = $('#mainNavbar');

  // Função para exibir o navbar
  const showNavbar = () => $navbar.removeClass('navbar-hidden');

  // Função para ocultar o navbar (somente se não estiver no topo)
  const hideNavbar = () => {
    if ($(window).scrollTop() > 0) {
      $navbar.addClass('navbar-hidden');
    }
  };

  // Evento de scroll: comportamentos distintos para mobile e desktop
  $(window).on('scroll', () => {
    clearTimeout(hideTimeout);
    const isMobile = $(window).width() < mobileBreakpoint;

    if (isMobile) {
      // Mobile: mostra o navbar e oculta após o atraso definido
      showNavbar();
      hideTimeout = setTimeout(hideNavbar, MOBILE_HIDE_DELAY);
    } else {
      // Desktop: se estiver no topo, mostra; caso contrário, oculta e agenda para ocultar novamente
      if ($(window).scrollTop() === 0) {
        showNavbar();
      } else {
        $navbar.addClass('navbar-hidden');
        hideTimeout = setTimeout(hideNavbar, DESKTOP_HIDE_DELAY);
      }
    }
  });

  // Evento de movimento do mouse (apenas para desktop)
  $(document).mousemove((e) => {
    if ($(window).width() >= mobileBreakpoint && e.clientY < 50) {
      showNavbar();
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(hideNavbar, DESKTOP_HIDE_DELAY);
    }
  });

  // Evita que o timer ocultar o navbar quando o usuário interage com ele (hover)
  $navbar.on('mouseenter', () => {
    clearTimeout(hideTimeout);
    showNavbar();
  }).on('mouseleave', () => {
    hideTimeout = setTimeout(hideNavbar, DESKTOP_HIDE_DELAY);
  });
});
