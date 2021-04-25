// ==========show menu ==============

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// ===== REMOVE MENU MOBILE =====

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// =============change background header ============

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrolly >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// ======show scrolltop =========
function scrollTop(){
    const scrolltop = document.getElementById('scroll-top')

    if(this.scrolly >=560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scroll-top)


// // =========== Dark light theme ============

// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'

// //previsouly selected topic
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light' 
// const getCurrentTheme = () => document.body.classList.contains(iconTheme) ? 'bx-moon':'bx-sun' 

// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark' ?'add' :  'remove'](darkTheme)
//     document.body.classList[selectedTheme === 'bx-moon' ?'add' :  'remove'](iconTheme)
// }

// // activate / deactivate the theme manually 
// themeButton.addEventListener('click',()=>{
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)

//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })
