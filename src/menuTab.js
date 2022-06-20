import metallica from './assets/metallica.jpg'
import jollof from './assets/jollof.jpg'
import pancake from './assets/pancake.jpg'
import grilledchicken from './assets/grilledchicken.jpg'

function menuTab () {
    const content = document.querySelector('#content')

    const section = document.createElement('div')
    section.classList.add('menu-tab')

    const menu1 = document.createElement('div')
    const jollofRice = document.createElement('img')
    jollofRice.classList.add('menu-img')
    jollofRice.src = jollof
    section.appendChild(jollofRice)

    const para = document.createElement('h3')
    para.textContent =  'Nigerian Jollof Rice'
    section.appendChild(para)

    const sub = document.createElement('h3')
    sub.textContent =  'N2,500'
    section.appendChild(sub)

    const grilledChicken = document.createElement('img')
    grilledChicken.classList.add('menu-img')
    grilledChicken.src = grilledchicken
    section.appendChild(grilledChicken)

    const para1 = document.createElement('h3')
    para1.textContent =  'Spicy Grilled Chicken'
    section.appendChild(para1)

    const sub1 = document.createElement('h3')
    sub1.textContent =  'N4,500'
    section.appendChild(sub1)

    const panCake = document.createElement('img')
    panCake.classList.add('menu-img')
    panCake.src = pancake
    section.appendChild(panCake)

    const para2 = document.createElement('h3')
    para2.textContent =  'Spicy Grilled Chicken'
    section.appendChild(para2)

    const sub2 = document.createElement('h3')
    sub2.textContent =  'N4,500'
    section.appendChild(sub2)


    content.appendChild(section)

    content.appendChild(section)
}

export default menuTab