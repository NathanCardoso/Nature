const slide = () => {
  const bannerFirst = $('.banner > :first')
  const banner = $('.banner')
  let rotate

  bannerFirst.addClass('active')
  function rotateSlide () {
    let activeSlide = $('.banner-image.active')
    let nextSlide = activeSlide.next()

    nextSlide.length == 0 ? nextSlide = bannerFirst : ''
    activeSlide.removeClass('active')
    nextSlide.addClass('active')
  }
  rotate = setInterval(rotateSlide, 2000)

  banner.on('mousemove', function() {
    clearInterval(rotate)
  })

  banner.on('mouseout', function() {
    rotate = setInterval(rotateSlide, 2000)
  })
}