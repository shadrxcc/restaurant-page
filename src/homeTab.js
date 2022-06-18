import restaurant from './assets/restaurant.jpg'

function homeTab() {
    const content = document.querySelector('#content')

    content.replaceChildren()

    const section = document.createElement('div')
    section.classList.add('home')

    const h1 = document.createElement('h1')
    h1.textContent = 'EasyChow'
    h1.classList.add('main')
    section.appendChild(h1)

    const landpage = document.createElement('img')
    landpage.classList.add('home-img')
    landpage.src = restaurant
    section.appendChild(landpage)

    const h3 = document.createElement('h3')
    h3.textContent = 'Your spicy and yummy meals the way you have never had it before!'
    h3.classList.add('p')
    section.appendChild(h3)

    content.appendChild(section)
}

export default homeTab