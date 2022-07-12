const tabNav = () => {
  let group = $('[data-group]')

  group.each(function() {
    let allClick = $(this).find('[data-click]')
    let allTarget = $(this).find('[data-target]')
    const activeClass = 'active'

    allTarget.first().addClass(activeClass)
    allClick.first().addClass(activeClass)

    allClick.on('click', function(e) {
      e.preventDefault()

      let id = $(this).data('click')
      let target = $('[data-target="'+ id +'"]')

      allClick.removeClass(activeClass)
      allTarget.removeClass(activeClass)

      target.addClass(activeClass)
      $(this).addClass(activeClass)
    })
  })
}