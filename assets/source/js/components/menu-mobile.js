const menuMobile = () => {
    const btnMobile = $('.btn-mobile')

    function toggleMenu() {
        const navigation = $('.nav')
        navigation.toggleClass('active')
    }

    btnMobile.on('click', toggleMenu)
}