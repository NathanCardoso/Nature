const activeLink = () => {
  const article = $('article')

  article.each(function () {
    let height = $(this).height()
    let offsetTop = $(this).offset().top
    let headerHeight = $('.header').innerHeight()
    let id = $(this).attr('id')
    let itemMenu = $('a[href="#' + id + '"]')

    $(window).on('scroll', function () {
      let scrollTop = $(window).scrollTop()
      if ((offsetTop - headerHeight <= scrollTop) && (offsetTop + height - headerHeight >= scrollTop)) {
        itemMenu.addClass('active')
      } else {
        itemMenu.removeClass('active')
      }
    })
  })
}