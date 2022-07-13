const smoothScroll = () => {
  const navigation = $('.navigation a[href^="#"]')
  navigation.on('click', function (e) {
    e.preventDefault()

    let id = $(this).attr('href')
    let headerHeight = $('.header').innerHeight()
    let targetOffset = $(id).offset().top
    const html = $('html, body')

    html.animate({
      scrollTop: targetOffset - headerHeight
    }, 500)
  })

  const logo = $('.logo')
  logo.on('click', function(e) {
    e.preventDefault()
    const html = $('html, body')

    html.animate({
      scrollTop: 0 
    }, 500)
  })
}