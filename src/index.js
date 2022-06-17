import './styles/main.scss'
import metallica from './assets/metallica.jpg'
import homeTab from './homeTab'
import contactTab from './contactTab'
import menuTab from './menuTab'

homeTab()

function clearTab() {
    content.innerHTML = '' 
}

const content = document.querySelector('#content')
const homeBtn = document.querySelector('#home-btn')
const menuBtn = document.querySelector('#menu-btn')
const contactBtn = document.querySelector('#contact-btn')

homeBtn.addEventListener('click', () => {
    clearTab();
    homeTab();
})

menuBtn.addEventListener('click', () => {
    clearTab();
    menuTab();
})

contactBtn.addEventListener('click', () => {
    clearTab();
    contactTab();
})

