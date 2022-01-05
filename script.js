const hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.close'),
      logo = document.querySelector('.logo'),
      toggle = document.querySelector('.toggle'),
      headerNav = document.querySelector('.header-nav')


hamburger.addEventListener('click', () => {
    hamburger.classList.add('disappear')
    close.classList.remove('disappear')
    toggle.style.position = 'fixed'
    logo.style.position = 'fixed'
    toggle.classList.add('fixed')
    headerNav.classList.remove('disappear-2')
})

close.addEventListener('click', () => {
    hamburger.classList.remove('disappear')
    close.classList.add('disappear')
    toggle.style.position = 'relative'
    logo.style.position = 'unset'
    toggle.classList.remove('fixed')
    headerNav.classList.add('disappear-2')
})