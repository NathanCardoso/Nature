const scrollAnimate = () => {
  const target = $('[data-anime="scroll"]')
  const animationClass = 'animate'
  const offset = $(window).height() * 3 / 4


  function animeScroll() {
    let documentTop = $(document).scrollTop()

    target.each(function () {
      let itemTop = $(this).offset().top
      console.log(itemTop)
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass)
      } else {
        $(this).removeClass(animationClass)
      }
    })
  }

  animeScroll()

  $(document).scroll(function () {
    animeScroll()
  })
}