import './styles/main.scss'
import metallica from './assets/metallica.jpg'
import jollof from './assets/jollof.jpg'
import pancake from './assets/pancake.jpg'
import grilledchicken from './assets/grilledchicken.jpg'
import restaurant from './assets/restaurant.jpg'
import avatar from './assets/avatar.jpg'
import homeTab from './homeTab'
import contactTab from './contactTab'
import menuTab from './menuTab'

homeTab()

function clearContent() {
    content.innerHTML = ''
}

const content = document.querySelector('#content')
const homeBtn = document.querySelector('#home-btn')
const menuBtn = document.querySelector('#menu-btn')
const contactBtn = document.querySelector('#contact-btn')


homeBtn.addEventListener('click', () => {
    clearContent();
    homeTab();
})

menuBtn.addEventListener('click', () => {
    clearContent();
    menuTab();
})

contactBtn.addEventListener('click', () => {
    clearContent();
    contactTab();
})
