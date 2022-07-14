const menuMobile = () => {
  const btnMobile = $('.btn-mobile')

  function toggleMenu() {
    const menu = $('.menu')

    btnMobile.toggleClass('active')
    menu.toggleClass('active')
    btnMobile.hasClass('active') ? $(this).attr('aria-expanded', true) : $(this).attr('aria-expanded', false)
    btnMobile.hasClass('active') ? $(this).attr('aria-label', 'fechar menu') : $(this).attr('aria-label', 'abrir menu')

  }

  btnMobile.on('touchstart', toggleMenu)
}